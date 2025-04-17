<script>
  import { Canvas, T } from '@threlte/core'
  import Diamond from './Diamond.svelte'
</script>

<Canvas shadows>
  <!-- 💡 Strong key light -->
  <T.DirectionalLight position={[5, 10, 5]} intensity={2.5} castShadow />

  <!-- 💡 Fill light -->
  <T.DirectionalLight position={[-5, 5, -3]} intensity={1.5} />

  <!-- 💡 Soft ambient -->
  <T.AmbientLight intensity={0.7} />

  <!-- 💎 Your diamond -->
  <Diamond />
</Canvas>