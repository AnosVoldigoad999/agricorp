import {CgProfile} from 'react-icons/cg'
import { Link } from 'react-router-dom'
export default function Other (){
    return<>
     <nav>
        <Link to="/" className='logo'><h1>Agricorp</h1></Link>
          <div className='logindiv'>
          <Link to="/buyerpage" className='login'><h4>Home</h4></Link>
          <Link to="#" className='login'><h4>About Us</h4></Link>
          <Link to="#" className='login'><h4>Services</h4></Link>
          <Link to="#" className='login'><h4>Contact Us</h4></Link> 
          <Link to='/buyerprofile' className="profilelink"><CgProfile className="profile" /></Link>
</div>
        </nav> 
        <main>
            <h1>Our top vendors!</h1>
            <div className="sellers">
                <Link className='link' to="/otherseller">
            <div className="seller">
            <CgProfile className='pfp' />
            <h1>Seller 1</h1>
            </div>
            </Link>
            {/*<Link className='link' to="/otherseller">
            <div className="seller">
            <CgProfile className='pfp' />
            <h1>Seller 2</h1>
            </div>
            </Link>
            <Link className='link' to="/otherseller">
            <div className="seller">
            <CgProfile className='pfp' />
            <h1>Seller 3</h1>
            </div>
            </Link>
            <Link className='link' to="/otherseller">
            <div className="seller">
            <CgProfile className='pfp' />
            <h1>Seller 4</h1>
            </div>
            </Link>
            <Link className='link' to="/otherseller">
            <div className="seller">
            <CgProfile className='pfp' />
            <h1>Seller 5</h1>
            </div>
            </Link>
            <Link className='link' to="/otherseller">
            <div className="seller">
            <CgProfile className='pfp' />
            <h1>Seller 6</h1>
            </div>
            </Link>*/}
            </div>
        </main>
    </>
}