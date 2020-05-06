import { createApolloFetch } from 'apollo-fetch'
import { apiUrl } from './../data/siteDetails'
import * as excludePages from './../data/pages'

const getExcludesPages = () => {
  const excludePageIDS = []
  Object.values(excludePages).forEach((page) => {
    excludePageIDS.push(...Object.values(page))
  })
  return excludePageIDS
}

export default {
  fallback: true,
  async routes() {
    const uri = `${apiUrl}graphql`

    const query = `
      query Sitemap($notIn: [ID]) {
        pages(first: 99, where: { notIn: $notIn }) {
          edges {
            node {
              relativeUrl
            }
          }
        }
        posts(first: 99) {
          edges {
            node {
              relativeUrl
            }
          }
        }
        rooms(first: 99) {
          edges {
            node {
              relativeUrl
            }
          }
        }
        arrangements(first: 99) {
          edges {
            node {
              relativeUrl
            }
          }
        }
      }
    `

    const variables = {
      notIn: getExcludesPages(),
    }

    const apolloFetch = createApolloFetch({ uri })
    const result = await apolloFetch({ query, variables }) // all apolloFetch arguments are optional
    const { pages, posts, rooms, arrangements } = result.data
    const urls = [
      ...pages.edges,
      ...posts.edges,
      ...rooms.edges,
      ...arrangements.edges,
    ]
    return urls.map((url) => {
      return url.node.relativeUrl
    })
  },
}
