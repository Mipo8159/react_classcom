import React from 'react'
import {NavigateFunction, Params, useLocation, useNavigate, useParams} from 'react-router-dom'

export const WithRouter = (Component: React.ComponentClass) => {
  function ComponentWithRouterProp(props: any) {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return <Component {...props} router={{location, navigate, params}} />
  }

  return ComponentWithRouterProp
}

export interface WithRouterProps {
  router: {
    location: Location
    navigate: NavigateFunction
    params: Readonly<Params<string>>
  }
}
