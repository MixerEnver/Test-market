async function main() {

    const [deployer] = await ethers.getSigners();

    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const HelloWorld = await ethers.getContractFactory("EnverLee");
    const contract = await HelloWorld.deploy("0x2d504E0B2363F9c5fCEC571d62476F08e36CCA0d", "0x2d504E0B2363F9c5fCEC571d62476F08e36CCA0d", "0x2d504E0B2363F9c5fCEC571d62476F08e36CCA0d");

    console.log("Contract deployed at:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });