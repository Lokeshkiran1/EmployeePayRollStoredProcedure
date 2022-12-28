
import sequelize, { DataTypes } from '../config/database';


//create new user
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