export function Room() {
    return (
      <>
        <mesh position={[0, 0, -50]} rotation={[0, 0, 0]}>
            <boxGeometry args={[100, 50, 0.1]} />
            <meshStandardMaterial color="grey" />
        </mesh>

        <mesh position={[0, -10, 0]} rotation={[1.5708, 0, 0]}>
        <boxGeometry args={[500, 500, 0.1]} />
        <meshStandardMaterial color="grey" />
        </mesh>
      </>
    );
  }
  