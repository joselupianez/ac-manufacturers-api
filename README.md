<div align="center">
  <h3 align="center">Air Conditioning Manufacturers API</h3>
  <p align="center">
    An API with information on some of the biggest air conditioning companies.
    <br />
    <br />
    <a href="https://ac-manufacturers.herokuapp.com/">View</a>
    ·
    <a href="https://github.com/joselupianez/ac-manufacturers-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/joselupianez/ac-manufacturers-api/pulls">Request Feature</a>
  </p>
  <img src="screenshot.png">
</div>

## How It's Made:
Stored large air conditioning manufacturers' data (brands, year founded, headquarters, key people, and website). Added two endpoints for quickly accessing the information of all companies or a single company.
### Tech Used:
[![JS][Javascript]][Javascript]
[![Bootstrap][Bootstrap.com]][Bootstrap.com]
[![ExpressJS][Express.JS]][Express.JS]
[![NodeJS][Node.JS]][Node.JS]

<!-- GETTING STARTED -->
## Installation

2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the development server
   ```sh
   npm run dev
   ```
4. Access server at [https://localhost:8000](https://localhost:8000)

## Endpoints

All Companies - [https://ac-manufacturers.herokuapp.com/api/](https://ac-manufacturers.herokuapp.com/api/)

Specific Company - [https://ac-manufacturers.herokuapp.com/api/rheem](https://ac-manufacturers.herokuapp.com/api/rheem)

Random Company - [https://ac-manufacturers.herokuapp.com/api/random](https://ac-manufacturers.herokuapp.com/api/random)

## Optimizations

Added the ability to display all companies with one request. Endpoint for specific company works regardless of capitalization in paremeters. 

## Lessons Learned:

Finding correct, up-to-date information on some smaller air conditioning brands can be cumbersome due to their lack of online presence. I found their information by searching through news websites and brand trademarks. An API is a great way to keep content related to a specific topic in one place, making it easier for those researching the topic to get the information they need.

<!-- MARKDOWN LINKS & IMAGES -->
[Javascript]: https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Express.JS]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Node.JS]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white

[screenshot]: screenshot.png