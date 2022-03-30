import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import logo from "../../imgs/logo192.png";

function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={logo} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">React Js</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={logo} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">React Js</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={logo} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">React Js</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={logo} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">React Js</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={logo} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">React JS</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSm;
