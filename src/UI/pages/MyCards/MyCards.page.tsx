import CardsDeck from "../../components/shared/CardsDeck/CardsDeck.component";

const MyCards = () => {
  const title = "My Cards";
  const subTitle = "Here you can find your business cards";

  return <CardsDeck title={title} subtitle={subTitle} />;
};

export default MyCards;
