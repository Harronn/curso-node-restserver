const { response } = require ('express');


const usuariosGet = (req, res = response) => {

    res.json ({
        msg: 'get API - controlador'
    });
  };

const usuariosPost = (req, res = response) => {

    const body = req.body;

    res.json ({
        msg: 'Post API - controlador',
        body
    });
  };

const usuariosPut = (req, res = response) => {

    res.json ({
        msg: 'Put API - controlador'
    });
  };

const usuariosPath = (req, res = response) => {

    res.json ({
        msg: 'Path API - controlador'
    });
  };

const usuariosDelete = (req, res = response) => {

    res.json ({
        msg: 'Delete API - controlador'
    });
  };

  module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPath,
    usuariosPost,
    usuariosPut,
  }


