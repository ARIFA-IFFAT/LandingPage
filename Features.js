import React from 'react'
import Image from 'next/image'

const Features = () => {
  return (
    <>
        <div className='features h-auto p-4 bg-slate-900'>
            <div className=' text-white flex flex-col '>
                <div className='feature-header pt-8'>
                    <h3>FEATURES</h3>
                    <h1 className='pt-5 pb-5 text-2xl font-bold'>All In One Place CRM System</h1>
                    <p className=' text-sm mb-3'>Use these awesome forms to login or create new account in your project for free. Use these awesome forms to login or create new account in your project for free.</p>
                    <button className='outline-double outline-1 outline-black bg-sky-600 p-3 w-36 rounded-full flex gap-2 text-sm items-center justify-center hover:bg-sky-500'>Buy Now <Image className='' src='/shopping-bag.png' alt='shopping-bag' height={20} width={20}/></button>

                </div>

                <div className='feature-card flex flex-col gap-4 md:flex-row'> 
                    <div className='card-1'>
                        <div className='card-1-body bg-sky-600 mt-4 rounded-lg'>
                            <div className='card-body px-5 py-6' >
                                <span><Image src='/-feature_logo.png' alt='feature-logo' height={80} width={80}/></span>
                                <h3 className='text-black text-2xl font-semibold pt-3 pb-3 '>Feature</h3>
                                <p>Use these awesome forms to login or create new account in your project for free.Use these awesome forms to login or create new account in your project for free.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-2'>
                        <div className='card-2-body bg-cyan-950 mt-4 rounded-lg'>
                            <div className='card-body px-5 py-6' >
                                <span><Image src='/-support_logo.png' alt='feature-logo' height={80} width={80}/></span>
                                <h3 className='text-white text-2xl font-semibold pt-3 pb-3'>Support</h3>
                                <p>Use these awesome forms to login or create new account in your project for free.Use these awesome forms to login or create new account in your project for free.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-3'>
                        <div className='card-3-body bg-cyan-950 mt-4 rounded-lg'>
                            <div className='card-body px-5 py-6' >
                                <span><Image src='/-integration_logo.png' alt='feature-logo' height={80} width={80}/></span>
                                <h3 className='text-white text-2xl font-semibold pt-3 pb-3'>Integration</h3>
                                <p>Use these awesome forms to login or create new account in your project for free.Use these awesome forms to login or create new account in your project for free.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

                <div className='feature-footer'>
                    <div className=' text-white pt-20'>
                        <h3 className='text-sm text-center'>FEATURES</h3>
                        <h1 className='pt-5 pb-5 text-xl text-center font-semibold md:text-3xl'>Eaterian - All In One Business ERP With Project, Account, HRM, CRM</h1>
                        <p className=' text-sm mb-3 text-center '>Use these awesome forms to login or create new account in your project for free.</p>
                    </div>
                </div>

                <div className='feature-image flex justify-center items-center pt-48 md:pb-10 md:w-auto md:h-auto'>
                        <Image className='rounded-xl absolute md:h-auto md:w-auto md:py-48' src='/highlight_feature_image.png' alt='highlightimage' height={450} width={450}/>
                </div>
           
        </div>
        
    </>
  )
}

export default Features