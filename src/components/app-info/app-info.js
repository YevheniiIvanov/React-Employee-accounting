import './app-info.css';

const AppInfo = ({employers, increased}) => {

    return (
        <div className="app-info">
            <h1>Księgowość pracowników w Twojej firmie.</h1>
            <h2>Liczba pracowników: {employers}</h2>
            <h2>Nagrodę otrzymają: {increased}</h2>
        </div>
    )
}

export default AppInfo;