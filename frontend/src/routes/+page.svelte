<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import LayoutContainer from '$lib/components/LayoutContainer.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import SelectedWorks from '$lib/components/SelectedWorks.svelte';
  import Experience from '$lib/components/Experience.svelte';
  import About from '$lib/components/About.svelte';
  import Contact from '$lib/components/Contact.svelte';

  export let data;
</script>


<div class="min-h-screen dark bg-neutral-950 text-neutral-100">
  <LayoutContainer>
    <Hero />
    <Experience occupations={data.occupations} />
    <SelectedWorks projects={data.projects} />
    <About />
    <Contact />
  </LayoutContainer>
</div>