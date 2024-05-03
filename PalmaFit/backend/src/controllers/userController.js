const User = require('../../backend/models/User');

// Controladores para gestionar usuarios
const userController = {
    // Obtener todos los usuarios
    getUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // Crear un nuevo usuario
    createUser: async (req, res) => {
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        try {
            const newUser = await user.save();
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};

module.exports = userController;