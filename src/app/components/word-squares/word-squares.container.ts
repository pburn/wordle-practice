import { createElement, FunctionComponent, ReactElement, useState } from "react";
import { WordSquaresRender, WordSquaresRenderProps } from "./word-squares.render";

const MAX_WORD_LENGTH = 5;
const ENTER_KEY = 'Enter';
const BACKSPACE_KEY = 'Backspace';

export const WordSquares: FunctionComponent<{}> = (): ReactElement => {
    const [capturedString, setCapturedString] = useState<string>('');
    const backgroundColor : any[] = [];

    const wordOfTheDay = 'stamp';

    const stringCharacterMap = (string: string) => {
        let charMap = new Map<string, number>()

        for (let char of string) {
            const charCountInMap = charMap.get(char);
            if (!charCountInMap) {      // if the character isn't in charMap
                charMap.set(char, 1)        // initialize it with a value of 1
            } else {
                charMap.set(char, charCountInMap + 1);
            }
        }

        return charMap
    } 

    document.addEventListener('keyup', function(event) {
        const eventKey = event.key;
        const captureLength = capturedString.length;

        if (eventKey === ENTER_KEY) {
            // check if real word
            
            const wordMap = stringCharacterMap(wordOfTheDay);
            console.log('capturedWord', capturedString)

            Array.from({length: MAX_WORD_LENGTH}).map((o, i) => {
                if (capturedString[i] === wordOfTheDay[i]) {
                    backgroundColor[i] = 'green';
                    const numberInMap = wordMap.get(capturedString[i]);
                    if (numberInMap) {
                        wordMap.set(capturedString[i], numberInMap - 1);
                    }
                }
            })

            Array.from({length: MAX_WORD_LENGTH}).map((o, i) => {
                const numberInMap = wordMap.get(capturedString[i]);
                if (numberInMap) {
                    backgroundColor[i] = 'yellow';
                    wordMap.set(capturedString[i], numberInMap - 1);
                } else {
                    backgroundColor[i] = 'grey';
                }
            })

            console.log(backgroundColor);

            // iterate through the word of the day
            // Array.from({length: MAX_WORD_LENGTH}).map((o, wordOfTheDayI) => {
            //     let backgroundColor = 'grey';

            //     const wordOfTheDayLetter = wordOfTheDay[wordOfTheDayI];

            //     // iterate through the captured word
            //     Array.from({length: MAX_WORD_LENGTH}).map((o, capturedWordI : number) => {
            //         const  capturedLetter = capturedString[capturedWordI];

            //         if (wordOfTheDayLetter === capturedLetter) {
            //             // remove verified letter from word of the day data object
            //             const numberInMap = wordMap.get(wordOfTheDayLetter);
            //             if (numberInMap) {
            //                 wordMap.set(wordOfTheDayLetter, numberInMap - 1);

            //                 backgroundColor = wordOfTheDayI === capturedWordI ? 'green' : 'yellow';
            //             }
            //         }
            //     })

            //     console.log('backgroundColor', wordOfTheDayI, backgroundColor);
            // })



        } else if (eventKey === BACKSPACE_KEY) {
            setCapturedString(capturedString.substring(0, captureLength - 1));
        } else if (captureLength < MAX_WORD_LENGTH) {
            setCapturedString(`${capturedString}${event.key}`);
        }


    })

    const props : WordSquaresRenderProps = {
        capturedString,
        maxLength: MAX_WORD_LENGTH,
    }

    return createElement(WordSquaresRender, props);
}