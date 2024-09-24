import './App.css'

function App() {
  

  return (
    <div className=" bg-[url('./public/heroBg.png')] h-full w-full bg-right-top bg-no-repeat pb-[226px]">

      {/* ------------ navigation bar --------------------- */}

      <header className='max-w-[1290px] mx-auto flex justify-between pt-[40px]'>
        <nav className=' flex gap-[85px] '>
        <div className=''>
            <img src="./../public/GetPay.png" alt="" /> 
            <img className='pl-[15px]' src="./../public/Element.png" alt="" />
          
        </div> 

        <div className='flex gap-[64px]'>
          <li className='list-none text-[12px] font-[500]'>Home</li>
          <li className='list-none text-[12px] text-[#A3A4A7] font-[500]'>About</li>
          <li className='list-none text-[12px] text-[#A3A4A7] font-[500]'>Blog</li>
          <li className='list-none text-[12px] text-[#A3A4A7] font-[500]'>Pages</li>
          <li className='list-none text-[12px] text-[#A3A4A7] font-[500]'>Contact</li>
        </div>         

        </nav> 
        <button className='w-[100px] h-[42px] rounded-[12px] text-[12px] font-bold bg-white'>Sign Up</button> 

        </header>

        {/* ------------ Hero Section --------------------- */}

        <div className='max-w-[1290px] mx-auto flex'>

        {/* ----- Left side ----- */}

          <div className='mt-[166.63px]'>
            <h1 className='font-[600] w-[607.5px] text-[60px] leading-[72px] tracking-[-0.02em] text-[#000]'>The easiest way to manage personal finances</h1>

            <p className='w-[420px] mt-[24px] font-poppins font-[400] text-[16px] leading-[28px] tracking-[-0.01em] text-[#A3A4A7]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>

            <div className='mt-[37px]'>
              <button className='h-[64px] w-[199.31px] bg-gradient-to-r from-[#01bdd4] to-[#0197b1] text-white font-bold py-2 px-4 rounded-[40px]'>Get Your Card</button>
              <a className='text-[18px] ml-[52.23px] font-[500]' href="google.com">How it works</a>
            </div>

          </div>

          {/* ----- right side ----- */}

          <div className='flex'>
            <img src="./../public/heroImage.png" className='h-[790px] absolute right-[226px]' alt="" />
            <img src="./../public/Card.png" className='h-[230px] absolute right-[135px] bottom-0' alt="" />
            
          </div>

        </div>

        {/* company names  */}

        <div className='max-w-[1215px] h-[115px] mx-auto mt-[180px] bg-white shadow-lg rounded-[32px] flex items-center justify-center relative z-[10]'>
          <div className='h-[49px] max-w-[822px] mx-auto flex items-center gap-[90px]'>
            <img className='h-[49px]' src="./../public/Image Logo.png" alt="" />
            <img className='h-[27px]' src="./../public/Image Logo (1).png" alt="" />
            <img className='h-[29px]' src="./../public/Image Logo (2).png" alt="" />
            <img className='h-[25px]' src="./../public/Image Logo (3).png" alt="" />
            <img className='h-[38px]' src="./../public/Image Logo (4).png" alt="" />
          </div>         

        </div>

        {/* how it starts  */}

        <div className='max-w-[1146px] mx-auto mt-[60px]'>
          <h1 className='text-[50px] text-center font-semibold'>How it starts</h1>

        </div>
    </div>
  )
}

export default App
