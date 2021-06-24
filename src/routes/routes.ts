import { Router } from "express";
import express from "express";
import path from "path";

const app = express();
const router = Router();

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

router.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
});

export default router;