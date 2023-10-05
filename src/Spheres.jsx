export function Sphere() {
    return (
      <mesh position={[-2, .3, -5]} scale= {.4}>
        <sphereGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    );
  }
  
  export function Sphere2() {
    return (
      <mesh position={[2, .3, -5]} scale= {.4}>
        <sphereGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    );
  }
  