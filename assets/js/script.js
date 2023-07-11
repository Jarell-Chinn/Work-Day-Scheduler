// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDayEl = $("#currentDay");

function displayTime() {
  var today = dayjs().format("dddd");
  currentDayEl.text(today);
}
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
function dueCheck() {
  // TA suggested using a for loop using the ID's however they all have the class of time block so maybe this will be easier using the each method
  $(".time-block").each(function () {
    eventEl = $(this);

    var eventHour = parseInt(eventEl.attr("id").split("-")[1]);
    // has to be captial H to use 24 hour time
    var currentHour = parseInt(dayjs().format("H"));
    // compare the hours and add classes
    if (eventHour < currentHour) {
      eventEl.addClass("past");
      eventEl.removeClass("present future");
    } else if (eventHour === currentHour) {
      eventEl.addClass("present");
      eventEl.removeClass("past future");
    } else {
      eventEl.addClass("future");
      eventEl.removeClass("present past");
    }
  });
}

// $(".saveBtn").on('click', function() {
//console.log(this);
//figure out what hour block we are in by using $(this)
// key names needs to match the key names for getItem localStorage
//setItem for localStorage to save the input to the corresponding hour by using keyword 'this'
//   })

// use if statment to compare current time to the time block
// if the hour is less than the current time block then apply future
// else if the current hour is equal to the time block then apply present
// else the current hour is greater than time block apply past

// remember have remove class as well as add

// getItem for local storage to pull previously stored content
// separate keys in local storage for each hour
// create for loop for hour 9-17 to check local storage
// check localstorage withing the loop
// if there is storage display the (value)
//    item in the text area
// use id selector for the text area

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.

// create var for dayjs to get day and time
// $("currentDay").text(dayjsvar)
displayTime();
setInterval(displayTime, 1000);
setInterval(dueCheck, 1000);
