var Questionario = require('../model/questionarioModel');

exports.getquestionario = async function (req, res){
    try{
        const result = await Questionario.find().populate('usuario');
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.create = function (req, res){

    let questionario = new Questionario(
        {
            tipoEmpresa: req.body.tipoEmpresa,
            ramoEmpresa: req.body.ramoEmpresa,
            cnae: req.body.cnae,
            usuario: req.body.usuario
        }
    );
    
    questionario.save()
    .then(res.status(201).send(questionario.toJSON()))
    .catch((err) => {
        res.status(500).send({message: `${err.message} - falha ao cadastrar projeto`})
    })
};

exports.details = async function (req, res) {
    try {
        const result = await Questionario.findById(req.params.id);
        if (!result) {
            return res.status(404).send({ message: "Projeto não encontrado!" });
        }
        res.status(200).json(result)
    }catch (err) {
        res.status(500).json(err);
    }
};

exports.updatequestionario = async function (req, res) {
    try {
        const updatedquestionario = await Questionario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedquestionario) {
            return res.status(404).send({ message: "Projeto não encontrado!" });
        }
        res.status(200).json(updatedquestionario);
    } catch (err) {
        res.status(500).json({ message: `Erro ao atualizar projeto: ${err.message}` });
    }
};

exports.deletequestionario = async function (req, res) {
    try {
        const deletedquestionario = await Questionario.findByIdAndDelete(req.params.id);
        if (!deletedquestionario) {
            return res.status(404).send({ message: "Projeto não encontrado!" });
        }
        res.status(200).send({ message: "Projeto removido com sucesso!" });
    } catch (err) {
        res.status(500).json({ message: `Erro ao remover projeto: ${err.message}` });
    }
};