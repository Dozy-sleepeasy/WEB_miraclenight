function processCSV() {
    const fileInput = document.getElementById('csv-file-input');
    const file = fileInput.files[0];
    console.log(file);

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const contents = e.target.result;
            const lines = contents.split('\n');

            // Assuming the CSV columns are in a specific order
            const csvData = lines[1].split(',');

            // Populate form fields with CSV data
            document.getElementById('uid').value = csvData[0];
            document.getElementById('username-input').value = csvData[1];
            document.getElementById('average-sleep-hours-input').value = csvData[2];
            document.getElementById('average-bedtime-input').value = csvData[3];
            document.getElementById('average-waketime-input').value = csvData[4];
            document.getElementById('sleep-pattern-input').value = csvData[5];
            document.getElementById('emotion-input').value = csvData[6];
            document.getElementById('activity-input').value = csvData[7];
            document.getElementById('mon-sleep-hours-input').value = csvData[8];
            document.getElementById('tue-sleep-hours-input').value = csvData[9];
            document.getElementById('wed-sleep-hours-input').value = csvData[10];
            document.getElementById('thu-sleep-hours-input').value = csvData[11];
            document.getElementById('fri-sleep-hours-input').value = csvData[12];
            document.getElementById('sat-sleep-hours-input').value = csvData[13];
            document.getElementById('sun-sleep-hours-input').value = csvData[14];
            document.getElementById('mon-waketime-input').value = csvData[15];
            document.getElementById('tue-waketime-input').value = csvData[16];
            document.getElementById('wed-waketime-input').value = csvData[17];
            document.getElementById('thu-waketime-input').value = csvData[18];
            document.getElementById('fri-waketime-input').value = csvData[19];
            document.getElementById('sat-waketime-input').value = csvData[20];
            document.getElementById('sun-waketime-input').value = csvData[21];

            alert('CSV data loaded into form fields.');
        };

        reader.readAsText(file);
    } else {
        alert('Please select a CSV file.');
    }
}