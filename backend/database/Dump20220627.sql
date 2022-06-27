-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: freshfood
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id_cart` bigint NOT NULL AUTO_INCREMENT,
  `id_user` bigint NOT NULL,
  `create_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_cart`),
  KEY `fk_id_user` (`id_user`),
  CONSTRAINT `fk_id_user` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,1,'2022-06-27 09:56:29',NULL),(2,2,'2022-06-27 09:56:29',NULL);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_item`
--

DROP TABLE IF EXISTS `cart_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_item` (
  `id_cart_item` bigint NOT NULL AUTO_INCREMENT,
  `id_cart` bigint NOT NULL,
  `id_product` bigint NOT NULL,
  `number_product` int NOT NULL,
  PRIMARY KEY (`id_cart_item`),
  KEY `fk_id_cart` (`id_cart`),
  KEY `fk_id_product` (`id_product`),
  CONSTRAINT `fk_id_cart` FOREIGN KEY (`id_cart`) REFERENCES `cart` (`id_cart`),
  CONSTRAINT `fk_id_product` FOREIGN KEY (`id_product`) REFERENCES `product` (`id_product`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_item`
--

LOCK TABLES `cart_item` WRITE;
/*!40000 ALTER TABLE `cart_item` DISABLE KEYS */;
INSERT INTO `cart_item` VALUES (1,1,5,1),(2,1,6,1);
/*!40000 ALTER TABLE `cart_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id_category` bigint NOT NULL AUTO_INCREMENT,
  `code_category` char(20) NOT NULL,
  `name_category` varchar(100) DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_category`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'GAO','Gạo','2022-06-27 09:56:29',NULL),(2,'HAISAN','Hải sản','2022-06-27 09:56:29',NULL),(3,'DOUONG','Đồ uống','2022-06-27 09:56:29',NULL),(4,'THIT','Thịt','2022-06-27 09:56:29',NULL),(5,'RAUCUQUA','Rau củ quả','2022-06-27 09:56:29',NULL);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image_product`
--

DROP TABLE IF EXISTS `image_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image_product` (
  `id_image_product` bigint NOT NULL AUTO_INCREMENT,
  `id_product` bigint NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_image_product`),
  KEY `fk_id_product_image` (`id_product`),
  CONSTRAINT `fk_id_product_image` FOREIGN KEY (`id_product`) REFERENCES `product` (`id_product`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image_product`
--

LOCK TABLES `image_product` WRITE;
/*!40000 ALTER TABLE `image_product` DISABLE KEYS */;
INSERT INTO `image_product` VALUES (1,1,'/assests/img/detailImgProducts/doUong/cocacola/1.jpg'),(2,1,'/assests/img/detailImgProducts/doUong/cocacola/2.jpg'),(3,1,'/assests/img/detailImgProducts/doUong/cocacola/3.jpg'),(4,2,'/assests/img/detailImgProducts/gao/gaoAnAn/1.png'),(5,2,'/assests/img/detailImgProducts/gao/gaoAnAn/2.jpg'),(6,2,'/assests/img/detailImgProducts/gao/gaoAnAn/3.png'),(7,3,'/assests/img/detailImgProducts/haiSan/tomSu/1.jpg'),(8,3,'/assests/img/detailImgProducts/haiSan/tomSu/2.jpg'),(9,3,'/assests/img/detailImgProducts/haiSan/tomSu/3.jpg'),(10,4,'/assests/img/detailImgProducts/thit/thitBoBap/1.jpg'),(11,4,'/assests/img/detailImgProducts/thit/thitBoBap/2.jpg'),(12,4,'/assests/img/detailImgProducts/thit/thitBoBap/3.jpg'),(13,5,'/assests/img/detailImgProducts/doUong/biaBudweiser/1.jpg'),(14,5,'/assests/img/detailImgProducts/doUong/biaBudweiser/2.jpg'),(15,5,'/assests/img/detailImgProducts/doUong/biaBudweiser/3.jpg'),(16,6,'/assests/img/detailImgProducts/haiSan/caNgu/1.jpg'),(17,6,'/assests/img/detailImgProducts/haiSan/caNgu/2.png'),(18,6,'/assests/img/detailImgProducts/haiSan/caNgu/3.jpg'),(19,7,'/assests/img/detailImgProducts/thit/thitHeo/1.jpg'),(20,7,'/assests/img/detailImgProducts/thit/thitHeo/2.jpg'),(21,7,'/assests/img/detailImgProducts/thit/thitHeo/3.jpg'),(22,8,'/assests/img/detailImgProducts/rauCuQua/caRot/1.jpg'),(23,8,'/assests/img/detailImgProducts/rauCuQua/caRot/2.jpg'),(24,8,'/assests/img/detailImgProducts/rauCuQua/caRot/3.jpg'),(25,9,'/assests/img/detailImgProducts/rauCuQua/tao/1.jpg'),(26,9,'/assests/img/detailImgProducts/rauCuQua/tao/2.png'),(27,9,'/assests/img/detailImgProducts/rauCuQua/tao/3.jpg'),(28,10,'/assests/img/detailImgProducts/rauCuQua/xaLach/1.jpg'),(29,10,'/assests/img/detailImgProducts/rauCuQua/xaLach/2.jpg'),(30,10,'/assests/img/detailImgProducts/rauCuQua/xaLach/3.png');
/*!40000 ALTER TABLE `image_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_item` (
  `id_order_item` bigint NOT NULL AUTO_INCREMENT,
  `id_order` bigint NOT NULL,
  `id_product` bigint NOT NULL,
  `number_product` int NOT NULL,
  PRIMARY KEY (`id_order_item`),
  KEY `fk_id_order` (`id_order`),
  KEY `fk_id_product_oi` (`id_product`),
  CONSTRAINT `fk_id_order` FOREIGN KEY (`id_order`) REFERENCES `order_product` (`id_order`),
  CONSTRAINT `fk_id_product_oi` FOREIGN KEY (`id_product`) REFERENCES `product` (`id_product`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_product`
--

DROP TABLE IF EXISTS `order_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_product` (
  `id_order` bigint NOT NULL AUTO_INCREMENT,
  `id_user` bigint NOT NULL,
  `id_voucher` bigint NOT NULL,
  `id_type_payment` bigint NOT NULL,
  `date_shipping` timestamp NOT NULL,
  `time_shipping` time NOT NULL,
  `fee_shipping` double NOT NULL,
  `create_date` timestamp NOT NULL,
  `modified_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_order`),
  KEY `fk_id_user_product` (`id_user`),
  KEY `fk_id_voucher` (`id_voucher`),
  KEY `fk_id_type_payment` (`id_type_payment`),
  CONSTRAINT `fk_id_type_payment` FOREIGN KEY (`id_type_payment`) REFERENCES `type_payment` (`id_type_payment`),
  CONSTRAINT `fk_id_user_product` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`),
  CONSTRAINT `fk_id_voucher` FOREIGN KEY (`id_voucher`) REFERENCES `voucher` (`id_voucher`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_product`
--

LOCK TABLES `order_product` WRITE;
/*!40000 ALTER TABLE `order_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id_product` bigint NOT NULL AUTO_INCREMENT,
  `name_product` varchar(100) NOT NULL,
  `decripstion` text,
  `price` double DEFAULT NULL,
  `thumnail` varchar(255) DEFAULT NULL,
  `id_category` bigint NOT NULL,
  `available` tinyint(1) DEFAULT '1',
  `create_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_date` timestamp NULL DEFAULT NULL,
  `createBy` varchar(255) DEFAULT NULL,
  `modifiedBy` varchar(255) DEFAULT NULL,
  `rate_discount` int DEFAULT '0',
  `id_unit` int NOT NULL,
  PRIMARY KEY (`id_product`),
  KEY `fk_id_category` (`id_category`),
  KEY `fk_id_unit` (`id_unit`),
  CONSTRAINT `fk_id_category` FOREIGN KEY (`id_category`) REFERENCES `category` (`id_category`),
  CONSTRAINT `fk_id_unit` FOREIGN KEY (`id_unit`) REFERENCES `unit` (`id_unit`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Gạo an an','Gạo dẻo thơm ngon',500000,'/assests/img/thumbnailProduct/gaoAnAn.jpg',1,1,'2022-06-27 09:56:29',NULL,NULL,NULL,0,1),(2,'Tôm sú lớn','Tôm xuất khẩu',500000,'/assests/img/thumbnailProduct/tomSu.jpg',2,1,'2022-06-27 09:56:29',NULL,NULL,NULL,0,1),(3,'Cocacola','Nước giải khát bán ế',300000,'/assests/img/thumbnailProduct/cocacola.jpg',3,1,'2022-06-27 09:56:29',NULL,NULL,NULL,0,2),(4,'Thịt bó bắp','Thịt bó bắp Mỹ',200000,'/assests/img/thumbnailProduct/thitBoBap.jpg',4,1,'2022-06-27 09:56:29',NULL,NULL,NULL,0,1),(5,'Bia Budweiser','Bia Đức lên men',500000,'/assests/img/thumbnailProduct/biaBudweiser.jpg',3,1,'2022-06-27 09:56:29',NULL,NULL,NULL,0,2),(6,'Thịt heo','Thịt heo sạch không chất tạo nạc',100000,'/assests/img/thumbnailProduct/thitHeo.jpg',4,1,'2022-06-27 09:56:29',NULL,NULL,NULL,0,1),(7,'Cá ngừ','Cá ngừ đánh băt bắng lưới',300000,'/assests/img/thumbnailProduct/caNgu.jpg',2,1,'2022-06-27 09:56:29',NULL,NULL,NULL,0,1),(8,'Cà rốt','Cà rốt Đà Lạt',50000,'/assests/img/thumbnailProduct/caRot.jpg',5,1,'2022-06-27 09:56:29',NULL,NULL,NULL,0,1),(9,'Xà lách','Xà lách siêu sạch',10000,'/assests/img/thumbnailProduct/xaLach.jpg',5,1,'2022-06-27 09:56:29',NULL,NULL,NULL,0,3),(10,'Táo','Táo siêu ngọt',50000,'/assests/img/thumbnailProduct/tao.jpg',5,1,'2022-06-27 09:56:29',NULL,NULL,NULL,0,1);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promotion`
--

DROP TABLE IF EXISTS `promotion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `promotion` (
  `id_promotion` bigint NOT NULL AUTO_INCREMENT,
  `name_promotion` varchar(255) DEFAULT NULL,
  `create_date` timestamp NOT NULL,
  `end_date` timestamp NOT NULL,
  `modified_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_promotion`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotion`
--

LOCK TABLES `promotion` WRITE;
/*!40000 ALTER TABLE `promotion` DISABLE KEYS */;
INSERT INTO `promotion` VALUES (1,'Ngày hội mua sắm','2022-06-27 09:56:29','2022-12-02 15:22:00',NULL);
/*!40000 ALTER TABLE `promotion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_payment`
--

DROP TABLE IF EXISTS `type_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type_payment` (
  `id_type_payment` bigint NOT NULL AUTO_INCREMENT,
  `name_payment` varchar(100) DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_type_payment`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_payment`
--

LOCK TABLES `type_payment` WRITE;
/*!40000 ALTER TABLE `type_payment` DISABLE KEYS */;
INSERT INTO `type_payment` VALUES (1,'Thanh toán tiền mặt','2022-06-27 09:56:29',NULL),(2,'Thanh toán bằng ví điện tử','2022-06-27 09:56:29',NULL),(3,'Thanh toán thẻ ngân hàng','2022-06-27 09:56:29',NULL),(4,'Thanh toán bằng quẹt thẻ','2022-06-27 09:56:29',NULL);
/*!40000 ALTER TABLE `type_payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unit`
--

DROP TABLE IF EXISTS `unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `unit` (
  `id_unit` int NOT NULL AUTO_INCREMENT,
  `code_unit` varchar(20) DEFAULT NULL,
  `name_unit` varchar(50) DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modifide_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_unit`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unit`
--

LOCK TABLES `unit` WRITE;
/*!40000 ALTER TABLE `unit` DISABLE KEYS */;
INSERT INTO `unit` VALUES (1,'Kg','Kg','2022-06-27 09:56:29',NULL),(2,'Thung','Thùng','2022-06-27 09:56:29',NULL),(3,'Bo','Bó','2022-06-27 09:56:29',NULL);
/*!40000 ALTER TABLE `unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id_user` bigint NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT '/assests/img/avt-user/default-user.png',
  `phone_number` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `password_user` varchar(100) NOT NULL,
  `is_delete` tinyint(1) DEFAULT '0',
  `create_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_date` timestamp NULL DEFAULT NULL,
  `id_groud_role` int DEFAULT '0',
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'A','Trần Văn','https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png','033333333','e@gmail.com','Phường 1 quận 2 thành phố 4','kkkeee',0,'2022-06-27 09:56:29',NULL,0),(2,'B','Trần Văn','https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png','033333333','e1gmail.com','Phường 1 quận 2 thành phố 4','kkkeee',0,'2022-06-27 09:56:29',NULL,0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_voucher`
--

DROP TABLE IF EXISTS `user_voucher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_voucher` (
  `id_user_voucher` bigint NOT NULL AUTO_INCREMENT,
  `id_user` bigint NOT NULL,
  `id_voucher` bigint NOT NULL,
  `available` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id_user_voucher`),
  KEY `fk_id_user_voucher` (`id_user`),
  KEY `fk_id_voucher_voucher` (`id_voucher`),
  CONSTRAINT `fk_id_user_voucher` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`),
  CONSTRAINT `fk_id_voucher_voucher` FOREIGN KEY (`id_voucher`) REFERENCES `voucher` (`id_voucher`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_voucher`
--

LOCK TABLES `user_voucher` WRITE;
/*!40000 ALTER TABLE `user_voucher` DISABLE KEYS */;
INSERT INTO `user_voucher` VALUES (1,1,2,1),(2,1,3,0);
/*!40000 ALTER TABLE `user_voucher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `voucher`
--

DROP TABLE IF EXISTS `voucher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `voucher` (
  `id_voucher` bigint NOT NULL AUTO_INCREMENT,
  `id_promotion` bigint NOT NULL,
  `code_voucher` char(255) NOT NULL,
  `time_out` time NOT NULL,
  PRIMARY KEY (`id_voucher`),
  KEY `fk_id_promotion` (`id_promotion`),
  CONSTRAINT `fk_id_promotion` FOREIGN KEY (`id_promotion`) REFERENCES `promotion` (`id_promotion`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `voucher`
--

LOCK TABLES `voucher` WRITE;
/*!40000 ALTER TABLE `voucher` DISABLE KEYS */;
INSERT INTO `voucher` VALUES (1,1,'FFFEWW12','120:12:12'),(2,1,'PLGGTTT12','400:12:12'),(3,1,'FENBEZ24','300:12:12'),(4,1,'FGRR4F2','200:12:12');
/*!40000 ALTER TABLE `voucher` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-27 16:58:36
