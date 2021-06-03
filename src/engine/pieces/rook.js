import Piece from './piece';
import Directions from './directions';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const availableMoves = [];
        const rookDirections = new Directions(this);

        rookDirections.directions.forEach(direction =>
            board.addAllMovesInADirection(direction, location, availableMoves)
        )

        return availableMoves;
    }
}
