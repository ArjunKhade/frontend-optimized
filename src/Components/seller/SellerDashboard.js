import React from "react";
import SellerMenuBar from "./SellerMenuBar";
import { useEffect } from "react";

const SellerDashboard = () => {
  useEffect(() => {}, []);

  return (
    <div className="row" style={{ height: "90vh" }}>
      <SellerMenuBar />

      <div className="col-7">
        <h1>
          Welcome{" "}
          <h1 className="">
            {JSON.parse(localStorage.getItem("data"))?.user?.name}
          </h1>
        </h1>
      </div>
    </div>
  );
};

export default SellerDashboard;
