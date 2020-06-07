const express = require('express');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');

// App initialization
const app = express();
const port = process.env.PORT || process.env.SMARTBRAIN_PORT || 5004;

if (process.env.NODE_ENV === 'production') {
  app.use(compression());
  app.use(enforce.HTTPS({ trustProtoHeader: true }));

  // Serving static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});
