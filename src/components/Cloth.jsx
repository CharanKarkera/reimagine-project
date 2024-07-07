import Spline from "@splinetool/react-spline";
const models = [
  "https://prod.spline.design/3bTLllXIMkEFmjL6/scene.splinecode",
  "https://prod.spline.design/KzDRUByfxg9crQ6t/scene.splinecode",
  "https://prod.spline.design/7iY943gxC33XWbKu/scene.splinecode",
  "https://prod.spline.design/Xv0I-q-1TUJ-mGRC/scene.splinecode",
  "https://prod.spline.design/epP250ZIurz12p3D/scene.splinecode",
  "https://prod.spline.design/7E-kt1qyKd2fNZrb/scene.splinecode",
  "https://prod.spline.design/Wybbbck8fous7ZBH/scene.splinecode",
];
export default function Cloth({ index }) {
  return (
    <div className="w-full h-fit">
      <Spline scene={models[index]} />
    </div>
  );
}
