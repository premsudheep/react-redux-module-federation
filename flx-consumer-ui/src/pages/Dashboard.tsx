import React, { ReactElement } from "react";
import { useFetchCustomerInfoQuery } from "../features/customer/customer-info-rtk-slice";

function Dashboard() {
  const { data, isFetching } = useFetchCustomerInfoQuery(1);
  return (
    <div className="w-full flex items-center justify-center pt-28 flex-col space-y-2">
      <div>{`Hello ${data?.firstName}`}</div>
      <div>Here is your Dashboard</div>
    </div>
  );
}

export default Dashboard;
