-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: easy_bookings
-- ------------------------------------------------------
-- Server version	5.5.5-10.11.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `avis`
--

DROP TABLE IF EXISTS `avis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `avis` (
  `idAvis` int(11) NOT NULL AUTO_INCREMENT,
  `note` int(11) NOT NULL,
  `commentaire` varchar(100) NOT NULL,
  PRIMARY KEY (`idAvis`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avis`
--

LOCK TABLES `avis` WRITE;
/*!40000 ALTER TABLE `avis` DISABLE KEYS */;
INSERT INTO `avis` VALUES (1,4,'Bon');
/*!40000 ALTER TABLE `avis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offres`
--

DROP TABLE IF EXISTS `offres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `offres` (
  `id` varchar(100) NOT NULL,
  `nom_offre` varchar(100) NOT NULL,
  `vol` longtext NOT NULL,
  `hotel` longtext NOT NULL,
  `id_agence` varchar(100) NOT NULL,
  `image` longtext NOT NULL,
  `total_price` float NOT NULL,
  `categorie` varchar(100) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `offres_FK` (`id_agence`),
  CONSTRAINT `offres_FK` FOREIGN KEY (`id_agence`) REFERENCES `utilisateurs` (`uuid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offres`
--

LOCK TABLES `offres` WRITE;
/*!40000 ALTER TABLE `offres` DISABLE KEYS */;
INSERT INTO `offres` VALUES ('c0c95f8a-6ba1-4547-9abf-9e7f3bf38e7d','Dubai on Hand','{\"id\":\"0eae25c34caf0000c4b0b468_0|25c321dd4cb04cb23aebf896_0|25c321dd4cb04cb23aebf896_1|25c30eae4cb20000f9a51a14_0\",\"flyFrom\":\"YUL\",\"flyTo\":\"DXB\",\"cityFrom\":\"Montreal\",\"cityCodeFrom\":\"YMQ\",\"cityTo\":\"Dubai\",\"cityCodeTo\":\"DXB\",\"countryFrom\":{\"code\":\"CA\",\"name\":\"Canada\"},\"countryTo\":{\"code\":\"AE\",\"name\":\"United Arab Emirates\"},\"local_departure\":\"2023-10-01T21:25:00.000Z\",\"utc_departure\":\"2023-10-02T01:25:00.000Z\",\"local_arrival\":\"2023-10-02T22:35:00.000Z\",\"utc_arrival\":\"2023-10-02T18:35:00.000Z\",\"nightsInDest\":2,\"quality\":68889.849501,\"distance\":10631.31,\"duration\":{\"departure\":61800,\"return\":69900,\"total\":131700},\"price\":72148.9353,\"conversion\":{\"EUR\":67623.186001,\"USD\":72148.9353},\"fare\":{\"adults\":18037.23,\"children\":18037.23,\"infants\":18037.23},\"price_dropdown\":{\"base_fare\":72234.2853,\"fees\":-85.35},\"bags_price\":{\"1\":0,\"2\":628.849},\"baglimit\":{\"hand_height\":35,\"hand_length\":55,\"hand_weight\":10,\"hand_width\":23,\"hold_dimensions_sum\":158,\"hold_height\":52,\"hold_length\":78,\"hold_weight\":23,\"hold_width\":28,\"personal_item_height\":30,\"personal_item_length\":40,\"personal_item_weight\":2,\"personal_item_width\":15},\"availability\":{\"seats\":9},\"airlines\":[\"AF\",\"AC\",\"DL\"],\"route\":[{\"id\":\"0eae25c34caf0000c4b0b468_0\",\"combination_id\":\"0eae25c34caf0000c4b0b468\",\"flyFrom\":\"YUL\",\"flyTo\":\"CDG\",\"cityFrom\":\"Montreal\",\"cityCodeFrom\":\"YMQ\",\"cityTo\":\"Paris\",\"cityCodeTo\":\"PAR\",\"local_departure\":\"2023-10-01T21:25:00.000Z\",\"utc_departure\":\"2023-10-02T01:25:00.000Z\",\"local_arrival\":\"2023-10-02T10:20:00.000Z\",\"utc_arrival\":\"2023-10-02T08:20:00.000Z\",\"airline\":\"AC\",\"flight_no\":870,\"operating_carrier\":\"AC\",\"operating_flight_no\":\"870\",\"fare_basis\":\"CRCEO\",\"fare_category\":\"C\",\"fare_classes\":\"C\",\"fare_family\":\"\",\"return\":0,\"bags_recheck_required\":false,\"vi_connection\":false,\"guarantee\":false,\"equipment\":null,\"vehicle_type\":\"aircraft\"},{\"id\":\"25c321dd4cb04cb23aebf896_0\",\"combination_id\":\"25c321dd4cb04cb23aebf896\",\"flyFrom\":\"CDG\",\"flyTo\":\"DXB\",\"cityFrom\":\"Paris\",\"cityCodeFrom\":\"PAR\",\"cityTo\":\"Dubai\",\"cityCodeTo\":\"DXB\",\"local_departure\":\"2023-10-02T13:50:00.000Z\",\"utc_departure\":\"2023-10-02T11:50:00.000Z\",\"local_arrival\":\"2023-10-02T22:35:00.000Z\",\"utc_arrival\":\"2023-10-02T18:35:00.000Z\",\"airline\":\"AF\",\"flight_no\":662,\"operating_carrier\":\"AF\",\"operating_flight_no\":\"662\",\"fare_basis\":\"JS50AEN1\",\"fare_category\":\"C\",\"fare_classes\":\"J\",\"fare_family\":\"\",\"return\":0,\"bags_recheck_required\":true,\"vi_connection\":true,\"guarantee\":true,\"equipment\":null,\"vehicle_type\":\"aircraft\"},{\"id\":\"25c321dd4cb04cb23aebf896_1\",\"combination_id\":\"25c321dd4cb04cb23aebf896\",\"flyFrom\":\"DXB\",\"flyTo\":\"CDG\",\"cityFrom\":\"Dubai\",\"cityCodeFrom\":\"DXB\",\"cityTo\":\"Paris\",\"cityCodeTo\":\"PAR\",\"local_departure\":\"2023-10-04T00:40:00.000Z\",\"utc_departure\":\"2023-10-03T20:40:00.000Z\",\"local_arrival\":\"2023-10-04T06:00:00.000Z\",\"utc_arrival\":\"2023-10-04T04:00:00.000Z\",\"airline\":\"AF\",\"flight_no\":655,\"operating_carrier\":\"AF\",\"operating_flight_no\":\"655\",\"fare_basis\":\"DS53DEK1\",\"fare_category\":\"C\",\"fare_classes\":\"D\",\"fare_family\":\"\",\"return\":1,\"bags_recheck_required\":false,\"vi_connection\":false,\"guarantee\":false,\"equipment\":null,\"vehicle_type\":\"aircraft\"},{\"id\":\"25c30eae4cb20000f9a51a14_0\",\"combination_id\":\"25c30eae4cb20000f9a51a14\",\"flyFrom\":\"CDG\",\"flyTo\":\"YUL\",\"cityFrom\":\"Paris\",\"cityCodeFrom\":\"PAR\",\"cityTo\":\"Montreal\",\"cityCodeTo\":\"YMQ\",\"local_departure\":\"2023-10-04T10:30:00.000Z\",\"utc_departure\":\"2023-10-04T08:30:00.000Z\",\"local_arrival\":\"2023-10-04T12:05:00.000Z\",\"utc_arrival\":\"2023-10-04T16:05:00.000Z\",\"airline\":\"DL\",\"flight_no\":8373,\"operating_carrier\":\"AF\",\"operating_flight_no\":\"346\",\"fare_basis\":\"DS15BBJB\",\"fare_category\":\"C\",\"fare_classes\":\"D\",\"fare_family\":\"\",\"return\":1,\"bags_recheck_required\":true,\"vi_connection\":true,\"guarantee\":true,\"equipment\":null,\"vehicle_type\":\"aircraft\"}],\"booking_token\":\"Gx0WecfqvKk_HcP-d3oCLk7Qk99dnaoEZJrDARDd15EnPxe2kOQy6XYGcic1ESB1-YX-SoztTzJuaVn5gH8WGSfS5Zsp803T7PTaY1nhs7n-xRqiZ5-hmwKjslLqnHhUGUBeNv9DH2_yatVzunN0EpRSTEsMzCUGuVx4p6KLMhaml3n-jqEPjtRv_-pkTD7RTrOw-s5pJKcxIfoqFPmEYA_h59oCdaV3iip9clx8PpYI-M71JECI-pHZVJyC3mk6W_PYJqyEETUH2bhf-PIt2an35DxnckvEeH91tOxxAe6DjEg5Ud7AATrYc6VSMkxAUnbR3qDCBzH_pbnoN89vmIgRh3df86b33hplP66PvU0SpWjk8qoBHVYMnwv9WrVu6TLSm19e36UmByWZF56_EtbAgw-fFd6CR2KlEeYZ23r9M5GBeFCs0i5Lwhh_9uIF6QBWr6kn130Hb9bRswIvmOrygMxmdhsgBUIZXCVDy8IzLQbigOz7KHk9nImkr_fmTOeIv_ngEf_mHT6jVAkOdB4JmsqADcLK34pXTTEA8cVybuH5DXoTlnnCKuyg9nvDMUC8DnOcXPB5t4BvhwhTBYC1OkuQvuG9Ir-Azt2m_DhJfaZWKjIqSbx29BftBwMlHok4990CLwyccQlg6dALb30Q4yiwZQtj6ZuVMEyJxhVBOEyW9jb9Bh7RFXIj5hc3478YUbvdWMkdrqrhMnP7qgWHRKrYbmpfFSFtXQdkjiO1p8Z-Vn3ipOCn3yamiBqJsJBrhWfllBKYpVTdDt_3JDByPMUcWvs2IzVuLbECV_yg=\",\"facilitated_booking_available\":true,\"pnr_count\":3,\"has_airport_change\":false,\"technical_stops\":0,\"throw_away_ticketing\":false,\"hidden_city_ticketing\":false,\"virtual_interlining\":true}','{\"distances\":[{\"icon_set\":null,\"icon_name\":\"bui_geo_pin\",\"text\":\"‎Barsha Heights (Tecom) ‬ • ‎15 km from centre‬\"},{\"icon_set\":null,\"text\":\"‎This property has free cots available‬\",\"icon_name\":\"bui_baby_cot\"}],\"preferred\":1,\"cc1\":\"ae\",\"distance_to_cc_formatted\":\"15 km\",\"block_ids\":[\"543370405_376311907_2_42_0\"],\"default_language\":\"xu\",\"price_is_final\":1,\"ufi\":-782831,\"countrycode\":\"ae\",\"accommodation_type\":204,\"in_best_district\":0,\"default_wishlist_name\":\"Dubai\",\"cant_book\":0,\"latitude\":25.0921278646245,\"class_is_estimated\":0,\"is_geo_rate\":1,\"is_mobile_deal\":0,\"city\":\"Dubai\",\"currency_code\":\"AED\",\"children_not_allowed\":0,\"native_ads_tracking\":\"\",\"address_trans\":\"First Al Khail Street Tecom, Barsha Heights,\",\"cc_required\":1,\"badges\":[],\"is_free_cancellable\":1,\"hotel_include_breakfast\":0,\"mobile_discount_percentage\":0,\"bwallet\":{\"hotel_eligibility\":0},\"address\":\"First Al Khail Street Tecom, Barsha Heights,\",\"timezone\":\"Asia/Dubai\",\"hotel_id\":5433704,\"distance_to_cc\":\"15.05\",\"soldout\":0,\"city_in_trans\":\"in Dubai\",\"wishlist_count\":0,\"is_beach_front\":0,\"url\":\"https://www.booking.com/hotel/ae/millennium-place-barsha-heights.html\",\"city_trans\":\"Dubai\",\"main_photo_id\":237468242,\"accommodation_type_name\":\"Hotel\",\"is_no_prepayment_block\":0,\"genius_discount_percentage\":0,\"review_nr\":8275,\"hotel_name_trans\":\"Millennium Place Barsha Heights Hotel\",\"unit_configuration_label\":\"<b>Hotel room</b>: 1 bed\",\"selected_review_topic\":null,\"country_trans\":\"United Arab Emirates\",\"id\":\"property_card_5433704\",\"zip\":\"\",\"district\":\"Barsha Heights (Tecom) \",\"has_swimming_pool\":1,\"has_free_parking\":1,\"hotel_name\":\"Millennium Place Barsha Heights Hotel\",\"distance\":\"15.02\",\"native_ad_id\":\"\",\"is_city_center\":0,\"main_photo_url\":\"https://cf.bstatic.com/xdata/images/hotel/square60/237468242.jpg?k=fb30b778257e83900aef3ea3ecd2cdde2ec821255d891e757e114a1f34fd3e41&o=\",\"review_score_word\":\"Very good\",\"checkout\":{\"from\":\"\",\"until\":\"12:00\"},\"updated_checkin\":null,\"review_score\":8.3,\"extended\":0,\"updated_checkout\":null,\"type\":\"property_card\",\"matching_units_configuration\":{\"matching_units_common_config\":{\"localized_area\":null,\"unit_type_id\":9}},\"is_genius_deal\":0,\"hotel_facilities\":\"497,446,16,6,422,185,466,305,205,418,457,110,437,52,421,51,496,20,199,486,467,189,159,64,124,15,258,436,213,109,198,81,406,188,490,454,28,220,484,25,117,27,158,91,161,494,23,450,3,443,2,504,433,453,440,182,425,500,464,419,172,493,181,444,301,133,451,107,492,160,222,53,5,221,119,452,76,491,144,257,11,58,134,73,12,498,442,75,462,129,501,211,488,304,458,163,78,184,502,438,194,461,420,445,408,48,96,489,22,465,186,424,43,459,176,86,104,47,46,240,253,495,449,8,44,187,485,423,244,21,455,118,219\",\"checkin\":{\"from\":\"14:00\",\"until\":\"00:00\"},\"longitude\":55.1762310122757,\"hotel_has_vb_boost\":0,\"city_name_en\":\"Dubai\",\"district_id\":2427,\"min_total_price\":398.18,\"is_smart_deal\":0,\"class\":4,\"preferred_plus\":1,\"native_ads_cpc\":0,\"composite_price_breakdown\":{\"net_amount\":{\"value\":312.8,\"currency\":\"AED\"},\"all_inclusive_amount\":{\"value\":398.18,\"currency\":\"AED\"},\"excluded_amount\":{\"currency\":\"AED\",\"value\":0},\"gross_amount_per_night\":{\"currency\":\"AED\",\"value\":398.18},\"benefits\":[],\"gross_amount\":{\"currency\":\"AED\",\"value\":398.18},\"items\":[{\"base\":{\"kind\":\"percentage\",\"percentage\":5},\"details\":\"5 % VAT\",\"kind\":\"charge\",\"inclusion_type\":\"included\",\"item_amount\":{\"value\":17.204,\"currency\":\"AED\"},\"name\":\"VAT\"},{\"inclusion_type\":\"included\",\"kind\":\"charge\",\"name\":\"Service charge\",\"item_amount\":{\"currency\":\"AED\",\"value\":31.28},\"details\":\"10 % Service charge\",\"base\":{\"kind\":\"percentage\",\"percentage\":10}},{\"base\":{\"kind\":\"per_night\",\"base_amount\":15},\"details\":null,\"kind\":\"charge\",\"inclusion_type\":\"included\",\"item_amount\":{\"currency\":\"AED\",\"value\":15},\"name\":\"Tourism fee\"},{\"item_amount\":{\"value\":21.896,\"currency\":\"AED\"},\"name\":\"Municipality fee\",\"kind\":\"charge\",\"inclusion_type\":\"included\",\"base\":{\"kind\":\"percentage\",\"percentage\":7},\"details\":\"7 % Municipality fee\"}],\"included_taxes_and_charges_amount\":{\"currency\":\"AED\",\"value\":85.38},\"gross_amount_hotel_currency\":{\"value\":398.18,\"currency\":\"AED\"},\"charges_details\":{\"translated_copy\":\"Includes taxes and charges\",\"amount\":{\"currency\":\"AED\",\"value\":0},\"mode\":\"all_included\"},\"product_price_breakdowns\":[{\"net_amount\":{\"value\":312.8,\"currency\":\"AED\"},\"excluded_amount\":{\"currency\":\"AED\",\"value\":0},\"all_inclusive_amount\":{\"value\":398.18,\"currency\":\"AED\"},\"gross_amount_per_night\":{\"currency\":\"AED\",\"value\":398.18},\"benefits\":[],\"included_taxes_and_charges_amount\":{\"value\":85.38,\"currency\":\"AED\"},\"items\":[{\"inclusion_type\":\"included\",\"kind\":\"charge\",\"name\":\"VAT\",\"item_amount\":{\"currency\":\"AED\",\"value\":17.204},\"details\":\"5 % VAT\",\"base\":{\"percentage\":5,\"kind\":\"percentage\"}},{\"item_amount\":{\"value\":15,\"currency\":\"AED\"},\"name\":\"Tourism fee\",\"kind\":\"charge\",\"inclusion_type\":\"included\",\"base\":{\"kind\":\"per_night\",\"base_amount\":15},\"details\":null},{\"item_amount\":{\"value\":31.28,\"currency\":\"AED\"},\"name\":\"Service charge\",\"kind\":\"charge\",\"inclusion_type\":\"included\",\"base\":{\"percentage\":10,\"kind\":\"percentage\"},\"details\":\"10 % Service charge\"},{\"kind\":\"charge\",\"inclusion_type\":\"included\",\"item_amount\":{\"value\":21.896,\"currency\":\"AED\"},\"name\":\"Municipality fee\",\"base\":{\"kind\":\"percentage\",\"percentage\":7},\"details\":\"7 % Municipality fee\"}],\"gross_amount\":{\"currency\":\"AED\",\"value\":398.18},\"gross_amount_hotel_currency\":{\"value\":398.18,\"currency\":\"AED\"},\"charges_details\":{\"amount\":{\"currency\":\"AED\",\"value\":0},\"translated_copy\":\"Includes taxes and charges\",\"mode\":\"all_included\"}}]},\"districts\":\"2427\",\"review_recommendation\":\"\",\"price_breakdown\":{\"all_inclusive_price\":398.18,\"has_incalculable_charges\":0,\"sum_excluded_raw\":\"0.00\",\"gross_price\":398.18,\"has_tax_exceptions\":0,\"has_fine_print_charges\":0,\"currency\":\"AED\"},\"currencycode\":\"AED\",\"max_photo_url\":\"https://cf.bstatic.com/xdata/images/hotel/max1280x900/237468242.jpg?k=fb30b778257e83900aef3ea3ecd2cdde2ec821255d891e757e114a1f34fd3e41&o=\",\"max_1440_photo_url\":\"https://cf.bstatic.com/xdata/images/hotel/1440x1440/237468242.jpg?k=fb30b778257e83900aef3ea3ecd2cdde2ec821255d891e757e114a1f34fd3e41&o=\"}','2ab07197-f549-4907-a5b0-5cd4708616a7','https://images.pexels.com/photos/1467300/pexels-photo-1467300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',72256.4,'populaire',NULL);
/*!40000 ALTER TABLE `offres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservations`
--

DROP TABLE IF EXISTS `reservations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `reservations` (
  `id` varchar(100) NOT NULL,
  `id_offre` varchar(100) NOT NULL,
  `id_client` varchar(100) NOT NULL,
  `prix_reservation` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `reservations_FK` (`id_offre`),
  KEY `reservations_FK_1` (`id_client`),
  CONSTRAINT `reservations_FK` FOREIGN KEY (`id_offre`) REFERENCES `offres` (`id`),
  CONSTRAINT `reservations_FK_1` FOREIGN KEY (`id_client`) REFERENCES `utilisateurs` (`uuid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservations`
--

LOCK TABLES `reservations` WRITE;
/*!40000 ALTER TABLE `reservations` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utilisateurs`
--

DROP TABLE IF EXISTS `utilisateurs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `utilisateurs` (
  `uuid` varchar(100) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) DEFAULT NULL,
  `role` varchar(100) NOT NULL,
  `tel` varchar(100) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `mdp` varchar(100) NOT NULL,
  `statue` varchar(100) NOT NULL DEFAULT 'verified',
  `profile_image` longtext DEFAULT 'https://images.pexels.com/photos/14760616/pexels-photo-14760616.jpeg',
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilisateurs`
--

LOCK TABLES `utilisateurs` WRITE;
/*!40000 ALTER TABLE `utilisateurs` DISABLE KEYS */;
INSERT INTO `utilisateurs` VALUES ('0c5804e3-48e8-4149-8a69-bada4a7aec37','','admin','admin','4389297883','admin@gmail.com','1234....','verified','https://images.pexels.com/photos/14760616/pexels-photo-14760616.jpeg'),('2ab07197-f549-4907-a5b0-5cd4708616a7','','St louis Agency','agence','4389297883','stlou@gmail.com','1234....','verified','https://images.pexels.com/photos/14760616/pexels-photo-14760616.jpeg'),('31b8ffe7-72b9-4daf-aa99-be653bda60c7','Doe','john','client','4389297883','j@gmail.com','cGF1UGhvbzhP','verified','https://images.pexels.com/photos/14760616/pexels-photo-14760616.jpeg'),('5525c429-a195-47fe-92d3-62dae4cb7d52','ADADJISSO','Kokouvi','client','4389297883','arn@gmail.com','Drawing9013$','verified','https://images.pexels.com/photos/14760616/pexels-photo-14760616.jpeg'),('5bef46db-df7c-47b8-aa8a-9185ac638366','Adadjisso','Arnold','client','4389297883','DavidMForbes39@yahoo.com','cGF1UGhvbzhP','verified','https://images.pexels.com/photos/14760616/pexels-photo-14760616.jpeg'),('60259aae-fe1e-4440-8dab-01ceeab176ca','Doe','john','client','4389297883','j@gmail.com','cGF1UGhvbzhP','verified','https://images.pexels.com/photos/14760616/pexels-photo-14760616.jpeg'),('795ed1d2-b7e4-4406-83d2-bd9482dad42f','Doe','john','client','4389297883','j@gmail.com','cGF1UGhvbzhP','verified','https://images.pexels.com/photos/14760616/pexels-photo-14760616.jpeg'),('899c4c66-efe8-49f2-83f0-0f67722ea837','Doe','john','client','4389297883','j@gmail.com','cGF1UGhvbzhP','verified','https://images.pexels.com/photos/14760616/pexels-photo-14760616.jpeg'),('92d6a827-fcdc-45c3-bcf1-2001a70ac73c','TestNom','TestPrenom','client','5141231234','kati-hafsa@hotmail.fr','kati123','verified','https://images.pexels.com/photos/14760616/pexels-photo-14760616.jpeg'),('98df8b85-eabe-484c-807d-a5b3d29fff2e','Fol','world Tour','agence','4389297883','wt@gmail.com','1234....','no-verified','https://images.pexels.com/photos/14760616/pexels-photo-14760616.jpeg'),('acd36252-0c88-4a91-855c-918d01740eec','Adadjisso','Arnold','client','4389297883','DavidMForbes39@yahoo.com','cGF1UGhvbzhP','verified','https://images.pexels.com/photos/14760616/pexels-photo-14760616.jpeg'),('f076dba6-db2c-4f57-a79d-fc66fbaacace','ELAOGDI','KHADIJA','client','5146632549','khadijaelaogdi2@gmail.com','katitest','verified','https://images.pexels.com/photos/14760616/pexels-photo-14760616.jpeg');
/*!40000 ALTER TABLE `utilisateurs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'easy_bookings'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-22  2:50:39
