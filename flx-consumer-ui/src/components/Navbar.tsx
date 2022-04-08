import React from "react";
import { useFetchCustomerInfoQuery } from "../features/customer/customer-info-rtk-slice";

function NavBar({ randomName }: any) {
  const { data, isFetching } = useFetchCustomerInfoQuery(1);
  return (
    <div className="flex items-end justify-end bg-gray-300 p-5">
      <p className="font-bold">{randomName ?? data?.firstName}</p>
    </div>
  );
}

export default NavBar;
