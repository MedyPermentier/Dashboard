//Nood voorraad circle chart!
var nood = document.getElementById('noodChart').getContext('2d');
				var chart = new Chart(nood, {

				    // The type of chart we want to create
				    type: 'doughnut',

				    // The data for the dataset
				    data: {
				      	labels: ["Op voorraad", "Uit voorraad"],
				      	datasets: [{
				         	backgroundColor: ["#bc5090", "#d3d3d3"],
				          	borderWidth: 0,
				          	data: [100, 0]
				        }]
				    },

				     // Configuration options
				    options: {
				    	 responsive: true,
				    	title: {
				        	display: true,
				        	text: 'Nood voorraad',
				        	fontColor: '#ffffff',
				        	fontSize: 18,
				        	fontStyle: 'normal',
				      	},
				    	cutoutPercentage: 80,
				    	elements: {
						    center: {
							    text: '100%',
							    color: '#a0a0a0', //Default black				     
							    sidePadding: 15 //Default 20 (as a percentage)
						    },
						},
				    	legend: {
		    				position: 'bottom',
				            labels: {
				                fontColor: '#a0a0a0'
				            },
			            },  
					},		 
				});

Chart.pluginService.register({
			  beforeDraw: function (chart) {
			    if (chart.config.options.elements.center) {
			      //Get ctx from string
			      var ctx = chart.chart.ctx;

			      //Get options from the center object in options
			      var centerConfig = chart.config.options.elements.center;
			      var fontStyle = centerConfig.fontStyle || 'Arial';
			      var txt = centerConfig.text;
			      var color = centerConfig.color || '#000';
			      var sidePadding = centerConfig.sidePadding || 20;
			      var sidePaddingCalculated = (sidePadding/100) * (chart.innerRadius * 2)
			      //Start with a base font of 30px
			      ctx.font = "50px " + fontStyle;

			      //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
			      var stringWidth = ctx.measureText(txt).width;
			      var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

			      // Find out how much the font can grow in width.
			      var widthRatio = elementWidth / stringWidth;
			      var newFontSize = Math.floor(30 * widthRatio);
			      var elementHeight = (chart.innerRadius * 2);

			      // Pick a new font size so it will not be larger than the height of label.
			      var fontSizeToUse = Math.min(newFontSize, elementHeight);

			      //Set font settings to draw it correctly.
			      ctx.textAlign = 'center';
			      ctx.textBaseline = 'middle';
			      var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
			      var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
			      ctx.font = fontSizeToUse+"px " + fontStyle;
			      ctx.fillStyle = color;

			      //Draw text in center
			      ctx.fillText(txt, centerX, centerY);
			    }
			  }
});


		


