const { Users } = require('../models'); // estoy desestructurando del objeto que contiene todos los modelos
const bcrypt = require('bcrypt');
const createUser = async (req, res, next) => {
  try{
    //traer la info del boddy
    const {email, password} = req.body;
    // Para proteger la contrasena 
      // impoertar bcryt, tener la contrasena en texto plano, deciridre un saltROunds, hasear la contrasena
    const hashed = await bcrypt.hash(password, 10);
    // crear el usuario 
    // await Users.create({email, password: hashed});
    res.status(200).end(hashed);
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
    createUser
};

// ENcriptar password
// https://www.npmjs.com/package/bcrypt ayuda a hasear las contrasnas 
// se puede hasear un texto pero no se puede 'deshasear xd' por eso es seguro para las password
// Salt = numero de digitos aleatorios que se agregan a una contrasena al ppio o al final y para que no se pueda encontrar tan facil en las librerias de has
// asdasdasd
// min 50