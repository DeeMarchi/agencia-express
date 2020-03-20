const homeController = {

    index: (req, res) => {
        let imagens = [
            '/images/banner-0.jpg',
            '/images/banner-1.jpg',
            '/images/banner-2.jpg',
        ];

        res.render('index', { title: 'CS Learning', listaDeImagens: imagens});
    },

};

module.exports = homeController;