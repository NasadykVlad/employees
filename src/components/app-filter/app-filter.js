import React from 'react'
import './app-filter.scss'

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-light"
                    type="button">
            Всі співробітники
            </button>
            <button className="btn btn-outline-light"
                    type="button">
            Співробітники на підвищення
            </button>
            <button className="btn btn-outline-light"
                    type="button">
            З/П більше 1.000$
            </button>
        </div>
    )
}

export default AppFilter
