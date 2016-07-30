export class Movie {
  constructor(name: string) {
    this.original_title = name;
  }

  poster_path: {
    smaller: string;
    small: string;
    medium: string;
    orignal: string;
  };
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: {
    small: string;
    medium: string;
    original: string;
  };
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  backdrop_color?: string;
  watchlist?: boolean;
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
}
