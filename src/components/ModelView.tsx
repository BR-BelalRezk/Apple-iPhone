import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import { StaticImageData } from "next/image";
import * as THREE from "three";
import Lights from "./Lights";
import { Suspense } from "react";
import Iphone from "./Iphone";

type Props = {
  index: 1 | 2;
  groupRef: React.MutableRefObject<THREE.Group<THREE.Object3DEventMap>>;
  gsapType: "veiw1" | "veiw2";
  controlRef: any;
  setRotationState: React.Dispatch<React.SetStateAction<number>>;
  item: { title: string; color: string[]; img: StaticImageData };
  size: "small" | "large";
};
export default function ModelView({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
}: Props) {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full ${index === 2 ? "right-[-100%]" : ""}`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthAngle())}
      />
      <group
        ref={groupRef}
        name={`${index === 1 ? "small" : "large"} `}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Iphone scale={index === 1 ? [15, 15, 15] : [17, 17, 17]} />
        </Suspense>
      </group>
    </View>
  );
}
