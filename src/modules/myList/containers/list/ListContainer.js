import React, { useState } from "react";
import { connect } from "react-redux";
import ListView from "./ListView";
import * as listActions from "../../actions";
import toast from "../../../../utils/toast";

const ListContainer = (props) => {
  const [checkedMovies, setCheckedMovies] = useState([]);
  const [isToggled, setToggled] = useState(true);
  const [myListMovies, setMyListMovies] = useState(props.myList);
  const [myWatchedListMovies, setMyWatchedListMovies] = useState(
    props.myWatchedList
  );
  const [checkedBox, setCheckedBox] = useState([]);

  const toggleTrueFalse = () => {
    setToggled(!isToggled);
    checkedBox.map((item) => (item.checked = false));
    setCheckedMovies([]);
  };

  const addToUnCheckedList = (selected, e) => {
    const index = checkedMovies.indexOf(selected);
    if (index < 0) {
      checkedMovies.push(selected);
      checkedBox.push(e.target);
    } else {
      checkedMovies.splice(index, 1);
      checkedBox.splice(index, 1);
    }
    setCheckedMovies([...checkedMovies]);
    setCheckedBox([...checkedBox]);
  };

  const removeMovieFromList = () => {
    let newArray;
    if (isToggled) {
      newArray = myListMovies.filter((val) => !checkedMovies.includes(val));
      setMyListMovies(newArray);
      setCheckedMovies([]);
      props.setMyListMovies(newArray);
      toast.success("Removed from list");
    } else {
      newArray = myWatchedListMovies.filter(
        (val) => !checkedMovies.includes(val)
      );
      console.log(newArray);
      setCheckedMovies([]);
      setMyWatchedListMovies(newArray);
      props.setMyWatchedMovies(newArray);
      toast.success("Removed from list");
    }
  };

  const addToMyWatchedMovies = () => {
    let newArray = myWatchedListMovies.concat(checkedMovies);
    setMyWatchedListMovies(newArray);
    props.setMyWatchedMovies(newArray);
    checkedBox.map((item) => (item.checked = false));
    setCheckedMovies([]);
    toast.success("Added to watched list");
  };

  return (
    <ListView
      myWatchedListMovies={myWatchedListMovies}
      myListMovies={myListMovies}
      checkedMovies={checkedMovies}
      isToggled={isToggled}
      addToMyWatchedMovies={() => addToMyWatchedMovies()}
      removeMovieFromList={() => removeMovieFromList()}
      addToUnCheckedList={(val, e) => addToUnCheckedList(val, e)}
      toggleTrueFalse={() => toggleTrueFalse()}
    />
  );
};

const mapStateToProps = (state) => ({
  myList: state.list.myList,
  myWatchedList: state.list.myWatchedList,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setMyListMovies: (data) => dispatch(listActions.setMyListMovies({ data })),
    setMyWatchedMovies: (data) =>
      dispatch(listActions.setMyWatchedMovies({ data })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
