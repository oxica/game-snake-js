game.snake = {
    game: game,
    cells: [],
    create() {
        let startCells = [{row: 7, col: 7}, {row: 8, col: 7}];

        for (let startCell of startCells) {
            this.cells.push(this.game.board.getCell(startCell.row, startCell.col));
        }
    },
    render() {
        this.cells.forEach(cell => {
            this.game.ctx.drawImage(this.game.sprites.body, cell.x, cell.y);
        });
    }
};
