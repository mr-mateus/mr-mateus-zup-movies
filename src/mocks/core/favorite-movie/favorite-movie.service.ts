import { MovieDto } from 'src/app/features/movies/movies-list/movies-list-dto';

export class FavoriteMovieMockService {

  constructor() {}

  searchAllFavoriteMovies(): Array<MovieDto> {
      return [];
  }

  saveFavoriteMovie(movie: MovieDto): void {
  }

  removeFavoriteMovie(movie: MovieDto): void {
  }
}
