const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const FULL_NAME = "akhil_kumar";
const DOB = "31032005";             
const EMAIL = "akhil@example.com";
const ROLL_NUMBER = "2210991218";

app.use(express.json());

app.post("/bfhl", (req, res) => {
  const { data } = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      message: "Input data must be an array",
    });
  }

  const even_numbers = [];
  const odd_numbers = [];
  const alphabets = [];
  const special_characters = [];
  let sum = 0;
  let allAlphabets = "";

  data.forEach((item) => {
    const str = String(item);

    if (/^\d+$/.test(str)) {
      const num = parseInt(str);
      sum += num;
      (num % 2 === 0 ? even_numbers : odd_numbers).push(str);
    } else if (/^[a-zA-Z]+$/.test(str)) {
      alphabets.push(str.toUpperCase());
      allAlphabets += str;
    } else {
      special_characters.push(str);
    }
  });

  const reversed = allAlphabets.split("").reverse();
  const concat_string = reversed
    .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");

  const response = {
    is_success: true,
    user_id: `${FULL_NAME}_${DOB}`,
    email: EMAIL,
    roll_number: ROLL_NUMBER,
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string,
  };

  res.status(200).json(response);
});

app.get("/", (_, res) => {
  res.send("Bajaj Finserv API Round is live.");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
