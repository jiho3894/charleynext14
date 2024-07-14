import { Suspense } from 'react';
import DetailMovie from '../../../../components/datail-movie';
import DetailVideo from '../../../../components/detail-video';

interface PageParamsProps {
  params: {
    id: string;
  };
}

const MovieDatail = async ({ params }: PageParamsProps) => {
  return (
    <div>
      {/* suspense를 통해 data fetching 분리 가능 ( 없으면 모두 rendering 해야 페이지 노출) 
      suspense 사용 시 loading 컴포넌트는 동작 안함
      */}
      <Suspense fallback={<div>movie loading...</div>}>
        <DetailMovie id={params.id} />
      </Suspense>
      <Suspense fallback={<div>video loading...</div>}>
        <DetailVideo id={params.id} />
      </Suspense>
    </div>
  );
};

export default MovieDatail;
