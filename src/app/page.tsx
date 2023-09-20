import ProductsList from "@/components/ProductsList";

type Props = {
  searchParams: {
    _sort: string;
    _order: string;
  };
};

const Home = ({ searchParams }: Props) => {
  const { _sort, _order } = searchParams;
  return (
    <div className="">
      <ProductsList sort={_sort} order={_order} />
    </div>
  );
};

export default Home;
