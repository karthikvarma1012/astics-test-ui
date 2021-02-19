import Button from "./button";
import { useHistory } from "react-router-dom";


const Layout = (props) => {
  const history = useHistory();
  const onLogoutButtonClick = () => {
    localStorage.clear();
    history.push("/");
  }

  return <div>
    <header className="layout-header">
      <div className="width-wrapper">
        <div className="flex jc-sb ai-c">
          <div className="logo">Company logo</div>
          <Button className="btn tertiary" label="Logout" onClick={onLogoutButtonClick} />
        </div>
      </div>
    </header>
    <main className="width-wrapper">

      {props.children}
    </main>
  </div>
}

export default Layout;
