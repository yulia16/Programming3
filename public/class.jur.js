class Jur {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.index = 5;
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
        var vandak = random(this.yntrelVandak(4));
        if (vandak) {
            matrix[vandak[1]][vandak[0]] = 1;
            for (var i in krakArr) {
                if (vandak[0] == krakArr[i].x && vandak[1] == krakArr[i].y) {
                    krakArr.splice(i, 1);
                    grassArr.push(new Grass(vandak[0], vandak[1]));
                }
            }
        }
        else {
            var vandak = random(this.yntrelVandak(1));
            if (vandak) {
                matrix[vandak[1]][vandak[0]] = 5;
                var norkrak = new Jur(vandak[0], vandak[1]);
                jurArr.push(norkrak);
                for (var i in grassArr) {
                    if (vandak[0] == grassArr[i].x && vandak[1] == grassArr[i].y) {
                        grassArr.splice(i, 1);
                    }
                }
            }
        }
    }
}