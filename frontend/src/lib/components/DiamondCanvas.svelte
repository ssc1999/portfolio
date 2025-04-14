<script>
    import { Canvas, T } from '@threlte/core'
    import Diamond from './Diamond.svelte'
  </script>
  
  <Canvas>
    <T.AmbientLight intensity={45} />
    <T.DirectionalLight position={[3, 3, 3]} />
    <Diamond />
  </Canvas>