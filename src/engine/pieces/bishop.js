import Piece from './piece';
import Square from '../square';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const availableMoves = [];
        let newColumn = location.col;
        for (let i = location.row - 1; i >= 0; i--) {
            newColumn--
            if (newColumn >= 0)
                availableMoves.push(Square.at(i, newColumn))
        }
        newColumn = location.col;
        for (let i = location.row + 1; i <= 7; i++) {
            newColumn++
            if (newColumn < 8)
                availableMoves.push(Square.at(i, newColumn))
        }
        let newRow = location.row;
        for (let i = location.col - 1; i >= 0; i--) {
            newRow++
            if (newRow < 8)
                availableMoves.push(Square.at(newRow, i))
        }
        newRow = location.row;
        for (let i = location.col + 1; i <= 7; i++) {
            newRow--
            if (newRow >= 0)
                availableMoves.push(Square.at(newRow, i))
        }
        
       

        return availableMoves;
    }
}
