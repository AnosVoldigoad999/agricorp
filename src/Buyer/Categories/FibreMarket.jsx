import {CgProfile} from 'react-icons/cg'
import {AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'
export default function Fibres (){
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
        <div className='godmenu'>
       <input type="checkbox" id="menucheck" />
          <label htmlFor="menucheck" id="menubutton" ><AiOutlineMenu className="menuicon" /></label>
       <div className="menuitems">
          <ul>
          <Link to='/buyerprofile' className="link"><CgProfile className="profile" /></Link>
            <Link className="link" to='/buyerpage'><li>Home</li></Link>
            <Link className="link"><li>About us</li></Link>
            <Link className="link"><li>Services</li></Link>
            <Link className="link"><li>Contact us</li></Link>
          </ul>
        </div>
       </div>
       <br/>
        <main>
            <h1>Our top vendors!</h1>
            <div className="sellers">
                <Link className='link' to="/fibreseller">
            <div className="seller">
            <CgProfile className='pfp' />
            <h1>Seller 1</h1>
            </div>
            </Link>
            {/*<Link className='link' to="/veggieseller">
            <div className="seller">
            <CgProfile className='pfp' />
            <h1>Seller 2</h1>
            </div>
            </Link>
            <Link className='link' to="/veggieseller">
            <div className="seller">
            <CgProfile className='pfp' />
            <h1>Seller 3</h1>
            </div>
            </Link>
            <Link className='link' to="/veggieseller">
            <div className="seller">
            <CgProfile className='pfp' />
            <h1>Seller 4</h1>
            </div>
            </Link>
            <Link className='link' to="/veggieseller">
            <div className="seller">
            <CgProfile className='pfp' />
            <h1>Seller 5</h1>
            </div>
            </Link>
            <Link className='link' to="/veggieseller">
            <div className="seller">
            <CgProfile className='pfp' />
            <h1>Seller 6</h1>
            </div>
</Link>*/}
            
            </div>
        </main>
    </>
}