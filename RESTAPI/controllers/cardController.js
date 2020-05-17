const db = require('mongoose');
const Card = require('../models/card');

//unrestricted
exports.getCards = (req, res) => {
    let _cards = [
        { 
            _id: 1, 
            title: 'Article 1', 
            text: 'Sit amet ipsum dolör sit amet, id mei eripuit scribentur. amet, id mei eripuit scribentur.', 
            date: '2019-08-26', 
            img: 'https://images.pexels.com/photos/2324272/pexels-photo-2324272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 
            price: '379' 
        },
        { _id: 2, title: 'Article 2', text: 'Lorem dolör sit amet ipsum dolör sit amet, id mei eripuit scribentur. amet, id mei eripuit scribentur.', date: '2019-08-26', img: 'https://images.pexels.com/photos/2289138/pexels-photo-2289138.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', price: '399' },
        { _id: 3, title: 'Article 3', text: 'Lorem dolör sit amet ipsum dolör , id mei eripuit scribentur. amet, id mei eripuit scribentur.', date: '2019-07-03', img: 'https://images.pexels.com/photos/2291591/pexels-photo-2291591.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', price: '159' },
        { _id: 4, title: 'Article 4', text: 'Lorem dolör sit  dolör sit amet, id mei eripuit scribentur. amet, id mei eripuit scribentur.', date: '2019-08-31', img: 'https://images.pexels.com/photos/2292833/pexels-photo-2292833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', price: '249' },
        { _id: 5, title: 'Article 5', text: 'Dolör sit amet ipsum dolör sit amet, id mei eripuit scribentur. amet, id mei eripuit scribentur.', date: '2019-08-29', img: 'https://images.pexels.com/photos/2292101/pexels-photo-2292101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', price: '199' },
        { _id: 6, title: 'Article 6', text: 'Lorem dolör sit amet ipsum dolör sit  eripuit scribentur. amet, id mei eripuit scribentur.', date: '2019-08-23', img: 'https://images.pexels.com/photos/2289430/pexels-photo-2289430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', price: '559' }       
    ]

    return res.status(200).json(_cards);
}

exports.getCard = (req, res) => {
    let _card = { 
        _id: 1, title: 'Boxttitel 1', text: 'Sit amet ipsum dolör sit amet, id mei eripuit scribentur. amet, id mei eripuit scribentur.', date: '1 dag sedan', img: 'https://images.pexels.com/photos/2324272/pexels-photo-2324272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', price: 'boxtitel 1' 
    }

    return res.status(200).json(_card);    
}