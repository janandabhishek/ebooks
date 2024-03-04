import { Routes, Route } from "react-router-dom";
import { HomePage, ProductsList } from "../pages";

import React from "react";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
