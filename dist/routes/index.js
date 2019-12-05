"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get('/', (_req, res, _next) => {
    res.render('index.ejs', { title: 'Express' });
});
exports.default = router;
