import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this)
        const moves = [];
        let moveOne, moveTwo, pawnStartingRow;
        if (this.player === Player.WHITE) {
            moveOne = Square.at(location.row + 1, location.col);
            moveTwo = Square.at(location.row + 2, location.col);
            pawnStartingRow = 1;
        }
        if (this.player === Player.BLACK) {
            moveOne = Square.at(location.row - 1, location.col);
            moveTwo = Square.at(location.row - 2, location.col);
            pawnStartingRow = 6;
        }
        if (board.checkSquareAvailable(moveOne)) {
            moves.push(moveOne);
            if (location.row === pawnStartingRow && board.checkSquareAvailable(moveTwo)) {
                moves.push(moveTwo);
            }
        }
        return moves;
    }
}
