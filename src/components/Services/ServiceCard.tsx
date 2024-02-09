interface ServiceCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="space-y-6 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <img src={imageUrl} className="w-10 h-10 md:w-12 md:h-12" alt={title} />
      <div>
        <h3 className="text-base md:text-xl lg:text-2xl font-medium">
          {title}
        </h3>
        <p className="mt-2 text-sm lg:text-base text-[#525252]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
