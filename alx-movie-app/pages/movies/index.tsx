import { MoviesProps } from "@/interfaces";
import { useCallback, useEffect, useState } from "react";

interface MProps {
  movies: MoviesProps[]
}

const Movies: React.FC<MProps> = () => {
  const [page, setPage] = useState<number>(1);
  const [year, setYear] = useState<number | null>(null);
  const [genre, setGenre] = useState<string>("All");
  const [movies, setMovies] = useState<MoviesProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);


  const fetchMovies = useCallback(async () => {
    setLoading(true);
    const response = await fetch('/api/fetch-movies', {
      method: 'POST',
      body: JSON.stringify({
        page,
        year,
        genre: genre === "All" ? "" : genre
      }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    });

    if (!response.ok) {
      setLoading(false);
      throw new Error("something went wrong");
    }

    const data = await response.json();
    const results = data.movies;
    console.log(results)
    setMovies(results);
    setLoading(false);
  }, [page, year, genre]);

  useEffect(() => {
    fetchMovies()
  }, [fetchMovies]);


}
