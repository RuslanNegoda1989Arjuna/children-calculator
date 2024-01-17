// Calculate.styled.js
import styled from '@emotion/styled';

export const BUTTON_SIZE = 20;

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
  background-color: ${(props) => (props.active ? '#ffcccb' : '#fff')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-bottom: 10px;
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

export { CalculatorContainer, StaircaseContainer, StairButton, OperationButtonContainer, OperationButton };
