const metalsmith = require('metalsmith')
const markdown = require('metalsmith-markdown')
const layouts = require('metalsmith-layouts')
const collections = require('metalsmith-collections')
const ignore = require('metalsmith-ignore')
const permalinks = require('metalsmith-permalinks')
const tags = require('metalsmith-tags')
const prism = require('prismjs')
const marked = require('marked')
const renderer = new marked.Renderer()

renderer.code = function (code, lang, escaped) {
  const codeHighlighted = this.options.highlight(code, lang)

  if (!lang) {
    return `<pre><code>${codeHighlighted}\n</code></pre>`
  }

  // e.g. "language-js"
  const langClass = this.options.langPrefix + lang

  return '<pre class="' + langClass + '"><button class="button button-primary uppercase" data-copy>Copy</button><code class="' + langClass + '">' +
    codeHighlighted +
    '</code></pre>\n'
}

// Translate marked languages to prism.
var extensions = {
  js: 'javascript',
  scss: 'css',
  html: 'markup',
  svg: 'markup'
}

const metadata = {
  site: {
    title: 'Randson Oliveira'
  }
}

metalsmith(__dirname)
  .metadata(metadata)
  .source('./docs')
  .clean(false)
  .use(tags({
    handle: 'tags',
    path: 'tags/:tag.html',
    layout: 'docs/layouts/partials/tag.html',
    sortBy: 'date',
    reverse: false,
    slug: function (tag) {
      return tag.toLowerCase()
    }
  }))
  .use(markdown({
    gfm: true,
    smartypants: true,
    renderer: renderer,
    langPrefix: 'language-',
    highlight: function (code, lang) {
      if (!prism.languages.hasOwnProperty(lang)) {
        // Default to markup.
        lang = extensions[lang] || 'markup'
      }

      return prism.highlight(code, prism.languages[lang])
    }
  }))
  .use(permalinks(':title'))
  .use(layouts({
    engine: 'handlebars',
    directory: 'docs/layouts',
    partials: 'docs/layouts/partials'
  }))
  .use(collections({
    posts: {
      sortBy: 'date',
      inverse: true
    }
  }))
  .use(ignore([
    '**/.DS_Store',
    './docs/layouts/**'
  ]))
  .destination('./dist')
  .build((err) => {
    if (err) throw err
  })
