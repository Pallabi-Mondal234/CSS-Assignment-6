$(document).ready(function(){
    $('.faq-title').click(function(){
        $('.faq-item').not($(this).parent()).removeClass('active').find('.faq-content').slideUp();
        $('.faq-item').not($(this).parent()).find('span').text('+');
        
        $(this).parent().toggleClass('active');
        $(this).next('.faq-content').slideToggle();
        $(this).find('span').text($(this).parent().hasClass('active') ? '-' : '+');
    });
});