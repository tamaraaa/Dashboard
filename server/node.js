const cors = require("cors");
const express = require("express");
var uniqid = require('uniqid')

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
  return strTime;
}

app.get("/dashboardInfo", async (req, res) => {
  let error;
  let data;
  try {
    data = {
      info:{
      time: formatAMPM(new Date),
      weather : Math.floor(Math.random() * (30 - 5 + 1) + 5),
      
      },
      cardsData :[
        { officeTemperature : Math.floor(Math.random() * (25 - 20 + 1) + 20),
          id : uniqid()   
        },
        { drinks: 4, id : uniqid() },
        { watheringPlant : 12, id : uniqid()  }       
      ],
      curentNumOfVisitors : {
        site1 : {
          name : 'google',
          visitors :  Math.floor(Math.random() * (50 - 10 + 1) + 10),
          key : 'site1'
        },
        site2 : {
          name : 'google',
          visitors :  Math.floor(Math.random() * (50 - 10 + 1) + 10),
          key : 'site2'
        },
        site3 : {
          name : 'google',
          visitors :  Math.floor(Math.random() * (50 - 10 + 1) + 10),
          key : 'site3'
        },
        site4 : {
          name : 'google',
          visitors :  Math.floor(Math.random() * (50 - 10 + 1) + 10),
          key : 'site4'
        },
        site5 : {
          name : 'google',
          visitors :  Math.floor(Math.random() * (50 - 10 + 1) + 10),
          key : 'site5'
        },
        site6 : {
          name : 'google',
          visitors :  Math.floor(Math.random() * (50 - 10 + 1) + 10),
          key : 'site6'
        }
      }
    };
  } catch (error) {
    console.error("Error:", error);
  }
  res.send({ error,data });
});

app.listen(5000);
