import express from "express";
import createWebMiddleware from "@lessstack/express-middleware-web";
import { PORT } from "./constants.js";

const app = express();
app.use(
  createWebMiddleware({
    clientPath: "@lessstack/web-client-template",
    getProps: (req) => ({
      url: req.url,
      baseUrl: req.baseUrl,
    }),
  }),
);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${PORT}`);
});
