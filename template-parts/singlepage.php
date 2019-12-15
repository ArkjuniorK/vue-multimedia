<template id="singlepage">

    <div class="single-page-parent">
        <div class="single-parent-child">
            <div class="main-post-section">
                <div class="title-date-section custom-container">
                    <h4 class="raleway-bold mt-4">
                        {{ post.title.rendered }}
                    </h4>
                    <small class="quicksand"> {{ post.date }} |  </small>
                </div>
                <div class="img-hero-section mt-3 mb-4 custom-container">
                    <img v-bind:src="post.thumbnail_full" alt="img" id="img-hero">
                </div>
                <div class="core-section custom-container mb-4" v-html="post.content.rendered">
                </div>
                <span class="line-separator custom-container"></span>
                <div class="post-controller custom-container py-3">
                    <div class="prev-post">
                        <a class="btn-control"  v-if="post.prev_post" :href=" '/wordpress/postingan/' + post.prev_post ">
                            Sebelumnya
                        </a>
                    </div>
                    <div class="next-post ml-auto">
                        <a class="btn-control"  v-if="post.prev_post" :href=" '/wordpress/postingan/' + post.next_post ">
                            Lanjutkan
                        </a>
                    </div>
                </div>
                <span class="line-separator custom-container"></span>
                <div class="category-section-post custom-container py-4">
                    <div class="category-section-child row" >
                        <span class="cats mr-1 mt-1 col" v-for="category in post.cats" > {{ category.name }} </span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>

</template>
