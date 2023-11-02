import React, { useState } from 'react';
import { GoQuestion } from 'react-icons/go';
import { GoPerson } from 'react-icons/go';
import { BsHeart } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { LiaBalanceScaleSolid } from 'react-icons/lia';
import { CiSearch } from 'react-icons/ci';
import { AiFillTag } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from 'react-icons/io';
import Women from '../Components/Women';
import Mens from '../Components/Mens';
import Layout from '../Components/Layout';
import Shop from '../Components/Shop';
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from "react-router-dom";
import { BsSearch } from 'react-icons/bs'
import { AiOutlineMenuUnfold } from 'react-icons/ai'

function Error(props) {
    const [active, IsActive] = useState(0);
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const navigate = useNavigate();
    const handleclick = () => {
        navigate('/')
    }


    return (
        <div>

            {/* ---HEADER---- */}

            <div className='' >
                <p className='gallery text-center text-white ' id='brandtop'>FINAL CLEARANCE: Take 20% off 'Sale Must-Haves' </p>
            </div>

            <div className='container hide1 '>
                <div className='row gallery1' id='heades'>
                    <div className='col-lg-6' onClick={handleclick}>
                        <h5 className=' text-start mt-2 navi1'> <i className='navic'>Shella</i></h5>
                    </div>

                    <div className='col d-flex justify-content-end '>
                        <CiSearch className='navi2 mt-3' />
                        <GoQuestion className='navi2 mt-3' />
                        <GoPerson className='navi2 mt-3' />
                        <BsHeart className='navi2 mt-3' />
                        <LiaBalanceScaleSolid className="navi2 mt-3" />
                        <HiOutlineShoppingBag className='navi2 mt-3 ' />
                        <p className='navi2 hea1' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" >Bag(0)</p>
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">

                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <p className='canva1'>MY BAG ( 1 )</p>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='d-flex'>
                                <img src='https://shella-demo.myshopify.com/cdn/shop/products/1720433712_1_1_1_140x.progressive.jpg?v=1525093539' alt='' className='canva2' />
                                <p className='canva6'>Knit cardigan</p>
                            </div>

                        </div>
                        <div className='col-6'>
                            <p className='d-flex justify-content-end canva3'>$148.50</p>

                            <div className='d-flex justify-content-end'>

                                <div className='canva4'>
                                    <p className='text-center'> - </p>
                                </div>

                                <div className='canva5'>
                                    <p className='text-center'>1</p>
                                </div>

                                <div className='canva4'>
                                    <p className='text-center'>+</p>
                                </div>
                            </div>
                            <p className='text-secondary text-end mt-3 canva7'>REMOVE</p>
                        </div>
                    </div>
                    <hr className=''></hr>
                    <div className='d-flex'>
                        <div className='d-flex'>
                            <AiFillTag className='can1' />
                            <p className='can2 d-flex'>AUTO <span className='can3'>DISCOUNT</span></p>
                        </div>
                        <div className='can5'>
                            <p className='can4'>-$16.50</p>
                        </div>
                    </div>

                    <p className='can6'>SUBTOTAL: $148.50</p>
                    <div className='text-secondary can7'>Taxes and shipping fee will be calculated at checkout.</div>
                    <div className='d-flex mt-3'>
                        <div className="form-check b10">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <p className='ft8 '>I agree with the Terms and Conditions. Tristique senectus et netus et malesuada. Nunc scelerisque viverra mauris in.</p>
                        </div>
                    </div>
                    <div className='can8'>
                        <p className='text-white text-center can9'>PROCEED TO CHECKOUT</p>
                    </div>
                    <p className='can10 text-end mt-3'>VIEW CART</p>
                </div>
            </div>

            <hr className='navi3 hide1'></hr>


            {/* ----NAVIGATION BAR---- */}


            <div className='container hide1'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  mb-lg-0  a6" >

                                <li className="nav-item a2 ">
                                    <a className="nav-link d-flex" href="#" onMouseOver={() => IsActive(1)} style={active === 1 ? { color: 'black ' } : { color: 'rgb(113, 107, 110)' }}>
                                        LAYOUTS <span className='nav9'><IoIosArrowDown /></span> </a>
                                </li>
                                <li className="nav-item a1 ">
                                    <a className="nav-link d-flex" href="#" onMouseOver={() => IsActive(2)} style={active === 2 ? { color: 'black ' } : { color: ' rgb(113, 107, 110)' }}>SHOP <span className='nav9'><IoIosArrowDown /></span></a>
                                </li>


                                <li className="nav-item a1 ">
                                    <div className=' dropdown ' onMouseOver={() => IsActive(3)} style={active === 3 ? { color: 'black' } : { color: ' rgb(113, 107, 110)' }}>
                                        <a className="nav-link d-flex" href="#">BLOG<span className='nav9'><IoIosArrowDown /></span></a>
                                        <div class="dropdown-content">
                                            <a href="#" className='tab4 text-secondary'>Blog V1-Classic</a>
                                            <a href="#" className='tab5  text-secondary'>Blog V2-Grid</a>
                                            <a href="#" className='tab5 text-secondary'>Blog V3-Masonry</a>
                                            <a href="#" className='tab5 text-secondary'>Blog V4-Slider</a>
                                            <a href="#" className='tab5 text-secondary'>Single Post</a>

                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item a1 ">
                                    <div className=' dropdown ' onMouseOver={() => IsActive(4)} style={active === 4 ? { color: 'black' } : { color: ' rgb(113, 107, 110)' }}>
                                        <a className="nav-link d-flex" href="#">GALLERY<span className='nav9'><IoIosArrowDown /></span></a>
                                        <div class="dropdown-content">
                                            <a href="#" className='tab4 text-secondary'>Gallery V1-Masonry</a>
                                            <a href="#" className='tab5  text-secondary'>Gallery V2-Masonry</a>
                                            <a href="#" className='tab5 text-secondary'>Gallery V3-Grid </a>
                                            <a href="#" className='tab5 text-secondary'>Gallery V4-Grid</a>
                                            <a href="#" className='tab5 text-secondary'>Single </a>

                                        </div>
                                    </div>
                                </li>

                                <li className="nav-item a1 ">
                                    <div className=' dropdown ' onMouseOver={() => IsActive(5)} style={active === 5 ? { color: 'black ' } : { color: 'rgb(113, 107, 110)' }}>
                                        <a className="nav-link d-flex" href="#">PAGES<span className='nav9'><IoIosArrowDown /></span></a>
                                        <div class="dropdown-content">
                                        
                                        <div className=' text-secondary  '>
                                            <Link className="text-secondary" aria-current="page" to="/homev1">
                                                Homev1
                                            </Link>
                                        </div>


                                        <div className=' text-secondary page11 '>
                                            <Link className="text-secondary" aria-current="page" to="/blog">
                                                Blog
                                            </Link>
                                        </div>

                                        <div className=' text-secondary page11'>
                                            <Link className="text-secondary" aria-current="page" to="/Gallery">
                                            Gallery 
                                            </Link>
                                        </div>

                                        <div className=' text-secondary page11'>
                                            <Link className="text-secondary" aria-current="page" to="/aboutus">
                                            About Us
                                            </Link>
                                        </div>

                                        <div className=' text-secondary page11'>
                                            <Link className="text-secondary" aria-current="page" to="/customer">
                                            Customer Service
                                            </Link>
                                        </div>

                                        <div className=' text-secondary page11'>
                                            <Link className="text-secondary" aria-current="page" to="/mens">
                                            Men's Clothing
                                            </Link>
                                        </div>

                                        <div className=' text-secondary page11'>
                                            <Link className="text-secondary" aria-current="page" to="/brand">
                                            Brand
                                            </Link>
                                        </div>

                                        
                                        <div className=' text-secondary page11'>
                                            <Link className="text-secondary" aria-current="page" to="/brandv2">
                                            Brandv2
                                            </Link>
                                        </div>

                                        <div className=' text-secondary page11'>
                                            <Link className="text-secondary" aria-current="page" to="/coming">
                                            Coming Soon
                                            </Link>
                                        </div>

                                        <div className=' text-secondary page11'>
                                            <Link className="text-secondary" aria-current="page" to="/error">
                                            Error 404
                                            </Link>
                                        </div>



                                    </div>
                                    </div>
                                </li>

                                <li className="nav-item a1">
                                    <a className="nav-link d-flex" href="#" onMouseOver={() => IsActive(6)} style={active === 6 ? { color: ' black ' } : { color: 'rgb(113, 107, 110)' }}>WOMEN'S <span className='nav9'><IoIosArrowDown /></span></a>
                                </li>
                                <li className="nav-item a1">
                                    <a className="nav-link d-flex" href="#" onMouseOver={() => IsActive(7)} style={active === 7 ? { color: ' black' } : { color: ' rgb(113, 107, 110)' }}>MEN'S <span className='nav9'><IoIosArrowDown /></span></a>
                                </li>
                                <li className="nav-item  a1">
                                    <a className="nav-link d-flex" href="#"
                                        onMouseOver={() => IsActive(8)} style={active === 8 ? { color: 'black  ' } : { color: 'rgb(113, 107, 110)' }}
                                        onMouseLeave={() => IsActive(0)}
                                    >BUYNOW! <span className='nav9'><IoIosArrowDown /></span></a>
                                </li>


                            </ul>


                            <div className="d-flex blog_modal" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <p className='blog_modal1 text-secondary '>SEARCH</p>
                                <CiSearch className='blog_modal2' />
                            </div>

                        </div>
                    </div>
                </nav>
                <div className=' a4'>
                    {
                        active == 1 && <>
                            <div onMouseLeave={() => IsActive(0)}>
                                <Layout />
                            </div>


                        </>
                    }
                    {
                        active == 2 && <>
                            <div onMouseLeave={() => IsActive(0)}>
                                <Shop />
                            </div>

                        </>
                    }
                    {
                        active == 6 && <>
                            <div onMouseLeave={() => IsActive(0)}>
                                <Women />
                            </div>

                        </>
                    }
                    {
                        active == 7 && <>
                            <div onMouseLeave={() => IsActive(0)}>
                                <Mens />
                            </div>

                        </>
                    }


                </div>
            </div>
            <hr className='navi3 hide1'></hr>


            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen mod3">
                    <div className="modal-content container-fluid">
                        <div className="modal-header">

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <p className='text-secondary'>WHAT ARE YOU LOOKING FOR?</p>
                            <input type='text' className='mod4' placeholder='Search Products...' />
                        </div>


                    </div>
                </div>
            </div>



            {/* NAVIGATION RESPONSIVE */}

            <div className=' hide2'>

                <div className='sr1 '>
                    <div className='mkk1'>
                        <div className='d-flex '>
                            <a className="btn new21" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                <AiOutlineMenuUnfold />
                            </a>

                            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                <div class="offcanvas-header">

                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <div className=''>
                                        <div className='d-flex'>
                                            <input type="text" value="Search Product..." className='off1' />
                                            <BsSearch className='off3' />
                                        </div>
                                        <hr className='off2'></hr>


                                        <div className='mt-2'>
                                            <div className='' onClick={() => setShow(!show)} >
                                                <p className='off6 d-flex'>LAYOUTS<span className='off5'><IoIosArrowForward /></span> </p>
                                            </div>
                                            <div className=''>
                                                {
                                                    show && <>


                                                        <div className='row'>
                                                            <div className='col'>

                                                                <div className='' >
                                                                    <p className='text-black text-black lay1  mt-4 '>LAYOUTS</p>
                                                                    <div className='text-secondary lay2 d-flex mt-1'>
                                                                        <Link className="nav-link" aria-current="page" to="/homev1">
                                                                            HomeV1
                                                                        </Link>
                                                                        <div className='lay4 text-white text-center'>HOT</div>
                                                                    </div>
                                                                    <div className='lay3 text-secondary mt-1'>
                                                                        <Link className="nav-link" aria-current="page" to="/blog">
                                                                            Blog
                                                                        </Link>

                                                                    </div>
                                                                    <div className='lay3 text-secondary d-flex mt-1'>
                                                                        <Link className="nav-link" aria-current="page" to="/Gallery">
                                                                            Gallery
                                                                        </Link>

                                                                        <div className='lay4 text-white text-center'>HOT</div>
                                                                    </div>
                                                                    <div className='lay3 text-secondary mt-1'>
                                                                        <Link className="nav-link" aria-current="page" to="/aboutus">
                                                                            About Us
                                                                        </Link>
                                                                    </div>

                                                                    <div className='lay3 text-secondary d-flex mt-1'>
                                                                        <Link className="nav-link" aria-current="page" to="/customer">
                                                                            Customer
                                                                        </Link>

                                                                        <div className='lay5 text-white text-center'>ACTIVE</div>
                                                                    </div>
                                                                    <div className='lay3 text-secondary d-flex mt-1'>HomeV6

                                                                        <div className='lay4 text-white text-center'>HOT</div>
                                                                    </div>
                                                                    <div className='lay3 text-secondary mt-1'>HomeV7</div>

                                                                    <div className='lay3 text-secondary d-flex mt-1'>HomeV8
                                                                        <div className='lay6 text-white text-center'>SLIDER</div>
                                                                    </div>
                                                                    <div className='lay3 text-secondary mt-1'>HomeV9</div>
                                                                    <div className='lay3 text-secondary mt-1'>HomeV10</div>
                                                                    <div className='lay3 text-secondary mt-1'>HomeV11</div>
                                                                    <div className='lay3 text-secondary mt-1'>HomeV12</div>
                                                                    <div className='lay3 text-secondary mt-1'>HomeV13</div>
                                                                    <div className='lay3 text-secondary mt-1'>HomeV14</div>
                                                                    <div className='lay3 text-secondary mt-1'>HomeV15</div>
                                                                    <div className='lay3 text-secondary d-flex mt-1'>HomeV16
                                                                        <div className='lay4 text-white text-center'>HOT</div>
                                                                    </div>

                                                                    <div className='lay3 text-secondary d-flex mt-1'>HomeV17
                                                                        <div className='lay4 text-white text-center'>HOT</div>
                                                                        <div className='lay6 text-white text-center'>NEW</div>
                                                                    </div>
                                                                    <div className='lay3 text-secondary d-flex mt-1'>HomeV18
                                                                        <div className='lay4 text-white text-center'>HOT</div>
                                                                        <div className='lay6 text-white text-center'>NEW</div>
                                                                    </div>


                                                                </div>

                                                            </div>
                                                            <div className='col'>
                                                                <div className='' >
                                                                    <p className='text-black text-black lay1  mt-4 '>SKINS</p>
                                                                    <div className='text-secondary lay2 d-flex'>SKIN1-<span> Boutique</span>

                                                                    </div>
                                                                    <div className='text-secondary lay2 d-flex mt-1'>SKIN2-<span> Books</span>
                                                                    </div>

                                                                    <div className='text-secondary lay2 d-flex mt-1'>SKIN3-<span>Jewellery</span>
                                                                    </div>


                                                                    <div className='lay2 d-flex text-secondary mt-1'>SKIN4-<span>Product</span>
                                                                        <div className='lay4 text-white text-center'>HOT</div>

                                                                    </div>

                                                                    <div className='lay2 text-secondary d-flex mt-1'>SKIN5-<span>Tools</span>
                                                                    </div>
                                                                    <div className='lay2 text-secondary d-flex mt-1'>SKIN6-<span>Gadgets</span>
                                                                    </div>
                                                                    <div className='lay2 text-secondary mt-1'>SKIN7-<span>Furniture</span>
                                                                    </div>

                                                                    <div className='lay2 text-secondary d-flex mt-1'>SKIN8-<span>Cosmetics</span>

                                                                    </div>
                                                                    <div className='lay2 text-secondary d-flex mt-1'>SKIN9-<span>Computers</span></div>
                                                                    <div className='lay2 text-secondary d-flex mt-1'>SKIN10-<span>Kitchen</span></div>
                                                                    <div className='lay2 text-secondary d-flex mt-1'>SKIN11-<span>Christmas</span></div>

                                                                    <div className='lay2 text-secondary d-flex mt-1'>SKIN12-<span>Cannabis</span>
                                                                        <div className='lay4 text-white text-center '>HOT</div>

                                                                    </div>

                                                                    <div className='lay2 text-secondary d-flex mt-1'>SKIN13-<span>Wine</span>
                                                                        <div className='lay10 text-white text-center '>NEW</div>
                                                                    </div>

                                                                    <div className='lay2 text-secondary d-flex mt-1'>SKIN14- <span>FoodDelivery</span>
                                                                        <div className='lay10 text-white text-center '>NEW</div>
                                                                    </div>

                                                                    <div className='lay2 text-secondary d-flex mt-1'>SKIN15-<span>Lenses</span>
                                                                        <div className='lay10 text-white text-center '>NEW</div>
                                                                    </div>
                                                                    <div className='lay2 text-secondary d-flex mt-1'>SKIN16-<span>Cakes</span>
                                                                        <div className='lay10 text-white text-center '>NEW</div>
                                                                    </div>

                                                                    <div className='lay2 text-secondary d-flex mt-1'>SKIN17-<span>Plants</span>

                                                                        <div className='lay10 text-white text-center '>NEW</div>
                                                                    </div>
                                                                    <div className='lay2 text-secondary d-flex mt-1'>SKIN18-<span>Pasta</span>

                                                                        <div className='lay10 text-white text-center  '> NEW</div>
                                                                    </div>


                                                                </div>

                                                            </div>

                                                        </div>
                                                    </>
                                                }
                                            </div>

                                        </div>




                                        <div className='mt-2 '>
                                            <div className='' onClick={() => setShow1(!show1)}>
                                                <p className='off6 d-flex'>SHOP<span className='off7'><IoIosArrowForward /></span> </p>
                                            </div>

                                            <div className=''>
                                                {
                                                    show1 && <>

                                                        <div className='row'>
                                                            <div className='col'>
                                                                <div className=''>
                                                                    <p className='shop1 text-black'>COLLECTION LAYOUTS</p>
                                                                    <div className='text-secondary shop2 '>List Collections V1</div>
                                                                    <div className='text-secondary shop2 mt-1'>List Collections V2</div>
                                                                    <div className='text-secondary shop2 mt-1'>2 Products per Row</div>
                                                                    <div className='text-secondary shop2 mt-1'>3 Products per Row</div>
                                                                    <div className='text-secondary shop2 mt-1'>4 Products per Row</div>
                                                                    <div className='text-secondary shop2 mt-1'>List Products</div>
                                                                    <div className='text-secondary shop2 mt-1 d-flex'>List Products V2
                                                                        <div className='shop3 text-white text-center mt-1'>HOT</div>
                                                                        <div className='shop4 text-white text-center mt-1  d-flex'>NEW</div>
                                                                    </div>
                                                                    <div className='text-secondary shop2 mt-1'>Left Sidebar </div>
                                                                    <div className='text-secondary shop2 mt-1'>Right Sidebar </div>
                                                                    <div className='text-secondary shop2 mt-1'>Left Sidebar </div>
                                                                </div>
                                                            </div>

                                                            <div className='col'>
                                                                <div className=''>
                                                                    <p className='shop1 text-black'>SINGLE PRODUCTS LAYOUTS</p>
                                                                    <div className='text-secondary shop2 '>Product V1- Classic</div>
                                                                    <div className='text-secondary shop2 mt-1 '>Product V2- Thumbs List</div>
                                                                    <div className='text-secondary shop2 mt-1'>Product V3- 3 Columns</div>
                                                                    <div className='text-secondary shop2 mt-1'>Product V4- Sticky Side</div>
                                                                    <div className='text-secondary shop2 mt-1 d-flex'>Product V5- Grid
                                                                        <div className='shop3 text-white text-center mt-1'>HOT</div>
                                                                    </div>
                                                                    <div className='text-secondary shop2 mt-1'>Product V6- Slider</div>
                                                                    <div className='text-secondary shop2 mt-1'>Product V1- With Column</div>
                                                                    <div className='text-secondary shop2 mt-1'>Product V2- With Column</div>
                                                                    <div className='text-secondary shop2 d-flex mt-1'>3D Model and Video
                                                                        <div className='shop3 text-white text-center mt-1'>HOT</div>
                                                                    </div>
                                                                    <div className='text-secondary shop2 d-flex mt-1'>Pre Order
                                                                        <div className='shop3 text-white text-center mt-1'>HOT</div>
                                                                        <div className='shop4 text-white text-center d-flex mt-1'>NEW</div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='col-sm-12'>
                                                                <div className='text-center mt-5'>
                                                                    <p className='shop1 text-black'>PRODUCT OPTIONS</p>
                                                                    <div className='text-secondary shop2 '>On Listing</div>
                                                                    <div className='text-secondary shop2 mt-1 '>Color,Text</div>
                                                                    <div className='text-secondary shop2 mt-1 '>Image,Text</div>
                                                                    <div className='text-secondary shop2 mt-1 '>Big Image,Text</div>
                                                                    <div className='text-secondary shop2 mt-1 '>Color,Select Dropdown</div>
                                                                    <div className='text-secondary shop2 mt-1 '>Small text,Text</div>
                                                                    <div className='text-secondary shop2 mt-1 d-flex justify-content-center'>Custom Image,Text
                                                                        <div className='shop4 text-white text-center mt-1  d-flex'>NEW</div>
                                                                    </div>
                                                                    <div className='text-secondary shop2 mt-1 '>Custom Big Image</div>
                                                                    <div className='text-secondary shop2 mt-1 '>Custom Color,Text</div>
                                                                    <div className='text-secondary shop2 mt-1 '>Square Color,Text</div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </>
                                                }
                                            </div>

                                        </div>





                                        <div className='mt-2'>
                                            <div className='' onClick={() => setShow2(!show2)}>
                                                <p className='off6 d-flex'>BLOG<span className='off7'><IoIosArrowForward /></span> </p>
                                            </div>

                                            <div className=''>
                                                {
                                                    show2 && <>
                                                        <div className=''>
                                                            <p className='foot33 text-secondary text-center'>Blog V1-Classic</p>
                                                            <p className='foot33 text-secondary text-center'>Blog V2-Grid</p>
                                                            <p className='foot33 text-secondary text-center'>Blog V3-Masonry</p>
                                                            <p className='foot33 text-secondary text-center'>Blog V4-Slider</p>
                                                            <p className='foot33 text-secondary text-center'>Single Post</p>
                                                        </div>
                                                    </>
                                                }

                                            </div>

                                        </div>




                                        <div className='mt-2'>
                                            <div className='' onClick={() => setShow3(!show3)}>
                                                <p className='off6 d-flex'>GALLERY<span className='off5'><IoIosArrowForward /></span> </p>
                                            </div>

                                            <div className=''>
                                                {
                                                    show3 && <>
                                                        <div className='text-center'>
                                                            <p className='foot33 text-secondary text-center'>Gallery V1-Masonry</p>
                                                            <p className='foot33 text-secondary text-center'>Gallery V1-imagess</p>
                                                            <p className='foot33 text-secondary text-center'>Gallery V1-cases</p>
                                                            <p className='foot33 text-secondary text-center'>Gallery V1-Masonry</p>
                                                            <p className='foot33 text-secondary text-center'>Single Post</p>
                                                        </div>

                                                    </>
                                                }

                                            </div>

                                        </div>




                                        <div className='mt-2 '>
                                            <div className='' onClick={() => setShow4(!show4)} >
                                                <p className='off6 d-flex'>PAGES<span className='off8'><IoIosArrowForward /></span> </p>
                                            </div>

                                            <div>
                                                {
                                                    show4 && <>

                                                        <div className='text-center'>
                                                            <p className='foot33 text-secondary text-center'>About us</p>
                                                            <p className='foot33 text-secondary text-center'>Customer Service</p>
                                                            <p className='foot33 text-secondary text-center'>Sizing Guide</p>
                                                            <p className='foot33 text-secondary text-center'>FAQ's</p>
                                                            <p className='foot33 text-secondary text-center'>Contact us</p>
                                                            <p className='foot33 text-secondary text-center'>Coming Soon</p>
                                                            <p className='foot33 text-secondary text-center'>Page 404</p>
                                                            <p className='foot33 text-secondary text-center'>Contact Builder</p>
                                                        </div>

                                                    </>
                                                }
                                            </div>

                                        </div>

                                        <div className='mt-2'>
                                            <div className='' onClick={() => setShow5(!show5)}>
                                                <p className='off6 d-flex'>WOMEN'S<span className='off9'><IoIosArrowForward /></span> </p>
                                            </div>

                                            <div className=''>
                                                {
                                                    show5 && <>
                                                        <div className='row'>
                                                            <div className='col'>
                                                                <div className=''>
                                                                    <p className='shop1 text-black'>CLOTHING</p>
                                                                    <div className='text-secondary shop2 '>Coats</div>
                                                                    <div className='text-secondary shop2 mt-1'>Jackets</div>
                                                                    <div className='text-secondary shop2 mt-1'>Blazers</div>
                                                                    <div className='text-secondary shop2 mt-1 d-flex'>Dressess

                                                                    </div>
                                                                    <div className='text-secondary shop2 mt-1'>Playsuits & Jackets</div>
                                                                    <div className='text-secondary shop2 mt-1'>Trousers</div>
                                                                    <div className='text-secondary shop2 mt-1 d-flex'>Jeans
                                                                    </div>
                                                                    <div className='text-secondary shop2 mt-1'>Knitwear</div>
                                                                    <div className='text-secondary shop2 mt-1'>Sweatshirts & Hoddies </div>
                                                                    <div className='text-secondary shop2 mt-1'>T-shirts </div>

                                                                </div>
                                                            </div>

                                                            <div className='col'>
                                                                <div className=''>
                                                                    <p className='shop1 text-black'>SHOES</p>
                                                                    <div className='text-secondary shop2 '>Trainers</div>
                                                                    <div className='text-secondary shop2 mt-1'>Boots and Ankle Boots</div>

                                                                    <div className='text-secondary shop2 mt-1 d-flex'>Heels

                                                                    </div>
                                                                    <div className='text-secondary shop2 mt-1'>Flats</div>
                                                                    <div className='text-secondary shop2 mt-1'>Platforms</div>
                                                                    <div className='text-secondary shop2 mt-1 d-flex'>Heeled Sandals</div>
                                                                </div>
                                                            </div>

                                                            <div className='col'>
                                                                <div className=''>
                                                                    <p className='shop1 text-black'>ACCESSORIES</p>
                                                                    <div className='text-secondary shop2 '>Bags</div>
                                                                    <div className='text-secondary shop2 mt-1'>BagsPacks</div>
                                                                    <div className='text-secondary shop2 mt-1'>Glasses</div>
                                                                    <div className='text-secondary shop2 mt-1 d-flex'>Jewellery

                                                                    </div>
                                                                    <div className='text-secondary shop2 mt-1'>Earings</div>
                                                                    <div className='text-secondary shop2 mt-1'>iPhone Cases</div>
                                                                    <div className='text-secondary shop2 mt-1 d-flex'>Gadgets
                                                                    </div>
                                                                    <div className='text-secondary shop2 mt-1'>Hats & Beanie</div>
                                                                    <div className='text-secondary shop2 mt-1'>Purses</div>
                                                                    <div className='text-secondary shop2 mt-1'>Belts</div>
                                                                    <div className='text-secondary shop2 mt-1'>Socks</div>

                                                                </div>
                                                            </div>



                                                        </div>


                                                    </>
                                                }

                                            </div>
                                        </div>




                                        <div className='mt-2'>
                                            <div className='' onClick={() => setShow6(!show6)} >
                                                <p className='off6 d-flex'>MEN'S<span className='off8'><IoIosArrowForward /></span> </p>
                                            </div>
                                            <div>
                                                {
                                                    show6 && <>

                                                        <div className='row'>
                                                            <div className='col'>
                                                                <p className='shop1 mt-5 text-black'>CLOTHING</p>
                                                                <div>
                                                                    <img src='https://shella-demo5.myshopify.com/cdn/shop/files/09_170x.progressive.png.jpg?v=1614334854' alt='' className='' />
                                                                </div>
                                                                <div className='text-secondary shop2 mt-1'>Coats</div>
                                                                <div className='text-secondary shop2 mt-1 d-flex'>Jackets
                                                                    <div className='shop3 text-white text-center mt-1'>SALE</div>
                                                                </div>
                                                                <div className='text-secondary shop2 mt-1'>Jeans</div>
                                                                <div className='text-secondary shop2 mt-1'>T-shirts</div>
                                                                <div className='text-secondary shop2 mt-1'>Sweatshirts</div>
                                                                <div className='text-secondary shop2 mt-1'>Knitwear</div>
                                                                <div className='text-secondary shop2 mt-1'>Shirts</div>
                                                                <div className='text-secondary shop2 mt-1'>Trousers</div>
                                                                <div className='text-secondary shop2 mt-1'>Shorts</div>

                                                            </div>


                                                            <div className='col'>
                                                                <p className='shop1 mt-5 d-flex text-black'>SHOES

                                                                </p>
                                                                <div>
                                                                    <img src='https://shella-demo5.myshopify.com/cdn/shop/files/10_170x.progressive.png.jpg?v=1614334854' alt='' className='' />
                                                                </div>
                                                                <div className='text-secondary shop2 mt-1'>Trainers</div>
                                                                <div className='text-secondary shop2 mt-1'>Boots & Ankle Boots</div>
                                                                <div className='text-secondary shop2 mt-1'></div>
                                                                <div className='text-secondary shop2 mt-1'>Shoes</div>
                                                                <div className='text-secondary shop2 mt-1'>Sandals</div>
                                                                <div className='text-secondary shop2 mt-1'>Knitwear</div>
                                                                <div className='text-secondary shop2 mt-1'>Shirts</div>
                                                                <div className='text-secondary shop2 mt-1'>Trousers</div>
                                                            </div>


                                                        </div>

                                                    </>
                                                }
                                            </div>
                                        </div>




                                        <div className='   mt-2 '>
                                            <div className=''>
                                                <p className='off6 d-flex'>BUY NOW!<span className='off9'><IoIosArrowForward /></span> </p>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>


                            <div className='new22' onClick={handleclick}>
                                <p className='text-white d-flex justify-content-center new23'>S</p>
                            </div>

                            <div className='d-flex new24'>
                                <CiSearch className='new25' />
                                <GoQuestion className='new25' />
                                <GoPerson className='new25' />
                                <BsHeart className='new25' />
                                <HiOutlineShoppingBag className='off13' />

                            </div>

                        </div>

                    </div>
                    <div className=' a4'>
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


                </div>
            </div>
            <hr className='navi3 hide7'></hr>

            {/* ----HOME--- */}


            <div className='container'>
                <div className='d-flex ab1'>
                    <p className='home1 text-secondary'>Home<span className='home3'>/</span></p>
                    <p className='home2 text-secondary'>404 Not Found</p>
                </div>

                <div className='error'>
                    <p className='error1 text-center'>404</p>
                    <p className='error2 text-center'>Page Not Found</p>
                    <p className='error3 text-secondary text-center'>We looked everywhere for this page.Are you sure the website URL is correct? Get in<br/> touch with the site owner.</p>
                  
                </div>
                <div className='error4 text-center mt-5' onClick={handleclick}>
                    GO BACK
                </div>






            </div>





        </div>
    );
}

export default Error;