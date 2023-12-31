import{RiFacebookFill, RiTwitterFill} from 'react-icons/ri'
import { PiInstagramLogo } from 'react-icons/pi'
import {AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
export default function Landing({setValid}){
  useEffect(()=>{
    setValid(false)
  }, [])
    return <>
    <nav>
    <Link to="/" className='logo'><h1>Agricorp</h1></Link>
      <div className='logindiv'>
      <Link to="/" className='login'><h4>Home</h4></Link>
      <Link to="#" className='login'><h4>About Us</h4></Link>
      <Link to="#" className='login'><h4>Services</h4></Link>
      <Link to="#" className='login'><h4>Contact Us</h4></Link> 
      <Link to="/login" className='login'><h4 className='log'>Login</h4></Link>
      </div>
    </nav>
    <div className='godmenu'>
       <input type="checkbox" id="menucheck" />
          <label htmlFor="menucheck" id="menubutton" ><AiOutlineMenu className="menuicon" /></label>
       <div className="menuitems">
          <ul>
          <Link className="link" to='/login'><li>Login</li></Link>
            <Link className="link" to='/'><li>Home</li></Link>
            <Link className="link"><li>About us</li></Link>
            <Link className="link"><li>Services</li></Link>
            <Link className="link"><li>Contact us</li></Link>
          </ul>
        </div>
       </div>
    <br />
    <main>
    <div className='everything'>
      <h1>SALES MADE EASY!</h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac orci in mi facilisis dictum at a lectus. Morbi lobortis hendrerit faucibus. Donec scelerisque gravida felis maximus rhoncus. 
      </p>
      <Link to='/register'><button>Register</button></Link>
      </div>
    </main>
    <br/>
    <footer>
      <RiFacebookFill className='icon' />
      <RiTwitterFill className='icon' />
      <PiInstagramLogo className='icon' />
    </footer>
    </>
  }
  