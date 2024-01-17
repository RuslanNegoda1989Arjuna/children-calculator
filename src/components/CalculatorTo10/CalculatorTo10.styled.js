// Calculate.styled.js
import styled from '@emotion/styled';

export const BUTTON_SIZE = 35;

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
  font-size: 16px;
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
 box-shadow: '0px 0.7px 3px rgba(0, 0, 0, 0.32)';

`;

const OperationButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  /* flex-direction: row; */
  margin-top: 10px;
`;

const OperationButton = styled.button`
 width: ${BUTTON_SIZE * 3}px;
  height: ${BUTTON_SIZE * 3}px;
  padding: 10px;
  /* margin: 0 auto; */
  margin-right: 20px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;

  border: none;
  color: rgb(45, 45, 45);
  border-radius: 5px;
  box-shadow: '0px 0.7px 3px rgba(0, 0, 0, 0.32)';
  background-color: rgb(250, 240, 40, 0.3);
  :hover {
    background-color: #fdbb2d;
  }
  :active {
    transform: translateY(1px);
  }
  /* width: ${BUTTON_SIZE * 3}px;
  height: ${BUTTON_SIZE * 3}px;
  margin: 5px;
  margin-bottom: 0;
  cursor: pointer;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-bottom: 0px;
  cursor: pointer;
  border: none;
  color: rgb(45, 45, 45);
  border-radius: 5px;
  box-shadow: '0px 0.7px 3px rgba(0, 0, 0, 0.32)';
  background-color: ${(props) => (props.active ? '#fdbb2d' : 'rgb(250, 240, 40, 0.3)')}; */
`;

export { CalculatorContainer, StaircaseContainer, StairButton, OperationButtonContainer, OperationButton };
