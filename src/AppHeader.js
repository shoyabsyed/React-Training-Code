import React from 'react';


// <AppHeader />
// <AppHeader isScrolledApplied={true} />
// <AppHeader isScrolledApplied={false} />
export default function AppHeader(props) {




    const menu = [
        "Home",
        "Elements",
        "Features",
        "Extras",
        "Pages",
        "Blog",
        "Gallery",
        "Shop",
    ]

    const [activeIndex, setActiveIndex] = React.useState(0);


    // React.useEffect( () => {
    //     document.addEventListener("scroll", checkScroll)
    // }, [])

    return (
        <header className={`${props.isScrolledApplied ? 'scroll-bg' : '' }`}>
            <div className="container">
                <div className="header-logo">
                    <h2>
                        <a href="#">Bakery</a>
                    </h2>
                </div>
                <div className="header-menu">
                    <ul>
                        {/* <li>
                        <a href="#" className="active">Home</a>
                    </li>
                    <li>
                        <a href="#">Elements</a>
                    </li>
                    <li>
                        <a href="#">Features</a>
                    </li>
                    <li>
                        <a href="#">Extras</a>
                    </li>
                    <li>
                        <a href="#">Pages</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Gallery</a>
                    </li>
                    <li>
                        <a href="#">Shop</a>
                    </li> */}

                        {menu.map((menuItem, idx) => <li>
                            <a
                                href="#"
                                onClick={() => setActiveIndex(idx)}
                                className={idx === activeIndex ? 'active' : ''}
                            >
                                {menuItem}
                            </a>
                        </li>)}
                    </ul>
                </div>
            </div>
        </header>
    )
}