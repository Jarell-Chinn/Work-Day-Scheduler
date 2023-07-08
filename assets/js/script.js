// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // $(".saveBtn").on('click', function() {
  //console.log(this);
  //figure out what hour block we are in by using $(this)
  // key names needs to match the key names for getItem localStorage
  //setItem for localStorage to save the input to the corresponding hour by using keyword 'this'
  //   })

  // First
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // Use jqeury.children to select children elements
  document.querySelectorAll(".time-block"); // returns an array of all time block names and can be used for the for loop {use the jquery version}

  // Use dayjs() to grab current time (just the hour)
  // for loop to go over all the time blocks
  // Inside the for loop select the time block
  for (i = 9; i < 18; i++) document.querySelector("#hour-" + i);
  // i is the current time block

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
});
