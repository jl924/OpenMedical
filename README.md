## OpenMedical


## Tech Stack

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MongoDB](	https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Axios](https://img.shields.io/badge/-Axios-671ddf?logo=axios&logoColor=black&style=for-the-badge)

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
      <ul>
        <li><a href="#Appointments">Appointments</a></li>
        <li><a href="#Talk-to-a-Doctor">Talk to a Doctor</a></li>
        <li><a href="#Covid19">Covid-19</a></li>
      </ul>
    </li>
    <li>
      <a href="#installation">Installation</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## Overview

This app was created to simulate an EMR (Electronic Medical Record) system. I had three days to create any project I wanted, and I did my best to incorporate two important features of an EMR: appointment scheduling and doctor communication. Additionally, I wanted to create a third section and work with graphing libraries, so I decided to add a COVID-19 tracker feature to the app.

## Appointments

To book an appointment with the doctor, simply click on your desired date and an available time slot. After that, write your name and reason for the visit. Once you have booked the appointment, that time slot will no longer be available, and the system will display your appointment date and time in your profile section.

 <p align="right">(<a href="#top">back to top</a>)</p>


## Talk to a Doctor

The chat system is currently built and hooked up to ChatGPT. Users can input a question, and the chat will get back to you in a few seconds!


<p align="right">(<a href="#top">back to top</a>)</p>

## Covid19

There are two sections for COVID-19 in this app. The first section displays yearly data for COVID-19 cases in the US. Users can select the year they want to see by using the drop-down selector. The second section displays overall data for COVID-19 cases by country. To view data for a specific country, simply type the country name in the input field and the graph will update accordingly.

<p align="right">(<a href="#top">back to top</a>)</p>


## Installation

1. Create OpenAI personal access token [here](https://platform.openai.com/).


2. Fork and clone this repo, then open the terminal and navigate to the project root directory.

3. Copy the provided .env.example and rename it to .env.


4. In the terminal run the following scripts:

```bash
npm install
npm start
```

4.5. on a separate terminal:

```bash
node server/index.js
```

5. Navigate to [localhost:3000](http://localhost:3000) in the browser.

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

#### Creator:

[Jae Hoon Lee](https://www.linkedin.com/in/jae-lee-2b116114b/)

<p>
 <a href="https://www.linkedin.com/in/jae-lee-2b116114b/">
 <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
 </a>
 <a href="https://github.com/jl924">
 <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
 </a>
</p>

<p align="right">(<a href="#top">back to top</a>)</p>