import { Link } from 'react-router-dom'

export default function Login ({
    email, 
    pass, 
    setEmail,
    setPass,
    handleSubmit,
    emailClass,
    passClass}){
    return<>
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
    <main className='buyermain'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id='email' value={email} onChange={e=>setEmail(e.target.value)} className={emailClass} />
        <label htmlFor="password" >Password</label>
        <input id='password' type="password" value={pass} onChange={e=>setPass(e.target.value)} className={passClass} />
        <button className='regbutt'>Register</button>
      </form>
    </main>
    </>
  }
  