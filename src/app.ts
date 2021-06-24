import * as dotenv from "dotenv";
import * as pug from 'pug';
import express from "express";
import cors from "cors";
import helmet from "helmet";
import routes from './routes';

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
});

module.exports = app;