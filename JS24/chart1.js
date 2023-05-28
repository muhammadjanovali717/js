var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx,{
    type: 'line',
    data: {
        labels:['Jan', 'Feb ', 'March', 'Apr', 'Purple', 'Orange'],
        datasets:[{
            label:'Earnings in $',
            data: [2050, 1900, 300, 5465, 2444, 3000],
            backgroundColor:[
                'rgba(85, 85, 85 1)',
                
            ],
            borderColor: [
                'rgba(41, 155, 99)',
                   ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true
    }
})