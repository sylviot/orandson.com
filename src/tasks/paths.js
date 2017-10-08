const src = './src'
const dest = './dist'
const docs = './docs'

module.exports = {
  src: src,
  dest: dest,
  scripts: {
    main: `${src}/scripts/entry.js`,
    glob: `${src}/scripts/**/*.js`,
    src: `${src}/scripts/`,
    dest: `${dest}/assets/scripts/`
  },
  styles: {
    main: `${src}/styles/main.css`,
    glob: `${src}/styles/**/*.css`,
    src: `${src}/styles/`,
    dest: `${dest}/assets/styles/`
  },
  images: {
    glob: `${src}/images/**/*.{jpg,svg,png,jpeg,gif}`,
    src: `${src}/images/`,
    dest: `${dest}/assets/images/`
  },
  docs: {
    glob: `${docs}/**/*.{html,md}`
  }
}
