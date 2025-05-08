import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getMDXComponents } from '@/mdx-components';

export default function HomePage() {
  const slug = source.getPage(['char-yb-introduce']);
  const MDXContent = slug?.data.body || (() => <div>Loading...</div>);

  return (
    <DocsLayout sidebar={{ enabled:false }} tree={{ name: 'root', children: [] }} >
      <DocsPage toc={slug?.data.toc} full={slug?.data.full}>
        <DocsTitle>{slug?.data.title}</DocsTitle>
        <DocsDescription>{slug?.data.description}</DocsDescription>
        <DocsBody>
          <MDXContent
            components={getMDXComponents({
              a: slug ? createRelativeLink(source, slug) : () => <a href="#">Fallback Link</a>,
            })}
          />
        </DocsBody>
      </DocsPage>
    </DocsLayout>
  );
}