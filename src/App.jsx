import './App.css'
import {Link, Route, Routes} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Register  from './Register'
import Landing from './Landing'
import Login from './Login'
import Seller from './Seller/Seller'
import Buyer from './Buyer/Buyer'
import BuyerHome from './Buyer/BuyerPage'
import SellerHome from './Seller/SellerPage'
import BuyerProfile from './Buyer/BuyerProfile'
import Cart from './Buyer/BuyerCart'
import SellerProfile from './Seller/SellerProfile'
import SellerMarket from './Seller/SellerMarket'
import Veggies from './Buyer/Categories/VegetableMarket'
import Seeds from './Buyer/Categories/SeedMarket'
import Other from './Buyer/Categories/OtherMarket'

/*cats*/
import VegetableSeller from './Seller/Categories/VegetableSeller'
import OtherSeller from './Seller/Categories/OtherSeller'
import SeedSeller from './Seller/Categories/SeedSeller'
import LegumeSeller from './Seller/Categories/LegumeSeller'
import NutSeller from './Seller/Categories/NutSeller'
import CerealSeller from './Seller/Categories/CerealSeller'
import FruitSeller from './Seller/Categories/FruitSeller'
import FibreSeller from './Seller/Categories/FibreSeller'
import BeverageSeller from './Seller/Categories/BeverageSeller'
/*cats*/
import AddItems from './Seller/AddItems'
import Fruits from './Buyer/Categories/FruitMarket'
import Cereals from './Buyer/Categories/CerealMarket'
import Legumes from './Buyer/Categories/LegumeMarket'
import Nuts from './Buyer/Categories/NutMarket'
import Beverages from './Buyer/Categories/BeverageMarket'
import Fibres from './Buyer/Categories/FibreMarket'
export default function App(){
  
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [confirm, setConfirm] = useState('')
  const [firstClass, setFirstClass] = useState('')
  const [lastClass, setLastClass] = useState('')
  const [emailClass, setEmailClass] = useState('')
  const [passClass, setPassClass] = useState('')
  const [confirmClass, setConfirmClass] = useState('')
  const [valid, setValid] = useState(false)
  const [productName, setProductName] = useState('')
  const [linkaddress, setLink] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [category, setCategory] = useState('')
  const [goods, setGoods] = useState(()=>{
    const storedGoods = JSON.parse(localStorage.getItem('goods'))
    if (!storedGoods){
      return []
    } else{
      return storedGoods
    }
  })
useEffect(
  ()=>{
    localStorage.setItem('goods', JSON.stringify(goods))
  }
, [goods])
  const pattern =  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/


  return <>

<Routes>
<Route path='/buyerpage' element={<BuyerHome goods={goods} setGoods={setGoods} />} />
<Route path='/sellerpage' element={<SellerHome goods={goods} />} />
  <Route path='/' element={<Landing />} />
  <Route path='/buyerprofile' element={<BuyerProfile />} />
  <Route path='/cart' element={<Cart />} />
  <Route path='/sellerprofile' element={<SellerProfile />} />
  <Route path='/listings' element={<SellerMarket
  goods={goods}
  setGoods={setGoods} />} />
  <Route path='/veggies' element={<Veggies />} />
  <Route path='/seeds' element={<Seeds />} />
  <Route path='/other' element={<Other />} />
  <Route path='/fruits' element={<Fruits />} />
  <Route path='/cereals' element={<Cereals />} />
  <Route path='/legumes' element={<Legumes />} />
  <Route path='/nuts' element={<Nuts />} />
  <Route path='beverages' element={<Beverages />} />
  <Route path='fibres' element={<Fibres />} />
  {/*cats*/}
  <Route path='/veggieseller' element={<VegetableSeller
  goods={goods}
  setGoods={setGoods} />} />
  <Route path='/seedseller' element={<SeedSeller
  goods={goods}
  setGoods={setGoods} />} />
  <Route path='/otherseller' element={<OtherSeller
  goods={goods}
  setGoods={setGoods} />} />
    <Route path='/cerealseller' element={<CerealSeller
  goods={goods}
  setGoods={setGoods} />} />
    <Route path='/legumeseller' element={<LegumeSeller
  goods={goods}
  setGoods={setGoods} />} />
    <Route path='/fruitseller' element={<FruitSeller
  goods={goods}
  setGoods={setGoods} />} />
    <Route path='/nutseller' element={<NutSeller
  goods={goods}
  setGoods={setGoods} />} />
    <Route path='/fibreseller' element={<FibreSeller
  goods={goods}
  setGoods={setGoods} />} />
    <Route path='/beverageseller' element={<BeverageSeller
  goods={goods}
  setGoods={setGoods} />} />
  {/*cats*/}
  
  <Route path='/additems' element={<AddItems productName={productName}
  setProductName={setProductName}
  linkaddress={linkaddress}
  setLink={setLink}
  price={price}
  setPrice={setPrice}
  quantity={quantity}
  setQuantity={setQuantity}
  goods={goods}
  setGoods={setGoods}
  category={category}
  setCategory={setCategory}
  /*classes*/
  setFirstClass={setFirstClass}
  setLastClass={setLastClass}
  setEmailClass={setEmailClass}
  setPassClass={setPassClass}
  setConfirmClass={setConfirmClass}
  firstClass={firstClass}
  lastClass={lastClass}
  emailClass={emailClass}
  passClass={passClass}
  confirmClass={confirmClass}
  valid={valid}
  setValid={setValid} />} />
  
  <Route path='/login'  element={<Login
   email={email}
   pass={pass}
   setPass={setPass}
   setEmail={setEmail}
   emailClass={emailClass}
   setEmailClass={setEmailClass}
   passClass={passClass}
   setPassClass={setPassClass} />} />
  <Route path='/register'  element={<Register />} />
  <Route path='/buyer' element={<Buyer first={first}
   setFirst={setFirst}
   last={last}
   setLast={setLast}
   email={email}
   setEmail={setEmail}
   pass={pass}
   setPass={setPass}
   confirm={confirm}
   setConfirm={setConfirm}
   /*classes*/
   setFirstClass={setFirstClass}
   setLastClass={setLastClass}
   setEmailClass={setEmailClass}
   setPassClass={setPassClass}
   setConfirmClass={setConfirmClass}
   firstClass={firstClass}
   lastClass={lastClass}
   emailClass={emailClass}
   passClass={passClass}
   confirmClass={confirmClass}
   valid={valid}
   setValid={setValid} />} />
     <Route path='/seller' element={<Seller first={first}
   setFirst={setFirst}
   last={last}
   setLast={setLast}
   email={email}
   setEmail={setEmail}
   pass={pass}
   setPass={setPass}
   confirm={confirm}
   setConfirm={setConfirm}
   /*classes*/
   setFirstClass={setFirstClass}
   setLastClass={setLastClass}
   setEmailClass={setEmailClass}
   setPassClass={setPassClass}
   setConfirmClass={setConfirmClass}
   firstClass={firstClass}
   lastClass={lastClass}
   emailClass={emailClass}
   passClass={passClass}
   confirmClass={confirmClass}
   valid={valid}
   setValid={setValid} />} />
</Routes>
  </>
}








  