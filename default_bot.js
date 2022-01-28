// This script will be executed once at the start of each batch of iterations.
// You can place any setup or initialization code you want here.


// make_guess will be called by the game runner for each guess the bot needs
// to make.
//  attempt - This is the number of the attempt, starting at 1.
//  guesses - An array containing all of the guesses made so far.
//  result - A string indicating the result of the previous guess. Each
//      character indicates the result of the corresponding letter from
//      the guess.
//        '.' - The letter does not appear anywhere in the target word.
//        'Y' - The letter appears in the target word, but not at this position.
//        'G' - The letter appears in the target word at this position.
// On the first attempt, guesses will be empty and result will be undefined.
// The desired guess should be returned as a string from make_guess. The result
// will be converted to uppercase so case does not matter.
function make_guess(attempt, guesses, result) {
    throw new Error("Not implemented!");
}