const { userDataAccess } = require('../dataAccess');



const getUsers = (req, res) => {

    res.send({
        data: userDataAccess.getUsers(req.query)
    })
}

const createUser = (req, res) => {

    userDataAccess.createUser(req.body,
        (nuevoUser) => {
            res.send({ sucess: true, data: nuevoUser })
        },
        error => res.send({
            sucess: false, error
        }))

}

const updateUser = (req, res) => {

    const userId = parseInt(req.params.userId)
    const user = req.body

    userDataAccess.updateUser(userId, user, (updatedUser) => {
        res.send({ sucess: true, data: updatedUser })
    }, (error) => {
        res.status(500).send({ sucess: false, error })
    })

}

const deleteUser = (req, res) => {

    const userId = parseInt(req.params.userId)
    userDataAccess.deleteUser(userId, (newArray) => {
        res.send({ sucess: true, data: newArray })
    }, (error) => {
        res.status(500).send({ sucess: false, error })
    })
}

const getUserById = (req, res) => {
    const userId = parseInt(req.params.userId)

    userDataAccess.getUserById(userId, user => {
        res.send({ sucess: true, data: user })
    }, error => res.status(500).send({ sucess: false, error }))

}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserById
}