import MovieInfo from '@/app/components/movie-info';
import MovieVideos from '@/app/components/movie-videos';
import { getMoives } from '@/app/components/movie-info';
import { Suspense } from 'react';

interface IParams {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: IParams) {
  const { id } = await params;
  const movie = await getMoives(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params }: IParams) {
  const { id } = await params;
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
