import React from "react";

const Admin = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>The Admin</h3>
            <h1>Use your credentials and login!</h1>
            <p>
              Login to check for the requirement of the employees and assigning cabs according to their conviniences.
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                LOGIN
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRlc2t0b3AlMjBjb21wdXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="hhhh" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
