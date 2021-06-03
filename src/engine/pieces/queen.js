import Piece from './piece';
import Directions from './directions';


export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const availableMoves = [];
        const queenDirections = new Directions(this);
        
        queenDirections.directions.forEach(direction =>
            board.addAllMovesInADirection(direction, location, availableMoves)
        )
        return availableMoves
    }
}
