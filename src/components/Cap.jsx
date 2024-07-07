import Spline from '@splinetool/react-spline';
const models=["https://prod.spline.design/z8ZkDjQFiJ59TIuI/scene.splinecode","https://prod.spline.design/z6jLaeUXYf-t-69f/scene.splinecode"];
export default function Cap({index}) {
  return (
    <div className="w-full h-[75vh]">
    <Spline scene={models[index]} />
    </div>
  );

}