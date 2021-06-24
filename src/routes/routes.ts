import { Router } from "express";
import express from "express";

const app = express();
const router = Router();

router.get('/', (req, res) => {
    res.render('index.pug', {title: 'Sudoku Solver'});
});

export default router;