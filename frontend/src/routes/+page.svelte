<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import LayoutContainer from '$lib/components/LayoutContainer.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import SelectedWorks from '$lib/components/SelectedWorks.svelte';
  import Experience from '$lib/components/Experience.svelte';
  import About from '$lib/components/About.svelte';
  import Contact from '$lib/components/Contact.svelte';

  export let data;
</script>

<ThemeToggle />

<div class="bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 min-h-screen">
  <LayoutContainer>
    <Hero />
    <SelectedWorks projects={data.projects} />
    <Experience occupations={data.occupations} />
    <About />
    <Contact />
  </LayoutContainer>
</div>