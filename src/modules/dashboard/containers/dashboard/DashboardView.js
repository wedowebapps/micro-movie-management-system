import React, { useState } from "react";
import ListItem from "../../../../components/ListItem";
import { ListContainer } from "./styles";
import { Row, Col } from "reactstrap";
import FilterSelect from "../../../../components/FilterSelect";
import { filterYears } from "../../../../utils/helper";

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

  const onChangeFilter = (value) => {
    
  };

  return (
    <ListContainer>
      <Row>
        <Col md={4}>
          <FilterSelect
            label="Filter by year"
            options={filterYears}
            onSelect={(val) => onChangeFilter(val)}
          />
        </Col>
        <Col md={8}>
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
        </Col>
      </Row>
    </ListContainer>
  );
};

export default DashboardView;
