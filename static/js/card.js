// URL에서 데이터 가져오기
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

var uid = getUrlParameter('uid');
var firstSleep = getUrlParameter('first_sleep');

console.log(uid);
console.log(firstSleep);

// Card flip 함수
function flipCard(card) {
    card.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
}


// HTML에서 element 가져오기
var cardBefore = document.getElementById('before');
var cardAfter = document.getElementById('after');
var afterTarot = document.getElementById('afterTarot');
var afterTarot2 = document.getElementById('afterTarot2');
var cardSave = document.getElementById('cardSave');
var buttonSection = document.getElementById('buttonSection');
var textSection = document.getElementById('textSection');
var popup = document.getElementById('tarotPopupContainer');


// 팝업 띄우기
const closePopupBtn = document.getElementById('closePopupBtn');
const closePopupBtn2 = document.getElementById('closePopupBtn2');

closePopupBtn.addEventListener('click', function() {
    popup.style.display = 'none';
});

closePopupBtn2.addEventListener('click', function() {
    popup.style.display = 'none';
});

// Close the popup if the user clicks outside the content area
window.addEventListener('click', function(event) {
    if (event.target === popup) {
        popupContainer.style.display = 'none';
    }
});
    


function postTarot(postTalisman) {
    // Define the URL for the POST request
    const url = 'https://miraclenight.shop/api/v1/talisman/';

    // Define the request body
    const requestBody = {
        uid: uid,
        talisman: postTalisman,
    };
    
    // Create the request options
    const requestOptions = {
    method: 'POST', // Use POST method
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody), // Convert the body to JSON
  };
    
    // Send the POST request
    fetch(url, requestOptions)
        .then((response) => {
            if (response.ok) {
                console.log(requestBody);
                console.log('Post successful.');
                // Handle successful response, if needed
            } else {
                console.error('Failed to post');
                // Handle error response, if needed
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle fetch error, if needed
        });
}


function getTarot() {
  async function fetchTarot() {
    const url = 'https://miraclenight.shop/api/v1/talisman/?uid=' + encodeURIComponent(uid);

    let cardNo = 0;
    await fetch(url, {
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
            var cardNo = data.resMsg.talisman;

            // Check if resCode is equal to "E-USER-1000"
            if (data.resCode === 'E-USER-1000') {
                console.log('Not found uid');
                cardNo = 0;
            } 

            console.log(cardNo);

            if (cardNo === 0) {
                cardBefore.style.display = 'block';  
                textSection.style.display = 'flex';
                cardBefore.onclick = function() {
                    if (firstSleep === 'false') {
                        popup.style.display = 'block';
                    } else {
                        const postTalisman = Math.floor(Math.random() * 5) + 1;
                        console.log('선택한 카드: ' + postTalisman);
                        flipCard(cardBefore);
                        postTarot(parseInt(postTalisman));
                        textSection.style.display = 'none';
                        afterTarot.src = '/static/images/tarot/tarot_' + postTalisman + '.png';
                        buttonSection.style.display = 'flex';
                        cardSave.href = '/static/images/tarot/tarot_' + postTalisman + '.png';
                        document.getElementById('downloadLink').addEventListener('click', function(event) {
                            event.preventDefault();
                            var link = this;
                            var xhr = new XMLHttpRequest();
                            xhr.open('GET', link.href, true);
                            xhr.responseType = 'blob';
                            xhr.onload = function(e) {
                              if (this.status == 200) {
                                var file = new Blob([this.response], { type: 'image/png' });
                                var a = document.createElement('a');
                                a.href = window.URL.createObjectURL(file);
                                a.download = '2024 미라클나잇 꿀잠부적.png';
                                a.click();
                              }
                            };
                            xhr.send();
                      });
                    }
                };
            } else {
                textSection.style.display = 'none';
                buttonSection.style.display = 'flex';
                console.log('이미 선택된 카드: ' + cardNo);
                afterTarot2.src = '/static/images/tarot/tarot_' + cardNo + '.png';
                cardAfter.style.display = 'block';  
                cardSave.href = '/static/images/tarot/tarot_' + cardNo + '.png';
            }
        }) 
      .catch((error) => {
        console.error('Response is not OK.');
        console.error('Error:', error);
      });

    console.log('cardNo:', cardNo);

    return cardNo;
  }

  fetchTarot();
}

