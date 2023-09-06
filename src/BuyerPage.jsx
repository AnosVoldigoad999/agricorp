import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function BuyerHome (){
return<>
        <nav>
        <Link to="#" className='logo'><h1>Agricorp</h1></Link>
          <div className='logindiv'>
          <Link to="/" className='login'><h4>Home</h4></Link>
          <Link to="#" className='login'><h4>About Us</h4></Link>
          <Link to="#" className='login'><h4>Services</h4></Link>
          <Link to="#" className='login'><h4>Contact Us</h4></Link> 
          </div>
        </nav> 
        <main>
            <h1>What would you like to buy?</h1>
            <div className="choices">
                <div className="choice">
                    <img className="vegetables" alt="vegetables" />
                    <h2>Vegetables</h2>
                </div>
                <div className="choice">
                    <img className="seeds" alt="seeds" />
                    <h2>Seeds</h2>
                    </div>
                <div className="choice">
                    <img className="other" alt="other" />
                    <h2>Other</h2>
                    </div>
            </div>
          </main>
    </>
  }