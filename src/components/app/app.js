import './app.scss'
import React from 'react'
import uuid from 'react-uuid'
import AppInfo from '../app-info/app-info'
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from '../employees-list/employees-list'
import EmployeesAdd from '../employees-add/employees-add'

function App() {

    const [data, changeData] = React.useState(
        [
            {id: uuid(), name:"Ткачук С.", salary: 800, premials: false},
            {id: uuid(), name:"Скірчук В.", salary: 1200, premials: false},
            {id: uuid(), name:"Раков О.", salary: 900, premials: false}
        ]
    )


    function changePremials(name) {
       changeData(data.map(employe => {
           if(employe.name === name) employe.premials = !employe.premials
           return employe
       }))
    }

    return (
        <div className = "App">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
                <EmployeesList data={data} changePremials={changePremials}/>
            </div>
            <EmployeesAdd />
        </div>
    );
}

export default App;
