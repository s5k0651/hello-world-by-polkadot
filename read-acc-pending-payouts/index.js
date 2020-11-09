const request = require('request');

const acc = process.argv[2];
const depth = process.argv[3];
const baseURL = 'http://127.0.0.1:8080';
const accPPURL = `/accounts/${acc}/staking-payouts?depth=${depth}`;

request(`${baseURL + accPPURL}&unclaimedOnly=true`, { json: true }, (err, res, body) => {
    if (err) { return console.error(err); }

    console.log(`Pending Payouts (KSM):`)
    console.log("Account Addr:", acc);
    console.log("Depth:",depth);
    
    for (let {payouts} of body.erasPayouts) {
        for (let {nominatorStakingPayout} of payouts) {
        console.log(`${parseInt(nominatorStakingPayout) / Math.pow(10, 12)} KSM`) ;
        }

        console.log();
    }
});
