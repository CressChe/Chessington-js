import Player from '../player';
import Square from '../square';
import Piece from './piece';
import Directions from './directions';


export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this)
        const availableMoves = [];
        const pawnDirections = new Directions(this);

        this.addSingleMove(pawnDirections.directions.moveOne, location, availableMoves, board);
        if (location.row === pawnDirections.directions.pawnStartingRow && availableMoves.length != 0) {
            this.addSingleMove(pawnDirections.directions.moveTwo, location, availableMoves, board);
        }
        this.addSingleMove(pawnDirections.directions.takeRight, location, availableMoves, board);
        this.addSingleMove(pawnDirections.directions.takeLeft, location, availableMoves, board);

        return availableMoves;
    }

    addSingleMove(direction, location, possibleMoves, board) {
        const move = Square.at(location.row + direction.x, location.col + direction.y);
        const available = board.checkSquareAvailable(move);

        if (direction.y === 0 && available) {
            possibleMoves.push(move);
        }
        if (direction.y !== 0 && available === 'Opposing Piece') {
            possibleMoves.push(move)
        }
    }
}
