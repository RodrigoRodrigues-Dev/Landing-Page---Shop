document.addEventListener("DOMContentLoaded", ()=>{
    const promotionDuration = new Date("jan 28, 2024 00:00:00");
    const timeStampPromotion = promotionDuration.getTime();
    const countsHours = setInterval(()=>{
        const now = new Date();
        const timeStampNow = now.getTime();
        const eventTime = timeStampPromotion - timeStampNow;
        const hoursUntilTheEvent = Math.floor(eventTime % 86400000 / 3600000);
        const minutesUntilTheEvent = Math.floor(eventTime % 3600000 / 60000);
        const secondsUntilTheEvent = Math.floor(eventTime % 60000 / 1000);
        document.querySelector("#hoursEvents").innerHTML = hoursUntilTheEvent;
        document.querySelector("#minutesEvents").innerHTML = minutesUntilTheEvent;
        document.querySelector("#secondsEvents").innerHTML = secondsUntilTheEvent;
        if (eventTime < 0) {
            clearInterval(countsHours);
            document.querySelector(".hero__list").classList.remove("hero__list--is-active");
            document.querySelector(".soldOff").classList.add("soldOff--is-active");
        }
    }, 1000);
});

//# sourceMappingURL=index.f75de5e1.js.map
