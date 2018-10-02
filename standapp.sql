SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

DROP TABLE IF EXISTS `audio`;
CREATE TABLE `audio` (
  `id` int(6) NOT NULL,
  `author_name` varchar(15) NOT NULL,
  `audio_name` varchar(30) NOT NULL,
  `date_added` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `likes` int(6) NOT NULL,
  `user_id` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `audio` (`id`, `author_name`, `audio_name`, `date_added`, `likes`, `user_id`) VALUES
(1, 'Paul', 'Ukulele', '2018-09-10 22:59:44.000000', 5, 5),
(2, 'Kevin', 'Applause', '2018-09-10 23:00:12.000000', 7, 1),
(3, 'Kevin Hart', 'Wi Fi', '2018-09-10 23:01:37.000000', 100, 3),
(4, 'Jeff Ross', 'Roasts America', '2018-09-10 23:02:10.000000', 87, 4),
(5, 'Mike', 'Laugh', '2018-09-10 23:03:11.000000', 10, 2),
(6, 'Matt', 'Better Days', '2018-09-10 23:03:11.000000', 22, 6);

DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `id` int(4) NOT NULL,
  `comment` varchar(150) NOT NULL,
  `comment_time` decimal(8,0) NOT NULL,
  `audio_id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `hearts`;
CREATE TABLE `hearts` (
  `user_id` int(4) NOT NULL,
  `fill` int(2) NOT NULL,
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
(1, 'Kevin', 7, 'kevin@gmail.com', 'bf7df0b7fedcbc2db00747468898a0d9ebc40add', '2018-09-11 17:09:11.940771'),
(2, 'Mike', 3, 'mike@gmail.com', 'ee97d2f28ccffbc411abafd0a61751a89bf3a9bf', '2018-09-10 22:56:15.000000'),
(3, 'Kevin Hart', 0, 'kh@gmail.com', '47ec8cc319d914471ba7dea45fedd082d354fefd', '2018-09-10 22:57:10.000000'),
(4, 'Jeff Ross', 5, 'jr@gmail.com', 'c4077e32e0f16e57d8590be5845b36cf7987e384', '2018-09-10 22:57:10.000000'),
(5, 'Paul', 0, 'su.paul.cy@gmail.com', 'd4061400b6dad8ac5689d1917b1d06b6d27d1fbe', '2018-09-10 22:55:17.000000'),
(6, 'Matt', 1, 'matt@gmail.com', 'ff55435345834a3fe224936776c2aa15f6ed5358', '2018-09-10 22:55:17.000000');

DROP TABLE IF EXISTS `user_feedback`;
CREATE TABLE `user_feedback` (
  `id` int(6) NOT NULL,
  `liked` tinyint(1) DEFAULT NULL,
  `audio_id` int(4) NOT NULL COMMENT 'audi_id',
  `user_id` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `user_feedback` (`id`, `liked`, `audio_id`, `user_id`) VALUES
(1, 1, 4, 3),
(2, 0, 2, 5),
(3, NULL, 3, 6);


ALTER TABLE `audio`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `hearts`
  ADD PRIMARY KEY (`user_id`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `user_feedback`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `audio`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

ALTER TABLE `comments`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT;

ALTER TABLE `hearts`
  MODIFY `user_id` int(4) NOT NULL AUTO_INCREMENT;

ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

ALTER TABLE `user_feedback`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
