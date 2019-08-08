const express = require('express')
const next = require('next')
const nextI18NextMiddleware = require('next-i18next/middleware').default
const i18nextMiddleware = require("i18next-express-middleware");
const bodyParser = require("body-parser");

const nextI18next = require('./i18n')

const port = process.env.PORT || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler();

(async () => {
  await app.prepare()
  const server = express()

  server.post(
    "/static/locales/:lng/:ns.missing.json",
    bodyParser.urlencoded({ extended: false }),
    i18nextMiddleware.missingKeyHandler(nextI18next.i18n)
  );

  server.use(nextI18NextMiddleware(nextI18next))

  server.get('*', (req, res) => handle(req, res))

  await server.listen(port)
  console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
})()
