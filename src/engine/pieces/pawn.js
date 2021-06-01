import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this)

        if (this.player === Player.WHITE) {
            if (location.row === 1) {
                return [Square.at(location.row + 2, location.col), Square.at(location.row + 1, location.col)];
            }
            return [Square.at(location.row + 1, location.col)]
        }
        if (this.player === Player.BLACK) {
            if (location.row === 6) {
                return [Square.at(location.row - 2, location.col), Square.at(location.row - 1, location.col)];
            }
            return [Square.at(location.row - 1, location.col)]
        }
    }
}
