import React from "react";
import "./footer.css";

const footer = () => {
  return (
    
<div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Careers</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Items</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
    </ul>
    <p class="text-center text-muted">&copy; 2023 Company, Inc</p>
  </footer>
</div>

  );
}

export default footer;