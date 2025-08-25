import { makeSource } from 'contentlayer/source-files'
import { defineDocumentType } from 'contentlayer/source-files'
import readingTime from 'reading-time'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the article',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the article',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the article',
      required: true,
    },
    author: {
      type: 'string',
      description: 'The author of the article',
      required: false,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'Tags for the article',
      required: false,
    },
    pillar: {
      type: 'string',
      description: 'The pillar this article belongs to',
      required: false,
    },
    primaryKeyword: {
      type: 'string',
      description: 'Primary SEO keyword',
      required: true,
    },
    secondaryKeywords: {
      type: 'list',
      of: { type: 'string' },
      description: 'Secondary SEO keywords',
      required: false,
    },
    faq: {
      type: 'boolean',
      description: 'Whether this article has FAQs',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
    readingTime: {
      type: 'json',
      resolve: (doc) => readingTime(doc.body.raw),
    },
  },
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Article],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
})