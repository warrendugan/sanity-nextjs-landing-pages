export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62963864b8ab2e0056521175',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-s45mf8mx',
                  apiId: 'ddb48561-5e37-4b41-b924-2656bba8a42a'
                },
                {
                  buildHookId: '62963865ccc08c006f0a076d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-sybu5y19',
                  apiId: '06f5ca27-fddc-4438-9f46-ce0f4568adf0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/warrendugan/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-sybu5y19.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
