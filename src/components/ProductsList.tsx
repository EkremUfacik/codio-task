import React from "react";
import Product from "./Product";
import { getProducts } from "@/api";
import Link from "next/link";
import AddButton from "./Buttons/AddButton";
import {
  HiOutlineArrowNarrowUp,
  HiOutlineArrowNarrowDown,
} from "react-icons/hi";
import ThemeButton from "./ThemeButton";

type Props = {
  sort: string;
  order: string;
};

const ProductsList = async ({ sort, order }: Props) => {
  const products = await getProducts(sort, order);

  return (
    <div className="overflow-x-auto">
      <ThemeButton />
      <AddButton />
      <table className="table w-full">
        <thead>
          <tr>
            <th className="ps-8 text-base w-1/3">
              {order === "asc" ? (
                <Link
                  className="flex items-center gap-1"
                  href="?_sort=title&_order=desc"
                >
                  Name <HiOutlineArrowNarrowUp />
                </Link>
              ) : (
                <Link
                  className="flex items-center gap-1"
                  href="?_sort=title&_order=asc"
                >
                  Name <HiOutlineArrowNarrowDown />
                </Link>
              )}
            </th>

            <th className="text-base">Description</th>
            <th className="text-base w-16">
              {order === "asc" ? (
                <Link
                  className="flex items-center gap-1"
                  href="?_sort=price&_order=desc"
                >
                  Price <HiOutlineArrowNarrowUp />
                </Link>
              ) : (
                <Link
                  className="flex items-center gap-1"
                  href="?_sort=price&_order=asc"
                >
                  Price <HiOutlineArrowNarrowDown />
                </Link>
              )}
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
