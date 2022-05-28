function main() {
    $('#check_button').click(function () {
        const sourceRadix = 10;
        const destinationRadix = 2;

        const questionBox = $('#question');
        const question = questionBox.text();
        console.log(question);

        const nunmberBox = document.getElementById("nunmber_input");
        const bin = nunmberBox.value;
        const dec = parseInt(bin, destinationRadix);
        console.log(bin);
        console.log(dec);

        if (dec == question) {
            const message = "Correct!";
            $('#output').text(message);
            console.log(message);
            const nextNumber = getRandomByte();
            questionBox.value = nextNumber;
            console.log(nextNumber);
        } else {
            const message = "Wrong...\<br\>" + bin + "<sub>(" + destinationRadix + ")</sub> is " + dec + "<sub>(" + sourceRadix + ")</sub>.";
            $('#output').text(message);
            console.log(message);
        }


        if (dec == question) {
            questionBox.text(getRandomByte());
        }
        
        nunmberBox.focus();
    });
}

function getRandomByte() {
    return Math.floor(Math.random() * 256);
}

function concatinateStrings (new_string, existing_string) {
    if (new_string == "" || new_string == null) {
        return new_string
    } else {
        return new_string + "<br>" + existing_string
    }
}

$(function () {
    $('#question').text(getRandomByte());
    main();
});