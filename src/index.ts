import { createServer } from "@marblejs/http";
import { IO } from "fp-ts/lib/IO";
import { listener } from "./http.listener";

const server = createServer({
  port: 1337,
  hostname: "127.0.0.1",
  listener,
});

const main: IO<void> = async () => await (await server)();

main();
