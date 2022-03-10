const loadEvent = async () => {
  let res = await fetch(
    "https://raw.githubusercontent.com/palakg01/anantya22/master/events.json?token=GHSAT0AAAAAABKHQTROEQGX4XPXF7NO5NZMYRSYPTA"
  );
  let data = await res.json();
  var eName = window.location.href.split("#")[1].split("_").join(" ");

  let event = data.filter((el) => el.eventName == eName)[0];

  // poster
  $("#eventPosterImg").attr("src", event.poster);

  // event-name
  $("#event-name").text(event.eventName);

  // tagline
  $("#eTagline").text(event.tagLine);
  // console.log(event.tagLine);

  //cell
  $("#eCell").text(event.cellName);

  //description
  $("#eDescription").text(event.description);

  //efaculty-head
  event.facultyHead.map((e) => {
    $("#efaculty-head").append(`<li>${e}</li>`);
  });
  // .text(event.facultyHead);

  // efees
  $("#efees").text(`Rs. ${event.entryFees.cesa}`);
  //

  event.prizes.map((e) => {
    $("#eprizes-value").append(`<li>Rs. ${e}</li>`);
  });
  event.eventHeads.map((e) => {
    $("#ecoordinators").append(`<li>${e.name} : ${e.phoneNumber}</li>`);
  });
};

loadEvent();
