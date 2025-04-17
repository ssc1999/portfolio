<script>
  import { T, useTask } from '@threlte/core'
  import { OrbitControls, interactivity } from '@threlte/extras'
  import { Spring } from 'svelte/motion'

  interactivity()

  const scale = new Spring(1)
  let rotation = 0

  useTask((delta) => {
    rotation += delta * 0.35
  })
</script>

<!-- 🎥 Camera with OrbitControls inside -->
<T.PerspectiveCamera makeDefault position={[6.5, 1, 6.5]} oncreate={(ref) => ref.lookAt(0, 0, 0)}>
  <OrbitControls />
</T.PerspectiveCamera>

<!-- 💎 Diamond -->
<T.Mesh
  rotation.y={rotation}
  position.y={0}
  scale={[scale.current, scale.current * 1.5, scale.current]}
  onpointerenter={() => (scale.target = 1.3)}
  onpointerleave={() => (scale.target = 1)}
>
  <T.OctahedronGeometry args={[2, 0]} />
  <T.MeshStandardMaterial
    color="#4a5565"
    metalness={1.1}
    roughness={0.4}
    emissive="#4a5565"
    emissiveIntensity={0.2}
  />
</T.Mesh>