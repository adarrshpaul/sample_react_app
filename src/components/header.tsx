import { PinRightIcon ,MobileIcon , HomeIcon } from '@radix-ui/react-icons'
const Header = () => {
    return (
        <header className="bg-primary-content py-4">
            <div className="container mx-auto flex justify-between px-4">
                <h1 className="text-xl font-semibold text-fuchsia-400 font-sans">Adarrsh Paul</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li className='pt-2'>
                        <a href="/" className="text-fuchsia-300">
                        <HomeIcon/>
                        </a>

                        </li>
                        <li className='pt-2'><a href="#" className="flex flex-col justify-center"> 
                        <PinRightIcon/> 
                        </a></li>
                        <li className='pt-2'><a href="#" className="text-fuchsia-300">
                            <MobileIcon/></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
