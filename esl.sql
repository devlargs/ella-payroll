-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 16, 2017 at 09:42 PM
-- Server version: 5.7.19-0ubuntu0.16.04.1
-- PHP Version: 7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `esl`
--

-- --------------------------------------------------------

--
-- Table structure for table `dtr`
--

CREATE TABLE `dtr` (
  `id` int(14) NOT NULL,
  `user_id` int(14) NOT NULL,
  `time_in` varchar(255) NOT NULL,
  `time_out` varchar(255) NOT NULL,
  `net_hours` int(12) NOT NULL,
  `date_modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `job_titles`
--

CREATE TABLE `job_titles` (
  `id` int(14) NOT NULL,
  `name` varchar(244) NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `job_titles`
--

INSERT INTO `job_titles` (`id`, `name`, `date_created`) VALUES
(1, 'Web Developer', '2017-07-28 01:42:54'),
(2, 'Accountant', '2017-07-28 01:42:54');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `date_created`) VALUES
(1, 'devlargs@gmail.com', '$2a$10$1.yw0cmSQjWaHM8EFBmvZOq9F1U5sFF6OPhAdjVGz.eOa.1Wnkzby', '2017-07-28 00:58:27'),
(2, 'sarmiento.ella@gmail.com', '$2a$06$ndSzGHvXIbY7rFzGQGlqn.jsi6XiQBZAhtY9HedPy2paHfEuPPBUy', '2017-07-28 00:58:27'),
(3, 'rayleigh@gmail.com', '$2a$06$ndSzGHvXIbY7rFzGQGlqn.jsi6XiQBZAhtY9HedPy2paHfEuPPBUy', '2017-07-28 00:58:27'),
(25, 'ralph.largo@volenday.com', '$2a$10$6oPDhj8tSb64JP1zqizJ4unl2SrVnfU2jEw0f8t45w5Q0boa/ik/i', '2017-08-16 13:31:56');

-- --------------------------------------------------------

--
-- Table structure for table `user_info`
--

CREATE TABLE `user_info` (
  `id` int(14) NOT NULL,
  `user_id` int(14) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `middle_name` varchar(255) NOT NULL DEFAULT '',
  `last_name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `job_id` int(14) NOT NULL,
  `address` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `shift_schedule` varchar(255) NOT NULL,
  `day_off` varchar(255) NOT NULL,
  `grace_period` int(255) NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `leaves` int(15) NOT NULL,
  `gender` char(1) NOT NULL,
  `type` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_info`
--

INSERT INTO `user_info` (`id`, `user_id`, `first_name`, `middle_name`, `last_name`, `username`, `job_id`, `address`, `photo`, `contact`, `shift_schedule`, `day_off`, `grace_period`, `date_created`, `leaves`, `gender`, `type`) VALUES
(1, 1, 'Ralph ', 'Apelo', 'Largo', 'devlargs', 1, 'Kalaklan', '', '09467015762', '9:00AM - 6:00PM', 'Tuesday', 0, '2017-07-28 01:50:32', 0, 'M', 1),
(2, 2, 'Ella', 'Prado', 'Sarmiento', 'ellargs', 2, 'Iram', '', '09304689719', '11:00AM - 5:00PM', 'Monday', 0, '2017-07-28 01:50:32', 0, 'F', 0),
(3, 3, 'Rayleigh', 'Sarmiento', 'Largo', 'papadev', 1, 'Iram', '', '09304689719', '11:00AM - 5:00PM', 'Monday', 0, '2017-07-28 01:50:32', 0, 'M', 0),
(4, 25, 'TEST', 'TEST', 'TEST', 'TEST', 2, '', '', '09467015762', '9:00AM-6:00PM', 'Saturday,Sunday', 30, '2017-08-16 13:31:56', 0, 'M', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dtr`
--
ALTER TABLE `dtr`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job_titles`
--
ALTER TABLE `job_titles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dtr`
--
ALTER TABLE `dtr`
  MODIFY `id` int(14) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `job_titles`
--
ALTER TABLE `job_titles`
  MODIFY `id` int(14) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `user_info`
--
ALTER TABLE `user_info`
  MODIFY `id` int(14) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
