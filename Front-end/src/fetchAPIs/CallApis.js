import { LIMIT } from "../constants"

function getItem() {
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/item'
        fetch(url, {
            method: 'GET'
        })
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((error) => reject(error))
    })
}

function addItem(dataAdd) {
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/item'
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dataAdd)
        })
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((error) => reject(error))
    })
}

function updateItem(dataUpdate) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/item/${dataUpdate.id}`
        fetch(url, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dataUpdate)
        })
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((error) => reject(error))
    })
}

function deleteItem(dataDelete) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/item/` + dataDelete.id
        fetch(url, {
            method: 'DELETE',
        })
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((error) => reject(error))
    })
}

function paginationItem(dataPagi) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/item/pagination?activePage=${dataPagi}&limit=${LIMIT}`
        fetch(url, {
            method: 'GET',
        })
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((error) => reject(error))
    })
}

// function searchItem(dataSearch) {
//     return new Promise((resolve, reject) => {
//         const url = `http://localhost:3001/Item?q=${dataSearch}`
//         fetch(url, {
//             method: 'GET'
//         })
//         .then((res) => res.json())
//         .then((res) => resolve(res))
//         .catch((error) => reject(error))
//     })
// }

function searchPagiItem(dataPagi) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/item/pagination/search?activePage=${dataPagi.activePage}&limit=${LIMIT}&textSearch=${dataPagi.textSearch}`
        fetch(url, {
            method: 'GET',
        })
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((error) => reject(error))
    })
}
export { getItem, addItem, updateItem, deleteItem, paginationItem, searchPagiItem}