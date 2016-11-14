var xmax, ymax, xmin, ymin, xunit, yunit, xcoord, ycoord;

function update() {
  updateWindow();
  graphPoint();
}  

function updateWindow() {
  xmax = parseFloat($("#xmax").prop("value"));
  ymax = parseFloat($("#ymax").prop("value"));
  xmin = parseFloat($("#xmin").prop("value"));
  ymin = parseFloat($("#ymin").prop("value"));

  xunit = 600/(xmax - xmin);
  yunit = 500/(ymax - ymin);
  
  updateAxes();
  updatePoint();
}

function updateAxes() {
  var xpath = "M 0 " + (500 + ymin * yunit) + " L 600 " + (500 + ymin * yunit);
  var ypath = "M " + (-xmin * xunit) + " 0 L " + (-xmin * xunit) + " 500";
  $("#xaxis").attr("d", xpath);
  $("#yaxis").attr("d", ypath);
}

function graphPoint() {
  xcoord = parseFloat($("#xc").prop("value"));
  ycoord = parseFloat($("#yc").prop("value"));
  updatePoint();
}

function updatePoint() {
  $("#changed").attr("cx", (xcoord - xmin) * xunit);
  $("#changed").attr("cy", 500-((ycoord - ymin) * yunit));
}
