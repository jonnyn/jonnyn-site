// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/Users/jonnyn/JonGit/JonnynSite/src/templates/blog-post.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/jonnyn/JonGit/JonnynSite/src/pages/index.js"),
  "component---src-pages-projects-js": require("gatsby-module-loader?name=component---src-pages-projects-js!/Users/jonnyn/JonGit/JonnynSite/src/pages/projects.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/jonnyn/JonGit/JonnynSite/.cache/json/layout-index.json"),
  "hi-folks.json": require("gatsby-module-loader?name=path---hi-folks!/Users/jonnyn/JonGit/JonnynSite/.cache/json/hi-folks.json"),
  "my-second-post.json": require("gatsby-module-loader?name=path---my-second-post!/Users/jonnyn/JonGit/JonnynSite/.cache/json/my-second-post.json"),
  "hello-world.json": require("gatsby-module-loader?name=path---hello-world!/Users/jonnyn/JonGit/JonnynSite/.cache/json/hello-world.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/jonnyn/JonGit/JonnynSite/.cache/json/index.json"),
  "projects.json": require("gatsby-module-loader?name=path---projects!/Users/jonnyn/JonGit/JonnynSite/.cache/json/projects.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/jonnyn/JonGit/JonnynSite/.cache/layouts/index.js")
}