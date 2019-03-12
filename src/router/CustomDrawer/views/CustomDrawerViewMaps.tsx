export const mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged,
    user: state.auth.info,
  };
};

export const mapActionsToProps = () => {
  return {};
};