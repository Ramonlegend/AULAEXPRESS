import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});