import Header from "./header";
import FormLogin from "./login/form";
import RedirectButton from "./redirect-button";
import FormRegister from "./register/form";
import SideImage from "./side-image";

export const AuthIndex = {
  Header: Header,
  Redirect: RedirectButton,
  SideImage: SideImage,
  Register: {
    Form: FormRegister,
  },
  Login: {
    Form: FormLogin,
  },
};
