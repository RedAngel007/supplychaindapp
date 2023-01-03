// SPDX-License-Identifier: GIT
pragma solidity ^0.8.17;

import "./ConsumerRole.sol";
import "./DistributorRole.sol";
import "./FarmerRole.sol";
import "./RetailerRole.sol";


contract AccessControl is FarmerRole, DistributorRole, ConsumerRole, RetailerRole {

}