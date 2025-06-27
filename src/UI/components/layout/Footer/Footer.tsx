import { Footer } from "flowbite-react";
import Flex from "../../shared/Flex/Flex.component";
import { FlexTypes } from "../../../../data/enums/FlexTypes.enum";
import Styles from "./Footer.style";

const FooterC = () => {
  return (
    <Footer className={Styles.container}>
      <Flex
        justify={FlexTypes.Between}
        items={FlexTypes.Center}
        className={Styles.containerInner}
      >
        <p className={Styles.paragrapgh}>
          2025 Noam
        </p>
      </Flex>
    </Footer>
  );
};

export default FooterC;
