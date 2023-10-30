interface DateTimeOptions {
  weekday?: "long" | "short" | "narrow"
  era?: "long" | "short" | "narrow"
  year?: "numeric" | "2-digit"
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow"
  day?: "numeric" | "2-digit"
  dayPeriod?: "long" | "short" | "narrow"
  hour?: "numeric" | "2-digit"
  minute?: "numeric" | "2-digit"
  second?: "numeric" | "2-digit"
  fractionalSecondDigits?: 1 | 2 | 3
  timeZoneName?: "long" | "short" | "shortOffset" | "longOffset" | "shortGeneric" | "longGeneric"
  formatMatcher?: "basic" | "best fit"
}

const timer = 'development mode'
const date = new Date();

const optionsFormat: DateTimeOptions = {
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