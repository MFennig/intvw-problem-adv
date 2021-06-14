const cartController = require('../controllers/cart');

module.exports = (app) => {
  app.get('/cart/byid/:id', cartController.get);
};
