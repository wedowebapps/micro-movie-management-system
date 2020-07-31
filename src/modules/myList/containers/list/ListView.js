import React from "react";
import ListItem from "../../../../components/ListItem";
import { Row, Col, Button, Container } from "reactstrap";
import { useHistory } from "react-router-dom";

const ListView = (props) => {
  let history = useHistory();

  return (
    <Container>
      <Row className="mt-3">
        <Col md={2}>
          <Button
            className="my-3"
            color="primary"
            onClick={() => props.toggleTrueFalse()}
          >
            {props.isToggled ? "Switch to My watched list" : "Switch to My list"}
          </Button>
          <Button
            className="my-3"
            color="primary"
            onClick={() => props.removeMovieFromList()}
          >
            {props.isToggled ? "Remove from My list" : "Remove from My watched list"}
          </Button>
          {props.isToggled && (
            <Button
              className="my-3"
              color="primary"
              onClick={() => props.addToMyWatchedMovies()}
            >
              Add My watched list
            </Button>
          )}
          <Button
            className="my-3"
            color="primary"
            onClick={() => history.push("/")}
            outline
          >
            Back to Main list
          </Button>
        </Col>
        <Col md={10}>
          {props.isToggled ? (
            <Row>
              {props.myListMovies.map((item) => {
                return (
                  <Col md={6} key={item.imdbID} className="mb-3">
                    <ListItem
                      data={item}
                      onCheck={(movie) => props.addToUnCheckedList(movie)}
                    />
                  </Col>
                );
              })}
            </Row>
          ) : (
            <Row>
              {props.myWatchedListMovies.map((item) => {
                return (
                  <Col md={6} key={item.imdbID} className="mb-3">
                    <ListItem
                      data={item}
                      onCheck={(movie) => props.addToUnCheckedList(movie)}
                    />
                  </Col>
                );
              })}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ListView;
