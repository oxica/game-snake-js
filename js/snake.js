game.snake = {
  game: game,
  cells: [],
  moving: false,
  create() {
    let startCells = [
      { row: 7, col: 7 },
      { row: 8, col: 7 },
    ];

    for (let startCell of startCells) {
      this.cells.push(this.game.board.getCell(startCell.row, startCell.col));
    }
  },
  render() {
    this.cells.forEach((cell) => {
      this.game.ctx.drawImage(this.game.sprites.body, cell.x, cell.y);
    });
    },
  
  start() {
    this.moving = true;
  },

  move() {
    if (!this.moving) {
      return;
    }
    let cell = this.getNextCell();
    if (cell) {
      this.cells.unshift(cell);
      this.cells.pop();
    }
  },
  getNextCell() {
    let head = this.cells[0];
    let row = head.row - 1;
    let col = head.col;
    return this.game.board.getCell(row, col);
  },
};
