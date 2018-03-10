// class Grass {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];

//     }


//     yntrelVandak(ch) {
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

//                 if (matrix[y][x] == ch) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;
//     }

//     bazmanal() {
//         var norVandak = random(this.yntrelVandak(0));
//         if (norVandak) {
//             var norXot = new Grass(norVandak[0], norVandak[1]);
//             grassArr.push(norXot);
//             matrix[norVandak[1]][norVandak[0]] = 1;
//         }
//     }
// }
class Grass extends KendaniEak {

    bazmanal() {
        this.multiply++;
        this.direction = random(this.yntrelVandak(0));
        if (this.multiply >= 8 && this.direction) {
            var newGrass = new Grass(this.direction[0], this.direction[1], this.index);
            newGrass.parentX = this.x;
            newGrass.parentY = this.y;
            grassArr.push(newGrass);
            matrix[this.direction[1]][this.direction[0]] = 1;
            this.multiply = 0;
        }
    }
}


