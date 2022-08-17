import React from "react";
import { useSelector, useDispatch } from "react-redux";

const SeatList = () => {
  const { danhSachGhe, selectedTicket } = useSelector((state) => state.ticket);
  const dispatch = useDispatch();
  const handleSelect = (seats) => {
    dispatch({ type: "selectTicket", seats });
  };
  return (
    <div className="col-8 text-center">
      <div className="fs-1 text-primary fw-bold">
        ĐẶT VÉ XEM PHIM CYBERLEARN.VN
      </div>
      <div className="text-light fs-3 mt-3">Màn hình</div>
      <div className="d-flex mt-1 flex-row justify-content-center">
        <div className="screen"></div>
      </div>
      <div>
        {danhSachGhe.map((dataDanhSachGhe) => {
          return (
            <div key={dataDanhSachGhe.row} className="hangGhe">
              <div className="text-light fs-3 d-flex justify-content-center danhSachGhe">
                {dataDanhSachGhe.row}

                {dataDanhSachGhe.seats.map((info) => {
                  if (dataDanhSachGhe.row === "") {
                    return (
                      <span key={info.name} className="setWidthSo">
                        {info.name}
                      </span>
                    );
                  } else {
                    let css = "";
                    let disabled = false;
                    if (info.booked) {
                      css = "gheDaDat";
                      disabled = true;
                    }

                    {
                      selectedTicket.map((duLieu) => {
                        if (info.name === duLieu.name) {
                          css = "gheDangChon";
                        }
                      });
                    }
                    return (
                      <button
                        onClick={() => handleSelect(info)}
                        disabled={disabled}
                        className={`gheChuaDat ${css}  fs-5 setWidthButton`}
                        key={info.name}
                      >
                        {info.name}
                      </button>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SeatList;
