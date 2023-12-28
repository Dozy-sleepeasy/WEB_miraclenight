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
            emotionText3.innerText = '오늘 "감각 과부하 운동"을 시도해보세요. 잠시 동안 감각적 자극이 많은 상황(예: 붐비는 거리나 사람이 많은 곳)에 몰입해 그 상황을 충분히 경험한 다음, 조용하고 통제된 환경으로 돌아가세요. 이러한 대조는 종종 평온함을 더욱 뚜렷하게 느끼게 합니다.';
            break;
        case 'tired':
            emotionTitle.innerText = '피곤'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/tired.png';
            emotionText.innerText = '"팔밍"을 사용해보세요. 손을 비벼서 따뜻해질 때까지 문지른 다음, 부드럽게 닫힌 눈 위에 손바닥을 올려보세요. 손에서 나오는 온기를 느끼고, 어둠이 당신의 눈에 휴식을 제공하며 에너지를 새로 고칩니다.';
            emotionText2.innerText = '피곤함을 해소하는 꿀팁!';
            emotionText3.innerText = '오늘 "감각 과부하 운동"을 시도해보세요. 잠시 동안 감각적 자극이 많은 상황(예: 붐비는 거리나 사람이 많은 곳)에 몰입해 그 상황을 충분히 경험한 다음, 조용하고 통제된 환경으로 돌아가세요. 이러한 대조는 종종 평온함을 더욱 뚜렷하게 느끼게 합니다.';
            break;
        case 'stressed':
        case 'stress':
            emotionTitle.innerText = '스트레스'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/stressed.png';
            emotionText.innerText = '이번 주 스트레스를 많이 받으셨나봐요! 2019년 미국 심리학회에서 진행한 연구에 따르면, 고스트레스 위험군은 수면에 빠지기 어렵고 밤에 자주 깬다고 합니다. 따라서 스트레스 관리를 통해 수면을 개선할 수 있음이 입증되었습니다. 좋은 잠을 통해 스트레스를 줄이고 정서적 안정감을 함께 찾아봐요!';
            emotionText2.innerText = '스트레스 해소하는 꿀팁!';
            emotionText3.innerText = '오늘 "감각 과부하 운동"을 시도해보세요. 잠시 동안 감각적 자극이 많은 상황(예: 붐비는 거리나 사람이 많은 곳)에 몰입해 그 상황을 충분히 경험한 다음, 조용하고 통제된 환경으로 돌아가세요. 이러한 대조는 종종 평온함을 더욱 뚜렷하게 느끼게 합니다.';
            break;
        case 'anxious':
            emotionTitle.innerText = '불안'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/anxious.png';
            emotionText.innerText = '지난 주 불안한 일이 있으셨나요? 2018년 "불안, 스트레스 및 대처" 저널의 메타분석에 따르면, 높은 불안 수준을 가진 사람들은 불면증과 같은 수면 장애를 더 자주 경험할 가능성이 있습니다. 불안증세를 개선하기 위한 인지행동치료는 불안증상과 수면 품질을 모두 개선하는 데 도움이 되었습니다. 이번 주는 불안한 감정을 해소시키고 긍정적인 에너지로 채워보면 어떨까요?';
            emotionText2.innerText = '불안한 마음을 해소하는 꿀팁!';
            emotionText3.innerText = '오늘 "감각 과부하 운동"을 시도해보세요. 잠시 동안 감각적 자극이 많은 상황(예: 붐비는 거리나 사람이 많은 곳)에 몰입해 그 상황을 충분히 경험한 다음, 조용하고 통제된 환경으로 돌아가세요. 이러한 대조는 종종 평온함을 더욱 뚜렷하게 느끼게 합니다.';
            break;
        case 'excited':
        case 'awaken':
            emotionTitle.innerText = '각성'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/excited.png';
            emotionText.innerText = '지난 주 취침 전엔 각성 상태가 많으셨네요! 2017년 "수면의학" 저널에 발표된 연구에 따르면, 잠들기 전에 독서 또는 명상과 같은 편안한 활동을 하는 사람들은 더 낮은 각성 수준과 더 빠른 수면 시작을 경험했다고 해요. 더 빠른 수면 진입을 위해 각성 상태를 완화할 수 있는 명상으로 수면에 진입해보면 어떨까요?';
            emotionText2.innerText = '흥분된 마음을 가라앉히는 꿀팁!';
            emotionText3.innerText = '오늘 "감각 과부하 운동"을 시도해보세요. 잠시 동안 감각적 자극이 많은 상황(예: 붐비는 거리나 사람이 많은 곳)에 몰입해 그 상황을 충분히 경험한 다음, 조용하고 통제된 환경으로 돌아가세요. 이러한 대조는 종종 평온함을 더욱 뚜렷하게 느끼게 합니다.';
            break;
        case 'depressed':
        case 'depression':
            emotionTitle.innerText = '우울'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/depressed.png';
            emotionText.innerText = '2019년 "임상수면의학 저널"에 실린 연구에서, 우울증과 수면 장애 간에 상호 작용하는 관계가 있음이 밝혀졌습니다. 수면의 질 개선은 우울증 증상의 감소와 관련이 있었으며, 그 반대 역시 마찬가지였습니다. 우울과 수면은 큰 상관관계를 지니고 있는데요! 그 악순환의 꼬리를 잘라낼 수 있는 최고의 수면을 미라클나잇과 함께 해봐요!';
            emotionText2.innerText = '우울감을 해소하는 꿀팁!';
            emotionText3.innerText = '오늘 "감각 과부하 운동"을 시도해보세요. 잠시 동안 감각적 자극이 많은 상황(예: 붐비는 거리나 사람이 많은 곳)에 몰입해 그 상황을 충분히 경험한 다음, 조용하고 통제된 환경으로 돌아가세요. 이러한 대조는 종종 평온함을 더욱 뚜렷하게 느끼게 합니다.';
            break;
        case 'sad':
            emotionTitle.innerText = '슬픔'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/sad.png';
            emotionText.innerText = '지난 주 슬픈 일이 있으셨나요? 2016년 "수면 연구" 저널에 발표된 연구에서, 슬픔을 표현하게 해주는 감정적 글쓰기 연습을 잠들기 전에 진행한 사람들은 수면 품질이 향상되고 감정적 고통이 감소한 것으로 나타났습니다. 자기 전 나의 감정을 풀어내고 수면에 돌입해 보는 건 어떨까요?';
            emotionText2.innerText = '슬픔을 다스리는 꿀팁!';
            emotionText3.innerText = '오늘 "감각 과부하 운동"을 시도해보세요. 잠시 동안 감각적 자극이 많은 상황(예: 붐비는 거리나 사람이 많은 곳)에 몰입해 그 상황을 충분히 경험한 다음, 조용하고 통제된 환경으로 돌아가세요. 이러한 대조는 종종 평온함을 더욱 뚜렷하게 느끼게 합니다.';
            break;
        case 'nervous':
            emotionTitle.innerText = '긴장'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/nervous.png';
            emotionText.innerText = '지난 주 중요한 일이 있으셨나요? 유독 긴장을 많이 눌러보셨네요! 2018년 "행동의학 저널"에서 발표된 연구에 따르면, 잠들기 전에 긴장을 완화하고 근육 이완을 촉진하는 점진적 근육 이완 기술은 긴장과 관련된 수면 장애를 개선하는 데 도움이 됩니다. 긴장 상태를 완화할 수 있는 명상으로 수면에 진입해보면 어떨까요?';
            emotionText2.innerText = '긴장을 다스리는 꿀팁!';
            emotionText3.innerText = '오늘 "감각 과부하 운동"을 시도해보세요. 잠시 동안 감각적 자극이 많은 상황(예: 붐비는 거리나 사람이 많은 곳)에 몰입해 그 상황을 충분히 경험한 다음, 조용하고 통제된 환경으로 돌아가세요. 이러한 대조는 종종 평온함을 더욱 뚜렷하게 느끼게 합니다.';
            break;
        case 'cold':
            emotionTitle.innerText = '감기'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/nervous.png';
            emotionText.innerText = '지난 주 감기에 걸리셨나요? 코 막힘, 기침, 목 아픔 등은 편안한 수면을 어렵게 만듭니다. 적절한 치료와 휴식을 취해야 합니다. 방의 습도를 조절하고, 따뜻하게 유지하는 것도 도움이 될 수 있습니다.';
            emotionText2.innerText = '감기 낫는 꿀팁!';
            emotionText3.innerText = '오늘 "감각 과부하 운동"을 시도해보세요. 잠시 동안 감각적 자극이 많은 상황(예: 붐비는 거리나 사람이 많은 곳)에 몰입해 그 상황을 충분히 경험한 다음, 조용하고 통제된 환경으로 돌아가세요. 이러한 대조는 종종 평온함을 더욱 뚜렷하게 느끼게 합니다.';
            break;
        case 'headache':
            emotionTitle.innerText = '두통'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/headache.png';
            emotionText.innerText = '지난 주 취침 전 두통이 있으셨군요. 잠자기 전 두통은 다양한 원인에 의해 발생할 수 있으며, 이는 수면의 질을 저하시키고 잠들기를 어렵게 만듭니다. 스트레스, 피로, 눈의 피로, 탈수, 심지어 카페인이나 알코올의 과도한 섭취도 두통을 유발할 수 있습니다. 또한, 오랜 시간 동안의 스크린 사용으로 인한 시각적 스트레스도 두통의 원인이 될 수 있습니다.';
            emotionText2.innerText = '두통을 완화하는 꿀팁!';
            emotionText3.innerText = '오늘 "감각 과부하 운동"을 시도해보세요. 잠시 동안 감각적 자극이 많은 상황(예: 붐비는 거리나 사람이 많은 곳)에 몰입해 그 상황을 충분히 경험한 다음, 조용하고 통제된 환경으로 돌아가세요. 이러한 대조는 종종 평온함을 더욱 뚜렷하게 느끼게 합니다.';
            break;
        default:
            emotionTitle.innerText = '데이터 없음';
            emotionImg.src = '/sleepreport/static/icon/none.png'; // Reset image
            emotionText.innerText = '충분한 데이터를 입력해 주시지 않았어요.'; // Reset text
            emotionText2.innerText = '감정 분석 받는 방법!';
            emotionText3.innerText = '미라클나잇에서 수면에 진입할 때 물어보는 감정에 대한 질문에 답변해 주시면 일주일 동안의 감정을 분석해 드려요.';
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
                activityText.textContent = '지난 주에는 핸드폰을 많이 보셨군요! 잠자기 전에 스마트폰을 과도하게 사용하는 것은 화면에서 방출되는 블루라이트로 인해 수면 패턴을 방해할 수 있습니다. 이 블루라이트는 멜라토닌 생성을 억제하고 일주기 리듬을 지연시킵니다. 연구에 따르면 이로 인해 잠들기 어려워지는 것은 물론 수면의 질도 떨어뜨려 만성적인 수면 부족을 초래할 수 있습니다. 건강한 수면 주기를 유지하기 위해서는 취침 전에는 스크린 사용을 제한하는 것이 좋습니다.';
                activityText2.textContent = '꿀잠을 자기 위한 팁!';
                activityText3.textContent = 'UNT Health Science Center의 로인 박사는 배고픈 상태로 잠자리에 드는 것은 숙면에도 좋지 않다고 합니다. 따라서 200 칼로리 미만의 취침 전에 단백질과 탄수화물을 포함한 가벼운 간식을 먹는 것을 추천하는데요! 땅콩 버터와 크래커, 삶은 달걀이 좋은 음식으로 추천했습니다.';
                break;
            case 'nicotine':
                activityTitle.textContent = '니코틴';
                activityImg.src = '/sleepreport/static/icon/nicotine.png';
                activityText.textContent = '니코틴은 중추신경계를 자극하는 강력한 자극제입니다. 담배나 전자담배의 니코틴은 잠들기를 어렵게 만들고, 수면 중에 깨는 빈도를 증가시킬 수 있습니다. 니코틴은 수면의 깊이에도 영향을 미치며, 특히 REM 수면을 방해하여 수면의 질을 저하시킵니다. 잠자리에 들기 몇 시간 전에는 흡연을 피하는 것이 수면의 질을 향상시키는 데 도움이 될 수 있습니다.';
                activityText2.textContent = '꿀잠을 자기 위한 팁!';
                activityText3.textContent = 'UNT Health Science Center의 로인 박사는 배고픈 상태로 잠자리에 드는 것은 숙면에도 좋지 않다고 합니다. 따라서 200 칼로리 미만의 취침 전에 단백질과 탄수화물을 포함한 가벼운 간식을 먹는 것을 추천하는데요! 땅콩 버터와 크래커, 삶은 달걀이 좋은 음식으로 추천했습니다.';
                break;
            case 'alcohol':
                activityTitle.textContent = '알코올';
                activityImg.src = '/sleepreport/static/icon/alcohol.png';
                activityText.textContent = '알코올은 잠들기를 쉽게 만들 수 있지만, REM 수면을 방해하고 수면의 질을 저하시킵니다. 알코올이 체내에서 대사되면서 수면 중에 깨는 경우가 많으며, 이는 피로 회복에 영향을 줍니다. 따라서, 잠들기 전에 알코올 섭취는 가능한 한 피하거나 최소한으로 줄이는 것이 좋습니다.';
                activityText2.textContent = '꿀잠을 자기 위한 팁!';
                activityText3.textContent = 'UNT Health Science Center의 로인 박사는 배고픈 상태로 잠자리에 드는 것은 숙면에도 좋지 않다고 합니다. 따라서 200 칼로리 미만의 취침 전에 단백질과 탄수화물을 포함한 가벼운 간식을 먹는 것을 추천하는데요! 땅콩 버터와 크래커, 삶은 달걀이 좋은 음식으로 추천했습니다.';
                break;
            case 'late meal':
            case 'latefood':
                activityTitle.textContent = '야식';
                activityImg.src = '/sleepreport/static/icon/latemeal.png';
                activityText.textContent = '잠자리에 들기 전에 무거운 식사나 매운 음식을 섭취하면 위장이 활발히 활동하여 수면을 방해할 수 있습니다. 신체는 소화를 위해 에너지를 사용하므로, 취침 전에는 가벼운 식사나 간식을 섭취하는 것이 좋습니다. 또한, 늦은 시간에 과식을 하면 산성 역류나 소화 불량을 유발할 수 있으며, 이는 편안한 수면을 방해할 수 있습니다.';
                activityText2.textContent = '꿀잠을 자기 위한 팁!';
                activityText3.textContent = 'UNT Health Science Center의 로인 박사는 배고픈 상태로 잠자리에 드는 것은 숙면에도 좋지 않다고 합니다. 따라서 200 칼로리 미만의 취침 전에 단백질과 탄수화물을 포함한 가벼운 간식을 먹는 것을 추천하는데요! 땅콩 버터와 크래커, 삶은 달걀이 좋은 음식으로 추천했습니다.';
                break;
            case 'tv':
                activityTitle.textContent = 'TV';
                activityImg.src = '/sleepreport/static/icon/tv.png';
                activityText.textContent = '자기 전 티비를 많이 보셨군요! 2015년 국립과학 저널에 따르면 티비 화면의 블루라이트가 수면을 방해할 수 있습니다. 실험군은 수면의 질이 15% 감소했습니다. 밤에는 빛을 줄이고, 수면 전 2시간 동안 티비 시청을 자제해보세요.';
                activityText2.textContent = '꿀잠을 자기 위한 팁!';
                activityText3.textContent = 'UNT Health Science Center의 로인 박사는 배고픈 상태로 잠자리에 드는 것은 숙면에도 좋지 않다고 합니다. 따라서 200 칼로리 미만의 취침 전에 단백질과 탄수화물을 포함한 가벼운 간식을 먹는 것을 추천하는데요! 땅콩 버터와 크래커, 삶은 달걀이 좋은 음식으로 추천했습니다.';
                break;
            case 'coffee':
                activityTitle.textContent = '커피';
                activityImg.src = '/sleepreport/static/icon/coffee.png';
                activityText.textContent = '카페인은 중추신경계를 자극하여 몸을 각성시키고, 잠들기를 어렵게 만듭니다. 카페인은 몸에서 분해되고 배출되는 데 몇 시간이 걸리기 때문에, 저녁이나 잠자리에 들기 몇 시간 전에는 커피, 홍차, 초콜릿 등 카페인이 함유된 음식이나 음료를 피하는 것이 좋습니다. 카페인의 영향은 개인에 따라 다르므로, 자신의 반응을 관찰하고 조절하는 것이 중요합니다.';
                activityText2.textContent = '꿀잠을 자기 위한 팁!';
                activityText3.textContent = 'UNT Health Science Center의 로인 박사는 배고픈 상태로 잠자리에 드는 것은 숙면에도 좋지 않다고 합니다. 따라서 200 칼로리 미만의 취침 전에 단백질과 탄수화물을 포함한 가벼운 간식을 먹는 것을 추천하는데요! 땅콩 버터와 크래커, 삶은 달걀이 좋은 음식으로 추천했습니다.';
                break;
            case 'study':
                activityTitle.textContent = '공부';
                activityImg.src = '/sleepreport/static/icon/study.png';
                activityText.textContent = '밤 늦게까지 공부하는 것은 뇌를 과도하게 자극하여 잠들기 어렵게 만들 수 있습니다. 취침 전에는 가벼운 독서나 이완 활동으로 전환하는 것이 수면의 질을 높일 수 있습니다.';
                activityText2.textContent = '꿀잠을 자기 위한 팁!';
                activityText3.textContent = 'UNT Health Science Center의 로인 박사는 배고픈 상태로 잠자리에 드는 것은 숙면에도 좋지 않다고 합니다. 따라서 200 칼로리 미만의 취침 전에 단백질과 탄수화물을 포함한 가벼운 간식을 먹는 것을 추천하는데요! 땅콩 버터와 크래커, 삶은 달걀이 좋은 음식으로 추천했습니다.';
                break;
            case 'shower':
                activityTitle.textContent = '샤워';
                activityImg.src = '/sleepreport/static/icon/shower.png';
                activityText.textContent = '따뜻한 샤워는 근육을 이완시키고 신체 온도를 조절하여 수면에 도움을 줄 수 있습니다. 반면, 너무 뜨거운 샤워는 오히려 신체를 각성시킬 수 있으니 주의해야 합니다.';
                activityText2.textContent = '꿀잠을 자기 위한 팁!';
                activityText3.textContent = 'UNT Health Science Center의 로인 박사는 배고픈 상태로 잠자리에 드는 것은 숙면에도 좋지 않다고 합니다. 따라서 200 칼로리 미만의 취침 전에 단백질과 탄수화물을 포함한 가벼운 간식을 먹는 것을 추천하는데요! 땅콩 버터와 크래커, 삶은 달걀이 좋은 음식으로 추천했습니다.';
                break;
            case 'read':
                activityTitle.textContent = '독서';
                activityImg.src = '/sleepreport/static/icon/read.png';
                activityText.textContent = '지난 주엔 취침 전 독서를 자루 하셨군요! 독서는 스트레스를 해소하고 수면에 도움을 줄 수 있습니다. 스트레스가 수면에 부정적인 영향을 미칠 수 있는데, 독서를 통해 스트레스를 해소하면 수면에 들기 쉬워질 수 있습니다. 자기 전 독서를 습관으로 만들어보세요!';
                activityText2.textContent = '꿀잠을 자기 위한 팁!';
                activityText3.textContent = 'UNT Health Science Center의 로인 박사는 배고픈 상태로 잠자리에 드는 것은 숙면에도 좋지 않다고 합니다. 따라서 200 칼로리 미만의 취침 전에 단백질과 탄수화물을 포함한 가벼운 간식을 먹는 것을 추천하는데요! 땅콩 버터와 크래커, 삶은 달걀이 좋은 음식으로 추천했습니다.';
                break;
            case 'workout':
                activityTitle.textContent = '운동';
                activityImg.src = '/sleepreport/static/icon/workout.png';
                activityText.textContent = '요즘 운동을 열심히 하시네요! 잠자리에 들기 전에 격렬한 운동을 하면 심박수와 체온이 상승해 잠들기 어려워질 수 있습니다. 가벼운 운동은 괜찮지만, 수면 전에는 고강도 운동을 피하는 것이 좋습니다.';
                activityText2.textContent = '꿀잠을 자기 위한 팁!';
                activityText3.textContent = 'UNT Health Science Center의 로인 박사는 배고픈 상태로 잠자리에 드는 것은 숙면에도 좋지 않다고 합니다. 따라서 200 칼로리 미만의 취침 전에 단백질과 탄수화물을 포함한 가벼운 간식을 먹는 것을 추천하는데요! 땅콩 버터와 크래커, 삶은 달걀이 좋은 음식으로 추천했습니다.';
                break;
            case 'nap':
                activityTitle.textContent = '낮잠';
                activityImg.src = '/sleepreport/static/icon/workout.png';
                activityText.textContent = '지난 주엔 낮잠을 많이 주무셨너요! 짧은 낮잠은 일시적인 피로를 해소하고 집중력을 회복하는 데 도움을 줄 수 있습니다. 2018년 미국 수면학회 연구에 따르면 적절한 낮잠은 수면 패턴을 개선하고 스트레스를 감소시킵니다. 다만, 너무 길거나 늦은 낮잠은 밤잠에 악영향을 미칠 수 있으니 적당한 시간에 낮잠을 취하세요!';
                activityText2.textContent = '꿀잠을 자기 위한 팁!';
                activityText3.textContent = 'UNT Health Science Center의 로인 박사는 배고픈 상태로 잠자리에 드는 것은 숙면에도 좋지 않다고 합니다. 따라서 200 칼로리 미만의 취침 전에 단백질과 탄수화물을 포함한 가벼운 간식을 먹는 것을 추천하는데요! 땅콩 버터와 크래커, 삶은 달걀이 좋은 음식으로 추천했습니다.';
                break;
            case 'stretching':
                activityTitle.textContent = '스트레칭';
                activityImg.src = '/sleepreport/static/icon/stretching.png';
                activityText.textContent = '잠자기 전 스트레칭은 근육을 이완시키고 스트레스를 줄여 수면의 질을 개선할 수 있습니다. 부드러운 스트레칭은 수면을 위한 좋은 준비 활동입니다.';
                activityText2.textContent = '꿀잠을 자기 위한 팁!';
                activityText3.textContent = 'UNT Health Science Center의 로인 박사는 배고픈 상태로 잠자리에 드는 것은 숙면에도 좋지 않다고 합니다. 따라서 200 칼로리 미만의 취침 전에 단백질과 탄수화물을 포함한 가벼운 간식을 먹는 것을 추천하는데요! 땅콩 버터와 크래커, 삶은 달걀이 좋은 음식으로 추천했습니다.';
                break;
            default:
                // Reset elements when no match is found
                activityTitle.textContent = '데이터 없음';
                activityImg.src = '/sleepreport/static/icon/none.png';
                activityText.textContent = '충분한 데이터를 입력해 주시지 않았어요.';
                activityText2.innerText = '일상 분석 받는 방법!';
                activityText3.innerText = '미라클나잇에서 수면에 진입할 때 물어보는 일상에 대한 질문에 답변해 주시면 일주일 동안의 일상을 분석해 드려요.';
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
             "pills": "약",
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
    if (sleepPattern < 60) {
    // General Sleep Hygiene
    advice.push("생체 리듬에 대한 고민이 있으신가요?");
    advice.push("때때로 우리는 하루 종일 피곤함을 느끼지만 잠자리에 들어 잠을 잘 때쯤 '제2의 바람'이 불기도 합니다. 이 바람을 맞으면 정신이 깨어나 있다고 느낍니다. 높은 확률로 우리가 수면 시간을 놓쳤기 때문일 수도 있는데요. 우리의 생체 리듬은 우리가 매일 밤 같은 시간에 잠자리에 들고 익숙한 취침 루틴을 따르기를 원하죠. 하지만 만약 우리가 더 일찍 낮잠을 잤거나 저녁이 되면서 불이 꺼지지 않았다면, 우리의 생체 리듬은 우리가 자지 않는 것으로 착각하여 이 '제2의 바람'을 쏘게 된다고 합니다. 그래서 수면 일정을 정하고 그것을 고수하는 것이 매우 중요합니다.");
    advice.push("이번 주엔 일정한 수면 패턴을 만들어 볼까요? 매일 자는 시간을 30분 이내로 고정하고, 일어나는 시간도 30분 이내로 고정하여 일정한 수면 패턴을 연습해 보세요!");
}
        
  
    if (average_sleep_hours < 5) {
    // Severe Sleep Deprivation
    advice.push("매우 심각한 수면 부족 상태입니다.");
    advice.push("매일 5시간 미만의 수면은 건강에 매우 해롭습니다. 이런 수면 패턴은 면역력 저하, 기억력 감소, 그리고 정신적, 육체적 건강 문제를 유발할 수 있습니다.");
    advice.push("매일 저녁 정해진 시간에 침대에 들어가 보세요. 이는 신체 시계를 재조정하는 데 도움이 됩니다.");
}

if (average_sleep_hours >= 5 && average_sleep_hours <= 6) {
    // Moderate Sleep Deprivation
    advice.push("수면 시간이 부족해 보입니다.");
    advice.push("일주일 평균 5-6시간 수면은 건강에 부정적인 영향을 줄 수 있습니다. 이런 수면 부족은 장기적으로 집중력 감소와 스트레스 증가를 초래할 수 있습니다.");
    advice.push("매일 밤 수면 전에 가벼운 스트레칭을 해보세요. 이는 근육을 이완시키고 잠들기 쉽게 만들 수 있습니다.");
}

if (average_sleep_hours >= 7) {
    // Adequate Sleep
    advice.push("충분한 수면을 취하고 계시네요.");
    advice.push("매일 7시간 이상의 수면은 건강 유지에 필수적입니다. 이는 장기적으로 뇌 건강과 정서적 안정에 도움이 됩니다.");
    advice.push("취침 전에 디지털 기기 사용을 피하면 수면의 질을 더욱 개선할 수 있습니다.");
}
      
        

if (waketimeDate && waketimeDate > new Date(2023, 8, 25, 8, 0, 0)) {
    // Late Waketime
    advice.push("아침에 늦게 일어나시는 군요.");
    advice.push("늦은 기상은 생체 리듬에 영향을 주고 낮 동안의 활력을 감소시킬 수 있습니다. 일찍 일어나는 것이 전반적인 활력과 생산성에 긍정적입니다.");
    advice.push("조금씩 기상 시간을 앞당겨서, 점차적으로 이른 시간에 일어나 보세요.");
}

if (waketimeDate && waketimeDate >= new Date(2023, 8, 25, 7, 0, 0) && waketimeDate < new Date(2023, 8, 25, 8, 0, 0)) {
    // Moderate Waketime
    advice.push("기상 시간이 적당해 보입니다.");
    advice.push("아침 7시에서 8시 사이에 일어나는 것은 일상 생활에 균형을 맞출 수 있게 해줍니다. 이 시간대에 기상하는 것은 하루를 더 활기차게 시작할 수 있게 합니다.");
    advice.push("기상 시간을 꾸준히 유지하면서, 가능하다면 조금 더 일찍 일어나 보는 것도 좋을 것 같아요.");
}

    
if (average_bedtime > new Date(2023, 8, 25, 23, 0, 0)) {
    // Late Bedtime
    advice.push("취침 시간이 너무 늦어요.");
    advice.push("늦은 취침 시간은 수면 주기에 영향을 미치고 다음 날 피로감을 증가시킬 수 있습니다. 일찍 자는 습관은 수면의 질을 향상시키는 데 도움이 됩니다.");
    advice.push("취침 시간을 점차적으로 앞당겨서, 밤 11시 이전에 잠자리에 드는 것을 목표로 해보세요.");
}

if (average_bedtime >= new Date(2023, 8, 25, 22, 0, 0) && average_bedtime <= new Date(2023, 8, 25, 23, 0, 0)) {
    // Moderate Bedtime
    advice.push("취침 시간이 비교적 적당합니다.");
    advice.push("밤 10시에서 11시 사이에 잠자리에 드는 것은 좋은 수면 습관의 일부입니다. 이 시간대는 수면 주기와 생체 리듬을 조절하는 데 이상적입니다.");
    advice.push("수면 패턴을 일정하게 유지하면서, 가능한 한 일찍 잠자리에 들어 보세요.");
}
if (average_bedtime >= new Date(2023, 8, 25, 21, 0, 0) && average_bedtime <= new Date(2023, 8, 25, 22, 0, 0)) {
    // Ideal Bedtime
    advice.push("최적의 취침 시간을 갖고 계시네요.");
    advice.push("밤 9시에서 10시 사이에 잠자리에 드는 것은 수면의 질을 높이고, 다음 날을 상쾌하게 시작하는 데 도움이 됩니다.");
    advice.push("취침 전에 편안한 음악을 듣거나, 가벼운 책을 읽는 것도 수면에 도움이 될 수 있습니다.");
}



else {
    // General Sleep Hygiene
    advice.push("생체 리듬에 대한 고민이 있으신가요?");
    advice.push("때때로 우리는 하루 종일 피곤함을 느끼지만 잠자리에 들어 잠을 잘 때쯤 '제2의 바람'이 불기도 합니다. 이 바람을 맞으면 정신이 깨어나 있다고 느낍니다. 높은 확률로 우리가 수면 시간을 놓쳤기 때문일 수도 있는데요. 우리의 생체 리듬은 우리가 매일 밤 같은 시간에 잠자리에 들고 익숙한 취침 루틴을 따르기를 원하죠. 하지만 만약 우리가 더 일찍 낮잠을 잤거나 저녁이 되면서 불이 꺼지지 않았다면, 우리의 생체 리듬은 우리가 자지 않는 것으로 착각하여 이 '제2의 바람'을 쏘게 된다고 합니다. 그래서 수면 일정을 정하고 그것을 고수하는 것이 매우 중요합니다.");
    advice.push("이번 주엔 일정한 수면 패턴을 만들어 볼까요? 매일 자는 시간을 30분 이내로 고정하고, 일어나는 시간도 30분 이내로 고정하여 일정한 수면 패턴을 연습해 보세요!");
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