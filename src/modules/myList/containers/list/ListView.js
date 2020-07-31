import React, { useState, useEffect } from "react";
import ListItem from "../../../../components/ListItem";
import { ListContainer } from "./styles";
import { Row, Col, Button } from "reactstrap";

const ListView = (props) => {
  const [checkedMovies, setCheckedMovies] = useState([]);
  const [isToggled, setToggled] = useState(true);
  const [myListMovies, setMyListMovies] = useState(props.myList);
  const [myWatchedListMovies, setMyWatchedListMovies] = useState(
    props.myWatchedList
  );

  const toggleTrueFalse = () => {
    setToggled(!isToggled);
  };

  const addToUnCheckedList = (selected) => {
    const index = checkedMovies.indexOf(selected);
    if (index < 0) {
      checkedMovies.push(selected);
    } else {
      checkedMovies.splice(index, 1);
    }
    setCheckedMovies([...checkedMovies]);
  };

  const removeMovieFromList = () => {
    let newArray;
    if (isToggled) {
      newArray = myListMovies.filter((val) => !checkedMovies.includes(val));
      setMyListMovies(newArray);
      props.setMyListMovies(newArray);
    } else {
      newArray = myWatchedListMovies.filter(
        (val) => !checkedMovies.includes(val)
      );
      setMyWatchedListMovies(newArray);
      props.setMyWatchedMovies(newArray);
    }
  };

  const addToMyWatchedMovies = () => {
    let newArray = myWatchedListMovies.concat(checkedMovies);
    setMyWatchedListMovies(newArray);
    props.setMyWatchedMovies(newArray);
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
            onClick={() => removeMovieFromList()}
          >
            {isToggled ? "Remove from My list" : "Remove from My watched list"}
          </Button>
          {isToggled && (
            <Button
              className="my-3"
              color="primary"
              onClick={() => addToMyWatchedMovies()}
            >
              Add My watched list
            </Button>
          )}
        </Col>
        <Col md={10}>
          {isToggled ? (
            <Row>
              {myListMovies.map((item) => {
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
              {myWatchedListMovies.map((item) => {
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
