const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white rounded-3xl min-w-72 md:min-w-96 shadow-xl p-10 z-10 mb-6">
      <p className="pb-6 text-xl">{review.stars}</p>
      <h3 className="text-[#1E1B39] font-bold text-base md:text-2xl mb-4">
        {review.title}
      </h3>
      <p className="text-[#6E6C83] font-normal text-xs md:text-base">
        {review.description}
      </p>
      <hr className="mt-8 mb-4" />
      <div className="flex gap-4 items-center">
        <img src={review.logoUrl} alt="" />
        <div>
          <h3 className="text-[#1E1B39] font-bold text-sm md:text-lg">
            {review.author}
          </h3>
          <p className="text-[#6E6C83] font-medium text-xs md:text-base">
            {review.designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
