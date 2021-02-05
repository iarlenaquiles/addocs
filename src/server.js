const config = require('config');
const app = require('./app');

const PORT = config.get('App.port') || 4200;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
