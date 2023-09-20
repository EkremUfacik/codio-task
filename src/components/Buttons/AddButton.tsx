"use client";

import React from "react";
import { useState } from "react";
import ProductModal from "../ProductModal";

const AddButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-center my-4">
      <button className="btn btn-outline" onClick={() => setOpen(true)}>
        Add Product
      </button>
      <ProductModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default AddButton;
