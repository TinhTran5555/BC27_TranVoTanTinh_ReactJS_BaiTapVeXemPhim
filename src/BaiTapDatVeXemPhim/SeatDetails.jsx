import React from "react";
import { useSelector, useDispatch  } from "react-redux";
import "./BookingTicket.scss";
const SeatDetails = () => {
    const dispatch = useDispatch();
  const deleteItem = (seatsID) => {
    dispatch({ type: "deleteTicket", seatsID });
  };
  const { selectedTicket } = useSelector((state) => state.ticket);
  if (!selectedTicket) {
    return null;
  }

  return (
    <div className="col-4 text-center">
      <div className="fs-3 text-light fw-bold mt-2">DANH SÁCH GHẾ BẠN CHỌN</div>
      <div className="mt-5 d-flex flex-column align-items-flex-start">
        <div className="align-items-center d-flex">
          <button className="gheDaDat"></button>
          <span className="text-light fs-4 ms-2">Ghế đã đặt</span>
        </div>
        <div className="align-items-center d-flex mt-2">
          <button className="gheDangChon"></button>
          <span className="text-light fs-4 ms-2">Ghế đang chọn</span>
        </div>
        <div className="align-items-center d-flex mt-2">
          <button className="gheChuaDat"></button>
          <span className="text-light fs-4 ms-2">Ghế chưa đặt</span>
        </div>
      </div>
      <div className="mt-5">
        <table className="table" border="2">
          <thead>
            <tr className="text-light fs-3">
              <th> Số ghế</th>
              <th>Giá</th>
              <th>Huỷ</th>
            </tr>
          </thead>
          <tbody>
            {selectedTicket.map((data) => {
              return (
                <tr key={data.name} className="text-light fs-3">
                  <td>{data.name}</td>
                  <td>{data.price}</td>
                  <td><button className="btn btn-light" onClick={() => deleteItem(data)}>X</button></td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="text-light fs-3">
              <td>Tổng tiền:</td>
              <td>
                {selectedTicket.reduce((TongTien, data) => {
                
                  return (TongTien += data.price);
                }, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
export default SeatDetails;
