const express = require('express');
const config = require('./server.config');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  return next();
});

app.get(config.routes.healthCheck, (_, res) =>
  res.status(200).send(config.healthCheckMessage),
);

app.use(
  config.routes.static,
  express.static(config.paths.static, {
    maxage: config.staticAssetsCachingAge,
  }),
);

app.use(config.routes.all, (req, res) => res.sendFile(config.paths.main));

app.listen(config.port, err => {
  if (err) throw err;
  console.log(`Server is running on port: ${config.port}`);
});
