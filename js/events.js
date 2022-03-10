const routeChange = (e) => {
  location.href = "/events/#" + e.dataset.path;
};

const load = async () => {
  let res = await fetch(
    "https://raw.githubusercontent.com/palakg01/anantya22/master/events.json?token=GHSAT0AAAAAABKHQTROEQGX4XPXF7NO5NZMYRSYPTA"
  );
  let data = await res.json();

  $("#events-container").html("");

  data.forEach((event) => {
    $(".events-container").append(`
      <div class="card event-card m-3" style="width:23rem" data-path=${event.eventName
        .split(" ")
        .join("_")} onclick="routeChange(this)">
        <div class="card-body">
          <div class="d-flex align-items-center card-head">
            <img src="${event.icon}" alt="logo" class="event-card-icon"/>
            <h5 class="event-title">${event.eventName}</h5>
          </div>
          <div class="prizes m-2">
            <h4>
              ${event.cellName}
            </h4>
          </div>
          <div class="py-3 event-details">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    `);
  });
};

load();
