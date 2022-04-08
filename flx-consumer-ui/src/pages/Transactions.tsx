import React, { ReactElement } from "react";
import { useFetchTransactionInfoQuery } from "../features/transactions/transactions-slice";

function Transactions() {
  const { data, isFetching } = useFetchTransactionInfoQuery();

  const dispalyTransactions = data?.map((element: any) => {
    return (
      <tr key={element.id}>
        <td className="border px-8 py-4">{element.date}</td>
        <td className="border px-8 py-4">{element.description}</td>
      </tr>
    );
  });

  return (
    <div className="flex w-full items-center justify-center p-10">
      <div className="flex flex-col">
        <table className="table-auto bg-white shadow-lg">
          <thead>
            <tr>
              <th className="border bg-blue-100 px-8 py-4 text-left">Date</th>
              <th className="border bg-blue-100 px-8 py-4 text-left">
                Transaction
              </th>
            </tr>
          </thead>
          <tbody>{dispalyTransactions}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Transactions;
