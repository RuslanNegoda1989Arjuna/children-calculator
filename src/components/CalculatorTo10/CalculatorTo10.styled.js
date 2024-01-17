// Calculate.styled.js
import styled from '@emotion/styled';

export const BUTTON_SIZE = 30;

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const StaircaseContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StairButton = styled.button`
  width: ${BUTTON_SIZE}px;
  height: ${BUTTON_SIZE}px;
  margin: 0;
  font-size: 12px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.active ? '#fdbb2d' : 'rgb(250, 240, 40, 0.3)')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-bottom: 0px;
  cursor: pointer;

border: none;
 color: rgb(45, 45, 45);
 border-radius: 5px;
 box-shadow: '0px 0.7px 3px rgba(0, 0, 0, 0.32)',;
 /* background-color: rgb(250, 240, 40, 0.3);
 :hover {
   background-color: #fdbb2d;
 }
:active {
  transform: translateY(1px);
} */
`;

const OperationButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const OperationButton = styled(StairButton)`
  width: ${BUTTON_SIZE * 2}px;
  margin: 5px;
  margin-bottom: 0;
`;

// cursor: pointer;

//   border: none;
//   color: rgb(45, 45, 45);
//   border-radius: 5px;
//   box-shadow: shadow: '0px 0.7px 3px rgba(0, 0, 0, 0.32)',;
//   background-color: rgb(250, 240, 40, 0.3);
//   :hover {
//     background-color: #fdbb2d;
//   }
//   :active {
//     transform: translateY(1px);
//   }

export { CalculatorContainer, StaircaseContainer, StairButton, OperationButtonContainer, OperationButton };
