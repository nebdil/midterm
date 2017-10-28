google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Option', 'Rank'],
    ['Option-Name', 'Rank-Points-Sum'],
    ['Option-Name', 'Rank-Points-Sum'],
    ['Option-Name', 'Rank-Points-Sum']
  ]);

  var options = {
    title: 'POLL NAME'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}

$(function(){



  $('.poll-button').on('click', function(event) {
    let $url = $(this).closest('#url').attr('name')
    $('#piechart').slideToggle();
  })
  $.ajax({
    url: $url,
    method: 'GET',
    dataType: 'json',
    success: function(response) {
      console.log(response)
    }
  })





})

// option name, all the ranks and correspoding opt ids, pollname
// poll.forEach(function(option) {
//   let arr = [];
//   let point = data-rank;
//   let sum = sumPoint;
//   let choiceId = data-optionId/optionId;
//   arr.push('choiceId');
//   arr.push(sum);
//   return arr;
// }
