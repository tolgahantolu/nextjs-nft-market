import { IButton } from "../../../typescript";

const Button: React.FC<IButton> = ({
  bgColor,
  textColor,
  borderColor,
  content,
}) => {
  console.log(bgColor);
  console.log(content);
  return (
    <button
      data-testid="button"
      className={`bg-${bgColor} text-${textColor} border-2 border-${borderColor} border-opacity-100 rounded-3xl grid place-items-center py-2 px-8`}
    >
      {content}
    </button>
  );
};

export default Button;
