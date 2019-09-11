const dashboardInfoRoute = "/dashboardInfo"
const cors = require("cors");
const express = require("express");

const app = express();
app.use(express.json());
app.use(cors());

const generateRandomNum = (maxNumber,minNumber) => Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)

const formatTime = date =>{
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return {strTime,hours};
}

app.get(dashboardInfoRoute, async (req, res) => {
    data = {
      info:{
        time: formatTime(new Date).strTime,
        weather : generateRandomNum(30,10) ,     
        },
      officeData :[
        { 
          "Current office temperature" : generateRandomNum(25,20),
        },
        { 
          "Drinks supplies" : 4 
        },
        { 
          "Time for wathering plants" : "12:00PM" 
        }       
      ],
      currentVisitors : [
        {
          name: "Google",
          visitors: generateRandomNum(20,10)
        },
        {
          name: "Amazon",
          visitors: generateRandomNum(20,10)
        },
        {
          name: "Elsevier",
          visitors: generateRandomNum(20,10)
        },
        {
          name: "Tomtom",
          visitors: generateRandomNum(20,10)
        },
        {
          name: "Uber",
          visitors: generateRandomNum(20,10)
        },
        {
          name: "Facebook",
          visitors: generateRandomNum(20,10)
        }
      ]
        
    };
 
  res.send(data);
});

app.listen(5000);
