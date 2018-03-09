class Krak {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.index = 4;
        //this.energy = 8;
        this.directions = [
            [this.x, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x, this.y + 2],

        ];
    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x, this.y + 2],
        ];
    }
    move() {
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(5));
        if (vandak) {
            matrix[vandak[1]][vandak[0]] = 1;
            for (var i in jurArr) {
                if (vandak[0] == jurArr[i].x && vandak[1] == jurArr[i].y) {
                    jurArr.splice(i, 1);
                    grassArr.push(new Grass(vandak[0], vandak[1]));
                }
            }
        }
        else {
            var vandak = random(this.yntrelVandak(1));
            if (vandak) {
                matrix[vandak[1]][vandak[0]] = 4;
                var norkrak = new Krak(vandak[0], vandak[1]);
                krakArr.push(norkrak);
                for (var i in grassArr) {
                    if (vandak[0] == grassArr[i].x && vandak[1] == grassArr[i].y) {
                        grassArr.splice(i, 1);
                    }
                }
            }
        }
    }
}