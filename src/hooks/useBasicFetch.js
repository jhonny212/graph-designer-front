import React, { useState } from 'react'
import { request } from '../utils/httpRequest'
import { HttpStatusCode } from 'axios'
import axios from 'axios'

export const useBasicFetch = () => {

    const [state, setState] = useState({
        loading: false,
        data: null,
        error: null
    })

    function fetchPostData(url, data, statusCode, cleaner) {
        setState({ loading: true, data: null, error: null })
        try {
            request.post(url, data, )
            .then(response => {
                if(response.status == statusCode){
                    //HttpStatusCode.Ok
                    setState(prevState => ({
                        ...prevState,
                        data: response.data,
                    }))
                    cleaner()
                }else{
                    setState(prevState => ({
                        ...prevState,
                        error: `Invalid response ${response.status}`
                    }))
                }
            })
            .catch(err => {
                console.log("->",err);
                setState(prevState => ({
                    ...prevState,
                    error: err
                }))
            }).finally(() => {
                setState(prevState => ({
                    ...prevState,
                    loading: false
                }))
            })
        } catch (error) {
            setState(prevState => ({
                ...prevState,
                loading: false,
                error: error
            }))
        }
    }

    return {
        ...state,
        fetchPostData
    }
}
