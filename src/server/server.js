import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../configs/webpack/webpack.dev.config';

const app = express();


const DIST_DIR = __dirname;

const HTML_FILE = path.join(DIST_DIR, 'index.html');

if(process.env.NODE_ENV === 'prod') {
  app.use(express.static(DIST_DIR));
  app.use('*',  function(req, resp) {
    resp.sendFile(HTML_FILE);
  });
} else {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath, }));
  app.use(webpackHotMiddleware(compiler));

  app.get('/', (req, res) => {
    res.redirect('/main');
 });

  app.get('*', (req, res, next) => {
    compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
      return null;
    });
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App listening to ${port}....`); // eslint-disable-line no-console
});
