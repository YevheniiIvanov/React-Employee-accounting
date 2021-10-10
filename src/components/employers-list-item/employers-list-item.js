import { Component } from 'react';

import './employers-list-item.css';

class EmployesListItem extends Component  {
        constructor(props){
            super(props);
            this.state = {
                salary: ''
            }
        }

        onChangeSalaryCount = (e) => { 
            const salary = e.target.value
            this.setState({salary});
            this.props.onChangeSalary(this.props.name, salary);
        }

    render() {
        const {name, salary, onDelete, onToggleProp, increase, rise} = this.props;

        let classNames = "list-group-item d-flex justify-content-between";
        if(increase){
            classNames += ' increase';
        }

        if(rise){
            classNames += ' like';
        }

        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise">{name}</span>
                <input type="number" className="list-group-item-input"  
                    // value={salary}
                    defaultValue={salary}                    
                    onChange={this.onChangeSalaryCount}
                    />
                    
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp}
                        data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm " 
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployesListItem;