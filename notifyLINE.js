function sendFormViaLINE(url){

    let token = "xxxxxxxxxxxxxxxxxxxxxxxxxxx";
    let message = `Please submit the form to reserve a dindin restaurant for our Anniversary : ${url}`;
    
    var payload = {"message": message};
    var options = {
      "method": "post",
      "headers": {
        "Authorization": "Bearer " + token
      },
      "payload": payload
    };
    
    UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
  
  }
  
  function sendLineNotify(messages) {
  
    let token = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
    let message = messages;
    
    var payload = {"message": message};
    var options = {
      "method": "post",
      "headers": {
        "Authorization": "Bearer " + token
      },
      "payload": payload
    };
    
    UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
    
  }