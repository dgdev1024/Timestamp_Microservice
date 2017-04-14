///
/// \file   timestamp.js
/// \brief  Our function for generating our timestamp.
///

// A lookup table for our months, for use with "Date.getMonth()".
const Months = [
    "Janurary",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

module.exports = (str) => {
    // When creating our date object, check to see if a Unix
    // timestamp was passed in by attempting to parse the string as
    // an integer and seeing if it doesn't return Not A Number.
    let date = null;
    if (isNaN(parseInt(str)) === true) {
        date = new Date(str);
    } else {
        date = new Date(parseInt(str));
    }

    // Check to see if the date object created is valid. If not, then
    // return null.
    if (isNaN(date.getTime()) === true) {
        return {
            natural: null,
            unix: null
        };
    }

    // Parse the date's month, date, and year to form our natural date, and
    // place the UNIX time in, too.
    return {
        natural: `${Months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`,
        unix: date.getTime()
    };
};