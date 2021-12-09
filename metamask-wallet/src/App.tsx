import React, { FC } from "react";
import { useWeb3React } from "@web3-react/core";

import Web3 from "web3";

import { injected } from "./injected";

const App: FC = () => {
  const { active, account, library, connector, activate, deactivate } = useWeb3React();

  console.log(account);
  const connect = async () => {
    try {
      await activate(injected);
    } catch (err) {
      console.log(err);
    }
  };

  const disconnect = async () => {
    try {
      deactivate();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <button onClick={connect}>Connect Metamask</button>
      <button onClick={disconnect}>Disconnect Metamask</button>
    </div>
  );
};

export default App;
