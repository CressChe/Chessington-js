import Player from '../player';
import Square from '../square';
import Piece from './piece';


export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this)
        const availableMoves = [];
        let pawnStartingRow;
        if (this.player === Player.WHITE) {
            pawnStartingRow = 1;
            this.addSingleMove(1, 0, location, availableMoves, board);
            if (location.row === pawnStartingRow && availableMoves.length != 0) {
                this.addSingleMove(2, 0, location, availableMoves, board);
            }
            this.addSingleMove(1, 1, location, availableMoves, board);
            this.addSingleMove(1, -1, location, availableMoves, board);

        }
        if (this.player === Player.BLACK) {
            pawnStartingRow = 6;
            this.addSingleMove(-1, 0, location, availableMoves, board);
            if (location.row === pawnStartingRow && availableMoves.length != 0) {
                this.addSingleMove(-2, 0, location, availableMoves, board);
            }
            this.addSingleMove(-1, 1, location, availableMoves, board);
            this.addSingleMove(-1, -1, location, availableMoves, board);

        }

        return availableMoves;
    }

    addSingleMove(directionUpDown, directionRightLeft, location, possibleMoves, board) {
        const move = Square.at(location.row + directionUpDown, location.col + directionRightLeft);
        const available = board.checkSquareAvailable(move);

        if (directionRightLeft === 0 && available) {
            possibleMoves.push(move);
        }
        if (directionRightLeft !== 0 && available === 'Opposing Piece') {
            possibleMoves.push(move)
        }
    }
}
