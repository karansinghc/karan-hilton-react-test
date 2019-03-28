import React, { Component } from 'react';
import Select from './selectoption';
import './common-styles.css';

export default class Rooms extends Component {
  selectedRoom(event) {
    this.props.selectedRoom(this.props.roomNum, event.target.checked);
  }
  render() {
    return (
      <div className="room-container">
        <div className="room-header">
          {this.props.roomNum !== 1 && (
            <input
              type="checkbox"
              onChange={this.selectedRoom.bind(this)}
              checked={!this.props.disabled}
            />
          )}
          &nbsp; Room {this.props.roomNum}
        </div>
        <div
          className={
            this.props.disabled ? 'room-table room-disabled' : 'room-table'
          }>
          <table>
            <tbody>
              <tr>
                <td>Adults</td>
                <td>Children</td>
              </tr>
              <tr>
                <td>(18+)</td>
                <td>(0-17)</td>
              </tr>
              <tr>
                <td>
                  <Select startCount={1} disabled={this.props.disabled} />
                </td>
                <td>
                  <Select disabled={this.props.disabled} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Rooms.defaultProps = {
  roomNum: 1,
  disabled: true,
  selectedRoom: (roomNum, value) => {}
};
