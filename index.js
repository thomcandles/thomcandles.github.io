$(document).ready(function() {
  $.getJSON('https://spreadsheets.google.com/feeds/list/16qvshfM6akxUyM-96zJIOmFmpzpy9-WrFtk8JWaU6IE/1/public/values?alt=json', function(data) {
    var sheetData = data.feed.entry;

    var htmlString = "<table><tr><th>Name</th><th>Data</th></tr>";

    for (var i = 0; i < sheetData.length; i++) {
      htmlString += "<tr><td>" + data.feed.entry[i]['gsx$name']['$t'] + "</td><td>" + data.feed.entry[i]['gsx$data']['$t'] + "</td></tr>";
    }
    htmlString += "</table>"

    $('#googlesheet').html(htmlString);
  });
});
