import React from "react";
import styled from "styled-components";
import { Marginer } from "../../marginer/marginer";
import NikeImg from "../../assets/images/nike-logo.png";

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 6px 0 6px;
  line-height: 1.4;
`;

const MediumText = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
`;

const SmallText = styled.span`
  font-size: 11px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
`;

const Price = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
`;

const SpaceHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BuyButton = styled.button`
  border: 3px solid transparent;
  border-radius: 8px;
  padding: 10px 16px;
  background-color: #fbbe01;
  color: #000;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;

  &:hover {
    background-color: transparent;
    color: #fff;
    border: 3px solid #fbbe01;
  }
`;

const NikeLogo = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: auto;
    height: 13px;
  }
`;

const ShoesDetail = (props) => {
  return (
    <>
      <DetailsContainer>
        <SmallText>NIKE</SmallText>
        <SpaceHorizontalContainer>
          <MediumText>AIR JORDAN I MID SE GC</MediumText>
          <Price>Y856</Price>
        </SpaceHorizontalContainer>
        <Marginer direction="vertical" margin="1.2em" />
        <SpaceHorizontalContainer>
          <MediumText>YOUR NEXT SHOES</MediumText>
          <BuyButton>BUY</BuyButton>
        </SpaceHorizontalContainer>
        <NikeLogo>
          <img src={NikeImg} alt="nike-logo" />
        </NikeLogo>
      </DetailsContainer>
    </>
  );
};

export default ShoesDetail;
