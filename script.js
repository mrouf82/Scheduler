var DateTime = luxon.DateTime;
var now = DateTime.local();
var currentHour = now.hour;

//use jQuery append and for loop to append it to a container.
//type something in the textarea
//then press save and localstorage will allow the text to be saved

var timeBlocks = {
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

//checks to see the hour to set the correct color property
for (i = 9; i < 18; i++) {
  var status = "#time" + i;

  if (i > currentHour) {
    $(status).css("background-color", "grey");
  } else if (i === currentHour) {
    $(status).css("background-color", "red");
  } else {
    $(status).css("background-color", "green");
  }
}

//all of these code is to store and retrieve the inputted data
$("#btn9").click(function () {
  var text = $("#time9").val();
  timeBlocks[9] = text;
  localStorage.setItem(9, JSON.stringify(text));
});
var storedData = JSON.parse(window.localStorage.getItem(9));
$("#time9").val(storedData);

$("#btn10").click(function () {
  var text = $("#time10").val();
  timeBlocks[10] = text;
  localStorage.setItem(10, JSON.stringify(text));
});
var storedData = JSON.parse(window.localStorage.getItem(10));
$("#time10").val(storedData);

$("#btn11").click(function () {
  var text = $("#time11").val();
  timeBlocks[11] = text;
  localStorage.setItem(11, JSON.stringify(text));
});
var storedData = JSON.parse(window.localStorage.getItem(11));
$("#time11").val(storedData);

$("#btn12").click(function () {
  var text = $("#time12").val();
  timeBlocks[12] = text;
  localStorage.setItem(12, JSON.stringify(text));
});
var storedData = JSON.parse(window.localStorage.getItem(12));
$("#time12").val(storedData);

$("#btn13").click(function () {
  var text = $("#time13").val();
  timeBlocks[13] = text;
  localStorage.setItem(13, JSON.stringify(text));
});
var storedData = JSON.parse(window.localStorage.getItem(13));
$("#time13").val(storedData);

$("#btn14").click(function () {
  var text = $("#time14").val();
  timeBlocks[14] = text;
  localStorage.setItem(14, JSON.stringify(text));
});
var storedData = JSON.parse(window.localStorage.getItem(14));
$("#time14").val(storedData);

$("#btn15").click(function () {
  var text = $("#time15").val();
  timeBlocks[15] = text;
  localStorage.setItem(15, JSON.stringify(text));
});
var storedData = JSON.parse(window.localStorage.getItem(15));
$("#time15").val(storedData);

$("#btn16").click(function () {
  var text = $("#time16").val();
  timeBlocks[16] = text;
  localStorage.setItem(16, JSON.stringify(text));
});
var storedData = JSON.parse(window.localStorage.getItem(16));
$("#time16").val(storedData);

$("#btn17").click(function () {
  var text = $("#time17").val();
  timeBlocks[17] = text;
  localStorage.setItem(17, JSON.stringify(text));
});
var storedData = JSON.parse(window.localStorage.getItem(17));
$("#time17").val(storedData);
