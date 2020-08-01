import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DashboardView from "./DashboardView";
import * as dashboardActions from "../../actions";
import * as listActions from "../../../myList/actions";
import Toast from "../../../../components/Toast";
import toast from "../../../../utils/toast";

const DashboardContainer = (props) => {
  useEffect(() => {
    props.fetchMovies();
  }, []);
  const [checkedMovies, setCheckedMovies] = useState([]);
  const [checkedBox, setCheckedBox] = useState([]);

  const addToCheckedList = (selected, e) => {
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

  const onChangeFilter = (value) => {
    props.fetchMovies({ y: value });
  };

  const addToMyList = () => {
    props.setMyListMovies(checkedMovies);
    checkedBox.map((item) => (item.checked = false));
    toast.success("Added to my list");
  };

  const addToMyWatchedList = () => {
    props.setMyWatchedMovies(checkedMovies);
    checkedBox.map((item) => (item.checked = false));
    toast.success("Added to watched list");
  };

  return (
    <>
      <Toast />
      <DashboardView
        {...props}
        checkedMovies={checkedMovies}
        onChangeFilter={(val) => onChangeFilter(val)}
        addToCheckedList={(val, e) => addToCheckedList(val, e)}
        addToMyList={() => addToMyList()}
        addToMyWatchedList={() => addToMyWatchedList()}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.dashboard.isLoading,
  movieList: state.dashboard.movies,
  response: state.dashboard.response,
  totalResults: state.dashboard.totalResults,
  listError: state.dashboard.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: (filters) =>
      dispatch(dashboardActions.fetchMovies({ filters })),
    setMyListMovies: (data) => dispatch(listActions.setMyListMovies({ data })),
    setMyWatchedMovies: (data) =>
      dispatch(listActions.setMyWatchedMovies({ data })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
