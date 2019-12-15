<!-- router link untuk membuat route pada Vue.js -->
<!-- <b-nav-item> juga support dengan attribute to="/route" -->
<template id="navbar">
    <div class="navbar-parent">
        <div class="navbar-top py-5 custom-container">
            <b-nav>
                <div class="logo-section">   
                    <b-nav-item to="/" class="home-logo-item">
                        <h1 id="logo-item">MM</h1>
                    </b-nav-item>
                </div>
                <div class="dd-parent ml-auto"> 
                    <div class="ham-menu-hide" id="ham-menu">
                        <div class="menu-ham-child">
                            <button class="btn-transparent" id="btn-menu" v-on:click="activeNav">
                                <burger color="white" :width="25"></burger>
                            </button>
                        </div>
                    </div>
                    <div class="nav-link-dropdown" id="dropdown-link">
                        <b-nav-item>
                            <router-link to="/wordpress" class="dropdown-right nav-link-custom">
                                Beranda
                            </router-link>
                        </b-nav-item>
                        
                        <b-nav-item class="pl-3">
                            <router-link to="/wordpress/galeri" class="dropdown-right nav-link-custom">
                                Galeri
                            </router-link>
                        </b-nav-item>
                        <b-nav-item class="pl-3">
                            <router-link to="#" class="dropdown-right nav-link-custom">
                                Artikel dan Berita
                            </router-link>
                        </b-nav-item>

                        <b-nav-item-dropdown
                        class="dropdown-right pl-3"
                        id="my-nav-dropdown"
                        text="Tentang Multimedia"
                        toggle-class="nav-link-custom"
                        right
                        >
                            <b-dropdown-item>Visi dan Misi</b-dropdown-item>
                            <b-dropdown-item>Sejarah Multimedia</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </div>
                </div>
            </b-nav>
        </div>
    </div>
</template>