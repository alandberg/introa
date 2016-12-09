var imageArray = [
	"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/14963366_1816170045295673_8260887883356829598_n.jpg?oh=f2c25fa84a23cc3ac90ffd037e0b3e9c&oe=58BB38BA",
	"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/13507274_1095079067252671_449626233433807622_n.jpg?oh=4f3e6e4433cb449972e6d318301ce6fa&oe=58BE0791",
	"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/12043100_743078042463374_5550324723500261751_n.jpg?oh=a34b776322c16244efd3e1d1c9ac59f2&oe=58880076",
	"https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/1528508_880543222039591_1491764468543805744_n.jpg?oh=1a4abcf4c0a179c3fd2687dd0cdd6f5f&oe=588A5E42",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/14947620_1231426806922585_641898940072110045_n.jpg?oh=161fb035c6840e9cfa3795c439966bdd&oe=58F00313", 
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/13221112_1065550666872178_7904802301343481264_n.jpg?oh=83690a606df7e29837326a488a34cbda&oe=58B25F67"
];

var currentIndex = 0;

function renderImage() {
	if (currentIndex < 0) {
		currentIndex = imageArray.length - 1;
	} else if (currentIndex >= imageArray.length) {
		currentIndex = 0;
	}

	$('#thePhoto').attr('src', imageArray[currentIndex]);
}
renderImage();

$('#forwardBtn').on('click', function(){
	//this is what happens when it's clicked!
	currentIndex++;
	renderImage();
});

$('#backBtn').on('click', function(){
	currentIndex--;
	renderImage();
});

var name = prompt("What's your name?");
var outputString = "Happy Holidays, " + name + 
"!";
$("h1").html(outputString);

// Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'People');
        data.addColumn('number', 'Cheerfulness');
        data.addRows([
          ['Mom', 30],
          ['Alissa', 10],
          ['Dad', 10],
          ['Rena', 10],
          ['Jake', 20]
        ]);

        var chartWidth= $(window).width()*0.5; 
          
          // Set chart options
          var options = {'title':'Cheerfulness of My Family',
                       'width':chartWidth,
                       'height':500,
                       'backgroundColor':'#FAFBF7',
                       'fontName':'Playfair Display',
                       
                                


                      }

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }





