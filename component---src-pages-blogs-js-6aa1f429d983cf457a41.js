webpackJsonp([0xe232be7dee9e],{219:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.blogsQuery=void 0;var c=a(1),d=n(c),i=a(10),u=n(i),s=a(25),f=n(s),m=a(24),p=n(m),h=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=(0,p.default)(this,"props.data.site.siteMetadata.title"),t=(0,p.default)(this,"props.data.allMarkdownRemark.edges");return d.default.createElement("div",{className:"page"},d.default.createElement("div",{className:"container"},d.default.createElement(f.default,{title:e}),d.default.createElement("div",{className:"row"},t.filter(function(e){return"blog"===e.node.frontmatter.type}).map(function(e){if("/404/"!==e.node.frontmatter.path){var t=(0,p.default)(e,"node.frontmatter.title")||e.node.path;return d.default.createElement("div",{key:e.node.frontmatter.path,className:"col-md-4 list"},d.default.createElement("div",{className:"list__item"},d.default.createElement("div",{className:"card"},d.default.createElement("div",{className:"card-body"},d.default.createElement(u.default,{to:e.node.frontmatter.path,className:"item__link"},d.default.createElement("h4",{className:"card-title"},t)),d.default.createElement("p",{className:"card-text item__body text-muted",dangerouslySetInnerHTML:{__html:e.node.excerpt}}),d.default.createElement(u.default,{to:e.node.frontmatter.path,className:"btn btn-primary item__link"},"Read more")))))}}))))},t}(d.default.Component);t.default=h;t.blogsQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-blogs-js-6aa1f429d983cf457a41.js.map