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
  `id` int(6) NOT NULL,
  `author_name` varchar(15) NOT NULL,
  `audio_name` varchar(30) NOT NULL,
  `audio_duration` varchar(30) NOT NULL,
  `date_added` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `likes` int(6) NOT NULL,
  `user_id` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `audio` (`id`, `author_name`, `audio_name`, `audio_duration`, `date_added`, `likes`, `user_id`) VALUES
(1, '', 'im upset', '3:25', '0000-00-00 00:00:00.000000', 0, 3),
(2, '', 'whatever', '3:12', '0000-00-00 00:00:00.000000', 0, 4),
(3, '', 'test.mp3', '3:23', '0000-00-00 00:00:00.000000', 0, 3),
(4, '', 'test.mp3', '3:23', '2018-08-29 21:55:34.578000', 0, 3);

DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `id` int(4) NOT NULL,
  `comment` varchar(150) NOT NULL,
  `comment_time` decimal(8,0) NOT NULL,
  `audio_id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `avatar` int(4) NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `date_joined` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `users` (`id`, `username`, `avatar`, `email`, `password`, `date_joined`) VALUES
(1, 'mattkirby', 3, 'mattkir@gmail.com', '2beb0192eb1ca5a8756bc89a09b93036e1854049', '0000-00-00 00:00:00.000000'),
(2, 'paulsu', 7, 'paul@yahoo.com', 'af4b181071c671d8ea2fb027424159536d62b821', '0000-00-00 00:00:00.000000'),
(3, 'mattkirby', 3, 'mattkir@gmail.com', '2beb0192eb1ca5a8756bc89a09b93036e1854049', '0000-00-00 00:00:00.000000'),
(4, 'paulsu', 7, 'paul@yahoo.com', 'af4b181071c671d8ea2fb027424159536d62b821', '0000-00-00 00:00:00.000000');

DROP TABLE IF EXISTS `user_feedback`;
CREATE TABLE `user_feedback` (
  `id` int(6) NOT NULL,
  `liked` int(11) NOT NULL COMMENT 'likes',
  `audio_id` int(4) NOT NULL COMMENT 'audi_id'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `user_feedback` (`id`, `liked`, `audio_id`) VALUES
(1, 0, 1),
(2, 0, 2),
(3, 3, 3);


ALTER TABLE `audio`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `user_feedback`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `audio`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
ALTER TABLE `comments`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT;
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
ALTER TABLE `user_feedback`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
