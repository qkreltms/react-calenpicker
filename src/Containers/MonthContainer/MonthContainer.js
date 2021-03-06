import React from "react";
import PropTypes from "prop-types";

import { CssConnector } from "Containers/Provider";
import Month from "Components/Month";

const MonthContainer = props => <Month {...props} />;

MonthContainer.propTypes = {
  month: PropTypes.string.isRequired,
  cssObject: PropTypes.object
};

export default CssConnector(({ state }) => ({
  cssObject: state.MonthCssObject
}))(MonthContainer);
