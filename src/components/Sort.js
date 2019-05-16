import React from "react";
import { connect } from "react-redux";
import { PRICE_ASC, PRICE_DESC, DATE_ASC, DATE_DESC } from "../store/actions";
import { sortJobs } from "../store/actions";
import styled from "styled-components";

let sortType = {
  [PRICE_ASC]: "Termurah",
  [PRICE_DESC]: "Termahal",
  [DATE_ASC]: "Terlama",
  [DATE_DESC]: "Terbaru"
};

const Select = styled.select`
  width: 100px;
  height: 25px;
`;

const SortWrapper = styled.div`
  margin-bottom: 24px;
  text-align: right;
`;

class Sort extends React.Component {
  handleSortChange = e => {
    this.props.sortJobs(e.target.value);
  };

  render() {
    return (
      <SortWrapper>
        <Select onChange={this.handleSortChange}>
          <option value="DEFAULT">Default</option>
          {Object.keys(sortType).map(type => (
            <option key={type} value={type}>
              {sortType[type]}
            </option>
          ))}
        </Select>
      </SortWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sortJobs: type => {
      dispatch(sortJobs(type));
    }
  };
};

export default connect(
  () => ({}),
  mapDispatchToProps
)(Sort);
