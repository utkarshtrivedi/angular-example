import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  history = [];
  player = 'X';
  status = 'Player: X'
  squares = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  winningIndices = null;

  constructor() {
  }

  ngOnInit() {
  }

  handleClick(data) {
    let row = data.row;
    let col = data.col;

    if (this.squares[row][col] || this.calculateWinner(this.squares).status) {
      return;
    }

    this.squares[row][col] = this.player;

    this.winningIndices = this.calculateWinner(this.squares);

    this.history.push({
      player: this.player,
      squares: this.squares,
      status: this.status,
      highlight: this.winningIndices
    });
    this.player = this.player == 'X' ? 'O' : 'X';

    if (this.winningIndices.status) {
      this.status = this.winningIndices.status;
    } else {
      this.status = 'Player: ' + this.player;
    }
  }

  private calculateWinner(squares) {
    squares = squares.flat();
    // check for winner
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return {
          status: `Winner: ${squares[a]}`,
          indices: [a, b, c]
        };
      }
    }
    // check for remaining moves
    if (squares.some(square => !square)) {
      return {
        status: null,
        indices: []
      };
    }
    return {
      status: 'Draw',
      indices: []
    };
  }

}
