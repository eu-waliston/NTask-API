const  Sequelize = require("sequelize") 

module.exports = app => {
    
    app.listen(app.get("port"), () => {
        Sequelize.sync({force: true})
        console.log(`NTask API - porta ${app.get("port")}`);
    })
}