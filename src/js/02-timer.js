// Opisany w dokumentacji
import flatpickr from 'flatpickr';
// Dodatkowy import stylów
import 'flatpickr/dist/flatpickr.min.css';

function flatpickr(selector, options) {}

const date = new Date();

console.log(date);
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

console.log(date.toString());
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

const teamMeetingDate = new Date('March 16, 2030');
console.log(teamMeetingDate);
// "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"

const preciseTeamMeetingDate = new Date('March 16, 2030 14:25:00');
console.log(preciseTeamMeetingDate);
// "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"
