function convertTimeToMinutes(timeString) {
    let totalMinutes = 0;

    // Split the time string into hours, minutes, and seconds
    const [hours, minutes, seconds] = timeString.split(':').map(Number);

    // Calculate the total minutes since midnight
    totalMinutes = hours * 60 + minutes;

    return totalMinutes;
}

function convertTimeToFormat(timeString) {
    const hours = Math.floor(timeString);
    const minutesDecimal = (timeString - hours) * 60;
    const minutes = Math.round(minutesDecimal);
    
    if (hours === 0) {
        return `${minutes}분`;
    } else {
        return `${hours}시간 ${minutes}분`;
    }
}


function convertTimeTo12HourFormat(originalTime) {

        const parts = originalTime.split(':');
        let hours = parseInt(parts[0]);
        const minutes = parts[1];
        let period = '오전';

        if (hours > 12 && hours !== 12) {
            hours -= 12;
            period = '오후';
        } else if (hours === 12) {
            period = '오후';
        }

 return period + ' ' + hours + ':' + minutes;
}

function convertToNumericTime(timeString) {
  const [hours, minutes] = timeString.split(':').map(Number);
  return hours + minutes / 60;
}



function URLredirection(data) {

    // Get input values from the form
    const uid = document.getElementById('uid').value;
    const username = document.getElementById('username-input').value;
    const average_sleep_hours = parseFloat(document.getElementById('average-sleep-hours-input').value);
    const mon_sleep_hours = parseFloat(document.getElementById('mon-sleep-hours-input').value);
    const tue_sleep_hours = parseFloat(document.getElementById('tue-sleep-hours-input').value);
    const wed_sleep_hours = parseFloat(document.getElementById('wed-sleep-hours-input').value);
    const thu_sleep_hours = parseFloat(document.getElementById('thu-sleep-hours-input').value);
    const fri_sleep_hours = parseFloat(document.getElementById('fri-sleep-hours-input').value);
    const sat_sleep_hours = parseFloat(document.getElementById('sat-sleep-hours-input').value);
    const sun_sleep_hours = parseFloat(document.getElementById('sun-sleep-hours-input').value);
    
    const average_bedtime = document.getElementById('average-bedtime-input').value;
    const average_waketime = document.getElementById('average-waketime-input').value;
    const mon_waketime = document.getElementById('mon-waketime-input').value;
    const tue_waketime = document.getElementById('tue-waketime-input').value;
    const wed_waketime = document.getElementById('wed-waketime-input').value;
    const thu_waketime = document.getElementById('thu-waketime-input').value;
    const fri_waketime = document.getElementById('fri-waketime-input').value;
    const sat_waketime = document.getElementById('sat-waketime-input').value;
    const sun_waketime = document.getElementById('sun-waketime-input').value;

    const sleep_pattern = parseFloat(document.getElementById('sleep-pattern-input').value);
    const emotion = document.getElementById('emotion-input').value;
    const activity = document.getElementById('activity-input').value;
    const emotion_input = document.getElementById('emotion-input').value;
    const activityInput = document.getElementById('activity-input').value;
    
    // Building a URL with JSON data
    var jsonData = { 
        username: username,
        average_sleep_hours: average_sleep_hours,
        prev_average_sleep_hours: prev_average_sleep_hours,
        mon_sleep_hours: mon_sleep_hours,
        tue_sleep_hours: tue_sleep_hours,
        wed_sleep_hours: wed_sleep_hours,
        thu_sleep_hours: thu_sleep_hours,
        fri_sleep_hours: fri_sleep_hours,
        sat_sleep_hours: sat_sleep_hours,
        sun_sleep_hours: sun_sleep_hours,
        average_bedtime: average_bedtime,
        prev_bedtime: prev_bedtime,
        average_waketime: average_waketime,
        prev_waketime: prev_waketime,
        mon_waketime: mon_waketime,
        tue_waketime: tue_waketime,
        wed_waketime: wed_waketime,
        thu_waketime: thu_waketime,
        fri_waketime: fri_waketime,
        sat_waketime: sat_waketime,
        sun_waketime: sun_waketime,
        sleep_pattern: sleep_pattern,
        emotion: emotion,
        activity: activity,
        emotion_input: emotion_input,
        activityInput: activityInput,
        uid: uid,
    };
    
    var url = '/sleepreport/report_1016.html?data='+encodeURIComponent(JSON.stringify(jsonData));
    window.location.href = url;
}




function updateReport() {    
    console.log("in");
    // Get the URL query parameter
    var queryParam = decodeURIComponent(location.href.split('=')[1]);

    // Parse the JSON data
    var jsonData = JSON.parse(queryParam);
    
    // Accessing individual properties from jsonData
    var uid = jsonData.uid; // Example: Accessing the 'uid' property
    var username = jsonData.username; // Accessing the 'username' property
    var average_sleep_hour = jsonData.average_sleep_hours; // Accessing the 'average_sleep_hours' property
    var prev_average_sleep_hour = jsonData.prev_average_sleep_hours; // Accessing the 'average_sleep_hours' property
    var mon_sleep_hours = jsonData.mon_sleep_hours; // Accessing the 'mon_sleep_hours' property
    var tue_sleep_hours = jsonData.tue_sleep_hours; // Accessing the 'tue_sleep_hours' property
    var wed_sleep_hours = jsonData.wed_sleep_hours; // Accessing the 'wed_sleep_hours' property
    var thu_sleep_hours = jsonData.thu_sleep_hours; // Accessing the 'thu_sleep_hours' property
    var fri_sleep_hours = jsonData.fri_sleep_hours; // Accessing the 'fri_sleep_hours' property
    var sat_sleep_hours = jsonData.sat_sleep_hours; // Accessing the 'sat_sleep_hours' property
    var sun_sleep_hours = jsonData.sun_sleep_hours; // Accessing the 'sun_sleep_hours' property
    var average_bedtime = jsonData.average_bedtime; // Accessing the 'average_bedtime' property
    var prev_average_bedtime = jsonData.prev_bedtime; // Accessing the 'average_bedtime' property
    var average_waketime = jsonData.average_waketime; // Accessing the 'average_waketime' property
    var prev_average_waketime = jsonData.prev_waketime; // Accessing the 'average_waketime' property
    var mon_waketime = jsonData.mon_waketime; // Accessing the 'mon_waketime' property
    var tue_waketime = jsonData.tue_waketime; // Accessing the 'tue_waketime' property
    var wed_waketime = jsonData.wed_waketime; // Accessing the 'wed_waketime' property
    var thu_waketime = jsonData.thu_waketime; // Accessing the 'thu_waketime' property
    var fri_waketime = jsonData.fri_waketime; // Accessing the 'fri_waketime' property
    var sat_waketime = jsonData.sat_waketime; // Accessing the 'sat_waketime' property
    var sun_waketime = jsonData.sun_waketime; // Accessing the 'sun_waketime' property
    var sleep_pattern = jsonData.sleep_pattern; // Accessing the 'sleep_pattern' property
    var emotion = jsonData.emotion; // Accessing the 'emotion' property
    var activity = jsonData.activity; // Accessing the 'activity' property
    var emotion_input = jsonData.emotion_input; // Accessing the 'emotion_input' property
    var activityInput = jsonData.activityInput; // Accessing the 'activityInput' property
    var daily_factors = jsonData.daily_factors; // Accessing the 'daily_factors' property

    
    // Update text elements
    document.getElementById('username').textContent = username;
    document.getElementById('username3').textContent = username;


   document.getElementById('average_sleep_hours').textContent = convertTimeToFormat(average_sleep_hour); document.getElementById('average_sleep_hours2').textContent = convertTimeToFormat(average_sleep_hour);
    document.getElementById('average_sleep_hours2').textContent = convertTimeToFormat(average_sleep_hour);
   document.getElementById('aver_sleep_hours').textContent = average_sleep_hour;
    document.getElementById('prev_sleep_hours').textContent = prev_average_sleep_hour;
    
    document.getElementById('average_bedtime').textContent = convertTimeTo12HourFormat(average_bedtime);

    document.getElementById('prev_bedtime').textContent = convertTimeTo12HourFormat(prev_average_bedtime);
    
    document.getElementById('average_waketime').textContent = convertTimeTo12HourFormat(average_waketime);

    document.getElementById('prev_waketime').textContent = convertTimeTo12HourFormat(prev_average_waketime);
    
    document.getElementById('sleep_pattern').textContent = `${sleep_pattern}%`;
    
    var sleep_time_comparison = Math.abs(prev_average_sleep_hour - average_sleep_hour);
    document.getElementById('sleep-time-text').textContent = convertTimeToFormat(sleep_time_comparison); 
    
    if (prev_average_sleep_hour > 0) {
        document.getElementById('insight').style.display ="block";
    }
    
    // Process sleep hours
    const lastSleepHoursDiv = document.getElementById(`last_sleep_hours`);
    const thisSleepHoursDiv = document.getElementById(`this_sleep_hours`);
    lastSleepHoursDiv.style.height = `${prev_average_sleep_hour * 9}px`;
    thisSleepHoursDiv.style.height = `${average_sleep_hour * 9}px`;
    
    const sleepTimeComparison = document.getElementById(`sleep-time-text`);
    const sleepComparison = document.getElementById('sleep-time-text2');
    if (average_sleep_hour > prev_average_sleep_hour) {
        sleepComparison.textContent = ' 늘었어요. ';
        sleepTimeComparison.style.color = '#649CFF';
    }
    else if (average_sleep_hour < prev_average_sleep_hour) {
        sleepComparison.textContent = ' 줄었어요. ';
        thisSleepHoursDiv.style.background = '#FFA449';
        sleepTimeComparison.style.color = '#FFA449';
    }
    else if (average_sleep_hour = prev_average_sleep_hour) {
        sleepComparison.textContent = '으로 차이가 없어요. ';
        sleepTimeComparison.style.color = '#649CFF';
    }
    
 



    

    // Update #sleep_rate color and text
    const sleepRate = document.getElementById('sleep_rate');
    const sleepRateText = document.getElementById('sleep_rate_text');
    
    if (average_sleep_hour > 7) {
        sleepRate.style.color = '#649CFF';
        sleepRate.textContent = 'GOOD';
        sleepRateText.textContent = '아주 잘 하고 있어요!';
    } else if (average_sleep_hour >= 6) {
        sleepRate.style.color = 'white'; // Reset color
        sleepRate.textContent = 'OKAY'; // Reset text
        sleepRateText.textContent = '조금만 더 관리가 필요해요!'; // Reset text
    } else {
        sleepRate.style.color = '#FFA449';
        sleepRate.textContent = 'BAD';
        sleepRateText.textContent = '관리가 필요해요!';
    } 
    
    const sleepPattern = document.getElementById('pattern_rate');
    const sleepPatternText = document.getElementById('pattern_rate_text');
    if (sleep_pattern > 80) {
        sleepPattern.style.color = '#649CFF';
        sleepPattern.textContent = 'GOOD';
        sleepPatternText.textContent = '아주 잘 하고 있어요!';
    } else if (sleep_pattern >= 60 && sleep_pattern <= 80) {
        sleepPattern.style.color = 'white'; // Reset color
        sleepPattern.textContent = 'OKAY'; // Reset text
        sleepPatternText.textContent = '조금만 더 관리가 필요해요!'; // Reset text
    } else {
        sleepPattern.style.color = '#FFA449';
        sleepPattern.textContent = 'BAD';
        sleepPatternText.textContent = '관리가 필요해요!';
    }
    


    // Update #emotion-img and #emotion-text based on emotion input
    const emotionTitle = document.getElementById('emotion-title');

    const emotionImg = document.getElementById('emotion-img');
    const emotionText = document.getElementById('emotion-text');
    const emotionText2 = document.getElementById('emotion-text2');
    const emotionText3 = document.getElementById('emotion-text3');
    switch (emotion_input) {
        case 'relaxed':
        case 'easy':
            emotionTitle.innerText = '편안'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/relaxed.png';
            emotionText.innerText = '수면 전 편안한 상태는 정말 중요합니다. 2020년에 발표된 "Sleep Health" 저널의 연구에서, 편한 매트리스와 환경에서 자는 사람들은 더 나은 수면의 질을 경험하고 밤에 깨어나는 빈도가 적었다고 합니다.';
            emotionText2.innerText = '편안한 마음을 갖는 꿀팁!';
            emotionText3.innerText = '오늘 4-7-8 숨쉬기 기술을 시도해보세요: 코로 4초 동안 들이마시고, 7초 동안 숨을 참고, 입으로 8초 동안 천천히 내쉬세요. 이 주기를 몇 번 반복하세요.';
            break;
        case 'tired':
            emotionTitle.innerText = '피곤'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/tired.png';
            emotionText.innerText = '이번 주 많이 피곤하셨군요! 미국국립수면재단의 연구에 따르면, 낮에 계속해서 피로를 느끼는 사람들은 수면 패턴이 교란되기 쉽고, 이로 인해 수면의 질이 나빠질 가능성이 높다고 합니다. 결국 이러한 수면의 질은 낮에 또 피곤함을 많이 느끼게 하는 원인이 될 수 있죠. 악순환을 끊을 수 있는 방법은 바로 좋은 잠에서 시작합니다!';
            emotionText2.innerText = '피곤함을 해소하는 꿀팁!';
            emotionText3.innerText = '"Earthing" 시도하기: 자연의 표면인 풀, 모래 또는 흙과 같은 자연적인 표면 위에서 맨 발로 시간을 보내보세요. 이것을 "Earthing" 또는 "지면 연결"이라고 하는데, 대지의 에너지와 연결하게 해주어 피로를 감소시키고 전반적인 웰빙을 향상시킬 수 있다고 여겨집니다. 짧은 산책이나 맨 발로 대지에 앉아있는 것이든, 자연과의 연결은 에너지 부스터를 제공하고 피로를 완화할 수 있을 것입니다.';
            break;
        case 'stressed':
        case 'stress':
            emotionTitle.innerText = '스트레스'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/stressed.png';
            emotionText.innerText = '이번 주 스트레스를 많이 받으셨나봐요! 2019년 미국 심리학회에서 진행한 연구에 따르면, 고스트레스 위험군은 수면에 빠지기 어렵고 밤에 자주 깬다고 합니다. 따라서 스트레스 관리를 통해 수면을 개선할 수 있음이 입증되었습니다. 좋은 잠을 통해 스트레스를 줄이고 정서적 안정감을 함께 찾아봐요!';
            emotionText2.innerText = '스트레스 해소하는 꿀팁!';
            emotionText3.innerText = '오늘 "걱정 상자"를 만들어보세요. 나의 스트레스를 조각 종이에 적어 상자에 넣어두세요. 매일 특정 시간을 예약하여 이를 꺼내보고 5분 정도 해결 방법을 고민할 시간을 정하세요.';
            break;
        case 'anxious':
            emotionTitle.innerText = '불안'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/anxious.png';
            emotionText.innerText = '지난 주 불안한 일이 있으셨나요? 2018년 "불안, 스트레스 및 대처" 저널의 메타분석에 따르면, 높은 불안 수준을 가진 사람들은 불면증과 같은 수면 장애를 더 자주 경험할 가능성이 있습니다. 불안증세를 개선하기 위한 인지행동치료는 불안증상과 수면 품질을 모두 개선하는 데 도움이 되었습니다. 이번 주는 불안한 감정을 해소시키고 긍정적인 에너지로 채워보면 어떨까요?';
            emotionText2.innerText = '불안한 마음을 해소하는 꿀팁!';
            emotionText3.innerText = '오늘 "그라운딩"을 연습해 보세요. 보는 것 5개, 만지는 것 4개, 듣는 것 3개, 냄새나는 것 2개, 맛 보는 것 1개를 언급하여 주변 환경에 집중하세요.';
            break;
        case 'excited':
        case 'awaken':
            emotionTitle.innerText = '각성'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/excited.png';
            emotionText.innerText = '지난 주 취침 전엔 각성 상태가 많으셨네요! 2017년 "수면의학" 저널에 발표된 연구에 따르면, 잠들기 전에 독서 또는 명상과 같은 편안한 활동을 하는 사람들은 더 낮은 각성 수준과 더 빠른 수면 시작을 경험했다고 해요. 더 빠른 수면 진입을 위해 각성 상태를 완화할 수 있는 명상으로 수면에 진입해보면 어떨까요?';
            emotionText2.innerText = '흥분된 마음을 가라앉히는 꿀팁!';
            emotionText3.innerText = '오늘 "사각 숨쉬기"을 연습해 보세요. 4초 동안 들이마시고, 4초 동안 숨을 참고, 4초 동안 내쉬고, 4초 동안 쉬세요. 신경을 가라앉히기 위해 이 패턴을 반복하세요.';
            break;
        case 'depressed':
        case 'depression':
            emotionTitle.innerText = '우울'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/depressed.png';
            emotionText.innerText = '2019년 "임상수면의학 저널"에 실린 연구에서, 우울증과 수면 장애 간에 상호 작용하는 관계가 있음이 밝혀졌습니다. 수면의 질 개선은 우울증 증상의 감소와 관련이 있었으며, 그 반대 역시 마찬가지였습니다. 우울과 수면은 큰 상관관계를 지니고 있는데요! 그 악순환의 꼬리를 잘라낼 수 있는 최고의 수면을 미라클나잇과 함께 해봐요!';
            emotionText2.innerText = '우울감을 해소하는 꿀팁!';
            emotionText3.innerText = '우울감을 해소하기 위해 창의적인 취미를 탐구하는 것을 추천드려요! 그림 그리기, 악기 연주 또는 새로운 언어 배우기와 같은 새로운 취미를 적극적으로 탐구해 보세요.';
            break;
        case 'sad':
            emotionTitle.innerText = '슬픔'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/sad.png';
            emotionText.innerText = '지난 주 슬픈 일이 있으셨나요? 2016년 "수면 연구" 저널에 발표된 연구에서, 슬픔을 표현하게 해주는 감정적 글쓰기 연습을 잠들기 전에 진행한 사람들은 수면 품질이 향상되고 감정적 고통이 감소한 것으로 나타났습니다. 자기 전 나의 감정을 풀어내고 수면에 돌입해 보는 건 어떨까요?';
            emotionText2.innerText = '슬픔을 다스리는 꿀팁!';
            emotionText3.innerText = '오늘 "동정 명상"을 연습해 보세요. 자신과 슬픔을 느끼는 다른 이에게 친절하고 위로하는 생각을 보내세요.';
            break;
        case 'nervous':
            emotionTitle.innerText = '긴장'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/nervous.png';
            emotionText.innerText = '지난 주 중요한 일이 있으셨나요? 유독 긴장을 많이 눌러보셨네요! 2018년 "행동의학 저널"에서 발표된 연구에 따르면, 잠들기 전에 긴장을 완화하고 근육 이완을 촉진하는 점진적 근육 이완 기술은 긴장과 관련된 수면 장애를 개선하는 데 도움이 됩니다. 긴장 상태를 완화할 수 있는 명상으로 수면에 진입해보면 어떨까요?';
            emotionText2.innerText = '긴장을 다스리는 꿀팁!';
            emotionText3.innerText = '오늘 "걱정 일지"를 한 번 작성해 보세요! 불안한 생각을 기록한 다음, 더 합리적이고 긍정적인 대안으로 도전하고 재구성하세요.';
            break;
        default:
            emotionTitle.innerText = '데이터 없음';
            emotionImg.src = '/sleepreport/static/icon/none.png'; // Reset image
            emotionText.innerText = '충분한 데이터를 입력해 주시지 않았어요.'; // Reset text
            emotionText2.innerText = '감정 분석 받는 방법!';
            emotionText3.innerText = '미라클나잇에서 수면에 진입할 때 물어보는 감정에 대한 질문에 답변해 주시면 일주일 간의 감정을 분석해 드려요.';
    }

    const activityTitle = document.getElementById('activity-title');
    const activityImg = document.getElementById('activity-img');
    const activityText = document.getElementById('activity-text');
    const activityText2 = document.getElementById('activity-text2');
    const activityText3 = document.getElementById('activity-text3');

    // Check if the elements exist before attempting to modify them
    if (activityTitle && activityImg && activityText) {

        switch (activityInput) {
            case 'phone':
                activityTitle.textContent = '핸드폰';
                activityImg.src = '/sleepreport/static/icon/phone.png';
                activityText.textContent = '이런! 지난 주에는 핸드폰을 많이 보셨군요! 2015년 국립과학 저널에 따르면 블루라이트 노출이 수면 패턴을 방해할 수 있음을 확인하였습니다. 이 연구에서 실험군은 수면의 질이 20% 감소했습니다. 그러니 이번 주에는 수면 전 핸드폰 사용을 줄여보면 어떨까요?';
                activityText2.textContent = '핸드폰 사용을 줄이는 꿀팁!';
                activityText3.textContent = '핸드폰을 자기 전에 덜 사용하려면, "통제 시간"을 설정하여 매일 정해진 시간에 휴대폰의 "방해 금지" 모드를 켜는 습관을 가져보세요.';
                break;
            case 'nicotine':
                activityTitle.textContent = '니코틴';
                activityImg.src = '/sleepreport/static/icon/nicotine.png';
                activityText.textContent = '흡연이 수면에 영향을 미칠 수 있다는 연구가 있어요. 2018년 미국 신경과학 저널에 따르면 흡연자는 비흡연자에 비해 잠에 드는 데 평균 15분 더 오래 걸릴 수 있으며, 수면의 질이 약 25% 낮았습니다. 낮에 흡연 빈도를 줄이고, 특히 자기 전의 담배는 피하는 것이 좋겠어요.';
                activityText2.textContent = '꿀잠을 자기 위한 팁!';
                activityText3.textContent = '6분의 독서는 스트레스 수준이 최대 68%까지 감소할 수 있음으로 자기 전에 독서를 하는 것은 훌륭한 휴식 기술입니다.';
                break;
            case 'alcohol':
                activityTitle.textContent = '알코올';
                activityImg.src = '/sleepreport/static/icon/alcohol.png';
                activityText.textContent = '알코올은 초기에 졸음을 유발할 수 있지만, 수면의 깊은 단계로 들어가는 데 어려움을 줄 수 있습니다. 2017년 미국 수면학회 연구에 따르면, 알코올 섭취 후 수면 중 깨어나는 빈도가 더 높아지고, 수면의 품질이 저하됩니다. 이러한 영향을 피하려면 자기 전 알코올을 섭취하지 않는 것이 좋아요.';
                activityText2.textContent = '꿀잠을 자기 위한 팁!';
                activityText3.textContent = '6분의 독서는 스트레스 수준이 최대 68%까지 감소할 수 있음으로 자기 전에 독서를 하는 것은 훌륭한 휴식 기술입니다.';
                break;
            case 'late meal':
            case 'latefood':
                activityTitle.textContent = '야식';
                activityImg.src = '/sleepreport/static/icon/latemeal.png';
                activityText.textContent = '늦은 밤 야식은 수면에 부정적인 영향을 미칠 수 있습니다. 2019년 영국 수면학회 연구에 따르면, 야식 후 자는 데 평균 30분 더 걸릴 수 있으며, 수면 중에 소화 과정이 수면의 품질을 저하시킬 수 있습니다. 자기 전에 가벼운 식사를 하고 소화 시간을 확보하세요!';
                activityText2.textContent = '꿀잠을 자기 위한 팁!';
                activityText3.textContent = '6분의 독서는 스트레스 수준이 최대 68%까지 감소할 수 있음으로 자기 전에 독서를 하는 것은 훌륭한 휴식 기술입니다.';
                break;
            case 'tv':
                activityTitle.textContent = 'TV';
                activityImg.src = '/sleepreport/static/icon/tv.png';
                activityText.textContent = '자기 전 티비를 많이 보셨군요! 2015년 국립과학 저널에 따르면 티비 화면의 블루라이트가 수면을 방해할 수 있습니다. 실험군은 수면의 질이 15% 감소했습니다. 밤에는 빛을 줄이고, 수면 전 2시간 동안 티비 시청을 자제해보세요.';
                activityText2.textContent = '꿀잠을 자기 위한 팁!';
                activityText3.textContent = '6분의 독서는 스트레스 수준이 최대 68%까지 감소할 수 있음으로 자기 전에 독서를 하는 것은 훌륭한 휴식 기술입니다.';
                break;
            case 'coffee':
                activityTitle.textContent = '커피';
                activityImg.src = '/sleepreport/static/icon/coffee.png';
                activityText.textContent = '커피를 좋아하시나요? 2016년 미국 수면학회 연구에 따르면 커피에 든 카페인은 잠에 들기 어렵게 만들 수 있으며, 수면의 깊은 단계에 영향을 줄 수 있습니다. 자기 전 3시간 동안 커피 섭취를 피하고, 하루에 2잔 이하로 마시는 것이 좋아요.';
                activityText2.textContent = '꿀잠을 자기 위한 팁!';
                activityText3.textContent = '6분의 독서는 스트레스 수준이 최대 68%까지 감소할 수 있음으로 자기 전에 독서를 하는 것은 훌륭한 휴식 기술입니다.';
                break;
            case 'study':
                activityTitle.textContent = '공부';
                activityImg.src = '/sleepreport/static/icon/study.png';
                activityText.textContent = '지난 주엔 공부를 열심히 하셨군요! 2018년 미국 교육 심리학 저널에 따르면 잠은 시험 성적과 밀접한 관련이 있습니다. 수면은 시험 점수의 25%를 차지하며, 잠이 부족한 학생들은 평균 9점 더 낮은 점수를 받을 수 있습니다. 잠을 충분히 자고 시험을 준비하세요!';
                activityText2.textContent = '자기 전 효율적으로 공부하고 싶다면!';
                activityText3.textContent = '"포모도로 기법"을 사용하여 25분 동안 공부하고 다음 세션 전에 마음을 쉬게 하는 5분 휴식을 취하세요.';
                break;
            case 'shower':
                activityTitle.textContent = '샤워';
                activityImg.src = '/sleepreport/static/icon/shower.png';
                activityText.textContent = '취침 전 샤워는 정말 좋은 습관이에요! 샤워는 몸의 온도를 조절하는 데 도움을 줄 수 있습니다. 2017년 유럽 수면학회 연구에 따르면 따뜻한 샤워 후 몸 온도가 조절되며, 수면에 도움을 줄 수 있습니다. 자기 전 따뜻한 샤워를 즐겨보세요!';
                activityText2.textContent = '꿀잠을 자기 위한 팁!';
                activityText3.textContent = '6분의 독서는 스트레스 수준이 최대 68%까지 감소할 수 있음으로 자기 전에 독서를 하는 것은 훌륭한 휴식 기술입니다.';
                break;
            case 'read':
                activityTitle.textContent = '독서';
                activityImg.src = '/sleepreport/static/icon/read.png';
                activityText.textContent = '지난 주엔 취침 전 독서를 자루 하셨군요! 독서는 스트레스를 해소하고 수면에 도움을 줄 수 있습니다. 스트레스가 수면에 부정적인 영향을 미칠 수 있는데, 독서를 통해 스트레스를 해소하면 수면에 들기 쉬워질 수 있습니다. 자기 전 독서를 습관으로 만들어보세요!';
                activityText2.textContent = '꿀잠을 위한 팁!';
                activityText3.textContent = '수면 관련 재미있는 사실 하나는, 평균적으로 인간은 하루에 약 4~7번의 꿈을 꾼다는 것입니다. 일어나자마자 꿈을 외우려는 노력을 한다면 뇌 활성화에 도움을 줄 수 있습니다.';
                break;
            case 'workout':
                activityTitle.textContent = '운동';
                activityImg.src = '/sleepreport/static/icon/workout.png';
                activityText.textContent = '요즘 운동을 열심히 하시네요! 운동은 잠자기 전에는 자제하는 것이 좋아요. 2019년 미국 수면학회 연구에 따르면 취침 전 근육 운동은 잠을 방해하고, 수면의 질을 저하시킬 수 있습니다. 운동을 할 때는 일찍 시간을 정하고, 잠자리에 들기 6시간 전까지 끝내는 것이 좋아요!';
                activityText2.textContent = '꿀잠을 자기 위한 팁!';
                activityText3.textContent = '6분의 독서는 스트레스 수준이 최대 68%까지 감소할 수 있음으로 자기 전에 독서를 하는 것은 훌륭한 휴식 기술입니다.';
                break;
            case 'nap':
                activityTitle.textContent = '낮잠';
                activityImg.src = '/sleepreport/static/icon/workout.png';
                activityText.textContent = '지난 주엔 낮잠을 많이 주무셨너요! 짧은 낮잠은 일시적인 피로를 해소하고 집중력을 회복하는 데 도움을 줄 수 있습니다. 2018년 미국 수면학회 연구에 따르면 적절한 낮잠은 수면 패턴을 개선하고 스트레스를 감소시킵니다. 다만, 너무 길거나 늦은 낮잠은 밤잠에 악영향을 미칠 수 있으니 적당한 시간에 낮잠을 취하세요!';
                activityText2.textContent = '꿀잠을 자기 위한 팁!';
                activityText3.textContent = '6분의 독서는 스트레스 수준이 최대 68%까지 감소할 수 있음으로 자기 전에 독서를 하는 것은 훌륭한 휴식 기술입니다.';
                break;
            case 'stretching':
                activityTitle.textContent = '스트레칭';
                activityImg.src = '/sleepreport/static/icon/stretching.png';
                activityText.textContent = '지난 주엔 취침 전 스트레칭을 꾸준히 하셨군요! 스트레칭은 긴장을 풀어주고 수면에 도움을 줄 수 있습니다. 2016년 미국 심리학 저널에 따르면 스트레칭은 스트레스를 감소시키고 몸을 편안하게 만들어 수면에 도움을 줄 수 있습니다. 지금 습관을 계속 유지해요!';
                activityText2.textContent = '꿀잠을 자기 위한 팁!';
                activityText3.textContent = '6분의 독서는 스트레스 수준이 최대 68%까지 감소할 수 있음으로 자기 전에 독서를 하는 것은 훌륭한 휴식 기술입니다.';
                break;
            default:
                // Reset elements when no match is found
                activityTitle.textContent = '데이터 없음';
                activityImg.src = '/sleepreport/static/icon/none.png';
                activityText.textContent = '충분한 데이터를 입력해 주시지 않았어요.';
                activityText2.innerText = '일상 분석 받는 방법!';
                activityText3.innerText = '미라클나잇에서 수면에 진입할 때 물어보는 일상에 대한 질문에 답변해 주시면 일주일 간의 일상을 분석해 드려요.';
        }
    }
    
        console.log(daily_factors);


        // Remove the leading and trailing brackets and split the string into an array
        var daily_factorsArray = daily_factors.slice(1, -1).split(',').map(function(word) {
            return word.trim().replace(/'/g, ''); // Trim whitespace and remove single quotes
        });
    
        var wordMapping = {
            "relaxed": "편안",
            "easy": "편안",
            "tired": "피곤",
            "stressed": "스트레스",
            "stress": "스트레스",
            "anxious": "불안",
            "anxiety": "불안",
            "excited": "각성",
            "awaken": "각성",
            "depressed": "우울",
            "depression": "우울",
            "sad": "슬픔",
            "nervous": "긴장",
            "phone": "핸드폰",
            "nicotine": "니코틴",
            "alcohol": "알코올",
            "late meal": "야식",
            "latefood": "편안",
            "tv": "TV",
            "coffee": "커피",
            "study": "공부",
            "shower": "샤워",
            "read": "독서",
            "workout": "운동",
            "nap": "낮잠",
            "stretching": "스트레칭",
            "headache": "두통",
            "period": "생리",
            "cold": "감기",
        };
    
       // Replace English words with Korean words
        var daily_factors_korean = daily_factorsArray.map(function(word) {
            // If a mapping exists, use the Korean word; otherwise, keep the original word
            return wordMapping[word] || word;
        });
    
       console.log(daily_factors_korean);


// Define the desired size for the circular layout
var size = 280;

// Create an SVG container with the specified size
var svg = d3.select("#word-cloud")
    .attr("width", size)
    .attr("height", size);

// Create a circular background
svg.append("circle")
    .attr("class", "circle")
    .attr("cx", size / 2)
    .attr("cy", size / 2)
    .attr("r", size / 2)
    .style("fill", "#1F2535");

// Count the frequency of each word
var wordCount = {};
daily_factors_korean.forEach(function(word) {
    if (wordCount[word]) {
        wordCount[word]++;
    } else {
        wordCount[word] = 1;
    }
});

console.log(wordCount);

// Convert word frequency data to an array of objects with 'size' property
var data = Object.entries(wordCount).map(function([name, value]) {
    return { text: name, size: value };
});

// Create a clipPath to keep words within the circle
svg.append("clipPath")
    .attr("id", "circle-clip")
    .append("circle")
    .attr("cx", size / 2)
    .attr("cy", size / 2)
    .attr("r", size / 2)
    .style("fill", "#1F2535");

// Create a function to generate the word cloud
function generateWordCloud(words) {
    d3.layout.cloud()
        .size([size, size])
        .words(words)
        .padding(5) // Adjust the padding to control spacing between words
        .rotate(0) // Do not rotate words
        .font("Pretendard") // Specify the font
        .fontSize(function(d) { return Math.min(d.size * 15, 40); }) // Limit font size
        .on("end", draw) // Call the draw function when layout is complete
        .start();
}

// Function to draw the word cloud
function draw(words) {
    svg.append("g")
        .attr("clip-path", "url(#circle-clip)") // Apply clipPath to keep words within the circle
        .selectAll("text")
        .data(words)
        .enter().append("text")
        .attr("class", "word")
        .style("font-size", function(d) { return d.size + "px"; })
        .style("fill", "#4876EE")
        .attr("text-anchor", "middle") // Center-align text horizontally
        .attr("x", function(d) { return d.x + size / 2; })
        .attr("y", function(d) { return d.y + size / 2; })
        .text(function(d) { return d.text; });
}

// Generate the word cloud
generateWordCloud(data);


const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

var days = 0;
for (let i = 0; i < daysOfWeek.length; i++) {
    const currentDay = daysOfWeek[i];

    // Calculate the index of the next day, wrapping around to Monday on Sunday
    const nextDayIndex = (i + 1) % daysOfWeek.length;
    const nextDay = daysOfWeek[nextDayIndex];

    // Calculate the index of the previous day, wrapping around to Sunday on Monday
    const prevDayIndex = (i - 1 + daysOfWeek.length) % daysOfWeek.length;
    const prevDay = daysOfWeek[prevDayIndex];
    
    // Construct variable names for current day's sleep hours and next day's wake time
    const sleepHoursVarName = `${currentDay}_sleep_hours`;
    const waketimeVarName = `${nextDay}_waketime`;

    
    // Get the values from the variables with a default of 0 for sleep hours and '00:00' for waketime
    let sleepHours = parseFloat(eval(sleepHoursVarName)) || 0;
    const waketime = eval(waketimeVarName) || '00:00';

    
    if (currentDay == 'mon') {
        sleepHours = parseFloat(eval('sun_sleep_hours'));
    }
    
    // Convert waketime to minutes since midnight
    const waketimeMinutes = convertTimeToMinutes(waketime);

    // Check if waketime is '00:00' or not between 03:00 and 13:00
    if (waketime === '00:00' || !(waketimeMinutes >= 180 && waketimeMinutes < 780)) {
        sleepHours = 0;
    }    

 
    // Additional checks to set sleepHours to 0
    if (isNaN(sleepHours) || sleepHours < 1) {
        sleepHours = 0;
    }



    // Process sleep hours
    const sleepHoursDiv = document.getElementById(`${currentDay}_sleep_hours`);
    if (sleepHoursDiv) {
        sleepHoursDiv.style.height = `${sleepHours * 18}px`;
    }
    // Process waketime
    const timeParts = waketime.split(':');
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);

    const marginValue = (12 - hours) * 18 + (60 - minutes) * 0.2 - 6;

    // Manipulate the correct waketime element using the previous day's sleep hours
    const waketimeDiv = document.getElementById(`${currentDay}_waketime`);
    if (waketimeDiv) {
        waketimeDiv.style.marginTop = `${marginValue}px`;
        waketimeDiv.style.height = `${sleepHours * 18}px`; // Use previous day's sleep hours
        if (sleepHours > 0) {days = days + 1;}
    }
    
    var days_id = document.getElementById('days');
    days_id.textContent = days+"일";
    }
    
    


    function convertTimeTo24HourFormat(timeString) {
        // Ensure that the time is in "hh:mm:ss" format
        const timeRegex = /^(\d{1,2}):(\d{2}):(\d{2})$/;
        if (!timeRegex.test(timeString)) {
            return null;
        }
        
        const [_, hours, minutes, seconds] = timeString.match(timeRegex);
        return new Date(2023, 8, 25, hours, minutes, seconds);
    }

    function generateAdvice(average_sleep_hours, average_bedtime, average_waketime, sleepPattern, activityInput) {
        // Convert average_bedtime to a Date object
        // Convert average_bedtime and average_waketime to Date objects
    const bedtimeDate = convertTimeTo24HourFormat(average_bedtime);
    const waketimeDate = convertTimeTo24HourFormat(average_waketime);

    // Initialize an empty advice array
    const advice = [];

    
    if (average_sleep_hours < 5) {
        // Severe Sleep Deprivation
        advice.push("심한 수면 부족이에요.");
        advice.push("심한 수면 부족, 즉 5시간 미만의 수면을 꾸준히 한다면 중대한 건강 위험이 생길 수 있습니다. Journal of Sleep Research에 발표된 연구에 따르면, 꾸준히 5시간 미만의 수면을 취하는 사람들은 심장 질환 위험이 55% 더 높으며 비만 위험이 40% 더 높습니다.");
        advice.push("수면을 우선시하고 수면 일정을 조정하여 권장 수면 시간에 도달하세요. 이번 주에는 6시간을 목표로 해보면 어떨까요?");
    }

    if (average_sleep_hours >= 5 && average_sleep_hours <= 6) {
        // Moderate Sleep Deprivation
        advice.push("적절한 수면을 하고 계세요.");
        advice.push("일주일 동안의 평균 수면 시간이 5-6시간이면 건강에 악영향을 미칠 수 있습니다. 미국 수면 의학 아카데미의 연구에 따르면 이 수준의 수면 부족은 인지 기능 저하, 기분 변화 및 사고 위험을 증가시킬 수 있어요.");
        advice.push("수면 시간을 점진적으로 늘려 전반적인 웰빙을 향상시켜봐요! 이번 주에는 6시반 30분을 목표로 해보면 어떨까요?");
    }
        
    if (average_sleep_hours >= 7) {
        // Moderate Sleep Deprivation
        advice.push("충분한 수면을 하고 계세요.");
        advice.push("성인들에게 권장되는 하루 평균 수면 시간은 7-9시간입니다. 연구에 따르면 이 수면 기간은 기억력과 경계력을 향상시키며, 신체와 정신적 건강을 개선합니다. 실제 연구에서는 이 수면 기간이 수면 품질을 20% 향상시킬 수 있다고 보고되었습니다.");
        advice.push("건강과 웰빙을 위해 현재의 수면 기간을 유지하세요!");
    }

        
    if (waketimeDate && waketimeDate > new Date(2023, 8, 25, 8, 0, 0)) {
        // Late Waketime
        advice.push("기상 시간이 조금 늦어요.");
        advice.push("아침에 늦게 일어나면 일상적인 루틴에 영향을 미칠 수 있으며, 체내 생체 리듬을 규제하기 위한 자연광에 노출을 줄일 수 있습니다. Journal of Biological Rhythms에서 발표된 연구에 따르면, 아침 8시 이후에 일어나는 사람들은 하루 중 기상도 30% 감소하는 경향이 있다고 합니다.");
        advice.push("더 생산적이고 활기찬 하루를 위해 일찍 알람을 설정하고 점진적으로 기상 시간을 7시 가까이로 조절해 보세요!");
    }

    if (waketimeDate && waketimeDate >= new Date(2023, 8, 25, 7, 0, 0) && waketimeDate < new Date(2023, 8, 25, 8, 0, 0)) {
        // Moderate Waketime
        advice.push("기상 시간을 잘 유지하고 있어요!");
        advice.push("지금 유지하고 있는 기상 시간은 합리적인 범위 안에 있어 균형 잡힌 일상 생활을 할 수 있게 해줍니다. Journal of Sleep Research에 발표된 연구에 따르면, 아침 7시에서 8시 사이에 일어나는 사람들은 전반적인 웰빙과 생산성이 20% 향상되기 쉽다고 보고되었습니다.");
        advice.push("현재 기상 시간을 유지하되 일정하게 유지해 보세요!");
    }
        


    if (average_bedtime > new Date(2023, 8, 25, 23, 0, 0)) {
        // Late Bedtime
        advice.push("취침 시간이 늦어요.");
        advice.push("과학적으로 이상적인 취침 시간은 11시입니다. 11시 이후에 일정하게 취침하면 생체 리듬이 깨지고 수면 품질에 영향을 미칠 수 있습니다. Journal of Sleep Research에서 발표된 연구에 따르면 11시 이후에 취침하는 사람들은 수면 품질이 25% 감소한다고 보고되었습니다.");
        advice.push("수면 품질을 향상시키기 위해 취침 시간을 30분 정도 앞당겨 보세요!");
    }

    if (average_bedtime >= new Date(2023, 8, 25, 22, 0, 0) && average_bedtime <= new Date(2023, 8, 25, 23, 0, 0)) {
        // Moderate Bedtime
        advice.push("취침 시간이 조금 늦어요.");
        advice.push("현재 취침 시간은 합리적인 범위 안에 있지만, 일정함을 유지하는 것이 중요합니다. Journal of Clinical Sleep Medicine의 연구에 따르면 10시에서 11시 사이에 취침하는 사람들은 더 좋은 수면 품질을 경험할 확률이 15% 더 높다고 보고되었습니다.");
        advice.push("현재 취침 시간을 유지하되, 일정하게 유지해봐요!");
    }
        
    if (average_bedtime >= new Date(2023, 8, 25, 21, 0, 0) && average_bedtime <= new Date(2023, 8, 25, 22, 0, 0)) {
        // Moderate Bedtime
        advice.push("최적의 취침 시간을 가지고 있어요.");
        advice.push("대부분의 성인에게 이상적인 취침 시간은 대략 10시쯤입니다. 연구에 따르면 이 시간에 취침하면 수면 품질이 향상되고 천연 생체 리듬과 일치합니다. 실제 연구에서는 이 시간에 취침하는 사람들이 수면 품질을 25% 향상시킬 수 있다고 보고되었습니다.");
        advice.push("수면 품질을 유지하기 위해 현재의 취침 시간을 계속 유지하세요!");
    }
        
        
    if (activityInput === 'alcohol') {
            advice.push("음주가 잦아요.");
            advice.push("술은 좋은 잠을 주는 것처럼 사람을 속이곤 합니다. 실제 술은 수면에 정말 나쁜 영향을 끼칩니다. 실제 술을 마시고 바로 자게 되면 몽유병, 수면 장애, 기억력 저하 등이 유발됩니다. 그 이유는 우리 몸에서 찾을 수 있는데, 수면 중 알코올이 분해되는 과정에서 각성을 일으켜 깊은 잠을 방해하기 때문입니다. 호흡중추 기능도 떨어뜨려 수면 무호흡증을 유발할 수도 있고, 많은 양의 술을 마셨다면 이뇨작용을 촉진해 탈수 증세까지 나타날 수 있습니다.")
            advice.push("그러니 잦은 음주는 피해주세요!");
    } if (activityInput === 'latemeal') {
            advice.push("야식을 너무 자주 드세요.");
            advice.push("야식을 먹게 되면 체내 호르몬 균형이 깨집니다. 수면 시간에는 숙면 호르몬이 분비되는 등 온몸이 컨디션 회복에 집중하지만 밤에 음식을 먹으면 음식 소화하기 위해 위장에 혈액이 쏠리면서 뇌와 근육 등 다른 부위의 정상적인 신진대사가 방해받습니다. 이로 인해 숙면 호르몬인 멜라토닌이 분비되지 않아 잠을 얕게 자게 되고, 누운 자세에서 위산 역류가 촉진되며 피로감이 누적됩니다.")
            advice.push("야식을 피하고 취침하기 3~4전에 식사를 끝내는 게 어떨까요?");
    } if (activityInput === 'coffee') {
            advice.push("커피를 너무 많이 드세요.");
            advice.push("커피, 차, 탄산음료 등 카페인이 함유된 음료는 전 세계에서 가장 인기 있는 음료 중 하나입니다. 일부 사람들은 카페인으로 인한 에너지 충격을 이용해 주간 졸음을 극복하려는 유혹을 받기도 하지만, 이러한 방법은 지속 가능하지 않으며 장기적인 수면 부족을 유발할 수 있습니다. 이를 방지하려면 카페인 섭취량을 주시하고 카페인이 잠드는 데 방해가 될 수 있는 늦은 시간에는 카페인 섭취를 피하세요.")
            advice.push("내일은 오후 2시 이후로 커피를 마시지 말아볼까요?");
    }
        
    else {
        // Sleep Pattern
        advice.push("일정한 수면 패턴을 연습해 볼까요?");
        advice.push("매일 취침 시간과 기상 시간이 1시간 이하로 차이가 나면 수면 패턴이 일정하지 않다고 간주할 수 있습니다. 수면 패턴의 일관성은 수면 품질 및 전체적인 수면 만족도를 향상시킬 수 있습니다. 연구에 따르면, 1시간 이내로 수면 패턴을 유지하는 것은 인지 능력 및 기분 향상과 관련이 있습니다.");
        advice.push("매일 2시간 이내에 비슷한 취침과 기상 시간을 가져보세요!");
    }

    // Return the array of advice
    return advice;
    }

    // Generate advice
    const advice = generateAdvice(average_sleep_hour, average_bedtime, average_waketime, sleep_pattern, activityInput);

    // Set the advice text
    document.getElementById('advice').textContent = advice[0];
    document.getElementById('advice_text').textContent = advice[1];
    document.getElementById('advice_text_2').textContent = advice[2];
    
    console.log(convertToNumericTime(prev_average_bedtime));

    // Get DOM element
    const insight2 = document.getElementById('insight2');
    const bedtimeComparison = document.getElementById('bedtime-text');
    const bedtimeComparison2 = document.getElementById('bedtime-text2');

    // Calculate the time difference between prev_average_bedtime and average_bedtime
    const timeDifference = calculateTimeDifference(prev_average_bedtime, average_bedtime);

    // Check conditions and update display
    if (convertToNumericTime(average_bedtime) <= 21.0 &&
        convertToNumericTime(average_bedtime) > 7.0 &&
        (!isNaN(prev_average_waketime) && convertToNumericTime(prev_average_waketime) <= 21.0 && convertToNumericTime(prev_average_waketime) > 7.0 )) {
        insight2.style.display = "none"; // Hide element
    } else if (prev_average_bedtime === "") {

    } else {
        insight2.style.display = "block"; // Show element
    }

    // Calculate the time difference using a function
    function calculateTimeDifference(prev_time, current_time) {
        // Split the times into hours and minutes
        const [prev_hours, prev_minutes] = prev_time.split(':').map(Number);
        const [current_hours, current_minutes] = current_time.split(':').map(Number);

        // Calculate the time difference in minutes
        let timeDifference = (current_hours * 60 + current_minutes) - (prev_hours * 60 + prev_minutes);

        // Handle exceptions where the times cross midnight
        if (timeDifference < -720) {
            // If the difference is more than 12 hours, adjust it for the opposite case
            timeDifference += 1440; // 24 hours in minutes
        } else if (timeDifference > 720) {
            // If the difference is more than 12 hours in the opposite direction, adjust it
            timeDifference -= 1440; // 24 hours in minutes
        }

        return timeDifference;
    }



    // Update bedtime comparison text content
    bedtimeComparison.textContent = Math.abs(timeDifference) + '분';

    // Update bedtime comparison text based on time difference
    if (timeDifference > 0) {
        bedtimeComparison2.textContent = ' 늦어졌어요.';
        bedtimeComparison.style.color = '#FFA449';
    } else if (timeDifference <= 0) {
        bedtimeComparison2.textContent = ' 빨라졌어요.';
        bedtimeComparison.style.color = '#649CFF';
    }


    console.log(average_waketime);
    console.log(prev_average_waketime);

    // Get DOM elements
    const insight3 = document.getElementById('insight3');
    const waketimeComparison = document.getElementById('waketime-text');
    const waketimeComparison2 = document.getElementById('waketime-text2');

    // Initialize timeDifference2
    let timeDifference2 = convertTimeToMinutes(average_waketime) - convertTimeToMinutes(prev_average_waketime);

    // Check conditions and update elements
    if (
        convertToNumericTime(average_waketime) > 13.0 &&
        convertToNumericTime(average_waketime) < 21.0 &&
        (!isNaN(prev_average_waketime) && convertToNumericTime(prev_average_waketime) > 13.0 && convertToNumericTime(prev_average_waketime) < 21.0)
    ) {

        insight3.style.display = "none"; // Hide element
    } else if (prev_average_waketime === "") {

    } else {

        insight3.style.display = "block"; // Show element
    }

    // Update waketime comparison text content
    waketimeComparison.textContent = Math.abs(timeDifference2) + '분';

    // Update waketime comparison text based on time difference
    if (timeDifference2 < 0) {
        waketimeComparison2.textContent = ' 빨라졌어요.';
        waketimeComparison.style.color = '#649CFF';
    } else if (timeDifference2 >= 0) {
        waketimeComparison2.textContent = ' 늦어졌어요.';
        waketimeComparison.style.color = '#FFA449';
    }


}