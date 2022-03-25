game.board = {
  game: game,
  size: 15,
  cells: [],

  create() {
    this.createCells();
  },

  createCells() {
    for (let row = 0; row < this.size; row++) {
      for (let col = 0; col < this.size; col++) {
        let cell = this.createCell(row, col);
        this.cells.push(cell);
      }
    }
  },

  createCell(row, col) {
    let cellSize = this.game.sprites.cell.width + 1;

    let offsetX = (this.game.width - this.size * cellSize) / 2;
    let offsetY = (this.game.height - this.size * cellSize) / 2;

    let cell = {
      row: row,
      col: col,
      x: offsetX + cellSize * col,
      y: offsetY + cellSize * row,
    };
    return cell;
  },

  getCell(row, col) {
    return this.cells.find((cell) => cell.row === row && cell.col === col);
  },

  render() {
    this.cells.forEach((cell) => {
      this.game.ctx.drawImage(this.game.sprites.cell, cell.x, cell.y);
    });
  },
};
