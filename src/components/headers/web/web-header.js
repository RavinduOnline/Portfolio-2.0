import React , {useState} from 'react';

export default function WebHeader({ navbarCSS, navbarItemCSS, navItems }) {
    const [hoveredItem, setHoveredItem] = useState(null);

    // Handle mouse enter and leave events to change color
    const handleMouseEnter = (index) => {
        setHoveredItem(index);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    return (
        <div className={`w-full fixed top-0 ${navbarCSS}`} style={{ zIndex: 999 }}>
            <nav className='mx-auto px-52 flex pb-4 justify-between'>
                <div className='flex w-full'>
                    <div className='mr-16 bg-black max-w-fit pt-6 pb-4 px-6 rounded-br-2xl rounded-bl-2xl'>
                        <img className='h-12' src="./images/ravindu-logo.png" alt="" />
                    </div>

                    <div className='flex'>
                        {navItems.map((item, index) => {
                            return (
                                <a
                                    href={item.link}
                                    className={`${navbarItemCSS} font-bold pt-6 pb-4 px-6 rounded-br-2xl rounded-bl-2xl flex items-end hover:bg-red-500 hover:text-white ${hoveredItem === index ? 'text-green-500' : ''}`}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {item.text}
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div>
                    {/* nnn */}
                </div>
            </nav>
        </div>
    );
}
