const mongoose = require('mongoose');

const fs = require('fs');

const CategoryModel = require('../model/Category');

function insertCategory() {
    fs.readFile('./data_json/category.json', 'utf8', (err, data) => {
        if (err) {
            throw err
        }
        data = JSON.parse(data)
        data.RECORDS.map((value, index) => {
            CategoryModel.create(value).then((err, data) => {
                console.log('save', index);
            })
        })
    })
}
module.exports = insertCategory