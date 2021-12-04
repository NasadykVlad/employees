import React from 'react'
import './employess-list-item.scss'

const EmployeesListItem = ({name, salary, premials, changePremials}) => {

    let className = "list-group-item d-flex justify-content-between";
    if (premials) {
        className = className + ' increase';
    }

    return (
        <li className={className}>
            <span className='list-group-item-label'>{name}</span>
            <input type="text" className='list-group-item-input' defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button onClick={() => changePremials(name)} type="button"
                        className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem
