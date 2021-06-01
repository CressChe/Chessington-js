import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const availableMoves = [];

        for (let i = 0; i <= 7; i++) {
            if (i !== location.col)
                availableMoves.push(Square.at(location.row, i))
        }
        for (let j = 0;j <= 7; j++) {
            if (j !== location.row)
                availableMoves.push(Square.at(j, location.col))
        }
        return availableMoves;
    }
}
