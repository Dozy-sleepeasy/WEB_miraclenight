function getNumber(){
    
    $.ajax({
        url: 'https://api.miraclenight-server.com/survey',
        type: 'GET',
        dataType: "json"
    }).then((data, textStatus, jqXHR) => {
        console.log(data);
    }).catch(error => {
        console.error('An error occurred:', error);
    });
    
}