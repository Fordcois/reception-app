import '../app/globals.css';

interface Props {
    searchCriteria: string;
    setSearchCriteria: (value: string) => void;
}

export const SearchBar: React.FC<Props> = ({ searchCriteria, setSearchCriteria }) => {
    return (
        <div>
            <p>Criteria is: {searchCriteria}</p>
            <input
                type="text"
                placeholder="Search users..."
                value={searchCriteria}
                onChange={(e) => setSearchCriteria(e.target.value)}
            />
        </div>
    );
};
