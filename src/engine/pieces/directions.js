import Bishop from './bishop';
import Rook from './rook';
import Queen from './queen';
import King from './king';
import Knight from './knight';
import Pawn from './pawn';
import Player from '../player';

export default class Directions {
    constructor(piece) {
        this.piece = piece;
        this.directions = this.getDirections();
    }

    getDirections() {
        if (this.piece instanceof Rook) {
            return [
                { x: 1, y: 0 },
                { x: -1, y: 0 },
                { x: 0, y: 1 },
                { x: 0, y: -1 }
            ]
        }
        if (this.piece instanceof Bishop) {
            return [
                { x: 1, y: 1 },
                { x: -1, y: -1 },
                { x: -1, y: 1 },
                { x: 1, y: -1 }
            ]
        }
        if (this.piece instanceof Queen || this.piece instanceof King) {
            return [
                { x: 1, y: 0 },
                { x: -1, y: 0 },
                { x: 0, y: 1 },
                { x: 0, y: -1 },
                { x: 1, y: 1 },
                { x: -1, y: -1 },
                { x: -1, y: 1 },
                { x: 1, y: -1 }
            ]
        }
        if (this.piece instanceof Knight) {
            return [
                { x: 2, y: 1 },
                { x: 2, y: -1 },
                { x: 1, y: 2 },
                { x: 1, y: -2 },
                { x: -1, y: 2 },
                { x: -1, y: -2 },
                { x: -2, y: 1 },
                { x: -2, y: -1 }
            ]
        }
        if (this.piece instanceof Pawn) {
            if (this.piece.player === Player.WHITE) {
                return {
                    pawnStartingRow: 1,
                    moveOne: { x: 1, y: 0 },
                    moveTwo: { x: 2, y: 0 },
                    takeRight: { x: 1, y: 1 },
                    takeLeft: { x: 1, y: -1 }
                }
            }
            if (this.piece.player === Player.BLACK) {
                return {
                    pawnStartingRow: 6,
                    moveOne: { x: -1, y: 0 },
                    moveTwo: { x: -2, y: 0 },
                    takeRight: { x: -1, y: 1 },
                    takeLeft: { x: -1, y: -1 }
                }
            }
        }
    }
}