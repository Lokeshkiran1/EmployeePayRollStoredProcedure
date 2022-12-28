import * as employeeService from '../services/employee.service';

/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newEmployee = async (req, res, next) => {
  try {
    const data = await employeeService.newEmployee(req.body);
    console.log(data,"from controller")
    let employeeDetails={
      employeeName:data[0].employeeName,
      dateOfBirth:data[0].dateOfBirth,
      department:data[0].department,
      address:data[0].address,
      phoneNumber:data[0].phoneNumber
    }
    if(data[0].error_status==0){
      res.status(data[0].statusCode).json({
        statusCode:data[0].statusCode,
        data:employeeDetails,
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