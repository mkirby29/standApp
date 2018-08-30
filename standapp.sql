SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


DROP TABLE IF EXISTS `audio`;
CREATE TABLE `audio` (
  `audio_id` int(6) NOT NULL,
  `audio_name` varchar(30) NOT NULL,
  `audio_duration` varchar(30) NOT NULL,
  `date_added` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `user_id` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `hearts`;
CREATE TABLE `hearts` (
  `heart_id` int(4) NOT NULL,
  `filled/empty` int(2) NOT NULL,
  `feedback_id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `avatar_id` int(4) NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `date_joined` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

DROP TABLE IF EXISTS `user_feedback`;
CREATE TABLE `user_feedback` (
  `feedback_id` int(6) NOT NULL,
  `likes` int(11) NOT NULL COMMENT 'likes',
  `comments` varchar(150) NOT NULL,
  `audio_id` int(4) NOT NULL COMMENT 'audi_id'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


ALTER TABLE `audio`
  ADD PRIMARY KEY (`audio_id`);

ALTER TABLE `hearts`
  ADD PRIMARY KEY (`heart_id`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `user_feedback`
  ADD PRIMARY KEY (`feedback_id`);


ALTER TABLE `audio`
  MODIFY `audio_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
ALTER TABLE `hearts`
  MODIFY `heart_id` int(4) NOT NULL AUTO_INCREMENT;
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `user_feedback`
  MODIFY `feedback_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
