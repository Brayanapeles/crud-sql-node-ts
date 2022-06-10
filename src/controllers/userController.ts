import { Request, Response } from 'express';
import usuarioModel from '../models/usuarioModel';

class UserController {
  async findAll(req: Request, res: Response) {
    this;
    const usuarios = await usuarioModel.findAll();
    return usuarios.length > 0
      ? res.status(200).json(usuarios)
      : res.status(204).send();
  }

  async findOne(req: Request, res: Response) {
    this;
    console.log(req.params);
    const { userId } = req.params;
    const usuario = await usuarioModel.findOne({
      where: {
        id: userId,
      },
    });
    return usuario ? res.status(200).json(usuario) : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    this;
    const { email, nome, idade } = req.body;
    const usuario = await usuarioModel.create({
      email,
      nome,
      idade,
    });
    return res.status(201).json(usuario);
  }

  async update(req: Request, res: Response) {
    this;
    // É importante sempre tratar e checar os dados, aqui é só para fins de estudo
    const { userId } = req.params;
    await usuarioModel.update(req.body, {
      where: {
        id: userId,
      },
    });
    return res.status(204);
  }

  async delete(req: Request, res: Response) {
    this;
    const { userId } = req.params;
    let resposta;
    (await usuarioModel.destroy({
      where: {
        id: userId,
      },
    })) > 0
      ? (resposta = 'usuario deletado com sucesso!')
      : (resposta = 'usuario não encontrado');
    return res.status(204).send(resposta);
  }
}

export default new UserController();
