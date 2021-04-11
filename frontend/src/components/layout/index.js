import Header from "./header";
import Footer from "./footer";

const Layout = ({data, children}) => {
    console.warn('menus inside layout', data);

    return (
        <div>
            <Header header={data?.header} headerMenus={data?.menus?.headerMenus}/>
            {children}
            <Footer footer={data?.footer} footerMenus={data?.menus?.footerMenus} />
        </div>
    )
}
export default Layout