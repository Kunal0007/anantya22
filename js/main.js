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

  event.prizes.map((e) => {
    $("#eprizes-value").append(`<li>Rs. ${e}</li>`);
  });

  event.eventHeads.map((e) => {
    $("#ecoordinators").append(`<li>${e.name} : ${e.phoneNumber}</li>`);
  });

  event.rules.map((e) => {
    $("#erules-value").append(`<li>${e}</li>`);
  });
};

loadEvent();
