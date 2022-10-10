
const Models = require('../model/index')

// get
exports.getItem = async (req, res) => {
    try {
        let myData = await Models.find({})
        res.send({
            myData
        })
    } catch (error) {
        res.send(error)
    }
}

// get by Id
exports.getItemById = async (req, res) => {
    try {
        let id = req.params.id
        let myData = await Models.findById(id)
        res.send({
            myData
        })
    } catch (error) {
        res.send(error)
    }
}

// add
exports.addItem = async (req, res) => {
    try {
        let name = req.body.name
        await Models.create({ name })
        res.send({
            Message: 'Da tao thanh cong'
        })
    } catch (error) {
        res.send(error)
    }
}

// update
exports.updateItem = async (req, res) => {
    try {
        let id = req.params.id
        let name = req.body.name
        await Models.findByIdAndUpdate(id, { name })
        res.send({
            Message: 'Da cap nhat thanh cong'
        })
    } catch (error) {
        res.send(error)
    }
}

// search 
exports.searchItem = async(req, res) => {
    try {
        let textSearch = req.query.textSearch
        let myData = await Models.find({ name: { $regex: textSearch, $options: 'i'}})
        res.send({
            myData
        })
    } catch (error) {
        res.send(error)
    }
}

// delete
exports.deleteItem = async (req, res) => {
    try {
        let id = req.params.id
        await Models.findByIdAndRemove(id)
        res.send({
            Message: 'Da xoa thanh cong'
        })
    } catch (error) {
        res.send(error)
    }
}

// pagination
exports.pagination = async (req, res) => {
    try {
        let limit = parseInt(req.query.limit)
        let activePage = parseInt(req.query.activePage)
        let skip = (activePage - 1) * limit
        let totalRecord = await Models.countDocuments({})
        let totalPage = Math.ceil(totalRecord / limit)
        let listPagination = await Models.find({}).skip(skip).limit(limit)
        res.send({
            totalPage,
            listPagination
        })
    } catch (error) {
        res.send(error)
    }
}

// search pagination
exports.searchPagi = async (req, res) => {
    try {
        let textSearch = req.query.textSearch
        let activePage = parseInt(req.query.activePage)
        let limit = parseInt(req.query.limit)
        let skip = (activePage - 1) * limit
        let totalRecord = await Models.countDocuments({ name: { $regex: textSearch, $options: 'i' } })
        let totalPage = Math.ceil(totalRecord / limit)
        let listSearchPagi = await Models.find({ name: { $regex: textSearch, $options: 'i' } }).skip(skip).limit(limit)
        res.send({
            totalPage,
            listSearchPagi
        })
    } catch (error) {
        res.send(error)
    }
}