// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat

const timer = 'development mode'

const date = new Date();

const optionsFormat = {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

const dateFormat = new Intl.DateTimeFormat('nu', optionsFormat).format(
  date
);

const dateFormatArray = new Intl.DateTimeFormat('nu', optionsFormat).formatToParts(
  date
);

export { timer, dateFormat, dateFormatArray };