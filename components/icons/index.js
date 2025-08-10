import Arrow from "./Arrow";
import Stars from "./Stars";
import Toggle from "./Toggle";

const Icon = ({ name, ...rest }) => {
  switch (name) {
    case "arrow":
      return <Arrow {...rest} />;
    case "stars":
      return <Stars {...rest} />;
    case "toggle":
      return <Toggle {...rest} />;
    default:
      return;
  }
};

export default Icon;
