<script>
    import DiamondCanvas from '$lib/components/DiamondCanvas.svelte'
</script>
<section class="min-h-screen flex flex-col md:flex-row items-center justify-center px-20 py-12 justify-evenly">
  <div class="flex-1 text-center">
    <h1 class="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-neutral-900 dark:text-neutral-100 mb-6">
      Hey, I'm Sergio Salgado
    </h1>
    <p class="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10">
      I build clean, fast, and scalable apps for the web. I focus on backend, full stack, and AI-driven tools — collaborating with clients globally.
    </p>
    <div class="flex justify-center gap-4">
      <a
        href="#projects"
        class="px-6 py-3 bg-black text-white bg-gray-600 dark:text-white rounded-lg hover:opacity-90 transition"
      >
        See my work
      </a>
    </div>
  </div>
  
  <div class="flex-1 w-[200px] md:w-[250px] h-[400px] md:h-[750px] lg:h-[700px]">
    <DiamondCanvas />
  </div>
</section>
