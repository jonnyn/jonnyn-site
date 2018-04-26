// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/jonnyn/JonGit/JonnynSite/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/jonnyn/JonGit/JonnynSite/src/templates/blog-post.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/jonnyn/JonGit/JonnynSite/src/pages/index.js")),
  "component---src-pages-projects-js": preferDefault(require("/Users/jonnyn/JonGit/JonnynSite/src/pages/projects.js"))
}

exports.json = {
  "layout-index.json": require("/Users/jonnyn/JonGit/JonnynSite/.cache/json/layout-index.json"),
  "hi-folks.json": require("/Users/jonnyn/JonGit/JonnynSite/.cache/json/hi-folks.json"),
  "hello-world.json": require("/Users/jonnyn/JonGit/JonnynSite/.cache/json/hello-world.json"),
  "my-second-post.json": require("/Users/jonnyn/JonGit/JonnynSite/.cache/json/my-second-post.json"),
  "index.json": require("/Users/jonnyn/JonGit/JonnynSite/.cache/json/index.json"),
  "projects.json": require("/Users/jonnyn/JonGit/JonnynSite/.cache/json/projects.json")
}