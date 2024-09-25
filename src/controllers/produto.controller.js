import Produto from '../models/produto.model.js';
import { validationResult } from 'express-validator';

export default class ProdutoController {
  //lista produtos
  static async index(req, res) {
    const produtos = await Produto.findMany();
    res.json(produtos);
  }
  //cria produtos
  static async create(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const produto = await Produto.create({
      data: req.body
    })
    res.json(produto);
  }
  //exibe produtos especificos
  static async show(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const produto = await Produto.findUnique({
      where: {
        id: parseInt(req.params.id)	
      }
    })
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.json(produto);
  }
  //atualiza produtos
  static async update(req, res){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const produto = await Produto.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    const updatedProduto = await Produto.update({
      where: {
        id: parseInt(req.params.id)
      },
      data: req.body
    })
    res.json(updatedProduto);
  }
  //deleta produtos
  static async delete(req, res){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const produto = await Produto.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    await Produto.delete({
      where: {
        id: parseInt(req.params.id)
      }
    })
    res.status(200).json({ message: 'Produto deletado com sucesso' });
  }
}