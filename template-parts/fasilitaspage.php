<template id="fasilitaspage">
    
    <div class="profil-page-parent">
        <div class="profil-page-child">
            <div class="img-section img-background">
                <bg-image width="full-width"></bg-image>
            </div>
            <div class="main-section-parent">
                <div class="main-section-child custom-container">
                    <div class="profile-section">
                        <div class="profile-section-child row">
                            <b-col>
                                <div class="icon-section text-center">
                                    <fasilitas :width="70" color="white"></fasilitas>
                                    <h3 class="title-icon mt-2 raleway-bold">
                                        Peluang Kerja
                                    </h3>
                                </div>
                            </b-col>
                            <b-col id="desc-col">
                                <div class="desc-section mb-5">
                                    <h5 class="desc-section-title raleway-bold">
                                        Peluang Kerja<br>Mahasiswa Multimedia
                                    </h5>

                                    <div class="desc-section-desc quicksand">
                                        1. Industri web design dan web content<br>
                                        2. Industri game baik game PC maupun game online<br>
                                        3. Industri periklanan<br>
                                        4. Industri perfilman TV maupun layar lebar<br>
                                        5. Instansi pemerintah dan Perusahaan swasta<br>
                                        6. Wirausaha baik di bidang software house (khusus multimedia)
                                    </div>
                                </div>
                            </b-col>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="about-us-card-section">
            <div class="about-us-card-section custom-container">
                <div class="about-us-section mx-5 py-5 mb-5 relative-position" id="about-us-section">
                    <div class="about-us-section-child row">
                    <!-- ml-5 untuk margin left -->
                        <b-col cols="3" class="about-us-head-section ml-auto">
                            <div class="about-us-text" >
                                <h1 class="title-section-scoped raleway-black about-us-title">
                                    Siapa<br> Kami
                                </h1>
                                <span id="line-separator"></span>
                                <h5 class="desc-subtitle-scoped quicksand about-us-desc">All about Multimedia study programme</h5>
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
                </div>
            </div>
        </div>
    </div>

</template>