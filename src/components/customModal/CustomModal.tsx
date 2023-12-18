import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { closeModal, setResult } from "../../redux/module/customModalSlice";
import Btn from "../common/Btn";

const CustomModal = () => {
  const { isOpen, title } = useAppSelector((state) => state.customModalSlice);
  console.log(isOpen);
  const dispatch = useAppDispatch();
  const handleOnClickConfirm = (btnType: string) => {
    if (btnType === "confirm") {
      dispatch(setResult(true));
    } else if (btnType === "cancel") {
      dispatch(setResult(false));
    }
    dispatch(closeModal());
  };
  return (
    <StCustomModalWrapper $isOpen={isOpen}>
      <div>
        <StMsg>{title}</StMsg>
        <StBtnBox>
          <Btn onClick={() => handleOnClickConfirm("cancel")} type={"modal"}>
            취소
          </Btn>
          <Btn onClick={() => handleOnClickConfirm("confirm")} type={"modal"}>
            확인
          </Btn>
        </StBtnBox>
      </div>
    </StCustomModalWrapper>
  );
};

export default CustomModal;
const StBtnBox = styled.div`
  display: flex;
  gap: 20px;
`;
const StMsg = styled.p`
  font-size: 50px;
  font-weight: 800;
`;
const StCustomModalWrapper = styled.div<{ $isOpen: boolean }>`
  z-index: 1;
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  > div {
    width: 50%;
    height: 50%;
    margin: auto;
    background-color: white;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  }
`;
