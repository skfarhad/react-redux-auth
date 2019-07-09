import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PublicRoute = ({
  auth,
  component: Component,
  ...rest
}) => (

  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true ? (
        <Redirect to="/" />
      ) : (
        <Component {...props} />
      )
    }
  />

  
)

const mapStateToProps = (state) => ({
  auth: state.auth
})


export default connect(mapStateToProps)(PublicRoute)