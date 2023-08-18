import React from 'react';

function About() {
  return (
    <div>
      <header>
        <h1>About Makeup Haven</h1>
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
          <h2>Our Story</h2>
          <p>Makeup Haven was founded with a passion for helping people express their inner beauty through makeup.</p>
          <p>Since our inception, we've been dedicated to providing top-notch makeup products that inspire creativity and confidence.</p>
        </section>
        <section>
          <h2>Our Mission</h2>
          <p>Our mission is to empower individuals to experiment with makeup and enhance their natural features.</p>
          <p>We aim to offer a diverse range of products that cater to different skin tones, preferences, and styles.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Makeup Haven. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
