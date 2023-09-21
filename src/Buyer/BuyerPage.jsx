import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import '../styles/Buyer.css'
import {AiOutlineShop, AiOutlineMenu} from 'react-icons/ai'
import VegetableSeller from "../Seller/Categories/VegetableSeller"
import {CgProfile} from 'react-icons/cg'
export default function BuyerHome ({goods, setGoods}){
    const [isSearching, setIsSearching] = useState('')
    const main = <main className="wo">
    <h1 className="choiceh1">What would you like to buy?</h1>
    <div className="choices">
        <Link className="link" to='/veggies'>
            <div className="choice">
            <img className="vegetables" alt="vegetables" />
            <h2>Vegetables</h2>
            </div>
        </Link>
        <Link  className="link" to="/seeds">
            <div className="choice">
            <img className="seeds" alt="seeds" />
            <h2>Seeds</h2>
            </div>
            </Link>
        <Link className="link" to='/cereals' >
            <div className="choice">
            <img className="cereals" alt="other" />
            <h2>Cereals</h2>
            </div>
            </Link>
            <Link className="link" to='/legumes' >
            <div className="choice">
            <img className="legumes" alt="other" />
            <h2>Legumes</h2>
            </div>
            </Link>
            <Link className="link" to='/fruits' >
            <div className="choice">
            <img className="fruits" alt="other" />
            <h2>Fruits</h2>
            </div>
            </Link>
            <Link className="link" to='/nuts' >
            <div className="choice">
            <img className="nuts" alt="other" />
            <h2>Nuts</h2>
            </div>
            </Link>
            <Link className="link" to='/fibres' >
            <div className="choice">
            <img className="fibres" alt="other" />
            <h2>Fibres</h2>
            </div>
            </Link>
            <Link className="link" to='/beverages' >
            <div className="choice">
            <img className="beverages" alt="other" />
            <h2>Beverages</h2>
            </div>
            </Link>
            <Link className="link" to='/other' >
            <div className="choice">
            <img className="other" alt="other" />
            <h2>Other</h2>
            </div>
            </Link>
    </div>
  </main>
  const searchResults = <>
  {isSearching==='Vegetables'?<Veggieresult goods={goods}
  setGoods={setGoods} isSearching={isSearching}  />:isSearching==='vegetables'?<Veggieresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:isSearching==='Vegetable'?<Veggieresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:isSearching==='vegetable'?<Veggieresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:
  isSearching==='Beverages'?<Beverageresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:isSearching==='beverages'?<Beverageresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:isSearching==='Beverage'?<Beverageresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:isSearching==='beverage'?<Beverageresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:
  isSearching==='Cereals'?<Cerealresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:isSearching==='cereals'?<Cerealresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:isSearching==='Cereal'?<Cerealresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:isSearching==='cereal'?<Cerealresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:
  isSearching==='Fibres'?<Fibreresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:isSearching==='fibres'?<Fibreresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:isSearching==='Fibre'?<Fibreresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:isSearching==='fibre'?<Fibreresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:
  isSearching==='Fruits'?<Fruitresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:isSearching==='fruits'?<Fruitresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:isSearching==='Fruit'?<Fruitresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:isSearching==='fruit'?<Fruitresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:
  isSearching==='Legumes'?<Legumeresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:isSearching==='legumes'?<Legumeresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:isSearching==='Legume'?<Legumeresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:isSearching==='legume'?<Legumeresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:
  isSearching==='Nuts'?<Nutresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:isSearching==='nuts'?<Nutresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:isSearching==='Nut'?<Nutresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:isSearching==='nut'?<Nutresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:
  isSearching==='Others'?<Otherresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:isSearching==='others'?<Otherresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:isSearching==='Other'?<Otherresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:isSearching==='other'?<Otherresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:
  isSearching==='Seeds'?<Seedresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:isSearching==='seeds'?<Seedresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:isSearching==='Seed'?<Seedresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:isSearching==='seed'?<Seedresult isSearching={isSearching} goods={goods}
  setGoods={setGoods}  />:<>
  <main>
      <h1>Showing results for: <i>{isSearching}</i></h1>
  <AiOutlineShop className='bigcart' />
      <h2>No items yet!</h2>
  </main>
  <div className="suggestions">
  <span>Try using terms such as</span>
      <ul>
        <li>Vegetables</li>
        <li>Seeds</li>
        <li>Nuts</li>
        <li>Legumes</li>
        <li>Fruits</li>
        <li>Fibres</li>
        <li>Cereal</li>
        <li>Beverages</li>
        <li>Other</li>
      </ul>
      </div>
  </>
  }
  </>
return<>
        <nav>
        <Link to="/buyerpage" className='logo'><h1>Agricorp</h1></Link>
        <input placeholder="search by category..." className="searchbar" value={isSearching} onChange={e=>setIsSearching(e.target.value)} />
        <input placeholder="search by category..." className="mobilesearchbar" value={isSearching} onChange={e=>setIsSearching(e.target.value)} />
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
       <br />
        {!isSearching? main:searchResults}
    </>
  }
/*SEARCH*/
  function Veggieresult ({goods, isSearching}){
    const [veggies, setVeggies] = useState([])
useEffect(()=>{
  for(let i=0; i<goods.length; i++){
    if(goods[i].category==='Vegetables'){
      setVeggies(currentVeggies=>{
        return [...currentVeggies, goods[i]]
      })
    }
  }
}, [])
    return<>
            <div className="sellermain">
            <h1>Showing results for: <i>{isSearching}</i></h1>
            <br />
          <br />
        {veggies.length===0 &&   <div className='main'>
    <AiOutlineShop className='bigcart' />
        <h2>No items yet!</h2>
    </div>}
     {
      veggies.length>=1 && <div className="mainlistings">
        {
          goods.map(good=>{
          if(good.category==='Vegetables'){
            return<Link className="link" >
            <div  className="listing" key={good.id} >
            <img  src={good.link} alt={good.name} />
            <h2>{good.name}</h2>
            <p className="prop">price: {`#${good.price}`}</p>
            <p className="prop">Quantity: {good.quantity}</p>
            <p className="prop">category:{good.category}</p>
            </div>
        </Link>
          }
           })
        }
      </div>
     }
        </div>
    </>
  }

  function Beverageresult({goods, isSearching}){
    const [beverages, setBeverages] = useState([])
    useEffect(()=>{
      for(let i=0; i<goods.length; i++){
        if(goods[i].category==='Beverages'){
          setBeverages(currentBeverages=>{
            return [...currentBeverages, goods[i]]
          })
        }
      }
    }, [])
      return<>
              <div className="sellermain">
              <h1>Showing results for: <i>{isSearching}</i></h1>
            <br />
            {beverages.length===0 &&   <div className='main'>
      <AiOutlineShop className='bigcart' />
          <h2>No items yet!</h2>
      </div>}
       {
        beverages.length>=1 && <div className="mainlistings">
          {
            goods.map(good=>{
             if(good.category==='Beverages'){
              return<Link className="link" >
              <div  className="listing" key={good.id} >
              <img  src={good.link} alt={good.name} />
              <h2>{good.name}</h2>
              <p className="prop">price: {`#${good.price}`}</p>
              <p className="prop">Quantity: {good.quantity}</p>
              <p className="prop">category:{good.category}</p>
              </div>
          </Link>
             }
            })
          }
        </div>
       }
          </div>
      </>
  }

  function Cerealresult({goods, isSearching}){
    const [cereals, setCereals] = useState([])
    useEffect(()=>{
      for(let i=0; i<goods.length; i++){
        if(goods[i].category==='Cereals'){
          setCereals(currentCereals=>{
            return [...currentCereals, goods[i]]
          })
        }
      }
    }, [])
      return<>
              <div className="sellermain">
              <h1>Showing results for: <i>{isSearching}</i></h1>
              <br />
            <br />
            {cereals.length===0 &&   <div className='main'>
      <AiOutlineShop className='bigcart' />
          <h2>No items yet!</h2>
      </div>}
       {
        cereals.length>=1 && <div className="mainlistings">
          {
            goods.map(good=>{
             if(good.category==='Cereal'){
              return<Link className="link" >
              <div  className="listing" key={good.id} >
              <img  src={good.link} alt={good.name} />
              <h2>{good.name}</h2>
              <p className="prop">price: {`#${good.price}`}</p>
              <p className="prop">Quantity: {good.quantity}</p>
              <p className="prop">category:{good.category}</p>
              </div>
          </Link>
             }
            })
          }
        </div>
       }
          </div>
      </>
  }

  function Fibreresult({goods, isSearching}){
    const [fibres, setFibres] = useState([])
    useEffect(()=>{
      for(let i=0; i<goods.length; i++){
        if(goods[i].category==='Fibres'){
          setFibres(currentFibres=>{
            return [...currentFibres, goods[i]]
          })
        }
      }
    }, [])
      return<>
              <div className="sellermain">
              <h1>Showing results for: <i>{isSearching}</i></h1>
              <br />
            <br />
            {fibres.length===0 &&   <div className='main'>
      <AiOutlineShop className='bigcart' />
          <h2>No items yet!</h2>
      </div>}
       {
       fibres.length>=1 && <div className="mainlistings">
          {
            goods.map(good=>{
             if(good.category==='Fibres'){
              return<Link className="link" >
              <div  className="listing" key={good.id} >
              <img  src={good.link} alt={good.name} />
              <h2>{good.name}</h2>
              <p className="prop">price: {`#${good.price}`}</p>
              <p className="prop">Quantity: {good.quantity}</p>
              <p className="prop">category:{good.category}</p>
              </div>
          </Link>
             }
            })
          }
        </div>
       }
          </div>
      </>
  }

  function Fruitresult({goods, isSearching}){
    const [fruits, setFruits] = useState([])
    useEffect(()=>{
      for(let i=0; i<goods.length; i++){
        if(goods[i].category==='Fruits'){
          setFruits(currentFruits=>{
            return [...currentFruits, goods[i]]
          })
        }
      }
    }, [])
      return<>
              <div className="sellermain">
              <h1>Showing results for: <i>{isSearching}</i></h1>
              <br />
            <br />
            {fruits.length===0&&   <div className='main'>
      <AiOutlineShop className='bigcart' />
          <h2>No items yet!</h2>
      </div>}
       {
      fruits.length>=1 && <div className="mainlistings">
          {
            goods.map(good=>{
             if(good.category==='Fruits'){
              return<Link className="link" >
              <div  className="listing" key={good.id} >
              <img  src={good.link} alt={good.name} />
              <h2>{good.name}</h2>
              <p className="prop">price: {`#${good.price}`}</p>
              <p className="prop">Quantity: {good.quantity}</p>
              <p className="prop">category:{good.category}</p>
              </div>
          </Link>
             }
            })
          }
        </div>
       }
          </div>
      </>
  }

  function Legumeresult({goods, isSearching}){
    const [legumes, setLegumes] = useState([])
  useEffect(()=>{
    for(let i=0; i<goods.length; i++){
      if(goods[i].category==='Legumes'){
        setLegumes(currentLegumes=>{
          return [...currentLegumes, goods[i]]
        })
      }
    }
  }, [])

    return<>
            <div className="sellermain">
            <h1>Showing results for: <i>{isSearching}</i></h1>
            <br />
          <br />
          {legumes.length===0 &&   <div className='main'>
    <AiOutlineShop className='bigcart' />
        <h2>No items yet!</h2>
    </div>}
     {
      legumes.length>=1 && <div className="mainlistings">
        {
          goods.map(good=>{
           if(good.category==='Legumes'){
            return<Link className="link" >
            <div  className="listing" key={good.id} >
            <img  src={good.link} alt={good.name} />
            <h2>{good.name}</h2>
            <p className="prop">price: {`#${good.price}`}</p>
            <p className="prop">Quantity: {good.quantity}</p>
            <p className="prop">category:{good.category}</p>
            </div>
        </Link>
           }
          })
        }
      </div>
     }
        </div>
    </>
  }

  function Nutresult({goods, isSearching}){
    const [nuts, setNuts] = useState([])
    useEffect(()=>{
      for(let i=0; i<goods.length; i++){
        if(goods[i].category==='Nuts'){
          setNuts(currentNuts=>{
            return [...currentNuts, goods[i]]
          })
        }
      }
    }, [])
      return<>
              <div className="sellermain">
              <h1>Showing results for: <i>{isSearching}</i></h1>
              <br />
            <br />
            {nuts.length===0 &&   <div className='main'>
      <AiOutlineShop className='bigcart' />
          <h2>No items yet!</h2>
      </div>}
       {
        nuts.length>=1 && <div className="mainlistings">
          {
            goods.map(good=>{
             if(good.category==='Nuts'){
              return<Link className="link" >
              <div  className="listing" key={good.id} >
              <img  src={good.link} alt={good.name} />
              <h2>{good.name}</h2>
              <p className="prop">price: {`#${good.price}`}</p>
              <p className="prop">Quantity: {good.quantity}</p>
              <p className="prop">category:{good.category}</p>
              </div>
          </Link>
             }
            })
          }
        </div>
       }
          </div>
      </>
  }

  function Otherresult({goods, isSearching}){
    const [other, setOther] = useState([])
    useEffect(()=>{
      for(let i=0; i<goods.length; i++){
        if(goods[i].category==='Other'){
          setOther(currentOther=>{
            return [...currentOther, goods[i]]
          })
        }
      }
    }, [])
      return<>
              <div className="sellermain">
              <h1>Showing results for: <i>{isSearching}</i></h1>
              <br />
            <br />
          {other.length===0 &&   <div className='main'>
      <AiOutlineShop className='bigcart' />
          <h2>No items yet!</h2>
      </div>}
       {
      other.length>=1 && <div className="mainlistings">
          {
            goods.map(good=>{
            if(good.category==='Other'){
              return<Link className="link" >
              <div  className="listing" key={good.id} >
              <img  src={good.link} alt={good.name} />
              <h2>{good.name}</h2>
              <p className="prop">price: {`#${good.price}`}</p>
              <p className="prop">Quantity: {good.quantity}</p>
              <p className="prop">category:{good.category}</p>
              </div>
          </Link>
            }
             })
          }
        </div>
       }
          </div>
      </>
  }

  function Seedresult({goods, isSearching}){
    const [seeds, setSeeds] = useState([])
    useEffect(()=>{
      for(let i=0; i<goods.length; i++){
        if(goods[i].category==='Seeds'){
          setSeeds(currentSeeds=>{
            return [...currentSeeds, goods[i]]
          })
        }
      }
    }, [])
      return<>
              <div className="sellermain">
              <h1>Showing results for: <i>{isSearching}</i></h1>
              <br />
            <br />
            {seeds.length===0 &&   <div className='main'>
      <AiOutlineShop className='bigcart' />
          <h2>No items yet!</h2>
      </div>}
       {
        seeds.length>=1 && <div className="mainlistings">
          {
            goods.map(good=>{
             if(good.category==='Seeds'){
              return<Link className="link" >
              <div  className="listing" key={good.id} >
              <img  src={good.link} alt={good.name} />
              <h2>{good.name}</h2>
              <p className="prop">price: {`#${good.price}`}</p>
              <p className="prop">Quantity: {good.quantity}</p>
              <p className="prop">category:{good.category}</p>
              </div>
          </Link>
             }
            })
          }
        </div>
       }
          </div>
      </>
  }