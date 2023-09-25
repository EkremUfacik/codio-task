"use client";

import React, { useState } from "react";
import ProductModal from "../ProductModal";
import { ProductType } from "@/types/product";

const EditButton = ({ product }: { product: ProductType }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="btn btn-outline btn-success btn-xs"
        onClick={() => setOpen(true)}
      >
        Edit
      </button>
      {open && <ProductModal open={open} setOpen={setOpen} product={product} />}
    </div>
  );
};

export default EditButton;
