import { useRef } from "react";
import intersect from "../../assets/Reviews/reviewMain1.png";
import ReviewCard from "./ReviewCard";
import firstLogo from "../../assets/Reviews/third.svg";
import secondLogo from "../../assets/Reviews/second.svg";
import thirdLogo from "../../assets/Reviews/first.svg";
import NavigationButtons from "../NavigationButtons";

interface ReviewData {
  id: number;
  stars: string;
  title: string;
  description: string;
  author: string;
  logoUrl: string;
  designation: string;
}

const data: ReviewData[] = [
  {
    id: 1,
    stars: "⭐⭐️⭐️⭐️⭐️️",
    title: '"Exceptional Solutions, Exceeded Expectations!"',
    description:
      '"Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable."',
    author: "Mary Johnson",
    logoUrl: firstLogo,
    designation: "CEO of TechCraft Solutions",
  },
  {
    id: 2,
    stars: "⭐⭐️⭐️⭐️⭐️️",
    title: '"Transformed Our Business with Innovative Tech!"',
    description:
      "\"We owe a significant part of our success to [Company Name]. Their custom software solution streamlined our processes, saving us time and resources. Their team's dedication to innovation and problem-solving is unmatched. We're grateful for their partnership.\"",
    author: "Mark Williams",
    logoUrl: secondLogo,
    designation: "COO of InnovateNow Inc",
  },
  {
    id: 3,
    stars: "⭐⭐️⭐️⭐️⭐️️",
    title: '"Sculpted User Experiences Beyond Imagination!"',
    description:
      '"The UI/UX design crafted by [Company Name] turned our app into a masterpiece. The attention to detail, intuitive design, and user-centric approach have resulted in rave reviews from our customers. Their design expertise has taken our brand to a whole new level."',
    author: "Emily Clark",
    logoUrl: thirdLogo,
    designation: "CMO of Visionary Apps",
  },
  {
    id: 4,
    stars: "⭐⭐️⭐️⭐️⭐️️",
    title: '"Sculpted User Experiences Beyond Imagination!"',
    description:
      '"The UI/UX design crafted by [Company Name] turned our app into a masterpiece. The attention to detail, intuitive design, and user-centric approach have resulted in rave reviews from our customers. Their design expertise has taken our brand to a whole new level."',
    author: "Emily Clark",
    logoUrl: thirdLogo,
    designation: "CMO of Visionary Apps",
  },
];

const Reviews: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <div className="p-5 md:p-10 xl:px-20">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        <img
          src={intersect}
          alt="Intersection Image"
          className="w-1/2 lg:h-fit -z-10"
        />
        <div className="px-8 md:px-0">
          <h3 className="text-2xl md:text-4xl font-medium text-center md:text-start">
            We've stopped counting. Over 500 brands count on us.
          </h3>
          <p className="text-xs md:text-xl font-medium text-center md:text-start mt-5 md:mt-10">
            Our 4,000+ team has expertise in almost every programming language.
          </p>
        </div>
      </div>
      <div
        className="flex gap-10 mt-10 md:-mt-10 lg:-mt-32 xl:-mt-40 overflow-x-auto no-scrollbar"
        ref={containerRef}
      >
        {data.map((item) => (
          <ReviewCard key={item.id} review={item} />
        ))}
      </div>
      <NavigationButtons onPrev={handlePrev} onNext={handleNext} />
    </div>
  );
};

export default Reviews;

export interface ReviewCardProps {
  review: ReviewData;
}
