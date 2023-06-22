import { useState } from 'react'
import { menu } from './menu'
import './App.css'
import logohome1 from './assets/logohome1.png'
import logo3 from './assets/logo3.png'
import logokontak from './assets/logokontak.png'

function App() {

  const ShowMenu = () => {
    return menu.map((item, index) => {
      return (
        <div>
          <div className="w-fit	rounded-md bg-antiqwhite flex flex-col items-center" key={index} >
            <img className="max-w-xs" src={item.gambar} />
            <div className="text-2xl font-rancho">{item.nama}</div>
            <div className="text-2xl ">Harga: Rp.{item.harga}</div>
          </div>
        </div>
      )
    })
  }

  return (
    <>

      <nav class="select-none bg-teal-800 lg:flex lg:items-stretch w-full p-4 fixed top-0">
        <div class="flex flex-no-shrink items-stretch h-14 sm:justify-center ">
          <img className='max-w-ws ml-6' src={logo3} />
        </div>
        <div class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
          <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
            <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:text-gray-900">Home</a>
            <a href="#menu" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:text-gray-900">Menu Makanan</a>
            <a href="#kontak" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:text-gray-900">Kontak Kami</a>
          </div>
        </div>
      </nav>

      <div className='flex flex-row mt-16 h-screen	'>
        <div className='flex justify-center w-11/12	ml-16 '>
          <img className='h-4/5	' src={logohome1} alt="" />
        </div>
        <div className='flex justify-center flex-col px-12'>
          <div className='font-rancho font-bold text-5xl'>
            Mau Makan ? di Warteg Tonyak Aja
          </div>
          <div className='pr-24 text-2xl mt-10 font-ubuntu'>
            Selamat datang di Warteg Tonyak, kami menyediakan berbagai macam menu makanan, dari ayam, ikan, telur dan masih banyak lagi. kami juga menyediakan sayur - sayuran. anda dapat membeli makanan pada menu beli diatas, anda juga dapat melihat menu dengan mengclick tombol dibawah ini.
          </div>
          <div>
            <a href='#menu'>

              <button class=" mt-10 group rounded-2xl h-12 w-48 bg-teal-800 font-bold text-lg text-white relative overflow-hidden">
                Lihat Menu Yukk!
                <div class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
                </div>
              </button>
            </a>
          </div>
        </div>
      </div >

      <div id='menu' className='flex justify-center items-center flex-col h-screen'>
        <div className='font-rancho font-bold text-5xl mb-4'>
          Menu Makanan Warteg Tonyak
        </div>
        <div className='grid grid-cols-4 gap-4'>
          <ShowMenu />
        </div>
      </div>

      <div id="kontak" className='flex justify-center items-center flex-col h-screen'>
        <div className='font-rancho font-bold text-5xl mb-4'>
          Kontak Kami
        </div>
        <img class="logokontak" src={logokontak} />
        <div class="flex justify-center items-center flex-col mt-8">
          <div className='font-ubuntu mb-6 text-xl'>Anda dapat melakukan Pemesanan Catering di warteg tonyak, untuk acara, pernikahan
            dan lainya. segera hubungi kami.
          </div>
          <div className='font-rancho font-bold'>Whatsapp : 08121233123121</div>
          <div className='font-rancho font-bold'>Instagram : @warteg.tonyak</div>
          <div className='font-rancho font-bold'>Twitter : @warteg_tonyak.id</div>
        </div>
      </div>
    </>
  )
}

export default App
