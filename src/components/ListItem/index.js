import React from "react";
import { ListItemContainer, MovieTitle, MovieYear } from "./styles";
import { Button, Input } from "reactstrap";

const ListItem = (props) => {
  return (
    <ListItemContainer>
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
      <div>
        <Input
          type="checkbox"
          onChange={(e) => props.onCheck(props.data)}
        />
      </div>
      <div className="movie-detail">
        <MovieTitle>{props.data.Title}</MovieTitle>
        <MovieYear>Year:- {props.data.Year}</MovieYear>
      </div>
    </ListItemContainer>
  );
};

export default ListItem;
