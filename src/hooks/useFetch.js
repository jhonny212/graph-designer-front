import React, { useEffect, useState } from 'react'

export const useFetch = ({ url, data,initial }) => {
    const [state, setState] = useState({
        loading: true,
        data: [],
        error: null
    })

    useEffect(() => {
        if(!initial){
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }).then(res => res.json())
            .then(response => {
                setState(prevState => ({
                    ...prevState,
                    data: response,
                }))
            }).catch(err=>{
                setState(prevState => ({
                    ...prevState,
                    error:err
                }))
            }).finally(()=>{
                setState(prevState => ({
                    ...prevState,
                    loading: false
                }))
            })
        }

        return state
    }, [data])

    return {
        ...state
    }
}
