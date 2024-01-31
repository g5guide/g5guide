import { defineConfig } from 'vitepress'
import deepmerge from 'deepmerge'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import timeline from 'vitepress-markdown-timeline'

let mergeConfig = {
  head: []
}

const links = []

if (process.env.NODE_ENV === 'production') {
  mergeConfig.head = [
    [
      'meta',
      {
        name: 'google-site-verification',
        content: 'zxNvFXHnilnwtr39rTNOFwgfG4lsyDevcbXIcC0FZS0'
      }
    ],
    [
      'meta',
      {
        name: 'naver-site-verification',
        content: 'aa33e9f3d99e5091b736c3754f4c9fbbc905a0a7'
      }
    ],
    [
      'meta',
      { name: 'msvalidate.01', content: 'B4DA8C58849C0563FAE8F91A627C7500' }
    ]
  ]
} else {
  mergeConfig = {
    markdown: {
      lineNumbers: true
    }
  }
}

export default defineConfig(
  deepmerge(mergeConfig, {
    lang: 'ko-KR',
    titleTemplate: ':title - 그누보드5 가이드',
    description: '사용자가 직접 만드는 그누보드 안내서 ',
    base: '/',
    lastUpdated: true,
    themeConfig: {
      siteTitle: '그누보드5 가이드',
      outline: [2, 4],
      sidebar: {
        '/gnuboard/': [
          {
            text: '시작하기',
            items: [
              { text: '설치', link: '/gnuboard/install' },
              { text: '초기 설정', link: '/gnuboard/config' },
              { text: '한 줄 팁', link: '/gnuboard/tip' }
            ]
          },
          {
            text: '기본',
            items: [
              { text: '회원', link: '/gnuboard/member' },
              { text: '환경 설정', link: '/gnuboard/basic-config' },
              { text: '테마와 스킨', link: '/gnuboard/theme-and-skin' },
              { text: '게시판과 그룹', link: '/gnuboard/board' },
              { text: '포인트', link: '/gnuboard/point' },
              { text: '메뉴', link: '/gnuboard/menu' }
            ]
          },
          {
            text: '운영 & 관리',
            items: [
              { text: '개인정보', link: '/gnuboard/privacy' },
              { text: '영카트 제거하기', link: '/gnuboard/remove-youngcart' },
              { text: '업데이트', link: '/gnuboard/upgrade' }
            ]
          }
        ],
        '/make/': [
          {
            text: '스킨 만들기',
            items: [
              { text: '개요', link: '/make/skin/about' },
              {
                text: '게시판 스킨 (board)',
                link: '/make/skin/board',
                collapsed: true,
                items: [
                  { text: '개요', link: '/make/skin/board' },
                  { text: '목록', link: '/make/skin/board/list' },
                  { text: '내용 보기', link: '/make/skin/board/view' },
                  { text: '댓글', link: '/make/skin/board/comment' },
                  { text: '글 쓰기', link: '/make/skin/board/write' },
                  { text: '액션', link: '/make/skin/board/action' }
                ]
              },
              { text: 'Content 스킨 (content)' },
              { text: 'FAQ 스킨 (faq)' },
              { text: '회원 스킨 (member)' },
              { text: '새글 스킨 (new)' },
              {
                text: '1:1문의 스킨 (qa)',
                collapsed: true,
                items: [
                  { text: '개요' },
                  { text: '목록' },
                  { text: '내용 보기' },
                  { text: '댓글' },
                  { text: '글 쓰기' }
                ]
              },
              { text: '전체검색 스킨 (search)' },
              { text: '소셜로그인 스킨 (social)' },
              { text: '접속자 스킨 (visit)' },
              {
                text: '위젯',
                items: [
                  { text: '접속자 스킨 (connect)' },
                  { text: '최신글 스킨 (latest)', link: '/make/skin/latest' },
                  {
                    text: '아웃로그인 스킨 (outlogin)',
                    link: '/make/skin/outlogin'
                  },
                  { text: '설문조사 스킨 (poll)' },
                  { text: '인기검색어 스킨 (popular)' }
                ]
              }
            ]
          },
          {
            text: '테마 만들기',
            items: [
              { text: '개요', link: '/make/theme/about' },
              { text: '테마 설정', link: '/make/theme/config' },
              { text: '레이아웃', link: '/make/theme/layout' },
              { text: '경로 및 URL', link: '/make/theme/path_and_url' },
              { text: '메뉴 및 위젯', link: '/make/theme/widget' }
            ]
          },
          {
            text: '플러그인 만들기',
            items: [{ text: '플러그인', link: '/developers/make_plugin' }]
          }
        ],
        '/developers/': [
          {
            text: '일반',
            items: [
              { text: '라이프 사이클', link: '/developers/lifecycle' },
              { text: '설정', link: '/developers/config' },
              { text: 'Database', link: '/developers/database' },
              { text: '경로 및 URL Rewrite', link: '/developers/path_and_url' },
              { text: '쿠키 및 세션', link: '/developers/cookie_and_session' },
              { text: 'JS & CSS (Assets)', link: '/developers/assets' },
              { text: '캐시', link: '/developers/cache' },
              { text: '디버깅', link: '/developers/debug' },
              { text: '테스트', link: '/developers/test' },
              { text: '헬퍼', link: '/developers/helpers' }
            ]
          },
          {
            text: '보안',
            items: [
              {
                text: '오염된 전역변수',
                link: '/developers/polluted_variables'
              },
              { text: '파일 보안', link: '/developers/file_security' },
              { text: 'SQL Injection', link: '/developers/sql_injection' },
              { text: '토큰 및 암호화', link: '/developers/token_and_hash' }
            ]
          },
          {
            text: '확장하기',
            items: [
              { text: '플러그인', link: '/developers/make_plugin' },
              {
                text: 'Hook',
                link: '/developers/hook',
                items: [{ text: 'Hook 목록', link: '/developers/hook-list' }]
              },
              { text: '관리 메뉴', link: '/developers/admin_menu' },
              { text: '테마', link: '/make/theme/about' },
              { text: '스킨', link: '/make/skin' }
            ]
          },
          {
            text: '헬퍼',
            items: [
              { text: '문자열' },
              { text: '경로 및 URL' },
              { text: '쿠기 및 세션' },
              { text: '데이터' },
              { text: '토큰 및 암호화' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' }
            ]
          }
        ]
      },
      nav: [
        { text: '그누보드', link: '/gnuboard/install' },
        { text: '스킨', link: '/make/skin/about' },
        { text: '테마', link: '/make/theme/about' },
        { text: '개발자 가이드', link: '/developers/lifecycle' }
      ],
      socialLinks: [
        {
          icon: 'github',
          link: 'https://github.com/g5guide/g5guide.github.io'
        }
      ],
      search: {
        provider: 'local'
      },
      editLink: {
        pattern:
          'https://github.com/g5guide/g5guide.github.io/edit/main/docs/:path',
        text: '이 페이지 수정하기'
      },
      docFooter: {
        prev: '이전',
        next: '다음'
      },
      footer: {
        message:
          '<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="크리에이티브 커먼즈 라이선스" style="display: inline-block;border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />이 저작물은 <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">크리에이티브 커먼즈 저작자표시-동일조건변경허락 4.0 국제 라이선스</a>에 따라 이용할 수 있습니다.'
      }
    },
    sitemap: {
      hostname: 'https://g5guide.github.io/'
    },
    transformHtml: (_, id, { pageData }) => {
      if (!/[\\/]404\.html$/.test(id))
        links.push({
          // you might need to change this if not using clean urls mode
          url: pageData.relativePath
            .replace(/\/index\.md$/, '/')
            .replace(/\.md$/, '.html'),
          lastmod: pageData.lastUpdated
        })
    },
    markdown: {
      config(md) {
        md.use(tabsMarkdownPlugin)
        md.use(timeline)
      }
    }
  })
)
