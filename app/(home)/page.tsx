import Movie from '../components/movie';
import styles from '../styles/home.module.css';

export const metadata = {
  title: 'Home',
};

export interface movie {
  id: number;
  title: string;
  poster_path: string;
}

export const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMoives() {
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMoives();
  return (
    <div className={styles.container}>
      {movies.map((movie: movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
