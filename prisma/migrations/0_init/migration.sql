-- No transaction handling needed in Postgres, it's implicit
-- CreateTable
CREATE TABLE "About" (
    "story" TEXT,
    "displayOrder" INTEGER NOT NULL,
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(200)
);
