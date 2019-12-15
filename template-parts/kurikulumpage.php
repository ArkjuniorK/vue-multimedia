<template id="kurikulumpage">
    
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
                                    <kurikulum :width="70" color="white"></kurikulum>
                                    <h3 class="title-icon mt-2 raleway-bold">
                                        Kurikulum
                                    </h3>
                                </div>
                            </b-col>
                            <b-col id="desc-col">
                                <div class="desc-section mb-5">
                                    <h5 class="desc-section-title raleway-bold">
                                        Prodi Multimedia<br>Makassar
                                    </h5>

                                    <div class="desc-section-desc">
                                        <p class="quicksand"> 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis ultrices ex vel commodo. Sed sed tempor magna. Nunc interdum lectus vel purus efficitur, quis lobortis felis tincidunt. Duis vulputate dui a sagittis ultrices. Donec scelerisque sollicitudin nisl, et dapibus nunc tempus in. Maecenas euismod eros tortor, vitae condimentum lectus vestibulum ac. Morbi interdum, eros vel faucibus viverra, lacus dolor consequat odio, nec ullamcorper tellus sem et urna. Nullam convallis id erat in bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dignissim eget nisl in malesuada. Suspendisse semper dapibus gravida. Ut ante dui, volutpat non risus at, ultrices vehicula mi. 
                                        <br>Nunc non tincidunt risus. Mauris nec congue lacus. Proin id interdum risus. Nulla at dui dictum leo posuere dapibus non vel eros. Vivamus vulputate risus ligula, in vestibulum orci consequat sit amet. In sit amet massa eget neque ultrices efficitur ac eu nibh. Ut fringilla tortor aliquet quam sagittis eleifend sit amet sed risus. Fusce semper eleifend nulla, et efficitur arcu pellentesque a. Morbi ac ligula non ex feugiat fermentum at in tellus. Maecenas eget consequat arcu, et facilisis purus. Cras porta gravida odio, id aliquet neque. 
                                        </p>
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
                                        <b-link to="/wordpress/about-us/fasilitas" class="link-about-us">
                                            <h2 class="card-link mt-2">Fasilitas</h2>
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