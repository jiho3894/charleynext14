import { API_URL } from '../app/(movie)/movie/page';

const getDetailVideo = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return await fetch(`${API_URL}/${id}/videos`).then((response) => response.json());
};

const DetailVideo = async ({ id }: { id: string }) => {
  const video = await getDetailVideo(id);
  return <h6>video : {JSON.stringify(video)}</h6>;
};

export default DetailVideo;
