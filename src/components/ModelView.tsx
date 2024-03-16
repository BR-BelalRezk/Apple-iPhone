import { PerspectiveCamera, View } from "@react-three/drei";
import { StaticImageData } from "next/image";
import * as THREE from "three";
import Lights from "./Lights";
import { Suspense } from "react";
import { Iphone } from "./Iphone";
type Props = {
  index: 1 | 2;
  groupRef: React.MutableRefObject<THREE.Group<THREE.Object3DEventMap>>;
  gsapType: "veiw1" | "veiw2";
  controlRef: React.MutableRefObject<undefined>;
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
      className={`w-full h-full border-2 border-white ${
        index === 2 ? "right-[-100%]" : ""
      }`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <Suspense fallback={<div>Loading...</div>}>
        <Iphone />
      </Suspense>
    </View>
  );
}
