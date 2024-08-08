import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style.css'
import { MdShoppingCart } from "react-icons/md";
import { GiHamburger } from "react-icons/gi";
import { MdDinnerDining } from "react-icons/md";
import { GiFullWoodBucketHandle } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import { ImArrowDown } from "react-icons/im";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { MdArrowDropDownCircle } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoLogoWindows } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { RiGalleryLine } from "react-icons/ri";
import { TbNotes } from "react-icons/tb";
import { CiShoppingBasket } from "react-icons/ci";


function App() {
 

  return (
    <>
    <div className='maindiv'>
          <div className='flex mb-5 gap-2'>
                 <div className='m-2'><IoLogoWindows color='blue' size='3rem'/></div>
                 <input type="text" placeholder='search' className='h-10 w-96 m-4 p-2'/>
                 <div className='rounded-full top-circle m-2' style={{marginLeft : 600}}></div>
               
                 <div className='rounded-full top-circle m-2 text-center p-2'><CiMail color='white' size='1.5rem'/></div>
                 <div className='rounded-full top-circle flex m-2 text-center p-1'>
                     <FaBell size='1.5rem' color='white' position='relative'/>
                     <div className='bell-circle rounded-full absolute'></div>
                 </div>
                 <div className='rounded-full top-circle m-2'></div>
          </div>
          <div className='flex'>
            <div className='w-10 ms-5  bg-slate-900 opacity-90'>
              <div className='pt-4 pb-4 '> <FaHome color='blue' size='2rem'/></div>
              <div className='pt-4 pb-4 '> <RiGalleryLine color='gray' size='2rem'/></div>
              <div className='pt-4 pb-4 '> <TbNotes color='gray' size='2rem'/></div>
              <div className='pt-4 pb-4 '> <CiShoppingBasket color='gray' size='2rem'/></div>
            </div>
            <div className='w-100 h-100 bg-black'>
              <h2 className='text-white text-2xl font-bold m-3 p-3'>Dashboard</h2>
              <div className='lg:flex gap-7 m-3 p-3'>

                <div className='rounded-lg bg-slate-900 inside_div opacity-90'>
                  <div className=' rounded-xl bg-blue-400 ms-2 mt-2 mb-0 p-2 icon_div'>
                       <GiFullWoodBucketHandle size='2rem' color='blue'/>
                  </div>
                  <p className='ms-2 text-white'>Total order</p>
                  <p className='ms-2 mb-2 font-bold text-white text-xl'>75 <span className='ms-15 text-sm text-green-600'> ^ 3%</span></p>
                </div>

                <div className='rounded-lg bg-slate-900 inside_div opacity-90'>
                  <div className=' rounded-xl bg-green-400 ms-2 mt-2 p-2 icon_div'>
                     <FaCartArrowDown size='2rem' color='green'/>
                  </div>
                  <p className='ms-2 text-white'>Total order</p>
                  <p className='ms-2 mb-2 font-bold text-white text-xl'>75 <span className='ms-11 text-sm text-green-600'> ^ 3%</span></p>
                </div>

                <div className='rounded-lg bg-slate-900 inside_div opacity-90'>
                  <div className=' rounded-xl bg-orange-300 ms-2 mt-2 p-2 icon_div'>
                      <FaCartArrowDown size='2rem' color='#FF8C00'/>
                  </div>
                  <p className='ms-2 text-white'>Total order</p>
                  <p className='ms-2 mb-2 font-bold text-white text-xl'>75 <span className='ms-11 text-sm text-green-600'> ^ 3%</span></p>
                </div>

                <div className='rounded-lg bg-slate-900 inside_div opacity-90'>
                  <div className=' rounded-xl bg-pink-300 ms-2 mt-2 p-2 icon_div flex'>
                      <PiCurrencyDollarSimpleFill size='3rem' color='#AA336A'/>
                      <ImArrowDown size='2rem' color='#AA336A'/>
                  </div>
                  <p className='ms-2 text-white'>Total order</p>
                  <p className='ms-2 mb-2 font-bold text-white text-xl'>75 <span className='ms-11 text-sm text-green-600'> ^ 3%</span></p>
                </div>

                <div className='rounded-lg bg-slate-900 inside_div2 opacity-90 flex p-2'>
                  <div>
                    <p className='text-xs text-white p-2'>new price</p>
                    <h2 className='text-2xl text-white p-2'>$2345.78</h2>
                    <p className='text-sm text-green-500 p-2'>^ 3%</p>
                  </div>
                  <div>
                    <div className=' rounded-full text-center p-2 circle_percentage'>
                      <p className='text-white text-xl'>70%</p>
                      <p className='text-white'>clip</p>
                      <p className='text-white'></p>
                    </div>
                    <p className='text-white text-sm p-2'>Lorem ipsum</p>
                  </div>

                </div>
                 
              </div>

              <div className='lg:flex gap-7 m-3 p-3'>
                <div className='rounded-lg bg-slate-900 graph_div opacity-90'>
                  <div className='flex'>
                       <h2 className='text-white font-bold text-2xl'>Activity</h2>
                       <div className='bg-slate-600  rounded-xl text-white ms-96 flex p-1'>
                          <p>Weekly</p>
                         <span className='p-1'><MdArrowDropDownCircle /></span> 
                       </div>
                  </div>
                  <div className='graph_main '>

                     <div className=' flex graph-draw gap-7 mt-8 ms-16'>

                         <div className='w-6 h-40 bg-blue-500 rounded-xl' 
                                    style={{height: 50 , marginTop: 110}}>

                            </div>
                         <div className='w-6 h-40 bg-blue-500 rounded-xl'
                         style={{height: 80 , marginTop: 80}}>
                                     
                         </div>
                         <div className='w-6 h-25 bg-blue-500 rounded-xl' ></div>

                         <div className='w-6 h-35 bg-blue-500 rounded-xl'
                           style={{height: 80 , marginTop: 80}}>

                         </div>
                         <div className='w-6 h-40 bg-blue-500 rounded-xl'
                            style={{height: 100 , marginTop: 60}}>

                         </div>
                         <div className='w-6 h-30 bg-blue-500 rounded-xl'
                             style={{height: 140 , marginTop: 20}}>

                         </div>
                         <div className='w-6 h-30 bg-blue-500 rounded-xl'
                             >

                         </div>
                         
                          
                       </div>
                    
                       <div className='flex m-5 text-white'>
                         <p>150</p>
                         <hr className='border-1 border-slate-600 w-96 p-2 m-3'/>
                       </div>

                       <div className='flex m-5 text-white'>
                         <p>100</p>
                         <hr className='border-1 border-slate-600 w-96 p-2 m-3'/>
                       </div>

                       <div className='flex m-5 text-white'>
                         <p>50</p>
                         <hr className='border-1 border-slate-600 w-96 p-2 m-3'/>
                       </div>

                       <div className='flex m-5 text-white'>
                         <p>0</p>
                         <hr className='border-1 border-slate-600 w-96 p-2 m-3'/>
                       </div>
                      
                       

                       <div className='flex gap-10 ms-14 text-white'>
                         <p>5 </p>
                         <p>10</p>
                         <p>15</p>
                         <p>20</p>
                         <p>25</p>
                         <p>30</p>
                         <p>35</p>
                       </div>

                  </div>
                  
                </div>
                <div className='rounded-lg bg-slate-900 graph_div2 p-4 opacity-90'>
                  <div className='flex ms-2 me-2 mb-4 mt-6'>
                    <div className='rounded-full graph2_circle bg-red-400 opacity-50 text-center p-2'>
                    <MdShoppingCart size='2rem'color='red'/>
                    </div>
                    <p className='p-3 text-white'>Goals</p>
                    <div className='rounded-full graph2_small_circle text-center pt-1 ms-14 mt-2'>
                      <IoIosArrowDroprightCircle size='2rem' color='white'/>
                    </div>
                  </div>

                  <div className='flex ms-2 me-2 mb-4 mt-6'>
                    <div className='rounded-full graph2_circle bg-blue-400 opacity-50 p-2'>
                    <GiHamburger size='2rem' color='blue'/>
                    </div>
                    <p className='p-3 text-white'>Dishes</p>
                    <div className='rounded-full graph2_small_circle text-center pt-1 ms-12 mt-2'>
                      <IoIosArrowDroprightCircle size='2rem' color='white'/>
                    </div>
                  </div>

                  <div className='flex ms-2 me-2 mb-4 mt-6'>
                    <div className='rounded-full graph2_circle bg-green-400 opacity-50 p-2'>
                    <MdDinnerDining size='2rem' color='green'/>
                    </div>
                    <p className='p-3 text-white'>Menus</p>
                    <div className='rounded-full graph2_small_circle text-center pt-1 ms-12 mt-2'>
                      <IoIosArrowDroprightCircle size='2rem' color='white'/>
                    </div>
                  </div>
                </div>
              </div>

              <div className='lg:flex gap-7 m-3 p-3'>
                <div className='rounded-lg bg-slate-900 order_div p-2 opacity-90'>
                 <h2 className='text-white font-bold text-2xl'>Recent Orders</h2>
                 <table >
                  <tr>
                    <td className='text-xl'>Customer</td>
                    <td className='text-xl'>Order No</td>
                    <td className='text-xl'>Amount</td>
                    <td className='text-xl'>Status</td>
                  </tr>
                  <div className='border-1 border-black m-3 w-96' > </div>
                  <tr>
                    <td>John</td>
                    <td>1111</td>
                    <td>234</td>
                    <td><div className='bg-green-400 text-green-600 p-1 rounded-lg opacity-50 font-bold'>Delivered</div></td>
                  </tr>
                  <hr className='border-1 border-slate-600 w-96 m-3'/>
                  <tr>
                    <td>John</td>
                    <td>1224</td>
                    <td>500</td>
                    <td><div className='bg-green-400 text-green-600 p-1 rounded-lg opacity-50 font-bold'>Delivered</div></td>
                  </tr>
                  <hr className='border-1 border-slate-600 w-96 m-3'/>
                  <tr>
                    <td>John</td>
                    <td>1223</td>
                    <td>230</td>
                    <td><div className='bg-green-400 text-green-600 p-1 rounded-lg opacity-50 font-bold'>Delivered</div></td>
                  </tr>
                  <hr className='border-1 border-slate-600 w-96 m-3'/>
                  <tr>
                    <td>Rohu</td>
                    <td>4433</td>
                    <td>331</td>
                    <td><div className='bg-red-400 text-red-600 p-1 rounded-lg opacity-50 font-bold'>Pending</div></td>
                  </tr>
                  <hr className='border-1 border-slate-600 w-96 m-3'/>
                  <tr>
                    <td>Rohu</td>
                    <td>3452</td>
                    <td>890</td>
                    <td><div className='bg-green-400 text-green-600 p-1 rounded-lg opacity-50 font-bold'>Delivered</div></td>
                  </tr>
                  <hr className='border-1 border-slate-600 w-96 m-3'/>
                  <tr>
                    <td>John</td>
                    <td>4566</td>
                    <td>532</td>
                    <td><div className='bg-green-400 text-green-600 p-1 rounded-lg opacity-50 font-bold'>Delivered</div></td>
                  </tr>
                 </table>
                </div>
                <div className='rounded-lg bg-slate-900 customer_div opacity-90'></div>
              </div>
              
            </div>
          </div>
          
            
    </div>
    </>
  )
}

export default App


