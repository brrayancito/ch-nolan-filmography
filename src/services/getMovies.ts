export async function getMovies() {

  const res = await fetch('https://rest-api-u38s-dev.fl0.io/api/movies', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  })

  const movies = await res.json()
  return movies
}

export async function getMovieById({ id }: { id: string }) {

  const res = await fetch(`https://rest-api-u38s-dev.fl0.io/api/movies/${id}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  })

  const movie = await res.json()
  return movie
}

export async function getTopFiveMovies() {

  const res = await fetch(`https://rest-api-u38s-dev.fl0.io/api/top-5-movies`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  })

  const TopFiveMovies = await res.json()
  return TopFiveMovies
}

