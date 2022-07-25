import NavHeader from '../nav-header/NavHeader';

function Layout(props) {
    const startSearch = (value) => {
        props.executeSearch(value);
    }
    return <div className="layout">
        <header>
            <NavHeader onStartSearch={startSearch}></NavHeader>
        </header>
        <section>
            {props.children}
        </section>
    </div>
}

export default Layout;