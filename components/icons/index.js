import Arrow from "./Arrow";
import Toggle from "./Toggle";

const Icon = ({ name, ...rest }) => {
  switch (name) {
    case "arrow":
      return <Arrow {...rest} />;
    case "toggle":
      return <Toggle {...rest} />;
    default:
      return;
  }
};

export default Icon;
