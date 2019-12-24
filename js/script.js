$(function() {
    $('h1 span').on('click', function() {
        $('input[type="text"]').fadeToggle();
    });

    // Grabbing the data from JSONPlaceholder API
    $.getJSON('https://jsonplaceholder.typicode.com/todos?_limit=4', function(todos) {
        $.map(todos, function(todo) {
            appendTodo(todo.title);
        });
    });
    $('input[type="text"]').on('keypress', function(e) {
        if (e.keyCode === 13 && $(this).val().length > 0) {
            appendTodo($(this).val());
            $(this).val('');
        }
    });

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('done');
    });

    $('ul').on('click', 'span', function(e) {
        $(this).parent().fadeOut(function() {
            $(this).remove();
        });
        e.stopPropagation();
    });



    // FUNCTIONS
    function appendTodo(todo) {
        $('<li><span><i class="fas fa-trash"></i></span> ' + todo + '</li>').appendTo('ul');
    }
});