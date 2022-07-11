var express = require('express');
var router = express.Router();
const userService = require('../service/user')

router.get("/username", async (req, res) => {
    try {
        console.log(req.query);
        if (req.query && req.query.name) {
            const userName = req.query.name
            const result = await userService.getUserName(userName);
            return res.status(200).send(result);
        } else {
            throw new Error('Name can not be empty, null or undefined');
        }
    } catch (err) {
        console.log(err);
       return res.status(500).send(err.message);
    }
});

module.exports = router;