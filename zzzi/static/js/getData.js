//function getNumber() {  
//  var userCheckURL = 'https://api.miraclenight-server.com/survey'; 
//    
////  fetch(userCheckURL, {
////    method: 'GET', 
////    mode: 'cors', // no-cors, cors, *same-origin
////    headers: {
////      'Content-Type': 'application/json',
////      'Access-Control-Request-Method': 'GET',
////      'Access-Control-Request-Headers': 'content-type',
////      'X-Survey-Name': 'sleep-mbti',
////    },
////  })
////  .catch((error) => console.error('Error:', error))
////  .then((response) => console.log('Success:', JSON.stringify(response)));
//});
//}

function getNumber() {
  

}


// Usage
fetchSurvey().then(data => {
    console.log(data);
}).catch(error => {
    console.error('Error:', error);
});

function getPercentage() {
  const userCheckURL = 'https://api.miraclenight-server.com/survey';
  fetch(userCheckURL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
//      'Access-Control-Request-Method': 'GET',
//      'Access-Control-Request-Headers': 'content-type',
      'X-Survey-Name': 'sleep-mbti',
  },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      
      const userNumberElement = document.getElementById('number');
      let number = myJson.data;
      userNumberElement.innerText = number;
    });
}

