import React from "react";
import myImage from "../Images/AyaanImg.jpg";
import "../CSS/Info.css";

export default function Info() {
  return (
    <div className="Info">
      <img src={myImage} alt="Ash Moreno" className="--info-image" />
      <h1>Ayaan Ahmed Ansari</h1>
      <h2>Frontend Developer</h2>
      <p>
        <a
          href="https://www.ayaanAa.dev"
          target="_blank"
          rel="noreferrer"
          className="--info-portfolio"
        >
          ayaanAa.dev
        </a>
      </p>
      <div className="--info-buttons">
        <button className="--info-email">
          <a href="mailto:hello@ayaanAa.dev">
            <i class="fa-solid fa-envelope"></i> Email
          </a>
        </button>
        <button className="--info-linkedin">
          <a
            href="https://www.linkedin.com/in/ayaan-ahmed-ansari-84b7b41b9/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </button>
      </div>
    </div>
  );
}