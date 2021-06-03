import Piece from './piece';
import Directions from './directions';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const availableMoves = [];
        const bishopDirections = new Directions(this);

        bishopDirections.directions.forEach(direction =>
            board.addAllMovesInADirection(direction, location, availableMoves)
        )
        return availableMoves;
    }
}
