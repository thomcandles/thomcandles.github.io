$(document).ready(function() {
  $.getJSON('https://docs.google.com/spreadsheets/d/16qvshfM6akxUyM-96zJIOmFmpzpy9-WrFtk8JWaU6IE/edit?usp=sharing', function(data) {
    var sheetData = data.feed.entry;

    var htmlString = "<table><tr><th>Name</th><th>Data</th></tr>";

    for (var i = 0; i < sheetData.length; i++) {
      htmlString += "<tr><td>" + data.feed.entry[i]['gsx$name']['$t'] + "</td><td>" + data.feed.entry[i]['gsx$data']['$t'] + "</td></tr>";
    }
    htmlString += "</table>"

    $('#googlesheet').html(htmlString);
  });
});
