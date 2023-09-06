import { Link } from 'react-router-dom'

export default function Register (){
    return <>
     <nav>
    <Link to="#" className='logo'><h1>Agricorp</h1></Link>
      <div className='logindiv'>
      <Link to="/" className='login'><h4>Home</h4></Link>
      <Link to="#" className='login'><h4>About Us</h4></Link>
      <Link to="#" className='login'><h4>Services</h4></Link>
      <Link to="#" className='login'><h4>Contact Us</h4></Link> 
      <Link to="/login" className='login'><h4 className='log'>Login</h4></Link>
      </div>
    </nav>
    <main className='mainregister'>
      <h1>
        Choose your destiny!
      </h1>
      <div className='choosing'>
        <div className='card'>
          <h3>Register as a buyer</h3>
          <Link to="/buyer"><button className='yes'>Yes</button></Link>
        </div>
        <div className='card'>
          <h3>Register as a seller</h3>
          <Link to='/seller'><button className='yes'>Yes</button></Link>
        </div>
      </div>
    </main>
    </>
  }