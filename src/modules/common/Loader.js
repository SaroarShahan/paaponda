import React from "react";
import styled from "styled-components";
import { RingLoader } from "react-spinners";

const Loader = ({ fullscreen, small, large, color }) => {
  if (fullscreen) {
    return (
      <Wrapper>
        <RingLoader
          sizeUnit={"px"}
          size={40}
          color={color || "#eb2f64"}
          loading={true}
        />
      </Wrapper>
    );
  }
  if (small)
    return (
      <RingLoader
        sizeUnit={"px"}
        size={20}
        color={color || "#eb2f64"}
        loading={true}
      />
    );
  if (large) {
    return (
      <RingLoader
        sizeUnit={"px"}
        size={80}
        color={color || "#eb2f64"}
        loading={true}
      />
    );
  }

  return (
    <RingLoader
      sizeUnit={"px"}
      size={40}
      color={color || "#eb2f64"}
      loading={true}
    />
  );
};

export default Loader;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 18rem);
`;
