import './app-filter.css';

const AppFilter = (props) => {

    const buttonsData = [
        {name: 'all', lable: 'Wszyscy pracownicy'},
        {name: 'rise', lable: 'Awans'},
        {name: 'over1000', lable: 'Wynagrodzenie powyżej 1000 $'}
    ];

    const buttons = buttonsData.map(({name, lable}) => {
        const active = props.filter === name;
        const clazz = active ? "btn btn-light" : "btn btn-outline-light";
        return(
            <button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                    {lable}
            </button>
        )
    })

    return (
        
        <div className="btn-group">
            {buttons}
       </div>
    )
}

export default AppFilter;