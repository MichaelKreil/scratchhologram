var Points = require('points');

var points, filename, blur;
//points = Points.getRandomPoints(1000, 100);


//filename = 'cube'; points = Points.getCube(10, 150);points.rotateY(60);points.rotateX(30);points.shiftZ(-300);
//filename = 'dna'; points = Points.getJSON('data/dna.json');points.center();points.rotateX(90);points.rotateY(120);points.scale(10);
//filename = 'skull'; blur = 2; points = Points.getFromCT('data/SE000006/');points.center();points.rotateY(180);points.shiftZ(-220);points.scale(1.5);




points.setSun({ x:0, y:10000, z:10000 });
points.setCam({ x:0, y:    0, z:  500 });

points.calcCurves(blur);

points.saveJS('./web/data.js');
points.saveSVG('./svg/'+filename+'.svg');


