const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
let candidateAnswers = [];

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "";
let candidateAnswer = "";
let correctAnswer = "";
let score = 1;
let points = 0;
let totals = "";

let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ", 
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
  "What is the minimum crew size for the ISS? "];
let correctAnswers = [
  "Sally Ride", 
  "true", 
  "40", 
  "Trajectory", 
  "3"];
function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  
  candidateName = input.question("What's your name? ");
}
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//  candidateAnswer = input.question(questions[0]);
//  if (candidateAnswer === correctAnswers[0]) {
//    console.log(`You answered correct!!! ${score++}`);
//  } else {
//    console.log("Sorry wrong answer");
//  }
}
function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
let numbOfQuiz = 5;
// let percentage = 
  for (let i = 0; i < questions.length; i++) {
	 let candidateAnswers = input.question(questions[i])
	if (candidateAnswers.toUpperCase() === correctAnswers[i].toUpperCase()){
		console.log(`Good job ${candidateName}! You answered correct!!!${score++}`)
    points++;
	} else {
		console.log(`Sorry wrong answer`);
	}
  }
// let points = correctAnswers;

  let grade = (points/ numbOfQuiz) * 100;
  if (grade >= 80) {
    console.log(`>>> Overall Grade : ${grade}% (${points} of 5 responses correct) <<<`);
    console.log(`>>> Status: PASSED Succesfully <<<`);
  } else {
    console.log(`>>> Overall Grade : ${grade}% (${points} of 5 responses correct) <<<`);
    console.log(`>>> Status: FAILED <<<`);
  }
  
  return grade;
}


function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Hello ${candidateName}! Welcome to the Quiz! Our first question for the quiz is: `);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};