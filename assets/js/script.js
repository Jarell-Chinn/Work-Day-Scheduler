// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDayEl = $("#currentDay");

function displayTime() {
  var today = dayjs().format("MM" + "-" + "DD" + "-" + "YYYY ");
  currentDayEl.text(today);
}

function dueCheck() {
  // TA suggested using a for loop using the ID's however they all have the class of time block so maybe this will be easier using the each method
  $(".time-block").each(function () {
    eventEl = $(this);
    // use if statment to compare current time to the time block
    // if the hour is less than the current time block then apply past
    // else if the current hour is equal to the time block then apply present
    // else the current hour is greater than time block apply future
    var eventHour = parseInt(eventEl.attr("id").split("-")[1]);
    // has to be captial H to use 24 hour time
    var currentHour = parseInt(dayjs().format("H"));
    // compare the hours and add classes and remove classes to update
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

$(".saveBtn").on("click", function () {
  console.log(this);
  var hourBlock = $(this).parent().attr("id");
  var description = $(this).siblings(".description").val();

  // key names needs to match the key names for getItem localStorage
  //setItem for localStorage to save the input to the corresponding hour by using keyword 'this'
  localStorage.setItem(hourBlock, description);
});

function loadActivites() {
  $(".time-block").each(function () {
    var hourBlock = $(this).attr("id");
    var description = localStorage.getItem(hourBlock);
    if (description) {
      $(this).find(".description").val(description);
    }
  });
}

// create var for dayjs to get day and time
// $("currentDay").text(dayjsvar)
displayTime();
setInterval(displayTime, 1000);
setInterval(dueCheck, 1000);
loadActivites();
