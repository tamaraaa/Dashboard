
const cors = require("cors");
const express = require("express");

const app = express();

app.use(express.json());
app.use(cors());

// koristi moment.js ili ga izbaci iz package.json
// imas ovo u utils, importuj 
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
// Sredi indentaciju (data)

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
        { "Current office temperature" : Math.floor(Math.random() * (25 - 20 + 1) + 20),
        },
        { "Drinks supplies" : 4 },
        { "Time for wathering plants" : "12:00PM" }       
      ],
      curentNumOfVisitors :[
        {
          name : 'google',
          visitors :  Math.floor(Math.random() * (20 - 10 + 1) + 10),
          key : 'site1'
        },
     {
          name : 'google',
          visitors :  Math.floor(Math.random() * (20 - 10 + 1) + 10),
          key : 'site2'
        },
        {
          name : 'google',
          visitors :  Math.floor(Math.random() * (20 - 10 + 1) + 10),
          key : 'site3'
        },
         {
          name : 'google',
          visitors :  Math.floor(Math.random() * (20 - 10 + 1) + 10),
          key : 'site4'
        },
         {
          name : 'google',
          visitors :  Math.floor(Math.random() * (20 - 10 + 1) + 10),
          key : 'site5'
        },
       {
          name : 'google',
          visitors :  Math.floor(Math.random() * (20 - 10 + 1) + 10),
          key : 'site6'
        }
      
      ]
        
    };
  } catch (error) {
    console.error("Error:", error);
  }
  res.send({ error,data });
});

app.listen(5000);
