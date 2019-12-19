<<<<<<< HEAD
=======
// import headful from './headful';
// const base = axios.created({

// })
// router.beforeEach((to, from, next) => {
//         // This goes through the matched routes from last to first, finding the closest route with a title.
//         // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
//         const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
      
//         // Find the nearest route element with meta tags.
//         const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
//         const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
      
//         // If a route with a title was found, set the document (page) title to that value.
//         if(nearestWithTitle) document.title = nearestWithTitle.meta.title;
      
//         // Remove any stale meta tags from the document using the key attribute we set below.
//         Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
      
//         // Skip rendering meta tags if there are none.
//         if(!nearestWithMeta) return next();
      
//         // Turn the meta tag definitions into actual elements in the head.
//         nearestWithMeta.meta.metaTags.map(tagDef => {
//           const tag = document.createElement('meta');
      
//           Object.keys(tagDef).forEach(key => {
//             tag.setAttribute(key, tagDef[key]);
//           });
      
//           // We use this to track which meta tags we create, so we don't interfere with other ones.
//           tag.setAttribute('data-vue-router-controlled', '');
      
//           return tag;
//         })
//         // Add the meta tags to the document head.
//         .forEach(tag => document.head.appendChild(tag));
      
//         next();
//       });
// untuk versi Vue.js 2
// melakukan koneksi dengan file 
>>>>>>> 3b39ecc9405fd4db963a0f587c07cbcd29c3e0a9

// note: burger icon hanya akan berisi template
// yang akan menyatu dengan navbar
// jadi untuk memanggil variabel ini membutuhkan 
// property component pada const App ataupun App new 
var burgerIcon = {
    name: 'Burger',
    template: 
    `<svg 
    version="1.1" 
    id="Capa_1" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    x="0px" 
    y="0px" 
    viewBox="0 0 56 56" 
    style="enable-background:new 0 0 56 56;" 
    xml:space="preserve"
    :width="width"
    :height="width">
        <g
        :class="color">
            <path d="M8,40c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S12.411,40,8,40z"/>
            <path d="M28,40c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S32.411,40,28,40z"/>
            <path d="M48,40c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S52.411,40,48,40z"/>
            <path d="M8,20c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S12.411,20,8,20z"/>
            <path d="M28,20c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S32.411,20,28,20z"/>
            <path d="M48,20c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S52.411,20,48,20z"/>
            <path d="M8,0C3.589,0,0,3.589,0,8s3.589,8,8,8s8-3.589,8-8S12.411,0,8,0z"/>
            <path d="M28,0c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S32.411,0,28,0z"/>
            <path d="M48,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S43.589,16,48,16z"/>
        </g>
    </svg>`,

    props: {
        color: {
            type: String,
            default: 'white',
            required: false
        },
        width: {
            type: Number,
            default: 50,
            required: false
        },
    },


}
var homeIcon = {
    name: 'home',
    template: 
    `
    <svg version="1.1" 
    id="Capa_1" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    x="0px" 
    y="0px"
    viewBox="0 0 58.365 58.365"
    style="enable-background:new 0 0 58.365 58.365;" 
    xml:space="preserve"
    :width= "width"
    :height= "width">
        <path 
        :class="color"
        d="M57.863,26.632L29.182,0L0.502,26.632c-0.404,0.376-0.428,1.009-0.052,1.414c0.374,0.404,1.009,0.427,1.413,0.052
        l4.319-4.011v3.278v31h46v-31v-3.278l4.319,4.011c0.192,0.179,0.437,0.267,0.681,0.267c0.269,0,0.536-0.107,0.732-0.319
        C58.291,27.641,58.267,27.008,57.863,26.632z M26.182,52.365h-12v-12h12V52.365z M26.182,34.365h-12v-12h12V34.365z M44.182,52.365
        h-12v-12h12V52.365z M44.182,34.365h-12v-12h12V34.365z"/>
    </svg>
    `,
    props: {
        color: {
            type: String,
            default: 'white',
            required: false
        },
        width: {
            type: Number,
            default: 50,
            required: false
        }
    }
}
var kurikulumIcon = {
    name: 'kurikulum',
    template:
    `
    <svg version="1.1" 
    id="Capa_1" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    x="0px" 
    y="0px"
    viewBox="0 0 512 512" 
    style="enable-background:new 0 0 512 512;" 
    xml:space="preserve"
    :width="width"
    :height="width"
    :class="color">
        <g>
            <g>
                <path d="M185.389,494.93c-1.859-1.86-4.439-2.93-7.07-2.93c-2.63,0-5.21,1.07-7.069,2.93c-1.86,1.86-2.931,4.44-2.931,7.07
                    s1.07,5.21,2.931,7.07c1.859,1.86,4.439,2.93,7.069,2.93c2.631,0,5.211-1.07,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07
                    S187.25,496.79,185.389,494.93z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M354.922,415.17c-5.522,0-10,4.477-10,10c0,18.608-15.139,33.748-33.747,33.748c-5.522,0-10,4.477-10,10s4.478,10,10,10
                    c29.636,0,53.747-24.111,53.747-53.748C364.922,419.647,360.444,415.17,354.922,415.17z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M428,0c-46.317,0-84,37.682-84,84v120c0,42.932,32.382,78.422,74,83.384V375h-35.993
                    c-15.748-22.169-41.629-36.661-70.832-36.661c-7.646,0-15.064,0.998-22.133,2.862L255.688,256h40.667
                    c2.349,0,4.415,1.5,5.142,3.735c0.741,2.279-0.163,4.016-0.768,4.848c-0.604,0.833-1.977,2.229-4.374,2.229h-10.222
                    c-5.522,0-10,4.477-10,10s4.478,10,10,10h10.222c8.228,0,15.72-3.818,20.556-10.475c4.835-6.656,6.149-14.962,3.606-22.785
                    C317.104,243.054,307.395,236,296.354,236h-55.321c-3.306,0-6.396,1.633-8.26,4.363c-1.864,2.73-2.257,6.205-1.052,9.282
                    l18.781,47.974h-83.107l-7.526-17.215l-2.843-7.245c-1.502-3.829-5.195-6.347-9.309-6.347h-43.482
                    c-8.406,0-16.253,4.146-20.988,11.092c-4.736,6.946-5.73,15.765-2.659,23.591c3.844,9.794,13.126,16.124,23.647,16.124h33.142
                    l-16.085,27.86c-10.571-4.589-22.224-7.14-34.463-7.14C38.952,338.34,0,377.292,0,425.17c0,26.85,12.251,50.89,31.456,66.83H10
                    c-5.522,0-10,4.477-10,10s4.478,10,10,10h76.83c44.496,0,81.276-33.645,86.251-76.83h39.162c3.374,0,6.521-1.702,8.368-4.525
                    c1.848-2.824,2.146-6.389,0.795-9.48L176.139,317.62h82.193l12.095,30.895c-27.395,14.621-46.083,43.495-46.083,76.655
                    c0,26.85,12.251,50.89,31.456,66.83h-35.48c-5.522,0-10,4.477-10,10s4.478,10,10,10h90.854c47.878,0,86.83-38.952,86.83-86.83
                    c0-10.604-1.914-20.768-5.409-30.169h71.737c5.522,0,10-4.477,10-10s-4.478-10-10-10H438v-87.616
                    c41.618-4.962,74-40.452,74-83.384V84C512,37.682,474.317,0,428,0z M104.235,297.62c-2.238,0-4.212-1.347-5.03-3.43
                    c-0.907-2.313-0.035-4.137,0.566-5.018c0.601-0.881,1.979-2.359,4.464-2.359h36.664l4.241,10.807H104.235z M86.83,492
                    C49.979,492,20,462.02,20,425.17s29.979-66.83,66.83-66.83c8.598,0,16.813,1.65,24.37,4.621L78.17,420.17
                    c-1.786,3.094-1.786,6.906,0,10s5.088,5,8.66,5h32.235c-4.272,13.741-17.107,23.748-32.235,23.748c-5.522,0-10,4.477-10,10
                    s4.478,10,10,10c26.219,0,48.099-18.875,52.801-43.748h13.279C148.069,467.293,120.282,492,86.83,492z M104.15,415.17
                    l24.357-42.186c12.849,10.282,21.841,25.19,24.403,42.186H104.15z M196.957,415.17h-23.876
                    c-2.808-24.372-15.742-45.705-34.482-59.667l18.366-31.811L196.957,415.17z M311.175,492c-36.851,0-66.831-29.98-66.831-66.83
                    c0-24.693,13.473-46.285,33.443-57.855l24.076,61.501c1.544,3.945,5.318,6.357,9.314,6.357c1.212,0,2.445-0.222,3.643-0.691
                    c5.143-2.014,7.68-7.814,5.666-12.958l-24.083-61.519c4.756-1.078,9.695-1.666,14.772-1.666c36.851,0,66.83,29.98,66.83,66.83
                    S348.025,492,311.175,492z M492,204c0,31.888-23.444,58.398-54,63.214V225.63l26.647-28.449
                    c3.775-4.031,3.568-10.359-0.463-14.134c-4.029-3.775-10.358-3.568-14.135,0.462L438,196.372V164.2l26.647-28.449
                    c3.775-4.031,3.568-10.359-0.463-14.135c-4.029-3.775-10.358-3.568-14.135,0.462L438,134.943V117.5c0-5.523-4.478-10-10-10
                    c-5.522,0-10,4.477-10,10v45.028l-10.295-10.991c-3.776-4.031-10.104-4.237-14.135-0.462c-4.031,3.775-4.238,10.104-0.463,14.134
                    L418,191.785v75.428c-30.556-4.816-54-31.326-54-63.214V84c0-35.29,28.71-64,64-64c35.29,0,64,28.71,64,64V204z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M502,375h-0.131c-5.522,0-10,4.477-10,10s4.478,10,10,10H502c5.522,0,10-4.477,10-10S507.522,375,502,375z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M238.833,138.667h-16.592c3.937-7.998,6.055-16.869,6.055-25.935c0-32.385-26.347-58.731-58.731-58.731
                    c-24.116,0-45.227,14.707-54.17,36.036c-5.736-2.759-12.076-4.24-18.562-4.24C73.215,85.796,54,105.011,54,128.629
                    c0,9.549,3.083,18.59,8.914,26.147c1.894,2.453,4.817,3.891,7.917,3.891h168.002c5.522,0,10-4.477,10-10
                    S244.355,138.667,238.833,138.667z M198.321,138.666H76.318C74.793,135.568,74,132.164,74,128.629
                    c0-12.59,10.243-22.833,22.833-22.833c6.453,0,12.637,2.753,16.965,7.554c2.621,2.907,6.695,4.018,10.429,2.842
                    c3.733-1.175,6.438-4.419,6.922-8.303C133.553,88.569,150.068,74,169.564,74c21.356,0,38.731,17.375,38.731,38.731
                    C208.295,122.321,204.698,131.585,198.321,138.666z"/>
            </g>
        </g>
    </svg>
    `,
    props: {
        color: {
            type: String,
            default: 'white',
            required: false
        },
        width: {
            type: Number,
            default: 100,
            required: false
        }
    }
}
var profilIcon = {
    name: 'profil',
    template:
    `
    <svg version="1.1" 
    id="Capa_1" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    x="0px" 
    y="0px"
    viewBox="0 0 512 512" 
    style="enable-background:new 0 0 512 512;" 
    xml:space="preserve"
    :width="width"
    :height="width"
    :class="color">
        <g>
            <g>
                <path d="M154.518,145.733h-48c-5.523,0-10,4.477-10,10v56c0,5.523,4.477,10,10,10h48c5.523,0,10-4.477,10-10v-56
                    C164.518,150.21,160.041,145.733,154.518,145.733z M144.518,201.733h-28v-36h28V201.733z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M154.518,257.733h-48c-5.523,0-10,4.477-10,10v56c0,5.523,4.477,10,10,10h48c5.523,0,10-4.477,10-10v-56
                    C164.518,262.21,160.041,257.733,154.518,257.733z M144.518,313.733h-28v-36h28V313.733z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M154.518,369.733h-48c-5.523,0-10,4.477-10,10v56c0,5.523,4.477,10,10,10h48c5.523,0,10-4.477,10-10v-56
                    C164.518,374.21,160.041,369.733,154.518,369.733z M144.518,425.733h-28v-36h28V425.733z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M415.497,369.733h-48c-5.523,0-10,4.477-10,10v56c0,5.523,4.477,10,10,10h48c5.523,0,10-4.477,10-10v-56
                    C425.497,374.21,421.02,369.733,415.497,369.733z M405.497,425.733h-28v-36h28V425.733z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M241.511,145.733h-48c-5.523,0-10,4.477-10,10v56c0,5.523,4.477,10,10,10h48c5.523,0,10-4.477,10-10v-56
                    C251.511,150.21,247.034,145.733,241.511,145.733z M231.511,201.733h-28v-36h28V201.733z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M328.503,145.733h-48c-5.523,0-10,4.477-10,10v56c0,5.523,4.477,10,10,10h48c5.523,0,10-4.477,10-10v-56
                    C338.503,150.21,334.026,145.733,328.503,145.733z M318.503,201.733h-28v-36h28V201.733z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M241.511,257.733h-48c-5.523,0-10,4.477-10,10v56c0,5.523,4.477,10,10,10h48c5.523,0,10-4.477,10-10v-56
                    C251.511,262.21,247.034,257.733,241.511,257.733z M231.511,313.733h-28v-36h28V313.733z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M328.503,257.733h-48c-5.523,0-10,4.477-10,10v56c0,5.523,4.477,10,10,10h48c5.523,0,10-4.477,10-10v-56
                    C338.503,262.21,334.026,257.733,328.503,257.733z M318.503,313.733h-28v-36h28V313.733z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M415.497,145.733h-48c-5.523,0-10,4.477-10,10v56c0,5.523,4.477,10,10,10h48c5.523,0,10-4.477,10-10v-56
                    C425.497,150.21,421.02,145.733,415.497,145.733z M405.497,201.733h-28v-36h28V201.733z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M415.497,257.733h-48c-5.523,0-10,4.477-10,10v56c0,5.523,4.477,10,10,10h48c5.523,0,10-4.477,10-10v-56
                    C425.497,262.21,421.02,257.733,415.497,257.733z M405.497,313.733h-28v-36h28V313.733z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M502,492h-37.511V104.063c0-5.523-4.477-10-10-10h-55.502V58c0-5.523-4.477-10-10-10H334V10c0-5.523-4.477-10-10-10H188
                    c-5.523,0-10,4.477-10,10v38h-54.986c-5.523,0-10,4.477-10,10v36.063H57.511c-5.523,0-10,4.477-10,10V492H10
                    c-5.523,0-10,4.477-10,10s4.477,10,10,10h492c5.523,0,10-4.477,10-10S507.523,492,502,492z M198,20h116v28H198V20z M298,492
                    h-69.191L298,422.809V492z M298,394.587c-0.223,0.187-0.443,0.38-0.653,0.59L214,478.524v-42.382L278.143,372H298V394.587z
                    M214,407.857V372h35.857L214,407.857z M444.489,492H377.51H318V372h3.5c5.523,0,10-4.477,10-10s-4.477-10-10-10h-131
                    c-5.523,0-10,4.477-10,10s4.477,10,10,10h3.5v120H67.511V114.063h111.007c5.523,0,10-4.477,10-10s-4.477-10-10-10h-45.504V68
                    h245.973v26.063H257.524c-5.523,0-10,4.477-10,10s4.477,10,10,10h186.965V492z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M224.58,96.99c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21,1.07-7.07,2.93s-2.93,4.44-2.93,7.07s1.07,5.21,2.93,7.07
                    c1.86,1.87,4.44,2.93,7.07,2.93s5.21-1.06,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07S226.44,98.85,224.58,96.99z"/>
            </g>
        </g>
    </svg>
    `,
    props: {
        color: {
            type: String,
            default: 'white',
            required: false
        },
        width: {
            type: Number,
            default: 100,
            required: false
        }
    }
}
var fasilitasIcon = {
    name: 'fasilitas',
    template: 
    `
    <svg version="1.1"
    id="Capa_1" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    x="0px" 
    y="0px"
    viewBox="0 0 512 512" 
    style="enable-background:new 0 0 512 512;" 
    xml:space="preserve"
    :width="width"
    :height="width"
    :class="color">
        <g>
            <g>
                <path d="M94.069,467.93C92.21,466.069,89.63,465,87,465s-5.21,1.069-7.07,2.93C78.07,469.791,77,472.37,77,475
                    s1.069,5.21,2.93,7.069C81.79,483.93,84.37,485,87,485s5.21-1.07,7.069-2.931C95.93,480.21,97,477.63,97,475
                    S95.93,469.79,94.069,467.93z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M502,67h-44v-6c0-18.748-15.252-34-34-34s-34,15.252-34,34v6h-44v-6c0-18.748-15.252-34-34-34s-34,15.252-34,34v6h-44v-6
                    c0-18.748-15.252-34-34-34s-34,15.252-34,34v6h-44v-6c0-18.748-15.252-34-34-34S54,42.252,54,61v6H10C4.478,67,0,71.478,0,77v398
                    c0,5.522,4.478,10,10,10h41c5.522,0,10-4.478,10-10c0-5.522-4.478-10-10-10H20V165h398c5.522,0,10-4.478,10-10
                    c0-5.522-4.478-10-10-10H20V87h34v7.168c0,18.748,15.252,34,34,34c5.522,0,10-4.478,10-10c0-5.522-4.478-10-10-10
                    c-7.72,0-14-6.28-14-14V87h92v7.168c0,18.748,15.252,34,34,34c5.522,0,10-4.478,10-10c0-5.522-4.478-10-10-10
                    c-7.72,0-14-6.28-14-14V87h92v7.168c0,18.748,15.252,34,34,34c5.522,0,10-4.478,10-10c0-5.522-4.478-10-10-10
                    c-7.72,0-14-6.28-14-14V87h92v7.168c0,18.748,15.252,34,34,34c5.522,0,10-4.478,10-10c0-5.522-4.478-10-10-10
                    c-7.72,0-14-6.28-14-14V87h82v378H127.986c-5.522,0-10,4.478-10,10c0,5.522,4.478,10,10,10H502c5.522,0,10-4.478,10-10V77
                    C512,71.478,507.522,67,502,67z M102,67H74v-6c0-7.72,6.28-14,14-14c7.72,0,14,6.28,14,14V67z M214,67h-28v-6
                    c0-7.72,6.28-14,14-14c7.72,0,14,6.28,14,14V67z M326,67h-28v-6c0-7.72,6.28-14,14-14c7.72,0,14,6.28,14,14V67z M438,67h-28v-6
                    c0-7.72,6.28-14,14-14c7.72,0,14,6.28,14,14V67z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M96,323c-23.159,0-42,18.841-42,42s18.841,42,42,42s42-18.841,42-42S119.159,323,96,323z M96,387
                    c-12.131,0-22-9.869-22-22c0-12.131,9.869-22,22-22s22,9.869,22,22C118,377.131,108.131,387,96,387z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M416,323c-23.159,0-42,18.841-42,42s18.841,42,42,42s42-18.841,42-42S439.159,323,416,323z M416,387
                    c-12.131,0-22-9.869-22-22c0-12.131,9.869-22,22-22c12.131,0,22,9.869,22,22C438,377.131,428.131,387,416,387z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M309.333,323c-23.159,0-42,18.841-42,42s18.841,42,42,42s42-18.841,42-42S332.492,323,309.333,323z M309.333,387
                    c-12.131,0-22-9.869-22-22c0-12.131,9.869-22,22-22c12.131,0,22,9.869,22,22C331.333,377.131,321.464,387,309.333,387z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M202.667,323c-23.159,0-42,18.841-42,42s18.841,42,42,42s42-18.841,42-42S225.826,323,202.667,323z M202.667,387
                    c-12.131,0-22-9.869-22-22c0-12.131,9.869-22,22-22c12.131,0,22,9.869,22,22C224.667,377.131,214.798,387,202.667,387z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M96,209c-23.159,0-42,18.841-42,42s18.841,42,42,42s42-18.841,42-42S119.159,209,96,209z M96,273
                    c-12.131,0-22-9.869-22-22c0-12.131,9.869-22,22-22s22,9.869,22,22S108.131,273,96,273z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M416,209c-23.159,0-42,18.841-42,42s18.841,42,42,42s42-18.841,42-42S439.159,209,416,209z M416,273
                    c-12.131,0-22-9.869-22-22c0-12.131,9.869-22,22-22c12.131,0,22,9.869,22,22S428.131,273,416,273z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M309.333,209c-23.159,0-42,18.841-42,42s18.841,42,42,42s42-18.841,42-42S332.492,209,309.333,209z M309.333,273
                    c-12.131,0-22-9.869-22-22c0-12.131,9.869-22,22-22c12.131,0,22,9.869,22,22S321.464,273,309.333,273z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M202.667,209c-23.159,0-42,18.841-42,42s18.841,42,42,42s42-18.841,42-42S225.826,209,202.667,209z M202.667,273
                    c-12.131,0-22-9.869-22-22c0-12.131,9.869-22,22-22c12.131,0,22,9.869,22,22S214.798,273,202.667,273z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M464.069,147.93C462.21,146.07,459.63,145,457,145s-5.21,1.069-7.07,2.93c-1.86,1.861-2.93,4.44-2.93,7.07
                    s1.069,5.21,2.93,7.069c1.86,1.86,4.44,2.931,7.07,2.931s5.21-1.07,7.069-2.931C465.93,160.21,467,157.63,467,155
                    S465.93,149.79,464.069,147.93z"/>
            </g>
        </g>
    </svg>
    `,
    props: {
        color: {
            type: String,
            default: 'white',
            required: false
        },
        width: {
            type: Number,
            default: 100,
            required: false
        }
    }
}
var backgroundImg = {
    name: 'bg-image',
    template: '<img alt="background" :class="width">',
    props: {
        width: {
            type: String,
            required: true
        },
    }  
}
<<<<<<< HEAD
var logoPolmed = {
    name: 'logo',
    template: '<img alt="logo" :width="width" :height="width" :src'
}
=======
>>>>>>> 3b39ecc9405fd4db963a0f587c07cbcd29c3e0a9

// setiap const akan di identigikasi di const route
// setiap const akan memiliki template yang berbeda
// template disini akan memanggil id atau class dari div pada index

const App = Vue.extend({
    methods: {
        activeNav: function (event) {
            navParent = document.querySelector('.navigation-tb-mb');
            navParent.classList.replace('navigation-deactivate-screen', 'navigation-active-screen')
        },
        deactivateNav: function (event) {
            navParent.classList.replace('navigation-active-screen', 'navigation-deactivate-screen')
        }
    },
    watch: {
        '$route' (to, from) {
            document.title = to.meta.title || 'Your Website'
        }
    }
})
const aboutUs = {
    computed: {
        mbViewProfile: function() {
            const mobileView = window.matchMedia(' (max-width: 600px) and (min-width: 320px) ')
            mobileView.addListener(widthChange)
            widthChange(mobileView)

            function widthChange(mobileView) {
                let aboutUsSection = document.querySelector('#about-us-section')
                let cardSection = document.querySelector('.about-us-card')
                let descCol = document.querySelector('#desc-col')
                let aboutUsTitle = document.querySelector('.title-section-scoped')
                let descSec = document.querySelector('.desc-section')
                let bg = document.querySelector('.img-section')

                if (mobileView.matches) {
                    cardSection.classList.replace('mr-auto', 'mx-auto')
                    aboutUsSection.classList.remove('mt-5', 'mb-5')
                    descCol.firstChild.classList.add('mt-vh')
                    aboutUsTitle.classList.remove('about-us-title')
                    descSec.classList.add('mt-vh')
                    descCol.classList.remove('col-9')
                    bg.firstChild.classList.replace('full-width', 'main-width')
                    bg.firstChild.src = "http://localhost/wordpress/wp-content/themes/multimedia/images/BackgroundMobile.png"
                }
                else {
                    cardSection.classList.replace('mx-auto', 'mr-auto')
                    aboutUsSection.classList.add('mt-5', 'mb-5')
                    descCol.firstChild.classList.remove('mt-vh')
                    aboutUsTitle.classList.add('about-us-title')
                    descCol.classList.add('col-9')
                    bg.firstChild.classList.replace('main-width', 'full-width')
                    bg.firstChild.src = "http://localhost/wordpress/wp-content/themes/multimedia/images/BackgroundDekstop.png"
                }
            }
        },
        tbViewProfile: function() {
            const tabletView = window.matchMedia(' (max-width: 900px) ')
            tabletView.addListener(widthChange)
            widthChange(tabletView)

            function widthChange(tabletView) {
                let aboutUsChild = document.querySelector('.about-us-section-child')
                if (tabletView.matches) {
                    aboutUsChild.classList.remove('row')
                    aboutUsChild.parentElement.classList.remove('mx-5')
                    aboutUsChild.parentElement.classList.replace('mt-5', 'mb-5')
                    aboutUsChild.firstChild.classList.remove('col-3')
                    aboutUsChild.firstChild.classList.remove('ml-auto')
                    aboutUsChild.lastChild.classList.remove('col-8')
                }
                else {
                    aboutUsChild.classList.add('row')
                    aboutUsChild.parentElement.classList.add('mx-5')
                    aboutUsChild.parentElement.classList.replace('mb-5', 'mt-5')
                    aboutUsChild.firstChild.classList.add('col-3')
                    aboutUsChild.firstChild.classList.add('ml-auto')
                    aboutUsChild.lastChild.classList.add('col-8')
                }
            }
        },
        dpViewProfile: function() {
            const desktopView = window.matchMedia(' (max-width: 2000px) and (min-width: 900px)')
            desktopView.addListener(widthChange)
            widthChange(desktopView)

            function widthChange(desktopView) {
                let profileSec = document.querySelector('.profile-section')
                let aboutUsT = document.querySelector('.about-us-title')
                let aboutUsDesc = document.querySelector('.about-us-desc')

                if (desktopView.matches) {
                    profileSec.classList.add('my-3')
                    aboutUsT.classList.replace('title-section-scoped', 'title-section-two')
                    aboutUsDesc.classList.replace('desc-subtitle-scoped', 'desc-subtitle-two')
                }
                else {
                    aboutUsT.classList.replace('title-section-two', 'title-subtitle-scoped')
                    aboutUsDesc.classList.replace('desc-subtitle-two', 'desc-subtitle-scoped')
                }
            }
        }
    },
    mounted () {
        this.mbViewProfile
        this.tbViewProfile
        this.dpViewProfile
    }
}
const footerComponent = Vue.extend({
    computed: {
        footerMobileView: function() {
            const mediaM = window.matchMedia(' (max-width: 600px) and (min-width: 320px) ')
            mediaM.addListener(mediaChange)
            mediaChange(mediaM)
            function mediaChange(mediaMobile) {
                let footerSection = document.querySelector('.footer-section')
                let navigationLinks = document.querySelector('.navigation-links')
                let adressSection = document.querySelector('.address-section')
                if (mediaMobile.matches) {
                    footerSection.classList.replace('mx-3', 'mx-2')
                    footerSection.classList.replace('my-3', 'my-2')
                    navigationLinks.classList.remove('py-5')
                    adressSection.classList.replace('col-5', 'col')
                    console.log(footerSection)
                }
                else {
                    footerSection.classList.replace('mx-2', 'mx-3')
                    footerSection.classList.replace('my-2', 'my-3')
                    navigationLinks.classList.add('py-5')
                    adressSection.classList.replace('col', 'col-5')
                }
            }
        }
    },
    mounted() {
        this.footerMobileView
    }
})
const navbarComponent = Vue.extend({
    computed: {
        navView: function() {
            const nav = document.querySelector('.navbar-parent')
            nav.classList.remove('purple-color')
        },
        navbarMobileView: function(){
            const mediaM = window.matchMedia(' (max-width: 600px) and (min-width: 320px) ')
            mediaM.addListener(mediaChange)
            mediaChange(mediaM)
            function mediaChange(mediaMobile){
                // navbar
                let navbarTop = document.querySelector('.navbar-top')
                let navbarHide = document.querySelector('.navbar-hide-child')

                if (mediaMobile.matches) {
                    navbarTop.classList.replace('py-5', 'py-4')
                    navbarHide.classList.replace('py-5', 'py-4')
                }
                else {
                    navbarTop.classList.replace('py-4', 'py-5')
                }
            }
        },

        navbarTabletView: function() {
            const mediaT = window.matchMedia(' (max-width: 900px) ')
            mediaT.addListener(mediaChange)
            mediaChange(mediaT)
            function mediaChange(mediaTablet) {
                const hamMenu =  document.querySelector('#ham-menu')
                const menuNavbar = document.querySelector('#dropdown-link')

                if (mediaTablet.matches) {
                    menuNavbar.classList.replace('nav-link-dropdown', 'nav-link-dropdown-hide')
                    hamMenu.classList.replace('ham-menu-hide', 'ham-menu-active')
                }
                else {
                    menuNavbar.classList.replace('nav-link-dropdown-hide', 'nav-link-dropdown')
                    hamMenu.classList.replace('ham-menu-active', 'ham-menu-hide')
                }
            }
        }
    },
    mounted () {
        this.navbarTabletView
        this.navbarMobileView
        this.navView
    }
})
const homeComponent = Vue.extend({ 
    template: '#frontpage',

    // mixin untuk menyatukan component navbar, sehingga
    // setap component yang akan di buatkan route
    // harus melakukan mixins pada component navbar
    mixins: [navbarComponent, footerComponent],

    components: {
        'profil': profilIcon,
        'kurikulum': kurikulumIcon,
        'fasilitas': fasilitasIcon,
    },

    // mendefiniskan data yang akan di kembalikan
    // posts dibuat tidak berisikan data agar dapat di isi
    data () {
        return {
            posts: '',
            post: '',
            title: 'Multimedia Makassar',
        }
    },

    computed: {
        tabletViews: function() {    
            /*
            untuk menggunakan plain javascript berisi
            matchMedia dan addListener
            cukup buat fungsinya menggunakan addListener
            dan mount fungsinya di mount()               
                note:
                jangan gunakan :class binding untuk fungsi
                ini karena dapat membuat beberapa beberapa fungsi/property
                menjadi undefiend atau null
            */

            // mendefinisikan tabletView
            // lalu menambahkan addListener
            // fungsi widthChange akan mengacu pada variabel tabletView
            const tabletView = window.matchMedia(" (max-width: 900px) ")
            tabletView.addListener(widthChange)
            widthChange(tabletView)

            function widthChange(tabletV){            
                // bagian upper-section
                let colR = document.querySelector('.section-right')
                let colL = document.querySelector('.section-left')
                // bagian about-us-section
                let aboutUsChild = document.querySelector('.about-us-section-child')
                // bagian news-section
                let newsSecChild = document.querySelector('.news-section-child')

                if (tabletV.matches) {                   
                    colR.classList.remove('col-7')
                    colL.classList.remove('col-5')
                
                    aboutUsChild.classList.remove('row')
                    aboutUsChild.parentElement.classList.remove('mx-5')
                    aboutUsChild.parentElement.classList.replace('mb-5', 'mt-5')
                    aboutUsChild.firstChild.classList.remove('col-3')
                    aboutUsChild.firstChild.classList.remove('ml-auto')
                    aboutUsChild.lastChild.classList.remove('col-8')

                    newsSecChild.classList.remove('py-5')
                }
                else {
                    colR.classList.add('col-7')
                    colL.classList.add('col-5')
                    aboutUsChild.classList.add('row')
                    aboutUsChild.parentElement.classList.add('mx-5')
                    aboutUsChild.parentElement.classList.replace('mt-5', 'mb-5')
                    aboutUsChild.firstChild.classList.add('col-3')
                    aboutUsChild.firstChild.classList.add('ml-auto')
                    aboutUsChild.lastChild.classList.add('col-8')
                }
            }
        },
        phoneViews: function() {
            const mobileView = window.matchMedia(' (max-width: 600px) and (min-width: 300px) ')
            mobileView.addListener(widthChange)
            widthChange(mobileView)

            function widthChange(mobileV) {
                let aboutUsSection = document.querySelector('#about-us-section')
                let cardSection = document.querySelector('.about-us-card')
                let newsSectionP = document.querySelector('.news-section-parent')

                if(mobileV.matches) {
                    cardSection.classList.replace('mr-auto', 'mx-auto')
                    aboutUsSection.classList.remove('mt-5', 'mb-5')
                    newsSectionP.classList.replace('my-5', 'mb-5')
                }
                else {
                    cardSection.classList.replace('mx-auto', 'mr-auto')
                    aboutUsSection.classList.add('mt-5', 'mb-5')
                    newsSectionP.classList.replace('mb-5', 'my-5')
                }
            }
        },
        titleVies: function() {
            const title = document.getElementsByTagName('title').innerHTML = "Multimedia Makassar"
            console.log(title)
        }
    },

    // gunakan created hook unutuk
    // melakukan fetching data ke axios
    // axios ditulis untuk mengambil data dari API
    // .get untuk mengambil data dari alamat API
    // .then untuk melakukan eksekusi data pada posts
    created() {
        axios
            .get('http://localhost/wordpress/wp-json/wp/v2/posts')
            .then(response => {
                this.posts = response.data
            })
    },

    // mounted adalah penulisan baru dari fungis ready
    // dapat digunakan untuk computed property
    mounted () {
        this.phoneViews
        this.tabletViews
        this.titleVies
    } 
})
const galeriComponent = Vue.extend({
    template: '#galeripage',
})
const profileComponent =  Vue.extend({
    mixins: [navbarComponent, footerComponent, aboutUs],
    template: '#profilpage',
    components: {
        'bg-image': backgroundImg,
        'profil': profilIcon,
        'kurikulum': kurikulumIcon,
        'fasilitas': fasilitasIcon,
    },
})
const kurikulumComponent =  Vue.extend({
    mixins: [navbarComponent, footerComponent, aboutUs],
    template: '#kurikulumpage',
    components: {
        'bg-image': backgroundImg,
        'profil': profilIcon,
        'kurikulum': kurikulumIcon,
        'fasilitas': fasilitasIcon,
    },
})
const pekerjaanComponent =  Vue.extend({
    mixins: [navbarComponent, footerComponent, aboutUs],
    template: '#fasilitaspage',
    components: {
        'bg-image': backgroundImg,
        'profil': profilIcon,
        'kurikulum': kurikulumIcon,
        'fasilitas': fasilitasIcon,
    },
})
const artikelPage = Vue.extend({
    mixins: [navbarComponent, footerComponent],
    template: '#artikelpage',
    
})
const singlePage = Vue.extend({
    mixins: [navbarComponent, footerComponent],
    template: '#singlepage',
    data() {
        return {
            post: ''
        }
    },
    computed: {
        navView: function() {
            const nav = document.querySelector('.navbar-parent')
            nav.classList.add('purple-color')
        },
    },
    // menggunakan $route berarti menggunakan parameter
    // yang di passing di url column

    created() {
        axios
            .get('http://localhost/wordpress/wp-json/wp/v2/posts/' + this.$route.params.id)
            .then(response => {
                this.post = response.data
            })
    },
    mounted() {
        this.navView
    }
})
// membuat route untuk Vue
// path yaitu text yang akan muncul di url kolom
// component untuk men define setiap const diatas 

// This callback runs before every route change, including on page load.


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/wordpress', 
            component: homeComponent,
            meta: {
                title: 'Multimedia Makassar | Polimedia',
                metaTags: [
                    {
                        name: 'home',
                        content: 'The Home Page'
                    },
                    {
                        property: 'og:home',
                        content: 'The Home Page'
                    }
                ]
            }
        },
        {path: '/wordpress/galeri', component: galeriComponent},
        // routes untuk about-us
        {path: '/wordpress/about-us/profil', component: profileComponent},
        {path: '/wordpress/about-us/kurikulum', component: kurikulumComponent},
        {path: '/wordpress/about-us/pekerjaan', component: pekerjaanComponent},
        // routes untuk single post
        {
            path: '/wordpress/postingan/:id',
            name: 'postingan', 
            component: singlePage,
            meta: {
                title: ' Single Page ',
                metaTags: [
                    {
                        name: 'singlepage',
                        content: 'The Single Page'
                    },
                    {
                        name: 'og:singlepage',
                        content: 'The Single Page'
                    }
                ]
            }
        }
    ]
})

// App berasal dari const App
// #app berasal dari id="app" pada index.php
new App({
    router,
    components: {
        'burger': burgerIcon,
        'home': homeIcon
    }
}).$mount('#app')