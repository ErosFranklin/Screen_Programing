const userService = require('../services/User.services');
const message = require("../services/message.services");

const create = async(req, res) => {
    try {
        const { name, email, password, confirmpassword } = req.body;

        if (!name  || !email || !password || !confirmpassword) {
            console.log(name, email, password, confirmpassword)
            return res.status(400).send({ message: "Todos os campos precisam estar preenchidos" });
            
        }

        if (password !== confirmpassword) {
            return res.status(400).send({ message: "As senhas não coincidem" });
        }

        const user = await userService.create(req.body);

        if (!user) {
            return res.status(400).send({ message: "Erro ao criar usuário" });
        }

        res.status(201).send({
            message: "Usuário criado com sucesso",
            user: {
                id: user._id,
                name,
                email,
            }
        });
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).send({ message: "Ocorreu um erro ao processar a solicitação" });
    }
}

module.exports = {
    create
}