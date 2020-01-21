var Points = require('points').Points;
var generator = require('points').generator;

var points, filename, blur;


//filename = 'cube'; points = new Points(generator.getCube(10, 150)); points.rotateY(60);points.rotateX(30);points.shiftZ(-300);
//filename = 'dna'; points = new Points(generator.getJSON('data/dna.json')); points.center();points.rotateX(90);points.rotateY(120);points.scale(10);
//filename = 'skull'; blur = 2; points = new Points(generator.getFromCT('data/SE000006/')); points.center();points.rotateY(180);points.shiftZ(-220);points.scale(1.5);
//filename = 'stars1'; points = new Points(generator.getStars(1000)); points.shiftZ(-1.5);points.scale(1e10);
filename = 'stars2'; points = new Points(generator.getSVG('')); points.shiftZ(-1.5);points.scale(1e10);




points.setSun({ x:0, y:10000, z:10000 });
points.setCam({ x:0, y:    0, z:  500 });

points.calcCurves(blur);

points.saveJS('./web/data.js');
points.saveSVG('./svg/'+filename+'.svg');


