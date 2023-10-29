import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Box } from "theme-ui";

export default function PostPage({ data }) {
  const {
    body,
    frontmatter: { title },
  } = data.mdx;
  return (
    <>
      <Box as="h1" variant="styles.h1" fontSize="4xl">
        {title}
      </Box>
      <div dangerouslySetInnerHTML={{__html:body}} />
      {/* <MDXRenderer>{body}</MDXRenderer> */}
    </>
  );
}

export const query = graphql`
query POST_BY_SLUG($slug: String) {
    mdx(fields: {slug: {eq: $slug}}) {
      id
      body
      frontmatter {
        date
        title
      }
      fields {
        slug
      }
    }
    allMdx {
      edges {
        node {
          id
        }
      }
    }
  }
`;