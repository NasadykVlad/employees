import './app.scss'
import AppInfo from '../app-info/app-info'
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from '../employees-list/employees-list'
import EmployeesAdd from '../employees-add/employees-add'


function App() {
    return (
        <div className = "App">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
                <EmployeesList />
            </div>
            <EmployeesAdd />
        </div>
    );
}

export default App;
