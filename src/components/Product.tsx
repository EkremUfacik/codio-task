import { ProductType } from "@/types/product";
import DeleteButton from "./Buttons/DeleteButton";
import React from "react";
import EditButton from "./Buttons/EditButtons";

const Product = ({ product }: { product: ProductType }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3 flex-col md:flex-row">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={
                  product.image ||
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/32px-Placeholder_view_vector.svg.png"
                }
                alt="image"
              />
            </div>
          </div>
          <div>
            <div className="font-bold text-xs sm:text-base">
              {product.title}
            </div>
          </div>
        </div>
      </td>
      <td className="text-xs sm:text-base">
        {product.description.slice(0, 100)}...
        <br />
        <span className="badge badge-ghost badge-xs sm:badge-sm font-semibold">
          {product?.category?.toLocaleUpperCase()}
        </span>
      </td>
      <td className="font-bold text-xs sm:text-base">{product.price}$</td>
      <td className="space-y-1">
        <EditButton product={product} />
        <DeleteButton id={product.id} />
      </td>
    </tr>
  );
};

export default Product;
