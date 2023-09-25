// Define your questions in a JSON format
const questions = [
  {
    text: '퇴근하고 집에 도착하니<br>벌써 밤 10시!<br>나에게 10시란...',
    progressWidth: '10%',
    progressVector: '2%',
    img: '/zzzi/static/image/1.png',
    button1Text: '넷플릭스 시작!<br>드라마 정주행 간다.',
    button2Text: '곧 잘 시간이니까<br>꿀잠을 준비한다.',
  },
  {
    text: '좀 출출한데?<br>야식이 땡기는데...',
    progressWidth: '20%',
    progressVector: '12%',
    img: '/zzzi/static/image/2.png',
    button1Text: '살 찌니까<br>야식은 패스!',
    button2Text: '배민으로 직행!<br>치킨을 시킨다.',
  },
  {
    text: '침대로 다이빙하기 전에<br>샤워할까?',
    progressWidth: '30%',
    progressVector: '22%',
    img: '/zzzi/static/image/3.png',
    button1Text: '내일 아침에 또 씻기 귀찮,,,<br>일단 눕자자',
    button2Text: '하루 동안 쌓인<br>먼지를 털어내자',
  },
  {
    text: '침대에 눕고 나서<br>핸드폰을 잡은 후...',
    progressWidth: '40%',
    progressVector: '32%',
    img: '/zzzi/static/image/4.png',
    button1Text: '알람만 맞추고<br>핸드폰 끄자',
    button2Text: '자, 이제부터<br>핸드폰 세계로 빠져보자...',
  },
  {
    text: '앗, 창가에서<br>빛이 들어오네',
    progressWidth: '50%',
    progressVector: '42%',
    img: '/zzzi/static/image/5.png',
    button1Text: '암막 커튼으로<br>완벽 차단해야지',
    button2Text: '빛이 있었어?<br>신경 X ',
  },
  {
    text: '시계 초침소리가<br>들려온다.',
    progressWidth: '60%',
    progressVector: '52%',
    img: '/zzzi/static/image/6.png',
    button1Text: '참다 참다<br>노이즈캔슬링 이어폰을 꺼낸다',
    button2Text: '초침소리와 함께<br>최면에 빠진다... 즐기는 자.',
  },
  {
    text: '잘 준비 끝!<br>취침의 문턱에서 나는',
    progressWidth: '70%',
    progressVector: '62%',
    img: '/zzzi/static/image/7.png',
    button1Text: '나른나른<br>잠이 쏟아진다',
    button2Text: '말똥말똥<br>전혀 잠이 오지 않아',
  },
  {
    text: '언제 잠에 들었지?<br>자던 중...',
    progressWidth: '80%',
    progressVector: '72%',
    img: '/zzzi/static/image/8.png',
    button1Text: '중간에 <br>꼭 한 번 일어난다',
    button2Text: '딥슬립<br>그 잡채',
  },
  {
    text: '알람이 울린다!<br>아침의 나는',
    progressWidth: '90%',
    progressVector: '82%',
    img: '/zzzi/static/image/9.png',
    button1Text: '우와 상쾌해!<br>오늘은 나의 것! ><',
    button2Text: '5분만 <br>더.. 잘래..',
  },
  {
    text: '그래서 어제 밤<br>얼마나 잤냐면...',
    progressWidth: '100%',
    progressVector: '92%',
    img: '/zzzi/static/image/10.png',
    button1Text: '6시간도 <br> 못 잔 것 같아.',
    button2Text: '7시간 이상<br>푹 잤다!',
  },
];

// Initialize variables to track user responses and current question index
let currentIndex = 0;
let userResponses = [];

function startGame() {
     document.getElementById("gameScreen").style.display = "block";
     document.getElementById("beforeGame").style.display = "none";
    var audio = document.getElementById("audio");
    // audio.play();
    // audio.volume=0.5;
}

// Function to update the HTML content with the current question
function updateQuestion() {
  if (currentIndex < questions.length) {
    const question = questions[currentIndex];
    // Update HTML elements with question data
    // document.getElementById('progress-bar').textContent = question.progressBar;
    document.getElementById('page-index').textContent = currentIndex + 1;
    document.getElementById('progress-bar').style.width = question.progressWidth;
    document.querySelector('.progress-button').style.left = question.progressVector;
    document.getElementById('game-text').innerHTML  = question.text;
    document.getElementById('game-img').src = question.img;
    document.querySelector('#game-button-1').innerHTML  = question.button1Text;
    document.querySelector('#game-button-2').innerHTML  = question.button2Text;
   
  } else {
    // All questions answered; proceed to calculate and send data
    calculateAndSendData();
  }
}

// Event listener for the first button
document.querySelectorAll('#game-button-1').forEach((button, index) => {
  button.addEventListener('click', () => {
    // Store the user's response as true (1) for the current question
    userResponses[currentIndex] = true;
      console.log(userResponses[currentIndex]);
    // Move to the next question
    currentIndex++;
    // Update the HTML content with the next question
    updateQuestion();
  });
});

// Event listener for the second button
document.querySelectorAll('#game-button-2').forEach((button, index) => {
  button.addEventListener('click', () => {
    // Store the user's response as false (0) for the current question
    userResponses[currentIndex] = false;
      console.log(userResponses[currentIndex]);
    // Move to the next question
    currentIndex++;
    // Update the HTML content with the next question
    updateQuestion();
  });
});


// Function to send data to the API
function sendPostRequest(userResponses, mbti, sleep_time, latency_time, deepness, habits) {
  const postData = {
    sleeptime_1: userResponses[0],
    habit_1: userResponses[1],
    habit_2: userResponses[2],
    habit_3: userResponses[3],
    latency_1: userResponses[4],
    latency_2: userResponses[5],
    latency_3: userResponses[6],
    deep_1: userResponses[7],
    deep_2: userResponses[8],
    sleeptime_2: userResponses[9],
    mbti: mbti,
    a: sleep_time,
    b: latency_time,
    c: deepness,
    d: habits,
  };

  fetch('https://survey.miraclenight-server.com/survey', {
    method: 'POST',
    headers: {
      'X-Survey-Name': 'sleep-mbti',
    },
    body: JSON.stringify(postData),
  })
    .then((response) => {
      if (response.ok) {
      } else {
          console.log("no");
      }
    })
    .catch((error) => { console.log("no2");
    });
}


// Function to calculate results based on user responses
function calculateAndSendData() {
    
  let time_ad = 0;
  let time_inad = 0;
  let latency_fast = 0;
  let latency_slow = 0;
  let deepness_deep = 0;
  let deepness_light = 0;
  let habits_bad = 0;
  let habits_good = 0;

  var sleep_time = '';
  var latency_time = '';
  var deepness = '';
  var habits = '';
    

  for (let i = 0; i < userResponses.length; i++) {
      if (userResponses[i] == true) {
          if (i === 0) {
            time_inad += 35;
          } 

        if (i === 2) {
          habits_bad += 30;
        } 

        if (i === 1 || i === 3) {
          habits_good += 30;
        } 

        if (i === 4 || i === 5) {
          latency_slow += 20;
        } 

        if (i === 6) {
          latency_fast += 50;
        }

        if (i === 7) {
          deepness_light += 70;
        } 

        if (i === 8) {
          deepness_deep += 20;
        } 

        if (i === 9) {
          time_inad += 50;
        } 
      }
      
      else if (userResponses[i] == false) {
          if (i === 0) {
            time_ad += 35;
          } 

        if (i === 2) {
          habits_good += 30;
        } 

        if (i === 1 || i === 3) {
          habits_bad += 30;
        } 

        if (i === 4 || i === 5) {
          latency_fast += 20;
        } 

        if (i === 6) {
          latency_slow += 50;
        }

        if (i === 7) {
          deepness_deep += 70;
        } 

        if (i === 8) {
          deepness_light += 20;
        } 

        if (i === 9) {
          time_ad += 50;
        } 
      }
}
    
    console.log(time_ad);
    console.log(time_inad);
    console.log(latency_fast);
    console.log(latency_slow);
    console.log(deepness_deep);
    console.log(deepness_light);
    console.log(habits_good);
    console.log(habits_bad);
    
    
if (time_ad >= time_inad) {
    sleep_time = 'A';
  } else {
    sleep_time = 'I';
      time_ad = time_inad;
  }

  if (latency_fast >= latency_slow) {
    latency_time = 'F';
  } else {
    latency_time = 'S';
      latency_fast = latency_slow;
  }

  if (deepness_deep >= deepness_light) {
    deepness = 'D';
  } else {
    deepness = 'L';
      deepness_deep = deepness_light
  }

  if (habits_good >= habits_bad) {
    habits = 'G';
  } else {
    habits = 'B';
      habits_good = habits_bad
  }


  // After calculations, convert variables to MBTI
  const mbti = `${sleep_time}${latency_time}${deepness}${habits}`;
  console.log(mbti);

  // Send data to API
  // Implement the sendPostRequest function here
  sendPostRequest(userResponses, mbti, sleep_time, latency_time, deepness, habits);
    
  // loading page animation
  document.getElementById("gameScreen").style.display = "none";
  document.getElementById("loading").style.display = "block";
    
  const loadingText = document.getElementById("loadingText");
  const ellipsisSpans = loadingText.querySelectorAll(".ellipsis");

  // Toggle the visibility of ellipsis spans one by one
  ellipsisSpans.forEach((span, index) => {
    setTimeout(() => {
      span.style.display = "inline";
    }, index * 500); // Adjust the delay as needed (e.g., 500 milliseconds)
  });

  // After all ellipsis are shown, hide them
  setTimeout(() => {
    ellipsisSpans.forEach((span) => {
      span.style.display = "none";
    });

    // Show all ellipsis spans together after a brief delay
    setTimeout(() => {
      ellipsisSpans.forEach((span) => {
        span.style.display = "inline";
      });
    }, 500); // Adjust the delay as needed (e.g., 500 milliseconds)
  }, ellipsisSpans.length * 500 + 1000); // Adjust the delay based on the number of ellipsis spans
    
    
   // Redirect to the appropriate page after a delay
  setTimeout(() => {
      console.log("in");
    URLredirection(mbti, time_ad, latency_fast, deepness_deep, habits_good);
  }, 3000); // 3000 milliseconds = 3 seconds
}

// Function to handle redirection based on MBTI
function URLredirection(mbti, time_ad, latency_fast, deepness_deep, habits_good) {
  switch (mbti) {
    case 'AFDG':
      window.location.href = '/zzzi/result/afdg.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'AFLG':
      window.location.href = '/zzzi/result/afdg.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'ASDG':
      window.location.href = '/zzzi/result/asdg.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'ASDB':
      window.location.href = '/zzzi/result/asdb.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'AFDB':
      window.location.href = '/zzzi/result/afdb.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'AFLB':
      window.location.href = '/zzzi/result/afdb.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'ASLG':
      window.location.href = '/zzzi/result/aslg.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'ASLB':
      window.location.href = '/zzzi/result/aslb.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'IFDG':
      window.location.href = '/zzzi/result/ifdg.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'IFLG':
      window.location.href = '/zzzi/result/iflg.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'ISDG':
      window.location.href = '/zzzi/result/isdg.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'ISDB':
      window.location.href = '/zzzi/result/isdb.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'IFDB':
      window.location.href = '/zzzi/result/ifdb.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'IFLB':
      window.location.href = '/zzzi/result/iflb.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'ISLG':
      window.location.href = '/zzzi/result/islg.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
    case 'ISLB':
      window.location.href = '/zzzi/result/islb.html?'+time_ad+":"+latency_fast+":"+deepness_deep+":"+habits_good;
      break;
  }
}
