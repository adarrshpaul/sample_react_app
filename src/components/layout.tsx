import Header from './header';
import Footer from './footer';

interface LayoutProps {
    children: JSX.Element
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div data-theme="synthwave"className='flex flex-col min-h-screen'>
            <Header />
            <main className='flex-grow'>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;