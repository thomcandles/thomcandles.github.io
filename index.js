//load in papaparse script
var papaparse_script = document.createElement("script");
papaparse_script.type = "text/javascript";
papaparse_script.src = "https://cdn.jsdelivr.net/npm/papaparse@5.3.2/papaparse.min.js";
document.body.appendChild(papaparse_script)

//fetch the data
var sheet_csv = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQZBb0hdC5AnYmi445Ie0mDKuH6ipRjwmSZmEJppOLviHJnW1jLSow3jjwBO1QT-y_raxlEvzDC28b2/pub?gid=1752595225&single=true&output=csv';

fetch(sheet_csv)
  .then(function(response){return response.text();})
  .then(function(data){
    parseData(data)
  });

//parse the data
var parseData = function(data){
  var gson = Papa.parse(data, {header:true}).data;
  renderData(gson);
};

var renderData = function(gson) {
  //do something interesting!
  var chart = document.querySelector('.chart');
console.log(chart);
  for(var i=0; i<gson.length; i++) {
    var row_data = gson[i];
    var row_html = `<div class="row"><div class="left"><div  style="width:${row_data["Percent of Mind Blown By This Technique"]}%"><span>${row_data["Percent of Mind Blown By This Technique"]}</span></div></div><div class="middle">${row_data["Timestamp"]}</div><div class="right"><div style="width:${row_data["Likelihood to Use This Technique "]}%"><span>${row_data["Likelihood to Use This Technique "]}</span></div></div></div>`;
console.log(row_html);
   chart.innerHTML += row_html;
console.log(chart.innerHTML);
  }
}
