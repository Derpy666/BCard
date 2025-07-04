import { useLocation } from "react-router-dom";
import { useEffect, useState, SyntheticEvent } from "react";
import useAPI from "../../../core/hooks/useAPI";
import { HttpMethods } from "../../../data/enums/HttpMethods.enum";
import { ICard } from "../../../data/types/ICard";
import { paths } from "../../../data/constants/paths";
import Flex from "../../components/shared/Flex/Flex.component";
import { FlexDirs } from "../../../data/enums/FlexDirs.enum";
import { FlexTypes } from "../../../data/enums/FlexTypes.enum";
import Styles from "./Biz.style";
import useWindow from "../../../core/hooks/useWindow";

const Biz = () => {
  const [card, setCard] = useState<ICard | null>(null);

  const id = useLocation().pathname.split("/")[2];
  const { sendApiRequest } = useAPI();
  const { open } = useWindow("about");

  const { VITE_GOOGLE_MAPS_API_KEY: KEY } = import.meta.env;

  useEffect(() => {
    (async () => {
      try {
        const res = await sendApiRequest(
          `${paths.cards}/${id}`,
          HttpMethods.GET,
        );
        if (res) setCard(res);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [id, sendApiRequest]);

  if (!card)
    return <h1 className={Styles.warning}>No card with that Id was found!</h1>;

  return (
    <Flex
      dir={FlexDirs.Column}
      justify={FlexTypes.Start}
      className={Styles.container}
    >
      <h1 className={Styles.title}>{card.title}</h1>
      {
        <Flex
          dir={FlexDirs.Column}
          justify={FlexTypes.Start}
          items={FlexTypes.Start}
          className={Styles.card.toString()}
        >
          <h1 className={Styles.subtitle}>{card.subtitle}</h1>
          <img
            src={card.image?.url}
            alt={card.image?.alt}
            className={Styles.img}
            onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.src = "";
              e.currentTarget.onerror = null;
            }}
            onLoad={(e: SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.onerror = null;
            }}
          />
          <p className={Styles.description}>{card.description}</p>
          <p className={Styles.paragraph}>
            Email:{" "}
            <span id="mailto" className={Styles.link} onClick={open}>
              {card.email}
            </span>
          </p>
          <p className={Styles.paragraph}>
            Phone:{" "}
            <span id="tel" className={Styles.link} onClick={open}>
              {card.web}
            </span>
          </p>
          <p className={Styles.paragraph}>
            Website:{" "}
            <span id={card.web} className={Styles.link} onClick={open}>
              {card.web}
            </span>
          </p>
          <p className={Styles.paragraph}>
            Address: {card.address.street} {card.address.houseNumber},{" "}
            {card.address.city}, {card.address.country}
          </p>
          {KEY && (
            <div className={Styles.mapContainer}>
              <iframe
                className={Styles.map}
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                loading="lazy"
                src={`
                https://www.google.com/maps/embed/v1/place?key=${KEY}
                &q=${card?.address.street}+${card?.address.city}+${card?.address.state}
              `}
              />
            </div>
          )}
        </Flex>
      }
    </Flex>
  );
};

export default Biz;
