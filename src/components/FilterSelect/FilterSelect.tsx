//////////////////////////////////////////////////////////////////////////////////////////////
// Fichier : Composant FilterSelect 
// Auteur  : EL MAHI Sélim
////////////////////////////////////////////////////////////////////////////////////////////
import './FilterSelect.css'
import { Filter } from '../../type/Filter'

interface FilterSelectProps { // types de la fonction filterselectprops
    filtersList: Filter[],
    update: Function,
}

function FilterSelect({filtersList, update}: FilterSelectProps){ // Description de la fonction filterlist

    function handleChange(e){              
        let filterSelected :Filter | String;
        let valueSelected: Number = parseInt(e.target.value)
        for (let i = 0; i < filtersList.length; i++){
            if(filtersList[i].code === valueSelected){
                filterSelected = filtersList[i]
            }
        }
        console.log(filterSelected)
        update(filterSelected)          // on update le state du composant parent
    }

    return (
        <div data-testid="filter-select" id="filter-select">
            <label htmlFor="district-select">Choisissez un arrondissement</label>

            <select name="districts" id="district-select" onChange={(e) => handleChange(e)}>
                <option value="default"></option> 
                {filtersList.map((filter, index) => (
                    <option key={index} value={filter.code}>{filter.name}</option>
                ))}
            </select>
        </div>
    )
}

export default FilterSelect