import React from 'react'
import { Label, Select } from '../../components/forms'
import { TableHeader, Table, TableBody } from '../../components/table'

export const GraphFilter = () => {
    return (
        <div className='grid grid-cols-2 gap-1'>
            <div className='mt-8 w-full flex  justify-center '>
                <div className='basis-4/6'>
                    <Table>
                        <TableHeader columns={['Product name', 'Color', 'Category', 'Price']} />
                        <TableBody 
                            data={[
                                [
                                    {
                                        value: 'Apple',
                                        first: true,
                                    },
                                    {
                                        value: 'Silver',
                                        first: false,
                                    },
                                    {
                                        value: 'Laptop',
                                        first: false,
                                    },
                                    {
                                        value: '$99',
                                        first: false,
                                    }
                                ]
                            ]} 
                        />
                    </Table>
                </div>
            </div>
            <form className='items-center justify-center'>
                <div className="mb-2 block mt-5" style={{ width: '40vw' }}>
                    <Label title={"Tipo de filtro"} href="axis-x" />
                    <Select defaulttitle={"Tipo de filtro"}
                        options={[]}
                        id="axis-x"
                    />
                </div>
                <div className="mb-2 block mt-5" style={{ width: '40vw' }}>
                    <Label title={"Tipo de operacion"} href="axis-x" />
                    <Select defaulttitle={"Tipo de operacion"}
                        options={[]}
                        id="axis-x"
                    />
                </div>
                <div className="mb-2 block mt-5" style={{ width: '40vw' }}>
                    <Label title={"Seleccione el campo"} href="axis-x" />
                    <Select defaulttitle={"Seleccione el campo"}
                        options={[]}
                        id="axis-x"
                    />
                </div>
            </form>
        </div>
    )
}
