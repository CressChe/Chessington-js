import Piece from './piece';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const availableMoves = [];

        board.addSingleMoveInADirection(1, 1, location, availableMoves);
        board.addSingleMoveInADirection(1, 0, location, availableMoves);
        board.addSingleMoveInADirection(1, -1, location, availableMoves);
        board.addSingleMoveInADirection(0, 1, location, availableMoves);
        board.addSingleMoveInADirection(0, -1, location, availableMoves);
        board.addSingleMoveInADirection(-1, 1, location, availableMoves);
        board.addSingleMoveInADirection(-1, 0, location, availableMoves);
        board.addSingleMoveInADirection(-1, -1, location, availableMoves);

        return availableMoves;
    }
}
