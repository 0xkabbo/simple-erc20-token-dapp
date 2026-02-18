const CONTRACT_ADDRESS = "PASTE_DEPLOYED_ADDRESS";

const ABI = [
  "function balanceOf(address) view returns(uint256)",
  "function transfer(address,uint256) returns(bool)"
];

let provider;
let signer;
let contract;
let userAddress;

const statusEl = document.getElementById("status");

document.getElementById("connect").onclick = async () => {
  if (!window.ethereum) {
    alert("Install MetaMask");
    return;
  }

  provider = new ethers.BrowserProvider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  signer = await provider.getSigner();
  userAddress = await signer.getAddress();

  contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

  statusEl.innerText = "Connected: " + userAddress;
};

document.getElementById("balance").onclick = async () => {
  const bal = await contract.balanceOf(userAddress);
  statusEl.innerText = "Balance: " + ethers.formatUnits(bal, 18);
};

document.getElementById("send").onclick = async () => {
  try {
    const to = document.getElementById("to").value;
    const amount = document.getElementById("amount").value;

    const tx = await contract.transfer(
      to,
      ethers.parseUnits(amount, 18)
    );

    statusEl.innerText = "Sending...";
    await tx.wait();
    statusEl.innerText = "Transfer complete";
  } catch (err) {
    statusEl.innerText = err.reason || err.message;
  }
};
