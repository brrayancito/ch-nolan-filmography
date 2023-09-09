export async function getMovies() {

  const res = await fetch('https://rest-api-u38s-dev.fl0.io/movies', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  })

  const movies = await res.json()
  return movies
}

export async function getMovieById({ id }: { id: string }) {

  const res = await fetch(`https://rest-api-u38s-dev.fl0.io/movies/${id}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  })

  const movie = await res.json()
  return movie
}

