const users = [{
    dni: 1000000,
    nombre: "Diego",
    apellido: "Angerossa",
    id: 1
}]

let lastId = 1; 


const getUsers = ({nombre = "", apellido = ""}) => {
    let filtrados = users;

   
    if (nombre){
        console.log(nombre)
        filtrados = users.filter( user => user.nombre.toLowerCase().includes(nombre.toLowerCase()))
    }
    if (apellido){
        filtrados = filtrados.filter( user => user.apellido.toLowerCase().includes(apellido.toLowerCase()))
    }
    
    return filtrados
}

const getUserById = (userId, sucess, failure) => {
    if ( isNaN(userId))
    return failure(`Debe especificar un id de usuario`)  

    const index = users.findIndex( user => user.id === userId)

    if ( isNaN(index) || index < 0 )
    return failure(`El usuario con id = ${userId} no existe`)

    return sucess(users[index])

}

const createUser = (newUser, sucess, failure) => {
    console.log(newUser);
   
    if (typeof(newUser) != "object" )
        return failure("El parametro no es un objecto.")
    
    if(!(newUser.dni && newUser.nombre && newUser.apellido) )
      return failure("Campos dni, nombre y apellido son obligatorio")
    
    const exists = users.find(user => user.dni === newUser.dni) 
    if (exists)
        return failure("El usuario ya existe")

    //generamos un nuevo ID
    lastId ++
    newUser.id = lastId
    users.push(newUser)

    //ejecutamos callback por success y pasamos el nuevo usuario como parametro
    return sucess(newUser);
}

const deleteUser = (userId, success, failure) =>{
   
    if ( isNaN(userId))
        return failure(`Debe especificar un id de usuario`)    

    const index = users.findIndex( user => user.id === userId)

    console.log("Index: ", index)

     if ( isNaN(index) || index < 0 )
        return failure(`El usuario con id = ${userId} no existe`)

    users.splice(index, 1)
    return success(users)
} 

const updateUser = (userId, userToUpdate, sucess, failure) =>{
    if ( isNaN(userId))
        return failure(`Debe especificar un id de usuario`)  

    const index = users.findIndex( user => user.id === userId)

    if ( isNaN(index) || index < 0 )
    return failure(`El usuario con id = ${userId} no existe`)

    if (typeof(userToUpdate) != "object" )
    return failure("El parametro no es un objecto.")

    if(!(userToUpdate.dni && userToUpdate.nombre && userToUpdate.apellido) )
    return failure("Campos dni, nombre y apellido son obligatorio")

    userToUpdate.id = userId
    users[index] = userToUpdate

    //ejecutamos callback por success y pasamos el usuario actualizado
    return sucess(userToUpdate);

}


module.exports = {
    getUsers,
    createUser,
    deleteUser,
    updateUser,
    getUserById
}