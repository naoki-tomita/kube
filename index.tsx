import React, { Component, useState, useEffect, FC, Children } from "react";
import { useApp, render, Box, Color, Text, useStdin } from "ink";
import TextInput from "ink-text-input";

const Option: FC = ({ children }) => {
  return (
    <Box>{children}</Box>
  );
}

class Select extends Component {
  constructor(x: any, y: any) {
    super(x, y);
  }

  render() {
    return (
      <Box>
        {Children.map(this.props.children, (it) => (
          <Box>
            <Text>O</Text>
            {it}
          </Box>
          )
        )}
      </Box>
    );
  }
}



const Foo = () => {
  const [state, setState] = useState("");
  return (
    <>
      <Select>
        <Option>a</Option>
        <Option>b</Option>
        <Option>c</Option>
      </Select>
    </>
  );
}

render(<Foo />);
