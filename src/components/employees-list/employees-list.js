import React from 'react'
import EmployeesListItem from '../employees-list-item/employees-list-item'
import './employees-list.scss'

const EmployeesList = ({data, changePremials}) => {

    const elements = data.map(value => {
        return (
            <EmployeesListItem {...value} key={value.id}
                               changePremials={changePremials}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList
