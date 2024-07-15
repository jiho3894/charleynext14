interface PageParamsProps {
  params: {
    id: string;
  };
}

// 동적 메타데이터
// export const generateMetadata = ({params}) => {
//   return {
//     title : params.title
//   }
// }

const ShopDetail = ({ params }: PageParamsProps) => {
  console.log(params);
  return <div>Detail Shop Page {params.id}</div>;
};

export default ShopDetail;
