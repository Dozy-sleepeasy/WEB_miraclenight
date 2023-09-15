'use strict';
// 이미지, 포인트 이미지, 버튼 div 가져오기
const imgElement = document.getElementById('game-img');
const optionButtonsElement = document.getElementById('gameBtns');
const topText = document.getElementById('gameText');
const soundEffect = document.getElementById('sound');
var soundimg = document.getElementById('soundimg')
var sdeffect = document.getElementById('sdeffect');
var audio = document.getElementById('audio');

var pageInd = 1;
var state = [{ supper: true }];
var state_order = 0;
var order = 0;

let top_input = 0;

var sleep_time = '';
var latency_time = '';
var deepness = '';
var habits = '';

var percentages = {};

var time_ad = 0;
var time_inad = 0;
var latency_fast = 0;
var latency_slow = 0;
var deepness_deep = 0;
var deepness_light = 0;
var habits_bad = 0;
var habits_good = 0;
var next_button_disabled = true;

var mbti = 0;

// 시작 함수
function startallGame() {
  state = {};
  showPages(1);
}

function showPages(pageIndex) {
  imgElement.src = '';
  const page = pages.find((page) => page.id === pageIndex);
  imgElement.style.backgroundImage = page.img;
  PointElementPos.style.width = page.pointImageWidth;
  PointElementPos.style.top = page.pointImageTop;
  PointElementPos.style.left = page.pointImageLeft;
  while (optionButtonsElement.firstChild) {
  optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }
  while (topText.firstChild) {
    topText.removeChild(topText.firstChild);
  }

}

function showOption() {}

function selectOptionfirstWithNumber(page, input) {
  if (input.value > 0 && input.value < 36) {
    imgElement.src = '../resource/transparent.png';
    const nextOptionID = page.next;
    state = Object.assign(state, page.setState);
    imgElement.style.backgroundImage = page.img;
    pageInd += 1;
    sleephours = input.value;
    showfirstPages(nextOptionID);
  } else {
    
  }
}

function selectOptionfirst(page) {
  imgElement.src = '../resource/transparent.png';
  const nextOptionID = page.next;
  state = Object.assign(state, page.setState);
  imgElement.style.backgroundImage = page.img;
  pageInd += 1;
  showfirstPages(nextOptionID);
  sdeffect.play();
}

function selectOption(page) {
  imgElement.src = '../resource/transparent.png';
  const nextOptionID = page.next;
  state = Object.assign(state, page.setState);
  imgElement.style.backgroundImage = page.img;
  pageInd += 1;
  showPages(nextOptionID);
}

function fbtnselectOption(page, order) {
  const nextOptionID = page.options[2].next;
  var newState = page.options[order].setState;
  state[state_order] = newState;
  state_order += 1;
  imgElement.style.backgroundImage = page.img;
    
  showPages(nextOptionID);
  pageInd += 1;
  sdeffect.play();
}

function btnselectOption(page, ordernum, button) {
  imgElement.style.backgroundImage = page.options[ordernum].buttonImg;
  order = ordernum;
  next_button_disabled = false;
  button.disabled = next_button_disabled;
  button.style.animation = "heartbeat2 1s forwards infinite";
  button.style.background = "radial-gradient(circle, rgba(249,249,251,1) 0%, rgba(199,197,220,1) 100%)";
  next_button_disabled = true;
}

function imgselectOption(page) {
  const nextOptionID = page.next;
  imgElement.src = page.img;
  showPages(nextOptionID);
  imgPointElement.src = '../resource/transparent.png';
  imgElement.src = '../resource/transparent.png';
  pageInd += 1;
}

function showImage(isSHow) {}

function getUserCheck() {
  const userCheckURL = 'https://dozy.kr/user/check';
  fetch(userCheckURL, {
    method: 'GET',
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      const userNumberElement = document.getElementById('userNumber');
      let number = myJson.data;
     // userNumberElement.innerText = `현재 ${number}명이 참여했어요!`;
    });
}

function storeUser() {
  const userStoreurl = 'https://dozy.kr/user/store';

  const data = {
    mbti: mbti,
    supper: state[0].supper ? 1 : 0,
    exercise: state[1].exercise ? 1 : 0,
    diary: state[2].diary ? 1 : 0,
    condition: state[3].condition ? 1 : 0,
    alarm: state[4].alarm ? 1 : 0,
    youtube: state[5].youtube ? 1 : 0,
    latency: state[6].latency ? 1 : 0,
    deep: state[7].deep ? 1 : 0,
  };
  fetch(userStoreurl, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    mode: 'cors', // no-cors, cors, *same-origin
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Method': 'POST',
      'Access-Control-Request-Headers': 'content-type',
    },
  })
    .then((res) => res.json())
    .then((response) => console.log('Success:', JSON.stringify(response)))
    .catch((error) => console.error('Error:', error));
}
function goBack() {
   if (pageInd == 1) {
     // 시작 페이지로s
   }
   else if (pageInd > 1 && pageInd < 5) {
      pageInd -= 1;
      showfirstPages(pageInd)
   }
    else if (pageInd => 5 ) {
       goBackButton.style.display = 'none';
   }
}

function sound() {
  if (audio.duration > 0 && !audio.paused) {
    audio.pause();
    sdeffect.pause();
    soundimg.src = "../resource/soundoff.png"
  } else {
    audio.play();
    soundimg.src = "../resource/sound.png"
  }
}

function effect() {}

function resultselectOption(page, order) {
  var newState = page.options[order].setState;
  state[state_order] = newState;
  // 냉장고
  if (state[0].supper == true) {
    habits_bad += 30;
  } else {
    habits_good += 30;
  }
  // 스케쥴
  if (state[1].exercise == true) {
    habits_bad += 30;
  } else {
    habits_good += 30;
  }
  // 다이어리
  if (state[2].diary == true) {
    deepness_light += 65;

  } else {
    deepness_deep += 65;
  }
  // 거울
  if (state[3].condition == true) {
    latency_slow += 65;
  } else {
    latency_fast += 65;
  }
  // 알람
  if (state[4].alarm == true) {
    time_inad += 25;
  } else {
    time_ad += 25;
  }
  //유튜브
  if (state[5].youtube == false) {
    habits_bad += 30;
  } else {
    habits_good += 30;
  }
  // latency
  if (state[6].latency == false) {
    latency_slow += 25;
  } else {
    latency_fast += 25;
  }
  // deep
  if (state[7].deep == false) {
    deepness_light += 25;

  } else {
    deepness_deep += 25;
  }

  if (sleephours >= 7 ) {
    time_ad += 65;
  } else {
    time_inad += 65;
  }
  
  URLredirection();
}

function URLredirection() {
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

  mbti = sleep_time + latency_time + deepness + habits;
  storeUser();

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

var firstpages = [
  {
    id: 1,
    img: 'url("../resource/01.jpg")',
    pg_type: 'a',
    introText: '안녕하세요?',
    buttonText: '안녕하세요!',
    next: 2,
  },
  {
    id: 2,
    img: 'url("../resource/02.jpg")',
    pg_type: 'b',
    introText: '저는 잠을 연구하는 \n도지 박사랍니다 :)  \n평소 몇 시간 정도 주무시나요?',
    input: '시간',
    pText: '시간 정도 잔 것 같아요',
    buttonText: '다음',
    next: 3,
  },
  {
    id: 3,
    img: 'url("../resource/03.jpg")',
    pg_type: 'a',
    introText: '이렇게 만난 것도 인연인데, \n특별히 제가 연구 중인 스뮬레이터로 수면 유형을 알려드릴게요!',
    buttonText: '좋아요!',
    next: 4,
  },
  {
    id: 4,
    img: 'url("../resource/04.jpg")',
    pg_type: 'a',
    introText:
      '방법은 간단해요. \n제가 3초를 세면 방이 보일거예요. \n그러면 그 방에서 본인의 평소 잠 자기 전 행동 및 생각들을 보여주시면 됩니다. \n준비되셨나요?',
    buttonText: '네 :)',
    next: 5,
  },
  {
    id: 5,
    img: '',
    pg_type: 'c',
    next: 6,
  },
];

var pages = [
  {
    id: 6,
    img: 'url("../resource/05.jpg")',
    pg_type: 'd',
    pointImage: 'resource/point_1.png',
    pointImageTop: '335px',
    pointImageLeft: '-7px',
    gameText: '11시 30분이네... \n출출한데 냉장고나 열어볼까?',
    next: 7,
  },
  {
    id: 7,
    img: 'url("../resource/06.jpg")',
    pg_type: 'e',
    options: [
      {
        buttonText: '치맥하고 배부르게 잘까?',
        buttonImg: 'url("resource/2_1.jpg")',
        soundEffect: 'resource/',
        setState: { supper: true },
      },
      {
        buttonText: '살찌니까 야식은 패스!',
        buttonImg: 'url("resource/2_2.jpg")',
        soundEffect: 'resource/',
        setState: { supper: false },
      },
      {
        buttonText: '다음',
        next: 8,
      },
    ],
  },
  {
    id: 8,
    img: 'url("../resource/07.jpg")',
    pg_type: 'd',
    pointImage: 'resource/point_2.png',
    gameText: '오늘 할 일 다 했는지 \n스케쥴러 확인해야지!',
    pointImageWidth: '200px',
    pointImageTop: '240px',
    pointImageLeft: '-10px',
    next: 9,
  },
  {
    id: 9,
    img: 'url("../resource/08.jpg")',
    pg_type: 'e',
    options: [
      {
        buttonText: '늦게라도 운동은 매일매일!',
        buttonImg: 'url("resource/8_2.jpg")',
        soundEffect: 'resource/',
        setState: { exercise: true },
      },
      {
        buttonText: '너무 늦었으니 내일 해야지!',
        buttonImg: 'url("resource/8_1.jpg")',
        soundEffect: 'resource/',
        setState: { exercise: false },
      },
      {
        buttonText: '다음',
        next: 10,
      },
    ],
  },
  {
    id: 10,
    img: 'url("../resource/09.jpg")',
    pg_type: 'd',
    pointImage: 'resource/point_3.png',
    pointImageWidth: '200px',
    pointImageTop: '380px',
    pointImageLeft: '70px',
    gameText: '일기도 적어야지~!',
    next: 11,
  },
  {
    id: 11,
    img: 'url("../resource/10.jpg")',
    pg_type: 'e',
    pointImageWidth: '10px',
    pointImageTop: '00px',
    pointImageLeft: '100px',
    options: [
      {
        buttonText: '잠 설쳐서 좀 힘들었다.',
        buttonImg: 'url("resource/10_1.jpg")',
        soundEffect: 'resource/',
        setState: { diary: true },
      },
      {
        buttonText: '푹 자서 효율 높은 하루였다!',
        buttonImg: 'url("resource/10_2.jpg")',
        soundEffect: 'resource/',
        setState: { diary: false },
      },
      {
        buttonText: '다음',
        next: 12,
      },
    ],
  },
  {
    id: 12,
    img: 'url("../resource/11.jpg")',
    pg_type: 'd',
    pointImage: 'resource/point_4.png',
    pointImageWidth: '170px',
    pointImageTop: '230px',
    pointImageLeft: '200px',
    gameText: '마지막으로 상태체크!',
    next: 13,
  },
  {
    id: 13,
    img: 'url("../resource/12.jpg")',
    pg_type: 'e',
    options: [
      {
        buttonText: '새벽까지 잠이 안 왔다...',
        buttonImg: 'url("resource/12_1.jpg")',
        soundEffect: 'resource/',
        setState: { condition: true },
      },
      {
        buttonText: '눕자마자 잠 들었다!',
        buttonImg: 'url("resource/12_2.jpg")',
        soundEffect: 'resource/',
        setState: { condition: false },
      },
      {
        buttonText: '다음',
        next: 14,
      },
    ],
  },
  {
    id: 14,
    img: 'url("../resource/13.jpg")',
    pg_type: 'd',
    pointImageWidth: '150px',
    pointImageTop: '124px',
    pointImageLeft: '113px',
    pointImage: 'resource/point_5.png',
    gameText: '내일을 위해서 알람 맞춰야겠다!',
    next: 15,
  },
  {
    id: 15,
    img: 'url("../resource/14.jpg")',
    pg_type: 'e',
    options: [
      {
        buttonText: '윽. 7시에 일어나려면 \n8시간도 못 자네...',
        buttonImg: 'url("resource/14_1.jpg")',
        soundEffect: 'resource/',
        setState: { alarm: true },
      },
      {
        buttonText: '충분히 자야 하니까 \n지금으로부터 8시간 이후인 \n7:30으로 맞춰야지!',
        buttonImg: 'url("resource/14_2.jpg")',
        soundEffect: 'resource/',
        setState: { alarm: false },
      },
      {
        buttonText: '다음',
        next: 16,
      },
    ],
  },
  {
    id: 16,
    img: 'url("../resource/14_3.jpg")',
    pg_type: 'd',
    pointImageWidth: '95px',
    pointImageTop: '140px',
    pointImageLeft: '70px',
    pointImage: 'resource/point_6.png',
    gameText: '새로운 콘텐츠 올라왔는지 봐야지!',
    next: 17,
  },
  {
    id: 17,
    img: 'url("../resource/15.jpg")',
    pg_type: 'e',
    options: [
      {
        buttonText: 'ASMR 들어면서 빨리 자자.',
        buttonImg: 'url("resource/15_1.jpg")',
        soundEffect: 'resource/',
        setState: { youtube: true },
      },
      {
        buttonText: '이건 놓칠 수 없지! \n30분만 보지 뭐...',
        buttonImg: 'url("resource/15_2.jpg")',
        soundEffect: 'resource/',
        setState: { youtube: false },
      },
      {
        buttonText: '다음',
        next: 18,
      },
    ],
  },
  {
    id: 18,
    // 드디어 자려고 눈 감았는데
    img: 'url("../resource/16.jpg")',
    pg_type: 'e',
    options: [
      {
        buttonText: '나른 나른 잠이 쏟아진다.',
        buttonImg: 'url("resource/16_1.gif")',
        soundEffect: 'resource/',
        setState: { latency: true },
      },
      {
        buttonText: '말똥 말똥 전혀 졸립지 않다',
        buttonImg: 'url("resource/16_2.gif")',
        soundEffect: 'resource/',
        setState: { latency: false },
      },
      {
        buttonText: '다음',
        next: 19,
      },
    ],
  },
  {
    // pg_type: 'g'로 수정해야 함 > 결과 보기 클릭 시 새로운 곳으로
    id: 19,
    // 자는 도중
    img: 'url("../resource/17.jpg")',
    pg_type: 'g',
    options: [
      {
        buttonText: '나는 깨는 법이 없지...',
        buttonImg: 'url("resource/18.jpg")',
        soundEffect: 'resource/',
        setState: { deep: true },
      },
      {
        buttonText: '엥 이게 무슨 소리지?',
        buttonImg: 'url("resource/16_2.gif")',
        soundEffect: 'resource/',
        setState: { deep: false },
      },
      {
        buttonText: '결과보기',
        next: 20,
      },
    ],
  },
];

getUserCheck();
startallGame();
goBackButton.addEventListener('click', () => goBack());
soundEffect.addEventListener('click', () => sound());