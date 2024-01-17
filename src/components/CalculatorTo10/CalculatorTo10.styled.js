import styled from '@emotion/styled';

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  width: 14px;
  height: 14px;
  margin: 2px;
  font-size: 12px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.active ? '#ffcccb' : '#fff')};
`;

const OperationButton = styled(Button)`
  width: 30px;
`;

export { CalculatorContainer, Button, OperationButton };