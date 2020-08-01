import React from "react";
import ListItem from "../../../../components/ListItem";
import { Row, Col, Button, Spinner, Container } from "reactstrap";
import FilterSelect from "../../../../components/FilterSelect";
import { filterYears } from "../../../../utils/helper";
import Alerts from "../../../../components/Alerts";
import { useHistory } from "react-router-dom";

const DashboardView = (props) => {
  let history = useHistory();

  return (
    <Container>
      <Row className="mt-3">
        <Col md={2}>
          <FilterSelect
            label="Filter by year"
            options={filterYears}
            onSelect={(val) => props.onChangeFilter(val)}
          />
          <Button
            className="my-3"
            color="primary"
            onClick={() => props.addToMyList()}
            disabled={props.checkedMovies.length > 0 ? false : true}
          >
            Add to My list
          </Button>
          <Button
            className="my-3"
            color="primary"
            onClick={() => props.addToMyWatchedList()}
            disabled={props.checkedMovies.length > 0 ? false : true}
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
          {props.isLoading && (
            <Row className="justify-content-center mt-5">
              <Spinner size="lg" color="primary" />
            </Row>
          )}
          {props.response === "True" && !props.isLoading && (
            <Row>
              {props.movieList.map((item, i) => {
                return (
                  <Col md={6} key={item.imdbID} className="mb-3">
                    <ListItem
                      data={item}
                      onCheck={(movie, e) => props.addToCheckedList(movie, e)}
                    />
                  </Col>
                );
              })}
            </Row>
          )}
          {props.response === "False" && <Alerts note={props.listError} />}
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardView;
