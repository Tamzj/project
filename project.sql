/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : project

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 17:37:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for indexgoods
-- ----------------------------
DROP TABLE IF EXISTS `indexgoods`;
CREATE TABLE `indexgoods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `img` varchar(255) NOT NULL,
  `add_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `brand` varchar(255) NOT NULL COMMENT '商品品牌',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of indexgoods
-- ----------------------------
INSERT INTO `indexgoods` VALUES ('1', '精致眼霜', '100.00', 'img/h1.jpg', '2018-02-08 12:52:07', 'm');
INSERT INTO `indexgoods` VALUES ('2', '男鞋', '333.00', 'img/h2.jpg', '2018-02-08 12:03:11', 'm');
INSERT INTO `indexgoods` VALUES ('3', '购物袋', '111.00', 'img/h3.jpg', '2018-02-08 12:06:12', 'm');
INSERT INTO `indexgoods` VALUES ('4', '手表', '666.00', 'img/h4.jpg', '2018-02-08 12:06:37', 'm');
INSERT INTO `indexgoods` VALUES ('5', '男羊毛衫', '111.00', 'img/h5.jpg', '2018-02-08 12:07:21', 'm');
INSERT INTO `indexgoods` VALUES ('6', '女鞋', '120.00', 'img/h6.jpg', '2018-02-08 12:07:50', 'm');
INSERT INTO `indexgoods` VALUES ('7', '项链', '666.00', 'img/h7.jpg', '2018-02-08 12:08:22', 'm');
INSERT INTO `indexgoods` VALUES ('8', '钱包', '10.00', 'img/h8.jpg', '2018-02-08 12:08:44', 'm');
INSERT INTO `indexgoods` VALUES ('9', '裙子', '11.00', 'img/h9.jpg', '2018-02-08 12:12:50', 'm');
INSERT INTO `indexgoods` VALUES ('10', '板鞋', '11.00', 'img/h10.jpg', '2018-02-08 12:12:53', 'm');
INSERT INTO `indexgoods` VALUES ('11', '耳机', '11.00', 'img/h11.jpg', '2018-02-08 12:52:09', 'm');
INSERT INTO `indexgoods` VALUES ('12', '风衣', '11.00', 'img/h12.jpg', '2018-02-08 12:52:12', 'm');
INSERT INTO `indexgoods` VALUES ('13', '皮带', '1.00', 'img/h13.jpg', '2018-02-08 12:52:17', 'm');
INSERT INTO `indexgoods` VALUES ('14', '女大衣', '1.00', 'img/h14.jpg', '2018-02-08 12:52:18', 'm');
INSERT INTO `indexgoods` VALUES ('15', '染发膏', '1.00', 'img/h15.jpg', '2018-02-08 12:52:21', 'm');
INSERT INTO `indexgoods` VALUES ('16', '女板鞋', '1.00', 'img/h16.jpg', '2018-02-08 12:52:28', 'm');

-- ----------------------------
-- Table structure for listgoods
-- ----------------------------
DROP TABLE IF EXISTS `listgoods`;
CREATE TABLE `listgoods` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `qty` int(11) NOT NULL DEFAULT '1',
  `description` varchar(255) DEFAULT NULL,
  `img` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `size` varchar(255) DEFAULT NULL,
  `add_date` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `brand` varchar(255) DEFAULT NULL COMMENT '商品品牌',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of listgoods
-- ----------------------------
INSERT INTO `listgoods` VALUES ('1', '女士提挎两用购物袋', '22100.00', '100', '女式', 'a1.jpg', '白色', '15ml', '2018-02-08 14:17:53', 'gucci');
INSERT INTO `listgoods` VALUES ('2', '拉杆旅行包', '12340.00', '23', '女式', 'a2.jpg', '黑色', '均码', '2018-02-08 14:17:56', 'aspinal of london');
INSERT INTO `listgoods` VALUES ('3', '女士大号链条包', '7030.00', '100', '女式', 'a3.jpg', '红色', '30ml', '2018-02-08 14:17:59', 'Aspinal of london');
INSERT INTO `listgoods` VALUES ('4', '女士链条包', '4567.00', '180', '女式', 'a4.jpg', '红色', '20ml', '2018-02-08 14:18:04', 'Tory Burch');
INSERT INTO `listgoods` VALUES ('5', '女士链条包 中号', '2599.00', '100', '女式', 'a5.jpg', '黑色', '均码', '2018-02-08 14:18:07', 'Tory Burch');
INSERT INTO `listgoods` VALUES ('6', 'PC拉杆箱28寸旅行箱', '2380.00', '50', '女式', 'a6.jpg', '金黄色', '均码', '2018-02-08 15:08:11', 'Michael Kors');
INSERT INTO `listgoods` VALUES ('7', '女士肩挎包 大号牛皮购物包', '1710.00', '100', '女式', 'a7.jpg', '黑色', '30ml', '2018-02-08 14:18:24', 'Michael Kors');
INSERT INTO `listgoods` VALUES ('8', '女士提挎两用包 牛皮杀手包', '1260.00', '100', '女式', 'a8.jpg', '紫色', '40ml', '2018-02-08 14:18:26', 'Michael Kors');
INSERT INTO `listgoods` VALUES ('9', '女士长柄购物袋', '1345.00', '300', '女式', 'a9.jpg', '玫瑰粉', '15ml', '2018-02-08 14:18:29', 'Longchamp');
INSERT INTO `listgoods` VALUES ('10', '中性牛皮经典条纹钥匙包', '999.00', '140', '中性', 'a10.jpg', '黑色', '均码', '2018-02-08 14:18:34', 'Bally');
INSERT INTO `listgoods` VALUES ('11', '女士提挎两用购物袋', '11000.00', '134', '女式', 'a11.jpg', '紫色', '均码', '2018-02-08 15:07:46', 'Michael Kors');
INSERT INTO `listgoods` VALUES ('12', '拉杆旅行包', '12345.00', '234', '中性', 'a12.jpg', '蓝色', '均码', '2018-02-08 15:07:32', 'Tory Burch');
INSERT INTO `listgoods` VALUES ('13', '女士大号链条包', '34567.00', '1345', '男式', 'a13.jpg', '白色', '150ml', '2018-02-08 15:07:47', 'Michael Kors');
INSERT INTO `listgoods` VALUES ('14', '女士链条包', '3452.00', '1231', '男式', 'a14.jpg', '红色', '25ml', '2018-02-08 15:08:13', 'Michael Kors');
INSERT INTO `listgoods` VALUES ('15', '女士链条包 中号', '3452.00', '110', '男式', 'a15.jpg', '白色', '均码', '2018-02-08 15:07:33', 'Tory Burch');
INSERT INTO `listgoods` VALUES ('16', 'PC拉杆箱28寸旅行箱', '675.00', '10', '中性', 'a16.jpg', '黑色', '230ml', '2018-02-08 15:07:49', 'Michael Kors');
INSERT INTO `listgoods` VALUES ('17', '女士肩挎包 大号牛皮购物包', '4456.00', '213', '女式', 'a17.jpg', '土豪金', '1334ml', '2018-02-08 15:08:14', 'Michael Kors');
INSERT INTO `listgoods` VALUES ('18', '女士肩挎包 大号牛皮购物包', '3426.00', '234', '中性', 'a18.jpg', '玫瑰红', '213ml', '2018-02-08 15:07:34', 'Tory Burch');
INSERT INTO `listgoods` VALUES ('19', '女士长柄购物袋', '222.00', '324', '女式', 'a19.jpg', '蓝色', '300ml', '2018-02-08 15:07:50', 'Michael Kors');
INSERT INTO `listgoods` VALUES ('20', '中性牛皮经典条纹钥匙包', '4335.00', '123', '中性', 'a20.jpg', '蓝色', '200ml', '2018-02-08 15:08:15', 'Michael Kors');
INSERT INTO `listgoods` VALUES ('21', '女士肩挎包', '2345.00', '234', '女式', 'a21.jpg', '红色', '234ml', '2018-02-08 15:07:35', 'Tory Burch');
INSERT INTO `listgoods` VALUES ('22', '女士链条包', '1235.00', '10', '女式', 'a22.jpg', '绿色', '24ml', '2018-02-08 15:07:52', 'Michael Kors');
INSERT INTO `listgoods` VALUES ('23', '拉杆旅行包', '456.00', '13', '女式', 'a23.jpg', '金黄色', '350ml', '2018-02-08 15:07:36', 'Tory Burch');
INSERT INTO `listgoods` VALUES ('24', 'PC拉杆箱28寸旅行箱', '5678.00', '109', '中性', 'a24.jpg', '黄色', '567', '2018-02-08 15:07:52', 'Michael Kors');
INSERT INTO `listgoods` VALUES ('25', '大号牛皮购物包', '2134.00', '177', '中性', 'a25.jpg', '白色', '345', '2018-02-08 15:08:17', 'Michael Kors');
INSERT INTO `listgoods` VALUES ('26', '拉杆旅行包', '21345.00', '154', '男式', 'a26.jpg', '黄色', '234', '2018-02-08 15:07:53', 'Michael Kors');
INSERT INTO `listgoods` VALUES ('27', '女士提挎两用购物袋', '2134.00', '133', '女式', 'a27.jpg', '蓝色', '均码', '2018-02-08 15:07:37', 'Tory Burch');
INSERT INTO `listgoods` VALUES ('28', '女士提挎两用购物袋', '2134.00', '165', '女式', 'a28.jpg', '白色', '均码', '2018-02-08 15:07:55', 'Michael Kors');
INSERT INTO `listgoods` VALUES ('29', '拉杆旅行包', '3245.00', '123', '男式', 'a29.jpg', '黄色', '均码', '2018-02-08 15:07:56', 'Michael Kors');
INSERT INTO `listgoods` VALUES ('30', '女士链条包', '7665.00', '424', '女式', 'a30.jpg', '黄色', '434ml', '2018-02-08 15:07:37', 'Tory Burch');
INSERT INTO `listgoods` VALUES ('31', '牛皮杀手包', '4343.00', '323', '女式', 'a31.jpg', '灰色', '324 ml', '2018-02-08 15:08:18', 'Michael Kors');
INSERT INTO `listgoods` VALUES ('32', '女士长柄购物袋', '3432.00', '333', '女式', 'a32.jpg', '红色', '50ml', '2018-02-08 15:08:21', 'Michael Kors');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'xiaoming', '123', '123@qq.com', '13509090990');
INSERT INTO `users` VALUES ('2', 'xiaohua', '123', '234@qq.com', '13567676770');
INSERT INTO `users` VALUES ('3', 'xiaoqiang', '123', '345@qq.com', '13578787880');
INSERT INTO `users` VALUES ('4', 'xiaomei', '123', '456@qq.com', '13566667780');
INSERT INTO `users` VALUES ('5', 'xiaoli', '123', '567@qq.com', '13543434332');
INSERT INTO `users` VALUES ('6', '13580455970', 'd41d8cd98f00b204e9800998ecf8427e', null, null);
INSERT INTO `users` VALUES ('7', '', 'd41d8cd98f00b204e9800998ecf8427e', null, null);
INSERT INTO `users` VALUES ('8', '13580304970', 'd41d8cd98f00b204e9800998ecf8427e', null, null);
INSERT INTO `users` VALUES ('9', '13500304567', 'd41d8cd98f00b204e9800998ecf8427e', null, null);
INSERT INTO `users` VALUES ('10', '13580345678', 'd41d8cd98f00b204e9800998ecf8427e', null, null);
INSERT INTO `users` VALUES ('11', '13580809789', 'd41d8cd98f00b204e9800998ecf8427e', null, null);
SET FOREIGN_KEY_CHECKS=1;
