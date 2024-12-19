$(document).ready(function () {
    // Validate form on submit
    $('#ticket-form').submit(function (event) {
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var phone = $('#phone').val().trim();
        var concert = $('#concert').val().trim();
        var seats = $('#seats').val().trim();

        if (name === '' || email === '' || phone === '' || seats === '') {
            alert("Please fill in all the fields.");
            event.preventDefault();
        }
    });
})