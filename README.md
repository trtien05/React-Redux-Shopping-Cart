# React Redux Shopping Cart

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-blue.svg)
![Redux](https://img.shields.io/badge/Redux-5-purple.svg)
![Build](https://img.shields.io/badge/build-passing-green.svg)

Welcome to the **React Redux Shopping Cart** project! This application demonstrates how to build a modern shopping cart using React and Redux. It showcases efficient state management, dynamic UI updates, and a responsive design.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- Add items to the cart with a single click.
- Remove items from the cart.
- Update item quantities directly from the cart.
- Persist cart state across page reloads using local storage.
- Responsive design for seamless experience on both desktop and mobile devices.
- User-friendly interface with intuitive navigation.

## Technologies Used
- **React 18:** A powerful JavaScript library for building user interfaces.
- **Redux 5:** A predictable state container for JavaScript applications.
- **React-Redux:** Official React bindings for Redux to facilitate connecting the store with React components.
- **Redux Toolkit:** Simplifies Redux development by providing tools to write more efficient code.
- **React Router:** Enables navigation among different views of the application.
- **Local Storage:** For persisting the cart state between sessions.

## Installation
Follow these steps to set up the project on your local machine:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/react-redux-shopping-cart.git
    cd react-redux-shopping-cart
    ```

2. **Install the dependencies:**
    ```bash
    pnpm install
    ```

3. **Start the development server:**
    ```bash
    pnpm start
    ```

4. **Open your browser:**
    Navigate to `http://localhost:3000` to see the application in action.

## Usage
To add items to your cart, simply browse through the product list and click on the "Add to Cart" button for any item you wish to purchase. You can view your cart by clicking on the cart icon, where you can update item quantities or remove items as needed.

## Project Structure
Here's a brief overview of the project's structure:

```plaintext
shopping-online/
├── public/
├── src/
│   ├── actions/
│   ├── components/
│   ├── pages/
│   ├── layout/
│   ├── reduces/
│   ├── routes/
│   ├── services/
│   ├── util/
│   ├── App.js
│   ├── index.js
├── .gitignore
├── package.json
└── README.md
