import React from 'react'
import './employess-list-item.scss'

const EmployeesListItem = ({id, name, salary, premials, increase, changePremials, increasePerson, deletePerson}) => {

    let className = "list-group-item d-flex justify-content-between";
    if (premials) {
        className = className + ' increase';
    }
    if (increase) {
        className = className + ' like';
    }

    return (
        <li className={className}>
            <span onClick={() => increasePerson(id)} className='list-group-item-label'>{name}</span>
            <input type="text" className='list-group-item-input' defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button onClick={() => changePremials(id)} type="button"
                        className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button onClick={() => deletePerson(id)} type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i onClick={() => increasePerson(id)} className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem
