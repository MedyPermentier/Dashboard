//Tempratuur horizontal bar chart!
var chart = document.getElementById("myChart");
                var myChart = new Chart(chart, {

                    // The type of chart
                    type: 'horizontalBar',

                    // The data for the dataset
                    data: {
                        labels: ["Hitteschild", "Buiten", "Binnen"],
                        datasets: [{
                            data: [1700, -273.15, 21.5 ],
                            backgroundColor: ['#ffa600','#0095d9', '#bc5090'],                                                                                               
                        }]
                    },

                    // Configuration options 
                    options: {
                        maintainAspectRatio: false,
                        aspectRatio: 1,
                        responsive: true,
                        title: {
                            display: true,
                            text: 'Temperatuur',
                            fontColor: '#ffffff',
                            fontSize: 18,
                            fontStyle: 'normal',
                        },
                        legend: [{
                        	display: false,
                        }],
                        scales: {
                        	xAxes: [{	
                                display: true,
                                gridLines: {
                    		        display: true,
                    		        color: "#a0a0a0",		            	         
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Temperatuur in °C'
                                },
                                barThickness : 10,		            	
                            }],   	
                            yAxes: [{   
                                display: true,
                                gridLines: {
                                    display: true,
                                    color: "#a0a0a0"
                                },     	            		                
                    		    ticks: {
                    		        beginAtZero: true,
                    		        suggestedMin: 0,
                    		        suggestedMax: 100,  
                    		        fontColor: '#a0a0a0',
                    		    }		                
                    		}]
                        } 
                    }
                });