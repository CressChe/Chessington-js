import Rook from './rook';

export default class Directions {
    constructor(piece) {
        this.piece = piece;
        this.directions = this.getDirections(piece);
    }

    getDirections() {
        if (this.piece instanceof Rook)
            return [
                { x: 1, y: 0 },
                { x: -1, y: 0 },
                { x: 0, y: 1 },
                { x: 0, y: -1 }
            ]
    }

}