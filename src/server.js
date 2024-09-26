import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();
// se caso a porta não for definida, a porta 3000 será utilizada
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});