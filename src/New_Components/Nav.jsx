import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { CiSearch } from 'react-icons/ci'

function Nav(props) {
    return (
        <div>
            {/* <div className='container navii2'>
              



                <nav class="navbar navbar-expand-lg navbar-light navv3 ">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav  mb-2 mb-lg-0 navv2">
                                <li class="nav-item">
                                    <a class="nav-link " aria-current="page" href="#">NEW</a>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        CLOTHING
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Dressess & Jumpsuits</a></li>
                                        <li><a class="dropdown-item" href="#">Polo Suits</a></li>

                                        <li><a class="dropdown-item" href="#">T-shirts</a></li>
                                        <li><a class="dropdown-item" href="#">Sweaters</a></li>
                                        <li><a class="dropdown-item" href="#">Blazer</a></li>
                                        <li><a class="dropdown-item" href="#">Jackets</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        SHOES
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Dressess & Jumpsuits</a></li>
                                        <li><a class="dropdown-item" href="#">Polo Suits</a></li>

                                        <li><a class="dropdown-item" href="#">T-shirts</a></li>
                                        <li><a class="dropdown-item" href="#">Sweaters</a></li>
                                        <li><a class="dropdown-item" href="#">Blazer</a></li>
                                        <li><a class="dropdown-item" href="#">Jackets</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ACCESSORIES
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Dressess & Jumpsuits</a></li>
                                        <li><a class="dropdown-item" href="#">Polo Suits</a></li>

                                        <li><a class="dropdown-item" href="#">T-shirts</a></li>
                                        <li><a class="dropdown-item" href="#">Sweaters</a></li>
                                        <li><a class="dropdown-item" href="#">Blazer</a></li>
                                        <li><a class="dropdown-item" href="#">Jackets</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        BUYNON!
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Back To Main</a></li>

                                    </ul>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>





                <div className='nav-2 d-flex'>
                    <nav class="navbar navbar-expand-lg navbar-light  navig1 ">
                        <div class="container-fluid">

                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav  mb-2 mb-lg-0 navv2">
                                    <li class="nav-item">
                                        <a class="nav-link " aria-current="page" href="#">NEW</a>
                                    </li>

                                    <li class="nav-item dropdown">
                                        <a class="nav-link " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            CLOTHING
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="#">Dressess & Jumpsuits</a></li>
                                            <li><a class="dropdown-item" href="#">Polo Suits</a></li>

                                            <li><a class="dropdown-item" href="#">T-shirts</a></li>
                                            <li><a class="dropdown-item" href="#">Sweaters</a></li>
                                            <li><a class="dropdown-item" href="#">Blazer</a></li>
                                            <li><a class="dropdown-item" href="#">Jackets</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            SHOES
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="#">Dressess & Jumpsuits</a></li>
                                            <li><a class="dropdown-item" href="#">Polo Suits</a></li>

                                            <li><a class="dropdown-item" href="#">T-shirts</a></li>
                                            <li><a class="dropdown-item" href="#">Sweaters</a></li>
                                            <li><a class="dropdown-item" href="#">Blazer</a></li>
                                            <li><a class="dropdown-item" href="#">Jackets</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            ACCESSORIES
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="#">Dressess & Jumpsuits</a></li>
                                            <li><a class="dropdown-item" href="#">Polo Suits</a></li>

                                            <li><a class="dropdown-item" href="#">T-shirts</a></li>
                                            <li><a class="dropdown-item" href="#">Sweaters</a></li>
                                            <li><a class="dropdown-item" href="#">Blazer</a></li>
                                            <li><a class="dropdown-item" href="#">Jackets</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            BUYNON!
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="#">Back To Main</a></li>

                                        </ul>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </nav>
                    <p className=' head11 navig1'>SHELLA</p>
                    <div className='d-flex head22 mt-2'>
                        <HiOutlineShoppingBag className='head33 navig1' />

                    </div>
                </div>
            </div>

            <div >
                <p className='navii3 text-center text-white'>FINAL CLEARANCE: Take 20% off 'Sale Must-Haves' </p>
            </div> */}

        </div>
    );
}

export default Nav;