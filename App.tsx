import React from 'react';
import {Router} from './src/routes/router';
import {AuthProvider} from './src/context/Auth';

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
