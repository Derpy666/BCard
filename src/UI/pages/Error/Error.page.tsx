import { FlexDirs } from "../../../data/enums/FlexDirs.enum";
import Flex from "../../components/shared/Flex/Flex.component";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import Styles from "./Error.style";

const Error = () => {
  const nav = useNavigate();

  const goHome = () => nav("/");

  return (
    <Flex dir={FlexDirs.Column} className={Styles.container}>
      <h1 className={Styles.status404}>404</h1>
      <img src="" alt="404" className={Styles.img} />
      <Button gradientMonochrome={"info"} onClick={goHome}>
        Home
      </Button>
    </Flex>
  );
};

export default Error;
