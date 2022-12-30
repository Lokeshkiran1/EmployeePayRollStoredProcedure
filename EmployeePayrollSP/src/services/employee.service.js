
import sequelize, { DataTypes } from '../config/database';


//create new employee
export const newEmployee = async (body) => {
  const data = await sequelize.query('call sp_newEmployee(:employeeName,:dateOfBirth,:department,:address,:email,:phoneNumber);',{
    replacements:{
      employeeName:body.employeeName,
      dateOfBirth:body.dateOfBirth,
      department:body.department,
      address:body.address,
      email:body.email,
      phoneNumber:body.phoneNumber
    }
  });
  return data;
};

//get employee by id
export const getEmployee = async (id,body) => {
  const data = await sequelize.query('call sp_getEmployee(:id,:email);',{
    replacements:{
      id:id,
      email:body.email,
    }
  });
  return data;
};


//update employee
export const updateEmployee = async (id,body) => {
  const data = await sequelize.query('call sp_updateEmployee(:id,:employeeName,:dateOfBirth,:department,:address,:email,:phoneNumber);',{
    replacements:{
      id:id,
      employeeName:body.employeeName,
      dateOfBirth:body.dateOfBirth,
      department:body.department,
      address:body.address,
      email:body.email,
      phoneNumber:body.phoneNumber,
    }
  });
  return data;
};


//delete employee
export const deleteEmployee = async (id,body) => {
  const data = await sequelize.query('call sp_deleteEmployee(:id,:email);',{
    replacements:{
      id:id,
      email:body.email,
    }
  });
  return data;
};


//get all employees
export const getAllEmployee = async (body) => {
  const data = await sequelize.query('call sp_getAllEmployee(:email);',{
    replacements:{
      email:body.email,
    }
  });
  return data;
};