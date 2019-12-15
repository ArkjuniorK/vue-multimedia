<template id="navbar_screen">
    <div class="navbar-menu-active-parent ">
        <div class="navbar-menu-active custom-container">
            <div class="navbar-hide-child py-5">
                <b-nav>
                    <div class="logo-section">   
                        <b-nav-item to="/" class="home-logo-item">
                            <h1 id="logo-item">MM</h1>
                        </b-nav-item>
                    </div>
                    <div class="dd-parent ml-auto">
                        <div class="close-navbar">
                            <div class="close-navbar-child">
                                <button class="btn-transparent" id="btn-close" v-on:click="deactivateNav">
                                    <home color="white" :width="30"></home>
                                </button>
                            </div>
                        </div>
                    </div>
                </b-nav>
            </div>
            <div class="link-section">
                <div class="link-section-child">
                    <div class="links-item-section ml-5">
                        <h2 class="link-item-single"><b-link to="#">Beranda</b-link></h2>
                        <h2 class="link-item-single"><b-link to="#">Gallery</b-link></h2>
                        <h2 class="link-item-single"><b-link to="#">Artikel dan Berita</b-link></h2>
                        <h2 class="link-item-single"><b-link to="#">Visi dan Misi</b-link></h2>
                        <h2 class="link-item-single"><b-link to="#">Tentang Multimedia</b-link></h2>
                    </div>
                </div>
                <div class="link-section-child-two">
                    <div class="link-item-social ml-5">
                        <h3 class="social-title">
                            Follow Us
                        </h3>
                        <div class="social-icon-item">
                            <i class="flaticon-001-facebook flaticon"></i>
                            <i class="flaticon-011-instagram flaticon"></i>
                            <i class="flaticon-002-twitter flaticon"></i>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    </div>
</template>