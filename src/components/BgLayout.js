import React from "react";
import styled from "styled-components";
import "./BgLayout.css";

const Grid = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  font-family: "Inter var", sans-serif;
  font-size: 4em;
  line-height: 0.54em;
  color: #f7f4af;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
  width: 100%;
  padding: 100px;
  white-space: nowrap;
  font-family: "Inter var", sans-serif;
  line-height: 1em;
  @media (max-width: 768px) {
    padding: 50px;
  }
`;

const Right = styled.div`
z-index: 1;
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: #01e2adb4;
  color: #252525;
`;

const Sub = styled.div`
  align-self: end;
  width: 200px;
  height: 2px;
  background: #f7f4af;
`;

const Jumbo = styled.div`
  align-self: left;
  font-weight: 900;
  padding: 50px;
  font-size: 20px;
  color: #252525;
  font-family: "Inter var", sans-serif;
`;

const Label = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  font-family: "Inter var", sans-serif;
  font-size: 0.2em;
  line-height: 1em;
  color: #252525;
  padding: 100px;

  @media (max-width: 768px) {
    padding: 50px;
  }

  @media (max-width: 425px) {
    padding: 20px;
  }
`;

function BgLayout() {

  return (
    <div>
      <Grid>
        <Left></Left>
        <Right>
          <Jumbo>
            <div className="container">
              <span className="bgTitle">We provide:</span>
              <br />
              <span className="smTitle">Web Application</span>
              <br />
              <span className="smTitle">Mobile Application Design</span>
              <br />
              <span className="smTitle">DevOps</span>
            </div>
          </Jumbo>
        </Right>
      </Grid>
    </div>
  );
}

export default BgLayout;
