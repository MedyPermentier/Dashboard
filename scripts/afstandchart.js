//Astand line chart!
var myLineChart = document.getElementById('afstandChart').getContext('2d');
				var chartLine = new Chart(afstandChart, {

				    // The type of chart
				    type: 'line',

				    // The data for the dataset
				    data: {
				        labels: [1, 2, 3, 4, 5, 6, 7, 8],
				        datasets: [{
							label: 'Geplande afstand',
							fill: false,
							backgroundColor: '#0095d9',
							borderColor: '#0095d9',
							data: [227.9, 192.9, 162.9, 132.9, 102.9, 62.9, 37.9,  0],			
							}, {
							label: 'Werkelijke afstand',
							fill: false,
							backgroundColor: '#ffa600',
							borderColor: '#ffa600',
							data: [227.9, 182.9, 172.9, 132.9, 115.9, 75.9, 26.9, 0],					
						}]
				    },

				    // Configuration options 
				    options: {
				    	maintainAspectRatio: false,
		    			aspectRatio: 1,
		    			responsive: true,
				    	title: {
					        display: true,
					        text: 'Afstand',
					        fontColor: '#ffffff',
					        fontSize: 18,
					        fontStyle: 'normal',
				      	},
				    	legend: {
		    				position: 'bottom',
				            labels: {
				                fontColor: '#a0a0a0'
				            }
			            },
			            scales: {
		    				xAxes: [{	
				            	display: true,
				            	scaleLabel: {
		                            display: true,
		                            labelString: 'Tijd in maanden'
		                        },
				            	gridLines: {
				            		display: true,
				            		color: "#a0a0a0",		            	         
				            	},				          	            	
				            }],   				
				            yAxes: [{	
				            	display: true,
				            	scaleLabel: {
		                            display: true,
		                            labelString: 'Afstand in km (x mln)'
		                        },
				            	gridLines: {
				            		display: true,
				            		color: "#a0a0a0"
				            	},		            		                				                		                
				            }]
		       			 }    
				    }
				});