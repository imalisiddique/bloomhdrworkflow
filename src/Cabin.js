import * as THREE from 'three'
import { useGLTF, Sparkles, Line } from '@react-three/drei'
import { useControls } from 'leva'

const glowRed = new THREE.MeshBasicMaterial({ color: new THREE.Color(7, 0, 0.5), toneMapped: false })
const glowBlue = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0.5, 20), toneMapped: false })
const glowGreen = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 3, 1), toneMapped: false })
const glowOrange = new THREE.MeshBasicMaterial({ color: new THREE.Color(7, 3, 0), toneMapped: false })

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Source: https://discourse.threejs.org/t/struggling-with-gltf-and-lighting/39564
*/
export function Cabin({ ...props }) {
  // const { p1 } = useControls('Cab Pos', {
  //   p1: {
  //     value: { x: 2.48, y: -1.58, z: -3.11 },
  //     step: 0.01,
  //     joystick: 'invertY',
  //   },
  // })

  // const { p2 } = useControls('Box Pos', {
  //   p2: {
  //     value: { x: 0, y: 0, z: 0 },
  //     step: 0.01,
  //     joystick: 'invertY',
  //   },
  // })
  const { nodes, materials } = useGLTF('/log_cabin_free_download-transformed.glb')

  const halo = 0.125 / 2.2

  return (
    <group scale={halo} {...props} dispose={null} rotation={[0, -3.51, 0]} position={[2.48, -1.58, -3.11]}>
      <mesh position={[0.91, 1.72, -2.36]} castShadow material={glowOrange}>
        <boxGeometry args={[2, 5 / 8, 2]} />
      </mesh>{' '}
      <mesh position={[9.89, 1.33, -1.89]} castShadow material={glowOrange}>
        <boxGeometry args={[2, 5 / 8, 2]} />
      </mesh>{' '}
      <mesh position={[5.65, 0.96, -0.29]} castShadow material={glowOrange}>
        <boxGeometry args={[2, 5 / 8, 2]} />
      </mesh>{' '}
      <lineSegments geometry={nodes.Object_2.geometry} material={materials['Logs.001']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_3.geometry} material={materials['processed_wood_end.001']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_4.geometry} material={materials['stone_walls.002']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_5.geometry} material={materials['Prism_Glass.006']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['porch_light.001']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_7.geometry} material={materials['concrete_pebbles.001']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_8.geometry} material={materials['wood_boards_floor.001']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_9.geometry} material={materials['wood_boards_patio.001']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_10.geometry} material={materials['wood_boards.001']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_11.geometry} material={materials['wood_patio.001']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_12.geometry} material={materials['wood_patio.003']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_13.geometry} material={materials['.nail.003']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_17.geometry} material={materials['Logs.001']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_28.geometry} material={materials['Logs_big.001']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_29.geometry} material={materials['Logs_end.001']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_30.geometry} material={materials['roof.001']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_33.geometry} material={materials['Nordic_Moss.001']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_34.geometry} material={materials['Prism_Glass.007']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_38.geometry} material={materials['cut_processed_wood.001']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_40.geometry} material={materials['door_wframe.001']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_41.geometry} material={materials['paper.001']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_43.geometry} material={materials['Shtora2.001']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_44.geometry} material={materials['Wood.001']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_47.geometry} material={materials['window_frame_medium.001']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_55.geometry} material={materials['wood_boards_floor_second_story.001']} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}
