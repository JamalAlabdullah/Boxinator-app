import packages from './packages.json'
import './homepage.css'

const HomePackages = () => {

    return (
        <div id="packGrid">
            {packages && packages.map(({id, color, weight, first_name, last_name, destination}) => (
                <div key={id}>
                    <ul id="packUl">
                        <li id="packLi">{first_name} {last_name}</li>
                        <li id="packLi">{color}</li>
                        <li id="packLi">{weight} KG</li>
                        <li id="packLi">{destination}</li>
                    </ul> 
                </div>
            ))}
        </div>
    )

}

export default HomePackages