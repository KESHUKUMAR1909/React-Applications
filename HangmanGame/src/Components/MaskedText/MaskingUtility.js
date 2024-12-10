export function getMaskedStrings(originalWord,guessedLetters){
    guessedLetters = guessedLetters.map(letter=>letter.toUpperCase());
    const guessedLettersSet = new Set(guessedLetters);

    const result= originalWord.toUpperCase().split("").map(char=>{
        if(guessedLettersSet.has(char)){
            return char;
        }else{
            return "_"
        }
    });
    return result;
}

// original word {the word which is given as inout and is expected to be guessed}
//guessedLetters{----------------------}