# Ionic Mobile FTT<img align="right" height="40" src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_228,h_73/http://ftt.com.br/home/wp-content/uploads/2019/10/logo.png">


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
      <ul>
        <li><a href="#apis">API's</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#authors">Authors</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

Proposed by [Daniel Carvalho](https://github.com/danielscarvalho) in the Programming Language III subject at [*Faculdade de Tecnologia Termomecanica*](http://www.ftt.com.br/).

The objective of this project is to create a front-end application using 4 different APIs and being responsive.
"Maximum score for those who generate the .APK and run the app on Android"

### Built With
* [Ionic](https://ionicframework.com/)
* [React](https://reactjs.org/)

### API's
* [The Dog](https://thedogapi.com/)
* [Yoda Translator](https://funtranslations.com/api/yoda)
* [Chuck Norris Jokes](https://api.chucknorris.io/)
* [Evil Insult Generator](https://evilinsult.com/api/)



<!-- GETTING STARTED -->
## Getting Started
To get a local copy up and running follow these simple example steps.

### Prerequisites
* npm
* cordova
* ionic
```sh
npm install -g npm@latest cordova ionic
```
<br>

To build an apk (for android devices), it'll be necessary to install :
  * Android SDK
    - Create a directory on your Home (Linux) or C:/ (Windows) called "Android"
    - Create a folder named "cmdline-tools" inside the "Android" folder
    - Create another folder named "tools" inside "cmdline-tools"
    - [Click here](https://developer.android.com/studio?hl=pt-br#downloads) and download the "Command Line Tools Only" for your Operational System
    - Extract it and copy the contents of the "cmdline-tools" folder to the "tools" folder
    - Paste the content
    - Create the environment variables for the tools and sdk folders
    - run the following command to accept the sdk licenses
        (on linux the licenses folder is being created on the "Android" folder, move it to the "cmdline-tools" folder)
    ```sh
    sdkmanager --licenses
    ```


### Installation

1. Clone the repo
```sh
git clone https://github.com/RenatoXT/Mobile-FTT.git
```
2. Install NPM packages
```sh
npm install
```
3. Run the web version
```sh
ionic serve
```
4. Build the apk
```sh
npm run build-android-debug
```

<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.


<!-- Authors -->
## Authors

Renato Xavier Tavares
Lucas Araújo Veloso
Davi Oliveira Chagas Almeida

Project Link: [Mobile-FTT](https://github.com/RenatoXT/Mobile-FTT)