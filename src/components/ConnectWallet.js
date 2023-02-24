import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';

import { useEagerConnect, useInactiveListener } from '../hooks';
import connectorList from '../lib/connectors';

const ConnectWallet = () => {
  const [isConnecing, setIsConnecing] = useState(false);
  const { activate, deactivate, active, error } = useWeb3React();

  const triedEager = useEagerConnect();

  useInactiveListener(!triedEager);

  const handleClick = (connectorName) => () => {
    setIsConnecing(true);
    activate(connectorList[connectorName]);
  };

  const handleDisconnect = () => {
    deactivate();
  };

  const handleRetry = () => {
    setIsConnecing(false);
    deactivate();
  };

  useEffect(() => {
    if (active) {
      setIsConnecing(false);
    }
  }, [active]);

  return (
    <div className="connect-wallet">
      {active && (
        <button1 className="button-disconnect" onClick={handleDisconnect}>
          Disconnect 
        </button1>
      )}
      {!active && (
        <>
          <button1 onClick={handleClick('MetaMask')} disabled={isConnecing}>
            Connect 
          </button1>
          
        </>
      )}
      {!active && error && <button1 onClick={handleRetry}>Retry</button1>}
    </div>
  );
};

export default ConnectWallet;
