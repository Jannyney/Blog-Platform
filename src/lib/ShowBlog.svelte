<script>
    let projects = [
        {name: "GoWithMe Application", desc: "Created a travelling buddy web app using ChatGPT API and frontend framework. This website can guides you to your best travel journey through AI personalization.", href: "/BlogOne", img: "gowithme.png"},
        {name: "Phytavaren Website", desc: "Wrote a frontend website that shows the company details and contact info", link: "http://phytavaren.co.uk/", img: "phyta.png"},
        {name: "Axer Application", desc: "Designed an AI training exercise application along with implementing a bsuiness model.", link: "", img: "scibox.png"},
        {name: "Catching Things Game", desc: "Created a catching things game using JAVA OOP and GUI concept. The player has to pick all of the food by moving the basket but avoid the bomb at the same time.", link: "https://github.com/Jannyney/CatchingThingsGame", img: "catch.png"},
        {name: "Image Captioning in Thai", desc: "Created a web app that can get image inputs and translated into Thai captions using NLP and Computer Vision", link: "https://jannyney.medium.com/%E0%B8%A1%E0%B8%B2%E0%B8%97%E0%B8%B3-image-captioning-%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B8%84%E0%B8%99%E0%B8%95%E0%B8%B2%E0%B8%9A%E0%B8%AD%E0%B8%94%E0%B8%81%E0%B8%B1%E0%B8%99-51cef2d1d15", img: "imagecap.png"},
        {name: "AR-AI Application for children with Autism", desc: "Created an application that use AI and AR technology to help children with Autism learn better", link: "https://www.matichon.co.th/economy/news_2775594", img: "caicamp.jpg"},
    ]
</script>


<div class="flex flex-col items-center " id="project">
    <p class="text-5xl font-bold p-20">Latest Articles</p>

    <!-- Search Category -->
    <div class="join pb-10">
  <div>
    <div>
      <input class="input input-bordered join-item" placeholder="Search"/>
    </div>
  </div>
  <select class="select select-bordered join-item">
    <option disabled selected>Filter</option>
    <option>Lifestyle</option>
    <option>Movie</option>
    <option>Reading</option>
      <option>Fashion</option>
  </select>
  <div class="indicator">
    <button class="btn join-item">Search</button>
  </div>
</div>


    <!-- Category -->
<div class=" pb-10">
<button class="btn  ">Lifestyle</button>
<button class="btn ">Movie</button>
<button class="btn ">Reading</button>
<button class="btn ">Fashion</button>
</div>

        <!-- Blogs -->

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
    <!-- Page Number -->

    <div class="btn-group pt-5">
  <input type="radio" name="options" data-title="1" class="btn" checked/>
  <input type="radio" name="options" data-title="2" class="btn"  />
  <input type="radio" name="options" data-title="3" class="btn" />
  <input type="radio" name="options" data-title="4" class="btn" />
</div>
</div>