import { MDXComponents } from "mdx/types";

export function getMDXComponents(
  components: MDXComponents = {},
): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mb-6 text-3xl font-bold text-gray-900">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-900">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 leading-relaxed text-gray-700">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 list-inside list-disc space-y-2 text-gray-700">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 list-inside list-decimal space-y-2 text-gray-700">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="text-gray-700">{children}</li>,
    code: ({ children }) => (
      <code className="rounded bg-gray-100 px-1 py-0.5 text-sm text-gray-800">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="mb-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-gray-100">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mb-4 border-l-4 border-blue-500 pl-4 text-gray-600 italic">
        {children}
      </blockquote>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-blue-600 underline hover:text-blue-800">
        {children}
      </a>
    ),
    ...components,
  };
}

// Keep the hook version for backward compatibility if needed
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return getMDXComponents(components);
}
