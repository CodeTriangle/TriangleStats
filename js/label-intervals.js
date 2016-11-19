var xmax, ymax, xunit, yunit, xcoord, ycoord, xscl, yscl;

function update() {
  updateWindow();
  updateScale();
}  

function updateWindow() {
  xmax = parseFloat($("#xm").prop("value"));
  ymax = parseFloat($("#ym").prop("value"));
  xunit = 600/xmax;
  yunit = 500/ymax;
}

function updateScale() {
  xscl = parseFloat($("#xs").prop("value"));
  yscl = parseFloat($("#ys").prop("value"));

  if (xscl != 0) {
    $("#labels").empty();

    var numlabels = 0;
    var xpos = 0;
    while (xpos < 600) {
      $("#labels").append("<path d='M" + xpos + " 500 L" + xpos + " 490 Z' />");
      $("#labels").append("<text x='" + xpos + "' y='480' font-family='Times New Roman' font-size='12'>" + (xscl * numlabels) + "</text>");
      xpos += xunit * xscl;
      numlabels++;
    }

    numlabels = 0;
    var ypos = 0;
    while (ypos < 500) {
      $("#labels").append("<path d='M0 " + (500 - ypos) + " L10 " + (500 - ypos) + " Z' />");
      $("#labels").append("<text x='15' y='" + (500 - ypos) + "' font-family='Times New Roman' font-size='12'>" + (yscl * numlabels) + "</text>");
      ypos += yunit * yscl;
      numlabels++;
    }
    $("svg").html($("svg").html());
  }
}