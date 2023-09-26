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
        mon_sleep_hours: mon_sleep_hours,
        tue_sleep_hours: tue_sleep_hours,
        wed_sleep_hours: wed_sleep_hours,
        thu_sleep_hours: thu_sleep_hours,
        fri_sleep_hours: fri_sleep_hours,
        sat_sleep_hours: sat_sleep_hours,
        sun_sleep_hours: sun_sleep_hours,
        average_bedtime: average_bedtime,
        average_waketime: average_waketime,
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
    
    var url = '/sleepreport/report.html?data='+encodeURIComponent(JSON.stringify(jsonData));
    window.location.href = url;
}




function updateReport() {    
    // Get the URL query parameter
    var queryParam = decodeURIComponent(location.href.split('=')[1]);

    // Parse the JSON data
    var jsonData = JSON.parse(queryParam);

    // Accessing individual properties from jsonData
    var uid = jsonData.uid; // Example: Accessing the 'uid' property
    var username = jsonData.username; // Accessing the 'username' property
    var average_sleep_hours = jsonData.average_sleep_hours; // Accessing the 'average_sleep_hours' property
    var mon_sleep_hours = jsonData.mon_sleep_hours; // Accessing the 'mon_sleep_hours' property
    var tue_sleep_hours = jsonData.tue_sleep_hours; // Accessing the 'tue_sleep_hours' property
    var wed_sleep_hours = jsonData.wed_sleep_hours; // Accessing the 'wed_sleep_hours' property
    var thu_sleep_hours = jsonData.thu_sleep_hours; // Accessing the 'thu_sleep_hours' property
    var fri_sleep_hours = jsonData.fri_sleep_hours; // Accessing the 'fri_sleep_hours' property
    var sat_sleep_hours = jsonData.sat_sleep_hours; // Accessing the 'sat_sleep_hours' property
    var sun_sleep_hours = jsonData.sun_sleep_hours; // Accessing the 'sun_sleep_hours' property
    var average_bedtime = jsonData.average_bedtime; // Accessing the 'average_bedtime' property
    var average_waketime = jsonData.average_waketime; // Accessing the 'average_waketime' property
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
    
    // Update text elements
    document.getElementById('username').textContent = username;
    document.getElementById('username2').textContent = username;
    document.getElementById('username3').textContent = username;
    
    const hours = Math.floor(average_sleep_hours);
    const minutesDecimal = (average_sleep_hours - hours) * 60;
    const minutes = Math.round(minutesDecimal);
    const formattedTime = `${hours}시간 ${minutes}분`;
    
    document.getElementById('average_sleep_hours').textContent = formattedTime;
    document.getElementById('average_bedtime').textContent = convertTimeTo12HourFormat(average_bedtime);
    document.getElementById('average_waketime').textContent = convertTimeTo12HourFormat(average_waketime);
    document.getElementById('sleep_pattern').textContent = `${sleep_pattern}%`;

    // Update #sleep_rate color and text
    const sleepRate = document.getElementById('sleep_rate');
    const sleepRateText = document.getElementById('sleep_rate_text');
    if (average_sleep_hours > 7) {
        sleepRate.style.color = '#649CFF';
        sleepRate.textContent = 'GOOD';
        sleepRateText.textContent = '아주 잘 하고 있어요!';
    } else if (average_sleep_hours >= 6) {
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
    switch (emotion_input) {
        case 'relaxed':
            emotionTitle.innerText = '편안'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/relaxed.png';
            emotionText.innerText = '편안한 수면 상태는 몸과 마음이 균형을 이루고 자연스럽게 수면에 빠져들 수 있는 상태를 의미합니다. 이것은 정기적이고 깊은 수면 사이클을 유지하며, 생체 리듬을 조절하고 회복 기능을 활성화시키는 데 중요합니다. 편안한 수면은 신체와 정신적 건강에 긍정적인 영향을 미치며, 일상생활에서의 기능과 질적인 삶을 향상시킵니다. 이렇게 편안한 감정은 좋은 신호예요!';
            break;
        case 'tired':
            emotionTitle.innerText = '피곤'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/tired.png';
            emotionText.innerText = '만성피로에 영향을 주는 요인들은 다양하지만 그중 가장 중요한 요소는 바로 수면입니다. 우리의 몸은 우리가 자는 동안 기억을 저장하고 몸의 에너지 레벨을 조절해요. 좋은 잠을 자고 나면 우리는 보통 상쾌하게 기운을 차리게 되죠. 한 연구에서 평일과 주말에 같은 시간 잠에 든 청소년의 피로감이 적고 잠에 드는 게 더 쉬웠다는 결과가 나왔어요. 피곤함과 수면 부족은 악순환의 시작입니다. 좋은 잠을 위해 낮에 신체적 활동을 해보는 건 어떨까요? 당장 운동이 어렵다면 매일 10분씩 산책하시는 걸 추천드려요!';
            break;
        case 'stressed':
            emotionTitle.innerText = '스트레스'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/stressed.png';
            emotionText.innerText = '일반적인 스트레스는 잠을 늘리는 경향이 나타난다고 합니다. 그리고 잠을 많이 자는 사람들이 그렇지 않은 사람들에 비해 단명하는 경향이 나타납니다. 잠을 자는 게 스트레스 해소에 도움이 될까 궁금하신가요? 최근 스위스 취리히 대학 연구진의 연구에 따르면 잠을 자는 게 정서적 충격을 줄이는데 도움이 될 수 있다고 합니다. 좋은 잠을 통해 스트레스를 줄이고 정서적 안정감을 함께 찾아봐요!';
            break;
        case 'anxious':
            emotionTitle.innerText = '불안'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/anxious.png';
            emotionText.innerText = '불안감을 지나치게 느끼게 되면 불면증이 생기는 경우도 있습니다. 지나친 걱정과 불안으로 잠을 쉽게 이루지 못하거나, 잠을 이루더라도 깊게 잠들지 못해 다음날 일상 생활에 영향을 받게 됩니다. 캐나다 토론토대학 연구팀은 행동요법을 통한 불면증 치료를 병행했을 때, 환자의 87%가 우울증에서 벗어나고 불면증 증세가 완화되면서 곧바로 우울증과 불안증 증세도 약해진다고 발표하였습니다. 오늘부터 좋은 잠으로 불안을 이기고 더 활기찬 내일을 살아볼까요?';
            break;
        case 'excited':
            emotionTitle.innerText = '각성'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/excited.png';
            emotionText.innerText = '코르티솔이라는 각성 호르몬은 신체 교감 신경을 활성화시켜 몸을 긴장상태로 만들고 잠들기 어렵게 합니다. 머릿속을 ‘잠을 자야한다’는 생각으로 가득 채운 채 일찍부터 누워 있다고 잠이 오는 것은 아닙니다. 이런 강박감으로 스트레스를 받아 오히려 각성 호르몬인 코르티솔이 분비됩니다. 그래서 잠이 몰려와서 잠들 수 있을 때 잠자리에 드는 것이 바람직합니다.';
            break;
        case 'depressed':
            emotionTitle.innerText = '우울'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/depressed.png';
            emotionText.innerText = '우울함과 수면은 끈끈한 상관관계를 보여주고 있어요. 낮은 수면의 질은 우울증을 낳을 수 있고 우울증은 수면의 질을 저하시킬 수 있어요. 이러한 복잡한 관계 때문에 어떤 것이 원인이 되는지는 닭과 알의 논의가 되곤 해요. 우울함을 느끼신다면 실제 수면에 부정적 영향을 끼칠 확률이 높아요. 우울함을 극복하는 방법 중 하나는 운동입니다! 바로 운동을 시작하시기 어려우시다면 하루 10분 걷기로 시작해 보시는 건 어떨까요?';
            break;
        case 'sad':
            emotionTitle.innerText = '슬픔'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/sad.png';
            emotionText.innerText = '슬플 때 잠을 자면 부정적인 감정이 완화된다는 연구 결과가 나왔습니다.  잠자는 동안 시간이 흘러서 감정이 완화되는 것이 아니라 잠이 직접적으로 화나 슬픔의 감정을 희미하게 하는 효과가 있다는 분석입니다. 스위스 베른대 의생명연구학부와 이탈리아 기술 연구원 공동연구팀은 잠을 자는 동안 뇌가 긍정적인 감정과 부정적인 감정을 분류해 긍정적인 감정은 저장하고 부정적인 감정은 약화한다는 연구결과를 발표했습니다. 오늘부터 좋은 잠으로 슬픔을 가라앉히고 더 활기찬 내일을 살아볼까요?';
            break;
        case 'nervous':
            emotionTitle.innerText = '긴장'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/nervous.png';
            emotionText.innerText = '긴장성 두통이나 편두통이 불면증으로 이어지기도 합니다. 심리적으로 긴장이 될 때 근육이 같이 경직되고, 반대로 근육긴장이 오래되면 심리적 긴장감을 주기도 합니다. 마음의 긴장은 짧은 10분 명상으로, 몸의 긴장은 가벼운 스트레칭으로한 번 해소해보면 어떨까요? ';
            break;
        default:
            emotionTitle.innerText = '데이터 없음';
            emotionImg.src = '/sleepreport/static/icon/none.png'; // Reset image
            emotionText.innerText = '충분한 데이터를 입력해 주시지 않았어요.'; // Reset text
    }

    const activityTitle = document.getElementById('activity-title');
    const activityImg = document.getElementById('activity-img');
    const activityText = document.getElementById('activity-text');

    // Check if the elements exist before attempting to modify them
    if (activityTitle && activityImg && activityText) {

        switch (activityInput) {
            case 'phone':
                activityTitle.textContent = '핸드폰';
                activityImg.src = '/sleepreport/static/icon/phone.png';
                activityText.textContent = '스마트폰에서 나오는 청색광(블루라이트)가 불면증을 유발할 수 있습니다. 밤에는 뇌에서 수면을 유도하는 호르몬 멜라토닌이 분비되는데, 스마트폰의 청색광을 오래 쐬면 멜라토닌의 생성과 분비가 감소하기 때문입니다. 취침 2시간 전부터 스마트폰의 전자기기 사용을 되도록 자제해야 하고 어쩔 수 없이 사용해야 한다면 스마트폰 청색광을 막아주는 어플이나 보호필름 등을 사용해 빛 노출을 최소화해야 합니다.';
                break;
            case 'nicotine':
                activityTitle.textContent = '니코틴';
                activityImg.src = '/sleepreport/static/icon/nicotine.png';
                activityText.textContent = '흡연자는 비흡연자 대비 잠에 드는 시간이 다소 길다는 연구 결과가 있습니다. 니코틴은 중추 신경계를 자극하고 신체를 깨어 있게 유지하는 작용이 있습니다. 특히, 니코틴이 주로 들어있는 담배나 전자 담배를 흡연하면 니코틴의 자극 효과로 인해 수면에 들기 어려워질 수 있습니다. 또한 니코틴은 수면 중 깨어나거나 수면의 질을 저하시킬 수 있는 약간의 간섭을 일으킬 수 있습니다. 내일은 오늘보다 흡연의 빈도를 낮춰보는 건 어떨까요?';
                break;
            case 'alcohol':
                activityTitle.textContent = '알코올';
                activityImg.src = '/sleepreport/static/icon/alcohol.png';
                activityText.textContent = '알코올은 중추 신경계를 억제하는 효과가 있어, 초기에는 졸음을 유발하고 잠이 들기 쉽게 만들 수 있지만 알코올이 체내에서 대사되면, 신체가 깨어나고 수면의 깊은 단계로 진입하는 데 어려움을 겪을 수 있습니다. 또한 알코올은 렘 수면 (Rapid Eye Movement, REM) 단계를 감소시키며 수면 중에 깨어나는 빈도를 높일 수 있습니다. REM 수면은 꿈을 꾸고 정신적으로 휴식을 취하는 데 중요한 단계입니다.';
                break;
            case 'late meal':
                activityTitle.textContent = '야식';
                activityImg.src = '/sleepreport/static/icon/latemeal.png';
                activityText.textContent = '과도한 양의 음식을 먹거나 무거운 음식을 섭취하면 수면 중에 소화 과정이 수면의 품질을 저하시킬 수 있습니다. 이로 인해 자주 깨고 수면이 중단될 수 있습니다. 또한 수면 시간에 레퐁 (Reflux) 즉, 위산이 역류하는 현상이 발생할 수 있으며, 이는 향후 수면에서 불편함을 유발할 수 있습니다. 자기 전 야식은 피해주세요!';
                break;
            case 'tv':
                activityTitle.textContent = 'TV';
                activityImg.src = '/sleepreport/static/icon/tv.png';
                activityText.textContent = '티비에서 나오는 청색광(블루라이트)가 불면증을 유발합니다. 밤에는 뇌에서 수면을 유도하는 호르몬 멜라토닌이 분비되는데, 스마트폰의 청색광을 오래 쐬면 멜라토닌의 생성과 분비가 감소하기 때문입니다. 취침 2시간 전부터 티비와 같은 전자기기 사용을 되도록 자제해야 하고 어쩔 수 없이 사용해야 한다면 빛의 밝기를 줄이거나 보호필름 등을 사용해 빛 노출을 최소화해야 합니다.';
                break;
            case 'coffee':
                activityTitle.textContent = '커피';
                activityImg.src = '/sleepreport/static/icon/coffee.png';
                activityText.textContent = '커피에 든 카페인은 우리 몸을 각성시키게 합니다. 카페인은 중추신경자극제로 신경전달물인 글루타민산, 도파민 등을 활성 시키게 되는데, 심장박동을 향진시키고 뇌로 가는 혈관 역시 수축시킵니다. 이러한 현상 전반은 결국 잠을 들기 어렵게 만들거나 잠드는 시간을 길게 만들죠. 잠들기 최소 3시간 전에는 커피를 절 때 삼가시고 하루에 2잔 정도만 마시길 권유 드려요!';
                break;
            case 'study':
                activityTitle.textContent = '공부';
                activityImg.src = '/sleepreport/static/icon/study.png';
                activityText.textContent = '좋은 잠은 높은 시험 점수와 직결된다는 사실, 알고 계셨나요? 실제 미국에서 진행한 한 연구에서 잠이 시험 점수의 25%를 차지한다는 결과를 발표했어요. 이 연구에서는 놀라운 사실을 하나를 더 발견했는데, 여성이 남성보다 비교적 높은 수면의 질과 규칙성을 보였어요. 따라서 여성은 시험에서 더 좋은 성적을 낼 수 있는 장점을 갖고 있는 거나 다름이 없다고 해요. 또한 시험 직전에 깊은 수면을 취한 학생은 그렇지 못한 학생보다 평균 9점 정도 더 높았다고 해요. 좋은 잠으로 잃어버린 9점을 찾으세요!';
                break;
            case 'shower':
                activityTitle.textContent = '샤워';
                activityImg.src = '/sleepreport/static/icon/shower.png';
                activityText.textContent = '샤워는 몸의 온도를 조절하는 데 도움을 줄 수 있습니다. 따뜻한 샤워를 즐기면 몸의 온도가 상승하며, 이후 몸이 식으면 자연적으로 온도를 낮추려고 합니다. 이러한 온도 조절은 수면을 취할 때 몸이 편안한 상태로 들어가도록 도와줍니다. 자기 전 샤워는 너무 좋은 선택이에요!';
                break;
            case 'read':
                activityTitle.textContent = '독서';
                activityImg.src = '/sleepreport/static/icon/read.png';
                activityText.textContent = '독서는 긴장을 풀어주고 일상 생활의 스트레스를 감소시키는 데 도움을 줄 수 있습니다. 스트레스가 수면에 부정적인 영향을 미칠 수 있는데, 독서를 통해 스트레스를 해소하면 수면에 들기 쉬워질 수 있습니다. 자기 전 독서는 너무 좋은 선택이에요!';
                break;
            case 'workout':
                activityTitle.textContent = '운동';
                activityImg.src = '/sleepreport/static/icon/workout.png';
                activityText.textContent = '취침 전 근육 운동을 하게 되면 성장호르몬과 아드레날린이 분비돼 혈중 지방산이 늘어납니다. 그러면 쉽게 잠들지 못하고 수면 직후에 나와야 하는 성장호르몬이 분비되지 않을 수도 있습니다. 유산소운동도 마찬가지입니다. 성장호르몬에 의한 비장 분해는 오래 지속되는 특징이 있기 때문에 슬로우 트레이닝을 포함한 모든 운동은 되도록이면 잠자기 6시간 전에 끝내는 게 좋답니다!';
                break;
            case 'workout':
                activityTitle.textContent = '낮잠';
                activityImg.src = '/sleepreport/static/icon/workout.png';
                activityText.textContent = '짧은 낮잠은 일시적인 피로를 해소하고 집중력을 회복하는 데 도움을 줄 수 있습니다. 또한 창의성을 증가시키고 스트레스를 감소시키는 데도 도움을 줄 수 있습니다. 하지만 너무 길거나 늦은 낮잠은 오히려 밤잠에 악영향을 미칠 수 있습니다. 그래서 나에게 딱 맞는 적절한 시간과 길이 만큼 낮잠을 자는 것이 중요합니다!';
                break;
            case 'stretching':
                activityTitle.textContent = '스트레칭';
                activityImg.src = '/sleepreport/static/icon/stretching.png';
                activityText.textContent = '스트레칭은 근육을 이완시키고 긴장을 해소하는 데 도움을 줄 수 있습니다. 특히 일일 생활에서 긴장을 느끼거나 스트레스를 겪은 후에 스트레칭을 하면, 이를 풀어주고 몸을 편안하게 만들어 수면에 도움을 줄 수 있습니다. 자기 전 스트레칭은 너무 좋은 선택이에요!';
                break;
            default:
                // Reset elements when no match is found
                activityTitle.textContent = '데이터 없음';
                activityImg.src = '/sleepreport/static/icon/none.png';
                activityText.textContent = '충분한 데이터를 입력해 주시지 않았어요.';
        }
    }
    
const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Initialize a variable to store the previous day's data
let prevDayData = {};

for (let i = 0; i < daysOfWeek.length; i++) {
    const currentDay = daysOfWeek[i];
    const nextDay = daysOfWeek[(i + 1) % daysOfWeek.length]; // Wrap around to Monday on Sunday

    // Construct variable names for current day's sleep hours and next day's wake time
    const sleepHoursVarName = `${currentDay}_sleep_hours`;
    const waketimeVarName = `${nextDay}_waketime`;

    // Get the values from the variables with a default of 0 for sleep hours and '00:00' for waketime
    let sleepHours = parseFloat(eval(sleepHoursVarName)) || 0;
    const waketime = eval(waketimeVarName) || '00:00';

    // Additional checks to set sleepHours to 0
    if (isNaN(sleepHours) || (waketime >= '13:00' && waketime < '20:00') || waketime < '01:00' || sleepHours < 1) {
        sleepHours = 0;
    }

    // Process sleep hours and waketime
    if (sleepHours > 0) {
        // Process sleep hours
        const sleepHoursDiv = document.getElementById(`${currentDay}_sleep_hours`);
        if (sleepHoursDiv) {
            sleepHoursDiv.style.height = `${sleepHours * 18}px`;
        }

        // Process waketime
        const hours = 12 - parseInt(waketime.split(':')[0]);
        const marginValue = 18 * hours + 4; // Calculate margin based on hours
        
        // Manipulate the correct waketime element
        const waketimeDiv = document.getElementById(`${currentDay}_waketime`);
        if (waketimeDiv) {
            waketimeDiv.style.marginTop = `${marginValue}px`;
            waketimeDiv.style.height = `${sleepHours * 18}px`; // Calculate height based on sleep hours
        }
    }

    // Store the current day's data for the next iteration
    prevDayData = { waketime };
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

    function generateAdvice(average_sleep_hours, average_bedtime, sleepPattern, activityInput_2) {
        // Convert average_bedtime to a Date object
        const bedtimeDate = convertTimeTo24HourFormat(average_bedtime);

        if (bedtimeDate && bedtimeDate > new Date(2023, 8, 25, 0, 0, 0) && bedtimeDate < new Date(2023, 8, 25, 7, 0, 0)) {
            return ["취침 시간이 너무 늦어요.", "과학적으로 잠에 들기 가장 좋은 시간은 10시입니다. 우리 몸의 자연적 일주기 리듬 때문인데, 일주기 리듬이란 몸이 해가 뜨고 지는 것을 따라 하는 현상을 뜻합니다. 보통 10시부터 2시 사이에 성장호르몬이 분비 되는데 성장호르몬은 아이들에게만 필요한 게 아닙니다. 피부 대사를 활성화해 미인 호르몬이라는 별명도 있는 성장호르몬은 지방 분해를 도와 다이어트 효과도 주고 낮에 들어온 단기 기억을 장기 기억으로 저장시키기도 해서 공부 호르몬이라고도 불립니다.", "취침 시간을 조금 앞당겨 보는 건 어떨까요?"];
        } else if (sleepPattern < 40) {
            return ["수면 패턴이 불규칙적이에요.", "규칙적인 수면 시간은 비만, 고혈압, 당뇨, 뇌졸중과 같은 질병을 예방할 수 있는 직접적 영향을 줍니다. 30분 이내로 꾸준히 잠들면 90분 이내로 잠드는 사람들 보다 심장 질환을 얻을 확률이 2배가량 줄었다고 해요. 1시간 차이가 생길 때마다 대사 증후군이 생길 확률은 27% 하락했어요.", "취침 시간과 기상 시간을 정해서 규칙적인 수면패턴을 연습해보는 건 어떨까요?"];
        } else if (average_sleep_hours < 6) {
            return ["평균 수면 시간이 너무 짧아요.", "평균 수면 시간이 6시간 이하로 내려가면 짧은 수면으로 인해 질병이 생길 확률은 25% 정도 돼요. 그 외에도 극도의 피로도를 동반한 하품, 짜증, 피곤 등이 동반된다고 해요. 실제 수면 시간이 7시간 이하의 경우 기분이 부정적으로 영향받아 충동 행동, 불안감, 우울감 등이 더 높아질 수 있다고 하네요.", "수면 시간을 1시간 더 늘려보는 건 어떨까요?"];
        } else if (activityInput === 'alcohol') {
            return ["음주가 잦아요.", "술은 좋은 잠을 주는 것처럼 사람을 속이곤 합니다. 실제 술은 수면에 정말 나쁜 영향을 끼칩니다. 실제 술을 마시고 바로 자게 되면 몽유병, 수면 장애, 기억력 저하 등이 유발됩니다. 그 이유는 우리 몸에서 찾을 수 있는데, 수면 중 알코올이 분해되는 과정에서 각성을 일으켜 깊은 잠을 방해하기 때문입니다. 호흡중추 기능도 떨어뜨려 수면 무호흡증을 유발할 수도 있고, 많은 양의 술을 마셨다면 이뇨작용을 촉진해 탈수 증세까지 나타날 수 있습니다.", "그러니 잦은 음주는 피해주세요!"];
        } else if (activityInput === 'latemeal') {
            return ["야식을 너무 자주 드세요.", "야식을 먹게 되면 체내 호르몬 균형이 깨집니다. 수면 시간에는 숙면 호르몬이 분비되는 등 온몸이 컨디션 회복에 집중하지만 밤에 음식을 먹으면 음식 소화하기 위해 위장에 혈액이 쏠리면서 뇌와 근육 등 다른 부위의 정상적인 신진대사가 방해받습니다. 이로 인해 숙면 호르몬인 멜라토닌이 분비되지 않아 잠을 얕게 자게 되고, 누운 자세에서 위산 역류가 촉진되며 피로감이 누적됩니다.", "야식을 피하고 취침하기 3~4전에 식사를 끝내는 게 어떨까요?"];
        } else if (activityInput === 'coffee') {
            return ["커피를 너무 많이 마셔요.", "커피, 차, 탄산음료 등 카페인이 함유된 음료는 전 세계에서 가장 인기 있는 음료 중 하나입니다. 일부 사람들은 카페인으로 인한 에너지 충격을 이용해 주간 졸음을 극복하려는 유혹을 받기도 하지만, 이러한 방법은 지속 가능하지 않으며 장기적인 수면 부족을 유발할 수 있습니다. 이를 방지하려면 카페인 섭취량을 주시하고 카페인이 잠드는 데 방해가 될 수 있는 늦은 시간에는 카페인 섭취를 피하세요.", "오늘은 오후 2시 이후로 커피를 마시지 않는 건 어떨까요?"];
        } else {
            return ["규칙적인 활동 시간이 필요해요.", "누워 있거나 활동량이 감소할수록 낮잠을 잘 확률이 높고, 수면주기가 깨질 수 있어요. 사람은 16시간의 지속적 각성상태의 활동 시간이 유지된 뒤에야 비로소 8시간의 꿀잠을 터트릴 수 있습니다. 아침에 햇빛을 보는 것부터 시작해 하루 일과 동안에는 충분히 활동하는 것이 좋겠습니다. 혹시 암막 커튼을 사용하고 계시다면 주목해 주세요!", "암막 커튼은 아침 햇빛을 충분히 받지 못하게 하기 때문에 추천하지 않아요."];
        }
    }

    // Generate advice
    const advice = generateAdvice(average_sleep_hours, average_bedtime, sleep_pattern, activityInput);

    // Set the advice text
    document.getElementById('advice').textContent = advice[0];
    document.getElementById('advice_text').textContent = advice[1];
    document.getElementById('advice_text_2').textContent = advice[2];

}
