// 根据代币符号获取代币地址
function getTokenAddress(tokenSymbol) {
  // 根据代币符号获取相应的代币地址
}

// 获取指定代币的名称
async function getTokenName(web3, tokenContract) {
  return tokenContract.methods.name().call();
}

// 获取指定代币的符号
async function getTokenSymbol(web3, tokenContract) {
  return tokenContract.methods.symbol().call();
}

// 发送代币
async function sendToken(web3, tokenContract, from, to, amount) {
  return tokenContract.methods.transfer(to, amount).send({ from });
}