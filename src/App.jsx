import './App.css'

function App() {
  
  return (
    <div className=" bg-[url('./public/heroBg.png')] h-full w-full bg-right-top bg-no-repeat">

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
            <img src="./../public/Card.png" className='h-[230px] absolute right-[135px] top-[450px]' alt="" />
            {/* <img src="./../public/Card.png" className='h-[230px] absolute right-[135px] bottom-0' alt="" /> */}
            
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

        <div className='max-w-[1146px] mx-auto mt-[60px] pt-[20px]'>
          <h1 className='text-[50px] text-center font-semibold'>How it starts</h1>

          {/* three boxes  */}

          <div className='flex justify-between mt-[64px]'>
            <div className='bg-[#FEEDEC] h-[328px] w-[328px] p-[28px] rounded-[28px]'>
              <img className='mt-[31px]' src="./../public/register.png" alt="" />
              <h2 className='font-semibold text-[28px] mt-[28px]'>Register</h2>
              <p className='text-[16px] mt-[8px] leading-[28px] text-[#797979]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
            </div>

            <div className='bg-[#F5EBF2] h-[328px] w-[328px] p-[28px] rounded-[28px]'>
              <img className='mt-[31px]' src="./../public/new card.png" alt="" />
              <h2 className='font-semibold text-[28px] mt-[28px]'>Add New Card</h2>
              <p className='text-[16px] mt-[8px] leading-[28px] text-[#797979]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
            </div>

            <div className='bg-[#EBFCFF] h-[328px] w-[328px] p-[28px] rounded-[28px]'>
              <img className='mt-[31px]' src="./../public/Tick Square.png" alt="" />
              <h2 className='font-semibold text-[28px] mt-[28px]'>Success</h2>
              <p className='text-[16px] mt-[8px] leading-[28px] text-[#797979]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
            </div>
          </div>          

        </div>

        {/* simple way  */}

        <div className='bg-[#FAFCFE] h-[722px] mt-[100px] py-[45px]'>
          <div className='max-w-[1146px] mx-auto bg-[url("./public/simplewaybg.png")] h-full w-full bg-left-bottom bg-no-repeat flex gap-[47.63px]'>
            <img src="./../public/simpleWayman.png" alt="" />
            <div className='mt-[166.63px] w-[582px]'>
              <h1 className='font-[600] w-[607.5px] text-[50px] leading-[72px] tracking-[-2%] text-[#000]'>Simple way to manage your money</h1>

              <p className='w-[420px] mt-[24px] font-poppins font-[400] text-[16px] leading-[28px] tracking-[-0.01em] text-[#A3A4A7]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
              Amet minim mollit non deserunt  dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>

              <button className='h-[64px] mt-[32px] w-[199.31px] bg-gradient-to-r from-[#01bdd4] to-[#0197b1] text-white font-bold py-2 px-4 rounded-[40px]'>Explore now</button>
          </div>
          </div>
        </div>


        {/* why our products are diffrent  */}

        <div className='max-w-[1133px] h-[707px] mx-auto'>
          <h1 className='absolute mt-[85px] text-[50px] font-bold leading-[72px] tracking-[-2%]'>Why our product are different</h1>

          {/* three boxes  */}

          <div className='flex justify-between'>
            <div className='h-[707px] w-[328px] p-[28px] pt-[175px] border-l-2 border-dashed border-gray-200'>
              <img className='mt-[31px]' src="./../public/Category.png" alt="" />
              <h2 className='font-semibold text-[24px] w-[302px] mt-[32px]'>Solve Problems Real Time</h2>
              <p className='text-[16px] mt-[8px] leading-[28px] text-[#797979]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>              
              <p className='text-[#0199B3] text-[16px] font-medium mt-[32px]'>Learn more -&gt;</p>              
            </div>

            <div className='h-[707px] w-[328px] p-[28px] pt-[240px] border-l-2 border-dashed border-gray-200'>
              <img className='mt-[31px]' src="./../public/Category (1).png" alt="" />
              <h2 className='font-semibold text-[24px] w-[302px] mt-[32px]'>Solve Problems Real Time</h2>
              <p className='text-[16px] mt-[8px] leading-[28px] text-[#797979]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>              
              <p className='text-[#0199B3] text-[16px] font-medium mt-[32px]'>Learn more -&gt;</p>              
            </div>

            <div className='h-[707px] w-[328px] p-[28px] pt-[300px] border-l-2 border-dashed border-gray-200'>
              <img className='mt-[31px]' src="./../public/Category (2).png" alt="" />
              <h2 className='font-semibold text-[24px] w-[302px] mt-[32px]'>Solve Problems Real Time</h2>
              <p className='text-[16px] mt-[8px] leading-[28px] text-[#797979]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>              
              <p className='text-[#0199B3] text-[16px] font-medium mt-[32px]'>Learn more -&gt;</p>              
            </div>
          </div>

        </div>

        {/* earn money and get bonus  */}

        <div className='bg-[#FAFCFE] h-[700px]'>
          <div className='max-w-[1140px] mx-auto flex justify-between py-[60px]'>
          <div className=' w-[582px]'>
              <h1 className='font-semibold text-[50px] w-[500px] leading-[72px] tracking-[-2%] text-[#000]'>Earn the money and get bonuses</h1>

              <p className='w-[420px] mt-[24px] font-poppins font-[400] text-[16px] leading-[28px] tracking-[-0.01em] text-[#A3A4A7]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
              Amet minim mollit non deserunt  dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>

              <button className='h-[64px] mt-[32px] w-[199.31px] bg-gradient-to-r from-[#01bdd4] to-[#0197b1] text-white font-bold py-2 px-4 rounded-[40px]'>Explore now</button>
          </div>
          {/* right images  */}

          <div className=' bg-[url("./public/simplewaybg.png")] w-full h-[577px] bg-right bg-no-repeat gap-[20px]'>                      
            <img className='h-[230px] w-[374px] mt-[56px] ml-[100px]' src="./../public/Cardgreen.png" alt="" />
            <img className='h-[230px] w-[374px] mt-[23px] ml-[30px]' src="./../public/Cardred.png" alt="" />             

          </div>
          </div>        

        </div>


        {/* downlaod app  */}


        <div className='max-w-[1138px] h-[404px] mx-auto mt-[80px] p-[70px] bg-[#EBFCFF] border-[1px] border-[#9CDCE7] rounded-[32px]'>
          <h2 className='text-[50px] text-center font-semibold'>Download Our Mobile App</h2>
          <p className='text-center w-[680px] mx-auto mt-[16px] text-[#A3A4A7]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
          <div className='flex gap-[20px] items-center justify-center mt-[48px]'>
            <img src="./../public/Google Play.png" alt="" />
            <img src="./../public/applestore.png" alt="" />
          </div>

        </div>

        {/* footer  */}

        <footer className=' mt-[70px] bg-[#12141D] h-[440px] pt-[75px] px-[150px]'>
         <div className='flex justify-center'>
           {/* getpay  */}
           <div>
            <img src="./../public/footerlogo.png" alt="" />
            <div className='flex items-center gap-[16px] mt-[44px]'>
              <img className='h-[24px] w-[24px]' src="./../public/Call.png" alt="" />
              <div>
                <h3 className='text-white'>Phone</h3>
                <p className='text-[#A3A4A7] text-[14px]'>(219) 555-0114</p>
              </div>
            </div>

            <div className='flex items-center gap-[16px] mt-[21px]'>
              <img className='h-[24px] w-[24px]' src="./../public/Message.png" alt="" />
              <div>
                <h3 className='text-white'>Email</h3>
                <p className='text-[#A3A4A7] text-[14px]'>getpay@example.com</p>
              </div>
            </div>

            <div className='flex items-center gap-[16px] mt-[21px]'>
              <img className='h-[24px] w-[24px]' src="./../public/Location.png" alt="" />
              <div>
                <h3 className='text-white'>Address</h3>
                <p className='text-[#A3A4A7] text-[14px]'>4517 Washington Ave. Manchester, Kentucky 39495</p>
              </div>
            </div>
          </div>

          {/* company  */}

          <div className='ml-[40px]'>
            <h2 className='text-white font-semibold'>Company</h2>
            <div className='text-[#A3A4A7] mt-[27px] gap-[21px]'>
              <p className='mb-[21px] font-medium'>Home</p>
              <p className='mb-[21px] font-medium'>About</p>
              <p className='mb-[21px] font-medium'>Blog</p>
              <p className='mb-[21px] font-medium'>Pages</p>
              <p className='mb-[21px] font-medium'>contact</p>
            </div>
          </div>

          {/* company  */}

          <div className='ml-[75px]'>
            <h2 className='text-white font-semibold'>Help</h2>
            <div className='text-[#A3A4A7] mt-[27px] gap-[21px]'>
              <p className='mb-[21px] font-medium'>Customer Support</p>
              <p className='mb-[21px] font-medium'>Tems & Conditions</p>
              <p className='mb-[21px] font-medium'>Privacy Policy</p>
            </div>
          </div>

          {/* subscribe */}

          <div className='ml-[108px]'>
            <h2 className='text-white text-[20px] font-bold'>Subscribe to our newsletter</h2>
            <p className='text-[14px] font-medium mt-[8px] text-[#A3A4A7]'>The latest insights, resources, expert opinions and company news.</p>
            <button className='text-white bg-gradient-to-r from-[#01bdd4] to-[#0197b1] rounded-[40px] h-[42px] w-[120px] mt-[16px] text-[14px] font-semibold'>Subscribe</button>
          </div>
         </div>

         <div className='mt-[20px] border-t-[1px] border-[#ECEBEB1F]'>
            <p className='text-[#A3A4A7] text-[14px] font-medium text-center mt-[28px]'>Copyright <span className='text-white'>GetPay</span> 2024 All Right Reserved</p>
         </div>

        </footer>

    </div>
  )
}

export default App
