import React from "react";

export default class MovieApiService extends React.Component {
  async getMoviesArr() {
    return await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=fe376611c70e9694e174f7ee3afdb680&query=return`
    ).then((response) => {
      if (!response.ok) {
        throw new Error("Could not get movies array");
      }
      return response.json();
    });
  }

  async getMoviesSearch(str) {
    return await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=fe376611c70e9694e174f7ee3afdb680&query=${str}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error("Could not get movies search");
      }
      return response.json();
    });
  }

  async getMoviesPage(str, page) {
    return await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=fe376611c70e9694e174f7ee3afdb680&query=${str}&page=${page}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error("Could not get movies page");
      }
      return response.json();
    });
  }

  async getRatedMovies(guestID) {
    return await fetch(`https://api.themoviedb.org/3/guest_session/${guestID}/rated/movies?api_key=fe376611c70e9694e174f7ee3afdb680&language=en-US&sort_by=created_at.asc`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not get rated movies')
      }
      return response.json()
    })
  }
}
