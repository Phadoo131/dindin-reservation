function formIntegration() {
    let ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName('Dindin_Reservation');
    let dataRange = sheet.getDataRange();
    let data = dataRange.getValues();
  
    //Confirmation
    let i;
    for (i = 1; i < data.length; i++){
      let restaurantName = data[i][1];
      let reservationTime = data[i][2];
  
      let dateAndTime = new Date(reservationTime);
      let hours = dateAndTime.getHours();
      let minutes = dateAndTime.getMinutes();
  
      minutes == '0'? minutes = '00' : minutes;
  
      //Validation only
      let validateSent = data[i][0];
      let validateTime = new Date(validateSent);
      let exactDateAndTime = validateTime.setHours(0, 0, 0, 0);
      let newDate = new Date().setHours(0, 0, 0, 0); 
      
      let finalTime;
      
      if (hours >= 12){
        finalTime = `reserved at ${hours}:${minutes} PM.`
      } else {
        finalTime = `reserved at ${hours}:${minutes} AM.`
      }
      
      let finalWords = `Please noted that your reservation for ${restaurantName} ${finalTime} has been successfully booked, enjoy your dindin <3`
  
      let checkSent = sheet.getRange(i + 1, 4);
      console.log(checkSent.getValue());
  
      if (exactDateAndTime == newDate && checkSent.getValue() == ''){
        console.log(finalWords);
        sendLineNotify(finalWords);
        checkSent.setValue('1');
      }
    }
  }