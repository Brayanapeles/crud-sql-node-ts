import { Request, Response } from 'express';
import usuarioModel from '../models/usuarioModel';

class UserController {
  async findAll(req: Request, res: Response) {
    this;
  }

  async findOne(req: Request, res: Response) {
    this;
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
  }

  async delete(req: Request, res: Response) {
    this;
  }
}

export default new UserController();
