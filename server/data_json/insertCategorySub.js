const mongoose = require('mongoose');

const fs = require('fs');

const CategorySubModel = require('../model/CategorySub');

function insertCategorySub() {
    fs.readFile('./data_json/category_sub.json', 'utf8', (err, data) => {
        if (err) {
            throw err
        }
        data = JSON.parse(data)
        data.RECORDS.map((value, index) => {
            CategorySubModel.create(value).then((err, data) => {
                console.log('save', index);
            })
        })
    })
}
module.exports = insertCategorySub