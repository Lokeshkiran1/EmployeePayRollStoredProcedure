import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';

/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newUser = async (req, res, next) => {
  try {
    const data = await UserService.newUser(req.body);
    console.log(data,"from controller")
    let userDetails={
      firstName:data[0].firstName,
      lastName:data[0].lastName,
      email:data[0].email,
      password:data[0].password
    }
    if(data[0].error_status==0){
      res.status(data[0].statusCode).json({
        statusCode:data[0].statusCode,
        data:userDetails,
        success:data[0].error_status,
        message: data[0].message
      });
    }
    if(data[0].error_status==1){
        res.status(data[0].statusCode).json({
          statusCode:data[0].statusCode,
          success:data[0].error_status,
          message: data[0].message
        });
      }
  } catch (error) {
    next(error);
  }
};


export const loginUser = async (req, res, next) => {
  try {
    const {data,token} = await UserService.loginUser(req.body);
    if(data[0].error_status==0){
      res.status(data[0].statusCode).json({
        statusCode:data[0].statusCode,
        data:token,
        success:data[0].error_status,
        message: data[0].message
      });
    }
    if(data[0].error_status==1){
      res.status(data[0].statusCode).json({
        statusCode:data[0].statusCode,
        success:data[0].error_status,
        message: data[0].message
      });
    }
    
  } catch (error) {
    next(error);
  }
};




















/**
 * Controller to update a user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateUser = async (req, res, next) => {
  try {
    const data = await UserService.updateUser(req.params.id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'User updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to delete a single user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteUser = async (req, res, next) => {
  try {
    await UserService.updateUser(req.params.id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'User deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};



/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllUsers = async (req, res, next) => {
  try {
    const data = await UserService.getAllUsers();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All users fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get a single user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getUser = async (req, res, next) => {
  try {
    const data = await UserService.getUser(req.params.id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'User fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};
