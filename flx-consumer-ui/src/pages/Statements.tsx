import React, { ReactElement, useEffect } from "react";
import { useFetchStatementInfoQuery } from "../features/statements/statements-slice";

function Statements() {
  const { data, isFetching } = useFetchStatementInfoQuery();

  const dispalyStatements = data?.map((element: any) => {
    return (
      <tr key={element.id}>
        <td className="border px-8 py-4">{element.statementPeriod}</td>
        <td className="cursor-pointer border px-8 py-4 underline">Download</td>
      </tr>
    );
  });

  return (
    <div className="flex w-full items-center justify-center p-10">
      <div className="flex flex-col">
        <table className="table-auto bg-white shadow-lg">
          <thead>
            <tr>
              <th className="border bg-blue-100 px-8 py-4 text-left">
                Statement
              </th>
              <th className="border bg-blue-100 px-8 py-4 text-left">
                Download
              </th>
            </tr>
          </thead>
          <tbody>{dispalyStatements}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Statements;
