import express from '../../node_modules/express';
import bodyParser from 'body-parser';
import ProductsRoutes from './server/routes/ProductsRoutes';
import TablesRoutes from './server/routes/TablesRoutes';
import OrdersRoutes from './server/routes/OrdersRoutes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.use('./api/Products', ProductsRoutes);
app.use('./api/Tables', TablesRoutes)
app.use('./api/Orders', OrdersRoutes)

// quando recebe uma rota não listada
app.get('*', (req, res) => res.status(200).send({
  message: 'Boas-vindas à API!',
}));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${port}`);
});

module.exports = app