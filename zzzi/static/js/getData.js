function getNumber() {
    async function fetchSurvey() {
    const url = 'https://api.miraclenight-server.com/survey';
    const headers = new Headers({
    'Content-Type': 'application/json',
      'Access-Control-Request-Method': 'GET',
      'Access-Control-Request-Headers': 'content-type',
      'X-Survey-Name': 'sleep-mbti',
    });

    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: headers
    });

    if (response.ok) {
        const statistics = await response.json();

        let total = 0;

          // Iterate through each object in the 'statistics' array
          statistics.data.forEach(item => {
            // Iterate through the keys in each object
            for (const key in item) {
              if (item.hasOwnProperty(key)) {
                // Add the value to the total
                total += item[key];
              }
            }
          });
        
        const userNumberElement = document.getElementById('number');
        let number = total;
        userNumberElement.innerText = total;
    } else {
        throw new Error('Failed to fetch survey');
    }
}

    // Usage
    fetchSurvey().then(data => {
        console.log(data);
    }).catch(error => {
        console.error('Error:', error);
    });
}

function percentages(x) {
    console.log("in");
    var temp = location.href.split("?"); 
    var data = temp[1].split(":"); 
        console.log(data)

    var sleeptime = document.getElementById("sleeptime");
    sleeptime.style.width = data[0]+"%";

    var latency = document.getElementById("latency")
    latency.style.width = data[1]+"%";
    var deep = document.getElementById("deep")
    deep.style.width = data[2]+"%"; 
    var habits = document.getElementById("habits")
    habits.style.width = data[3]+"%";

    async function fetchSurvey() {
    const url = 'https://api.miraclenight-server.com/survey';
    const headers = new Headers({
    'Content-Type': 'application/json',
      'Access-Control-Request-Method': 'GET',
      'Access-Control-Request-Headers': 'content-type',
      'X-Survey-Name': 'sleep-mbti',
    });

    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: headers
    });

    if (response.ok) {
        const statistics = await response.json();
        console.log(statistics);
        const userPercentageElement = document.getElementById('percentage');
        let percentage = statistics[x].data;
        userPercentageElement.innerText = percentage;
    } else {
        throw new Error('Failed to fetch survey');
    }
}

    // Usage
    fetchSurvey().then(data => {
        console.log(data);
    }).catch(error => {
        console.error('Error:', error);
    });
} 
