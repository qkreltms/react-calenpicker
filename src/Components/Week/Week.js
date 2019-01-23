import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { CssConnector } from "Containers/Provider";
import DateContainer from "Containers/DateContainer";

const WeekTr = styled.tr`
  width: 100%;
  height: 16.6%;
  display: inline-flex;
`;

const Week = props => (
  <WeekTr style={props.cssObject}>
    <DateContainer weekNumber={props.weekNumber} day={1} />
    <DateContainer weekNumber={props.weekNumber} day={2} />
    <DateContainer weekNumber={props.weekNumber} day={3} />
    <DateContainer weekNumber={props.weekNumber} day={4} />
    <DateContainer weekNumber={props.weekNumber} day={5} />
    <DateContainer weekNumber={props.weekNumber} day={6} />
    <DateContainer weekNumber={props.weekNumber} day={7} />
  </WeekTr>
);

Week.propTypes = {
  weekNumber: PropTypes.oneOf([0, 1, 2, 3, 4, 5]).isRequired,
  cssObject: PropTypes.object
};

export default CssConnector(({ state }) => ({
  cssObject: state.WeekCssObject
}))(Week);
