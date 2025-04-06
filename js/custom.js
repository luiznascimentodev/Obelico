(function ($) {
    // MENU: Fecha o menu ao clicar em um link
    $('.navbar-collapse a').on('click', function () {
        $(".navbar-collapse").collapse('hide');
    });

    // CUSTOM LINK: Rolagem suave para seções
    $('.smoothscroll').on('click', function (e) {
        e.preventDefault();
        const el = $(this).attr('href');
        const elWrapped = $(el);
        const headerHeight = $('.navbar').height();

        scrollToDiv(elWrapped, headerHeight);

        function scrollToDiv(element, navHeight) {
            const offset = element.offset();
            const totalScroll = offset.top - navHeight;

            $('html, body').animate({
                scrollTop: totalScroll
            }, 300);
        }
    });

    // SCROLL: Ativa elementos visíveis e ajusta a linha de progresso da timeline
    $(window).on('scroll', function () {
        const timelineItems = $('#vertical-scrollable-timeline li');
        const mainTimelineContainer = $('#vertical-scrollable-timeline')[0];
        const mainTimelineContainerBottom = mainTimelineContainer.getBoundingClientRect().bottom - $(window).height() * 0.5;

        timelineItems.each(function () {
            const elem = $(this);
            const docViewTop = $(window).scrollTop();
            const docViewBottom = docViewTop + $(window).height();
            const elemTop = elem.offset().top;
            const elemBottom = elemTop + $(window).height() * 0.5;

            if (elemBottom <= docViewBottom && elemTop >= docViewTop) {
                elem.addClass('active');
            } else {
                elem.removeClass('active');
            }
        });

        $(mainTimelineContainer).find('.inner').css('height', `${mainTimelineContainerBottom}px`);
    });

    // BACK TO TOP BUTTON: Mostra/esconde e rola para o topo
    $(document).ready(function () {
        const backToTopBtn = $('.back-to-top-btn');

        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 300) {
                backToTopBtn.fadeIn();
            } else {
                backToTopBtn.fadeOut();
            }
        });

        backToTopBtn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 300);
        });
    });
})(jQuery);


