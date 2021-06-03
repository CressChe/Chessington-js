import Player from './player';
import GameSettings from './gameSettings';
import Square from './square';
import King from './pieces/king';

export default class Board {
    constructor(currentPlayer) {
        this.currentPlayer = currentPlayer ? currentPlayer : Player.WHITE;
        this.board = this.createBoard();
    }

    createBoard() {
        const board = new Array(GameSettings.BOARD_SIZE);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(GameSettings.BOARD_SIZE);
        }
        return board;
    }

    setPiece(square, piece) {
        this.board[square.row][square.col] = piece;
    }

    getPiece(square) {
        return this.board[square.row][square.col];
    }

    checkSquareAvailable(square) {
        if ((square.col >= GameSettings.BOARD_SIZE || square.col < 0) ||
            (square.row >= GameSettings.BOARD_SIZE || square.row < 0)) {
            return false;
        }
        const squareContent = this.getPiece(square);
        if (!squareContent) {
            return true;
        }
        if (squareContent.player !== this.currentPlayer && !(squareContent instanceof King)) {
            return 'Opposing Piece';
        }
        return false;
    }

    addAllMovesInADirection(direction, location, possibleMoves) {
        for (let i = 1; i < 8; i++) {
            const move = Square.at(location.row + (i * direction.x), location.col + (i * direction.y));
            const available = this.checkSquareAvailable(move)

            if (available) {
                possibleMoves.push(move);
            } else {
                break;
            }

            if (available === 'Opposing Piece') {
                break;
            }
        }
    }

    addSingleMoveInADirection(direction, location, possibleMoves) {
        const move = Square.at(location.row + direction.x, location.col + direction.y);
        if (this.checkSquareAvailable(move)) {
            possibleMoves.push(move);
        }
    }

    findPiece(pieceToFind) {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (this.board[row][col] === pieceToFind) {
                    return Square.at(row, col);
                }
            }
        }
        throw new Error('The supplied piece is not on the board');
    }

    movePiece(fromSquare, toSquare) {
        const movingPiece = this.getPiece(fromSquare);
        if (!!movingPiece && movingPiece.player === this.currentPlayer) {
            this.setPiece(toSquare, movingPiece);
            this.setPiece(fromSquare, undefined);
            this.currentPlayer = (this.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE);
        }
    }
}
