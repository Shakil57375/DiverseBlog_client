export const getDateDifferenceFromNow = (fromDate) => {
    let difference = new Date().getTime() - new Date(fromDate).getTime();

    difference = difference / (1000 * 3600 * 24); 
    let dayDifference = Math.floor(difference);
    difference = difference - dayDifference;

    let hourDifference = Math.floor(difference * 24);
    difference = difference * 24 - hourDifference;

    let minuteDifference = Math.floor(difference * 60); 
    difference = difference * 60 - minuteDifference; difference

    let message = '';

    if (dayDifference > 0) {
        message = `${dayDifference} day`;
        if (dayDifference > 1) {
            message += 's';
        }
    }

    if (hourDifference > 0) {
        message = message
            ? `${message} ${hourDifference} hour`
            : `${hourDifference} hour`;
        if (hourDifference > 1) {
            message += 's';
        }
    }

    if (minuteDifference > 0) {
        message = message
            ? `${message} ${minuteDifference} minute`
            : `${minuteDifference} minute`;
        if (minuteDifference > 1) {
            message += 's';
        }
    }

   

    return message;
};
