// This script will be executed once at the start of each batch of iterations.
// You can place any setup or initialization code you want here.
// 
// Available globals:
//      ALL_WORDS - The list of all possible words valid for guessing.
//      ITERATIONS - The number of iterations that will run.

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

// The following additional functions can be optionally defined to perform work
// at various stages:
//  pre_game(game) - Called before each iteration.
//      game: Which iteration this is, starting at 1 for the first iteration
//  post_game(game, attempts) - Called after each iteration has finished.
//      game: Which iteration this is, starting at 1 for the first iteration
//      attempts: The number of guesses it took to guess the correct word. The
//          value 7 is used to indicate that the word was not guessed.
//  post_run(results) - Called after the overall run has finished.
//      results: An array containing the number of iterations that completed
//          in the index number of guesses. For example, results[0] contains the
//          number of iterations where the word was guessed on the first try,
//          results[1] is the number where it was guessed on the second try, etc.