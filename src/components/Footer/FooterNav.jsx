import { Link } from '@nextui-org/react';

const FooterNav = () => {
    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        // { name: "Research & Publications", path: "/research" },
    ];

    const linkItems = [
        { name: "Contact", path: "/contact" },
        { name: "Privacy Policy", path: "/privacy" },
        // { name: "Terms & Conditions", path: "/terms" },
    ];

    return (
        <div className='footer-nav-container'>
            <h3>Quick Links</h3>
            <div className='footer-links'>
                <div className='footer-nav'>
                    {menuItems.map((item, index) => (
                        <Link key={index} to={item.path} style={{ cursor: "pointer" }}>
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className='footer-nav'>
                    {linkItems.map((item, index) => (
                        <Link key={index} to={item.path} style={{ cursor: "pointer" }}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FooterNav;
