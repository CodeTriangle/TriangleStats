function graph() {
  var c = document.getElementById("changed");
  var xc = parseInt(document.getElementById("xc").value);
  var yc = parseInt(document.getElementById("yc").value);
  var xm = parseInt(document.getElementById("xm").value);
  var ym = parseInt(document.getElementById("ym").value);

  var xUnit = 600/xm;
  var yUnit = 500/ym;
  c.setAttribute("cx", xc*xUnit);
  c.setAttribute("cy", ym-(yc*yUnit));
}
