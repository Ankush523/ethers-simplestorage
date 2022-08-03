const ethers = require('ethers');
const fs = require('fs');
async function main(){
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");
    const wallet = new ethers.Wallet("1a0c43e90ef7753008110ee016ac5c4e76cc44a1c94c754e6676006ae636e9aa",provider);
    const abi = fs.readFileSync('./SimpleStorage_sol_SimpleStorage.abi','utf8');
    const binary = fs.readFileSync('./SimpleStorage_sol_SimpleStorage.bin','utf8');
    const contractFactory = new ethers.ContractFactory(abi,binary,wallet);
    console.log("Deploying...")

    const contract = await contractFactory.deploy();
    console.log(contract)
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1);
})