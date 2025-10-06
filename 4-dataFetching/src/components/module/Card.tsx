interface CardProps {
  symbol?: string;
  image?: string;
  current_price?: number;
}

const Card = ({ symbol, image, current_price }: CardProps) => {
  return (
    <div className="w-56  flex flex-col  justify-end p-4 rounded-sm shadow shadow-white outline outline-gray-700/25">
      <img src={image} alt="" />
      <p className="text-gray-500">
        name:<span className="ms-2 font-semibold">{symbol}</span>
      </p>
      <div className="bg-gray-700 p-2 rounded-sm mt-1">
        {current_price ? (
          <p>
            price:
            <span className="ms-2 font-semibold">
              {current_price?.toLocaleString()}
            </span>
            $
          </p>
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
};

export default Card;
