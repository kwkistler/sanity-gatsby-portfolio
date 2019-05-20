export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ce33612dbc89c9aca982ec7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-xdodw2r4',
                  apiId: 'a6d1cc51-cabc-48f7-be14-e6b653a2be9d'
                },
                {
                  buildHookId: '5ce33612c3de08555e016f7c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-cc7yeybu',
                  apiId: 'a6fe2db3-bc46-4ca4-8acd-03e0ddfdbfc3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kwkistler/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-cc7yeybu.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
