const Migrations = artifacts.require("Migrations");
const Quick = artifacts.require("Quick");
const UniswapV2Factory = artifacts.require("UniswapV2Factory");
const UniswapV2Pair = artifacts.require("UniswapV2Pair");


module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(UniswapV2Factory, "0x8FFFCb1DD3DcD31ee8bB1257553643cB5e348499");
  deployer.deploy(Quick, "0xDfE5BbFe66b093088022ef3A72A2e5d88140dba7", "0xDfE5BbFe66b093088022ef3A72A2e5d88140dba7");
  deployer.deploy(UniswapV2Pair);
};
