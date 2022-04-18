import React from "react";
import styled from "styled-components";
import { useStoreState } from "easy-peasy";
import ReactLoading from "react-loading";

const LoaderStyle = styled.div`
  width: 100%;
  height: 100%;

  .loader-container {
    position: fixed;
    z-index: 4;
    width: 100%;
    height: 100%;
    background-color: #000000b0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Loader = () => {
  const status = useStoreState((state) => state.status);

  console.log("status", status);
  return (
    <LoaderStyle>
      {!status && (
        <div className="loader-container">
          <ReactLoading type={"bars"} color={"#fff"} height={100} width={100} />
        </div>
      )}
      {console.log("updated status", status)}
    </LoaderStyle>
  );
};
