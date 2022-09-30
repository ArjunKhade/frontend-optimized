//import jwtDecode from "jwt-decode";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SERVER_BASE_URL } from "../config";
function Profile() {
  const { id } = useParams();

  const [userDetails, setUserDetails] = useState();
  const history = useNavigate();

  useEffect(() => {
    axios
      .get(SERVER_BASE_URL + `/users/${id}`)
      .then((res) => {
        const result = res.data;
        console.log(result);
        setUserDetails(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const goto = () => {
    history(`/Edit_Profile/${id}`);
  };

  return (
    <div
      className="row py-5"
      style={{
        height: "90vh",
        justifyContent: "Center",
        backgroundImage: `url("./img2.jpg")`,
      }}
    >
      <div class="col-4 ">
        <div
          class="card opacity-100"
          style={{ "background-color": "lightskyblue" }}
        >
          <div class="card-body">
            <div class="row text-align-center card-title">
              <h4>Profile Details</h4>
            </div>
            <hr />

            <div class="row">
              <div class="col-3">
                <p class="mb-0">Name</p>
              </div>
              <div class="col-9">
                <input
                  type={"text"}
                  className={"form-control"}
                  id="name"
                  value={userDetails?.name}
                  // onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                  readOnly
                />
              </div>
            </div>
            <hr />

            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Email</p>
              </div>
              <div class="col-sm-9">
                <input value={userDetails?.email} className={"form-control"} />
              </div>
            </div>
            <hr />

            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">City</p>
              </div>
              <div class="col-sm-9">
                <input
                  type={"text"}
                  className={"form-control"}
                  id="city"
                  value={userDetails?.city}
                  // onChange={(e) => setCity(e.target.value)}
                  readOnly
                />
              </div>
            </div>
            <hr />

            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Pin</p>
              </div>
              <div class="col-sm-9">
                <input
                  type={Number}
                  className={"form-control"}
                  id="pin"
                  value={userDetails?.pin}
                  //onChange={(e) => setPin(e.target.value)}
                  readOnly
                />
              </div>
            </div>
            <hr />

            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Address</p>
              </div>
              <div class="col-sm-9">
                <input
                  type={"text"}
                  className={"form-control"}
                  id="address"
                  value={userDetails?.address}
                  // onChange={(e) => setAddress(e.target.value)}
                  readOnly
                />
              </div>
            </div>
            <hr />

            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Phone</p>
              </div>
              <div class="col-sm-9">
                <input
                  type={Number}
                  className={"form-control"}
                  id="phone"
                  value={userDetails?.phone}
                  // onChange={(e) => setPhone(e.target.value)}
                  readOnly
                />
              </div>
            </div>
            <hr />

            <div class="row">
              <div class="text-align-center">
                <button className="btn btn-primary mx-5" onClick={goto}>
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
