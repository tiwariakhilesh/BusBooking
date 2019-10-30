import React, { Component } from 'react';
import './index.scss';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

export default class Seat extends Component {
  render() {
    const {
      selectedSeat,
      seatDetail = {},
      handleSeatClick,
      hiddenSeat = ''
    } = this.props;
    let isSelected = false;
    isSelected =
      selectedSeat &&
      selectedSeat.includes(seatDetail && seatDetail.seatNumber);
      let seatClass = '';
      if(seatDetail.isBooked){
        seatClass += 'occupied'
      }
      if(seatDetail.isLadiesSeat){
        seatClass += 'reserved-by-lady'
      }
      if(seatDetail.isReservedForLadies){
        seatClass += 'reserved-for-lady'
      }
    const selectedClass = isSelected ? 'selected' : '';
    const seatType = this.props.seatType || '';
console.log("seat", seatDetail);

    return (
      <OverlayTrigger
        placement="right"
        overlay={
          <Tooltip id="seat">
            <strong>Seat No:</strong> {seatDetail && seatDetail.seatNumber} |{' '}
            <strong>Fare:</strong> INR {seatDetail && seatDetail.fare}
          </Tooltip>
        }
      >
        <div
          className={`seat ${selectedClass} ${seatType} ${hiddenSeat} ${seatClass}`}
          data-value={seatDetail}
          onClick={() => handleSeatClick(seatDetail)}
        >
          <span className="seat-top" />
          <span className="seat-bottom" />
          <span className="seat-right" />
        </div>
      </OverlayTrigger>
    );
  }
}
