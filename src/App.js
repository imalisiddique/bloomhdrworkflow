import { Canvas, extend } from '@react-three/fiber'
import { Effects, OrbitControls, OrthographicCamera, BakeShadows } from '@react-three/drei'
import { UnrealBloomPass } from 'three-stdlib'
import { Tower } from './Tower'
import { Mountain } from './Mountain'
import { Rope } from './Rope'
import { Tree } from './Tree'
import { Cabin } from './Cabin'
import { Fire } from './Fire'
import { useControls } from 'leva'
import { Cloud, Sky } from '@react-three/drei'
import { Fog } from './Fog'

extend({ UnrealBloomPass })

export default function App() {
  // const { p1 } = useControls('Cl', {
  //   p1: {
  //     value: { x: 0, y: 0, z: 0 },
  //     step: 0.01,
  //     joystick: 'invertY',
  //   },
  // })

  return (
    <Canvas shadows gl={{ antialias: false }}>
      <color attach="background" args={['#202030']} />
      <fog attach="fog" args={['#202030', 10, 25]} />
      <hemisphereLight intensity={0.2} color="#eaeaea" groundColor="black" />
      <directionalLight castShadow intensity={0.05} shadow-mapSize={[1024, 1024]} shadow-bias={-0.0001} position={[10, 10, -10]} />
      {/* <Tower position={[0, -3.25, 0]} /> */}

      <Mountain position={[0, -3.25, 0]} />
      <Rope />
      <Tree />
      <Cabin />
      <Fire />

      <Fog />

      <Effects disableGamma>
        <unrealBloomPass threshold={1} strength={1.0} radius={0.5} />
      </Effects>
      <BakeShadows />
      <OrthographicCamera makeDefault far={100} near={0.1} position={[-10, 5, -10]} zoom={110} />
      <OrbitControls autoRotate={true} enableZoom={true} autoRotateSpeed={0.25} />
    </Canvas>
  )
}
