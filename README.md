# React Calculator

This project is a simple calculator built with **React** and **styled-components**, created for learning purposes.  
The main goal is to practice **state management**, **event handling**, and **basic calculator logic** in React.

## 🚀 Features

- Basic arithmetic operations:
  - Addition (+)
  - Subtraction (-)
  - Multiplication (*)
  - Division (/)
- Percentage (%) calculation
- Clear (C) function
- Decimal number support
- Interactive buttons
- Responsive layout using styled-components

## 🧠 How It Works

The calculator uses three main state variables:

- `currentNumber`: stores the number currently displayed
- `firstNumber`: stores the first operand of the operation
- `operation`: stores the selected arithmetic operation

### Operation Flow

1. The user types numbers using the numeric buttons.
2. When an operation button (`+`, `-`, `*`, `/`) is pressed:
   - The current number is stored as `firstNumber`
   - The selected operation is saved
   - The display is reset
3. The `%` button:
   - Converts the current number into a percentage
   - If there is a stored operation, the percentage is calculated based on the first number
4. The `=` button executes the calculation based on the stored operation.
5. The result is displayed and the calculator state is reset.

## 🛠 Technologies Used

- React
- JavaScript (ES6+)
- styled-components

## 📂 Project Structure



