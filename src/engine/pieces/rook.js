import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const availableMoves = [];

        board.addAllMovesInADirection(1, 0, location, availableMoves);
        board.addAllMovesInADirection(-1, 0, location, availableMoves);
        board.addAllMovesInADirection(0, 1, location, availableMoves);
        board.addAllMovesInADirection(0, -1, location, availableMoves);
        return availableMoves;
    }
}
