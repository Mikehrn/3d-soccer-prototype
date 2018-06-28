'use strict';

import * as PositionConstants from "./PositionConstants";

export default [
  // 4-3-3
  [
    [90, 0, PositionConstants.GK],
    [30, 40, PositionConstants.DF],
    [60, 15, PositionConstants.DF],
    [60, -15, PositionConstants.DF],
    [30, -40, PositionConstants.DF],
    [-30, 0, PositionConstants.MF],
    [0, 15, PositionConstants.MF],
    [0, -15, PositionConstants.MF],
    [-60, 0, PositionConstants.FW],
    [-60, 30, PositionConstants.FW],
    [-60, -30, PositionConstants.FW]
  ],
  // 4-4-2
  [
    [90, 0, PositionConstants.GK],
    [40, 40, PositionConstants.DF],
    [60, -15, PositionConstants.DF],
    [60, 15, PositionConstants.DF],
    [40, -40, PositionConstants.DF],
    [10, -15, PositionConstants.MF],
    [10, 15, PositionConstants.MF],
    [-20, 40, PositionConstants.MF],
    [-20, -40, PositionConstants.MF],
    [-60, 15, PositionConstants.FW],
    [-60, -15, PositionConstants.FW]
  ],
  // 3-5-2
  [
    [90, 0, PositionConstants.GK],
    [60, -30, PositionConstants.DF],
    [60, 0, PositionConstants.DF],
    [60, 30, PositionConstants.DF],
    [30, -15, PositionConstants.MF],
    [30, 15, PositionConstants.MF],
    [-25, 30, PositionConstants.MF],
    [0, 0, PositionConstants.MF],
    [-25, -30, PositionConstants.MF],
    [-60, 15, PositionConstants.FW],
    [-60, -15, PositionConstants.FW]
  ]
];