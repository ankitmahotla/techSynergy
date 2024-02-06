interface Service {
  imageUrl: string;
  title: string;
  description: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="space-y-6 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <img
        src={service.imageUrl}
        className="w-10 h-10 md:w-12 md:h-12"
        alt=""
      />
      <div>
        <h3 className="text-base md:text-2xl font-medium">{service.title}</h3>
        <p className="mt-2 text-sm md:text-base text-[#525252]">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
