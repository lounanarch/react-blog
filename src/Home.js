//continue from here 
import Feed from './Feed';
import { useStoreState } from 'easy-peasy';

const Home = ({ isLoading, fetchError, posts }) => {
    // Safely access searchResults using optional chaining
    const searchResults = useStoreState((state) => state.searchResults || []);
    console.log('searchResult', searchResults);

    return (
        <main className="Home">
          {/*   {isLoading && <p className="statusMsg">Loading posts....</p>}
            {fetchError && <p className="statusMsg" style={{ color: "red" }}>{fetchError}</p>}
            {!isLoading && !fetchError && (
                searchResults.length > 0 ? (
                    <Feed posts={searchResults} />
                ) : (
                    <p className="statusMsg">No posts to display.</p>
                )
            )} */}
             {searchResults.length > 0 ? (
                     <Feed posts={searchResults} /> 
                ) : (
                    <p className="statusMsg">No posts to display.</p>
                )}
                
        </main>
    );
};

export default Home;
