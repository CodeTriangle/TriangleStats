var xmax = 600;
var ymax = 500;
var xunit = 1;
var yunit = 1;
var xcoord = 100;
var ycoord = 100;

function update() {
  updateWindow();
  graphPoint();
}  

function updateWindow() {
  xmax = parseFloat($("#xm").prop("value"));
  ymax = parseFloat($("#ym").prop("value"));
  xunit = 600/xmax;
  yunit = 500/ymax;
  updatePoint();
}

function graphPoint() {
  xcoord = parseFloat($("#xc").prop("value"));
  ycoord = parseFloat($("#yc").prop("value"));
  updatePoint();
}

function updatePoint() {
  $("#changed").attr("cx", xcoord*xunit);
  $("#changed").attr("cy", 500-(ycoord*yunit));
}
