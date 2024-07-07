import Spline from '@splinetool/react-spline';
const models=["https://prod.spline.design/4g-t2RfxwijCjTcA/scene.splinecode","https://prod.spline.design/KzDRUByfxg9crQ6t/scene.splinecode","https://prod.spline.design/kW9gDXlyW6y2Frgy/scene.splinecode","https://prod.spline.design/Xv0I-q-1TUJ-mGRC/scene.splinecode","https://prod.spline.design/epP250ZIurz12p3D/scene.splinecode","https://prod.spline.design/7E-kt1qyKd2fNZrb/scene.splinecode","https://prod.spline.design/Wybbbck8fous7ZBH/scene.splinecode"]
export default function Cloth({index}) {
  return (
    <div className="w-full h-[75vh]">
    <Spline scene={models[index]} />
    </div>
  );

}
