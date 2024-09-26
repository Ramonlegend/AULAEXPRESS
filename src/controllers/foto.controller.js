import Foto from '../models/foto.model.js';
import { validationResult } from 'express-validator';

export default class FotoController {
  //lista fotos
  static async index(req, res) {
    const fotos = await Foto.findMany();
    res.json(fotos);
  }
  //cria fotos
  static async create(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const foto = await Foto.create({
      data: req.body
    })
    res.json(foto);
  }
  //exibe fotos especificos
  static async show(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const foto = await Foto.findUnique({
      where: {
        id: parseInt(req.params.id)	
      }
    })
    if (!foto) {
      return res.status(404).json({ error: 'Foto não encontrada' });
    }
    res.json(foto);
  }
  //atualiza fotos
  static async update(req, res){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const foto = await Foto.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if (!foto) {
      return res.status(404).json({ error: 'Foto não encontrada' });
    }
    const updatedFoto = await Foto.update({
      where: {
        id: parseInt(req.params.id)
      },
      data: req.body
    })
    res.json(updatedFoto);
  }
  //deleta fotos
  static async delete(req, res){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const foto = await Foto.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if (!foto) {
      return res.status(404).json({ error: 'Foto não encontrada' });
    }
    await Foto.delete({
      where: {
        id: parseInt(req.params.id)
      }
    })
    res.json({ message: 'Foto deletada com sucesso' });
  }
}