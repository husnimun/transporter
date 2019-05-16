import React from "react";
import PropTypes from "prop-types";
import { formatDate, formatMoney } from "../helper/helper";
import styled from "styled-components";

const Card = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 24px;
`;

function JobCard(props) {
  const { origin, destination, price, date } = props;
  return (
    <Card>
      {origin}
      <br />
      {destination}
      <br />
      {formatMoney(price)}
      <br />
      {formatDate(date * 1000)}
    </Card>
  );
}

JobCard.propTypes = {
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired
};

export default JobCard;
