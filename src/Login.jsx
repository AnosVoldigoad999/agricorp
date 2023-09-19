import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
export default function Login ({
    email, 
    pass, 
    setEmail,
    setPass,
    emailClass,
    passClass,
    setEmailClass,
    setPassClass,
    valid,
    setValid,
    pattern}
    ){
      const [whichlog, setWhichLog] = useState('')
      useEffect(()=>{
        setEmail(' ')
        setPass(' ')
        setEmailClass(' ')
        setPassClass(' ')
        setEmail('')
        setPass('')
        setValid(false)
    }, [])
      const handleSubmit = (e) =>{
        e.preventDefault()      
        if(email.length===0){
            setEmailClass('red')
          } else{
              setEmailClass('')
          }

          
        if(pass.length===0){
            setPassClass('red')
          } else{
              setPassClass('')
          }

          

          if(!email.match(pattern)){
            setEmailClass('red')
          } else{
            setEmailClass('')
          }

          if(
            email.length!==0 &&
            pass.length!==0 &&
            email.match(pattern)&&
            email==='buyer@gmail.com' &&
            pass==='buyer123' ){
                console.log('done')
                setValid(true)
                setWhichLog('buyer')
          }   

          if(
            email.length!==0 &&
            pass.length!==0 &&
            email.match(pattern)&&
            email==='seller@gmail.com' &&
            pass==='seller123' ){
                console.log('done')
                setValid(true)
                setWhichLog('seller')
          }   
      }
    
    return<>
     <nav>
    <Link to="/" className='logo'><h1>Agricorp</h1></Link>
      <div className='logindiv'>
      <Link to="/" className='login'><h4>Home</h4></Link>
      <Link to="#" className='login'><h4>About Us</h4></Link>
      <Link to="#" className='login'><h4>Services</h4></Link>
      <Link to="#" className='login'><h4>Contact Us</h4></Link> 
      </div>
    </nav>
    <div className='godmenu'>
       <input type="checkbox" id="menucheck" />
          <label htmlFor="menucheck" id="menubutton" ><AiOutlineMenu className="menuicon" /></label>
       <div className="menuitems">
          <ul>
            <Link className="link" to='/'><li>Home</li></Link>
            <Link className="link"><li>About us</li></Link>
            <Link className="link"><li>Services</li></Link>
            <Link className="link"><li>Contact us</li></Link>
          </ul>
        </div>
       </div>
    <main className='buyermain'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id='email' value={email} onChange={e=>setEmail(e.target.value)} className={emailClass} />
        <label htmlFor="password" >Password</label>
        <input id='password' type="password" value={pass} onChange={e=>setPass(e.target.value)} className={passClass} />
        {email.length===0?<button className='regbutt'>Login</button>:pass.length===0?<button className='regbutt'>Login</button>:whichlog==='buyer'?<Link to='/buyerpage' className='login'><button className='regbutt'>Login</button></Link>:whichlog==='seller'?<Link to='/sellerpage' className='login'><button className='regbutt'>Login</button></Link>:<button className='regbutt'>Login</button>}
      </form>
    </main>
    </>
  }
  