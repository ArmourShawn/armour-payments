import { clsx } from 'clsx'

export function Prose({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        className,
        'prose prose-zinc dark:prose-invert',
        'prose-headings:font-bold prose-headings:tracking-tight',
        'prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl',
        'prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline',
        'prose-strong:text-zinc-900 dark:prose-strong:text-zinc-100',
        'prose-code:text-blue-600 prose-code:before:content-[""] prose-code:after:content-[""]',
        'prose-pre:bg-zinc-900 prose-pre:text-zinc-100',
        'prose-hr:border-zinc-200 dark:prose-hr:border-zinc-800',
        'prose-blockquote:border-l-blue-600 prose-blockquote:text-zinc-600 dark:prose-blockquote:text-zinc-400',
        'prose-ul:list-disc prose-ul:pl-6',
        'prose-ol:list-decimal prose-ol:pl-6',
        'prose-li:my-2',
        'prose-table:border-collapse',
        'prose-th:border prose-th:border-zinc-200 prose-th:bg-zinc-50 dark:prose-th:border-zinc-800 dark:prose-th:bg-zinc-900',
        'prose-td:border prose-td:border-zinc-200 dark:prose-td:border-zinc-800',
        'prose-img:rounded-lg',
        'prose-figure:my-8',
        'prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-zinc-500 dark:prose-figcaption:text-zinc-400',
      )}
      {...props}
    />
  )
} 