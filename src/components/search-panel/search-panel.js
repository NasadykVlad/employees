import React from 'react'
import './search-panel.scss'

const SearchPanel = () => {
    return (
        <input type="text"
               className="form-control search-input"
               placeholder="Введіть ім'я співробітника"
        />
    )
}

export default SearchPanel
