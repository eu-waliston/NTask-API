module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback([
                {title: "Fazer compras"},
                {title: "Concertar o pc"}
            ])
        }
    }
}