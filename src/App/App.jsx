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
