import React from "react";
import { Online, Offline } from "react-detect-offline";
import { Alert } from "antd";
import "antd/dist/antd.min.css";
import "./App.css";

import MovieItem from "../MovieItem";
import { Provider } from "../context";

export default class App extends React.Component {
  state = {
    genres: [],
  };

  componentDidMount() {
    const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZThlZWI0NjA2NmM4ZWY4NDA5MzM5ZjgyNzIzYmRkOCIsInN1YiI6IjY0YmFjYmNiZmRmOGI3MDBmZjYyYWUwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UXQvpsWJ0IVDrUFKL9Vaw8NT93YdJ_ZY6z7EKwaF1ls"; 
  
    return fetch(
      `https://api.themoviedb.org/3/movie/157336?api_key=${apiKey}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        return this.setState({
          genres: data.genres,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  

  render() {
    return (
      <>
        <Provider value={this.state.genres}>
          <Online>
            <MovieItem />
          </Online>
          <Offline>
            <Alert
              type="warning"
              description="Вы оффлайн. Проверьте интернет-соединение."
            />
          </Offline>
        </Provider>
      </>
    );
  }
}
