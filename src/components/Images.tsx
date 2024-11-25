import redux from "../assets/redux.svg";
import typescript from "../assets/typescript.svg";

const Images = () => {
  return (
    <div className="images">
      <img src={redux} alt="redux" height={100} />
      <img
        src={typescript}
        alt="typescript"
        height={100}
        style={{ borderRadius: 12 }}
      />
    </div>
  );
};

export default Images;
