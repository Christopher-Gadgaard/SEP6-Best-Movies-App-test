import { Autocomplete, TextField } from "@mui/material";
import Sidebar from "../../components/sidebar/sidebar";
import Topbar from "../../components/topbar/topbar";
import "../globalStyle.css";
import Carousel from "../../components/carousel/carousel";
const MoviesPage: React.FC = () => {
  return (
    <div className="pageContainer">
      <Topbar />
      <div className="pageLayout">
        <Sidebar />
        <div className="pageContent">
          <div className="carouselContainer">
            <Carousel />
          </div>
          <Autocomplete
            className="searchBar"
            renderInput={(params) => <TextField {...params} label="Movies" />}
            options={[
              "The Shawnshark Redepmtion",
              "Lord of the Rings",
              "Mission Impossible",
            ]}
          ></Autocomplete>
        </div>
      </div>
    </div>
  );
};
export default MoviesPage;
