var Points = require('points');

var points;
//points = Points.getRandomPoints(1000, 100);


/*Würfel*/points = Points.getCube(10, 150);points.rotateY(60);points.rotateX(30);points.shiftZ(-300);
//*DNA*/ points = Points.getJSON('dna.json');points.center();points.rotateX(90);points.rotateY(120);points.scale(8);




points.setSun({ x:0, y:10000, z:10000 });
points.setCam({ x:0, y:    0, z:  500 });

points.calcCurves();

points.saveJS('./web/data.js');


