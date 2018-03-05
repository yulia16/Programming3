class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
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

    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
        }
    }
}

class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.index = 2;
        this.energy = 5;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    yntrelVandak(ch) {
        this.stanalNorKordinatner();
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
	
    sharjvel() {
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(0));
        if (vandak) {
            matrix[this.y][this.x] = 0;
            matrix[vandak[1]][vandak[0]] = 2;
            this.x = vandak[0];
            this.y = vandak[1];
            this.energy--;
        }
    }
    bazmanal() {
        if (this.energy >= 8) {

            var vandak = random(this.yntrelVandak(1));
            if (vandak) {
                matrix[vandak[1]][vandak[0]] = 2;
                var x = vandak[0];
                var y = vandak[1];
                var norXotaker = new Xotaker(x, y);
                xotakerArr.push(norXotaker);
                this.energy = 1;

            }

        }
    }

    utel() {
        var xot = this.yntrelVandak(1);
        var norVandak = random(xot);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.x = norVandak[0];
            this.y = norVandak[1];
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

            this.energy++;
        }


    }

    mahanal() {
        if (this.energy == 0) {
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {


                    xotakerArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }
            }
        }
    }
}


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


class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
       this.index = 3;
        this.multiply = 8;
    this.energy = 2;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    yntrelVandak(ch) {
        this.stanalNorKordinatner();
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

    sharjvel() {
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(0));
        if (vandak) {
            matrix[this.y][this.x] = 0;
            matrix[vandak[1]][vandak[0]] = 3;
            this.x = vandak[0];
            this.y = vandak[1];
		this.multiply--;
			}
        else {
            var vandak = random(this.yntrelVandak(1));
            if (vandak) {
                matrix[this.y][this.x] = 1;
			var norxot= new Grass(this.y, this.x);
            grassArr.push(norxot);
                matrix[vandak[1]][vandak[0]] = 3;
                this.x = vandak[0];
                this.y = vandak[1];
					this.multiply--;
            }
        }
        
    }
    bazmanal() {
        this.multiply++;
		var norVandak = random(this.yntrelVandak(0));
        if (this.multiply >= 10 && norVandak && this.energy>=3 ){
            var norGishatich= new Gishatich(norVandak[0], norVandak[1]);
            gishatichArr.push(norGishatich);
            matrix[norVandak[1]][norVandak[0]] = 3;
                this.multiply =0;
			this.energy==0;
        }
		else{
		var norVandak = random(this.yntrelVandak(1));
		if (this.multiply >= 10 && norVandak && this.energy>=3) {
            var norGishatich= new Gishatich(norVandak[0], norVandak[1]);
            gishatichArr.push(norGishatich);
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.multiply =0;
			this.energy==0;
        }
		}
    }



    utel() {
        var xotaker = this.yntrelVandak(2);
        var norVandak = random(xotaker);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.x = norVandak[0];
            this.y = norVandak[1];
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
            this.energy++;
        }


    }

    mahanal() {
        if (this.energy == 0 && this.multiply==0) {
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {


                    gishatichArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }
            }
        }
    }
}




