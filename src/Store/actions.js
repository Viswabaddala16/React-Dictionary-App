export const ADD_WORD_TO_HISTORY = "ADD_WORD_TO_HISTORY";

export function addWordToHistory(word) {
    return{
        type : ADD_WORD_TO_HISTORY,
        payload : word
    };
}