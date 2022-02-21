//scrool para seções

    let navBtn = $('.nav-item');

    let bannerSection = $('#mainSlider');
    let aboutSection = $('#about-area');
    let servicesSection = $('#services-area');
    let teamSection = $('#team-area');
    let contactSection = $('#contact-area');

    let scrolTO = '';

    $(navBtn).click(function() {
        let btnId = $(this).attr('id');

        console.log(btnId)

        if(btnId == 'about-menu'){
            scrolTO = aboutSection
        }else if(btnId == 'services-menu'){
            scrolTO = servicesSection
        }else if(btnId == 'time-menu' ){
            scrolTO = teamSection
        }else if(btnId == 'contact-menu'){
            scrolTO = contactSection
        }else{
            scrolTO = bannerSection;
        }

        $([document.documentElement , document.body]).animate({
            scrollTop: $(scrolTO).offset().top - 50
        },1500);
    });

  

