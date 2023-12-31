import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci'
import { GoQuestion } from 'react-icons/go'
import { GoPerson } from 'react-icons/go'
import { BsHeart } from 'react-icons/bs'
import { TbWeight } from 'react-icons/tb'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { IoIosArrowDown } from 'react-icons/io'
import { LiaBalanceScaleSolid } from 'react-icons/lia'
import Layout from './Layout';
import Shop from './Shop';
import img1 from '../lay1.webp';
import img2 from '../lay2.webp';
import Women from './Women';
import Mens from './Mens';
function Navigation(props) {

    const [active, IsActive] = useState(0);

    const [isHovered, setIsHovered] = useState(false);
    console.log(isHovered)

    const handleVerified = () => {
        setIsHovered(!isHovered);
    };

    return (
        <div>
            {/* <div className=' '>
                <div className=''>
                    <video width="100%" height="" preload='none' muted playsInline autoPlay loop className=''>
                        <source src="https://cdn.shopify.com/s/files/1/0264/8817/6717/files/pexels-cottonbro-9512045.mp4?v=1637151689" type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='nav1 d-flex text-white'>
                    <h5 className='text-white nav2 mt-2'> <i className='navic'>Shella</i></h5>
                    <div className='nav3  d-flex mt-2 '>
                        <div className='nav4 ' onMouseOver={() => IsActive(1)} style={active === 1 ? { color: '  rgb(113, 107, 110)' } : { color: '' }}>
                            <p className=' nav4 d-flex'>LAYOUTS<span className='nav9'><IoIosArrowDown /></span> </p>
                        </div>

                        <div className='nav5' onMouseOver={() => IsActive(2)} style={active === 2 ? { color: '  rgb(113, 107, 110)' } : { color: '' }}>
                            <p className='nav5 d-flex'>SHOP  <span className='nav9'><IoIosArrowDown /></span></p>
                        </div>

                        <div className='nav5 dropdown ' onMouseOver={() => IsActive(3)} style={active === 3 ? { color: ' rgb(113, 107, 110)' } : { color: '' }}>
                            <p className='nav5 d-flex dropbtn' >BLOG  <span className='nav9'><IoIosArrowDown /></span> </p>
                            <div class="dropdown-content">
                                <a href="#" className='tab4 text-secondary'>Blog V1-Classic</a>
                                <a href="#" className='tab5  text-secondary'>Blog V2-Grid</a>
                                <a href="#" className='tab5 text-secondary'>Blog V3-Masonry</a>
                                <a href="#" className='tab5 text-secondary'>Blog V4-Slider</a>
                                <a href="#" className='tab5 text-secondary'>Single Post</a>
                                
                            </div>
                        </div>

                        <div className='nav5 dropdown' onMouseOver={() => IsActive(4)} style={active === 4 ? { color: ' rgb(113, 107, 110)' } : { color: '' }}>
                            <p className='nav5 d-flex dropbtn'>GALLERY  <span className='nav9'><IoIosArrowDown /></span></p>
                            <div class="dropdown-content">
                                <a href="#" className='tab4 text-secondary'>Gallery V1-Masonry</a>
                                <a href="#" className='tab5  text-secondary'>Gallery V2-Masonry</a>
                                <a href="#" className='tab5 text-secondary'>Gallery V3-Grid </a>
                                <a href="#" className='tab5 text-secondary'>Gallery V4-Grid</a>
                                <a href="#" className='tab5 text-secondary'>Single </a>
                                
                            </div>
                        </div>

                        <div className='nav5 dropdown' onMouseOver={() => IsActive(5)} style={active === 5 ? { color: ' rgb(113, 107, 110)' } : { color: '' }}>
                            <p className='nav5 d-flex dropbtn'>PAGES  <span className='nav9'><IoIosArrowDown /></span></p>
                            <div class="dropdown-content">
                                <a href="#" className='tab4 text-secondary'>About Us</a>
                                <a href="#" className='tab5  text-secondary'>Customer Service</a>
                                <a href="#" className='tab5 text-secondary'>Sizing Guide</a>
                                <a href="#" className='tab5 text-secondary'>FAQ's</a>
                                <a href="#" className='tab5 text-secondary'>Contact us</a>
                                <a href="#" className='tab5 text-secondary'>Coming Soon</a>
                                <a href="#" className='tab5 text-secondary'>Page 404</a>
                                <a href="#" className='tab5 text-secondary'>Icons</a>
                                <a href="#" className='tab5 text-secondary'>Documentations</a>

                                
                            </div>
                        </div>

                        <div className='nav5' onMouseOver={() => IsActive(6)} style={active === 6 ? { color: ' rgb(113, 107, 110)' } : { color: '' }}>
                            <p className='nav5 d-flex'>WOMEN'S  <span className='nav9'><IoIosArrowDown /></span></p>
                        </div>

                        <div className='nav5' onMouseOver={() => IsActive(7)} style={active === 7 ? { color: ' rgb(113, 107, 110)' } : { color: '' }}>
                            <p className='nav5 d-flex'>MEN'S  <span className='nav9'><IoIosArrowDown /></span></p>
                        </div>

                        <div className='nav5' onMouseOver={() => IsActive(8)} style={active === 8 ? { color: ' rgb(113, 107, 110)' } : { color: '' }}>
                            <p className='nav5 d-flex'> BUYNOW!<span className='nav9'><IoIosArrowDown /></span>  <div className='tab7 text-white text-center mt-1'>SALE</div></p>
                         
                        </div>

                    </div>
                    <div className=' tab1'>
                        {
                            active == 1 && <>
                            
                                <Layout />
                            </>
                        }
                        {
                            active == 2 && <>
                                <Shop />
                            </>
                        }
                        {
                            active == 6 && <>
                                <Women />
                            </>
                        }
                        {
                            active == 7 && <>
                                <Mens />
                            </>
                        }


                    </div>


                    <div className='d-flex nav6'>
                        <CiSearch className='nav7' onMouseOver={() => IsActive(9)} style={active === 9 ? { color: ' rgb(113, 107, 110)' } : { color: '' }} />
                        <GoQuestion className='nav7' onMouseOver={() => IsActive(10)} style={active === 10 ? { color: ' rgb(113, 107, 110)' } : { color: '' }} />
                        <GoPerson className='nav7' onMouseOver={() => IsActive(11)} style={active === 11 ? { color: ' rgb(113, 107, 110)' } : { color: '' }} />
                        <BsHeart className='nav7' onMouseOver={() => IsActive(12)} style={active === 12 ? { color: ' rgb(113, 107, 110)' } : { color: '' }} />
                        <LiaBalanceScaleSolid className="nav7" onMouseOver={() => IsActive(13)} style={active === 13 ? { color: ' rgb(113, 107, 110)' } : { color: '' }} />
                        <HiOutlineShoppingBag className='nav7' onMouseOver={() => IsActive(14)} style={active === 14 ? { color: ' rgb(113, 107, 110)' } : { color: '' }} />
                        <p className='nav8' onMouseOver={() => IsActive(15)} style={active === 15 ? { color: ' rgb(113, 107, 110)' } : { color: '' }}>Bag(0)</p>
                    </div>

                </div>











            </div> */}
        </div>

    );
}

export default Navigation;