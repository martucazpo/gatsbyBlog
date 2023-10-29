import { graphql } from "gatsby";
//import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import SEO from "react-seo-component";
import { Box } from "theme-ui";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export default function PostPage({ data }) {
  const {
    body,
    fields,
    excerpt,
    frontmatter: { title, date },
  } = data.mdx;
  const {
    title: siteTitle,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    authorName,
  } = useSiteMetadata();
  return (
    <>
      <SEO
        title={title}
        titleTemplate={siteTitle}
        description={excerpt}
        pathname={`${siteUrl}${fields.slug}`}
        article={true}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        author={authorName}
        publishedDate={date}
        modifiedDate={new Date(Date.now()).toISOString()}
      />
      <Box as="h1" variant="styles.h1" fontSize="4xl">
        {title}
      </Box>
      <div>{body}</div>
      {/* <MDXRenderer>{body}</MDXRenderer> */}
    </>
  );
};

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