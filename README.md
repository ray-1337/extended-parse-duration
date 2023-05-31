# EPD
Convert extended time formats to milliseconds.

# Examples
```js
import parser from "extended-parse-duration";

parser("30s"); // 30000
parser("45 seconds"); // 45000
parser("00:25"); // 25000
parser(55); // 55000
```

# Features
- Works on [human readable duration](https://npmjs.com/parse-duration).
- Works on raw format of [ms](https://npmjs.com/ms).

# License
[MIT](LICENSE)