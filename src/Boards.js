import React from 'react';
import Square from './Square';
import styled from 'styled-components'



class Boards extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {

    const BoardLook = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-color: hotpink;
    `;
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <BoardLook>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </BoardLook>
        <BoardLook>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </BoardLook>
        <BoardLook>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </BoardLook>
      </div>
    );
  }
}

export default Boards;
