<script>
    import { onMount } from 'svelte';
    let isDark = false;
  
    onMount(() => {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark') {
        document.documentElement.classList.add('dark');
        isDark = true;
      }
    });
  
    function toggleTheme() {
      isDark = !isDark;
      document.documentElement.classList.toggle('dark', isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
  </script>
  
  <button on:click={toggleTheme} class="fixed top-4 right-4 z-50 px-4 py-2 rounded bg-gray-900 text-white dark:bg-white dark:text-black">
    {isDark ? '🌙' : '☀️'}
  </button>