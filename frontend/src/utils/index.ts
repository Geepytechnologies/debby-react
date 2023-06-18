import { request, gql } from "graphql-request";

const graphqlAPI = import.meta.env.VITE_HYGRAPH || "";

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  const result = (await request(graphqlAPI, query)) as any;
  return result.postsConnection.edges;
};

// getPosts();
export const getPostBySlug = async (slug: string) => {
  const query = gql`
    query getPost($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          name
          photo {
            url
          }
        }
        categories {
          name
          slug
        }
        content {
          html
        }
        createdAt
        title
        featuredImage {
          url
        }
      }
    }
  `;
  const result = (await request(graphqlAPI, query, { slug })) as any;
  return result.post;
};

export const checkEmailSubscription = async (email: string) => {
  const query = gql`
    query checkEmailSubscription($email: String!) {
      emailSubscriptions(
        where: { documentInStages_every: { stage: DRAFT }, email: $email }
      ) {
        email
      }
    }
  `;
  const result = (await request(graphqlAPI, query, { email })) as any;
  return result;
};

export const createEmailSubscription = async (email: string) => {
  const query = gql`
    mutation CreateEmailSubscription($email: String!) {
      createEmailSubscription(data: { email: $email }) {
        email
      }
    }
  `;
  const result = (await request(graphqlAPI, query, { email })) as any;
  return result;
};
