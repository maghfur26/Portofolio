import CircularText from "../components/CircularText";
import Me from "../../../public/me.png";

export default function Profile() {
  return (
    <div className="w-72 h-72 relative rounded-full overflow-hidden">
      <div className="absolute top-40 left-4">
        <CircularText
          text="Maghfur-Hasani-"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class text-white text-xl w-62 font-poppins font-bold"
        />
      </div>
      <div className="absolute bottom-0">
        <img src={Me} alt="me.jpg" />
      </div>
    </div>
  );
}
