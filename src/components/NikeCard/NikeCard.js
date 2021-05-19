import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import AirJordanImg from "../../assets/images/air-jordan-transparent.png";

const CardContainer = styled.div`
  width: 285px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #1d1f21;
  color: #fff;
  position: relative;
  cursor: grab;
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`;

const Circle = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  top: -4.2em;
  right: -10em;
  z-index: 5;
  background-color: #fbbe01;
  border-radius: 50%;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 1em;
`;

const NikeText = styled.h1`
  color: #fff;
  text-transform: uppercase;
  margin: 0;
  z-index: 10;
  font-size: 74px;
  font-weight: 900;
`;

const ShoesWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Shoes = styled(motion.div)`
  border: 3px solid pink;
  width: auto;
  height: 190px;
  z-index: 99;
  user-select: none; // 사용자가 텍스트를 선택할 수 있는지를 지정한다.

  img {
    width: auto;
    height: 100%;
    user-select: none;
  }
`;

const NikeCard = () => {
  return (
    <>
      <CardContainer>
        <TopContainer>
          {/* Circle Wrapper */}
          <CircleWrapper>
            <Circle />
          </CircleWrapper>
          {/* ShoesWrapper */}
          <ShoesWrapper>
            <Shoes style={{ rotate: "-25deg" }}>
              <img src={AirJordanImg} alt="airJordan" />
            </Shoes>
          </ShoesWrapper>
          {/* NikeText */}
          <NikeText>NIKE AIR</NikeText>
        </TopContainer>
        {/* BottomContainer */}
        <BottomContainer>bottom</BottomContainer>
      </CardContainer>
    </>
  );
};

export default NikeCard;
