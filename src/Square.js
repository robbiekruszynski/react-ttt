import React from 'react';
import styled from 'styled-components'

class Square extends React.Component {
  render() {

    const Button = styled.button`
    height:300px;
    width:300px;
    `;
    return (
      <Button>
      {this.props.value}
      </Button>
    );
  }
}

export default Square;
