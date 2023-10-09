const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Voting", function () {
  it("Should prevent a voter from voting more than once", async function () {
    const Voting = await ethers.getContractFactory("Voting");
    const voting = await Voting.deploy();
    await voting.waitForDeployment();

    await voting.vote(1);
    expect(await voting.getVotes(1)).to.equal(1);

    await expect(voting.vote(1)).to.be.revertedWith("You have already voted");
    expect(await voting.getVotes(1)).to.equal(1);

    // await voting.vote(2);
    // expect(await voting.getVotes(1)).to.equal(1);
    // expect(await voting.getVotes(2)).to.equal(1);
  });
})
  