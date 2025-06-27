import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home.page";
import Favourites from "../../pages/Favourites/Favourites.page";
import RouteGuard from "../RouteGuard/RouteGuard";
import { AuthLevels } from "../../../data/enums/AuthLevels.enum";
import { IAuthState } from "../../../data/types/IAuthState";
import { useSelector } from "react-redux";
import { IRootState } from "../../../data/types/IRootState";
import About from "../../pages/About/About.page";
import MyCards from "../../pages/MyCards/MyCards.page";
import Biz from "../../pages/Biz/Biz.page";
import Profile from "../../pages/Profile/Profile.page";
import { OutletProps } from "./Outlet.props";

const Outlet = ({ className }: OutletProps) => {
  const auth = useSelector<IAuthState>(
    (state: IRootState) => state.AuthSlice,
  ) as IAuthState;

  return (
    <div className={className}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/biz/:id" element={<Biz />} />
        <Route
          path="/profile"
          element={
            <RouteGuard
              authLevel={auth.authLevel}
              minimumLevel={AuthLevels.User}
            >
              <Profile />
            </RouteGuard>
          }
        />
        <Route
          path="/favourites"
          element={
            <RouteGuard
              authLevel={auth.authLevel}
              minimumLevel={AuthLevels.User}
            >
              <Favourites />
            </RouteGuard>
          }
        />
        <Route
          path="/mycards"
          element={
            <RouteGuard
              authLevel={auth.authLevel}
              minimumLevel={AuthLevels.Biz}
            >
              <MyCards />
            </RouteGuard>
          }
        />
      </Routes>
    </div>
  );
};

export default Outlet;
