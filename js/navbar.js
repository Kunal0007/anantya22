$(".navbar").html(`
<div class="container-fluid">

  <a href="/index.html">
    <img class="nav-logo" src="https://raw.githubusercontent.com/pccoeacm/data-store/main/Group%2041.svg" />
  </a>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon" ></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav" >
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
