import { Card, List, ListItem } from "@mui/material";
import { FunctionComponent } from "react";
import "./style.css";
import { useNavigate } from "react-router";
const Sidebar: FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebarContainer">
      <Card className="sidebarCard">
        <List>
          <ListItem
            className="sidebarItem"
            onClick={() => navigate("../movies")}
          >
            Movies
          </ListItem>
          <ListItem
            className="sidebarItem"
            onClick={() => navigate("../actors")}
          >
            Actors
          </ListItem>
          <ListItem
            className="sidebarItem"
            onClick={() => navigate("../directors")}
          >
            Directors
          </ListItem>
        </List>
      </Card>
    </div>
  );
};
export default Sidebar;