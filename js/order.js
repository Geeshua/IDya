$(document).ready(function() {
    $('#orderForm').on('submit', function(event) {
        event.preventDefault();

        const name = $('#name').val();
        const email = $('#email').val();
        const order = $('#order').val();

        const data = {
            name: name,
            email: email,
            order: order
        };

        $.ajax({
            url: 'http://localhost:3000/send-message', 
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function(response) {
                alert('Ваш заказ отправлен!');
                $('#orderForm')[0].reset();
            },
            error: function(error) {
                console.error('Error:', error);
                alert('Ошибка при отправке заказа. Попробуйте еще раз.');
            }
        });
    });
});
