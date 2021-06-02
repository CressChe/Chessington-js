import Piece from './piece';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const availableMoves = [];
        const moveUp = Square.at(location.row + 1, location.col);
        const moveDown = Square.at(location.row - 1, location.col);
        const moveLeft = Square.at(location.row, location.col - 1);
        const moveRight = Square.at(location.row, location.col + 1);
        const moveUpLeft = Square.at(location.row + 1, location.col - 1);
        const moveUpRight = Square.at(location.row + 1, location.col + 1);
        const moveDownLeft = Square.at(location.row - 1, location.col - 1);
        const moveDownRight = Square.at(location.row - 1, location.col + 1);

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
        if (board.checkSquareAvailable(moveUpLeft)) {
            availableMoves.push(moveUpLeft);
        }
        if (board.checkSquareAvailable(moveUpRight)) {
            availableMoves.push(moveUpRight);
        }
        if (board.checkSquareAvailable(moveDownLeft)) {
            availableMoves.push(moveDownLeft);
        }
        if (board.checkSquareAvailable(moveDownRight)) {
            availableMoves.push(moveDownRight);
        }

        return availableMoves;
    }
}
