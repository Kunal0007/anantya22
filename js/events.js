const events = [
  {
    title: "Perplexo",
    img: "./assets/icon1.png",
    prize: "Rs. 5000",
  },
  {
    title: "It's Debatable",
    img: "./../assets/icon1/png",
    prize: "Rs. 5000",
  },
  {
    title: "Design & Develop",
    img: "./../assets/icon1/png",
    prize: "Rs. 5000",
  },
];

const container = document.querySelector(".events-container");

function returnCards(events) {
  return events.map(
    (event) => `
        <div class="card m-3" style="width:20rem">
        <div class="card-body">
              <div class="d-flex flex-row">
                <img src="${event.img}" alt="logo" style="width: 2rem; height: 2rem;"/>
                <h5 class="event-title">${event.title}</h5>
              </div>
              <div class="prizes m-2">
                <h4>
                  ${event.prize}
                </h4>
              </div>

              <div class="py-3 event-details">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              
              <button class="p-2"><a href="#" class="card-link">Card link</a></button>
              <button><a href="#" class="card-link">Card link</a></button>
        </div>
        </div>`
  );
}

container.innerHTML = returnCards(events);
