-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: fazenda
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `animal`
--

DROP TABLE IF EXISTS `animal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `animal` (
  `id_animal` int NOT NULL AUTO_INCREMENT,
  `fk_localidade` int NOT NULL,
  `fk_classe_bovina` int NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `registro` varchar(255) DEFAULT NULL,
  `classe_registro` varchar(255) NOT NULL,
  `sexo` varchar(2) DEFAULT NULL,
  `data_n` date DEFAULT NULL,
  `data_cast` date DEFAULT NULL,
  `peso` decimal(7,3) DEFAULT NULL,
  `fk_racabovina` tinyint NOT NULL,
  PRIMARY KEY (`id_animal`),
  KEY `fk_localidade` (`fk_localidade`),
  KEY `fk_classe_bovina` (`fk_classe_bovina`),
  KEY `fk_racabovina` (`fk_racabovina`),
  CONSTRAINT `animal_ibfk_1` FOREIGN KEY (`fk_localidade`) REFERENCES `localidade` (`id_local`),
  CONSTRAINT `animal_ibfk_2` FOREIGN KEY (`fk_classe_bovina`) REFERENCES `classe_bovina` (`id_classe_bovina`),
  CONSTRAINT `animal_ibfk_3` FOREIGN KEY (`fk_racabovina`) REFERENCES `raca` (`id_racabovina`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `castracao_m`
--

DROP TABLE IF EXISTS `castracao_m`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `castracao_m` (
  `id_manejo` int NOT NULL,
  PRIMARY KEY (`id_manejo`),
  CONSTRAINT `castracao_m_ibfk_1` FOREIGN KEY (`id_manejo`) REFERENCES `manejo` (`id_manejo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `classe_bovina`
--

DROP TABLE IF EXISTS `classe_bovina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classe_bovina` (
  `id_classe_bovina` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar(255) NOT NULL,
  PRIMARY KEY (`id_classe_bovina`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `descricao_vacina`
--

DROP TABLE IF EXISTS `descricao_vacina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `descricao_vacina` (
  `id_manejo` int NOT NULL,
  `texto` varchar(255) NOT NULL,
  PRIMARY KEY (`id_manejo`),
  CONSTRAINT `descricao_vacina_ibfk_1` FOREIGN KEY (`id_manejo`) REFERENCES `vacina` (`id_manejo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `destino`
--

DROP TABLE IF EXISTS `destino`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `destino` (
  `fk_animal` int NOT NULL,
  `data_` date NOT NULL,
  `fim` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`fk_animal`),
  CONSTRAINT `destino_ibfk_1` FOREIGN KEY (`fk_animal`) REFERENCES `animal` (`id_animal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `identificacao`
--

DROP TABLE IF EXISTS `identificacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `identificacao` (
  `id_identificacao` int NOT NULL AUTO_INCREMENT,
  `fk_animal` int DEFAULT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `tipo` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id_identificacao`),
  KEY `fk_animal` (`fk_animal`),
  CONSTRAINT `identificacao_ibfk_1` FOREIGN KEY (`fk_animal`) REFERENCES `animal` (`id_animal`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `localidade`
--

DROP TABLE IF EXISTS `localidade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `localidade` (
  `id_local` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_local`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `manejo`
--

DROP TABLE IF EXISTS `manejo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manejo` (
  `id_manejo` int NOT NULL AUTO_INCREMENT,
  `fk_animal` int NOT NULL,
  `tipo_manejo` varchar(255) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `data_` date DEFAULT NULL,
  `peso` decimal(7,3) DEFAULT NULL,
  PRIMARY KEY (`id_manejo`),
  KEY `fk_animal` (`fk_animal`),
  CONSTRAINT `manejo_ibfk_1` FOREIGN KEY (`fk_animal`) REFERENCES `animal` (`id_animal`)
) ENGINE=InnoDB AUTO_INCREMENT=220 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pesagem`
--

DROP TABLE IF EXISTS `pesagem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pesagem` (
  `id_manejo` int NOT NULL,
  `peso` decimal(7,3) DEFAULT NULL,
  PRIMARY KEY (`id_manejo`),
  CONSTRAINT `pesagem_ibfk_1` FOREIGN KEY (`id_manejo`) REFERENCES `manejo` (`id_manejo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `raca`
--

DROP TABLE IF EXISTS `raca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `raca` (
  `nome` varchar(255) NOT NULL,
  `id_racabovina` tinyint NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_racabovina`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `vacina`
--

DROP TABLE IF EXISTS `vacina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacina` (
  `id_manejo` int NOT NULL,
  `dose_ml` int NOT NULL DEFAULT '0',
  `medicacao` varchar(255) DEFAULT 'Não atibuído',
  PRIMARY KEY (`id_manejo`),
  CONSTRAINT `vacina_ibfk_1` FOREIGN KEY (`id_manejo`) REFERENCES `manejo` (`id_manejo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-07  6:32:55
