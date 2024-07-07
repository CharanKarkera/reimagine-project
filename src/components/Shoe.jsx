import Spline from '@splinetool/react-spline';
const models=["https://prod.spline.design/rXosxgjd2CH7grUh/scene.splinecode","https://prod.spline.design/ta7lqC08fd7-E9k0/scene.splinecode","https://prod.spline.design/GIAvq9S78Qtju1Sm/scene.splinecode","https://prod.spline.design/GB3Yhe-e5NKhW8JM/scene.splinecode"]
export default function Shoe({index}) {
  return (
    <div className="w-full h-[75vh]">
    <Spline scene={models[index]} />
    </div>
  );

}
