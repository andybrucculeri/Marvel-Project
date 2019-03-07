(function() {

//ajax attempt 
  
   // var url = '../series.json';
    var series = '';
  
   $.ajax({
    type:'GET',
    url: './series.json',
    data: series,
    async: true,
    dataType:'json',
    error: function(series, white){ console.log('Your NEW call failed'); },
    success:function(series){
      console.log('series ajax');
  
  // charts.js demo
  
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
                }]
            },
    
    // Configuration options go here
    options: {}
          });
  
      } //close success
  }); //close ajax
  
    })();