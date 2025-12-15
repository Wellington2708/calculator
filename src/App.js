import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row } from "../src/styles.js";
import { useState } from "react";

const App = () => {
  // States
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

// Functions
  const handleAddNumber = (number) => {
    if(currentNumber !== '0'){
    setCurrentNumber(prev => `${prev}${number}`);
    }else {
      setCurrentNumber(number);
    }}

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
      
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
          case '*':
            handleTimesNumbers();
            break;
          case '/':
            handleDividedNumbers();
            break;
          case '%':
            handlePercentNumbers();
            break;
        default:
          break;

      }
      
    } 
  }

  const handleMinusNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
      
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setFirstNumber('0');
      setOperation('');
    }
  }

  const handleTimesNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
      
    } else {
      const times = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(times));
      setFirstNumber('0');
      setOperation('');
    }
  }

  const handleDividedNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
      
    } else {
      const divided = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divided));
      setFirstNumber('0');
      setOperation('');
    }
  }

  const handlePercentNumbers = () => {
    if (firstNumber === '0') {
      const percent = Number(currentNumber) / 100;
      setCurrentNumber(String(percent));
    } else {
      const percent = Number(firstNumber) * Number(currentNumber / 100);
      setCurrentNumber(String(percent));

    }
  }
  
// Return JSX
  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="C" onClick={handleClear}/>
          <Button label="." onClick={()=>  handleAddNumber('.')}/>
          <Button label="%" onClick={handlePercentNumbers}/>
          <Button label="/" onClick={handleDividedNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={()=>  handleAddNumber('7')}/>
          <Button label="8" onClick={()=>  handleAddNumber('8')}/>
          <Button label="9" onClick={()=>  handleAddNumber('9')}/>
          <Button label="*" onClick={handleTimesNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={()=>  handleAddNumber('4')}/>
          <Button label="5" onClick={()=>  handleAddNumber('5')}/>
          <Button label="6" onClick={()=>  handleAddNumber('6')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={()=>  handleAddNumber('1')}/>
          <Button label="2" onClick={()=>  handleAddNumber('2')}/>
          <Button label="3" onClick={()=>  handleAddNumber('3')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="0" onClick={()=>  handleAddNumber('0')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
};

export default App;
