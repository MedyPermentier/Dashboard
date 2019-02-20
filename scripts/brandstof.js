//Brandstof vertical bar chart!
var brandstof = document.getElementById('brandstofChart').getContext('2d');
				let massPopChart = new Chart(brandstof, {

		   			// The type of chart 
		    		type: 'bar',

		   			// The data for the dataset
				    data: {
				        labels: [0],
				        datasets: [{
				            label: 'Hoeveelheid brandstof',
				            backgroundColor: '#bc5090',
				            /*borderColor: 'rgb(255, 99, 132)',*/
				            data: [72],
				        }]
				    },

		   			// Configuration options 
		    		options: {
		    			maintainAspectRatio: false,
		    			aspectRatio: 1,
		    			responsive: true,
		    			title: {
					        display: true,
					        text: 'Brandstof',
					        fontColor: '#ffffff',
					        fontSize: 18,
					        fontStyle: 'normal',
				      	},
		    			legend: {
		    				position: 'bottom',
				            labels: {
				            	fontColor: '#a0a0a0',
				            }
			            },	           
		    			scales: {
		    				 xAxes: [{	
				            	display: true,
				            	gridLines: {
				            		display: true,
				            		color: "#a0a0a0",		            	         
				            	},
				            	scaleLabel: {
		                            display: true,
		                            labelString: 'Brandstof'
		                        },
				            	barThickness : 100,		            	
				            }],  
				            yAxes: [{	
				            	display: true,
				            	gridLines: {
				            		display: true,
				            		color: "#a0a0a0"
				            	},	
				            	scaleLabel: {
		                            display: true,
		                            labelString: 'Hoeveelheid brandstof in %'
		                        },	            		                
				                ticks: {
				                    beginAtZero: true,
				                    suggestedMin: 0,
				                    suggestedMax: 100,
				                    stepSize: 20,
				                    fontColor: '#a0a0a0',
				                }		                
				            }]
		       			}      			
		    		}                 
				});

