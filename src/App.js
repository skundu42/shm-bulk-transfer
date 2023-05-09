import React, { useState } from 'react';
import './App.css';
import CsvInput from './CsvInput';
import { ethers } from 'ethers';
import BatchTransfer from './BatchTransfer.json';

function App() {
  const [data, setData] = useState([]);

  const handleDataLoaded = (parsedData) => {
    setData(parsedData);
  };

  async function sendBatchTransaction() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contractAddress = '0xE377230dEc382719530B5A22e2Db8A9201681566'; // Replace with your deployed contract address
    const contract = new ethers.Contract(contractAddress, BatchTransfer.abi, signer);

    const recipients = data.map((row) => row.address);
    const amounts = data.map((row) => ethers.utils.parseEther(row.amount));

    const totalAmount = amounts.reduce((a, b) => a.add(b), ethers.BigNumber.from(0));

    try {
      const tx = await contract.transferETH(recipients, amounts, { value: totalAmount });
      const receipt = await tx.wait();
      console.log('Transaction successful:', receipt);
    } catch (err) {
      console.error('Transaction failed:', err);
    }
  }

  return (
    <div className='App'>
      <h1>SHM Batch Transfer</h1>
      <CsvInput onDataLoaded={handleDataLoaded} />
      <button onClick={sendBatchTransaction}>Send Batch Transaction</button>
    </div>
  );
}

export default App;
