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
      id:data[0].id,
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


export const getEmployee = async (req, res, next) => {
  try {
    const data = await employeeService.getEmployee(req.params.id,req.body);
    console.log(data,"from controller")
    let employeeDetails={
      id:data[0].id,
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


export const updateEmployee = async (req, res, next) => {
  try {
    const data = await employeeService.updateEmployee(req.params.id,req.body);
    console.log(data,"from controller")
    let employeeDetails={
      id:data[0].id,
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


export const deleteEmployee = async (req, res, next) => {
  try {
    const data = await employeeService.deleteEmployee(req.params.id,req.body);
    if(data[0].error_status==0){
      res.status(data[0].statusCode).json({
        statusCode:data[0].statusCode,
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


//get all employees

export const getAllEmployee = async (req, res, next) => {
  try {
    const data = await employeeService.getAllEmployee(req.body);
    // console.log(data,"from controller");
    // let employeeDetailsInfo=[];
    // data.forEach(value=>{
    //   let employeeDetails={
    //     id:value.id,
    //     employeeName:value.employeeName,
    //     dateOfBirth:value.dateOfBirth,
    //     department:value.department,
    //     address:value.address,
    //     email:value.email,
    //     phoneNumber:value.phoneNumber
    //   }
    //   employeeDetailsInfo.push(employeeDetails)
    // })
    let employeeDetailsInfo=data.map(
      ({message,statusCode,error_status,...rest})=>{
        return rest;
      }
    )
    
    if(data[0].error_status==0){
      res.status(data[0].statusCode).json({
        statusCode:data[0].statusCode,
        data:employeeDetailsInfo,
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
