import { Link, useLocation  } from 'react-router-dom';

export const Header = () =>  {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';

    return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" />
          </a>
        </div>
       
        
        <div className="font-semibold leading-6 text-indigo-600  hover:text-indigo-500 ml-2 no-underline">
        {isLoginPage ? (
          // Если на странице логина, показываем кнопку "Home"
          <Link to="/" className='font-semibold leading-6 text-indigo-600  hover:text-indigo-500 ml-2 no-underline'>
            Home
          </Link>
        ) : (
          // В противном случае показываем кнопку "Log in"
          <Link to='/login' className='font-semibold leading-6 text-indigo-600  hover:text-indigo-500 ml-2 no-underline'>
            Log in
          </Link>
        )}
         
        </div>
      </nav>
      
    </header>
  )
}