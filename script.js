var DateTime = luxon.DateTime;
var now = DateTime.local();
var currentHour = now.hour;
console.log(currentHour);
var hours = [
  {
    hour: "8am",
    numHour: "8",
  },

  { hour: "9am", numHour: "9" },

  { hour: "10am", numHour: "10" },

  { hour: "11am", numHour: "11" },

  { hour: "12pm", numHour: "12" },

  { hour: "1pm", numHour: "13" },

  { hour: "2pm", numHour: "14" },

  { hour: "3pm", numHour: "15" },

  { hour: "4pm", numHour: "16" },

  { hour: "5pm", numHour: "17" },
];
//use jQuery append and for loop to append it to a container.
//type something in the textarea
//then press save and localstorage will allow the text to be saved

var timeBlocks = {
  8: "",
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: "",
  15: "",
  16: "",
  17: "",
};
console.log(timeBlocks[12]);

//if the user does not have the local storage, then we need to create the local Storage, and then save that to the local storage.
//if they do have localstorage timeblocks, then ignore above.

//3 steps of local storage is read up-to-date data, change the data, and save it

function setDate() {
  $("#currentDay").text(
    DateTime.local().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)
  );
}
setDate();
//runs the setDate function every second so the second can be changing without an reloading the screen
var intervalID = window.setInterval(setDate, 1 * 1000);

for (i = 9; i < 18; i++) {
  var status = "#time" + i;
  console.log(status);
  if (i > currentHour) {
    $(status).css("background-color", "grey");
  } else if (i === currentHour) {
    $(status).css("background-color", "red");
  } else {
    $(status).css("background-color", "green");
  }
}
