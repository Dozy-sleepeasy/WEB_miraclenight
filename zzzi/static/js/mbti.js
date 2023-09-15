// Define your questions in a JSON format
const questions = [
  {
    text: 'dd',
    progressWidth: '10px',
    progressVector: '',
    img: '/zzzi/static/image/1.png',
    button1Text: 'First Button 1',
    button2Text: 'Second Button 1',
  },
  {
    text: 'dd',
  progressWidth: '40px',
  progressVector: '',
    img: '/zzzi/static/image/2.png',
    button1Text: 'First Button 1',
    button2Text: 'Second Button 1',
  },
    {
    text: 'dd',
    progressWidth: '',
    progressVector: '',
    img: '/zzzi/static/image/3.png',
    button1Text: 'First Button 1',
    button2Text: 'Second Button 1',
  },
    {
    text: 'dd',
    progressWidth: '',
    progressVector: '',
    img: '/zzzi/static/image/4.png',
    button1Text: 'First Button 1',
    button2Text: 'Second Button 1',
  },
    {
    text: 'dd',
    progressWidth: '',
    progressVector: '',
    img: '/zzzi/static/image/5.png',
    button1Text: 'First Button 1',
    button2Text: 'Second Button 1',
  },
    {
    text: 'dd',
    progressWidth: '',
    progressVector: '',
    img: '/zzzi/static/image/6.png',
    button1Text: 'First Button 1',
    button2Text: 'Second Button 1',
  },
    {
    text: 'dd',
    progressWidth: '',
    progressVector: '',
    img: '/zzzi/static/image/7.png',
    button1Text: 'First Button 1',
    button2Text: 'Second Button 1',
  },
    {
    text: 'dd',
    progressWidth: '',
    progressVector: '',
    img: '/zzzi/static/image/8.png',
    button1Text: 'First Button 1',
    button2Text: 'Second Button 1',
  },
    {
    text: 'dd',
    progressWidth: '',
    progressVector: '',
    img: '/zzzi/static/image/9.png',
    button1Text: 'First Button 1',
    button2Text: 'Second Button 1',
  },
    {
    text: 'dd',
    progressWidth: '',
    progressVector: '',
    img: '/zzzi/static/image/10.png',
    button1Text: 'First Button 1',
    button2Text: 'Second Button 1',
  },

];

// Initialize variables to track user responses and current question index
let currentIndex = 0;
let userResponses = [];

function startGame() {
    console.log("update");
     document.getElementById("gameScreen").style.display = "block";
     document.getElementById("beforeGame").style.display = "none";
    var audio = document.getElementById("audio");
    // audio.play();
    // audio.volume=0.5;
}

// Function to update the HTML content with the current question
function updateQuestion() {
    console.log('updateQuestion in');
  if (currentIndex < questions.length) {
    const question = questions[currentIndex];
    // Update HTML elements with question data
    // document.getElementById('progress-bar').textContent = question.progressBar;
    console.log(question.text);
    document.getElementById('page-index').textContent = currentIndex + 1;
    document.getElementById('progress-bar').style.width = question.progressWidth;
    document.getElementById('progress-vector').style.width = question.progressVector;
    document.getElementById('game-text').textContent = question.text;
    document.getElementById('game-img').src = question.img;
    document.querySelector('#game-button-1').textContent = question.button1Text;
    document.querySelector('#game-button-2').textContent = question.button2Text;
   
  } else {
    // All questions answered; proceed to calculate and send data
    calculateAndSendData();
  }
}

// Event listener for the first button
document.querySelectorAll('.game-button-1').forEach((button, index) => {
  button.addEventListener('click', () => {
    console.log('game-button-1 in');
    // Store the user's response as true (1) for the current question
    userResponses[currentIndex] = 1;
    // Move to the next question
    currentIndex++;
    // Update the HTML content with the next question
    updateQuestion();
  });
});

// Event listener for the second button
document.querySelectorAll('.game-button-2').forEach((button, index) => {
  button.addEventListener('click', () => {
    console.log('game-button-2 in');
    // Store the user's response as false (0) for the current question
    userResponses[currentIndex] = 0;
    // Move to the next question
    currentIndex++;
    // Update the HTML content with the next question
    updateQuestion();
  });
});

// Function to calculate results based on user responses
function calculateAndSendData() {
  console.log('calculateAndSendData in');
    
  let time_ad = 0;
  let time_inad = 0;
  let latency_fast = 0;
  let latency_slow = 0;
  let deepness_deep = 0;
  let deepness_light = 0;
  let habits_bad = 0;
  let habits_good = 0;

  for (let i = 0; i < userResponses.length; i++) {
  if (userResponses[i] == 1) {
      if (i === 0) {
        time_inad += 35;
      }
      
    // For habits_1, habits_2, and habits_3
    if (i === 1 || i === 2) {
      habits_bad += 30;
    }
    // For habits_3
    if (i === 3) {
      habits_good += 30;
    }
    
    // For latency_1
    if (i === 4) {
      latency_fast += 25;
    }
      
    // For latency_2
    if (i === 5) {
      latency_slow += 25;
    }
      
    // For latency_3
    if (i === 6) {
      latency_fast += 50;
    }
    
    // For deep_1 and deep_2
    if (i === 7) {
      deepness_deep += 45;
    }
      
    if (i === 8) {
      deepness_light += 45;
    }
    
    // For sleeptime_2
    if (i === 9) {
      time_inad += 40;
    }
  }
}

  // After calculations, convert variables to MBTI
  const mbti = `${sleep_time}${latency_time}${deepness}${habits}`;
  console.log(mbti);

  // Send data to API
  // Implement the sendPostRequest function here
  // sendPostRequest(userResponses, mbti);

  // Redirect to the appropriate page
  URLredirection(mbti);
}

// Function to send data to the API
function sendPostRequest(userResponses, mbti) {
  const postData = {
    responses: userResponses,
    mbti: mbti,
  };

  fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  })
    .then((response) => {
      if (response.ok) {
        // Handle successful API response
        URLredirection();
      } else {
        // Handle API error
      }
    })
    .catch((error) => {
      // Handle network error
    });
}

// Function to handle redirection based on MBTI
function URLredirection(mbti) {
  switch (mbti) {
    case 'AFDG':
      window.location.href = 'afdg.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'AFLG':
      window.location.href = 'afdg.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'ASDG':
      window.location.href = 'asdg.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'ASDB':
      window.location.href = 'asdb.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'AFDB':
      window.location.href = 'afdb.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'AFLB':
      window.location.href = 'afdb.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'ASLG':
      window.location.href = 'aslg.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'ASLB':
      window.location.href = 'aslb.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'IFDG':
      window.location.href = 'ifdg.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'IFLG':
      window.location.href = 'iflg.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'ISDG':
      window.location.href = 'isdg.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'ISDB':
      window.location.href = 'isdb.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'IFDB':
      window.location.href = 'ifdb.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'IFLB':
      window.location.href = 'iflb.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'ISLG':
      window.location.href = 'islg.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'ISLB':
      window.location.href = 'islb.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
  }
}
