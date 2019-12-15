<template id="frontpage" >
    
    <div class="frontpage-parent">
        <div class="frontpage-child">
            <div class="img-background img-header">
                <!-- untuk melakukan import pada gambar, harus menggunakan full url -->
                <!-- <b-img src="http://localhost/wordpress/wp-content/themes/multimedia/images/Background.png" alt="background"></b-img> -->
                <b-img src="https://multimedia-makassar.polimedia.ac.id/wp-content/themes/multimedia/images/Background.png" alt="background"></b-img>
            </div>
            <div class="main-section custom-container">
                <div class="upper-section-parent">
                    <div class="py-5 row upper-section-child">
                        <div class="section-right col-7">
                            <div class="text-header">
                                <h1 class="heading-hero">
                                    BELAJAR LEBIH BANYAK<br>DI MULTIMEDIA
                                </h1>

                                <h3 class="detail-text">
                                    Mulai Perjalanan Kamu<br>dan Temukan Hal Baru<br>Setiap Saat
                                </h3>
                            </div>
                            <div class="button-section">
                                <b-button pill class="btn-learn" href="#about-us-section">Pelajari Selengkapnya</b-button>
                            </div>
                        </div>
                        <div class="section-left col-5">
                            <div class="model-image">
                                <!-- <b-img src="http://localhost/wordpress/wp-content/themes/multimedia/images/Illustration.png" fluid-grow alt="background"></b-img> -->
                                <b-img src="https://multimedia-makassar.polimedia.ac.id/wp-content/themes/multimedia/images/Illustration.png" fluid-grow alt="background"></b-img>

                            </div>
                        </div>
                    </div>
                </div>
                <!-- my-5 untuk margin bagian atas dan bawah || mx-5 untuk margin kanan dan kiri -->
                <div class="about-us-section mx-5 py-5 mb-5 relative-position" id="about-us-section">
                    <div class="about-us-section-child row">
                        <!-- ml-5 untuk margin left -->
                        <b-col cols="3" class="about-us-head-section ml-auto">
                            <div class="about-us-text" >
                                <h1 class="about-us-title title-section">
                                    Siapa<br> Kami
                                </h1>
                                <span id="line-separator"></span>
                                <h5 class="about-us-desc desc-subtitle">All about Multimedia study programme</h5>
                            </div>
                        </b-col>
                        <b-col cols="8" class="row mr-auto about-us-card">
                            <b-col class="column-style">
                                <b-card class="linear-back text-center ml-auto">
                                
                                    <div class="img-svg">
                                        <profil color="white" :width="70"></profil>
                                    </div>
                                    <b-link to="/wordpress/about-us/profil" class="link-about-us">
                                        <h2 class="card-link mt-2">Profil</h2>
                                    </b-link>
                                </b-card>
                            </b-col>
                            <b-col class="column-style">
                                <b-card class="linear-back text-center ml-auto">
                                    <div class="img-svg">
                                            <kurikulum color="white" :width="70"></kurikulum>
                                        </div>
                                        <b-link to="/wordpress/about-us/kurikulum" class="link-about-us">
                                            <h2 class="card-link mt-2">Kurikulum</h2>
                                        </b-link>
                                    </b-card>
                            </b-col>
                            <b-col class="column-style">
                                <b-card class="linear-back text-center ml-auto">
                                        <div class="img-svg">
                                            <fasilitas color="white" :width="70"></fasilitas>
                                        </div>
                                        <b-link to="/wordpress/about-us/pekerjaan" class="link-about-us">
                                            <h2 class="card-link mt-2">Peluang Kerja</h2>
                                        </b-link>
                                </b-card>
                            </b-col>
                        </b-col>
                    </div>
                    <div class="about-us-section-background">

                    </div>
                </div>
                <div class="news-section-parent my-5 relative-position">
                    <div class="news-section-child py-5">    
                        <div class="news-title text-center">
                            <h1 class="title-section news-title">
                                Berita dan Blog
                            </h1>
                            <span id="line-separator" class="mx-auto"></span>
                            <h5 class="news-desc desc-subtitle mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt, nunc in porttitor facilisis, eros nisi </h5>
                        </div>
                        <div class="news-blog-card">
                            <div class="card-container mt-5">
                                <div class="card card-img child overflow-hidden" v-for="(post, index) in posts" v-if="index <= 2">
                                    <div class="img-thumb-section">
                                        <div class="overlay-effect"></div>
                                        <b-card-img v-bind:src="post.thumbnail_new" class="img-thumb"> </b-card-img>
                                    </div>
                                    <div class="head-context-section py-4 px-4 position-absolute">
                                        <h2 class="news-head-title">
                                            {{ post.title.rendered }}
                                        </h2>

                                        <div class="news-context" v-html="post.excerpt.rendered" >
                                            {{ post.excerpt.rendered }}
                                        </div>

                                        <router-link class="btn-news" :to=" {name: 'postingan', params:{ id: post.id }} " v-if="post.id">
                                            Read More
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>