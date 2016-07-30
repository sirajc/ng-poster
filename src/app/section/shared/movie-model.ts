export interface Movie {
  poster_path: PosterPath;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path?: BackdropPath;
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

export interface MovieDetail {
    adult: boolean;
    backdrop_path?: BackdropPath;
    belongs_to_collection?: any;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path?: PosterPath;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    credits: Credits;
}

interface BackdropPath {
    small?: string;
    medium?: string;
    original?: string;
}

interface Genre {
    id: number;
    name: string;
}

interface PosterPath {
    smaller?: string;
    small?: string;
    medium?: string;
    orignal?: string;
}

interface ProductionCompany {
    name: string;
    id: number;
}

interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

interface SpokenLanguage {
    iso_639_1: string;
    name: string;
}

interface ProfilePath {
    smaller: string;
    small: string;
    medium: string;
    original: string;
}

interface Actor {
    cast_id: number;
    character: string;
    credit_id: string;
    id: number;
    name: string;
    order: number;
    profile_path: ProfilePath;
}

interface ProfilePath2 {
    smaller: string;
    small: string;
    medium: string;
    original: string;
}

interface Director {
    credit_id: string;
    department: string;
    id: number;
    job: string;
    name: string;
    profile_path: ProfilePath2;
}

interface ProfilePath3 {
    smaller: string;
    small: string;
    medium: string;
    original: string;
}

interface Writer {
    credit_id: string;
    department: string;
    id: number;
    job: string;
    name: string;
    profile_path: ProfilePath3;
}

interface ProfilePath4 {
    smaller: string;
    small: string;
    medium: string;
    original: string;
}

interface Producer {
    credit_id: string;
    department: string;
    id: number;
    job: string;
    name: string;
    profile_path: ProfilePath4;
}

interface Credits {
    actors: Actor[];
    directors: Director[];
    writers: Writer[];
    producers: Producer[];
}

