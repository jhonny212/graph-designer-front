import React, { useRef, useState } from 'react'

export function useForm(data) {
    const form = useRef(undefined)
    const [fields, setFields] = useState(data)

    function onChangeInput({target}){
        const {name,value} = target
        setFields({
            ...fields,
            [name]: value
        })
    }

    function cleanData() {
        setFields(data)
    }
    

    return {
        setFields,
        ...fields,
        onChangeInput,
        form,
        cleanData
    }

    
}
