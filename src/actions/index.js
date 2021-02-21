import * as types from "../constants/ActionStyle";
import callApi from "../utils/callApi";

export const actFetchProductCallApi = () => {
    return dispatch =>  {
        return callApi('/Product','GET',null).then(res => {
            dispatch(actFetchProducts(res.data));
        })
    }
}

export const actFetchProducts = (product) => {
    return {
        type: types.FETCH_PRODUCT,
        product
    }
}

//ADD
export const actAddProductCallApi = (Product) => {
    return dispatch =>  {
        return callApi('/Product','POST',Product).then(res => {
            dispatch(actAddProduct(Product));
        })
    }
}

export const actAddProduct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product
    }
}

//DELETE
export const actDeleteProductCallApi = (id) => {
    return dispatch =>  {
        return callApi(`/Product/${id}`,'DELETE',null).then(res => {
            dispatch(actDeleteProduct(id));
        })
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: types.DELETE_PRODUCT,
        id
    }
}