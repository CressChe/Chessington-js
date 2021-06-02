import Piece from './piece';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const availableMoves = [];

        availableMoves.push(Square.at(location.row + 1, location.col + 1));
        availableMoves.push(Square.at(location.row, location.col + 1));
        availableMoves.push(Square.at(location.row - 1, location.col + 1));
        availableMoves.push(Square.at(location.row - 1, location.col));
        availableMoves.push(Square.at(location.row - 1, location.col - 1));
        availableMoves.push(Square.at(location.row, location.col - 1));
        availableMoves.push(Square.at(location.row + 1, location.col - 1));
        availableMoves.push(Square.at(location.row + 1, location.col));

        return availableMoves;
    }
}
