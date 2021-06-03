import Piece from './piece';
import Directions from './directions';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const availableMoves = [];
        const knightDirections = new Directions(this);
        
        knightDirections.directions.forEach(direction =>
            board.addSingleMoveInADirection(direction, location, availableMoves)
        )

        return availableMoves;
    }
}
