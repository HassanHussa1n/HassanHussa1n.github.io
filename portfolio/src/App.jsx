import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <body>
    <header>
      <h1 id="name">Hassan Mehmod Hussain</h1>
      <p>Hi, Welcome to my page!</p>
      
    </header>

    <main>
      <section id="about">
        <h2>About Myself:</h2>
        <p>
          Dedicated and highly motivated fullstack-developer with a Bachelor's
          degree in Applied Computer Science and foundational experience in
          DevOps practices and as an IT-technician.
        </p>
      </section>

      <section id="experience">
        <h2>Experience:</h2>
        <h3>Traffic Conductor at APCOA, Oslo</h3>
        <p id="year">03/2022—06/2023</p>
        <p>
          Order and control of traffic at large events to ensure positive
          experiences for visitors and hosts.
        </p>
        <h3>IT Technician at APCOA, Oslo</h3>
        <p id="year">06/2023—12/2023</p>
        <ul>
          <li>
            Installed and configured computer hardware, software, networks,
            cameras and routers, as well as further developing constructs at the
            company.
          </li>
          <li>
            Software development and maintenance of APCOA's systems within their
            ANPR technology.
          </li>
          <li>
            Partook in DevOps related activities, where new ideas came to
            fruition.
          </li>
        </ul>
        <h3>Fullstack-developer at Experis Academy, Oslo</h3>
        <p id="year">01/2024—Present</p>
        <p>The journey over at Experis Academy started by working through a three-month course where essential technologies and frameworks were being studied and applied to real projects. After completing this course, I work as a IT-consultant with software development being the main objective. The primary technologies I work with are: React, Java, JavaScript, Angular and SQL.</p>
      </section>

      
    </main>

    <script src="script.js"></script>
  </body>
    </>
  )
}

export default App
