# EPD
Convert time formats to milliseconds (Extended version)

# Examples
```js
import parser from "extended-parse-duration";

parser("30s"); // 30000
parser("45 seconds"); // 45000
parser("00:25"); // 25000
parser(55); // 55000
```

# Supports
- Time with colon notation (dd:hh:mm:ss, hh:mm:ss, mm:ss, m:ss)
- [ms](https://npmjs.com/ms) format.
- [Human readable](https://npmjs.com/parse-duration) format.

# License
[MIT](LICENSE)