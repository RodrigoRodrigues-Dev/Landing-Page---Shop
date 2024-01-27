document.addEventListener('DOMContentLoaded', () => {
    const promotionDuration = new Date("jan 27, 2024 00:00:00");
    const timeStampPromotion = promotionDuration.getTime();

    const countsHours = setInterval(() => {
        const now = new Date();
        const timeStampNow = now.getTime();

        const eventTime = timeStampPromotion - timeStampNow;

        const hoursUntilTheEvent = Math.floor((eventTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesUntilTheEvent = Math.floor((eventTime % (1000 * 60 * 60)) / (1000 * 60));
        const secondsUntilTheEvent = Math.floor((eventTime % (1000 * 60)) / 1000);

        document.querySelector('#hoursEvents').innerHTML = hoursUntilTheEvent;
        document.querySelector('#minutesEvents').innerHTML = minutesUntilTheEvent;
        document.querySelector('#secondsEvents').innerHTML = secondsUntilTheEvent;

        if(eventTime < 0) {
            clearInterval(countsHours);

            document.querySelector('.hero__list').classList.remove('hero__list--is-active')
            document.querySelector('.soldOff').classList.add('soldOff--is-active')
        }


    }, 1000);
});
