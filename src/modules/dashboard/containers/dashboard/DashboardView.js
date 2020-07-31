import React, { useState } from "react";
import ListItem from "../../../../components/ListItem";
import { ListContainer } from "./styles";
import { Row, Col, Button } from "reactstrap";
import FilterSelect from "../../../../components/FilterSelect";
import { filterYears } from "../../../../utils/helper";
import Alerts from "../../../../components/Alerts";
import { useHistory } from "react-router-dom";

const DashboardView = (props) => {
  let history = useHistory();
  const [checkedMovies, setCheckedMovies] = useState([]);

  const addToCheckedList = (selected) => {
    const index = checkedMovies.indexOf(selected);
    if (index < 0) {
      checkedMovies.push(selected);
    } else {
      checkedMovies.splice(index, 1);
    }
    setCheckedMovies([...checkedMovies]);
  };

  const onChangeFilter = (value) => {
    props.fetchMovies({ y: value });
  };

  return (
    <ListContainer>
      <Row>
        <Col md={2}>
          <FilterSelect
            label="Filter by year"
            options={filterYears}
            onSelect={(val) => onChangeFilter(val)}
          />
          <Button
            className="my-3"
            color="primary"
            onClick={() => props.setMyListMovies(checkedMovies)}
          >
            Add to My list
          </Button>
          <Button
            className="my-3"
            color="primary"
            onClick={() => props.setMyWatchedMovies(checkedMovies)}
          >
            Add to My watched list
          </Button>
          <Button
            className="my-3"
            color="primary"
            onClick={() => history.push("/my-list")}
            outline
          >
            Go to My List
          </Button>
        </Col>
        <Col md={10}>
          {props.response === "True" ? (
            <Row>
              {props.movieList.map((item) => {
                return (
                  <Col md={4} key={item.imdbID}>
                    <ListItem
                      data={item}
                      onCheck={(movie) => addToCheckedList(movie)}
                    />
                  </Col>
                );
              })}
            </Row>
          ) : (
            <Alerts note={props.listError} />
          )}
        </Col>
      </Row>
    </ListContainer>
  );
};

export default DashboardView;
