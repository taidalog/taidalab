function main() {
    $('#check_button').click(function () {
        const sourceRadix = 10;
        const destinationRadix = 2;

        const questionBox = $('#question');
        const question = questionBox.text();

        const nunmberBox = document.getElementById("nunmber_input");
        const bin = nunmberBox.value;
        const dec = parseInt(bin, destinationRadix);

        if (dec == question) {
            const message = "Correct!";
            $('#output').text(message);
            const nextNumber = getRandomByte();
            questionBox.value = nextNumber;
        } else {
            const message = "Wrong...\<br\>" + bin + "<sub>(" + destinationRadix + ")</sub> is " + dec + "<sub>(" + sourceRadix + ")</sub>.";
            $('#output').text(message);
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

$(function () {
    $('#question').text(getRandomByte());
    main();
});