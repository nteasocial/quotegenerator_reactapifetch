import React from "react";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    const id = Math.floor(Math.random() * 100 - 1);
    axios
      .get(`https://api.adviceslip.com/advice/${id}`)
      .then((response) => {
        const data = JSON.parse(JSON.stringify(response.data + "}"));
        const { advice } = data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // fetchAdvice = () => {
  //   axios
  //     .get("https://api.adviceslip.com/advice")
  //     .then((response) => {
  //       const { advice } = response.data.slip;

  //       this.setState({ advice });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
