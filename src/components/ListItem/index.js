import React from "react";
import { MovieTitle, MovieYear } from "./styles";
import { Input, Container, Row, Col } from "reactstrap";

const ListItem = (props) => {
  return (
    <Container className="bg-light rounded p-3">
      <Row>
        <Col md={1}>
          <Input
            className="ml-2 mt-3"
            type="checkbox"
            onChange={(e) => props.onCheck(props.data, e)}
          />
        </Col>
        <Col md={10}>
          <div>
            {props.data.Poster ? (
              <img src={props.data.Poster} alt="movieImage" />
            ) : (
              <img
                src="https://demo.plugins360.com/wp-content/uploads/2017/12/demo.png"
                alt="movieImage"
              />
            )}
          </div>
        </Col>
      </Row>
      <div className="movie-detail">
        <MovieTitle>{props.data.Title}</MovieTitle>
        <MovieYear>({props.data.Year})</MovieYear>
      </div>
    </Container>
  );
};

export default ListItem;
