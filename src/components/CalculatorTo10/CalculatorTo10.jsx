import React, { useState } from 'react';
import { CalculatorContainer, Button, OperationButton } from './CalculatorTo10.styled'

const Calculator = () => {
  const [value, setValue] = useState(0);

  const handleNumberClick = (num) => {
    setValue(num);
  };

  const handleAdd = () => {
    setValue((prev) => (prev < 10 ? prev + 1 : prev));
  };

  const handleSubtract = () => {
    setValue((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <CalculatorContainer>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
        <Button key={num} active={value === num} onClick={() => handleNumberClick(num)}>
          {num}
        </Button>
      ))}
      <div>
        <OperationButton onClick={handleAdd}>+1</OperationButton>
        <OperationButton onClick={handleSubtract}>-1</OperationButton>
      </div>
    </CalculatorContainer>
  );
};

export default Calculator;