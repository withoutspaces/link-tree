import foto from './assets/foto.png'
import logo from './assets/logo.png'
import logo2 from './assets/logo-2.png'
import { Links } from './components/links'

function App() {
  return (
    <div className="bg-rose-50 w-full flex justify-center items-center">
      
      
      <div className="bg-rose-500 w-[90%] md:w-3/4 lg:w-2/5 my-20 rounded-xl p-5 z-10">
        
        <div className='flex flex-col items-center'>
          <div className='rounded-full w-52 h-52 mx-auto mt-10 bg-rose-50 flex justify-center items-center'>
            <img 
              src={foto} 
              alt="" 
              className='rounded-full w-48 h-48'
            />
          </div>

          <h1 className='text-2xl font-bold text-rose-50 mt-3'>
            Iannadja Walleska
          </h1>
          <span>✨ Cabeleireira profissional</span>
        </div>


        {/* LINKS */}
        <div className='flex flex-col items-center mt-10 gap-5'>
          <Links 
            icon='fa-whatsapp' 
            text='Agende seu horário pelo whatsapp!' 
            link='https://wa.me/5582999419577?text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20hor%C3%A1rio'
          />
          <Links 
            icon='fa-instagram' 
            text='Conheça meu trabalho!' 
            link='https://www.instagram.com/iannadja_walleska_/'
            target
          />
          <Links 
            icon='fa-location-arrow' 
            text='Faça uma visita' 
            link='https://maps.app.goo.gl/pMnrMFCpyEtar7qVA'
            target
          />
        </div>


        <footer className='flex justify-center w-full mt-10'>
          <img src={logo} alt="" className='w-1/4'/>
        </footer>

      </div>

      <img src={logo2} alt="" className='absolute w-1/2 top-0 right-0'/>
    </div>
  )
}

export default App
