interface PageParamsProps {
  params: {
    id: string;
  };
}

const ShopDetail = ({ params }: PageParamsProps) => {
  console.log(params);
  return <div>Detail Shop Page {params.id}</div>;
};

export default ShopDetail;
