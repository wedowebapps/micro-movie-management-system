import React, { useState } from "react";
import ListItem from "../../../../components/ListItem";
import { ListContainer } from "./styles";
import { Row, Col } from "reactstrap";

const DashboardView = (props) => {
  const [myListMovies, setMyList] = useState([]);
  const [myWatchedListMovies, setMyWatchedList] = useState([]);

  const addToMyList = (selected) => {
    const index = myListMovies.indexOf(selected);
    if (index < 0) {
      myListMovies.push(selected);
    } else {
      myListMovies.splice(index, 1);
    }
    setMyList([...myListMovies]);
  };

  const addToMyWatchedList = (selected) => {
    const index = myWatchedListMovies.indexOf(selected);
    if (index < 0) {
      myWatchedListMovies.push(selected);
    } else {
      myWatchedListMovies.splice(index, 1);
    }
    setMyWatchedList([...myWatchedListMovies]);
  };

  return (
    <ListContainer>
      <Row>
        {props.movieList.map((item) => {
          return (
            <Col md={4} key={item.imdbID}>
              <ListItem
                data={item}
                onAddToMyList={(movie) => addToMyList(movie)}
                onAddToMyWatchedList={(movie) => addToMyWatchedList(movie)}
              />
            </Col>
          );
        })}
      </Row>
    </ListContainer>
  );
};

export default DashboardView;
