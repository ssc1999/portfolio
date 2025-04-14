<script>
    import { T, useTask } from '@threlte/core'
    import { interactivity } from '@threlte/extras'
    import { Spring } from 'svelte/motion'
  
    interactivity()
  
    const scale = new Spring(1)
    let rotation = 0
  
    useTask((delta) => {
      rotation += delta * 0.5
    })
  </script>
  
  <T.PerspectiveCamera
    makeDefault
    position={[6, 1, 6]}
    oncreate={(ref) => {
      ref.lookAt(0, 0, 0)
    }}
  />
  
  <T.AmbientLight intensity={0.6} />
  <T.DirectionalLight position={[5, 10, 5]} intensity={1.5} />
  
  <T.Mesh
    rotation.y={rotation}
    position.y={0}
    scale={[scale.current, scale.current * 1.5, scale.current]} <!-- 🔥 Just pointier now -->
    onpointerenter={() => (scale.target = 1.3)}
    onpointerleave={() => (scale.target = 1)}
  >
    <T.OctahedronGeometry args={[2, 0]} /> <!-- Keep detail 0 = faceted look -->
    <T.MeshStandardMaterial color="#61dafb" metalness={1} roughness={0.05} />
  </T.Mesh>