
function runSortOnce() {
  if(!itersort) {
    return true;
  }
  var table = document.getElementById("sort-table");
  var tbody = table.tBodies[0];
  var lastRow = tbody.rows[tbody.rows.length-1];
  var cells = lastRow.cells;
  var arr = [];
  var arr2 = [];
  for(var i=0; i<cells.length; i++) {
    var value = parseInt(getInnerText(cells[i]));
    arr.push(value);
    arr2.push(value);
  }
  var outarr = itersort(arr);
  if(outarr.length == arr2.length) {
    var isSame = true;
    for(var i=0; i<arr2.length; i++) {
      if(outarr[i] != arr2[i]) {
        isSame = false;
        break;
      }
    }
    if(isSame) {
      return true;
    }
  }
  var newRow = document.createElement("tr");
  newRow.className = "attempt";
  for(var i=0; i<outarr.length; i++) {
    var newCell = document.createElement("td");
    newCell.className = "element";
    setInnerText(newCell, new String(outarr[i]));
    newRow.appendChild(newCell);
  }
  tbody.appendChild(newRow);
  return false;
}

function runSort() {
  while(!runSortOnce()) {};
}

function attachButtonEvents() {
  addEvent(document.getElementById("run-sort-button"), "click", runSort);
}

addEvent(window, "load", attachButtonEvents);

