$(document).ready(function() {
    $('.contacts').on('click', function(event) {
        event.stopPropagation();
        $('.contacts__menu').toggle();
    });

    $(document).on('click', function() {
        $('.contacts__menu').hide();
    });

    $('.contacts__menu').on('click', function(event) {
        event.stopPropagation();
    });
});
