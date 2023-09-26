function getNumber() {
    async function fetchSurvey() {
    const url = 'https://survey.miraclenight-server.com/survey';
    const headers = new Headers({
//      'Content-Type': 'application/json',
//      'Access-Control-Request-Method': 'GET',
//      'Access-Control-Request-Headers': 'content-type',
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
        console.log(statistics); // Log the response to inspect its structure

        let total = 0;

        // Iterate through the keys of the 'statistics' object
        for (const key in statistics) {
          if (statistics.hasOwnProperty(key)) {
            // Check if the value is a number before adding it to the total
            const value = statistics[key];
            if (typeof value === 'number') {
              total += value;
            }
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
    const url = 'https://survey.miraclenight-server.com/survey';
    const headers = new Headers({
      'X-Survey-Name': 'sleep-mbti',
    });

    const response = await fetch(url, {
        method: 'GET',
        headers: headers
    });

    if (response.ok) {
      try {
        const statistics = await response.json();
        console.log(statistics); // Log the response to inspect its structure

        const userPercentageElement = document.getElementById('percentage');
        let percentage = statistics[x].data;
        userPercentageElement.innerText = percentage;
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    } else {
      console.error("Response is not OK.");
    }

}

    // Usage
    fetchSurvey().then(data => {
        console.log(data);
    }).catch(error => {
        console.error('Error:', error);
    });
    
} 
