<script>
  export let occupations = [];
</script>

<section id="experience" class="py-24">
  <main>
    <h2 class="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-12 text-center">
      Experience
    </h2>

    <div class="space-y-8 w-full max-w-4xl mx-auto px-4">
      {#each occupations as job}
        <div class="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition">
          <h3 class="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
            {job.Position}
            <span class="text-neutral-500 dark:text-neutral-400 font-normal"> @ {job.Company}</span>
          </h3>

          <p class="text-sm text-neutral-500 dark:text-neutral-400 mb-2">{job.TimeRange}</p>
          <p class="text-neutral-600 dark:text-neutral-300 text-sm mb-2">{job.Description}</p>

          <div class="text-xs text-neutral-400 flex flex-wrap gap-2 mt-2">
            <span class="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full">{job.TypeOfWork}</span>
            <span class="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full">{job.Tags}</span>
            <span class="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full">{job.Location}</span>
          </div>
        </div>
      {/each}
    </div>
  </main>
</section>