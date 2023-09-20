"use client";

import { addProduct, editProduct } from "@/api";
import { ProductType } from "@/types/product";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  product?: ProductType;
};

const initialProduct = {
  id: 0,
  title: "",
  description: "",
  image: "",
  price: null,
  category: "electronics",
};

const ProductModal = ({ open, setOpen, product }: Props) => {
  const [productInfo, setProductInfo] = useState({} as ProductType);
  const router = useRouter();

  useEffect(() => {
    product && setProductInfo(product);
    !product && setProductInfo(initialProduct);
  }, [product]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (product) {
      await editProduct(productInfo);
    } else {
      await addProduct(productInfo);
      setProductInfo(initialProduct);
    }
    setOpen(false);
    router.refresh();
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setProductInfo({ ...productInfo, [name]: value });
  };

  const handleClose = () => {
    setOpen(false);
    setProductInfo(product || initialProduct);
  };

  return (
    <div className="">
      <dialog id="my_modal_2" className="modal" open={open}>
        <form className="modal-box" onSubmit={handleSubmit}>
          <div className=" flex flex-col gap-2">
            <input
              type="text"
              placeholder="Product Name"
              className="input input-bordered w-full font-bold"
              name="title"
              value={productInfo?.title || ""}
              onChange={handleChange}
              required
            />
            <input
              type="url"
              placeholder="Product Image URL"
              className="input input-bordered w-full font-semibold"
              name="image"
              value={productInfo?.image || ""}
              onChange={handleChange}
            />
            <textarea
              placeholder="Product Description"
              className="textarea textarea-bordered w-full font-semibold"
              rows={10}
              name="description"
              value={productInfo?.description || ""}
              onChange={handleChange}
              required
            ></textarea>

            <select
              name="category"
              className="select select-bordered w-full text-base font-semibold"
              value={productInfo?.category || ""}
              onChange={handleChange}
            >
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
            </select>

            <input
              type="text"
              placeholder="Product Price"
              className="input input-bordered w-full font-semibold"
              name="price"
              value={productInfo?.price || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-center">
            {product ? (
              <button className="btn btn-ghost mt-2">Edit</button>
            ) : (
              <button className="btn btn-ghost mt-2">Add</button>
            )}
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button onClick={handleClose}>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ProductModal;
