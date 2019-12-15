<?php

/*  Register Scripts and Style */

function theme_register_scripts() {
    // wp_enqueue_style( 'olympos-css', get_stylesheet_uri() );
    // wp_enqueue_script( 'olympos-js', esc_url( trailingslashit( get_template_directory_uri() ) . 'js/olympos.min.js' ), array( 'jquery' ), '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'theme_register_scripts', 1 );


/* Add menu support */
if (function_exists('add_theme_support')) {
    add_theme_support('menus');
}

/* Add post image support */
add_theme_support( 'post-thumbnails' );


/* Add custom thumbnail sizes */
if ( function_exists( 'add_image_size' ) ) {
    add_image_size('thumbnail_220', 600, 220, true);

}

/* Add widget support */
if ( function_exists('register_sidebar') )
    register_sidebar(array(
        'name'          => 'SidebarOne',
        'id'            => 'SidebarOne',
	    'before_widget' => '<div id="%1$s" class="sidebar-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widgettitle">',
        'after_title'   => '</h4>',
    ));
    
if ( function_exists('register_sidebar') )
    register_sidebar(array(
        'name'          => 'SidebarTwo',
        'id'            => 'SidebarTwo',
	    'before_widget' => '<div id="%1$s" class="sidebar-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widgettitle">',
        'after_title'   => '</h4>',
    ));


/*  EXCERPT 
    Usage:
    
    <?php echo excerpt(100); ?>
*/

function excerpt($limit) {
    $excerpt = explode(' ', get_the_excerpt(), $limit);
    if (count($excerpt)>=$limit) {
    array_pop($excerpt);
    $excerpt = implode(" ",$excerpt).'...';
    } else {
    $excerpt = implode(" ",$excerpt);
    } 
    $excerpt = preg_replace('`\[[^\]]*\]`','',$excerpt);
    return $excerpt;
}

/*

Buat function baru untuk mengimport ke API
dan dapat di tangkap oleh Axios

*/

function rest_img($data, $post, $request) {
    $_data = $data->data;

    // thumbnail
    $thumbnail_id = get_post_thumbnail_id( $post->ID );
    $thumbnailNew = wp_get_attachment_image_src( $thumbnail_id, 'thumbnail_220' );
    $thumbnailFull = wp_get_attachment_image_src( $thumbnail_id, 'full');

    // users
    // $user = get( $post->ID );

    // category
    $cats = get_the_category( $post->ID );

    // nex/prev post
    $nextpost = get_adjacent_post(false, '', true);
    $nextpost = $nextpost->ID;

    $prevpost = get_adjacent_post(false, '', false);
    $prevpost = $prevpost->ID;
    

    $_data['thumbnail_new'] = $thumbnailNew[0];
    $_data['thumbnail_full'] = $thumbnailFull[0];
    $_data['cats'] = $cats;
    $_data['next_post'] = $nextpost;
    $_data['prev_post'] = $prevpost;
    // $response->add_link( 'author', rest_url( "/wp/v2/users/{$post->post_author}" ) );
    // $_data['users_name'] = $user;
    $data->data = $_data;

    return $data;
}
// parameter pertama merupaka sebuah fungsi
// jangan gunakan parameter sembarangan pada parameter pertama
add_filter('rest_prepare_post', 'rest_img', 10, 3); 

// membuat fungsi untuk memangkas jumlah excerpt
// mengembalikan nilai 15 kata
// lalu menambahkan filter agar fungsi yang di gunakan berjalan
function excerpt_custom( $limit ) {
    return 15;
}
add_filter('excerpt_length', 'excerpt_custom', 999);

// add_action('init', function () {
//     add_rewrite_rule('^/(.+)/?', 'index.php?post_type=page&p=yourHomepageIDHere', 'top');
// });
// $response->add_link( 'author', rest_url( "/wp/v2/users/{$post->post_author}" ), array(
//     'embeddable' => true,
// ) );



