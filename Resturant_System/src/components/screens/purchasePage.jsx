import React from "react";
import { Outlet } from "react-router-dom";
import PurchaseFunction from "../purchaseFunction";


const purchasePage = () => {
  return (
    <>
      {/* Render PurchaseFunction component */}
      <PurchaseFunction />
      {/* Outlet component acts as a placeholder for child routes */}
      <Outlet />
    </>
  );
};

export default purchasePage;