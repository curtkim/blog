module.exports = {
  title: 'curt blog', // 사이트 타이틀
  description: 'curt blog',
  themeConfig: {
    logo: 'https://avatars3.githubusercontent.com/u/9634333?s=400&u=14779913a22b2473b535931ffb4428cf3c9a0ba4&v=4', // 로고 이미지
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: 'auto' // h1~h6 같은 heading tag를 기준으로 sidebar를 만들어줌
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-plantuml'))
    }
  },
  plugins: [
    'vuepress-plugin-mermaidjs'
  ]
}