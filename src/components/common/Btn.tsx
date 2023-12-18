import styled, { css } from "styled-components";

interface BtnProps {
  onClick: () => void;
  children: React.ReactNode;
  type: string;
}

const Btn: React.FC<BtnProps> = ({ onClick, children, type }) => {
  return (
    <StBtn onClick={onClick} type={type}>
      {children}
    </StBtn>
  );
};
export default Btn;
const StBtn = styled.button<{ type: string }>`
  border-radius: 10px;
  border: none;
  color: white;
  background-color: #dadada;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: #b1b1b1;
  }
  ${({ type }) => {
    if (type === "list") {
      return css`
        font-size: 18px;
      `;
    } else if (type === "modal") {
      return css`
        font-size: 40px;
      `;
    }
  }}
`;
