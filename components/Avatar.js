import { AvatarGenerator } from "random-avatar-generator";

const generator = new AvatarGenerator();

const avatar = generator.generateRandomAvatar();

const Avatar = () => {
  return (
    <div>
      <img
        className="h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
        src={avatar}
        alt="Avatar"
      />
    </div>
  );
};

export default Avatar;
