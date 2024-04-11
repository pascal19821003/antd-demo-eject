import { ComponentType, ReactElement, ReactNode } from "react";
import { Redirect } from "react-router-dom";
import { useAuthContext } from './authContext';


export function requireAuth<P extends {}>(Component: ComponentType<P>) {

  return function AuthenticatedComponent(props: P):ReactElement {

    const { logined } = useAuthContext();

    if (!logined) {
      return <Redirect to="/login" />;
    }

    return <Component {...props} />
  }
}