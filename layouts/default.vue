<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <nuxt-link class="brand-logo" to="/">Logo</nuxt-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <nuxt-link to="/posts">Blog</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/admin">Admin</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <ul class="sidenav" id="mobile-demo">
      <li><a href="sass.html">Sass</a></li>
      <li><a href="badges.html">Components</a></li>
      <li><a href="collapsible.html">Javascript</a></li>
      <li><a href="mobile.html">Mobile</a></li>
    </ul>
    <nuxt/>
  </div>
</template>

<style>
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  body {
    background-color: #d3d3d3;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }
  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }
  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }
  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }
  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }

  .nuxt-link-exact-active {
    background-color: #ea454b;
  }
</style>
