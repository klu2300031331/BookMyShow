import React, { useState } from "react";
import "./Booking.css";

const seatLayout = [
  [1, ["gray", "red", "gray", "gray", "gray", "gray", "gray", "gray", "gray", "gray"]],
  [2, Array(10).fill("light")],
  [3, ["gray", "gray", "gray", "gray", "gray", "gray", "gray", "gray", "gray", "gray"]],
  [4, ["gray", "gray", "gray", "red", "red", "gray", "gray", "gray", "gray", "gray"]],
  [5, Array(10).fill("gray")],
  [6, ["gray", "gray", "red", "gray", "red", "red", "gray", "gray", "gray", "gray"]],
  [7, ["gray", "gray", "gray", "gray", "gray", "gray", "gray", "gray", "gray", "gray"]],
];

const Booking = () => {
  const [showModal, setShowModal] = useState(false);
  const [ticketCount, setTicketCount] = useState(0);
  const [rowNumber, setRowNumber] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const [showScanner, setShowScanner] = useState(false);

  const handleBookNow = () => {
    setShowModal(true);
    setConfirmed(false);
  };

  const handleTicketChange = (e) => {
    const count = parseInt(e.target.value) || 0;
    setTicketCount(count);
    setTotalAmount(count * 200);
  };

  const handleRowChange = (e) => {
    setRowNumber(e.target.value);
  };

  const handlePayNow = () => {
    if (ticketCount > 0 && rowNumber) {
      setShowModal(false);
      setConfirmed(true);
      setShowScanner(true);
    }
  };

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=7981209406@ibl&pn=James&am=${totalAmount}&cu=INR`;

  return (
    <div className="booking-wrapper">
      <div className="booking-widget">
        <header className="booking-header">MOVIE TICKET BOOKING WIDGET</header>

        <main className="booking-main">
          <section className="booking-section">
            <h2 className="booking-title">Multiplex Theatre Showing Screen 1</h2>

            <div className="booking-content">
              <div className="screen-and-seats">
                <button className="screen-label">SCREEN</button>

                <div className="seat-rows">
                  {seatLayout.map(([row, seatColors]) => (
                    <div className="seat-row" key={row}>
                      <span className="row-number">{row}</span>
                      {seatColors.map((color, index) => {
                        let className = "seat ";
                        if (color === "red") className += "seat-booked";
                        else if (color === "light") className += "seat-available";
                        else className += "seat-normal";

                        return (
                          <button key={index} className={className} disabled={color === "red"}>
                            {index + 1}
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              <div className="booking-info">
                <div className="info-details">
                  <p><span className="label">Movie</span>: Gingerclown</p>
                  <p><span className="label">Time</span>: April 3, 21:00</p>
                  <p><span className="label">Tickets</span>: {confirmed ? ticketCount : 0}</p>
                  <p><span className="label">Total</span>: ₹{confirmed ? totalAmount : 0}</p>
                  <p><span className="label">Row</span>: {confirmed ? rowNumber : ""}</p>

                  <button className="book-btn" onClick={handleBookNow}>Book Now</button>
                </div>

                <div className="legend">
                  <div className="legend-item"><div className="legend-box gray" /> Selected</div>
                  <div className="legend-item"><div className="legend-box red" /> Sold</div>
                  <div className="legend-item"><div className="legend-box green" /> Offline Reserved</div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Booking Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Enter Booking Details</h3>

            <label htmlFor="ticketCount">Number of Tickets:</label>
            <input
              type="number"
              id="ticketCount"
              placeholder="e.g. 3"
              value={ticketCount}
              onChange={handleTicketChange}
              min="1"
              required
            />

            <label>Seat Numbers</label>
            <input type="text" placeholder="e.g. 1,2,3" />

            <label htmlFor="rowNumber">Row Number:</label>
            <input
              type="text"
              id="rowNumber"
              placeholder="e.g. 2"
              value={rowNumber}
              onChange={handleRowChange}
              required
            />

            <p>Total Amount: <strong>₹{totalAmount}</strong></p>

            <div className="modal-buttons">
              <button onClick={handlePayNow} disabled={!ticketCount || !rowNumber}>Pay Now</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Scanner Modal with PhonePe QR */}
      {showScanner && (
        <div className="modal-overlay">
          <div className="modal-box scanner-box">
            <h3>Scan to Pay</h3>
            <p>Scan with PhonePe or any UPI app to complete the payment.</p>

            <div className="scanner-image">
              <img
                src={qrCodeUrl}
                alt="PhonePe QR Code"
              />
            </div>

            <p><strong>Amount: ₹{totalAmount}</strong></p>
            <button onClick={() => setShowScanner(false)}>Done</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
