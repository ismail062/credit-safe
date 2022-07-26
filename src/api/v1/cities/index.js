// CRUD operations
module.exports = {
    getCities: (req, res, next) => {
        res.status(200).send({ message: 'success '})
    },
    addCity: (req, res, next) => {
        res.status(201).send({ message: 'created '})
    },
};