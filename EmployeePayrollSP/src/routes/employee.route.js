import express from 'express';
import * as employeeController from '../controllers/employee.controller';
import { newEmployeeValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();


//route to create a new employee
router.post('', newEmployeeValidator,userAuth, employeeController.newEmployee);

//route to get all employees
router.get('', userAuth, employeeController.getAllEmployee);

//route to get a employee by their id
router.get('/:id', userAuth, employeeController.getEmployee);

//route to update a single user by their user id
router.put('/:id', userAuth,employeeController.updateEmployee);

//route to delete a single user by their user id
router.delete('/:id', userAuth,employeeController.deleteEmployee);


export default router;