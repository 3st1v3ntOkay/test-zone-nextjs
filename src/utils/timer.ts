// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat

const timer = 'development mode'

const date = new Date();

const dateFormatUser = new Intl.DateTimeFormat(navigator.language).format(date);

const optionsFormat = {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

// const dateFormat = new Intl.DateTimeFormat('nu', optionsFormat).formatToParts(
//   date
// );

export { timer, dateFormatUser };