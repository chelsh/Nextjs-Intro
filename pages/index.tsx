import Seo from "@/components/Seo";
import Head from "next/head";
import Image from "next/image";

export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type HomeProps = {
  results: MovieType[];
};

export default function Home({ results }: HomeProps) {
  return (
    <div className="container">
      <Seo title="Home" />
      <Head>
        <title>Home | Next Movie</title>
      </Head>
      {results?.map((movie) => (
        <div key={movie.id}>
          <div
            className="movie"
            style={{
              position: "relative",
            }}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="img"
              fill
              objectFit="cover"
            />
          </div>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          max-width: 100%;
          height: 350px;
          overflow: hidden;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover {
          transform: scale(1.05) translateY(-8px);
          cursor: pointer;
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();
  return {
    props: {
      results,
    },
  };
}
