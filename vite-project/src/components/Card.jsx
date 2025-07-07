// src/components/Card.jsx
import CountUp from "react-countup";

const Card = ({ mainImage, thumbnails, count, title, creatorName, avatar }) => {
  return (
    <div className="transition-transform hover:-translate-y-1 hover:shadow-lg duration-300">
      <img src={mainImage} alt={title} className="rounded-2xl w-full mb-4" />
      <div className="flex justify-between items-center mb-3">
        <div className="flex gap-2">
          {thumbnails.map((thumb, index) => (
            <img key={index} src={thumb} className="w-12 h-12 rounded-xl" />
          ))}
          <div className="bg-[#A259FF] rounded-xl text-xs sm:text-sm md:text-base font-bold w-20 h-10 flex items-center justify-center">
            <CountUp end={count} duration={2} />+
          </div>
        </div>
      </div>
      <h3 className="font-semibold text-base sm:text-lg md:text-xl mb-1">{title}</h3>
      <p className="text-gray-400 text-xs sm:text-sm md:text-base flex items-center gap-2">
        <img src={avatar} className="w-5 h-5 rounded-full" />
        {creatorName}
      </p>
    </div>
  );
};

export default Card;
