import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columms";
import AddTransactionButton from "../_components/add-transaction-button";
import Navbar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

// Esse arquivo é um Server Component -> Então não podemos usar useState, useEffect, onClick
// mas podemos chamar um client component dentro de um server component como estamos fazendo com o DataTable
const TransactionsPage = async () => {
  // validando se está autenticado ou não
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  // TODO acessar as transações do meu banco de dados
  // pegando todas as transasões que estão na tabela transaction
  // {} objeto vazio
  const transactions = await db.transaction.findMany({});

  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6">
        {/* TÍTULO E BOTÃO */}
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton />
        </div>

        <DataTable columns={transactionColumns} data={transactions} />
      </div>
    </>
  );
};

export default TransactionsPage;
