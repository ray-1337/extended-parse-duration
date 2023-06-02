import test from "ava";
import parser from "./lib/index";
import ms from "ms";

test("parse dd:hh:mm:ss", (t) => {
  t.is(parser("01:00:00:00") === ms("1d"), true);
});

test("parse hh:mm:ss", (t) => {
  t.is(parser("12:00:00") === ms("12h"), true);
});

test("parse mm:ss", (t) => {
  t.is(parser("03:30") === ms("3.5m"), true);
});

test("parse ss", (t) => {
  t.is(parser("45") === ms("45s"), true);
});

test("parse stringified duration", (t) => {
  t.is(parser("3 minutes") === ms("3m"), true);
});

test("parse raw ms", (t) => {
  t.is(parser("5m") === ms("5m"), true);
});

test("parse invalid time", (t) => {
  t.is(isNaN(parser("uwu owo")), true);
});

test("parse solid number", (t) => {
  t.is(parser(45) === ms("45s"), true);
});