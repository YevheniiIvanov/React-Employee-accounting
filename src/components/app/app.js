import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: "Yevhenii I.", salary: 1500, increase: false, rise: true, id: 1},
                {name: "Lesia I.", salary: 1100, increase: false, rise: false, id: 2},
                {name: "Oleksandra I.", salary: 900, increase: true, rise: false, id: 3},
                {name: "Yewheniusz Z.", salary: 500, increase: false, rise: false, id: 4},
                {name: "Mariusz B.", salary: 800, increase: false, rise: false, id: 5}
            ], 
            term: '',
            filter: 'all',
            salary: ''
        }
        this.maxId = 5;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return{
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name: name,
            salary: salary,
            increase: false,
            rise: false, 
            id: ++this.maxId
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    // onToggleIncrease = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //                 if(item.id === id){
    //                     return {...item, increase: !item.increase}
    //                 }
    //                 return item;
    //             })
    //     }))
    // }

    // onToggleRise = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //                 if(item.id === id){
    //                     return {...item, rise: !item.rise}
    //                 }
    //                 return item;
    //             })
    //     }))
    // }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (items.length === 0){
            return items;
        }
        
        return items.filter( item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'over1000':
                return items.filter(item => item.salary > 1000);
            default: return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState(({filter}))
    }

    onChangeSalary = (name, salary) => {
        console.log(salary);
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.name === name){
                    return {...item, salary: salary}
                    
                }
                return item;
            })
        }))
    }

    render () {
        const {data, term, filter} = this.state;
        const employers = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo
                    employers={employers}
                    increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>

                <EmployersList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onChangeSalary={this.onChangeSalary}
                    />

                <EmployersAddForm 
                    onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;