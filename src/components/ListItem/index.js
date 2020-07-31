import React, { useState } from "react";
import { ListItemContainer, MovieTitle, MovieYear } from "./styles";
import { Input, Label, Button } from "reactstrap";

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
      <div className="movie-detail">
        <MovieTitle>{props.data.Title}</MovieTitle>
        <MovieYear>Year:- {props.data.Year}</MovieYear>
      </div>
      <div>
        <Button
          className="mr-2"
          color="primary"
          onClick={() => props.onAddToMyList(props.data)}
        >
          Add to My list
        </Button>
        <Button
          color="primary"
          onClick={() => props.onAddToMyWatchedList(props.data)}
        >
          Add to My watched list
        </Button>
      </div>
    </ListItemContainer>
  );
};

export default ListItem;
