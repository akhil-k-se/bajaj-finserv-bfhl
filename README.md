# Bajaj Finserv API Round – Full Stack Internship

This project is part of the **Chitkara Campus Hiring - API Round (July 2025)** for the **Full Stack Internship at Bajaj Finserv**.

It contains a backend-only REST API built with **Node.js and Express**, designed to process a given array and return structured data including numbers, alphabets, special characters, and computed results based on the input.

---

## 📌 Endpoint

**POST** `/bfhl`

Example:  
```
https://your-deployment-url.vercel.app/bfhl
```

---

## 🧠 Features

- Accepts an array of mixed elements: numbers, alphabets, and special characters
- Returns:
  - Even and odd numbers
  - Alphabets (converted to uppercase)
  - Special characters
  - Sum of all numeric values (as a string)
  - Concatenated string of all alphabets in **reversed order** with **alternating caps**
  - User identification fields
  - Operation success flag

---

## 📥 Request Body

```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

---

## 📤 Response Format

```json
{
  "is_success": true,
  "user_id": "akhil_kumar_29072025",
  "email": "akhil@example.com",
  "roll_number": "CHIT123456",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

---

## 📦 Tech Stack

- Node.js
- Express.js
- dotenv (for environment variables)

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/bajaj-finserv-api-round.git
cd bajaj-finserv-api-round
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create `.env` file

```env
PORT=3000
FULL_NAME=akhil_kumar
DOB=29072025
EMAIL=akhil@example.com
ROLL_NUMBER=CHIT123456
```

### 4. Start the server
```bash
node index.js
```

API will run on:  
`http://localhost:3000/bfhl`

---

## 🚀 Deployment

This project is ready for deployment on platforms like:
- [Vercel](https://vercel.com)
- [Render](https://render.com)
- [Railway](https://railway.app)

---

## 📁 File Structure

```
.
├── index.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## ✅ Author Details

- 👨‍💻 Name: Akhil Kumar
- 📧 Email: akhil@example.com
- 🏫 Roll Number: CHIT123456

---

## 📌 Note

> This submission strictly adheres to the requirements and format specified in the **Chitkara Campus Hiring (July 2025) - Full Stack API Round** document provided by Bajaj Finserv.
