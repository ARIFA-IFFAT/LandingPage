import React from 'react'
import Image from 'next/image'

const Discover = () => {
  return (
    <>
        <div className='discover bg-cyan-950 h-auto mt-16'>
            <div className='discover-content px-4 py-10 flex flex-col text-white '>
                <div className='header '>
                    <h3 className='font-semibold text-center'>DISCOVER</h3>
                    <h1 className='pt-5 pb-5 text-center text-2xl font-semibold md:'>Eaterian - All In One Business ERP With Project, Account, HRM, CRM</h1>
                    <p className=' text-sm text-center mb-3 '>Use these awesome forms to login or create new account in your project for free.</p>
                 </div>

                 <div className='discover-card flex flex-col gap-3 md:flex-row'> 
                    <div className='card-1'>
                        <div className='card-1-body bg-cyan-950 mt-4 rounded-lg outline outline-1 outline-sky-800'>
                            <div className='card-body px-5 py-8' >
                                <span><Image src='/1688099306-discover_logo.png' alt='feature-logo' height={100} width={100}/></span>
                                <h3 className='text-2xl font-semibold pt-3 pb-3'>Feature</h3>
                                <p>Use these awesome forms to login or create new account in your project for free.Use these awesome forms to login or create new account in your project for free.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-2'>
                        <div className='card-2-body bg-sky-600 mt-4 rounded-lg'>
                            <div className='card-body px-5 py-8' >
                                <span><Image src='/1688099328-discover_logo.png' alt='feature-logo' height={100} width={100}/></span>
                                <h3 className='text-2xl font-semibold pt-3 pb-3'>Support</h3>
                                <p>Use these awesome forms to login or create new account in your project for free.Use these awesome forms to login or create new account in your project for free.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-3'>
                        <div className='card-3-body bg-cyan-950 mt-4 rounded-lg'>
                            <div className='card-body px-5 py-8' >
                                <span><Image src='/1688099359-discover_logo.png' alt='feature-logo' height={100} width={100}/></span>
                                <h3 className='text-2xl font-semibold pt-3 pb-3'>Integration</h3>
                                <p>Use these awesome forms to login or create new account in your project for free.Use these awesome forms to login or create new account in your project for free.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-4'>
                        <div className='card-3-body bg-cyan-950 mt-4 rounded-lg'>
                            <div className='card-body px-5 py-8' >
                                <span><Image src='/1688099377-discover_logo.png' alt='feature-logo' height={100} width={100}/></span>
                                <h3 className='text-2xl font-semibold pt-3 pb-3'>Integration</h3>
                                <p>Use these awesome forms to login or create new account in your project for free.Use these awesome forms to login or create new account in your project for free.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-5'>
                        <div className='card-3-body bg-cyan-950 mt-4 rounded-lg'>
                            <div className='card-body px-5 py-8' >
                                <span><Image src='/1688099401-discover_logo.png' alt='feature-logo' height={100} width={100}/></span>
                                <h3 className='text-2xl font-semibold pt-3 pb-3'>Integration</h3>
                                <p>Use these awesome forms to login or create new account in your project for free.Use these awesome forms to login or create new account in your project for free.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-6'>
                        <div className='card-3-body bg-cyan-950 mt-4 rounded-lg'>
                            <div className='card-body px-5 py-8' >
                                <span><Image src='/1688099416-discover_logo.png' alt='feature-logo' height={100} width={100}/></span>
                                <h3 className='text-2xl font-semibold pt-3 pb-3'>Integration</h3>
                                <p>Use these awesome forms to login or create new account in your project for free.Use these awesome forms to login or create new account in your project for free.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-7'>
                        <div className='card-3-body bg-cyan-950 mt-4 rounded-lg'>
                            <div className='card-body px-5 py-8' >
                                <span><Image src='/1688099434-discover_logo.png' alt='feature-logo' height={100} width={100}/></span>
                                <h3 className='text-2xl font-semibold pt-3 pb-3'>Integration</h3>
                                <p>Use these awesome forms to login or create new account in your project for free.Use these awesome forms to login or create new account in your project for free.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-8'>
                        <div className='card-3-body bg-cyan-950 mt-4 rounded-lg'>
                            <div className='card-body px-5 py-8' >
                                <span><Image src='/1688099443-discover_logo.png' alt='feature-logo' height={100} width={100}/></span>
                                <h3 className='text-2xl font-semibold pt-3 pb-3'>Integration</h3>
                                <p>Use these awesome forms to login or create new account in your project for free.Use these awesome forms to login or create new account in your project for free.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    
    </>
  )
}

export default Discover