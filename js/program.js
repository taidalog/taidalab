function main() {
    $('#check_button').click(function () {
        var user_input2 = document.getElementById("nunmber_input");
        var bin = user_input2.value
        var dec = parseInt(bin, 2)

        var question = $('#question').text()

        if (dec == question) {
            $('#output').text("Right!");
        } else {
            $('#output').text("Wrong... " + bin + " is "+ dec);
        }
    });
}

$(function () {
    main();
});