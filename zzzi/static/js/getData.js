function getNumber() {
    
const mbtiArray = [
  { "afdb": 0 },
  { "afdg": 1 },
  { "aflb": 2 },
  { "aflg": 3 },
  { "asdb": 4 },
  { "asdg": 5 },
  { "aslb": 6 },
  { "aslg": 7 },
  { "ifdb": 8 },
  { "ifdg": 9 },
  { "iflb": 10 },
  { "iflg": 11 },
  { "isdb": 12 },
  { "isdg": 13 },
  { "islb": 14 },
  { "islg": 15 }
];
    async function fetchSurvey() {
    const url = 'https://survey.miraclenight-server.com/survey';
    const headers = new Headers({
      'X-Survey-Name': 'sleep-mbti',
    });

    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: headers
    });

    if (response.ok) {
      try {
        const statistics = await response.json();
        let total = 0;
        for (const item of mbtiArray) {
          const key = Object.keys(item)[0]; // Get the key
          const number = item[key]; // Get the associated number
          const value = statistics.statistics[number][key]; // Access the value using the key
          if (typeof value === 'number' && !isNaN(value)) {
            total += value*2;
          }
        }
        const userNumberElement = document.getElementById('number');
        userNumberElement.innerText = total;
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    } else {
      console.error("Response is not OK.");
    }

}

    // Usage
    fetchSurvey().then(data => {
    }).catch(error => {
        console.error('Error:', error);
    });
}




function percentages(x) {
  var temp = location.href.split("?");
  var data = temp[1].split(":");

  var sleeptime = document.getElementById("sleeptime");
  sleeptime.style.width = data[0] + "%";
  var latency = document.getElementById("latency");
  latency.style.width = data[1] + "%";
  var deep = document.getElementById("deep");
  deep.style.width = data[2] + "%";
  var habits = document.getElementById("habits");
  habits.style.width = data[3] + "%";
    
const mbtiArray = [
  { "afdb": 0 },
  { "afdg": 1 },
  { "aflb": 2 },
  { "aflg": 3 },
  { "asdb": 4 },
  { "asdg": 5 },
  { "aslb": 6 },
  { "aslg": 7 },
  { "ifdb": 8 },
  { "ifdg": 9 },
  { "iflb": 10 },
  { "iflg": 11 },
  { "isdb": 12 },
  { "isdg": 13 },
  { "islb": 14 },
  { "islg": 15 }
];
    
const mbtiNumber = mbtiArray.find(item => Object.keys(item)[0] === x);
const number = mbtiNumber[x];

  async function fetchSurvey() {
    const url = 'https://survey.miraclenight-server.com/survey';
    const headers = new Headers({
      'X-Survey-Name': 'sleep-mbti',
    });

    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: headers
    });

    if (response.ok) {
      try {
        const statistics = await response.json();
          
        const mbtiValue = statistics.statistics[number][x];
          
        let total = 0;

        for (const item of mbtiArray) {
          const key = Object.keys(item)[0]; // Get the key
          const number = item[key]; // Get the associated number
          const value = statistics.statistics[number][key]; // Access the value using the key
          if (typeof value === 'number' && !isNaN(value)) {
            total += value;
          }
        }


        if (total >= 0) {
          const mbtiPercentage = (mbtiValue / total) * 100;
            
          // Now you can use the percentage as needed
          const userPercentageElement = document.getElementById('percentage');
          userPercentageElement.innerText = mbtiPercentage.toFixed(2);
              
          } else {
            console.error('mbti not found in statistics object.');
          }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    } else {
      console.error("Response is not OK.");
    }
  }

  // Usage
  fetchSurvey().then(data => {}).catch(error => {
    console.error('Error:', error);
  });
}

