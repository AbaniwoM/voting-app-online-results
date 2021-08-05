var choiceOne = 0, choiceTwo = 0,  choiceThree = 0,  choiceFour = 0,  choiceFive = 0,  choiceSix = 0;
var realtime = new Ably.Realtime({key: '4ZrbOw.-jYoOQ:NkgyRYo-gCiW1N_n'});
var myVotingChannel = realtime.channels.get('voting-channel');
myVotingChannel.subscribe('vote', (msg)=>{
    console.log(msg.data);
    switch(msg.data){
        case "1": choiceOne++;
        break;
        case "2": choiceTwo++;
        break;
        case "3": choiceThree++;
        break;
        case "4": choiceFour++;
        break;
        case "5": choiceFive++;
        break;
        case "6": choiceSix++;
        break;
        default: console.log('SOMETHING WENT WRONG!');
    }
    FusionCharts.items['vote-chart'].setJSONData({
        'chart': {
            //Set the chart caption
            caption: "Welcome to 2011 Nigerian Elections",
            //Set the chart subcaption
            subCaption: "Vote for the political party of your choice",
           //Set the theme for your chart
            theme: "fusion"
        },
        'data': [
            {
               label: "PDP",
               value: choiceOne
            },
            {
               label: "DPP",
               value: choiceTwo
            },
            {
               label: "ACN",
               value: choiceThree
            },
            {
               label: "PPA",
               value: choiceFour
            },
            {
               label: "CDC",
               value: choiceFive
            },
            {
               label: "JP",
               value: choiceSix
            },
        ]
    });
});
// Add the data
const chartData = [
    {
      label: "PDP",
      value: choiceOne
    },
    {
      label: "DPP",
      value: choiceTwo
    },
    {
      label: "ACN",
      value: choiceThree
    },
    {
      label: "PPA",
      value: choiceFour
    },
    {
      label: "CDC",
      value: choiceFive
    },
    {
      label: "JP",
      value: choiceSix
    },
];

// Add Chart config or metadata
const chartConfig = {
    //Specify the chart type
    type: 'pie2d',
    id: 'vote-chart',
    //Set the container object
    renderAt: "chart-container",
    //Specify the width of the chart
    width: "100%",
    //Specify the height of the chart
    height: "400",
    //Set the type of data
    dataFormat: "json",
    dataSource: {
      chart: {
        //Set the chart caption
        caption: "Welcome to 2011 Nigerian Elections",
        //Set the chart subcaption
        subCaption: "Vote for the political party of your choice",
       //Set the theme for your chart
        theme: "fusion"
      },
      // Chart Data from Step 2
      data: chartData
    }
};

//Render the chart
FusionCharts.ready(function(){
    var fusioncharts = new FusionCharts(chartConfig);
    fusioncharts.render();
});