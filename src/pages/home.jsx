import React from 'react';

function Home() {
  return (
    <div>
      <header>
        <h1>Welcome to Makeup Haven</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/tutorials">Tutorials</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>Explore Our Products</h2>
          <p>Discover a wide range of high-quality makeup products.</p>
          <a href="/products">Shop Now</a>
        </section>
        <section>
          <h2>Latest Tutorials</h2>
          <p>Learn the latest makeup techniques from our experts.</p>
          <a href="/tutorials">Get Inspired</a>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Makeup Haven. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
