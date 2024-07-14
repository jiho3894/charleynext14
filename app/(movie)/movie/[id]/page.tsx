import { API_URL } from '../page';

interface PageParamsProps {
  params: {
    id: string;
  };
}

const getDetailMovie = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return await fetch(`${API_URL}/${id}`).then((response) => response.json());
};

const getDetailVideo = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return await fetch(`${API_URL}/${id}/videos`).then((response) => response.json());
};

const MovieDatail = async ({ params }: PageParamsProps) => {
  const [movie, video] = await Promise.all([getDetailMovie(params.id), getDetailVideo(params.id)]);
  console.log(movie, video);
  return (
    <div>
      movie id : {movie.id} , movie title : {movie.original_title}
      Movie Data: {JSON.stringify(movie)}
      Video Data : {JSON.stringify(video)}
    </div>
  );
};

export default MovieDatail;
