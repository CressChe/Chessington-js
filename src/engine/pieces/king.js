import Piece from './piece';
import Directions from './directions';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const availableMoves = [];
        const kingDirections = new Directions(this);
        
        kingDirections.directions.forEach(direction =>
            board.addSingleMoveInADirection(direction, location, availableMoves)
        )
        return availableMoves;
    }
}
