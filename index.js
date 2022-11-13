// listening for the click event
$('.btn').on('click', function() {
    var buttonInnerHTML = this.innerHTML;
    $(this).addClass('pressed');
    setTimeout(function() {
        $('.btn').removeClass('pressed');
    }, 100);
   
    $('.num').append(buttonInnerHTML);
    
});

// listening for the keypress event
$(document).on('keypress', function(event) {
    var key = event.key;
    $('.num').append(key);

});

var numOfButtons = document.querySelectorAll('.operator').length;
for (var i = 0; i < numOfButtons; i++) {
    $('.operator')[i].addEventListener('click', function() {
        var buttonInnerHTML = this.innerHTML;
        $(this).addClass('pressed');
        setTimeout(function() {
            $('.operator').removeClass('pressed');
        }, 100);
    
        $('.num').append(buttonInnerHTML);
    });
}

$('.clear').on('click', function() {
    $(this).addClass('pressed');
    setTimeout(function() {
        $('.clear').removeClass('pressed');
    }, 100);

    $('.num').empty();

});

$('.equal').on('click', function() {
    
    var result = eval($('.num').text());
    $('.num').text(result);

    $(this).addClass('pressed');
    setTimeout(function() {
        $('.equal').removeClass('pressed');
    }, 100);
});

