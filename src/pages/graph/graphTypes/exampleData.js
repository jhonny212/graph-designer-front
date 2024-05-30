import { HttpStatusCode } from "axios"
import { ENDPOINT_DETAIL } from "../../../utils/endpoints"
import { useEffect } from "react"

export const useExampleData = (table) => {
    const { data, error, GetRequest } = useAxiosRequest(`${ENDPOINT_DETAIL}/example-data/${table}`, {}, HttpStatusCode.Ok)

    useEffect(() => {
        console.log(`${ENDPOINT_DETAIL}/example-data/${table}`);
        GetRequest()
        
    }, [])

}