let checkAnswer answer hint_format last_answers =
    (document.getElementById "errorArea").innerHTML <- errorMessage
    if errorMessage then
    let binaryDigit = 8
    printfn "%A" taggedBin
let initPowerOfTwo1 () =


@(
    '    let numberInput = document.getElementById("numberInput")',
    '    let taggedBin = colorLeadingZero(zeroPaddedBin)',
    '    let userInput = escapeHtml(numberInput.value)',
    '    let initIndexNumber = getRandomBetween(0, 7)',
    '    let historyMessage = concatinateStrings(currentHistoryMessage, outputArea.innerHTML)',
    '    let currentHistoryMessage = newHistory((userInputToDestRadix = answer), taggedBin, destinationRadix, spacePaddedDec, sourceRadix)',
    '    let zeroPaddedBin = userInput.padStart(binaryDigit, "0")',
    '    let hint = formatString(hintFormat, [initAnswer, initIndexNumber])',
    '    nextAnswer = Math.pow(2, nextIndexNumber)',
    '    (document.getElementById "submitButton").onclick <- function() { checkAnswer(initAnswer, hintFormat, [initAnswer]); return false;  }',
    '    document.getElementById("errorArea").innerHTML = errorMessage'
)
