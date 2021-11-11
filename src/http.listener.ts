import { httpListener } from "@marblejs/http";
import { bodyParser$ } from "@marblejs/middleware-body";
import { logger$ } from "@marblejs/middleware-logger";
import { api$ } from "./api.effects";

const middlewares = [logger$(), bodyParser$()];

const effects = [api$];

export const listener = httpListener({
  middlewares,
  effects,
});
