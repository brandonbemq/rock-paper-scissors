# Rock, Paper, Scissors

A Rock, Paper, Scissors game written in JavaScript as a college programming project. The game runs through the browser's built-in prompt and alert dialogs, with no HTML, CSS, or external libraries required.

## Features

- **Single-player mode:** Play against a computer opponent that randomly selects its move.
- **Two-player mode:** Play against another person on the same computer.
- **Input validation:** Prompts users to enter valid choices.
- **Round results:** Displays the winner of each round.
- **Replay option:** Play additional rounds without restarting the script.

## How to Run

### Option 1: JSFiddle

1. Visit [JSFiddle](https://jsfiddle.net/).
2. Open the `rock_paper_scissors.js` file in this repository.
3. Copy the JavaScript source code.
4. Paste the code into the **JavaScript** panel in JSFiddle.
5. Click **Run** and follow the prompts.

### Option 2: Browser Developer Console

1. Open a modern web browser.
2. Open the developer tools (usually by pressing `F12`).
3. Select the **Console** tab.
4. Paste the contents of `rock_paper_scissors.js` into the console.
5. Press `Enter` and follow the prompts.

**Note:** This project is a standalone JavaScript file, not a complete HTML webpage. Opening the `.js` file directly in a browser will display its source code rather than run the game.

## How to Play

1. Choose a game mode:
   - Enter `1` to play against the computer.
   - Enter `2` to play against another person.
2. Enter the requested player name or names.
3. Choose `rock`, `paper`, or `scissors` when prompted.
4. View the round result.
5. Enter `yes` to play again or `no` to exit.

### Game Rules

- Rock beats scissors.
- Scissors beats paper.
- Paper beats rock.
- Matching choices result in a tie.

**Important:** Enter choices in lowercase (`rock`, `paper`, or `scissors`) as expected by the program.

## Technologies Used

- JavaScript
- Browser-native `prompt()` and `alert()` dialogs
- `Math.random()` for the computer's move

## Project Structure

```text
rock-paper-scissors/
└── rock_paper_scissors.js
```

## Purpose

This project demonstrates fundamental JavaScript concepts, including functions, loops, conditional logic, input validation, random number generation, and basic game logic.

## Author

Brandon Morris
