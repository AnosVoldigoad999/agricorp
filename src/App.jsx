import './App.css'
import {Link} from 'react-router-dom'
export default function App(){
  return <>
  <nav>
  <Link to="#" className='logo'><h1>Agricorp</h1></Link>
    <div className='logindiv'>
    <Link to="#" className='login'><h2>Login</h2></Link>
    </div>
  </nav>
  <main></main>
  <footer></footer>
  </>
}