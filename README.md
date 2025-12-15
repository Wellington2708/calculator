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



# Calculadora em React

Este projeto é uma calculadora simples desenvolvida com **React** e **styled-components**, criada com foco em aprendizado.  
O objetivo principal é praticar **gerenciamento de estado**, **eventos** e **lógica básica de calculadora** em React.

## 🚀 Funcionalidades

- Operações aritméticas básicas:
  - Soma (+)
  - Subtração (-)
  - Multiplicação (*)
  - Divisão (/)
- Cálculo de porcentagem (%)
- Função de limpar (C)
- Suporte a números decimais
- Botões interativos
- Layout responsivo com styled-components

## 🧠 Como Funciona

A calculadora utiliza três estados principais:

- `currentNumber`: armazena o número atualmente exibido
- `firstNumber`: armazena o primeiro operando da operação
- `operation`: armazena a operação selecionada

### Fluxo das Operações

1. O usuário digita os números usando os botões numéricos.
2. Ao pressionar um botão de operação (`+`, `-`, `*`, `/`):
   - O número atual é salvo em `firstNumber`
   - A operação é armazenada
   - O display é resetado
3. O botão `%`:
   - Converte o número atual em porcentagem
   - Caso exista uma operação, a porcentagem é calculada com base no primeiro número
4. O botão `=` executa o cálculo conforme a operação selecionada.
5. O resultado é exibido e o estado da calculadora é reiniciado.

## 🛠 Tecnologias Utilizadas

- React
- JavaScript (ES6+)
- styled-components

## 📂 Estrutura do Projeto




