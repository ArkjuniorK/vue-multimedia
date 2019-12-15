<template id="profilpage">
    
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
                                    <profil :width="70" color="white"></profil>
                                    <h3 class="title-icon mt-2 raleway-bold">
                                        Profil
                                    </h3>
                                </div>
                            </b-col>
                            <b-col id="desc-col">
                                <div class="desc-section mb-5" >
                                    <h5 class="desc-section-title raleway-bold">
                                        Prodi Multimedia<br>Makassar
                                    </h5>

                                    <div class="desc-section-desc quicksand">
                                        <!-- wp:paragraph -->
                                        <p>Program Multimedia dirancang khusus untuk menyiapkan mahasiswa agar mampu menyampaikan pesan yang digunakan melalui berbagai media yang ada, seperti media audio, video, teks, grafik dan animasi. Berbagai produk multimedia dapat dijumpai berupa media televisi, multimedia interaktif dan berbagai unsur kreatif yang digunakan dalam menyampaikan pesan agar lebih menarik.</p>
                                        <!-- /wp:paragraph -->

                                        <!-- wp:paragraph -->
                                        <p>Dengan dukungan tenaga pengajar yang berpengalaman dalam proses belajar kurikulum berbasis produksi dan kewirausahaan baik di dunia industri maupun akademis. Program studi ini mampu melahirkan lulusan yang sesuai dengan tuntutan dunia usaha dan industri multimedia di masa datang.</p>
                                        <!-- /wp:paragraph -->
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