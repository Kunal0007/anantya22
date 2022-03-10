const loadEvent = async () => {
  let res = await fetch(
    "https://raw.githubusercontent.com/palakg01/anantya22/master/events.json?token=GHSAT0AAAAAABKHQTROEQGX4XPXF7NO5NZMYRSYPTA"
  );
  let data = await res.json();
  // let eName = location
  var eName = window.location.href.split("#")[1].split("_").join(" ");

  let event = data.filter((el) => el.eventName == eName)[0];
  // console.log(event);
  $("#cell").text(event.cellName);
};

loadEvent();
