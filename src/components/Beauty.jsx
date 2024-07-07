import Spline from '@splinetool/react-spline';
const models=["https://prod.spline.design/8xJQoMz81C9zsilw/scene.splinecode","https://prod.spline.design/I5vtukpHug8bfEL5/scene.splinecode","https://prod.spline.design/MnpNtvZt5rEyaY5l/scene.splinecode"]
export default function Beauty({index}) {
  return (
    <div className="w-full h-[75vh]">
    <Spline scene={models[index]} />
    </div>
  );

}