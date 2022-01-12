import {Link} from 'react-router-dom';
function Header({text}) {
    return (
        <header>
            <div className="container">
                <Link to='/'> <h2 className='white'>{text}</h2> </Link>
            </div>
        </header>
    )
}

export default Header

