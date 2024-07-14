import { API_URL } from '../page';

interface PageParamsProps {
  params: {
    id: string;
  };
}

const getDetailMovie = async (id: string) => {
  console.log(`${API_URL}/${id}`);
  return await fetch(`${API_URL}/${id}`).then((response) => response.json());
};

const MovieDatail = async ({ params }: PageParamsProps) => {
  const movie = (await getDetailMovie(params.id)) as any;
  return (
    <div>
      movie id : {movie.id} , movie title : {movie.original_title}{' '}
    </div>
  );
};

export default MovieDatail;
