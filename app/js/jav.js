function getChartData(s) {
    $("#loadingMessage").html("");
    $.ajax({
        url: "/js/data.json",
        success: function (result) {
            $(".StrafickGraf").html("");
            if(s=="m") {
                const chartdata = [];
                chartdata.push(result.FirstGrafdata);
                const clabels = [];
                    clabels.push(result.labelsmonth);
                renderchart(chartdata, clabels);
            }
            if(s=="y") {
                const chartdata = [];
                chartdata.push(result.SecondGrafdata);
                const clabels = [];
                clabels.push(result.labelsyear);
                renderchart(chartdata, clabels);
            }
        },
        error: function (err) {
            $(".StrafickGraf").html("Error");
        }
    });
}
$("#Butm").click(
    function () {
        getChartData("m");
    }
);
$("#Buty").click(
    function () {
        getChartData("y");
    }
);
function renderchart(chartdata,clabels) {
    getChartData();
    var area = document.getElementById("myChart").getContext("2d");
    var urChart = new Chart(area, {
        type: 'line',
        data: {
            labels: clabels,
            datasets: [{
                label: "New Visitor",
                pointRadius: 0,
                fill: true,
                backgroundColor: 'rgba(76, 132, 255, 0.9)',
                borderColor: 'rgba(76, 132, 255, 0.9)',
                data: chartdata[1],
                cubicInterpolationMode: 'monotone',
            }, {
                label: "Return Visitor",
                pointRadius: 0,
                fill: true,
                backgroundColor: 'rgba(0,35,148,0.9)',
                borderColor: 'rgba(0,35,148,0.9)',
                data: chartdata[0],
                cubicInterpolationMode: 'monotone',

            }]
        },
        options: {
            scales: {
                x: {
                    grid: {
                        display: false,
                    }
                },
                y: {
                    ticks: {
                        callback: function (value, index, ticks) {
                            if (value % 1 == 0) {

                                if (value > 0) {
                                    return value + 'M';
                                } else {
                                    return value;
                                }
                            }
                        }
                    },
                    grid: {
                        display: false,
                    }
                }
            },
            plugins: {

                legend: {
                    position: 'top',
                    align: 'end',
                    labels: {
                        usePointStyle: true,
                        padding: 50,

                    }
                },
            },
        }

    });
}

var area = document.getElementById("Graf01").getContext("2d");
var urChart = new Chart(area, {
    type: 'line',
    data: {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
        datasets: [{


            backgroundColor: 'rgba(76,255,112,0.9)',
            borderColor: 'rgba(127,255,76,0.9)',
            data: [4,5,0,2,1,5,3,6,1,11,6,9,7,8,10],

        }]
    },
    options: {
        scales: {

            x: {
                display:false,

                grid: {
                    display:false,
                }
            },
            y: {
                display:false,
                grid: {
                    display:false,
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }

})
var area = document.getElementById("Graf02").getContext("2d");
var urChart = new Chart(area, {
    type: 'line',
    data: {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13],
        datasets: [{

            backgroundColor: 'rgba(255,76,76,0.9)',
            borderColor: 'rgba(255,76,76,0.9)',
            data: [6,4,8,7,0,3,4,10,8,7,8,7,5],

        }]
    },
    options: {
        scales: {
            x: {
                display:false,
                grid: {
                    display:false,
                }
            },
            y: {
                display:false,
                grid: {
                    display:false,
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }

})
var area = document.getElementById("Graf03").getContext("2d");
var urChart = new Chart(area, {
    type: 'bar',
    data: {
        labels: [0+'%',100+'%'],
        datasets: [{


                label:"Today",
                pointRadius: 0,
                fill: true,
                backgroundColor: 'rgba(17,211,79,0.9)',
                borderColor: 'rgba(17,211,79,0.9)',
                data: [67,0],
                barThickness:6,
                padding:60,

            }, {
            barThickness:6,
            label: "Yesterday",
            pointRadius: 0,
            fill: true,
            backgroundColor: 'rgba(6,224,253,0.9)',
            borderColor: 'rgba(6,224,253,0.9)',
            data: [0,78],

        }]


    },
    options: {
        scales: {

            x: {
                display:false,
                grid: {
                    display:false,
                }
            },
            y: {
                display:false,
                grid: {
                    display:false,
                }
            }
        },
        indexAxis:'y',
        plugins: {
            legend: {


                     display:false,
            }

        }
    }

})
var area = document.getElementById("Sel01").getContext("2d");
var urChart = new Chart(area, {
    type: 'bar',
    data: {
        labels: [1,2,3,4,5,6,7,8,9],
        datasets: [{

            fill: true,
            backgroundColor: 'rgba(39,210,18,0.9)',
            borderColor: 'rgba(39,210,18,0.9)',
            data: [2, 1, 3, 4, 5, 3, 4,2,4],

        }]
    },
    options: {
        scales: {
            x: {
                display:false,
                grid: {
                    display:false,
                }
            },
            y: {
                display:false,
                grid: {
                    display:false,
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }

})

var area = document.getElementById("Sel02").getContext("2d");

var urChart = new Chart(area, {

    type: 'bar',
    data: {
        labels: [1,2,3,4,5,6,7,8,9,10],
        datasets: [{

            fill: true,
            backgroundColor: 'rgba(225,31,31,0.9)',
            borderColor: 'rgba(225,31,31,0.9)',
            data: [10, 8, 2, 5, 6, 10, 14,17,16,20],

        }]
    },
    options: {
        scales: {
            x: {
                display:false,
                grid: {
                    display:false,
                }
            },
            y: {
                display:false,
                grid: {
                    display:false,
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }
})
var area = document.getElementById("Sel03").getContext("2d");
var urChart = new Chart(area, {
    type: 'line',
    data: {
        labels: [1,2,3,4,5,6,7,8,9],
        datasets: [{
            borderColor: 'rgba(232,145,32,0.9)',
            data: [0, 4, 3, 8, 7, 6, 8,4,3],

        }]
    },
    options: {
        scales: {
            x: {
                display:false,
                grid: {
                    display:false,
                }
            },
            y: {
                display:false,
                grid: {
                    display:false,
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }
})
var area = document.getElementById("Sel04").getContext("2d");
var urChart = new Chart(area, {
    type: 'line',
    data: {
        labels: [1,2,3,4,5,6,7,8],
        datasets: [{

            pointRadius: 0,
            fill: true,
            backgroundColor: 'rgba(17,211,79,0.9)',
            borderColor: 'rgba(17,211,79,0.9)',
            data: [0,4, 2,6, 6.5, 10, 0],

        }, {

            pointRadius: 0,
            fill: true,
            backgroundColor: 'rgba(6,224,253,0.9)',
            borderColor: 'rgba(6,224,253,0.9)',
            data: [0,4, 3,12, 6.5, 2,8, 0],

        }]
    },
    options: {
        scales: {
            x: {
                display:false,
                grid: {
                    display:false,
                }
            },
            y: {
                display:false,
                grid: {
                    display:false,
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }
})
var area = document.getElementById("Sel05").getContext("2d");
var urChart = new Chart(area, {
    type: 'pie',
    data: {
        labels: [1,2,3],
        datasets: [{

            fill: true,
            data:[30,30,40],
            backgroundColor: [
                'rgb(155,155,155)',
                'rgb(94,101,187)',
                'rgb(2,9,91)'
            ],
            borderWidth: 1

        }]
    },
    options: {

        plugins: {
            legend: {
                display: false,
            }
        }
    }
})
var area = document.getElementById("Sel06").getContext("2d");
var urChart = new Chart(area, {
    type: 'bar',
    data: {
        labels: [1,2,3,4,5,6,7,8,9],
        datasets: [{

            fill: true,
            backgroundColor: 'rgba(76, 132, 255, 0.9)',
            borderColor: 'rgba(76, 132, 255, 0.9)',
            data: [4, 2, 6, 7, 8, 5,6,4,7],

        }]
    },
    options: {
        scales: {
            x: {
                display:false,
                grid: {
                    display:false,
                }
            },
            y: {
                display:false,
                grid: {
                    display:false,
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }

})
var area = document.getElementById("StrafickG01").getContext("2d");
var urChart = new Chart(area, {
    type: 'doughnut',
    data: {
        labels: [1,2,3],
        datasets: [{
            data:[30,30,40],
            backgroundColor: [
                'rgb(155,155,155)',
                'rgb(94,101,187)',
                'rgb(2,9,91)'
            ],
            borderWidth: 1
        }]
    },
    options: {

        plugins: {
            legend: {
                display: false,
            }
        }
    }
})