import ProductsList from "@/components/ProductsList";
import { Locale } from "@/i18n.config";

type Props = {
  searchParams: {
    _sort: string;
    _order: string;
  };
  params: { lang: Locale };
};

const Home = ({ searchParams, params }: Props) => {
  const { _sort, _order } = searchParams;
  return (
    <div className="">
      <ProductsList sort={_sort} order={_order} lang={params.lang} />
    </div>
  );
};

export default Home;
