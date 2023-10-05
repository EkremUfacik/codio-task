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
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import LocaleSwitcher from "./LocaleSwitcher";

type Props = {
  sort: string;
  order: string;
  lang: Locale;
};

const ProductsList = async ({ sort, order, lang }: Props) => {
  const products = await getProducts(sort, order);
  const { tableHead } = await getDictionary(lang);

  return (
    <div className="overflow-x-auto">
      <LocaleSwitcher />
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
                  {tableHead.name} <HiOutlineArrowNarrowUp />
                </Link>
              ) : (
                <Link
                  className="flex items-center gap-1"
                  href="?_sort=title&_order=asc"
                >
                  {tableHead.name} <HiOutlineArrowNarrowDown />
                </Link>
              )}
            </th>

            <th className="text-base">{tableHead.description}</th>
            <th className="text-base w-16">
              {order === "asc" ? (
                <Link
                  className="flex items-center gap-1"
                  href="?_sort=price&_order=desc"
                >
                  {tableHead.price} <HiOutlineArrowNarrowUp />
                </Link>
              ) : (
                <Link
                  className="flex items-center gap-1"
                  href="?_sort=price&_order=asc"
                >
                  {tableHead.price} <HiOutlineArrowNarrowDown />
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
