import { Link } from 'react-router-dom';


const Missing = () => {
    return (
        <main className='Missing'>
            <h2>page not found</h2>
        <p>well, thats disappointing</p>
        <p>
            <Link to='/'>visit our Homepage</Link>
        </p>
   
        </main>
    )
}
export default Missing