import sequelize, { DataTypes } from '../config/database';
import Jwt  from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();
//const User = require('../models/user')(sequelize, DataTypes);



//create new user
export const newUser = async (body) => {
    const saltRounds=2;
    const hashPassword=bcrypt.hashSync(body.password,saltRounds);
    //body.password=hashPassword;
  const data = await sequelize.query('call sp_registerUser(:firstName,:lastName,:email,:password);',{
    replacements:{
      firstName:body.firstName,
      lastName:body.lastName,
      email:body.email,
      password:hashPassword
    }
  });
  return data;
};

//login user
export const loginUser = async (body) => {
  const data = await sequelize.query('call sp_loginUser(:email);',{
    replacements:{
      email:body.email,
    }
  });
  var errorStatue=data[0].error_status;
  if(errorStatue===0){
    const passwordAuth=bcrypt.compareSync(body.password,data[0].password)
    if(passwordAuth){
        var token=Jwt.sign(
          {id:data[0].id,firstName:data[0].firstName,email:data[0].email},
          process.env.SECRET_KEY
        );
        console.log("token",token)
        return{
          token:token,
          data:data
        } 
    }else{
      throw new Error('invalid password')
    }

  }else if(errorStatue===1){
    return {
      data:data,
      token:''
    }
  }
  
};


















//update single user
export const updateUser = async (id, body) => {
  await User.update(body, {
    where: { id: id }
  });
  return body;
};

//delete single user
export const deleteUser = async (id) => {
  await User.destroy({ where: { id: id } });
  return '';
};

//get single user
export const getUser = async (id) => {
  const data = await User.findByPk(id);
  return data;
};


//get all users
export const getAllUsers = async () => {
  const data = await User.findAll();
  return data;
};
