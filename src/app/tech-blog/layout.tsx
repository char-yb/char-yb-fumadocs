import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  // source.pageTree가 올바른 구조를 가지도록 기본값을 설정
  const pageTree = source.pageTree || { name: 'root', children: [] };

  return (
    <DocsLayout tree={pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}