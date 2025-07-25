/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BlogPostPreview from '@theme/BlogPostPreview';
import BlogListPaginator from '@theme/BlogListPaginator';
import type {Props} from '@theme/BlogListPage';
import BlogSidebar from '@theme/BlogSidebar';

function BlogListPage(props: Props): JSX.Element {
  const {metadata, items, sidebar} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <Layout
      title={title}
      description={blogDescription}
      wrapperClassName="blog-wrapper">
      <div className="container margin-vert--lg">
        <div className="row">
          {/* <div className="col col--2">
            <BlogSidebar sidebar={sidebar} />
          </div> */}
          <main className="col col--12">
            {/* <h1>A la une</h1>
            <div className="row">
            {items.map(({content: BlogPostContent}) => {
              return (
                <div className="col col--4 row-preview">
                <BlogPostPreview
                  key={BlogPostContent.metadata.permalink}
                  frontMatter={BlogPostContent.frontMatter}
                  metadata={BlogPostContent.metadata}
                  truncated={BlogPostContent.metadata.truncated}>
                  <BlogPostContent />
                </BlogPostPreview>
                </div>
              )
            })}
            </div> */}
            <div className="row">
            {items.map(({content: BlogPostContent}) => (
              <div className="col col--4 row-preview">
              <BlogPostPreview
                key={BlogPostContent.metadata.permalink}
                frontMatter={BlogPostContent.frontMatter}
                metadata={BlogPostContent.metadata}
                truncated={BlogPostContent.metadata.truncated}>
                <BlogPostContent />
              </BlogPostPreview>
              </div>
            ))}
            </div>
            <BlogListPaginator metadata={metadata} />
          </main>
        </div>
      </div>
    </Layout>
  );
}

export default BlogListPage;
