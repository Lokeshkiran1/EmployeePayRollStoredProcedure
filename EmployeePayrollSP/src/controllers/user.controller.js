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



