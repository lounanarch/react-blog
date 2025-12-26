

import { Link } from 'react-router-dom'; // Make sure Link is imported from 'react-router-dom'
import { useEffect } from "react";
import { useStoreState, useStoreActions } from 'easy-peasy';

const Nav = () => {
    const posts = useStoreState((state) => state.posts);
    const search = useStoreState((state) => state.search);
    const setSearch = useStoreActions((actions) => actions.setSearch);
    const setSearchResults = useStoreActions((actions) => actions.setSearchResults);

    useEffect(() => {
        const filteredResults = posts.filter(post => 
          // Ensure post.body and post.title are strings before calling .toLowerCase()
          (post.body && post.body.toLowerCase().includes(search.toLowerCase())) ||
          (post.title && post.title.toLowerCase().includes(search.toLowerCase()))
        );
        setSearchResults(filteredResults.reverse());
    }, [posts, search, setSearchResults]);

    return (
        <div className="Nav">
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">Search Posts</label>
                <input 
                    id="search"
                    type="text"
                    placeholder="Search Posts"
                    value={search} // Correctly bound to the 'value' prop
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <ul>
                <li><Link to="/">Home</Link></li> {/* Use Link from react-router-dom */}
                <li><Link to="/post">Post</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    );
};

export default Nav;

