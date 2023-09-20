"use client";

import { deleteProduct } from "@/api";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteButton = ({ id }: { id: number }) => {
  const router = useRouter();

  const handleDelete = async () => {
    await deleteProduct(id);
    router.refresh();
  };
  return (
    <button className="btn btn-outline btn-error btn-xs" onClick={handleDelete}>
      delete
    </button>
  );
};

export default DeleteButton;
