import ms from "ms";
import parseStringDuration from "parse-duration";

const colonRegex = new RegExp(/(0?\d|1[0-9]|2[0-3]):([0-5]?\d)(:([0-5]?\d)(:([0-5]?\d))?)?/);
const digitsOnly = new RegExp(/^\d{1,}$/);

export default function parser(val: string | number) {
  if (!val || (typeof val !== "string" && typeof val !== "number")) return NaN;

  val = String(val);

  if (val.match(colonRegex)) {
    const colony = val.split(":").map(val => parseInt(val));

    switch (colony.length) {
      case 4: {
        const [days, hours, minutes, seconds] = colony;
        return (days * ms("1d")) + (hours * ms("1h")) + (minutes * ms("1m")) + (seconds * ms("1s"));
      };

      case 3: {
        const [hours, minutes, seconds] = colony;
        return (hours * ms("1h")) + (minutes * ms("1m")) + (seconds * ms("1s"));
      }

      case 2: {
        const [minutes, seconds] = colony;
        return (minutes * ms("1m")) + (seconds * ms("1s"));
      };

      default: return NaN;
    };
  };

  let time = ms(digitsOnly.test(val) ? val + "s" : val);

  if (!isNaN(time)) {
    return time || NaN;
  } else {
    time = parseStringDuration(val);
    if (!isNaN(time)) {
      return time || NaN;
    } else {
      return NaN;
    };
  };
};