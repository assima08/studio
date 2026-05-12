type ProductProps = {
    nom : string;
    price: number;
    image: string;
}

function ProduitCard({nom, price, image}: ProductProps) {
    return (
        <div className="productCard">
            <h2>{nom}</h2>
            <p>{price}</p>
            <img className="productImg" src={image} alt=""  width={200}/>
        </div>
    )
}

export default ProduitCard;