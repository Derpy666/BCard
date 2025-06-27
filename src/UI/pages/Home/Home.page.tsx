import CardsDeck from "../../components/shared/CardsDeck/CardsDeck.component";

const Home = () => {
  const title = "B-Card";
  const subTitle = "Here you can find business cards from all categories";

  return <CardsDeck title={title} subtitle={subTitle} />;
};

export default Home;
