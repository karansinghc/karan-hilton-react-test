import React, { Component } from 'react';
import './App.css';
import Rooms from './components/room';
const roomCount = [1, 2, 3, 4];

class App extends Component {
  state = {
    disable: [false, true, true, true]
  };
  selectedRoom(selectedRoom, val) {
    const index = roomCount.indexOf(selectedRoom);
    let stateDisable = this.state.disable;
    if (val) {
      for (let x = 1; x < roomCount.length; x++) {
        stateDisable[x] = true;
      }
      for (let x = 1; x <= index; x++) {
        stateDisable[x] = !val;
      }
    } else {
      for (let x = 1; x < roomCount.length; x++) {
        stateDisable[x] = true;
      }
      for (let x = 1; x < index; x++) {
        stateDisable[x] = false;
      }
    }
    this.setState({
      disable: stateDisable
    });
  }
  render() {
    return (
      <div>
        {roomCount.map((item, index) => {
          return (
            <Rooms
              key={index}
              roomNum={item}
              disabled={this.state.disable[index]}
              selectedRoom={this.selectedRoom.bind(this)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
