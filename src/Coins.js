import { Component } from "react";

export class Coin extends Component {
  constructor() {
    super();

    this.state = {
      coin: [
        "https://images.collectiblestechnology.com/Ctc/Catalog/20220124/5f03d0c1-eb1d-4722-96ea-59fc293065e3.jpg",
        "https://imaginaire.com/en/images/10-CENT-2022-P-10-CENT-BU-2022-UNITED-STATES-COINS__Z-US1022P-2.JPG",
      ],
      tails: 0,
      heads: 0,
      total: 0,
      img: "",
    };

    this.startGame = this.startGame.bind(this);
  }

  startGame() {
    if (this.state.total >= 10) {
      this.setState({ tails: 0, heads: 0, img: "", total: 0 });
      return;
    }
    this.setState({ total: this.state.total + 1 });
    let randomNum = Math.floor(Math.random() * 2);
    let random = this.state.coin[randomNum];
    if (random == this.state.coin[0]) {
      this.setState({ img: this.state.coin[0], heads: this.state.heads + 1 });
    } else {
      this.setState({ img: this.state.coin[1], tails: this.state.tails + 1 });
    }
  }

  render() {
    return (
      <div>
        <h1>Let's flip a coin!</h1>
        {this.state.total == 0 ? "" : <img src={this.state.img} width="200" />}
        <br />
        <button onClick={this.startGame}>Flip Me</button>
        <br />
        {this.state.total == 0 ? (
          ""
        ) : (
          <h1>
            Out of {this.state.total} flips, there have been {this.state.heads}{" "}
            heads and {this.state.tails} tails.
          </h1>
        )}
      </div>
    );
  }
}
