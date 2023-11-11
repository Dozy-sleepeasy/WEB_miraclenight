
// Voting 질문지
let questions = {
    q1: "다들 어떤 자세로 주무세요?",
    q2: "가장 걱정되는 수면 문제가 있나요?",
    q3: "주중에 몇 시간 정도 주무세요?",
    q4: "요즘 잘 때 창문…",
    q5: "저녁에 커피 드시는지?",
    q6: "생동감 있는 꿈이나 악몽을 얼마나 자주 꾸세요?",
    q7: "자는 중간에 얼마나 자주 일어나세요?",
    q8: "자니? 연락 해본 사람…",
    q9: "잠 잘 때 눕는 방향은",
    q10: "자고 잇을 때 더 가장 싫은 것",
    q11: "여행 가서 잠자리 바뀌면",
    q12: "자기 전에 핸드폰으로 뭐 봐?",
    q13: "수면 패턴에 가장 큰 영향을 미치는 게 뭐라고 생각하세요?",
    q14: "술 마시고",
    q15: "잘 자려고 시도하는 방법?",
    q16: "가장 잘 자는 계절은?",
    q17: "파트너와 함께 잘때는 수면의 질이…",
    q18: "여행가서 자고 싶은 장소는?",
    q19: "무서운 영화 보고..",
    q20: "나는 낮잠을",
    q21: "내가 가장 많이 하는 잠버릇은",
    q22: "침대에서 먹을 때 제일 맛있는 간식은?",
    q23: "나는 요즘 여기서 자",
    q24: "자기 1시간 전에 야식이 땡긴다면?",
    q25: "나는 이불 세탁을",
    q26: "자는 자기 전에"
};

// 유저 정보 저장
const questionId = getCurrentQuestion();
const currentURL = new URL(window.location.href);
const uid2 = currentURL.searchParams.get('uid');


function calculatePercentages(total, examples) {
  if (total === 0) {
    return 0;
  }
  const percentage = (examples / total) * 100;
  return Math.round(percentage);
}

function fillBackground(buttonId, percentage) {
  const button = document.getElementById(buttonId);
  animateGradient(button, percentage)
  // const width = percentage + "%";
  // button.style.background = `linear-gradient(90deg, #fff ${width}, var(--A3BAF6, #A3BAF6) ${width})`;
}

function animateGradient(button, targetPercentage) {
    if (button) {
        let currentPercentage = 0;
        const interval = setInterval(() => {
            currentPercentage++;
            button.style.background = `linear-gradient(90deg, #fff ${currentPercentage}%, var(--A3BAF6, #A3BAF6) ${currentPercentage}%)`;
            
            if (currentPercentage >= targetPercentage) {
                clearInterval(interval);
            }
        }, 5); // 20ms interval for smooth transition
    }
}



function getCurrentQuestion() {
    // Get the current date and time
    const currentDate = new Date();

    // Set the start date for rotating questions (8th of November) at 6 AM
    const startDate = new Date('2023-11-10T06:00:00');

    // Calculate the number of days since the start date
    const daysPassed = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

    // Calculate the index of the current question (looping back to the beginning if needed)
    const questionIndex = daysPassed % Object.keys(questions).length + 1;
    
    console.log(questionIndex);
    // Return the current question
    return questions[`q${questionIndex}`];
}

// Function to post an answer to the API
async function postAnswer(uid, questionId, selectedOption) {

  // Create the answer array based on the selected option
  const answer = [selectedOption];

  // Define the request body
  const body = {
    uid: uid,
    questionId: questionId,
    answer: answer,
  };

  // Send a POST request to the API
  const url = 'https://gguljam.miraclenight-server.com/vote';
  const headers = new Headers({
    'X-Survey-Name': 'gguljam',
  });

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    });

    if (response.ok) {
      console.log('Answer submitted successfully.');
      // You can handle success here (e.g., update UI)
        const data = await response.json();

        // Handle the response data here
        console.log(data);

        document.getElementById('voteTitle').textContent = data.response.questionId;
        document.getElementById('number').textContent = data.response.total_user;
        document.getElementById('writer').textContent = data.response.writer;

        var optionDiv = document.getElementById('voteOptions');
        var optionSection = document.getElementById('voteSection');
        optionDiv.style.display = "block";
        optionSection.style.display = "flex";

        const options = data.response.examples;
        const numButtons = options.length;
        const maxButtons = 4; // Maximum number of buttons you want to show
        let index = 0;

        for (let i = 0; i < maxButtons; i++) {
          const buttonId = `btn-${i + 1}`;
          const buttonTextElement = document.getElementById(`btn-${i + 1}-text`);
          const buttonNumberElement = document.getElementById(`btn-num-${i + 1}`);

          if (i < numButtons) {
            // If there's an option, populate it and its count
            buttonTextElement.textContent = options[i];
            buttonNumberElement.textContent = ''; // Clear previous count
            document.getElementById(buttonId).style.display = 'block';
            index++;
              console.log(index);
          } else {
            // If there's no option, hide the button
            document.getElementById(buttonId).style.display = 'none';
          }
        }

          console.log('You have already voted.');
          console.log('Answer:', data.response.answer);
            
          for (let i = 1; i <= index; i++) {
            const button = document.getElementById(`btn-${i}`);
            if (button) {
              button.disabled = true; // Disable the button
            }
          }
            
          const answer = document.getElementById(`btn-${data.response.answer}-text`);
          const newText = document.createElement('span'); // Create a new <span> element
          newText.id = 'myOption'; // Set the id of the new element (optional)
          newText.textContent = '✨PICK'; // Set the text content
          answer.appendChild(newText);

          for (let i = 1; i <= index; i++) {
          const buttonNumberElement = document.getElementById(`btn-num-${i}`);
          const example = data.response.vote_result; 
          const percentage = calculatePercentages(data.response.total_user, example[`example${i}`]);
          buttonNumberElement.textContent = percentage+'%';
          buttonNumberElement.style.display = 'block';
          fillBackground(`btn-${i}`, percentage);
        }

    } else {
      console.error('Failed to submit answer to the API.');
      // You can handle errors here (e.g., show an error message)
    }
  } catch (error) {
    console.error('Error submitting answer:', error);
    // You can handle errors here (e.g., show an error message)
  }
}





function getVote() {

  // Log extracted values for debugging
  console.log('Uid:', uid2);
  console.log('QuestionId:', questionId);

  // Define the request body
  const body = {
    uid: uid2, // Use uid2
    questionId: questionId,
  };

  // Define the fetchVote function
  async function fetchVote() {
    const url = 'https://gguljam.miraclenight-server.com/votes';

    // Define headers
    const headers = new Headers({
      'X-Survey-Name': 'gguljam',
    });

    try {
      const response = await fetch(url, {
        method: 'POST', // Use POST method for sending data
        headers: headers,
        body: JSON.stringify(body), // Include the request body
      });

      if (response.ok) {
        const data = await response.json();

        // Handle the response data here
        console.log(data);

        document.getElementById('voteTitle').textContent = data.response.questionId;
        document.getElementById('number').textContent = data.response.total_user;
        document.getElementById('writer').textContent = data.response.writer;

        var optionDiv = document.getElementById('voteOptions');
        var optionSection = document.getElementById('voteSection');
        optionDiv.style.display = "block";
        optionSection.style.display = "flex";

        const options = data.response.examples;
        const numButtons = options.length;
        const maxButtons = 4; // Maximum number of buttons you want to show
        let index = 0;

        for (let i = 0; i < maxButtons; i++) {
          const buttonId = `btn-${i + 1}`;
          const buttonTextElement = document.getElementById(`btn-${i + 1}-text`);
          const buttonNumberElement = document.getElementById(`btn-num-${i + 1}`);

          if (i < numButtons) {
            // If there's an option, populate it and its count
            buttonTextElement.textContent = options[i];
            buttonNumberElement.textContent = ''; // Clear previous count
            document.getElementById(buttonId).style.display = 'block';
            index++;
              console.log(index);
          } else {
            // If there's no option, hide the button
            document.getElementById(buttonId).style.display = 'none';
          }
        }

        if (data.response.can_vote) {
          console.log('You can vote.');
        } else {
          console.log('You have already voted.');
          console.log('Answer:', data.response.answer);
            
          for (let i = 1; i <= index; i++) {
            const button = document.getElementById(`btn-${i}`);
            if (button) {
              button.disabled = true; // Disable the button
            }
          }
            
          const answer = document.getElementById(`btn-${data.response.answer}-text`);
          const newText = document.createElement('span'); // Create a new <span> element
          newText.id = 'myOption'; // Set the id of the new element (optional)
          newText.textContent = '✨PICK'; // Set the text content
          answer.appendChild(newText);

          for (let i = 1; i <= index; i++) {
          const buttonNumberElement = document.getElementById(`btn-num-${i}`);
          const example = data.response.vote_result; 
          const percentage = calculatePercentages(data.response.total_user, example[`example${i}`]);
          buttonNumberElement.textContent = percentage+'%';
          buttonNumberElement.style.display = 'block';
          fillBackground(`btn-${i}`, percentage);
        }
        }
      } else {
        console.error('Response is not OK.');
      }
    } catch (error) {
      // Handle errors here
      console.error('Error:', error);
    }
  }

  // Call the fetchVote function
  fetchVote();
}

function voteOption(selectedOption) {
  // Display the loading container

  // Perform the post request (assuming you have a function postAnswer(uid, questionId, selectedOption))
  postAnswer(uid2, questionId, selectedOption);

}


// ***** Send Questions ***** 
function toggleContent() {
  var subtitle = document.getElementById('vote-subtitle');
  var title = document.getElementById('vote-title');
  var button = document.querySelector('.vote-submit button');
  var myInput = document.getElementById('myInput');
  var img = document.getElementById('vote-complete-img');
  var inputMargin = document.getElementById('vote-options');


  if (button.textContent === '보내기') {
    // Change text to the new content
    subtitle.textContent = '<'+myInput.textContent+'>';
    subtitle.style.textAlign = 'center';
    title.textContent = '주제 던지기 완료!';
    title.style.textAlign = 'center';
    button.textContent = '완료';
    img.style.display = 'block';
    inputMargin.style.margin = '0';

    // Hide the input while showing the new content
    myInput.style.display = 'none';
      
        const currentURL = new URL(window.location.href);
    var uid = currentURL.searchParams.get("uid");

    // Call sendQuestion with account1 and myInput text
    if (uid && myInput.textContent.trim() !== '') {
      sendQuestion(uid, myInput.textContent);
    }
      
    clearContent();
  } 
    else {
    // Reset to the original content
    subtitle.textContent = '💬 주제 던지기';
    subtitle.style.textAlign = 'left';
    title.innerHTML = '꿀잠방에 궁금한 것을 <br> 남겨주세요!';
    title.style.textAlign = 'left';
    button.textContent = '보내기';
    inputMargin.style.margin = '30px 0px 30px 0px';
    img.style.display = 'none';

    // Show the input while hiding the new content
    myInput.style.display = 'block';

  }
}


function clearContent() {
  var myInput = document.getElementById('myInput');
  myInput.textContent = '';
}


function sendQuestion(uid, question) {
  // Define the URL for the POST request
  const url = 'https://gguljam.miraclenight-server.com/survey';

  // Define the request body
  const requestBody = {
    uid: uid,
    question: question,
  };

  // Define the headers
  const headers = new Headers({
    'X-Survey-Name': 'gguljam',
  });

  // Create the request options
  const requestOptions = {
    method: 'POST', // Use POST method
    headers: headers,
    body: JSON.stringify(requestBody), // Convert the body to JSON
  };

  // Send the POST request
  fetch(url, requestOptions)
    .then((response) => {
      if (response.ok) {
        console.log(requestBody);
        console.log('Question submitted successfully.');
        // Handle successful response, if needed
      } else {
        console.error('Failed to submit question.');
        // Handle error response, if needed
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle fetch error, if needed
    });
}