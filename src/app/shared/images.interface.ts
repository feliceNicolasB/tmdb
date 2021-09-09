export interface Result {
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
    first_air_date: string;
    title: string;
    name: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    certifications: string;
    meaning:string;
    order: number;
}

export interface PopularMovie<T> {
    page: number;
    results: Result[];
    total_pages: number;
    total_results: number;
}