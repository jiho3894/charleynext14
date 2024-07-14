import { API_URL } from '../app/(movie)/movie/page';

const getDetailMovie = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return await fetch(`${API_URL}/${id}`).then((response) => response.json());
};

const DetailMovie = async ({ id }: { id: string }) => {
  const movie = await getDetailMovie(id);
  return <h6>movie : {JSON.stringify(movie)}</h6>;
};

export default DetailMovie;
