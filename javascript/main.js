$(document).ready(function() {
    console.log('barba')
    $('.roadmap__input').on('click', function() {
        $('.roadmap__input').toggleClass('roadmap__input--active ');
        $('.event-holder').toggle();
    })

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        var offset = $($(this).attr('href')).offset().top
        console.log(offset)
        $('html, body').animate({
            scrollTop: offset
        }, offset / 10 * 4, 'linear');
    });    
})