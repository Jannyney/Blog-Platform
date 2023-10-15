<script>
    let projects = [
        {name: "GoWithMe Application", desc: "Created a travelling buddy web app using ChatGPT API and frontend framework. This website can guides you to your best travel journey through AI personalization.", link: "/blog/one", img: "gowithme.png"},
        {name: "Phytavaren Website", desc: "Wrote a frontend website that shows the company details and contact info", link: "/blog/two", img: "phyta.png"},
        {name: "Axer Application", desc: "Designed an AI training exercise application along with implementing a bsuiness model.", link: "/blog/three", img: "scibox.png"},
        {name: "Catching Things Game", desc: "Created a catching things game using JAVA OOP and GUI concept. The player has to pick all of the food by moving the basket but avoid the bomb at the same time.", link: "/blog/four", img: "catch.png"},
        {name: "Image Captioning in Thai", desc: "Created a web app that can get image inputs and translated into Thai captions using NLP and Computer Vision", link: "/blog/five", img: "imagecap.png"},
        {name: "AR-AI Application for children with Autism", desc: "Created an application that use AI and AR technology to help children with Autism learn better", link: "/blog/six", img: "caicamp.jpg"},
    ]
</script>


<div class="flex flex-col items-center " id="project">
    <p class="text-5xl font-bold p-20">Top Blogs</p>
    <div class="flex flex-col md:flex-row flex-wrap items-center md:justify-center">

        {#each projects as project }
        <div class="card card-compact w-96 bg-base-100 shadow-xl mx-20 my-10">
          <figure><img src="{project.img}" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">{project.name}</h2>
            <p>{project.desc}</p>
           <div class="card-actions justify-end">
              <a href="{project.link}" class="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
    {/each}
    </div>
</div>