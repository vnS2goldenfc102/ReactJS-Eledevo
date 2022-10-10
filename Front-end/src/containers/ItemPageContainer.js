import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/ItemPageAction'
import Items from '../components/Items';
class ItemPageContainer extends Component {
    componentDidMount() {
        this.props.paginationItem(1);
    }

    render() {
        return (
           <Items 
                {...this.props}
           />
        )
    }


}

const mapStateToProps = (state) => {  // hàm chọc vào redux
    return {
        listItem: state.items.listItem,
        totalPage: state.items.totalPage,
        activePage: state.items.activePage,
        textSearch: state.items.textSearch
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getItem: () => {
            dispatch(actions.getItemRequest())
        },
        addItem: (payload) => {
            dispatch(actions.addItemRequest(payload))
        },
        updateItem: (payload) => {
            dispatch(actions.updateItemRequest(payload))
        },
        deleteItem: (payload) => {
            dispatch(actions.deleteItemRequest(payload))
        },
        paginationItem: (payload) => {
            dispatch(actions.pagiItemRequest(payload))
        },
        searchItem: (payload) => {
            dispatch(actions.searchItemRequest(payload))
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer)
