function convertTimeToMinutes(timeString) {
    // Split the time string into hours, minutes, and seconds
    const [hours, minutes, seconds] = timeString.split(':').map(Number);

    // Calculate the total minutes since midnight
    const totalMinutes = hours * 60 + minutes;

    return totalMinutes;
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
    
    var url = '/sleepreport/report_0918.html?data='+encodeURIComponent(JSON.stringify(jsonData));
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
    var average_sleep_hour = jsonData.average_sleep_hours; // Accessing the 'average_sleep_hours' property
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
    var daily_factors = jsonData.daily_factors; // Accessing the 'daily_factors' property
    
    console.log(average_sleep_hour);
    
    // Update text elements
    document.getElementById('username').textContent = username;
    document.getElementById('username3').textContent = username;
    
    const hours = Math.floor(average_sleep_hour);
    const minutesDecimal = (average_sleep_hour - hours) * 60;
    const minutes = Math.round(minutesDecimal);
    const formattedTime = `${hours}시간 ${minutes}분`;
    

   document.getElementById('average_sleep_hours').textContent = formattedTime; document.getElementById('average_sleep_hours2').textContent = formattedTime;
    document.getElementById('average_bedtime').textContent = convertTimeTo12HourFormat(average_bedtime);
    document.getElementById('average_waketime').textContent = convertTimeTo12HourFormat(average_waketime);
    document.getElementById('sleep_pattern').textContent = `${sleep_pattern}%`;

    // Update #sleep_rate color and text
    const sleepRate = document.getElementById('sleep_rate');
    const sleepRateText = document.getElementById('sleep_rate_text');
    const sleepRateSum = document.getElementById('sleep_rate_sum');
    if (average_sleep_hour >= 7) {
        sleepRate.style.color = '#649CFF';
        sleepRate.textContent = 'GOOD';
        sleepRateText.textContent = '아주 잘 하고 있어요!';
        sleepRateSum.textContent = '충분한';
    } else if (average_sleep_hour >= 6) {
        sleepRate.style.color = 'white'; // Reset color
        sleepRate.textContent = 'OKAY'; // Reset text
        sleepRateText.textContent = '조금만 더 관리가 필요해요!'; 
        sleepRateSum.textContent = '적당한';
        // Reset text
    } else {
        sleepRate.style.color = '#FFA449';
        sleepRate.textContent = 'BAD';
        sleepRateText.textContent = '관리가 필요해요!';
        sleepRateSum.textContent = '부족한';
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
        case 'easy':
            emotionTitle.innerText = '편안'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/relaxed.png';
            emotionText.innerText = '명상과 깊은 숨 쉬기와 같은 이완 기술은 코르티솔과 같은 스트레스 호르몬을 감소시키고 혈압을 낮추며 이완을 촉진하는 데 도움이 됩니다. 이러한 연습은 수면에 들기에 유용한 차분한 정신 상태를 조성합니다. 규칙적인 이완 연습은 체내의 자연적인 수면-각성 주기를 개선하고 회복적인 수면을 촉진할 수 있습니다. 이렇게 편안한 감정은 좋은 신호예요!';
            break;
        case 'tired':
            emotionTitle.innerText = '피곤'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/tired.png';
            emotionText.innerText = '만성 피로는 수면에 부정적인 영향을 미칠 수 있습니다. 이를 해소하기 위해 짧은 낮잠 (20~30분)을 취하면 일시적인 피로를 덜 수 있습니다. 또한, 정기적인 신체 활동은 전반적인 에너지 수준과 수면의 질을 향상시킬 수 있습니다. 특히, 운동이 일찍 하루 중에 이루어질 경우 더욱 효과적입니다.';
            break;
        case 'stressed':
        case 'stress':
            emotionTitle.innerText = '스트레스'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/stressed.png';
            emotionText.innerText = '수면 전에 발생하는 스트레스는 수면에 불리할 수 있습니다. 명상, 점진적 근육 이완, 시각화와 같은 스트레스 감소 기술을 연습하면 스트레스 호르몬 수치를 낮출 수 있으며, 더 편안한 정신 상태를 조성하여 휴식에 적합한 밤 잠을 취할 수 있습니다.';
            break;
        case 'anxious':
            emotionTitle.innerText = '불안'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/anxious.png';
            emotionText.innerText = '불안은 수면 패턴을 방해할 수 있습니다. 불면증 관리에 효과적인 인지행동 치료 (CBT-I)는 불안 관련 수면 장애를 관리하는 데 효과적입니다. 규칙적인 수면 습관을 만들고 깊은 숨 쉬기나 시각화와 같은 이완 기술을 포함한 밤에 불안을 완화하면 수면의 질을 향상시킬 수 있습니다.';
            break;
        case 'excited':
        case 'awaken':
            emotionTitle.innerText = '각성'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/excited.png';
            emotionText.innerText = '수면 전에 강한 각성 상태는 잠에 드는 데 시간이 더 걸릴 수 있습니다. 책을 읽는 등 진정 활동에 참여하면 각성 수준을 낮출 수 있으며, 스트레스 호르몬인 코르티솔의 분비를 줄일 수 있습니다. 자기전에 자극적인 활동을 피하면 코르티솔 분비를 억제하는 데 도움이 됩니다.';
            break;
        case 'depressed':
        case 'depression':
            emotionTitle.innerText = '우울'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/depressed.png';
            emotionText.innerText = '우울증은 수면 장애와 관련이 깊습니다. 낮에 규칙적인 신체 활동을 유지하면 기분과 수면의 질을 개선할 수 있습니다. 운동은 쾌활한 기분을 끌어올리는 엔도르핀을 분비시키기 때문입니다. 또한, 규칙적인 수면 습관을 유지하고 수면 환경을 최적화하면 우울증 증상을 완화하고 수면 질을 향상시킬 수 있습니다.';
            break;
        case 'sad':
            emotionTitle.innerText = '슬픔'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/sad.png';
            emotionText.innerText = '슬픔은 수면 질에 부정적인 영향을 미칠 수 있습니다. 점진적 근육 이완 또는 긍정적인 경험에 대한 일지 작성과 같은 이완 기술을 연습하면 슬픔을 관리하고 수면 질을 개선할 수 있습니다. 수면 전에 감정을 표현하면 감정적인 고통을 줄이고 휴식을 취할 수 있습니다.';
            break;
        case 'nervous':
            emotionTitle.innerText = '긴장'; // Use innerText here
            emotionImg.src = '/sleepreport/static/icon/nervous.png';
            emotionText.innerText = '긴장 또는 긴장은 수면을 방해할 수 있습니다. 순한 스트레칭이나 요가와 같은 이완 운동을 실시하면 근육 긴장을 완화하고 수면 전에 안정된 상태를 조성할 수 있습니다. 또한, 수면을 위한 휴식적인 일정을 유지하면 불안 수준을 낮출 수 있으며 몸을 수면에 적합하게 준비할 수 있습니다.';
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
                activityText.textContent = '스마트폰 사용은 블루 라이트 노출로 인해 수면을 방해할 수 있습니다. 취침 1-2 시간 전에 스마트폰 사용을 중단하고, 침실에는 스마트폰을 가져가지 않도록 하세요. 대신, 수면 전에 안정적인 활동을 선택해 휴식을 취하세요.';
                break;
            case 'nicotine':
                activityTitle.textContent = '니코틴';
                activityImg.src = '/sleepreport/static/icon/nicotine.png';
                activityText.textContent = '담배와 니코틴은 수면에 부정적인 영향을 미칠 수 있으며, 특히 밤에 담배를 피우면 수면에 어려움을 겪을 수 있습니다. 담배를 피우는 경우, 취침 2-3 시간 전에 담배를 피우지 않도록 노력하세요.';
                break;
            case 'alcohol':
                activityTitle.textContent = '알코올';
                activityImg.src = '/sleepreport/static/icon/alcohol.png';
                activityText.textContent = '알코올은 수면의 질을 저하시키고 깨어 있는 상태를 유지할 수 있습니다. 가능하면 수면 전 알코올을 섭취하지 않고, 마실 경우 적당한 양을 유지하세요.';
                break;
            case 'late meal':
            case 'latefood':
                activityTitle.textContent = '야식';
                activityImg.src = '/sleepreport/static/icon/latemeal.png';
                activityText.textContent = '늦은 식사는 소화 과정을 방해하고 수면 중에 소화 불편을 초래할 수 있습니다. 수면 2-3 시간 전에 가벼운 식사를 하고, 자기 전에는 과식을 피하도록 노력하세요.';
                break;
            case 'tv':
                activityTitle.textContent = 'TV';
                activityImg.src = '/sleepreport/static/icon/tv.png';
                activityText.textContent = '텔레비전 시청은 블루 라이트를 방출하고 수면을 방해할 수 있습니다. 취침 1-2 시간 전에 텔레비전 시청을 중단하고, 대신 평온한 음악을 듣거나 책을 읽어 수면에 대비하세요.';
                break;
            case 'coffee':
                activityTitle.textContent = '커피';
                activityImg.src = '/sleepreport/static/icon/coffee.png';
                activityText.textContent = '"커피나 카페인 함유 음료는 수면을 방해할 수 있으므로, 취침 6시간 전에는 커피를 섭취하지 않는 것이 좋습니다. 카페인의 자극 효과로 인해 수면에 들기 어려워지므로 대신 차나 따뜻한 꿀 물을 선택해보세요.';
                break;
            case 'study':
                activityTitle.textContent = '공부';
                activityImg.src = '/sleepreport/static/icon/study.png';
                activityText.textContent = '수면 전 공부는 지양해야 합니다. 공부 중 뇌가 활발하게 활동하고, 스트레스가 높아지므로 수면에 불안을 초래할 수 있습니다. 대신, 공부 시간을 조정하여 충분한 휴식을 취하고 수면에 대한 긍정적인 기대를 가질 수 있도록 하세요.';
                break;
            case 'shower':
                activityTitle.textContent = '샤워';
                activityImg.src = '/sleepreport/static/icon/shower.png';
                activityText.textContent = '따뜻한 샤워를 즐기면 몸의 온도가 상승하고, 이후 몸이 식으면 자연스럽게 수면 상태로 들어가기 쉽습니다. 샤워는 몸의 긴장을 완화하고 수면에 도움을 줄 수 있는 효과적인 방법 중 하나입니다. 자기 전 샤워는 너무 좋은 선택이에요!';
                break;
            case 'read':
                activityTitle.textContent = '독서';
                activityImg.src = '/sleepreport/static/icon/read.png';
                activityText.textContent = '독서는 수면을 촉진할 수 있는 훌륭한 활동입니다. 그러나 밝은 조명 아래에서 긴 시간 동안 책을 읽는 대신, 부드러운 조명 아래에서 가볍게 읽는 것이 좋습니다. 흥미로운 책을 고르고 조용한 분위기에서 독서를 즐기세요. 이것은 마음을 진정시키고 수면에 대한 기대감을 높일 수 있습니다. 자기 전 독서는 너무 좋은 선택이에요!';
                break;
            case 'workout':
                activityTitle.textContent = '운동';
                activityImg.src = '/sleepreport/static/icon/workout.png';
                activityText.textContent = '운동은 좋은 수면을 촉진할 수 있지만, 취침 2-3 시간 전에 완료해야 합니다. 긴장감을 풀기 위한 경량 운동이나 요가 세션을 시도해보세요. 과도한 신체 활동은 수면을 방해할 수 있으므로 조절된 운동을 권장합니다.';
                break;
            case 'nap':
                activityTitle.textContent = '낮잠';
                activityImg.src = '/sleepreport/static/icon/workout.png';
                activityText.textContent = '짧은 낮잠은 일시적인 피로를 해소하고 집중력을 향상시키는 데 도움을 줄 수 있습니다. 하지만 긴 낮잠이나 늦은 시간의 낮잠은 밤에 수면을 방해할 수 있으므로 20-30분의 짧은 낮잠을 택하세요.';
                break;
            case 'stretching':
                activityTitle.textContent = '스트레칭';
                activityImg.src = '/sleepreport/static/icon/stretching.png';
                activityText.textContent = '자기 전에 스트레칭을 통해 근육 긴장을 완화하세요. 이를 통해 신체의 긴장을 해소하고 수면에 더 쉽게 빠져들 수 있습니다. 다리, 팔, 등과 같은 주요 근육군을 스트레칭하여 몸을 편안하게 만들어 보세요. 자기 전 스트레칭은 너무 좋은 선택이에요!';
                break;
            default:
                // Reset elements when no match is found
                activityTitle.textContent = '데이터 없음';
                activityImg.src = '/sleepreport/static/icon/none.png';
                activityText.textContent = '충분한 데이터를 입력해 주시지 않았어요.';
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
            "stretching": "스트레칭"
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

    function generateAdvice(average_sleep_hours, average_bedtime, sleepPattern, activityInput_2) {
        // Convert average_bedtime to a Date object
        const bedtimeDate = convertTimeTo24HourFormat(average_bedtime);
        
        if (activityInput === 'alcohol') {
            return ["음주가 잦아요.", "술은 좋은 잠을 주는 것처럼 사람을 속이곤 합니다. 실제 술은 수면에 정말 나쁜 영향을 끼칩니다. 실제 술을 마시고 바로 자게 되면 몽유병, 수면 장애, 기억력 저하 등이 유발됩니다. 그 이유는 우리 몸에서 찾을 수 있는데, 수면 중 알코올이 분해되는 과정에서 각성을 일으켜 깊은 잠을 방해하기 때문입니다. 호흡중추 기능도 떨어뜨려 수면 무호흡증을 유발할 수도 있고, 많은 양의 술을 마셨다면 이뇨작용을 촉진해 탈수 증세까지 나타날 수 있습니다.", "그러니 잦은 음주는 피해주세요!"];
        } else if (activityInput === 'latemeal') {
            return ["야식을 너무 자주 드세요.", "야식을 먹게 되면 체내 호르몬 균형이 깨집니다. 수면 시간에는 숙면 호르몬이 분비되는 등 온몸이 컨디션 회복에 집중하지만 밤에 음식을 먹으면 음식 소화하기 위해 위장에 혈액이 쏠리면서 뇌와 근육 등 다른 부위의 정상적인 신진대사가 방해받습니다. 이로 인해 숙면 호르몬인 멜라토닌이 분비되지 않아 잠을 얕게 자게 되고, 누운 자세에서 위산 역류가 촉진되며 피로감이 누적됩니다.", "야식을 피하고 취침하기 3~4전에 식사를 끝내는 게 어떨까요?"];
        } else if (activityInput === 'coffee') {
            return ["커피를 너무 많이 마셔요.", "커피, 차, 탄산음료 등 카페인이 함유된 음료는 전 세계에서 가장 인기 있는 음료 중 하나입니다. 일부 사람들은 카페인으로 인한 에너지 충격을 이용해 주간 졸음을 극복하려는 유혹을 받기도 하지만, 이러한 방법은 지속 가능하지 않으며 장기적인 수면 부족을 유발할 수 있습니다. 이를 방지하려면 카페인 섭취량을 주시하고 카페인이 잠드는 데 방해가 될 수 있는 늦은 시간에는 카페인 섭취를 피하세요.", "오늘은 오후 2시 이후로 커피를 마시지 않는 건 어떨까요?"];
        }         else if (sleepPattern < 50) {
            return ["수면 패턴이 불규칙적이에요.", "규칙적인 수면 시간은 비만, 고혈압, 당뇨, 뇌졸중과 같은 질병을 예방할 수 있는 직접적 영향을 줍니다. 30분 이내로 꾸준히 잠들면 90분 이내로 잠드는 사람들 보다 심장 질환을 얻을 확률이 2배가량 줄었다고 해요. 1시간 차이가 생길 때마다 대사 증후군이 생길 확률은 27% 하락했어요.", "취침 시간과 기상 시간을 정해서 규칙적인 수면패턴을 연습해보는 건 어떨까요?"];
        } else if (average_sleep_hours < 6) {
            return ["평균 수면 시간이 너무 짧아요.", "수면 시간은 우리 건강과 행복에 큰 영향을 미치는 중요한 요소 중 하나입니다. 충분한 수면은 몸과 정신을 회복시키며, 더 나은 생활을 즐길 수 있게 도와줍니다. 더불어, 충분한 수면을 유지하면 기억력과 집중력이 향상되고, 스트레스 관리가 쉬워지며 더 긍정적인 마음을 가질 수 있습니다. 일상 생활에서 충분한 수면을 확보하려면 꾸준한 수면 패턴과 개인에 맞는 최적의 수면 시간을 찾아봐야 합니다.", "수면 시간을 1시간 더 늘려보는 건 어떨까요?"];
        }
        else if (bedtimeDate && bedtimeDate >= new Date(2023, 8, 25, 23, 0, 0) && bedtimeDate < new Date(2023, 8, 25, 0, 0, 0)) {
            return ["취침 시간이 너무 늦어요.", "과학적으로 잠에 들기 가장 좋은 시간은 11시입니다. 우리 몸의 자연적 일주기 리듬 때문인데, 일주기 리듬이란 몸이 해가 뜨고 지는 것을 따라 하는 현상을 뜻합니다. 보통 11시부터 2시 사이에 성장호르몬이 분비 되는데 성장호르몬은 아이들에게만 필요한 게 아닙니다. 피부 대사를 활성화해 미인 호르몬이라는 별명도 있는 성장호르몬은 지방 분해를 도와 다이어트 효과도 주고 낮에 들어온 단기 기억을 장기 기억으로 저장시키기도 해서 공부 호르몬이라고도 불립니다.", "취침 시간을 조금 앞당겨 보는 건 어떨까요?"];
        }
        else {
            return ["자기 전 생각이 많으신가요?", "명상과 깊은 호흡은 수면 전 마음을 진정시키는 효과적인 스트레스 관리 방법입니다. 자기 전 어두운 공간에서 편안한 자세로 누워 숨을 깊게 들이마시고, 생각을 판단하지 않고 흘러가게 두며 내면의 평화를 살펴봅니다. 또한 코를 통해 느리고 깊게 숨을 들이마시고, 복부가 팽창하도록 한 뒤 입을 통해 안정적으로 내쉬는 것을 반복하여 스트레스를 줄이고 수면 품질을 향상시키킬 수 있습니다.", "이번 주는 미라클나잇 명상과 함께 수면 전에 호흡을 가다듬는 건 어떨까요?"];
        }
    }

    // Generate advice
    const advice = generateAdvice(average_sleep_hour, average_bedtime, sleep_pattern, activityInput);

    // Set the advice text
    document.getElementById('advice').textContent = advice[0];
    document.getElementById('advice_text').textContent = advice[1];
    document.getElementById('advice_text_2').textContent = advice[2];

}
