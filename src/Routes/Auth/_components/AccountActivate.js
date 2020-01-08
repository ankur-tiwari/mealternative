/*
  Account activation page, display spinner or error information
*/

// react
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// compoennts
import ErrorModal from '../../../Common/ErrorModal/ErrorModal';
import PageSpinner from '../../../Common/Spinner/PageSpinner';

const AccountActivate = props => {
  const { error, activate, loading, success, match, history, cleanUp } = props;

  // only want to call activate once
  const [mounted, setMounted] = useState(false);

  // run once, call redux to activate account
  useEffect(() => {
    if (!mounted) {
      activate(match.params.token);
      setMounted(true);
    }
  }, [match, activate, mounted]);

  // after success activate(auto signin)/signin redirect to homepage
  useEffect(() => {
    if (success) {
      history.replace('/');
    }
  }, [success, history]);

  // on unmount, clear process detail in redux
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  const handleErrorClose = () => {
    history.replace('/signup');
  };

  return (
    <>
      <ErrorModal error={error} handleClose={handleErrorClose} />
      <PageSpinner loading={loading} text={'Activating your account..'} />
    </>
  );
};

AccountActivate.propTypes = {
  activate: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  success: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  cleanUp: PropTypes.func.isRequired
};

export default AccountActivate;
