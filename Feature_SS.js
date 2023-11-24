import React from 'react'
import Image from 'next/image'

const Feature_SS = () => {
  return (
    <>
        <div className='mt-40 px-4 md:px-16 '>
            <div className='flex my-5'>
                <div className='ss-container-1 flex flex-col justify-center items-center md:flex-row md:gap-3'>
                    <div className='ss-content-1 my-2'>
                        <h3 className='font-semibold'>FEATURES</h3>
                        <h1 className='pt-5 pb-5 text-2xl font-semibold'>Eaterian - All In One Business ERP With Project, Account, HRM, CRM</h1>
                        <p className=' text-sm mb-3 '>Use these awesome forms to login or create new account in your project for free.</p>
                        <button className='outline-double outline-1 outline-transparent bg-sky-600 p-3 w-36 rounded-full flex gap-2 text-sm text-white items-center justify-center hover:hover:bg-sky-700'>Buy Now <Image className='' src='/shopping-bag.png' alt='shopping-bag' height={20} width={20}/></button>
                    </div>
                    <div className='ss-img-1'>
                        <Image className='shadow-lg rounded-xl' src='/1688108824-other_features_image.png' alt='' height={600} width={1200}/>
                    </div>
                </div>
            </div>
            <div className='flex my-5'>
                <div className='ss-container-2 flex flex-col justify-center items-center md:flex-row md:gap-3'>
                    
                    <div className='ss-img-2'>
                        <Image className='shadow-lg rounded-xl' src='/1688108842-other_features_image.png' alt='' height={600} width={1200}/>
                    </div>
                    <div className='ss-content-2 '>
                        <h3 className='font-semibold'>FEATURES</h3>
                        <h1 className='pt-5 pb-5 text-2xl font-semibold'>Eaterian - All In One Business ERP With Project, Account, HRM, CRM</h1>
                        <p className=' text-sm mb-3 '>Use these awesome forms to login or create new account in your project for free.</p>
                        <button className='outline-double outline-1 outline-transparent bg-sky-600 p-3 w-36 rounded-full flex gap-2 text-sm text-white items-center justify-center hover:hover:bg-sky-700'>Buy Now <Image className='' src='/shopping-bag.png' alt='shopping-bag' height={20} width={20}/></button>
                    </div>
                </div>
            </div>
            <div className='flex my-5'>
                <div className='ss-container-3 flex flex-col justify-center items-center md:flex-row md:gap-3'>
                    <div className='ss-content-3 '>
                        <h3 className='font-semibold'>FEATURES</h3>
                        <h1 className='pt-5 pb-5 text-2xl font-semibold'>Eaterian - All In One Business ERP With Project, Account, HRM, CRM</h1>
                        <p className=' text-sm mb-3 '>Use these awesome forms to login or create new account in your project for free.</p>
                        <button className='outline-double outline-1 outline-transparent bg-sky-600 p-3 w-36 rounded-full flex gap-2 text-sm text-white items-center justify-center hover:hover:bg-sky-700'>Buy Now <Image className='' src='/shopping-bag.png' alt='shopping-bag' height={20} width={20}/></button>
                    </div>
                    <div className='ss-img-3'>
                        <Image className='shadow-lg rounded-xl' src='/1688115908-other_features_image.png' alt='' height={600} width={1200}/>
                    </div>
                </div>
            </div>
            <div className='flex my-5'>
                <div className='ss-container-4 flex flex-col justify-center items-center md:flex-row md:gap-3'>
                    <div className='ss-img-4'>
                        <Image className='shadow-lg rounded-xl' src='/1688108947-other_features_image.png' alt='' height={600} width={1200}/>
                    </div>
                    <div className='ss-content-4 '>
                        <h3 className='font-semibold'>FEATURES</h3>
                        <h1 className='pt-5 pb-5 text-2xl font-semibold'>Eaterian - All In One Business ERP With Project, Account, HRM, CRM</h1>
                        <p className=' text-sm mb-3 '>Use these awesome forms to login or create new account in your project for free.</p>
                        <button className='outline-double outline-1 outline-transparent bg-sky-600 p-3 w-36 rounded-full flex gap-2 text-sm text-white items-center justify-center hover:hover:bg-sky-700'>Buy Now <Image className='' src='/shopping-bag.png' alt='shopping-bag' height={20} width={20}/></button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Feature_SS