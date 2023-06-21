import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcon = ({ icon }) => {
  return (
    <div className="mr-[20px] rounded-[50%] text-orange bg-blue bg-opacity-10 w-[40px] h-[40px] text-[20px] flex items-center justify-center hover:bg-opacity-20 hover:cursor-pointer">
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default SocialIcon;
