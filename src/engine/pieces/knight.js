import Piece from './piece';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const availableMoves = [];

        board.addSingleMoveInADirection(2, 1, location, availableMoves);
        board.addSingleMoveInADirection(2, -1, location, availableMoves);
        board.addSingleMoveInADirection(1, 2, location, availableMoves);
        board.addSingleMoveInADirection(1, -2, location, availableMoves);
        board.addSingleMoveInADirection(-1, 2, location, availableMoves);
        board.addSingleMoveInADirection(-1, -2, location, availableMoves);
        board.addSingleMoveInADirection(-2, 1, location, availableMoves);
        board.addSingleMoveInADirection(-2, -1, location, availableMoves);

        return availableMoves;
    }
}
