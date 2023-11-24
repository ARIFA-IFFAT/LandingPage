import React from 'react'
import Image from 'next/image'


const Header = () => {
  return (
    <>
    <div className='main-header'>
        <div className='announcement bg-slate-900 text-white text-xs h-8 flex justify-center items-center p-3 md:text-sm'>
          <p>70% Special Offer. Don’t Miss it. The offer ends in 72 hours...</p>
        </div>
        <div className='header-body bg-sky-600 h-auto p-4 pb-14'>
          <div className='navbar flex place-content-between mb-16'>
            <div className='left'>
              <Image className='logo' src='/site_logo.png' alt='Logo' width={120} height={30}/>
            </div>
          <div className='right flex gap-3'>
            <button className='relative px-3 outline-double outline-1 outline-black text-black w-auto rounded-full gap-2 flex justify-center items-center hover:bg-slate-900 hover:text-white'>LogIn
                <Image className='login outline-double outline-1 outline-black rounded-full visible hover:collapse md:outline-none' src='/login.png' alt='login' width={20} height={10}/>
                {/* <Image className='login outline-double outline-1 outline-black collapse rounded-full hover:visible md:outline-none' src='/login - dark.png' alt='login' width={20} height={10}/> */}
            </button>
            <button className='outline-double px-3 outline-1 outline-black text-black w-auto rounded-full gap-2 flex justify-center items-center hover:bg-slate-900 hover:text-white'>Register
                <Image className='register outline-double outline-1 outline-black rounded-full md:outline-none' src='/register.png' alt='register' width={20} height={10}/>
            </button>
            <Image className='hamburger outline-double outline-1 outline-black rounded-full md:collapse' src='/hamburger.png' alt='hamburger' width={20} height={10}/>

            </div>
          </div>
          <div className='container mb-16 md:flex gap-28'>
            <div className='banner-body mt-7'>
                <div className='mt-3 mb-5'>
                  <span className='border-transparent rounded-full text-xs px-4 py-2 bg-white font-semibold mt-5 '>70% Special Offer</span>
                </div>
                <div className='mt-3 mb-3 md:w-[40rem]'>
                  <h1 className='font-semibold text-2xl md:text-4xl'>Eaterian - The All In One Business Management Solution With Project, Account, HRM, CRM</h1>
                </div>
                <div>
                  <p className='mt-3 mb-3'>Use these awesome forms to login or create new account in your project for free.</p>
                </div>
                <div className='banner'>
                  <div className='banner-btn flex gap-3 m-3'>
                    <button className='outline-double outline-1 outline-black px-3 py-2 w-36 rounded-md flex gap-2 items-center justify-center hover:bg-slate-900 hover:text-white'>Live Demo <Image className='' src='/play-button.png' alt='play-btn' height={20} width={20}/></button>
                    <button className='outline-double outline-1 outline-black px-3 py-2 w-36 rounded-md flex gap-2 items-center justify-center hover:bg-slate-900 hover:text-white'>Buy Now <Image className='' src='/shopping-bag.png' alt='shopping-bag' height={20} width={20}/></button>
                  </div>
              </div>
            </div>
            <div className='banner-img mb-4'>
                <Image src='/home_banner.png' alt='banner' height={10} width={600} className='border border-transparent rounded-3xl absolute'/>
            </div>
          </div>  
          <div className='logo-container'>
            <div>
                <div class="trust">
                  <p class="mb-0">Trusted by <span class="font-semibold">1000+ Customer</span></p>
                </div>

                <div className='flex flex-col flex-wrap gap-3 mb-2 md:flex-row'>
                  
                    <div className='border-transparent basis-1/3'>
                      <Image src='/site_logo.png' alt='logo1' width={150} height={100}/>
                    </div>
                    <div className='border-transparent basis-1/3'>
                      <Image src='/site_logo.png' alt='logo2' width={150} height={100}/>
                    </div>
                    <div className='border-transparent basis-1/3'>
                      <Image src='/site_logo.png' alt='logo3' width={150} height={100}/>
                    </div>
                    <div className='border-transparent basis-1/3'>
                      <Image src='/site_logo.png' alt='logo4' width={150} height={100}/>
                    </div>
                    <div className='border-transparent basis-1/3'>
                      <Image src='/site_logo.png' alt='logo5' width={150} height={100}/>
                    </div>
                    <div className='border-transparent basis-1/3'>
                      <Image src='/site_logo.png' alt='logo6' width={150} height={100}/>
                    </div>
                    <div className='border-transparent basis-1/3'>
                      <Image src='/site_logo.png' alt='logo7' width={150} height={100}/>
                    </div>
                 
                </div>
            </div>
        </div>
        
        </div>
        
      </div>
    
    </>
  )
}

export default Header