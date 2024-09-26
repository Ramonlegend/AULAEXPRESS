import { body, param } from 'express-validator';

export const fotoValidator = [
  body('titulo').isString().withMessage('Título é obrigatório'),
  body('url').isString().withMessage('URL é obrigatório'),
  body('produtoId').isNumeric().withMessage('ProdutoId é obrigatório')
];

export const fotoUpdateValidator = [
  param('id').isInt().withMessage('Id é obrigatório'),
  body('titulo').isString().withMessage('Título é obrigatório'),
  body('url').isString().withMessage('URL é obrigatório'),
  body('produtoId').isNumeric().withMessage('ProdutoId é obrigatório')
];

export const fotoIdValidator = [
  param('id').isInt().withMessage('Id é obrigatório')
];