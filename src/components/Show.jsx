import Spline from "@splinetool/react-spline";

const Show = () => {
  const link = "https://prod.spline.design/1kYmkC3V3LPTgGdX/scene.splinecode";
  const md_link =
    "https://prod.spline.design/Gd6beuTX4fzOh4Aw/scene.splinecode";

  return (
    <div className="w-full h-[80vh] md:h-[100vh] overflow-hidden flex justify-center">
      <div className="md:w-full md:h-full object-cover">
        <Spline scene={window.innerWidth >= 768 ? md_link : link} />
      </div>
    </div>
  );
};

export default Show;
