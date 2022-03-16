const model = require('../models/page');

exports.trades = (req, res) => {
    let trades = model.find();
    res.render('./page/trades', {trades});
};

exports.show = (req, res, next) => {
    let id = req.params.id;
    let trade = model.findById(id);
    if(trade) {
        res.render('./page/show', {trade});
    } else {
        let err = new Error('Cannot find a trade with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.new = (req, res) => {
    res.render('./page/new');
};

exports.create = (req, res) => {
    //res.send('Created a new story');
    let trade = req.body;
    model.save(trade);
    res.redirect('/trades');
};

exports.edit =  (req, res, next) => {
    let id = req.params.id;
    let trade = model.findById(id);
    if(trade) {
        res.render('./page/edit', {trade});
    } else{
    let err = new Error('Cannot find a trade with id ' + id);
    err.status = 404;
    next(err);
    }
};

exports.update =  (req, res, next) => {
    let trade = req.body;
    let id = req.params.id;

    if (model.updateById(id, trade)) {
        res.redirect('/trades/' + id);
    } else {
        let err = new Error('Cannot find a trade with id ' + id);
    err.status = 404;
    next(err);
    }
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    if(model.deleteById(id))
        res.redirect('/trades');
    else    {
    let err = new Error('Cannot find a story with id ' + id);
    err.status = 404;
    next(err);
    }
};
