import { bindActionCreators } from 'redux';
import { removeQueue } from '@actions';

export const mapStateToProps = state => {
  return {
    queues: state.theQueueForTheBook.queues,
    token: state.auth.token,
  };
};

export const mapActionsToProps = dispatch => {
  return {
    removeQueue: bindActionCreators(removeQueue, dispatch),
  };
};
