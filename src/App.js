import { Route, Switch } from "react-router-dom";
import style from "./App.module.scss";
import Footer from "./component/Footer/Footer";
import HeaderContainer from "./component/Header/HeaderContainer";
import MainContainer from "./component/Main/MainContainer";
import UserPageContainer from "./component/Main/UserPage/UserPageContainer";
import NotFound from "./component/NotFound/NotFound";

function App() {
  return (
    <div className={style.App}>
      <div className={style.mainHeader}>
        <HeaderContainer />
      </div>

      <div className={style.content}>
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/user/:id" component={UserPageContainer} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <div className={style.footer}>
        <Footer text={"Developed by dimon.messages@gmail.com"} />{" "}
      </div>
    </div>
  );
}

export default App;
