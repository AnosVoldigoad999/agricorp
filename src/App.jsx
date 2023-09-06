import './App.css'
import {Link, Route, Routes} from 'react-router-dom'
import { useState } from 'react'
import Register  from './Register'
import Landing from './Landing'
import Login from './Login'
import Seller from './Seller'
import Buyer from './Buyer'
import BuyerHome from './BuyerPage'
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

  const pattern =  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/


  return <>

<Routes>
<Route path='/buyerpage' element={<BuyerHome />} />
  <Route path='/' element={<Landing />} />
  <Route path='/login'  element={<Login
   email={email}
   pass={pass}
   setPass={setPass}
   setEmail={setEmail} />} />
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
   confirmClass={confirmClass} />} />
</Routes>
  </>
}








  