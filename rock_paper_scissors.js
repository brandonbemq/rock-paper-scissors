/*
Author: Brandon Morris
Rock, Paper, Scissors Game
Last Revised Date: 5/25/17
*/

var p1Answer = null;
var p2Answer = null;
var compAnswer = null;
var multiGame = true;
var gameType = null;
var playAgain = null;



while (multiGame == true) {
  var inputError1 = false;

  while (inputError1 == false) {
    gameType = prompt("Welcome to Rock Paper Scissors! Do you want to play 1 player or 2 player ? (Type 1 or 2)");

    if (gameType == "1") {
      inputError1 = true; //starts 1 player game
      onePlayer();

    } else if (gameType == "2") {
      inputError1 = true; //starts 2 player game
      twoPlayer();

    } else if (gameType == null) {
      multiGame = false;
      break;
    } else {
      inputError1 = false;
      alert("input not recognized. retype choice.") //catches 																													unrecognized 																												input
    }
  }

  var inputError4 = false;
  while (inputError4 == false) {

    //asks user if they want to play another game

    playAgain = prompt("Do you want to keep playing? (Type yes or no)");
    if (playAgain == "yes") {
      multiGame = true;
      inputError4 = true;
    } else if (playAgain == "no") {
      multiGame = false;
      inputError4 = true;
    } else if (playAgain == "") {
      alert("No input detected, please Retype.");
      inputError4 = false;
    } else if (playAgain == null) {
      multiGame = false;
      inputError4 = true;
    }

  }
}
alert("Thanks for playing Rock, Paper, Scissors!");


function onePlayer() { //one player game

  var inputError3 = false;
  while (inputError3 == false) {

    var p1Name = prompt("Enter player's name:");

    if (p1Name == "") { //recevies player name input
      inputError3 = false;
      alert("No input detected, please Retype name.");
    } else if (p1Name == null) {
      return;
    } else {
      inputError3 = true;
      alert("Okay " + p1Name + ", lets Begin! Select either rock, paper, or scissors");
    }
  }

  var inputError2 = false;
  while (inputError2 == false) { //checks for input Error

    p1Answer = prompt(p1Name + "'s Choice: Type rock, paper, or scissors");
    //gets player 1's Answer

    if (!Object.is(p1Answer, "rock") && !Object.is(p1Answer, "paper") && !Object.is(p1Answer, "scissors")) {

      inputError2 = false;
      alert("Input doesn't match rock, paper, or scissors. Retype Choice");
    } else {
      inputError2 = true;
    }
  }
  var compChoice = Math.random(); //generates computer choice
  if (compChoice <= 0.34) {
    p2Answer = "rock";
  } else if (compChoice <= 0.67 && compChoice >= 0.35) {
    p2Answer = "paper";
  }
  if (compChoice >= 0.68) {
    p2Answer = "scissors";
  }

  var result = roll(p1Answer, p2Answer);

  if (result == "1") { //displays result

    alert("rock...paper...scissors...SHOE!!!" + "\n" + "\n" + p1Name + " chose: " + p1Answer + "	The computer chose: " + p2Answer + "\n" + "\n" + p1Name + " wins!");
  } else if (result == "2") {
    alert("rock...paper...scissors...SHOE!!!" + "\n" + "\n" + p1Name + " chose: " + p1Answer + "	The computer chose: " + p2Answer + "\n" + "\n" + "The computer wins!");
  } else {
    alert("rock...paper...scissors...SHOE!!!" + "\n" + "\n" + p1Name + " chose: " + p1Answer + "	The computer chose: " + p2Answer + "\n" + "\n" + "It's a tie!");
  }

}

function twoPlayer() {

  var inputError5 = false;
  while (inputError5 == false) {
    var p1Name = prompt("Enter player 1's name:"); //gathers name 																												of both 																														players
    if (p1Name == "") {
      inputError5 = false;
      alert("No input detected. Please Retype name.")
    } else if (p1Name == null) {
      inputError5 = true;
      return;

    } else {
      inputError5 = true;
    }
  }
  var inputError6 = false;
  while (inputError6 == false) {
    var p2Name = prompt("Enter player 2's name:");

    if (p2Name == "") {
      inputError6 = false;
      alert("No input detected. Please Retype name.")
    } else if (p2Name == null) {
      inputError6 = true;
      return;

    } else {
      inputError6 = true;
    }
  }

  alert("Okay " + p1Name + " and " + p2Name + ", lets Begin! Select either rock, paper, or scissors");

  var inputError2 = false;
  while (inputError2 == false) { //checks for input Error

    p1Answer = prompt(p1Name + "'s Choice: Type rock, paper, or scissors");
    //gets player 1's Answer

    if (!Object.is(p1Answer, "rock") && !Object.is(p1Answer, "paper") && !Object.is(p1Answer, "scissors")) {

      inputError2 = false;
      alert("Input doesn't match rock, paper, or scissors. Retype Choice");
    } else {
      inputError2 = true;
    }
  }

  var inputError3 = false;
  while (inputError3 == false) { //checks for input error

    p2Answer = prompt(p2Name + "'s Choice: Type rock, paper, or scissors");
    //gets player 2's answer

    if (!Object.is(p2Answer, "rock") && !Object.is(p2Answer, "paper") && !Object.is(p2Answer, "scissors")) {

      inputError3 = false;
      alert("Input doesn't match rock, paper, or scissors. Retype Choice");
    } else {
      inputError3 = true;
    }
  }


  var result = roll(p1Answer, p2Answer);

  if (result == "1") {

    alert("rock...paper...scissors...SHOE!!!" + "\n" + p1Name + " chose: " + p1Answer + "	" + p2Name + " chose: " + p2Answer + "\n" + p1Name + " wins!");
  } else if (result == "2") {
    alert("rock...paper...scissors...SHOE!!!" + "\n" + "\n" + p1Name + " chose: " + p1Answer + "	" + p2Name + " chose: " + p2Answer + "\n" + "\n" + p2Name + " wins!");
  } else {
    alert("rock...paper...scissors...SHOE!!!" + "\n" + "\n" + p1Name + " chose: " + p1Answer + "	" + p2Name + " chose: " + p2Answer + "\n" + "\n" + "It's a tie!");
  }


}

function roll(x, y) { //method that determines who 																						wins

  if (Object.is(x, "rock") && Object.is(y, "scissors")) {
    return 1;
  } else if (Object.is(x, "scissors") && Object.is(y, "paper")) {
    return 1;
  } else if (Object.is(x, "paper") && Object.is(y, "rock")) {
    return 1;
  } else if (Object.is(y, "rock") && Object.is(x, "scissors")) {
    return 2;
  } else if (Object.is(y, "scissors") && Object.is(x, "paper")) {
    return 2;
  } else if (Object.is(y, "paper") && Object.is(x, "rock")) {
    return 2;
  }
  if (Object.is(x, y)) {
    return 3;
  }

}
