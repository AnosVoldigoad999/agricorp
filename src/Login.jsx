import { useEffect } from 'react'
import { Link } from 'react-router-dom'
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
    setValid}){
      useEffect(()=>{
        setEmailClass(' ')
        setPassClass(' ')
        setEmail('')
        setPass('')
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

          if(first.length!==0 && 
            last.length!==0 &&
            email.length!==0 &&
            pass.length!==0 &&
            confirm.length!==0){
                console.log('done')
                setValid(true)
                console.log(valid)
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
      <Link to="/login" className='login'><h4 className='log'>Login</h4></Link>
      </div>
    </nav>
    <main className='buyermain'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id='email' value={email} onChange={e=>setEmail(e.target.value)} className={emailClass} />
        <label htmlFor="password" >Password</label>
        <input id='password' type="password" value={pass} onChange={e=>setPass(e.target.value)} className={passClass} />
        <button className='regbutt'>Login</button>
      </form>
    </main>
    </>
  }
  