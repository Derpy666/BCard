import useWindow from "../../../core/hooks/useWindow";
import { FlexDirs } from "../../../data/enums/FlexDirs.enum";
import { FlexTypes } from "../../../data/enums/FlexTypes.enum";
import Flex from "../../components/shared/Flex/Flex.component";
import Styles from "./About.style";

const About = () => {
  const { open } = useWindow("about");

  const mapAddress =
    "https://www.google.com/maps/d/u/0/viewer?msa=0&ll=51.51251508166466%2C-0.12065629234313757&spn=0.002978%2C0.007639&mid=1unb01TJ7BqESZUna_vRIhaFyl2M&z=17";

  return (
    <Flex dir={FlexDirs.Column} className={Styles.container}>
      <h1 className={Styles.title}>About Us</h1>
      <Flex justify={FlexTypes.Start} className="w-4/5">
        <p>
          Welcome to BCard, your ultimate solution for creating, browsing, and
          managing business cards with ease. Our innovative platform is designed
          to cater to professionals and businesses of all sizes, offering a
          seamless and efficient way to handle all your business card needs.
        </p>
      </Flex>
      <h1 className="m-4 overflow-hidden text-center text-3xl">Our Mission</h1>
      <Flex justify={FlexTypes.Start} className="w-4/5">
        <p>
          At BCard, we strive to simplify the way you network and manage your
          professional connections. Our mission is to provide a user-friendly,
          powerful tool that helps you create stunning business cards,
          efficiently manage your contacts, and enhance your professional
          presence.
        </p>
      </Flex>
      <h1 className="m-4 overflow-hidden text-center text-3xl">
        What We Offer
      </h1>
      <Flex dir={FlexDirs.Column} items={FlexTypes.Start} className="m-2 w-3/5">
        <h3 className="m-2 text-xl">Create</h3>
        <p>
          Design unique and professional business cards effortlessly with our
          intuitive creation tools. Choose from a variety of templates,
          customize every detail, and ensure your business card stands out.
        </p>
      </Flex>
      <Flex dir={FlexDirs.Column} items={FlexTypes.Start} className="m-2 w-3/5">
        <h3 className="m-2 text-xl">Browse</h3>
        <p>
          Explore a wide range of business cards within our app. Find
          inspiration, discover new contacts, and connect with professionals
          from various industries.
        </p>
      </Flex>
      <Flex dir={FlexDirs.Column} items={FlexTypes.Start} className="m-2 w-3/5">
        <h3 className="m-2 text-xl">Contact Us</h3>
        <p>
          Email:{" "}
          <span id="mailto" onClick={open} className={Styles.link}>
            BCard@email.com
          </span>
        </p>
        <p>
          Phone:{" "}
          <span id="tel" onClick={open} className={Styles.link}>
            123-456-7890
          </span>
        </p>
        <p>
          Address:{" "}
          <span id={mapAddress} onClick={open} className={Styles.link}>
            1234 BCard St, BCard City, BCard Country
          </span>
        </p>
      </Flex>
      <div className={Styles.mapContainer}>
        <iframe
          className={Styles.map}
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          loading="lazy"
          src="assets/map.png"
        />
      </div>
    </Flex>
  );
};

export default About;
