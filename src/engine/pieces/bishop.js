import Piece from './piece';
import Square from '../square';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const availableMoves = [];

        board.addAllMovesInADirection(1, 1, location, availableMoves);
        board.addAllMovesInADirection(-1, -1, location, availableMoves);
        board.addAllMovesInADirection(1, -1, location, availableMoves);
        board.addAllMovesInADirection(-1, 1, location, availableMoves);

        return availableMoves;
    }
}
