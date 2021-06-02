import Piece from './piece';
import Square from '../square';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const availableMoves = [];

        for (let i = 1; i < 8; i++) {
            let moveUpRight = Square.at(location.row + i, location.col + i);
            let moveDownLeft = Square.at(location.row - i, location.col - i);
            let moveUpLeft = Square.at(location.row + i, location.col - i);
            let moveDownRight = Square.at(location.row - i, location.col + i);
            
            if (board.checkSquareAvailable(moveUpRight)) {
                availableMoves.push(moveUpRight);
            }
            if (board.checkSquareAvailable(moveDownLeft)) {
                availableMoves.push(moveDownLeft);
            }
            if (board.checkSquareAvailable(moveUpLeft)) {
                availableMoves.push(moveUpLeft);
            }
            if (board.checkSquareAvailable(moveDownRight)) {
                availableMoves.push(moveDownRight);
            }
        }
        return availableMoves;
    }
}
