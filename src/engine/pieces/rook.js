import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const availableMoves = [];
        let movesUpBlocked = false;
        let movesDownBlocked = false;
        let movesLeftBlocked = false;
        let movesRightBlocked = false;
        
        for (let i = 1; i < 8; i++) {
            let moveUp = Square.at(location.row + i, location.col);
            let moveDown = Square.at(location.row - i, location.col);
            let moveLeft = Square.at(location.row, location.col - i);
            let moveRight = Square.at(location.row, location.col + i);
            
            if (board.checkSquareAvailable(moveUp) && !movesUpBlocked) {
                availableMoves.push(moveUp);
            } else {
                movesUpBlocked = true;
            }
            if (board.checkSquareAvailable(moveDown) && !movesDownBlocked) {
                availableMoves.push(moveDown);
            } else {
                movesDownBlocked = true;
            }
            if (board.checkSquareAvailable(moveLeft) && !movesLeftBlocked) {
                availableMoves.push(moveLeft);
            } else {
                movesLeftBlocked = true;
            }
            if (board.checkSquareAvailable(moveRight) && !movesRightBlocked) {
                availableMoves.push(moveRight);
            } else {
                movesRightBlocked = true;
            }
        }
        return availableMoves;
    }
}
