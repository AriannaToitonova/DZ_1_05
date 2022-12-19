import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

function CountPage(props) {
    const title = useSelector(state => state.title)
    const dispatch = useDispatch()

    const reversNull = () => {
        dispatch({
            type: 'GET_PLUS',
            payload: title + 1
        })
    }
    const minusButton = () => {
        dispatch({
            type: 'GET_MINUS',
            payload: title - 1
        })
    }
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={reversNull}>+</button>
            <button onClick={minusButton}>-</button>
        </div>
    );
}

export default CountPage;