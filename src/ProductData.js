module.exports = {
    init: function () {
        localStorage.clear();
        localStorage.setItem('product', JSON.stringify([
            {
                id: '01',
                name: 'Scotch.io Signature Lager',
                image: 'scotch-beer.png',
                inventory: 5,
                description: 'The finest lager money can buy. Hints of keyboard aerosol, with a whiff of iKlear wipes on the nose. If you pass out while drinking this beverage, Chris Sevilleja personally tucks you in.',
                price: 4.99
            },
            {
                id: '02',
                name: 'Pickled Chicken Feet',
                image: 'chan_ga.png',
                inventory: 0,
                description: 'When to serve your pickled products? They are best straight out of the refrigerator as cold appetizers. Since they have been infused with alcohol, the pickled items pair well with a variety of sakes and beers.',
                price: 4.02
            },
            {
                id: '03',
                name: 'Mooncake',
                image: 'banh_trung_thu.png',
                inventory: 10,
                description: 'The Top 10 mooncake flavors that most Chinese people like now include some Western tastes, like chocolate and ice cream: photos, recipes, and brands.',
                price: 3.55
            },
            {
                id: '04',
                name: 'Jambon',
                image: 'cha_bong.png',
                inventory: 5,
                description: 'The Top 10 mooncake flavors that most Chinese people like now include some Western tastes, like chocolate and ice cream: photos, recipes, and brands.',
                price: 3.05
            },
            {
                id: '05',
                name: 'Melysa Mooncake',
                image: 'banh_melysa.png',
                inventory: 10,
                description: 'The Top 10 mooncake flavors that most Chinese people like now include some Western tastes, like chocolate and ice cream: photos, recipes, and brands.',
                price: 2.55
            }
        ]));
    }
};