import '../app/globals.css';
import { FaSearch,FaTimesCircle  } from "react-icons/fa";

interface Props {
    searchCriteria: string;
    setSearchCriteria: (value: string) => void;
}

export const SearchBar: React.FC<Props> = ({ searchCriteria, setSearchCriteria }) => {
    return (
        <div className="form-field">
            <input
                type="text"
                placeholder="Search users..."
                value={searchCriteria}
                onChange={(e) => setSearchCriteria(e.target.value)}
                className='Searchbar'
            />
            <span className="icon"><FaSearch/></span>
            <span className="delete">{searchCriteria.length>0? <FaTimesCircle onClick={()=>setSearchCriteria('')}/>:''}</span>
        </div>
    );
};





