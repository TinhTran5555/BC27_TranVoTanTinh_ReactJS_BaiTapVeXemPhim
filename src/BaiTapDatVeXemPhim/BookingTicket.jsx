import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import SeatDetails from "./SeatDetails";
import SeatList from "./SeatList";

const BookingTicket = () => {
  return (
    <div
      style={{
        position: "fixed",
        height: "100%",
        width: "100%",
        backgroundImage: "url('./img/ironMan3.webp')",
        backgroundSize: "100%",
      }}
    >
      <div
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <SeatList />
            <SeatDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingTicket;
