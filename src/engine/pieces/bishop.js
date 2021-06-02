import Piece from './piece';
import Square from '../square';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const availableMoves = [];
        let movesUpRightBlocked = false;
        let movesDownLeftBlocked = false;
        let movesUpLeftBlocked = false;
        let movesDownRightBlocked = false;

        for (let i = 1; i < 8; i++) {
            let moveUpRight = Square.at(location.row + i, location.col + i);
            let moveDownLeft = Square.at(location.row - i, location.col - i);
            let moveUpLeft = Square.at(location.row + i, location.col - i);
            let moveDownRight = Square.at(location.row - i, location.col + i);
            
            if (board.checkSquareAvailable(moveUpRight) && !movesUpRightBlocked) {
                availableMoves.push(moveUpRight);
            } else {
                movesUpRightBlocked = true;
            }
            if (board.checkSquareAvailable(moveDownLeft) && !movesDownLeftBlocked) {
                availableMoves.push(moveDownLeft);
            } else {
                movesDownLeftBlocked = true;
            }
            if (board.checkSquareAvailable(moveUpLeft) && !movesUpLeftBlocked) {
                availableMoves.push(moveUpLeft);
            } else {
                movesUpLeftBlocked = true;
            }
            if (board.checkSquareAvailable(moveDownRight) && !movesDownRightBlocked) {
                availableMoves.push(moveDownRight);
            } else {
                movesDownRightBlocked = true;
            }
        }
        return availableMoves;
    }
}
