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
  } else {
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
      clearContent();
  }
}

function clearContent() {
    console.log("in");
  var myInput = document.getElementById('myInput');
  myInput.textContent = '';
}



function fillBackground() {
    const buttons = document.querySelectorAll('.vote-button');

    buttons.forEach((button) => {
        const span = button.querySelector('.button-numbers');

        // Get the percentage from the span's text content
        const percentage = parseInt(span.textContent);

        // Calculate the width based on the percentage
        const width = percentage + "%";

        // Update the button's background gradient to fill from left to right
        button.style.background = `linear-gradient(90deg, #fff ${width}, var(--A3BAF6, #A3BAF6) ${width})`;

        // Update the text content inside the span to reflect the new percentage
        span.style.display = "block";
        span.textContent = `${percentage}%`;

    });
}

  

function getVote() {
  // Get the current URL
  const currentURL = new URL(window.location.href);

  // Get the value of the "nickname" query parameter
  const nickname = currentURL.searchParams.get("nickname");

  // Ensure that "nickname" is not null before proceeding
  if (!nickname) {
    console.error("Nickname not found in URL.");
    return;
  }

  // Define the questionId
  const questionId = 'test3';

  // Log extracted values for debugging
  console.log("Nickname:", nickname);
  console.log("QuestionId:", questionId);

  // Define the request body
  const body = {
    uid: currentURL.searchParams.get("uid"), // Extract "uid" from the URL
    questionId: questionId,
  };

  // Define the fetchVote function
  async function fetchVote() {
    const url = 'https://gguljam.miraclenight-server.com/vote';
    const headers = new Headers({
      'X-Survey-Name': 'gguljam',
    });

    try {
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: headers,
        body: JSON.stringify(body), // Include the request body
      });

      if (response.ok) {
        const data = await response.json();
        // Handle the response data here
        console.log(data);

        if (data.response.can_vote) {
          console.log('You can vote.');
          console.log('Examples:', data.response.examples);
        } else {
          console.log('You have already voted.');
          console.log('Answer:', data.response.answer);
          console.log('Total Users:', data.response.total_user);
          console.log('Vote Result:', data.response.vote_result);
        }
      } else {
        console.error("Response is not OK.");
      }
    } catch (error) {
      // Handle errors here
      console.error('Error:', error);
    }
  }

  // Call the fetchVote function
  fetchVote();
}
