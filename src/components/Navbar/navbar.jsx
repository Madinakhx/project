import logo from '../../assets/logo/1661227636_01 2 (1) (1) (1).png';
import React,{useEffect} from 'react'; 
import { Link } from 'react-router-dom';



function Navbar(props) {
    useEffect(() => {
        const menuToggle = document.getElementById("menu-toggle");
        const navbar = document.getElementById("navbar-default");

        menuToggle.addEventListener("click", () => {
            navbar.classList.toggle("hidden");
        });

        // Event listener-ni qo'shimini to'xtatish
        return () => {
            menuToggle.removeEventListener("click", () => {
                navbar.classList.toggle("hidden");
            });
        };
    }, []);
  

    return (




        <div class="div">
            <nav class="w-full fixed bg-white z-10">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div class="flex items-center space-x-3">
                        <Link to="/" className='flex items-center space-x-3'>
                            <img src={logo} class="h-14" alt="" />
                            <span className='self-center text-l font-Times new roman whitespace-nowrap text-black'>
                                ANGREN SHAHAR<br />2-SON SPORT<br />MAKTABI
                            </span>
                        </Link>
                    </div>
                    <button id="menu-toggle" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="font-times new roman text-xl  flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                            <li><a href="#home"></a></li>
                            <li>
                                <a href="#about" class=" block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0  md:dark:hover:text-blue-500  ">Biz haqimizda</a>
                            </li>
                            <li>
                                <a href="#sports" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sport turlari</a>
                            </li>
                            <li>
                                <a href="#awards" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Erishilgan natijalar</a>
                            </li>
                            <li>
                                <a href="#staff" class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Xodimlar</a>
                            </li>
                            <li>
                                <a href="#contact" class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Bog'lanish</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>


    //     <div className="div ">
    //         <nav class="  w-full fixed bg-white z-10">
    //             <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //                 <div class="flex items-center   space-x-3">
    //                     <Link to="/" className='flex items-center space-x-3'>
    //                         <img src={logo} class="h-14" alt="" />
    //                         <span className='self-center text-l font-Times new roman whitespace-nowrap text-black'>
    //                             ANGREN SHAHAR<br />2-SON SPORT<br />MAKTABI
    //                         </span>
    //                     </Link>
    //                 </div>
    //                 <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
    //                     <span class="sr-only">Open main menu</span>
    //                     <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    //                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
    //                     </svg>
    //                 </button>
    //                 <div class="hidden w-full md:block md:w-auto" id="navbar-default">
    //                     <ul class="font-times new roman text-xl  flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  ">
    //                         <li><a href="#home"></a></li>
    //                         <li>
    //                             <a href="#about" class=" block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0  md:dark:hover:text-blue-500  ">Biz haqimizda</a>
    //                         </li>
    //                         <li>
    //                             <a href="#sports" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sport turlari</a>
    //                         </li>
    //                         <li>
    //                             <a href="#awards" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Erishilgan natijalar</a>
    //                         </li>
    //                         <li>
    //                             <a href="#staff" class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Xodimlar</a>
    //                         </li>
    //                         <li>
    //                             <a href="#contact" class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Bog'lanish</a>
    //                         </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </nav>

    //    </div>


        // <nav >
        //     
            
           
        //     <div class="collapse navbar-collapse" id="navbarNav">
        //         <ul class="navbar-nav ml-auto">
        //             <li>
        //                 <Link to="/home" class="block py-2 px-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"></Link>
        //             </li>
        //             <li>
        //                 <Link to="/about" >Biz haqimizda</Link>


        //             </li>
        //             <li>
        //                 <Link to="/sports" >Sport turlari</Link>
        //             </li>
        //             <li>
        //                 <Link to="/awards" >Erishilgan natijalar</Link>
        //             </li>
        //             <li>
        //                 <Link to="/staff" >Xodimlar</Link>
        //             </li>
        //             <li>
        //                 <Link to="/contact" >Bog'lanish</Link>
        //             </li>
  
        //         </ul>
        //     </div>
        // </nav>

           
        
   
                 
                 /*  */
            

        
                /*  */
                

       

     


    )
}

export default Navbar;

<Link> <img src={logo} alt="" /> <span>ANGREN SHAHAR <br /> 2-SON SPORT <br /> MAKTABI</span>
</Link>