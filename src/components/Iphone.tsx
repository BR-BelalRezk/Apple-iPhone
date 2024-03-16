import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ttmRoLdJipiIOmf: THREE.Mesh;
    DjsDkGiopeiEJZK: THREE.Mesh;
    buRWvyqhBBgcJFo: THREE.Mesh;
    MrMmlCAsAxJpYqQ_0: THREE.Mesh;
    wqbHSzWaUxBCwxY_0: THREE.Mesh;
    QvGDcbDApaGssma: THREE.Mesh;
    vFwJFNASGvEHWhs: THREE.Mesh;
    evAxFwhaQUwXuua: THREE.Mesh;
    USxQiqZgxHbRvqB: THREE.Mesh;
    TvgBVmqNmSrFVfW: THREE.Mesh;
    GuYJryuYunhpphO: THREE.Mesh;
    pvdHknDTGDzVpwc: THREE.Mesh;
    CfghdUoyzvwzIum: THREE.Mesh;
    DjdhycfQYjKMDyn: THREE.Mesh;
    usFLmqcyrnltBUr: THREE.Mesh;
    xXDHkMplTIDAXLN: THREE.Mesh;
    vELORlCJixqPHsZ: THREE.Mesh;
    EbQGKrWAqhBHiMv: THREE.Mesh;
    EddVrWkqZTlvmci: THREE.Mesh;
    KSWlaxBcnPDpFCs: THREE.Mesh;
    TakBsdEjEytCAMK: THREE.Mesh;
    IykfmVvLplTsTEW: THREE.Mesh;
    wLfSXtbwRlBrwof: THREE.Mesh;
    WJwwVjsahIXbJpU: THREE.Mesh;
    YfrJNXgMvGOAfzz: THREE.Mesh;
    DCLCbjzqejuvsqH: THREE.Mesh;
    CdalkzDVnwgdEhS: THREE.Mesh;
    NtjcIgolNGgYlCg: THREE.Mesh;
    pXBNoLiaMwsDHRF: THREE.Mesh;
    IkoiNqATMVoZFKD: THREE.Mesh;
    rqgRAGHOwnuBypi: THREE.Mesh;
  };
  materials: {
    hUlRcbieVuIiOXG: THREE.MeshStandardMaterial;
    PaletteMaterial001: THREE.MeshStandardMaterial;
    PaletteMaterial002: THREE.MeshStandardMaterial;
    dxCVrUCvYhjVxqy: THREE.MeshStandardMaterial;
    MHFGNLrDQbTNima: THREE.MeshStandardMaterial;
    kUhjpatHUvkBwfM: THREE.MeshStandardMaterial;
    RJoymvEsaIItifI: THREE.MeshStandardMaterial;
    KSIxMqttXxxmOYl: THREE.MeshStandardMaterial;
    mcPrzcBUcdqUybC: THREE.MeshStandardMaterial;
    pIhYLPqiSQOZTjn: THREE.MeshStandardMaterial;
    eShKpuMNVJTRrgg: THREE.MeshStandardMaterial;
    xdyiJLYTYRfJffH: THREE.MeshStandardMaterial;
    jpGaQNgTtEGkTfo: THREE.MeshStandardMaterial;
    ujsvqBWRMnqdwPx: THREE.MeshStandardMaterial;
    sxNzrmuTqVeaXdg: THREE.MeshStandardMaterial;
    pIJKfZsazmcpEiU: THREE.MeshStandardMaterial;
    zFdeDaGNRwzccye: THREE.MeshStandardMaterial;
    TBLSREBUyLMVtJa: THREE.MeshStandardMaterial;
    xNrofRCqOXXHVZt: THREE.MeshStandardMaterial;
    yQQySPTfbEJufve: THREE.MeshStandardMaterial;
    PaletteMaterial003: THREE.MeshStandardMaterial;
    PaletteMaterial004: THREE.MeshStandardMaterial;
    oZRkkORNzkufnGD: THREE.MeshStandardMaterial;
    yhcAXNGcJWCqtIS: THREE.MeshStandardMaterial;
    bCgzXjHOanGdTFV: THREE.MeshStandardMaterial;
    vhaEJjZoqGtyLdo: THREE.MeshStandardMaterial;
    jlzuBkUzuJqgiAK: THREE.MeshStandardMaterial;
    PpwUTnTFZJXxCoE: THREE.MeshStandardMaterial;
    yiDkEwDSyEhavuP: THREE.MeshStandardMaterial;
    hiVunnLeAHkwGEo: THREE.MeshStandardMaterial;
    HGhEhpqSBZRnjHC: THREE.MeshStandardMaterial;
  };
};

export default function Iphone(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("public/models/scene.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <mesh
          name="ttmRoLdJipiIOmf"
          castShadow
          receiveShadow
          geometry={nodes.ttmRoLdJipiIOmf.geometry}
          material={materials.hUlRcbieVuIiOXG}
          scale={0.01}
          userData={{ name: "ttmRoLdJipiIOmf" }}
        />
        <mesh
          name="DjsDkGiopeiEJZK"
          castShadow
          receiveShadow
          geometry={nodes.DjsDkGiopeiEJZK.geometry}
          material={materials.PaletteMaterial001}
          scale={0.01}
          userData={{ name: "DjsDkGiopeiEJZK" }}
        />
        <mesh
          name="buRWvyqhBBgcJFo"
          castShadow
          receiveShadow
          geometry={nodes.buRWvyqhBBgcJFo.geometry}
          material={materials.PaletteMaterial002}
          scale={0.01}
          userData={{ name: "buRWvyqhBBgcJFo" }}
        />
        <mesh
          name="MrMmlCAsAxJpYqQ_0"
          castShadow
          receiveShadow
          geometry={nodes.MrMmlCAsAxJpYqQ_0.geometry}
          material={materials.dxCVrUCvYhjVxqy}
          scale={0.01}
          userData={{ name: "MrMmlCAsAxJpYqQ_0" }}
        />
        <mesh
          name="wqbHSzWaUxBCwxY_0"
          castShadow
          receiveShadow
          geometry={nodes.wqbHSzWaUxBCwxY_0.geometry}
          material={materials.MHFGNLrDQbTNima}
          scale={0.01}
          userData={{ name: "wqbHSzWaUxBCwxY_0" }}
        />
        <mesh
          name="QvGDcbDApaGssma"
          castShadow
          receiveShadow
          geometry={nodes.QvGDcbDApaGssma.geometry}
          material={materials.kUhjpatHUvkBwfM}
          scale={0.01}
          userData={{ name: "QvGDcbDApaGssma" }}
        />
        <mesh
          name="vFwJFNASGvEHWhs"
          castShadow
          receiveShadow
          geometry={nodes.vFwJFNASGvEHWhs.geometry}
          material={materials.RJoymvEsaIItifI}
          scale={0.01}
          userData={{ name: "vFwJFNASGvEHWhs" }}
        />
        <mesh
          name="evAxFwhaQUwXuua"
          castShadow
          receiveShadow
          geometry={nodes.evAxFwhaQUwXuua.geometry}
          material={materials.KSIxMqttXxxmOYl}
          scale={0.01}
          userData={{ name: "evAxFwhaQUwXuua" }}
        />
        <mesh
          name="USxQiqZgxHbRvqB"
          castShadow
          receiveShadow
          geometry={nodes.USxQiqZgxHbRvqB.geometry}
          material={materials.mcPrzcBUcdqUybC}
          scale={0.01}
          userData={{ name: "USxQiqZgxHbRvqB" }}
        />
        <mesh
          name="TvgBVmqNmSrFVfW"
          castShadow
          receiveShadow
          geometry={nodes.TvgBVmqNmSrFVfW.geometry}
          material={materials.pIhYLPqiSQOZTjn}
          scale={0.01}
          userData={{ name: "TvgBVmqNmSrFVfW" }}
        />
        <mesh
          name="GuYJryuYunhpphO"
          castShadow
          receiveShadow
          geometry={nodes.GuYJryuYunhpphO.geometry}
          material={materials.eShKpuMNVJTRrgg}
          scale={0.01}
          userData={{ name: "GuYJryuYunhpphO" }}
        />
        <mesh
          name="pvdHknDTGDzVpwc"
          castShadow
          receiveShadow
          geometry={nodes.pvdHknDTGDzVpwc.geometry}
          material={materials.xdyiJLYTYRfJffH}
          scale={0.01}
          userData={{ name: "pvdHknDTGDzVpwc" }}
        />
        <mesh
          name="CfghdUoyzvwzIum"
          castShadow
          receiveShadow
          geometry={nodes.CfghdUoyzvwzIum.geometry}
          material={materials.jpGaQNgTtEGkTfo}
          scale={0.01}
          userData={{ name: "CfghdUoyzvwzIum" }}
        />
        <mesh
          name="DjdhycfQYjKMDyn"
          castShadow
          receiveShadow
          geometry={nodes.DjdhycfQYjKMDyn.geometry}
          material={materials.ujsvqBWRMnqdwPx}
          scale={0.01}
          userData={{ name: "DjdhycfQYjKMDyn" }}
        />
        <mesh
          name="usFLmqcyrnltBUr"
          castShadow
          receiveShadow
          geometry={nodes.usFLmqcyrnltBUr.geometry}
          material={materials.sxNzrmuTqVeaXdg}
          scale={0.01}
          userData={{ name: "usFLmqcyrnltBUr" }}
        />
        <mesh
          name="xXDHkMplTIDAXLN"
          castShadow
          receiveShadow
          geometry={nodes.xXDHkMplTIDAXLN.geometry}
          material={materials.pIJKfZsazmcpEiU}
          scale={0.01}
          userData={{ name: "xXDHkMplTIDAXLN" }}
        />
        <mesh
          name="vELORlCJixqPHsZ"
          castShadow
          receiveShadow
          geometry={nodes.vELORlCJixqPHsZ.geometry}
          material={materials.zFdeDaGNRwzccye}
          scale={0.01}
          userData={{ name: "vELORlCJixqPHsZ" }}
        />
        <mesh
          name="EbQGKrWAqhBHiMv"
          castShadow
          receiveShadow
          geometry={nodes.EbQGKrWAqhBHiMv.geometry}
          material={materials.TBLSREBUyLMVtJa}
          scale={0.01}
          userData={{ name: "EbQGKrWAqhBHiMv" }}
        />
        <mesh
          name="EddVrWkqZTlvmci"
          castShadow
          receiveShadow
          geometry={nodes.EddVrWkqZTlvmci.geometry}
          material={materials.xNrofRCqOXXHVZt}
          scale={0.01}
          userData={{ name: "EddVrWkqZTlvmci" }}
        />
        <mesh
          name="KSWlaxBcnPDpFCs"
          castShadow
          receiveShadow
          geometry={nodes.KSWlaxBcnPDpFCs.geometry}
          material={materials.yQQySPTfbEJufve}
          scale={0.01}
          userData={{ name: "KSWlaxBcnPDpFCs" }}
        />
        <mesh
          name="TakBsdEjEytCAMK"
          castShadow
          receiveShadow
          geometry={nodes.TakBsdEjEytCAMK.geometry}
          material={materials.PaletteMaterial003}
          scale={0.01}
          userData={{ name: "TakBsdEjEytCAMK" }}
        />
        <mesh
          name="IykfmVvLplTsTEW"
          castShadow
          receiveShadow
          geometry={nodes.IykfmVvLplTsTEW.geometry}
          material={materials.PaletteMaterial004}
          scale={0.01}
          userData={{ name: "IykfmVvLplTsTEW" }}
        />
        <mesh
          name="wLfSXtbwRlBrwof"
          castShadow
          receiveShadow
          geometry={nodes.wLfSXtbwRlBrwof.geometry}
          material={materials.oZRkkORNzkufnGD}
          scale={0.01}
          userData={{ name: "wLfSXtbwRlBrwof" }}
        />
        <mesh
          name="WJwwVjsahIXbJpU"
          castShadow
          receiveShadow
          geometry={nodes.WJwwVjsahIXbJpU.geometry}
          material={materials.yhcAXNGcJWCqtIS}
          scale={0.01}
          userData={{ name: "WJwwVjsahIXbJpU" }}
        />
        <mesh
          name="YfrJNXgMvGOAfzz"
          castShadow
          receiveShadow
          geometry={nodes.YfrJNXgMvGOAfzz.geometry}
          material={materials.bCgzXjHOanGdTFV}
          scale={0.01}
          userData={{ name: "YfrJNXgMvGOAfzz" }}
        />
        <mesh
          name="DCLCbjzqejuvsqH"
          castShadow
          receiveShadow
          geometry={nodes.DCLCbjzqejuvsqH.geometry}
          material={materials.vhaEJjZoqGtyLdo}
          scale={0.01}
          userData={{ name: "DCLCbjzqejuvsqH" }}
        />
        <mesh
          name="CdalkzDVnwgdEhS"
          castShadow
          receiveShadow
          geometry={nodes.CdalkzDVnwgdEhS.geometry}
          material={materials.jlzuBkUzuJqgiAK}
          scale={0.01}
          userData={{ name: "CdalkzDVnwgdEhS" }}
        />
        <mesh
          name="NtjcIgolNGgYlCg"
          castShadow
          receiveShadow
          geometry={nodes.NtjcIgolNGgYlCg.geometry}
          material={materials.PpwUTnTFZJXxCoE}
          scale={0.01}
          userData={{ name: "NtjcIgolNGgYlCg" }}
        />
        <mesh
          name="pXBNoLiaMwsDHRF"
          castShadow
          receiveShadow
          geometry={nodes.pXBNoLiaMwsDHRF.geometry}
          material={materials.yiDkEwDSyEhavuP}
          scale={0.01}
          userData={{ name: "pXBNoLiaMwsDHRF" }}
        />
        <mesh
          name="IkoiNqATMVoZFKD"
          castShadow
          receiveShadow
          geometry={nodes.IkoiNqATMVoZFKD.geometry}
          material={materials.hiVunnLeAHkwGEo}
          scale={0.01}
          userData={{ name: "IkoiNqATMVoZFKD" }}
        />
        <mesh
          name="rqgRAGHOwnuBypi"
          castShadow
          receiveShadow
          geometry={nodes.rqgRAGHOwnuBypi.geometry}
          material={materials.HGhEhpqSBZRnjHC}
          scale={0.01}
          userData={{ name: "rqgRAGHOwnuBypi" }}
        />
      </group>
    </group>
  );
}

useGLTF.preload("public/models//scene.glb");
