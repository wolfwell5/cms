/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 50546
 Source Host           : localhost:3306
 Source Schema         : contractmanagement

 Target Server Type    : MySQL
 Target Server Version : 50546
 File Encoding         : 65001

 Date: 05/08/2020 21:00:36
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for contract
-- ----------------------------
DROP TABLE IF EXISTS `contract`;
CREATE TABLE `contract`  (
  `cid` bigint(20) NOT NULL AUTO_INCREMENT,
  `customer` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '往来客户',
  `contractName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '合同名称',
  `contractMoney` int(30) NULL DEFAULT NULL COMMENT '合同金额',
  `receiveMoney` int(30) NULL DEFAULT NULL COMMENT '收款金额',
  `receiveDate` datetime NULL DEFAULT NULL COMMENT '收款日期',
  `insuranceMoney` int(30) NULL DEFAULT NULL COMMENT '质保金',
  `insuranceDueDate` datetime NULL DEFAULT NULL COMMENT '质保金到期日',
  `ticketStatus` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '开票情况',
  `ticketCompany` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '开票单位',
  `ticketGenerateDate` datetime NULL DEFAULT NULL COMMENT '开票日期',
  `comment` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  `createDate` datetime NULL DEFAULT NULL,
  `pid` bigint(20) NULL DEFAULT NULL COMMENT '父合同id',
  `payMoney` int(30) NULL DEFAULT NULL COMMENT '付款金额',
  `payDate` datetime NULL DEFAULT NULL COMMENT '付款日期',
  `ticketBackStatus` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '回票情况',
  `ticketBackCompany` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '回票单位',
  `ticketBackDate` datetime NULL DEFAULT NULL COMMENT '回票日期',
  PRIMARY KEY (`cid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 97 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;
