// module.exports = function (app) {
//     const todoItem = require('../controller')

//     app.route('/item')
//         .get(todoItem.getItem)
//         .post(todoItem.addItem)
//     app.route('/item/:id')
//         .delete(todoItem.deleteItem)
// }
// const todoItem = require('../controller/index')

// const routers = (app) => {

// app.route('/item')
//     .get(todoItem.getItem)
//     .post(todoItem.addItem)

// app.route('/item/:id')
//     .delete(todoItem.deleteItem)
//     .put(todoItem.updateItem)

// app.route('/item/pagination')
//     .get(todoItem.pagination)


//     app.route('/item/search')
//         .get(todoItem.searchItem)
//     app.route('/item/pagination/search')
//         .get(todoItem.searchPagiItem)

//     app.route('/item')
//         .get(todoItem.getItem)
//         .post(todoItem.addItem)
//     app.route('/item/:id')
//         .get(todoItem.getItemById)
//         .put(todoItem.updateItem)
//         .delete(todoItem.deleteItem)
//     // app.route('/item/search')
//     //     .get(todoItem.searchItem)
//     // app.route('/item/pagination')
//     //     .get(todoItem.pagination)
// }

// module.exports = routers

const todoItem = require('../controller/index')

const routers = (app) => {
    app.route('/item')
        .get(todoItem.getItem)
        .post(todoItem.addItem)


    app.route('/item/search')
        .get(todoItem.searchItem)
    

    app.route('/item/:id')
        .put(todoItem.updateItem)
        .delete(todoItem.deleteItem)

    app.route('/item/pagination')
    .get(todoItem.pagination)


    app.route('/item/pagination/search')
        .get(todoItem.searchPagi)



}

module.exports = routers