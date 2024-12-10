// CSS imports
import useDebounce from '../../Hooks/useDebounce';
import './Search.css';

function Search({ updateSearchTerm }) {
    const debounceUpdateSearch = useDebounce((e) => updateSearchTerm(e.target.value));
    return (
        <input 
            id='search-pokemon'
            type="text" 
            placeholder="which pokemon you're loooking for ? " 
            onChange={debounceUpdateSearch}
        />
    )
}

export default Search;