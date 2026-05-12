// prisma.config.ts
import { defineConfig } from "prisma/config";
import "dotenv/config";

export default defineConfig({
  datasourceUrl: process.env.DATABASE_URL,
  migrate: {
    datasourceUrl: process.env.DATABASE_URL,
  },
});