<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-padding">
    <a class="navbar-brand" href="#">My Website</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </nav>

  <!-- slide -->
  <div
    id="carouselExampleSlidesOnly"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../../pic/taylor.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="../../pic/taylor.png" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="../../pic/taylor.png" class="d-block w-100" alt="..." />
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "home",
};
</script>
  
  <style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css");
.navbar-padding {
  padding: 10px;
}

.navbar-brand {
  font-size: 24px;
  font-weight: bold;
  padding: 10px;
  margin-right: 0px;
}

.navbar-nav .nav-link {
  font-size: 18px;
}

/* 响应式样式 */
@media (max-width: 768px) {
  .navbar-padding {
    padding: 5px; /* 响应式内边距，根据需要进行调整 */
  }
  .navbar-brand {
    font-size: 20px;
  }

  .navbar-nav .nav-link {
    font-size: 16px;
  }
}
</style>
  