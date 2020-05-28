import React, { useState } from 'react';

export const AuthContext = React.createContext({
  authStatus: false,
  currentUser: '',
  login: function() {

  }
});

function AuthContextProvider(props) {
  const [authStatus, setAuthStatus] = useState(false);
  const [currentUser, setCurrentUser] = useState('')

  function loginHandler() {
    setCurrentUser('BQDs8Y8xf-xmKRn4chsoIz28kje-WImeiV_4wxC31mD0vpxMkA-05J8fhw6fSipaiDGRE1KGvuWvPUEVcUUTx4qDh8GkA1diQ_5ts-gX_Ft_qrncvgoPhAcnHKonNe05Ru9WThomOqzaIQnL_eIAFA2LpQs0GMXPWJjf-rv-RwDTXFJB0W1sS9Qz-yNUQZ2SW1KvR_hpYocmKG4y0JZgvioISpzPg98eMdA1vEgMxEysdQxrRsXi2lEylw8pKI6pguG0cv-ivrrI');
    setAuthStatus(true);
  }

  return (
    <AuthContext.Provider value={{ login: loginHandler, currentUser, setCurrentUser, authStatus, setAuthStatus }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;