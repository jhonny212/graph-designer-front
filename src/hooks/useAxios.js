import { useState } from "react"
import { request } from "../utils/httpRequest"

export const useAxiosRequest = (url, data, statusCodeExpected) => {
    const [state, setState] = useState({
        loading: false,
        data: [],
        error: null,
    })
    const [pagination, setPagination] = useState({})

    function GetRequest() {
        try {
            setState({ loading: true, data: [], error: null })
            request.get(url, {
                params: {
                    ...data
                }
            }).then((res) => {
                if (res.status == statusCodeExpected) {
                    setState(prevState => ({
                        ...prevState,
                        data: res.data.data,
                    }))
                    res.data.pagination && setPagination(res.data.pagination)
                } else {
                    setState(prevState => ({
                        ...prevState,
                        error: `Invalid response ${res.status}`,
                    }))
                }
            }).catch(err => {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    error: err,
                }))
            }).finally(() => {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                }))
            })
        } catch (error) {
            setState(prevState => ({
                ...prevState,
                loading: false,
            }))
        }
    }

    return {
        ...state,
        GetRequest,
        pagination,
        url
    }
}