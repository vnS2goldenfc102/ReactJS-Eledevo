import React, { Component } from 'react'


class Items extends Component {
    state = {
        id: '',
        name: '',
        idUpdate: '',
        nameUpdate: '',
        textSearch: ''
    }
    render() {
        let listData = []
        if (this.props.listItem) {
            listData = this.props.listItem.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>
                            <button
                                onClick={() => this.setState({ idUpdate: item._id, nameUpdate: item.name })}
                            >CHOOSE</button>
                        </td>
                        <td>
                            <button
                                onClick={() => this.props.deleteItem({ id: item._id })}
                            >DELETE</button>
                        </td>
                    </tr>
                )
            })
        }

        let PAGINATION = []
        let totalPage = this.props.totalPage
        let activePage = this.props.activePage
        
        for (let index = 1; index <= totalPage; index++) {
            let button = (
                <button
                    key={index}
                    style={{backgroundColor: activePage === index ? 'red' :null}}
                    onClick={() => this.props.textSearch ? this.props.searchItem({ textSearch: this.props.textSearch, activePage: index }) 
                    : this.props.paginationItem(index) }
                >{index}</button>
            )
            PAGINATION.push(button)
        }

        return (
            <div className='App'>
                <div className='Add'>
                    <input
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })}
                    />
                    <button onClick={() => this.props.addItem({ name: this.state.name })}>ADD</button>
                </div>
                <div className='Update'>
                    <input
                        value={this.state.nameUpdate}
                        onChange={(e) => this.setState({ nameUpdate: e.target.value })}
                    />
                    <button onClick={() => this.props.updateItem({ id: this.state.idUpdate, name: this.state.nameUpdate })}>UPDATE</button>
                </div>
                <div className='Search'>
                    <input
                        value={this.state.textSearch}
                        onChange={(e) => this.setState({ textSearch: e.target.value })}
                    />
                    <button onClick={() => this.props.searchItem({ textSearch: this.state.textSearch, activePage: 1 })}>SEARCH</button>
                </div>
                <div className='table'>
                    <table>
                        <thead>
                            <tr>
                                <td>STT</td>
                                <td>Name</td>
                            </tr>
                        </thead>
                        <tbody>
                            {listData}
                        </tbody>
                    </table>
                    {PAGINATION}
                </div>
            </div>
        )
    }
}





export default Items