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
            {id: uuid(), name:"Ткачук С.", salary: 800, premials: false, increase: false},
            {id: uuid(), name:"Скірчук В.", salary: 1200, premials: false, increase: false},
            {id: uuid(), name:"Раков О.", salary: 900, premials: false, increase: false}
        ]
    )


    function changePremials(id) {
       changeData(data.map(employe => {
           if(employe.id === id) employe.premials = !employe.premials
           return employe
       }))
    }

    function increasePerson(id) {
        changeData(data.map(employe => {
            if(employe.id === id) employe.increase = !employe.increase
            return employe
        }))
    }

    function deletePerson(id) {
        changeData(data.filter(item => item.id !== id))
    }

    function addNewEmploye() {
        const nameNewEmploye = document.querySelector('.name-new-employee').value
        const salaryNewEmploye = document.querySelector('.salary-new-employee').value

        if (nameNewEmploye && salaryNewEmploye) {
            changeData(data.concat([
                {id: uuid(), name: nameNewEmploye, salary: salaryNewEmploye, premials: false, increase: false}
            ]))

            document.querySelector('.name-new-employee').value = ''
            document.querySelector('.salary-new-employee').value = ''
        }
    }

    return (
        <div className = "App">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
                <EmployeesList data={data} changePremials={changePremials} increasePerson={increasePerson} deletePerson={deletePerson}/>
            </div>
            <EmployeesAdd addNewEmploye={addNewEmploye} />
        </div>
    );
}

export default App;
