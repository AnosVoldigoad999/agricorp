import { Link } from 'react-router-dom'
import { useEffect } from 'react'
export default function Buyer ({first, 
    last, 
    email, 
    pass, 
    confirm, 
    setFirst,
    setLast,
    setEmail,
    setPass,
    setConfirm,
    firstClass,
    lastClass,
    emailClass,
    passClass,
    confirmClass,
    setFirstClass,
    setLastClass,
    setEmailClass,
    setPassClass,
    setConfirmClass,
    valid,
    setValid}){
    
      useEffect(()=>{
        setFirstClass('')
        setLastClass('')
        setEmailClass('')
        setPassClass('')
        setConfirmClass('')
        setFirst('')
        setLast('')
        setEmail('')
        setPass('')
        setConfirm('')
    }, [])
      const handleSubmit = (e) =>{
        e.preventDefault()
        if(first.length===0){
          setFirstClass('red')
        } else{
            setFirstClass('')
        }

        if(last.length===0){
            setLastClass('red')
          } else{
              setLastClass('')
          }

          
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

          
        if(confirm.length===0){
            setConfirmClass('red')
          } else{
              setConfirmClass('')
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
        <label htmlFor="firstname" >First Name</label>
        <input id='firstname' value={first} onChange={e=>setFirst(e.target.value)} className={firstClass} />
        <label htmlFor="lastname">Last Name</label>
        <input id='lastname' value={last} onChange={e=>setLast(e.target.value)} className={lastClass} />
        <label htmlFor="email">Email</label>
        <input id='email' value={email} onChange={e=>setEmail(e.target.value)} className={emailClass} />
        <label htmlFor="password" >Password</label>
        <input id='password' type="password" value={pass} onChange={e=>setPass(e.target.value)} className={passClass} />
        <label htmlFor="confirm">Confirm password</label>
        <input id='confirm' type='password' value={confirm} onChange={e=>setConfirm(e.target.value)} className={confirmClass} />
        {valid===false ?<button>Register</button>:first.length===0?<button>Register</button>:last.length===0?<button>Register</button>:email.length===0?<button>Register</button>:pass.length===0?<button>Register</button>:confirm.length===0?<button>Register</button>:<Link to='/buyerpage'><button>Register</button></Link>}
      </form>
    </main>
    </>
  }


  
  