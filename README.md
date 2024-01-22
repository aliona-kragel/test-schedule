# Shedule-creator Test application

## Overview

The Schedule Creator app is a simple application designed to help users create schedules. It provides a user-friendly interface with various input fields to customize the schedule according to specific requirements.

## Installation

1. Clone this repository to your local machine:

git clone 'https://github.com/aliona-kragel/test-schedule.git'

2. Navigate to the project directory:

cd test-schedule

3. Install the necessary dependencies

npm install

## Running the application

To run the project, follow these step:

npm start

## Features

The application consists of:

- One-click access to the schedule creation interface.
- Modal window with input fields for school name, type of hours (academic or astronomical), total hours in the course, start date, end date, days of the week for classes(alternative day options, manual day selection) , presence of breaks, hours per day, and calculation of class start and end times.

## Usage

1. Click on the "Create Schedule" button to open the schedule creation interface.

2. Fill in the following details in the modal window:

   - **School Name**: Enter the name of the school.
   - **Hour Type**: Choose between academic and astronomical hours.
   - **Total Hours**: Specify the total number of hours in the course.
   - **Start Date**: Choose the start date of the course (default is the current date).
   - **End Date**: Choose the end date of the course.
   - **Days of the Week**: Select the days on which classes will be held.
    Choose alternative day options (Monday-Wednesday-Friday, Tuesday-Thursday).
    Manually select specific days of the week for classes.
   - **Breaks**: Indicate whether there will be breaks during classes.
   - **Hours Per Day**: Specify the number of hours to be conducted per day.

3. The app will calculate and display the start and end times of the classes based on the provided information.

4. Click on the "Add Schedule" button to finalize and save the schedule.
