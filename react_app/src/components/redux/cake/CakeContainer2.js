import React from "react";
import { connect } from "react-redux";
import { buy_cake } from "./cakeActions";

function CakeContainer2(props) {
  return (
    <div>
      <h2>Counter-2</h2>
      <h2>No. of Cake:{props.noOfCakes} </h2>
      <button className="btn btn-success mt-2" onClick={props.buyCake}>
        Buy Cake
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfCakes: state.cake.noOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => {
      dispatch(buy_cake());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer2);
