-- CreateTable
CREATE TABLE "Client" (
    "numClient" SERIAL NOT NULL,
    "nomClient" TEXT NOT NULL,
    "prenomClient" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("numClient")
);

-- CreateTable
CREATE TABLE "Service" (
    "numService" SERIAL NOT NULL,
    "nomService" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("numService")
);

-- CreateTable
CREATE TABLE "Tarif" (
    "numTarif" SERIAL NOT NULL,
    "nomTarif" TEXT NOT NULL,
    "typeTarif" TEXT NOT NULL,
    "prixTarif" DOUBLE PRECISION NOT NULL,
    "dureeTarif" INTEGER NOT NULL,
    "numService" INTEGER NOT NULL,

    CONSTRAINT "Tarif_pkey" PRIMARY KEY ("numTarif")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "numReservation" SERIAL NOT NULL,
    "dateReservation" TIMESTAMP(3) NOT NULL,
    "statutReservation" TEXT NOT NULL,
    "numClient" INTEGER NOT NULL,
    "numTarif" INTEGER NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("numReservation")
);

-- CreateTable
CREATE TABLE "Expert" (
    "numExpert" SERIAL NOT NULL,
    "nomExpert" TEXT NOT NULL,
    "emailExpert" TEXT NOT NULL,
    "telephoneExpert" TEXT NOT NULL,

    CONSTRAINT "Expert_pkey" PRIMARY KEY ("numExpert")
);

-- CreateTable
CREATE TABLE "ExpertService" (
    "numExpert" INTEGER NOT NULL,
    "numService" INTEGER NOT NULL,

    CONSTRAINT "ExpertService_pkey" PRIMARY KEY ("numExpert","numService")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Expert_emailExpert_key" ON "Expert"("emailExpert");

-- AddForeignKey
ALTER TABLE "Tarif" ADD CONSTRAINT "Tarif_numService_fkey" FOREIGN KEY ("numService") REFERENCES "Service"("numService") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_numClient_fkey" FOREIGN KEY ("numClient") REFERENCES "Client"("numClient") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_numTarif_fkey" FOREIGN KEY ("numTarif") REFERENCES "Tarif"("numTarif") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpertService" ADD CONSTRAINT "ExpertService_numExpert_fkey" FOREIGN KEY ("numExpert") REFERENCES "Expert"("numExpert") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpertService" ADD CONSTRAINT "ExpertService_numService_fkey" FOREIGN KEY ("numService") REFERENCES "Service"("numService") ON DELETE RESTRICT ON UPDATE CASCADE;
