
const cors = require("cors");
const express = require("express");

const app = express();
app.use(express.json());
app.use(cors());

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return {strTime,hours};
}

app.get("/dashboardInfo", async (req, res) => {
  let error;
  let data;
  try {
    data = {
      info:{
        time: formatAMPM(new Date).strTime,
        weather : Math.floor(Math.random() * (30 - 5 + 1) + 5),     
        },
      officeData :[
        { 
          "Current office temperature" : Math.floor(Math.random() * (25 - 20 + 1) + 20),
        },
        { 
          "Drinks supplies" : 4 
        },
        { 
          "Time for wathering plants" : "12:00PM" 
        }       
      ],
      curentNumOfVisitors : [
        {
          name: "google",
          visitors: Math.floor(Math.random() * (20 - 10 + 1) + 10)
        },
        {
          name: "amazon",
          visitors: Math.floor(Math.random() * (20 - 10 + 1) + 10)
        },
        {
          name: "elsevier",
          visitors: Math.floor(Math.random() * (20 - 10 + 1) + 10)
        },
        {
          name: "tomtom",
          visitors: Math.floor(Math.random() * (20 - 10 + 1) + 10)
        },
        {
          name: "uber",
          visitors: Math.floor(Math.random() * (20 - 10 + 1) + 10)
        },
        {
          name: "facebook",
          visitors: Math.floor(Math.random() * (20 - 10 + 1) + 10)
        }
      ]
        
    };
  } catch (error) {
    console.error("Error:", error);
  }
  res.send({ error,data });
});

app.listen(5000);
