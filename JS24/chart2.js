var ctx = document.getElementById('doughnut-chart').getContext('2d');
var myChart = new Chart(ctx,{
    type: 'doughnut',
    data: {
        labels:['russan', 'inglis tili ', 'ona tili', 'matem', 'fizika', 'IT'],
        datasets:[{
            label:'Employees',
            data: [42, 54, 30, 55, 24, 30],
            backgroundColor: [
                'rgba(85, 85, 85 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255,206,86, 1)',
                'rgba(120, 46,139 1)',
            ],
            borderColor: [
                'rgba(85, 85, 85 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255,206,86, 1)',
                'rgba(120, 46,139 1)',
                    
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true
    }
})