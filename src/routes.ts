import express from 'express';

import BranchController from './controllers/BranchController';
import CompanyController from './controllers/CompanyController';
import IndexController from './controllers/IndexContoller';

const routes = express.Router();
const branchController = new BranchController();
const companyController = new CompanyController();

const indexController = new IndexController();

routes.post('/', indexController.create);

// ! branchs
routes.post('/branch', branchController.create);
routes.get('/branch', branchController.index);
routes.delete('/branch/:id', branchController.delete);
routes.put('/branch/:id', branchController.update);
// ! company
routes.post('/company', companyController.create);
routes.get('/company/:id', companyController.show);
routes.get('/company', companyController.index);

export default routes;
