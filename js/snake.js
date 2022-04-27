game.snake = {
  game: game,
  cells: [],
  moving: false,
  direction: false,
  directions: {
    up: {
      row: -1,
      col: 0,
    },

    down: {
      row: 1,
      col: 0,
    },

    left: {
      row: 0,
      col: -1,
    },

    right: {
      row: 0,
      col: 1,
    },
  },
  create() {
    let startCells = [
      { row: 7, col: 7 },
      { row: 8, col: 7 },
    ];

    this.direction = this.directions.up;

    for (let startCell of startCells) {
      this.cells.push(this.game.board.getCell(startCell.row, startCell.col));
    }
  },

  renderHead() { 
    let head = this.cells[0];
    this.game.ctx.drawImage(this.game.sprites.head, head.x, head.y);
  },

  renderBody() {
    for (let i = 1; i < this.cells.length; i++) { 
      this.game.ctx.drawImage(
        this.game.sprites.body,
        this.cells[i].x,
        this.cells[i].y
      );
    }
  },

  render() {
    this.renderHead();
    this.renderBody();
  },

  start(keyCode) {
    switch (keyCode) {
      case 38:
        this.direction = this.directions.up;
        break;
      case 37:
        this.direction = this.directions.left;
        break;
      case 39:
        this.direction = this.directions.right;
        break;
      case 40:
        this.direction = this.directions.down;
        break;
    }

    this.moving = true;
  },

  move() {
    if (!this.moving) {
      return;
    }
    let cell = this.getNextCell();
    if (cell) {
      this.cells.unshift(cell);

      if (!this.game.board.isFoodCell(cell)) {
        this.cells.pop();
      } else {
        this.game.board.createFood();
      }
    }
  },

  hasCell(cell) {
    return this.cells.find((part) => part === cell);
  },

  getNextCell() {
    let head = this.cells[0];

    let row = head.row + this.direction.row;
    let col = head.col + this.direction.col;
    return this.game.board.getCell(row, col);
  },
};
