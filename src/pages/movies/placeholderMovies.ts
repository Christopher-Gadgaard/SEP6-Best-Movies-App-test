import { Movie } from "../../model/movie";


export const placeholderMovies: Movie[] = [
/*   {
    id: 666,
    title: 'Interstellar',
    posterPath: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    overview: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    releaseDate: '2014-11-05',
    genres: ['Adventure', 'Drama', 'Science Fiction'],
    voteAverage: 8.3,
    voteCount: 23550,
    originalLanguage: 'en',
  },
  {
    id: 2,
    title: 'Inception',
    posterPath: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    overview: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
    releaseDate: '2010-07-16',
    genres: ['Action', 'Science Fiction', 'Adventure'],
    voteAverage: 8.3,
    voteCount: 30500,
    originalLanguage: 'en',
  },
  {
    id: 3,
    title: 'The Dark Knight',
    posterPath: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    overview: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    releaseDate: '2008-07-16',
    genres: ['Drama', 'Action', 'Crime'],
    voteAverage: 8.4,
    voteCount: 24567,
    originalLanguage: 'en',
  },
  {
    id: 4,
    title: 'The Matrix',
    posterPath: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    overview: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    releaseDate: '1999-03-31',
    genres: ['Action', 'Science Fiction'],
    voteAverage: 8.1,
    voteCount: 20245,
    originalLanguage: 'en',
  },{
    id: 5,
    title: 'Avatar',
    posterPath: 'https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg',
    overview: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    releaseDate: '2009-12-10',
    genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
    voteAverage: 7.9,
    voteCount: 22110,
    originalLanguage: 'en',
  },
  {
    id: 6,
    title: 'The Shawshank Redemption',
    posterPath: 'https://image.tmdb.org/t/p/w500/5KCVkau1HEl7ZzfPsKAPM0sMiKc.jpg',
    overview: 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden.',
    releaseDate: '1994-09-23',
    genres: ['Drama', 'Crime'],
    voteAverage: 8.7,
    voteCount: 18049,
    originalLanguage: 'en',
  },
  {
    id: 7,
    title: 'The Godfather',
    posterPath: 'https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
    overview: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
    releaseDate: '1972-03-14',
    genres: ['Drama', 'Crime'],
    voteAverage: 8.7,
    voteCount: 13998,
    originalLanguage: 'en',
  },
  {
    id: 8,
    title: 'Pulp Fiction',
    posterPath: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    overview: 'A burger-loving hit man, his philosophical partner, a drug-addled gangster\'s moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.',
    releaseDate: '1994-09-10',
    genres: ['Thriller', 'Crime'],
    voteAverage: 8.5,
    voteCount: 21465,
    originalLanguage: 'en',
  },
  {
    id: 1,
    title: 'Interstellar',
    posterPath: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    overview: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    releaseDate: '2014-11-05',
    genres: ['Adventure', 'Drama', 'Science Fiction'],
    voteAverage: 8.3,
    voteCount: 23550,
    originalLanguage: 'en',
  },
  {
    id: 2,
    title: 'Inception',
    posterPath: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    overview: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
    releaseDate: '2010-07-16',
    genres: ['Action', 'Science Fiction', 'Adventure'],
    voteAverage: 8.3,
    voteCount: 30500,
    originalLanguage: 'en',
  },
  {
    id: 3,
    title: 'The Dark Knight',
    posterPath: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    overview: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    releaseDate: '2008-07-16',
    genres: ['Drama', 'Action', 'Crime'],
    voteAverage: 8.4,
    voteCount: 24567,
    originalLanguage: 'en',
  },
  {
    id: 4,
    title: 'The Matrix',
    posterPath: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    overview: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    releaseDate: '1999-03-31',
    genres: ['Action', 'Science Fiction'],
    voteAverage: 8.1,
    voteCount: 20245,
    originalLanguage: 'en',
  },{
    id: 5,
    title: 'Avatar',
    posterPath: 'https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg',
    overview: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    releaseDate: '2009-12-10',
    genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
    voteAverage: 7.9,
    voteCount: 22110,
    originalLanguage: 'en',
  },
  {
    id: 6,
    title: 'The Shawshank Redemption',
    posterPath: 'https://image.tmdb.org/t/p/w500/5KCVkau1HEl7ZzfPsKAPM0sMiKc.jpg',
    overview: 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden.',
    releaseDate: '1994-09-23',
    genres: ['Drama', 'Crime'],
    voteAverage: 8.7,
    voteCount: 18049,
    originalLanguage: 'en',
  },
  {
    id: 7,
    title: 'The Godfather',
    posterPath: 'https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
    overview: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
    releaseDate: '1972-03-14',
    genres: ['Drama', 'Crime'],
    voteAverage: 8.7,
    voteCount: 13998,
    originalLanguage: 'en',
  },
  {
    id: 8,
    title: 'Pulp Fiction',
    posterPath: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    overview: 'A burger-loving hit man, his philosophical partner, a drug-addled gangster\'s moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.',
    releaseDate: '1994-09-10',
    genres: ['Thriller', 'Crime'],
    voteAverage: 8.5,
    voteCount: 21465,
    originalLanguage: 'en',
  }, {
    id: 1,
    title: 'Interstellar',
    posterPath: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    overview: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    releaseDate: '2014-11-05',
    genres: ['Adventure', 'Drama', 'Science Fiction'],
    voteAverage: 8.3,
    voteCount: 23550,
    originalLanguage: 'en',
  },
  {
    id: 2,
    title: 'Inception',
    posterPath: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    overview: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
    releaseDate: '2010-07-16',
    genres: ['Action', 'Science Fiction', 'Adventure'],
    voteAverage: 8.3,
    voteCount: 30500,
    originalLanguage: 'en',
  },
  {
    id: 3,
    title: 'The Dark Knight',
    posterPath: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    overview: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    releaseDate: '2008-07-16',
    genres: ['Drama', 'Action', 'Crime'],
    voteAverage: 8.4,
    voteCount: 24567,
    originalLanguage: 'en',
  },
  {
    id: 4,
    title: 'The Matrix',
    posterPath: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    overview: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    releaseDate: '1999-03-31',
    genres: ['Action', 'Science Fiction'],
    voteAverage: 8.1,
    voteCount: 20245,
    originalLanguage: 'en',
  },{
    id: 5,
    title: 'Avatar',
    posterPath: 'https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg',
    overview: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    releaseDate: '2009-12-10',
    genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
    voteAverage: 7.9,
    voteCount: 22110,
    originalLanguage: 'en',
  },
  {
    id: 6,
    title: 'The Shawshank Redemption',
    posterPath: 'https://image.tmdb.org/t/p/w500/5KCVkau1HEl7ZzfPsKAPM0sMiKc.jpg',
    overview: 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden.',
    releaseDate: '1994-09-23',
    genres: ['Drama', 'Crime'],
    voteAverage: 8.7,
    voteCount: 18049,
    originalLanguage: 'en',
  },
  {
    id: 7,
    title: 'The Godfather',
    posterPath: 'https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
    overview: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
    releaseDate: '1972-03-14',
    genres: ['Drama', 'Crime'],
    voteAverage: 8.7,
    voteCount: 13998,
    originalLanguage: 'en',
  },
  {
    id: 8,
    title: 'Pulp Fiction',
    posterPath: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    overview: 'A burger-loving hit man, his philosophical partner, a drug-addled gangster\'s moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.',
    releaseDate: '1994-09-10',
    genres: ['Thriller', 'Crime'],
    voteAverage: 8.5,
    voteCount: 21465,
    originalLanguage: 'en',
  }, {
    id: 1,
    title: 'Interstellar',
    posterPath: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    overview: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    releaseDate: '2014-11-05',
    genres: ['Adventure', 'Drama', 'Science Fiction'],
    voteAverage: 8.3,
    voteCount: 23550,
    originalLanguage: 'en',
  },
  {
    id: 2,
    title: 'Inception',
    posterPath: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    overview: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
    releaseDate: '2010-07-16',
    genres: ['Action', 'Science Fiction', 'Adventure'],
    voteAverage: 8.3,
    voteCount: 30500,
    originalLanguage: 'en',
  },
  {
    id: 3,
    title: 'The Dark Knight',
    posterPath: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    overview: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    releaseDate: '2008-07-16',
    genres: ['Drama', 'Action', 'Crime'],
    voteAverage: 8.4,
    voteCount: 24567,
    originalLanguage: 'en',
  },
  {
    id: 4,
    title: 'The Matrix',
    posterPath: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    overview: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    releaseDate: '1999-03-31',
    genres: ['Action', 'Science Fiction'],
    voteAverage: 8.1,
    voteCount: 20245,
    originalLanguage: 'en',
  },{
    id: 5,
    title: 'Avatar',
    posterPath: 'https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg',
    overview: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    releaseDate: '2009-12-10',
    genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
    voteAverage: 7.9,
    voteCount: 22110,
    originalLanguage: 'en',
  },
  {
    id: 6,
    title: 'The Shawshank Redemption',
    posterPath: 'https://image.tmdb.org/t/p/w500/5KCVkau1HEl7ZzfPsKAPM0sMiKc.jpg',
    overview: 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden.',
    releaseDate: '1994-09-23',
    genres: ['Drama', 'Crime'],
    voteAverage: 8.7,
    voteCount: 18049,
    originalLanguage: 'en',
  },
  {
    id: 7,
    title: 'The Godfather',
    posterPath: 'https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
    overview: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
    releaseDate: '1972-03-14',
    genres: ['Drama', 'Crime'],
    voteAverage: 8.7,
    voteCount: 13998,
    originalLanguage: 'en',
  },
  {
    id: 8,
    title: 'Pulp Fiction',
    posterPath: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    overview: 'A burger-loving hit man, his philosophical partner, a drug-addled gangster\'s moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.',
    releaseDate: '1994-09-10',
    genres: ['Thriller', 'Crime'],
    voteAverage: 8.5,
    voteCount: 21465,
    originalLanguage: 'en',
  }, */
  ];
  