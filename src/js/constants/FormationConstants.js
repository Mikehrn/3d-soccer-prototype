'use strict';

import * as PositionConstants from "./PositionConstants";

export default [
  // 4-3-3
  [
    [90, 0, PositionConstants.GK],
    [30, 40, PositionConstants.DF],
    [60, 12, PositionConstants.DF],
    [60, -12, PositionConstants.DF],
    [30, -40, PositionConstants.DF],
    [-30, 40, PositionConstants.MF],
    [0, 12, PositionConstants.MF],
    [0, -12, PositionConstants.MF],
    [-30, -40, PositionConstants.FW],
    [-60, 12, PositionConstants.FW],
    [-60, -12, PositionConstants.FW]
  ],
  // 4-4-2
  [
    [50, 250, PositionConstants.GK],
    [270, 40, PositionConstants.DF],
    [270, 185, PositionConstants.DF],
    [270, 325, PositionConstants.DF],
    [270, 470, PositionConstants.DF],
    [500, 185, PositionConstants.MF],
    [500, 325, PositionConstants.MF],
    [720, 40, PositionConstants.MF],
    [720, 470, PositionConstants.MF],
    [950, 185, PositionConstants.FW],
    [950, 325, PositionConstants.FW]
  ],
  // 3-4-3
  [
    [50, 250, PositionConstants.GK],
    [270, 40, PositionConstants.DF],
    [270, 250, PositionConstants.DF],
    [270, 470, PositionConstants.DF],
    [500, 185, PositionConstants.MF],
    [500, 325, PositionConstants.MF],
    [720, 140, PositionConstants.MF],
    [720, 380, PositionConstants.MF],
    [950, 40, PositionConstants.FW],
    [950, 250, PositionConstants.FW],
    [950, 470, PositionConstants.FW]
  ],
  // 3-5-2
  [
    [50, 250, PositionConstants.GK],
    [270, 40, PositionConstants.DF],
    [270, 250, PositionConstants.DF],
    [270, 470, PositionConstants.DF],
    [500, 250, PositionConstants.MF],
    [612, 40, PositionConstants.MF],
    [720, 185, PositionConstants.MF],
    [720, 325, PositionConstants.MF],
    [612, 470, PositionConstants.MF],
    [950, 185, PositionConstants.FW],
    [950, 325, PositionConstants.FW]
  ],
  // 4-5-1
  [
    [50, 250, PositionConstants.GK],
    [270, 40, PositionConstants.DF],
    [270, 185, PositionConstants.DF],
    [270, 325, PositionConstants.DF],
    [270, 470, PositionConstants.DF],
    [500, 185, PositionConstants.MF],
    [500, 325, PositionConstants.MF],
    [720, 40, PositionConstants.MF],
    [720, 250, PositionConstants.MF],
    [720, 470, PositionConstants.MF],
    [950, 250, PositionConstants.FW]
  ],
  // Random 1
  [
    [50, 100, PositionConstants.GK],
    [50, 250, PositionConstants.GK],
    [50, 410, PositionConstants.GK],
    [500, 40, PositionConstants.MF],
    [500, 185, PositionConstants.MF],
    [500, 325, PositionConstants.MF],
    [500, 470, PositionConstants.MF],
    [850, 100, PositionConstants.FW],
    [720, 250, PositionConstants.FW],
    [850, 410, PositionConstants.FW],
    [980, 250, PositionConstants.FW]
  ]
];