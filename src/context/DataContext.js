import { createContext, useState, useEffect } from 'react';
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResult] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);  // Example: Width state for window size

    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

    // Sync posts with fetched data
    useEffect(() => {
        setPosts(data);
    }, [data]);

    // Handle search filtering
    useEffect(() => {
        const filteredResults = posts.filter(post =>
            post.body.toLowerCase().includes(search.toLowerCase()) ||
            post.title.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResult(filteredResults.reverse());
    }, [posts, search]);

    // Example of handleSubmit function (you can update this logic)
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle submit logic here (e.g., adding new post, etc.)
        console.log('Submit clicked');
    };

    // Example handleDelete function
    const handleDelete = (id) => {
        const newPosts = posts.filter(post => post.id !== id);
        setPosts(newPosts);
    };

    // Example postTitle and postBody state (you should define these based on your form)
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');

    return (
        <DataContext.Provider value={{
            width, search, setSearch,
            searchResults, fetchError, isLoading,
            handleSubmit, postTitle, setPostTitle, postBody, setPostBody,
            posts, setPosts,
            handleDelete
        }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
