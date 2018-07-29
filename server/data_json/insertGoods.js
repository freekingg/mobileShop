const mongoose = require('mongoose');

const fs = require('fs');

const GoodsModel = require('../model/Good');

function insertGood() {
    fs.readFile('./data_json/newGoods.json', 'utf8', (err, data) => {
        if (err) {
            throw err
        }
        data = JSON.parse(data)
        data.map((value, index) => {
            GoodsModel.create(value).then((err, data) => {
                console.log('save', index);
            })
        })
    })
}
module.exports = insertGood