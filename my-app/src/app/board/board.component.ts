import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

interface ISquare {
  row: number;
  column: number;
  value: string;
}

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Output()
  onClicked = new EventEmitter();

  @Input()
  squares;

  @Input()
  player;

  @Input()
  highlight;

  ngOnInit() {

  }

  handleSquareClick(row, col) {
    this.onClicked.emit({ row: row, col: col });
  }

  convertRowColumnToIndices(row, column) {
    return (row * 3 + column);
  }
}
