// rendering events on homepage as indi cards

const events = [
  {
    id: 1,
    title: "Perplexo",
    img: "./assets/icon1.png",
    prize: "Rs. 5000",
  },
  {
    id: 2,
    title: "It's Debatable",
    img: "./../assets/icon1.png",
    prize: "Rs. 5000",
    link: "/events/perplexo",
  },
  {
    id: 3,
    title: "Design & Develop",
    img: "./../assets/icon1.png",
    prize: "Rs. 5000",
    link: "/events/designanddevelop",
  },
  {
    id: 4,
    title: "Perplexo",
    img: "./assets/icon1.png",
    prize: "Rs. 5000",
    link: "/events/xyz",
  },
  {
    id: 5,
    title: "It's Debatable",
    img: "./../assets/icon1.png",
    prize: "Rs. 5000",
    link: "/events/abc",
  },
];

// load and display cards on main page

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
        <div class="card event-card m-3" style="width:23rem">
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
              
              <button class="event-card-button" data-path=${event.eventName
                .split(" ")
                .join("_")} onclick="routeChange(this)">See Details ></button>

              <button class="event-card-register">Register</button>
           
          </div>
        </div>`);
  });
};

load();
