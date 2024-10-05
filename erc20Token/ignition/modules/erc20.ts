import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const name = "AngieToken";
const symbol = "ATK";
const totalSupply = "1000000000000000000000"

const ERC20TokenModule = buildModule("ERC20TokenModule", (m) => {

    const erc20 = m.contract("ERC20Token", [name,symbol,totalSupply]);

    return { erc20 };
});

export default ERC20TokenModule;