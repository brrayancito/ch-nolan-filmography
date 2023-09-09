export type MoviesProps = {
    _id: string;
    title: string;
    director: Director;
    year: number;
    duration: number;
    poster: string;
    genre: string[];
    rate: number;
};

export enum Director {
    ChristopherNolan = 'Christopher Nolan',
}