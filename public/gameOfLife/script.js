	var yArr=[];
	var xArr=[];
var matrix=[];
var n=16;
var a;
for (var i=0;i<n;i++){
  matrix.push([]);

      for(var j = 0; j <n; j++){
      var a=Math.round(Math.random());
      matrix[i].push(a);
      matrix[i][j] =a;
      }}
for (var y = 0; y < n; ++y) {
yArr.push(y);}
	 for (var x = 0; x < n; ++x) {
		 xArr.push(x);
		 }
		for(i=2;i<5;i++){
		if(i!=4){	
			var randX=Math.floor(Math.random() * xArr.length);
		var randY=Math.floor(Math.random() * yArr.length);
		matrix[randX][randY]=i;
			}
		if(i==4){
		var randX=Math.floor(Math.random() * xArr.length);
			var randY=Math.floor(Math.random() * yArr.length);
		matrix[randX][randY]=i;
			
		 var randX1=Math.floor(Math.random() * xArr.length);
	 var randY1=Math.floor(Math.random() * yArr.length);
			while(randX%2!=randX1%2 || randY%2!=randY1%2){
			
		
			var randX1=Math.floor(Math.random() * xArr.length);
		var randY1=Math.floor(Math.random() * yArr.length);
			}
				matrix[randX1][randY1]=i+1;
	
		}}
	
	var grassArr = [];
var xotakerArr = [];
var caxikArr = [];
var krakArr = [];
var jurArr = [];
var gishatichArr = [];

var side = 120;


function setup() {
  frameRate(5);
  createCanvas(matrix[0].length * side, matrix.length * side);
  background('#acacac');
}

for (var y = 0; y < matrix.length; ++y) {
  for (var x = 0; x < matrix[y].length; ++x) {
    if (matrix[y][x] == 1) {
      var gr = new Grass(x, y);
      grassArr.push(gr);
    }
    else if (matrix[y][x] == 2) {
      var xotaker = new Xotaker(x, y);
      xotakerArr.push(xotaker);
    }
	else if (matrix[y][x] == 3) {
      var gishatich = new Gishatich(x, y);
      gishatichArr.push(gishatich);
    }
    else if (matrix[y][x] == 4) {
      var krak = new Krak(x, y);
      krakArr.push(krak);
    }
    else if (matrix[y][x] == 5) {
      var jur = new Jur(x, y);
      jurArr.push(jur);
    }
   
  }
}

function draw() {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        fill("green");
        rect(x * side, y * side, side, side);
      }

      else if (matrix[y][x] == 2) {
        fill("yellow");
        rect(x * side, y * side, side, side);
      }
	  else if (matrix[y][x] == 3) {
        fill("red");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 4) {
        fill("#ff8000");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 5) {
        fill("#0080ff");
        rect(x * side, y * side, side, side);
      }
      
      else if (matrix[y][x] == 0) {
        fill("#acacac");
        rect(x * side, y * side, side, side);
      }
    }
  }
  for (var i in grassArr) {
    grassArr[i].bazmanal();

  }
  for (var i in xotakerArr) {
    xotakerArr[i].sharjvel();
    xotakerArr[i].utel();
    xotakerArr[i].bazmanal();
    xotakerArr[i].mahanal();
  }
  for (var i in gishatichArr) {
    gishatichArr[i].sharjvel();
    gishatichArr[i].utel();
   gishatichArr[i].bazmanal();
   gishatichArr[i].mahanal();
  }
  for (var i in krakArr) {
    krakArr[i].move();
  }
  for (var i in jurArr) {
    jurArr[i].move();
  }
}




