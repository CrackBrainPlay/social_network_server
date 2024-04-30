import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Navigate to="/login" />;
            }
            return <Component {...this.props} />
        }
    }

    let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectAuthRedirectComponent;
}