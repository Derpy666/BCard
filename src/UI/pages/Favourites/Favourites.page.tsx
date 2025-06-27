import CardsDeck from "../../components/shared/CardsDeck/CardsDeck.component";

const Favourites = () => {
  const title = "Favourites";
  const subTitle = "Here you can find your favourite business cards";

  return <CardsDeck title={title} subtitle={subTitle} />;
};

export default Favourites;
