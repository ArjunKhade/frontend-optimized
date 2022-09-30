import React from "react";

function About() {
  return (
    <div>
      <div class="about-section">
        <h1>About Us Page</h1>
        <p>
          We are students of SunBeam Institute of Information Technology Pune
        </p>
        <p>
          Our Team made this Portal to provide you different Service Like online
          buying and selling of Products at anytime for your conveinence.
        </p>
      </div>
      <div className="divs">
        <center>
          <h2>Our Team</h2>
        </center>
        <br />
        <br />
        <div class="row">
          <div class="column">
            <div class="card">
              <center>
                <img
                  className="bd-placeholder-img rounded-circle"
                  width="200"
                  height="200"
                  src="https://www.w3schools.com/howto/img_avatar2.png"
                />
              </center>
              <div className="container ">
                <h2>Priyanka Chauhan</h2>
                <p class="title">Student of Sunbeam Pune</p>
                <p>
                  This is a web based portal if you want any query please Email
                  me.
                </p>
                <p>priyanka@gmail.com</p>
                <p>
                  <button class="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <center>
                <img
                  className="bd-placeholder-img rounded-circle"
                  width="200"
                  height="200"
                  src="https://www.w3schools.com/howto/img_avatar2.png"
                ></img>
              </center>
              <div class="container">
                <h2>Shrutika Oswal </h2>
                <p class="title">Student of SunBeam Pune</p>
                <p>
                  Please Explore our Services of Grocery Management System and
                  tell us how we did.
                </p>
                <p>shrutika@gmail.com</p>
                <p>
                  <button class="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <center>
                <img
                  className="bd-placeholder-img rounded-circle"
                  width="200"
                  height="200"
                  src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png"
                ></img>
              </center>
              <div class="container">
                <h2>Raj Mate</h2>
                <p class="title">Student of SunBeam Pune</p>
                <p>
                  Explore our portal service which are helful for you .Thankyou
                </p>
                <p>raj@gmail.com</p>
                <p>
                  <button class="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <center>
                <img
                  className="bd-placeholder-img rounded-circle"
                  width="200"
                  height="200"
                  src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png"
                ></img>
              </center>
              <div className="container">
                <h2>Rajendra Choudhary</h2>
                <p class="title">Student of SunBeam Pune</p>
                <p>Explore more service and get more knowledge</p>
                <p>rajendra@gmail.com</p>
                <p>
                  <button class="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
