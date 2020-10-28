const ERC20 = artifacts.require("ERC20");

//deployer.deploy(A, arg1, arg2, ...);
module.exports = function(deployer) {
    deployer.deploy(ERC20,'MyToken','TKN');
};
