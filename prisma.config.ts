// Prisma 7+ reads datasource URLs from this config file, not from schema.prisma.
// Prisma CLI loads .env files via dotenv (see import below).
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Throws a clear error if DATABASE_URL is missing, instead of passing `undefined`.
    url: env("DATABASE_URL"),
  },
});


