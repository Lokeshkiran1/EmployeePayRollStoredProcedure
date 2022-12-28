import express from 'express';
import * as employeeController from '../controllers/employee.controller';
import { newEmployeeValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();


//route to create a new employee
router.post('', newEmployeeValidator,userAuth, employeeController.newEmployee);


//route to get a single user by their user id
// router.get('/:id', userAuth, userController.getUser);

//route to update a single user by their user id
// router.put('/:id', userController.updateUser);

//route to delete a single user by their user id
// router.delete('/:id', userController.deleteUser);

export default router;