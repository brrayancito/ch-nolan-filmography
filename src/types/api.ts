export type MoviesProps = {
    _id: string;
    description: string;
    title: string;
    director: Director;
    year: number;
    duration: number;
    poster: string;
    trailer: string;
    imdb: string;
    genre: string[];
    rate: number;
};

export enum Director {
    ChristopherNolan = 'Christopher Nolan',
}