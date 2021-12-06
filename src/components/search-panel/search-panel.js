import React from 'react'
import './search-panel.scss'

const SearchPanel = ({addTerm}) => {

    return (
        <input type="text"
               className="form-control search-input searchEmployee"
               placeholder="Введіть прізвище співробітника"
               onChange={() => addTerm()}
        />
    )
}

export default SearchPanel
