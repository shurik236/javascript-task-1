'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function romanNumber(number) {
	var ROMAN_NUMERALS = {50: 'L', 40: 'XL', 10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I'};
	var result = '';
	var numerals = Object.keys(ROMAN_NUMERALS).sort(function(a, b) {return b - a});
	if (number == 0) {
		return 'N';
	}
	var i;
	for (i = 0; i < numerals.length; i++) {
		while (numerals[i] <= number) {
			result += ROMAN_NUMERALS[numerals[i]];
			number -= numerals[i];
		}
	}
	return result;
}

function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var hours = parseInt(time.split(':')[0], 10);
    var minutes = parseInt(time.split(':')[1], 10);
    var hoursCheck = !isNaN(hours) && hours < 24 && hours >= 0;
    var minutesCheck = !isNaN(minutes) && minutes >= 0 && minutes < 60;
    if (hoursCheck && minutesCheck) {
    	return romanNumber(Number(hours)) + ':' + romanNumber(Number(minutes));
    }
    else {
    	throw new TypeError('Неверное время');
    }
}

module.exports = romanTime;
