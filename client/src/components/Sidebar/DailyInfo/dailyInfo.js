import React from "react";
import { connect } from "react-redux";

import "./daily_info.scss";

function mapDispatchToProps(dispatch) {
  return {
    // addArticle: article => dispatch(addArticle(article))
  };
}
function mapStateToProps(dispatch) {
  return {
    // addArticle: article => dispatch(addArticle(article))
  };
}

const DailyInfo = () => {
  return (
    <div className="sidebar__info">
      <div className="sidebar__info__item">
        <p>29 August</p>
        <p>11:44:55</p>
      </div>
      <div className="sidebar__info__item">25c</div>
    </div>
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyInfo);
