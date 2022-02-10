const React = require('react')

const HeadComponents = [
  <script
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4049075251196658"
    crossOrigin="anonymous"
    async
  />,
]

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents(HeadComponents)
}