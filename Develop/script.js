$(document).ready(function() {
    //display date
    var currentDate = moment().format('MMMM Do YYYY, h:mm');
    $("#currentDay").text(currentDate)
    
    var row = ""
    //loop to display 9am-9pm
    for (var i = 0; i <= 9; i++) {
        //create row elements within the loop
        row = $(`<div class="row">`)
        var hour = i + 9
        col1 = $(`<div class ="col-lg-2 hour">${hour}</div>`)
        col2 = $(`<div class ="col-lg-8 inputcontent"><input data-input="${hour}" id="inputText${hour}" class="form-control inputText" type="text" name="userInput"></div>`)
        col3 = $(`<div class ="col-lg-2"><button data-id="${hour}" id="savePlanner" class="btn btn-success btn-block"><i class="fas fa-save"></i> Save</button></div>`)
        row.append(col1)
        row.append(col2)
        row.append(col3)
        $("#display-planner").append(row)
    }
    $("button.btn.btn-success").click(function(e){
        var id = $(this).data("id")
        var inputText = $(this).parent().siblings().find("input").val()
        localStorage.setItem(id,inputText)
        })

        //convert AM to Pm 
        /*function displayAmPm(hour){
            var amPm=""
            if(hour<=12){
                amPm= "AM"
            }else{
                amPm="PM"
    }
        hour = hour % 12
        hour = hour ? hour : 12
        return hour + " " + b
  }*/
})
//update the color