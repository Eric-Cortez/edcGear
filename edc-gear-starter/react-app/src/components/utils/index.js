export const calTimeFromMil = (milSec, type) => {
    const sec = 1000
    const min = 60 * sec
    const hour = 60 * min
    // const day = hour * 24

    const currSec = Math.floor((milSec % min) / sec)
    const currMin = Math.floor((milSec % hour) / min)
    const currHour = Math.floor((milSec / hour))
    const currDay = Math.floor(currHour / 24)


    if (type === "short") {
        if (currSec <= 60 && currMin === 0 && currHour === 0 && currDay === 0) return `< 1min`;
        if (currMin <= 60 && currHour === 0 && currDay === 0) return `${currMin}m`;
        if (currHour <= 60 && currDay === 0) return `${currHour}h`;
        if (currDay >= 2 || currHour > 24) return `${currDay}d`;
    } else {
        if (currSec === 1 && currMin === 0 && currHour === 0 && currDay === 0) return `${currSec} SECOND AGO`;
        if (currSec <= 60 && currMin === 0 && currHour === 0 && currDay === 0) return `${currSec} SECONDS AGO`;
        if (currMin === 1 && currHour === 0 && currDay === 0) return `${currMin} MINUTE AGO`;
        if (currMin <= 60 && currHour === 0 && currDay === 0) return `${currMin} MINUTES AGO`;
        if (currHour === 1 && currDay === 0) return `${currHour} HOUR AGO`;
        if (currHour <= 60 && currDay === 0) return `${currHour} HOURS AGO`;
        if (currHour > 24) return `${currDay} DAY AGO`
        if (currDay >= 2) return `${currDay} DAYS AGO`;
    }
    // return `${currDay}day ${currHour}hour ${currMin}min ${currSec}sec`
}   
