$(".navbar").html(`
<div class="container-fluid">
  <img class="nav-logo" src="Group 41.svg" href="/" />
  <button
    class="navbar-toggler border border-white"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse navbar-right" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active link-light" aria-current="page" href="#about">
          About
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link link-light " href="#events">
          Events
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link link-light" href="#">
          Calender
        </a>
      </li>
    </ul>
  </div>
</div>`);
