import React, { useState } from "react";
import ListItem from "../../../../components/ListItem";
import { ListContainer } from "./styles";
import { Row, Col, Button } from "reactstrap";

const ListView = (props) => {
  const [checkedMovies, setCheckedMovies] = useState([]);
  const [isToggled, setToggled] = useState(true);

  const toggleTrueFalse = () => setToggled(!isToggled);

  const addToUnCheckedList = (selected) => {
    const index = checkedMovies.indexOf(selected);
    if (index < 0) {
      checkedMovies.push(selected);
    } else {
      checkedMovies.splice(index, 1);
    }
    setCheckedMovies([...checkedMovies]);
  };
  return (
    <ListContainer>
      <Row>
        <Col md={2}>
          <Button
            className="my-3"
            color="primary"
            onClick={() => toggleTrueFalse()}
          >
            {isToggled ? "Switch to My watched list" : "Switch to My list"}
          </Button>
          <Button
            className="my-3"
            color="primary"
            onClick={() => props.setMyListMovies(checkedMovies)}
          >
            Remove from My list
          </Button>
          <Button
            className="my-3"
            color="primary"
            onClick={() => props.setMyWatchedMovies(checkedMovies)}
          >
            Remove from My watched list
          </Button>
        </Col>
        <Col md={10}>
          {isToggled ? (
            <Row>
              {props.myList.map((item) => {
                return (
                  <Col md={4} key={item.imdbID}>
                    <ListItem
                      data={item}
                      onCheck={(movie) => addToUnCheckedList(movie)}
                    />
                  </Col>
                );
              })}
            </Row>
          ) : (
            <Row>
              {props.myWatchedList.map((item) => {
                return (
                  <Col md={4} key={item.imdbID}>
                    <ListItem
                      data={item}
                      onCheck={(movie) => addToUnCheckedList(movie)}
                    />
                  </Col>
                );
              })}
            </Row>
          )}
        </Col>
      </Row>
    </ListContainer>
  );
};

export default ListView;
