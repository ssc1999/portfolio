<script>
  export let projects = [];
</script>

<section id="projects" class="py-24">
  <main>
    <h2 class="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-12 text-center">
      Selected Works
    </h2>

    <div class="grid md:grid-cols-2 gap-12">
      {#each projects as project}
        <div class="group p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition space-y-4">
          
          {#if project.Cover?.url}
            <img
              src={"http://localhost:1337" + project.Cover.url}
              alt={project.Title}
              class="rounded-lg w-full object-cover max-h-56"
            />
          {/if}

          <h3 class="text-xl font-semibold text-neutral-800 dark:text-neutral-100 group-hover:underline">
            {project.Title}
          </h3>

          <p class="text-sm text-neutral-600 dark:text-neutral-400">
            {project.Description}
          </p>

          {#if project.Languages?.length}
            <div class="text-xs uppercase tracking-wide text-neutral-400 flex flex-wrap gap-2">
              {#each project.Languages as lang}
                <span class="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">{lang}</span>
              {/each}
            </div>
          {/if}

          {#if project.Github}
            <a href={project.Github} target="_blank" class="text-blue-500 text-sm hover:underline">
              View on GitHub →
            </a>
          {/if}
        </div>
      {/each}
    </div>
  </main>
</section>