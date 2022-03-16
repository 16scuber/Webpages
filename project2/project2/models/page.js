const { DateTime } = require('luxon');
const {v4: uuidv4} = require('uuid');
const trades = [
    {
        id: '1',
        typeSelection: 'Pen',
        brand: 'Energel',
        model: 'Clena', 
        nibSize: '0.3mm',
        inkColor: 'black',
        details: "The Pentel Energel Clena is well known for its retro coloring and carnival-esque stripes. However, it is also well known for being one of the best writers that has come from the Pentel company. This pen is their peach-colored variation, featuring a 0.3mm rollerball tip, and a nice black ink. This ink dries in a very similar color to it's original writing, and is a perfect long time writer with it's extra comforatble tip. you can be assured that this pen will give you a smooth glide every time.",
        images: '/images/pens-with-blue.jpg'
    },
    { 
        id: '2',
        typeSelection: 'Pencil',
        brand: 'Ticonderoga',
        model: 'Black', 
        nibSize: '0.5mm',
        inkColor: 'black',
        details: 'The ticonderoga is well known for the authentic feel of the wood when you write with it. It is very highly recommended',
        images: '/images/pens-with-blue.jpg'
    },
    {
        id: '3',
        typeSelection: 'Pen',
        brand: 'Sharpie',
        model: 'S-Gel', 
        nibSize: '0.7mm',
        inkColor: 'black',
        details: "The Sharpie S Gel is well known for its retro coloring and carnival-esque stripes. However, it is also well known for being one of the best writers that has come from the Pentel company. This pen is their peach-colored variation, featuring a 0.3mm rollerball tip, and a nice black ink. This ink dries in a very similar color to it's original writing, and is a perfect long time writer with it's extra comforatble tip. you can be assured that this pen will give you a smooth glide every time.",
        images: '/images/pens-with-blue.jpg'
    },
    {
        id: '4',
        typeSelection: 'Pen',
        brand: 'Pilot',
        model: 'Juice', 
        nibSize: '0.38mm',
        inkColor: 'black',
        details: "The Pilot Juice is well known for its retro coloring and carnival-esque stripes. However, it is also well known for being one of the best writers that has come from the Pentel company. This pen is their peach-colored variation, featuring a 0.3mm rollerball tip, and a nice black ink. This ink dries in a very similar color to it's original writing, and is a perfect long time writer with it's extra comforatble tip. you can be assured that this pen will give you a smooth glide every time.",
        images: '/images/pens-with-blue.jpg'
    },
    {
        id: '5',
        typeSelection: 'Pencil',
        brand: 'Pacific Ark',
        model: 'Dp-05', 
        nibSize: '0.38mm',
        inkColor: 'black',
        details: "The Pacific Ark is well known for its retro coloring and carnival-esque stripes. However, it is also well known for being one of the best writers that has come from the Pentel company. This pen is their peach-colored variation, featuring a 0.3mm rollerball tip, and a nice black ink. This ink dries in a very similar color to it's original writing, and is a perfect long time writer with it's extra comforatble tip. you can be assured that this pen will give you a smooth glide every time.",
        images: '/images/pens-with-blue.jpg'
    },
    {
        id: '6',
        typeSelection: 'Pen',
        brand: 'Uniball',
        model: 'Signo', 
        nibSize: '0.38mm',
        inkColor: 'black',
        details: "The Uniball Signo is well known for its retro coloring and carnival-esque stripes. However, it is also well known for being one of the best writers that has come from the Pentel company. This pen is their peach-colored variation, featuring a 0.3mm rollerball tip, and a nice black ink. This ink dries in a very similar color to it's original writing, and is a perfect long time writer with it's extra comforatble tip. you can be assured that this pen will give you a smooth glide every time.",
        images: '/images/pens-with-blue.jpg'
    }
    
];



exports.find = () => trades;

exports.findById = id => trades.find(trade=>trade.id === id);

exports.findByCategory = typeSelection => trades.find(trade=>trade.typeSelection === typeSelection);

exports.save = function (trade) {
    trade.id = uuidv4();
    trades.push(trade);
};

exports.updateById = function(id, newTrade) {
    let trade = trades.find(trade=>trade.id === id);
    if(trade) {
        trade.typeSelection = newTrade.typeSelection;
        trade.brand = newTrade.brand;
        trade.model = newTrade.model;
        trade.nibSize = newTrade.nibSize;
        trade.inkColor = newTrade.inkColor;
        trade.details = newTrade.details;
        return true;
    } else {
        return false;
    }
}

exports.deleteById = function(id) {
    let index = trades.find(trade => trade.id === id);
    if(index !== -1) {
        trades.splice(index, 1);
        return true;
    } else {
        return false;
    }
}