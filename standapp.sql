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
  `avatar_id` int(4) NOT NULL,
  `author_name` varchar(15) NOT NULL,
  `audio_name` varchar(30) NOT NULL,
  `audio_duration` varchar(30) NOT NULL,
  `date_added` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `user_id` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `audio` (`audio_id`, `avatar_id`, `author_name`, `audio_name`, `audio_duration`, `date_added`, `user_id`) VALUES
(1, 0, '', 'im upset', '3:25', '0000-00-00 00:00:00.000000', 3),
(2, 0, '', 'whatever', '3:12', '0000-00-00 00:00:00.000000', 4),
(3, 0, '', 'test.mp3', '3:23', '0000-00-00 00:00:00.000000', 3),
(4, 0, '', 'test.mp3', '3:23', '2018-08-29 21:55:34.578000', 3),
(27, 0, '', '', '', '2018-09-04 19:35:35.116950', 0),
(28, 0, '', '', '', '2018-09-04 19:35:36.266644', 0),
(29, 0, '', '', '', '2018-09-04 19:35:36.557565', 0),
(30, 0, '', '', '', '2018-09-04 19:35:37.054314', 0),
(31, 0, '', 'heloo', '500', '2018-09-04 23:00:52.194252', 120),
(32, 0, '', 'heloo', '500', '2018-09-04 23:00:58.352384', 120),
(33, 0, '', 'heloo', '500', '2018-09-04 23:00:58.459653', 120),
(34, 0, '', 'heloo', '500', '2018-09-04 23:00:59.327965', 120),
(35, 0, '', 'heloo', '500', '2018-09-04 23:03:10.598895', 120),
(36, 0, '', 'heloo', '500', '2018-09-04 23:03:11.166870', 120),
(37, 0, '', 'heloo', '500', '2018-09-04 23:03:11.258222', 120),
(38, 0, '', 'heloo', '500', '2018-09-04 23:03:15.107214', 120),
(120, 0, '', 'heloo', '500', '2018-09-04 23:04:36.229394', 0),
(121, 5, '', 'heloo', '500', '2018-09-04 23:17:13.077788', 0),
(122, 5, '', 'heloo', '500', '2018-09-04 23:17:13.729545', 0),
(123, 5, '', 'heloo', '500', '2018-09-04 23:17:13.842701', 0),
(124, 5, '', 'heloo', '500', '2018-09-04 23:17:14.162279', 0),
(125, 5, 'matt', 'heloo', '500', '2018-09-04 23:18:48.292820', 0),
(126, 5, 'matt', 'heloo', '500', '2018-09-04 23:18:49.272473', 0),
(127, 5, 'matt', 'heloo', '500', '2018-09-04 23:18:49.683385', 0),
(128, 5, 'matt', 'heloo', '500', '2018-09-04 23:18:50.027704', 0),
(129, 5, 'matt', 'heloo', '', '2018-09-04 23:21:40.394928', 0),
(130, 5, 'matt', 'heloo', '', '2018-09-04 23:21:42.240737', 0),
(131, 5, 'matt', 'heloo', '', '2018-09-04 23:21:42.382678', 0),
(132, 5, 'matt', 'heloo', '', '2018-09-04 23:21:42.730851', 0),
(133, 5, 'matt', 'heloo', '', '2018-09-04 23:23:04.847471', 0),
(134, 5, 'matt', 'heloo', '', '2018-09-04 23:23:06.223629', 0),
(135, 5, 'matt', 'heloo', '', '2018-09-04 23:23:06.482404', 0),
(136, 5, 'matt', 'heloo', '', '2018-09-04 23:23:06.848550', 0),
(137, 5, 'matt', 'heloo', '500', '2018-09-04 23:23:40.913083', 0),
(138, 5, 'matt', 'heloo', '500', '2018-09-04 23:23:41.447054', 0),
(139, 5, 'matt', 'heloo', '500', '2018-09-04 23:23:41.548812', 0),
(140, 5, 'matt', 'heloo', '500', '2018-09-04 23:23:42.370805', 0),
(141, 5, 'matt', 'heloo', '500', '2018-09-04 23:25:16.118219', 0),
(142, 5, 'matt', 'heloo', '500', '2018-09-04 23:25:16.882622', 0),
(143, 5, 'matt', 'heloo', '500', '2018-09-04 23:25:18.190330', 0),
(144, 5, 'matt', 'heloo', '500', '2018-09-04 23:25:18.575084', 0),
(145, 0, '', '', '', '2018-09-04 23:26:52.740820', 0),
(146, 0, '', '', '', '2018-09-04 23:26:54.212518', 0),
(147, 0, '', '', '', '2018-09-04 23:26:54.319548', 0),
(148, 0, '', '', '', '2018-09-04 23:26:54.639339', 0),
(149, 0, '', '', '', '2018-09-04 23:27:30.475380', 0),
(150, 0, '', '', '', '2018-09-04 23:27:30.888509', 0),
(151, 0, '', '', '', '2018-09-04 23:27:30.983456', 0),
(152, 0, '', '', '', '2018-09-04 23:27:34.386320', 0),
(153, 5, 'matt', 'heloo', '500', '2018-09-04 23:28:39.764183', 0),
(154, 5, 'matt', 'heloo', '500', '2018-09-04 23:28:40.254963', 0),
(155, 5, 'matt', 'heloo', '500', '2018-09-04 23:28:40.388612', 0),
(156, 5, 'matt', 'heloo', '500', '2018-09-04 23:28:40.875215', 0);

DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `comment_id` int(4) NOT NULL,
  `comment` varchar(150) NOT NULL,
  `comment_time` decimal(8,0) NOT NULL
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
  `avatar` int(4) NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `date_joined` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

DROP TABLE IF EXISTS `user_feedback`;
CREATE TABLE `user_feedback` (
  `feedback_id` int(6) NOT NULL,
  `likes` int(11) NOT NULL COMMENT 'likes',
  `audio_id` int(4) NOT NULL COMMENT 'audi_id'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `user_feedback` (`feedback_id`, `likes`, `audio_id`) VALUES
(1, 0, 1),
(2, 0, 2),
(3, 3, 3);


ALTER TABLE `audio`
  ADD PRIMARY KEY (`audio_id`);

ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`);

ALTER TABLE `hearts`
  ADD PRIMARY KEY (`heart_id`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `user_feedback`
  ADD PRIMARY KEY (`feedback_id`);


ALTER TABLE `audio`
  MODIFY `audio_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=157;
ALTER TABLE `comments`
  MODIFY `comment_id` int(4) NOT NULL AUTO_INCREMENT;
ALTER TABLE `hearts`
  MODIFY `heart_id` int(4) NOT NULL AUTO_INCREMENT;
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `user_feedback`
  MODIFY `feedback_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
