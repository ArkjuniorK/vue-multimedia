<?php get_header(); ?>

<!-- buat route link -->
    <div class="wrap-white">
            <div id="app">
                <div class="navigation-tb-mb position-fixed navigation-deactivate-screen">
                    <?php get_template_part('navbar_screen'); ?>
                </div>
                <div class="main-section">
                    <div class="main-section-child">
                        <!-- panggil file navbar -->
                        <!-- file navbar berisi Vue Component
                        <route-link> -->
                        <?php get_template_part('navbar'); ?>

                        <!-- menampilkan isi template -->
                        <!-- adanya <anonymous-component> pada Vue Devtool -->
                        <router-view></router-view>

                        <!-- menampilkan footer-navbar -->
                        <?php get_template_part('footer_navigation'); ?>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- setiap template yang akan di render di <router-view> -->
    <!-- setiap template akan memiliki route masing -->
    <?php get_template_part('template-parts/frontpage'); ?> <!-- / -->
    <?php get_template_part('template-parts/profilpage'); ?>
    <?php get_template_part('template-parts/kurikulumpage'); ?>
    <?php get_template_part('template-parts/fasilitaspage'); ?>
    <?php get_template_part('template-parts/galeri'); ?>
    <?php get_template_part('template-parts/artikel'); ?>
    <?php get_template_part('template-parts/singlepage'); ?>
    
<?php get_footer(); ?>