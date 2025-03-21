import * as THREE from 'three'
import { useGLTF, Sparkles } from '@react-three/drei'

const glowRed = new THREE.MeshBasicMaterial({ color: new THREE.Color(7, 0, 0.5), toneMapped: false })
const glowBlue = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0.5, 20), toneMapped: false })
const glowGreen = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 3, 1), toneMapped: false })

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Source: https://discourse.threejs.org/t/struggling-with-gltf-and-lighting/39564
*/
export function Tower({ ...props }) {
  const { nodes, materials } = useGLTF('/123-transformed.glb')

  return (
    <group {...props} dispose={null}>
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath011.geometry}
        material={glowGreen}
        position={[-0.77, 3.31, 0.36]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh geometry={nodes.NurbsPath012.geometry} material={glowBlue} position={[-0.79, 3.32, 0.32]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh geometry={nodes.NurbsPath013.geometry} material={glowBlue} position={[-0.33, 4.12, 0.46]} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath014.geometry}
        material={glowGreen}
        position={[-0.62, 3.54, 0.56]}
        rotation={[0.94, -0.04, -2.38]}
      />
      <mesh castShadow receiveShadow geometry={nodes.NurbsPath015.geometry} material={glowGreen} position={[-0.45, 4.08, -0.57]} />
      <mesh geometry={nodes.NurbsPath016.geometry} material={glowBlue} position={[-0.54, 4.1, -0.59]} />
      <mesh geometry={nodes.NurbsPath017.geometry} material={glowBlue} position={[0.68, 4.14, 0.51]} />
      <mesh castShadow receiveShadow geometry={nodes.NurbsPath018.geometry} material={glowGreen} position={[0.68, 4.46, 0.51]} />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={glowRed}
        position={[-0.52, 4.63, 0.49]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text002.geometry}
        material={glowGreen}
        position={[-0.51, 4.63, 0.43]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text003.geometry}
        material={glowGreen}
        position={[-0.52, 4.63, 0.49]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.25}
      /> */}

      <mesh castShadow receiveShadow geometry={nodes.NurbsPath020.geometry} material={glowRed} position={[0.7, 2.61, -0.54]} scale={-0.17} />

      {/* <mesh castShadow receiveShadow geometry={nodes.body.geometry} material={materials['Material.010']} position={[-0.04, 2.11, -0.02]} /> */}

      <mesh geometry={nodes.Sphere.geometry} material={glowGreen} position={[-0.01, 6.94, 0.06]} />

      <mesh geometry={nodes.Plane004.geometry} material={glowGreen} position={[-2.67, 0.51, 4.35]} />
      <mesh geometry={nodes.Plane004.geometry} material={glowGreen} position={[-2.67, 0.51, 4.35]} />
      <mesh geometry={nodes.Plane006.geometry} material={materials['Material.021']} position={[-2.67, 0.51, 4.35]} />
      <mesh geometry={nodes.Plane012.geometry} material={glowGreen} position={[-0.03, 0.48, 5.18]} rotation={[0.47, -0.12, -0.25]} />
      <mesh geometry={nodes.Plane012.geometry} material={glowGreen} position={[-0.03, 0.48, 5.18]} rotation={[0.47, -0.12, -0.25]} />
      <mesh geometry={nodes.Plane013.geometry} material={glowGreen} position={[-0.32, 0.51, 5.07]} rotation={[0.47, -0.12, -0.25]} scale={0.74} />
    </group>
  )
}
