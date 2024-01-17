// Calculate.jsx
import React, { useState } from 'react';
import { CalculatorContainer, StaircaseContainer, StairButton, OperationButtonContainer, OperationButton, BUTTON_SIZE } from './CalculatorTo10.styled';
// import { BUTTON_SIZE } from './CalculatorTo10.styled';

const Calculate = () => {
    const [value, setValue] = useState(0);
    console.log(value)

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
        
      <StaircaseContainer>
        {[...Array(10)].map((_, index) => {
            const num = 10 - index;

          return (
            <StairButton
              key={num}
              active={value === num}
              level={index + 1}
                  onClick={() => handleNumberClick(num)}
                  
              style={{ marginLeft: (value === 1 ? 0 : (num - 1) * BUTTON_SIZE) }}
            >
              {num}
            </StairButton>
          );
        })}
      </StaircaseContainer>
      <OperationButtonContainer>
        <OperationButton onClick={handleAdd}>+1</OperationButton>
        <OperationButton onClick={handleSubtract}>-1</OperationButton>
      </OperationButtonContainer>
    </CalculatorContainer>
  );
};

export default Calculate;
