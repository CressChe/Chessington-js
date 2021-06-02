import Piece from './piece';
import Square from '../square';

export default class Queen extends Piece {
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
            let moveUp = Square.at(location.row + i, location.col);
            let moveDown = Square.at(location.row - i, location.col);
            let moveLeft = Square.at(location.row, location.col - i);
            let moveRight = Square.at(location.row, location.col + i);
            
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
            if (board.checkSquareAvailable(moveUp)) {
                availableMoves.push(moveUp);
            }
            if (board.checkSquareAvailable(moveDown)) {
                availableMoves.push(moveDown);
            }
            if (board.checkSquareAvailable(moveLeft)) {
                availableMoves.push(moveLeft);
            }
            if (board.checkSquareAvailable(moveRight)) {
                availableMoves.push(moveRight);
            }
        }
        return availableMoves
    }
}
