import Piece from './piece';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const availableMoves = [];
        let moveUpRight = Square.at(location.row + 2, location.col + 1);
        let moveUpLeft = Square.at(location.row + 2, location.col - 1);
        let moveDownRight = Square.at(location.row - 2, location.col + 1);
        let moveDownLeft = Square.at(location.row - 2, location.col - 1);
        let moveRightUp = Square.at(location.row + 1, location.col + 2);
        let moveRightDown = Square.at(location.row - 1, location.col + 2);
        let moveLeftUp = Square.at(location.row + 1, location.col - 2);
        let moveLeftDown = Square.at(location.row - 1, location.col - 2);

        if (board.checkSquareAvailable(moveUpRight)) {
            availableMoves.push(moveUpRight);
        }
        if (board.checkSquareAvailable(moveUpLeft)) {
            availableMoves.push(moveUpLeft);
        }
        if (board.checkSquareAvailable(moveDownRight)) {
            availableMoves.push(moveDownRight);
        }
        if (board.checkSquareAvailable(moveDownLeft)) {
            availableMoves.push(moveDownLeft);
        }
        if (board.checkSquareAvailable(moveRightUp)) {
            availableMoves.push(moveRightUp);
        }
        if (board.checkSquareAvailable(moveRightDown)) {
            availableMoves.push(moveRightDown);
        }
        if (board.checkSquareAvailable(moveLeftUp)) {
            availableMoves.push(moveLeftUp);
        }
        if (board.checkSquareAvailable(moveLeftDown)) {
            availableMoves.push(moveLeftDown);
        }

        return availableMoves;
    }
}
