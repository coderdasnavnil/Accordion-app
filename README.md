# React FAQ Accordion App

A simple **React Accordion / FAQ application** that allows users to expand and collapse questions to view answers.

This project demonstrates the use of **React Hooks, component-based architecture, dynamic rendering, and modular CSS styling**.

---

## Features

* Expand and collapse FAQ questions
* Clean accordion UI
* Dynamic question rendering using `map()`
* State management using `useState`
* Modular CSS using CSS Modules
* Reusable React components

---

## Tech Stack

* React
* JavaScript (ES6)
* CSS Modules
* React Icons

---

## Project Structure

```
src
│
├── App.js
├── Data.js
├── Question.js
├── Question.module.css
├── index.js
└── index.css
```

---

## How It Works

* Questions are stored in **Data.js**.
* The **App component** maps through the questions and renders `Question` components.
* Each `Question` component maintains its own **expand/collapse state** using `useState`.
* Clicking the button toggles the answer visibility.

---

## Installation

Clone the repository:

```
git clone https://github.com/yourusername/react-faq-accordion.git
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm start
```

---

## Future Improvements

* Add smooth accordion animations
* Allow only one panel to open at a time
* Improve mobile responsiveness
* Add keyboard accessibility

---

## Author

Navnil Das
Final Year Computer Science Student
Interested in **Frontend Development, AI/ML, and Full-Stack Web Development**
