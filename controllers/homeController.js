const homeController = {

    index: (req, res) => {
        let imagens = [
            '/images/banner-0.jpg',
            '/images/banner-1.jpg',
            '/images/banner-2.jpg',
        ];

        let servicos = [
            { nome: 'Programação', imagem: '/images/undraw_code_thinking_1jeh.svg'},
            { nome: 'Arquitetura de computadores', imagem: '/images/undraw_abstract_x68e.svg'},
            { nome: 'Redes', imagem: '/images/undraw_connected_world_wuay.svg'},
        ];

        res.render('index', { title: 'CS Learning', listaDeImagens: imagens, listaServicos: servicos });
    },

};

module.exports = homeController;