import React from "react";
import styled from '@emotion/styled'

function UserUpdate() {

  const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }`

    return (
      <Button>This my button component.</Button>
    );
};

export default UserUpdate;