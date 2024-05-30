import React from 'react'
import { InputButton } from '../../components/forms/InputButton'
import { InputTextArea } from '../../components/forms/InputTextArea'

import { useBasicFetch } from '../../hooks/useBasicFetch'
import { useForm } from '../../hooks/useForm'
import { DASHBOARD } from '../../utils/endpoints'
import { HttpStatusCode } from 'axios'
import { Loader } from '../../components/common/Loader'
import { Input, Label } from '../../components/forms'


export const DashboardCreate = () => {
    const initialData = {
        name: "", description: ""
    }
    const { setFields, name, description, onChangeInput, form, cleanData } = useForm(initialData)

    const { loading, error, data, fetchPostData } = useBasicFetch()

    async function submitForm(ev) {
        ev.preventDefault();
        fetchPostData(DASHBOARD, { name, description }, HttpStatusCode.Created, cleanData)
    }

    return <>

        {loading && <Loader />}
        <form className="flex h-[90vh] items-center justify-center " onSubmit={(e) => { submitForm(e) }} ref={form}>
            <div className=' min-w-[50%]'>
                <div>
                    <Label href={"name"} title={"Dashboard name"}></Label>
                    <Input onChange={onChangeInput} type={"text"} name={"name"} placeholder={"Dashboard name"} value={name}>
                    </Input>
                </div>
                <div className="mb-2 block mt-5">
                    <Label href={"name"} title={"Description"}></Label>
                    <InputTextArea name={"description"} value={description} onChange={onChangeInput} pk={"description"}
                        placeholder="Descripcion"
                        row={4}
                    />
                </div>
                <div className="mb-2 block mt-5">
                    <InputButton className="w-full" text={"Crear Dashboard"} />
                </div>
            </div>
        </form>

    </>
}
