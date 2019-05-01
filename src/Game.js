import React from 'react';
import Boards from './Boards';
import styled from 'styled-components'

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Boards />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
