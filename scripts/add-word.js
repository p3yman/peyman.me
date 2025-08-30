import welcome from "cli-welcome";
import inquirer from "inquirer";
import chalk from "chalk";
import fs from "fs";
import path from "path";

const question = chalk.hex("#fbbf24");
const success = chalk.green;
const error = chalk.red;

welcome({
  title: `Word of the Day CLI`,
  tagLine: `by @p3yman`,
  bgColor: `#1755f6`,
  color: `#ffffff`,
  bold: true,
  clear: true,
  version: `0.1.0`,
});

const wordsFilePath = path.join(
  process.cwd(),
  "src/content/word-of-the-day/words.json"
);

// Load existing words
let wordsData = {};
try {
  const existingData = fs.readFileSync(wordsFilePath, "utf8");
  wordsData = JSON.parse(existingData);
} catch (err) {
  console.log(
    chalk.yellow("⚠ No existing words file found, creating new one")
  );
}

// Get tomorrow's date as default
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const defaultDate = tomorrow.toISOString().split("T")[0];

inquirer
  .prompt([
    {
      type: "input",
      name: "date",
      message: question(`Date for this word (YYYY-MM-DD):`),
      default: defaultDate,
      validate: (input) => {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(input)) {
          return "Please enter date in YYYY-MM-DD format";
        }

        const date = new Date(input);
        if (isNaN(date.getTime())) {
          return "Please enter a valid date";
        }

        if (wordsData[input]) {
          return `A word already exists for ${input}. Choose a different date.`;
        }

        return true;
      },
    },
    {
      type: "input",
      name: "word",
      message: question("What is the word?"),
      validate: (input) => {
        if (!input.trim().length) {
          return "Please provide a word";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "pronunciation",
      message: question("How is it pronounced? (e.g., /prəˌnʌnsiˈeɪʃən/)"),
      validate: (input) => {
        if (!input.trim().length) {
          return "Please provide pronunciation";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "meaning",
      message: question("What does it mean?"),
      validate: (input) => {
        if (!input.trim().length) {
          return "Please provide the meaning";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "context",
      message: question("Where did you hear/find this word? (optional)"),
    },
  ])
  .then((answers) => {
    // Add the new word
    wordsData[answers.date] = {
      word: answers.word.trim(),
      pronunciation: answers.pronunciation.trim(),
      meaning: answers.meaning.trim(),
      context: answers.context.trim() || undefined,
    };

    // Sort dates and create sorted object
    const sortedDates = Object.keys(wordsData).sort();
    const sortedWordsData = {};
    sortedDates.forEach((date) => {
      sortedWordsData[date] = wordsData[date];
    });

    // Write back to file
    try {
      fs.writeFileSync(wordsFilePath, JSON.stringify(sortedWordsData, null, 2));
      console.log(
        `\n${success("✔")} ${chalk.bold("Word added successfully!")}`
      );
      console.log(`${chalk.gray("Date:")} ${answers.date}`);
      console.log(`${chalk.gray("Word:")} ${answers.word}`);
      console.log(
        `${chalk.gray("View at:")} /word-of-the-day/${answers.date}\n`
      );
    } catch (err) {
      console.log(`\n${error("✗")} Failed to save word: ${err.message}\n`);
    }
  })
  .catch((err) => {
    console.log(`\n${error("✗")} Something went wrong: ${err.message}\n`);
  });
