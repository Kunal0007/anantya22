const loadEvent = async () => {
  let res = await fetch(
    "https://raw.githubusercontent.com/palakg01/anantya22/master/events.json?token=GHSAT0AAAAAABKHQTROEQGX4XPXF7NO5NZMYRSYPTA"
  );
  let data = await res.json();
  var eName = window.location.href.split("#")[1].split("_").join(" ");

  let event = data.filter((el) => el.eventName == eName)[0];

  $("#eventPosterImg").attr("src", event.poster);
  $("#event-name").text(event.eventName);
  $("#eTagline").text(event.tagLine);
  $("#eCell").text(event.cellName);
  $("#eDescription").text(event.description);
  $("#efees").text(`Rs. ${event.entryFees.nonCesa}`);

  event.facultyHead.map((e) => {
    $("#efaculty-head").append(`<li>${e}</li>`);
  });

  // .text(event.facultyHead);

  // efees
  $("#efees").text(`Rs.${event.entryFees.cesa}`);
  //


  event.prizes.map((e,index) => {
 if(index == 0){
   //This is for 2nd prize
  $("#eprizes-value1").append(`<li>₹ ${e}</li>`);
 }else if(index == 1){
   //This is for 1st prize
  $("#eprizes-value2").append(`<li>₹ ${e}</li>`);
 }else{
   //Else
  $("#eprizes-value3").append(`<li>₹ ${e}</li>`);
 } 
  });

  event.eventHeads.map((e) => {
    $("#ecoordinators").append(`<li>${e.name} : ${e.phoneNumber}</li>`);
  });

  event.rules.map((e) => {
    $("#erules-value").append(`<li>${e}</li>`);
  });
};

loadEvent();
