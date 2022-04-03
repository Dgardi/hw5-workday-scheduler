
//****Populate current day and time using jQuery and using time syntax from moment.JS
$("#currentDay").text(moment().format("dddd MMM Do YYYY"));


//****Save the input from <text area> to local storage on("click")
$(".saveBtn").on("click", function(){
//This pulls the object it's in. Loops through all siblings in with the .words class and passes in array of element values to inputText.
var inputText = $(this).siblings(".description").val(); 
// This pulls the id attribute (hour) from the parent element and assigns to hour variable.
var hour = $(this).parent().attr("id");
// Save to local storage key (hour): value (inputText)
localStorage.setItem(hour, inputText);
})

//***Load Local Storage Data Back In .
// Keep in mind..  .text cannot be used on form inputs or scripts, need to use val here.
// There's probably a better way to loop through this 

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    console.log(`${key}: ${localStorage.getItem(key)}`);
}

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));  
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
// // alert(localStorage.getItem("hour9"));





// Work with tutor to see if we can just loop through this.
// for $("#hour9 .description","#hour10 .description","hour11. description","#hour12. description","#hour1  .description","hour2 .description","#hour3.words","#hour4.words","hour5.words").val(localStorage.getItem(""));

// console.log(localStorage);


//Keeps track of time and updates class for the time-blocks for CSS
function chronos(){


    //Figure out current hour in 24 hours
    var nowHour = moment().hour();

    //Go through each time block and for the id hourX, split at separator "hour" *[1] returns number.  Lets us compare to nowHour. 
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
       
    
    // Change classes based on past/future/present so CSS colors change. 
    // Maybe possibly use (moment).isBefore (moment).isAfter (moment).isSame

    // for moment("blockHour")isBefore("nowHour");
    //     $(this).addClass("past");
    //     $(this).removeClass("present");
    //     $(this).removeClass("future");
    // }   

    // else if moment("blockHour")isSame("nowHour");
    //     $(this).removeClass("past");
    //     $(this).addClass("present");
    //     $(this).removeClass("future");

    // }

    // else {
    
    //     $(this).removeClass("past");
    //     $(this).removeClass("present");
    //     $(this).addClass("future");
    // }

    if (blockHour < nowHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    }
    else if (blockHour === nowHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    }
    else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
    })

}
    chronos();

   
