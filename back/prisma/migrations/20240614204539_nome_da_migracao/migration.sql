-- CreateTable
CREATE TABLE "precoPao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valorUnitario" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "fila_clientes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeCliente" TEXT NOT NULL,
    "quantidadePaes" INTEGER NOT NULL,
    "valorCompra" REAL NOT NULL,
    "precoPaoId" INTEGER NOT NULL,
    CONSTRAINT "fila_clientes_precoPaoId_fkey" FOREIGN KEY ("precoPaoId") REFERENCES "precoPao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
