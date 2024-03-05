/* eslint-disable */
import * as types                            from './graphql'

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query IndividualCourse($id: ID!) {\n    individualCourse(id: $id) {\n      content\n      title\n      individualCourseData {\n        background {\n          desktop {\n            node {\n              mediaItemUrl\n              sourceUrl\n            }\n          }\n          mobile {\n            node {\n              mediaItemUrl\n              sourceUrl\n            }\n          }\n        }\n        price {\n          cta\n          courseLengthInMonths\n          discount\n          fullPrice\n          liveTrainingsNumber\n          monthlyPrice\n          oldPrice\n          title\n          videoTrainingsNumber\n        }\n        hero {\n          benefits {\n            content\n          }\n          runningLine\n          courseConditions {\n            description\n            number\n          }\n          cta\n        }\n      }\n    }\n  }\n':
    types.IndividualCourseDocument,
  '\n  query GetPreview($uri: String!) {\n    mediaItemBy(uri: $uri) {\n      sourceUrl\n    }\n  }\n':
    types.GetPreviewDocument,
  '\n  query GetSeo($id: ID!) {\n    page(id: $id) {\n      seo {\n        metaDesc\n        focuskw\n        opengraphType\n        opengraphTitle\n        opengraphDescription\n        opengraphUrl\n        opengraphSiteName\n        opengraphModifiedTime\n        opengraphSiteName\n        opengraphImage {\n          mediaDetails {\n            sizes {\n              height\n              width\n              name\n              sourceUrl\n            }\n          }\n        }\n        twitterDescription\n        twitterTitle\n        twitterImage {\n          sourceUrl\n        }\n        title\n        breadcrumbs {\n          text\n          url\n        }\n      }\n    }\n  }\n':
    types.GetSeoDocument,
}

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query IndividualCourse($id: ID!) {\n    individualCourse(id: $id) {\n      content\n      title\n      individualCourseData {\n        background {\n          desktop {\n            node {\n              mediaItemUrl\n              sourceUrl\n            }\n          }\n          mobile {\n            node {\n              mediaItemUrl\n              sourceUrl\n            }\n          }\n        }\n        price {\n          cta\n          courseLengthInMonths\n          discount\n          fullPrice\n          liveTrainingsNumber\n          monthlyPrice\n          oldPrice\n          title\n          videoTrainingsNumber\n        }\n        hero {\n          benefits {\n            content\n          }\n          runningLine\n          courseConditions {\n            description\n            number\n          }\n          cta\n        }\n      }\n    }\n  }\n'
): typeof documents['\n  query IndividualCourse($id: ID!) {\n    individualCourse(id: $id) {\n      content\n      title\n      individualCourseData {\n        background {\n          desktop {\n            node {\n              mediaItemUrl\n              sourceUrl\n            }\n          }\n          mobile {\n            node {\n              mediaItemUrl\n              sourceUrl\n            }\n          }\n        }\n        price {\n          cta\n          courseLengthInMonths\n          discount\n          fullPrice\n          liveTrainingsNumber\n          monthlyPrice\n          oldPrice\n          title\n          videoTrainingsNumber\n        }\n        hero {\n          benefits {\n            content\n          }\n          runningLine\n          courseConditions {\n            description\n            number\n          }\n          cta\n        }\n      }\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetPreview($uri: String!) {\n    mediaItemBy(uri: $uri) {\n      sourceUrl\n    }\n  }\n'
): typeof documents['\n  query GetPreview($uri: String!) {\n    mediaItemBy(uri: $uri) {\n      sourceUrl\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetSeo($id: ID!) {\n    page(id: $id) {\n      seo {\n        metaDesc\n        focuskw\n        opengraphType\n        opengraphTitle\n        opengraphDescription\n        opengraphUrl\n        opengraphSiteName\n        opengraphModifiedTime\n        opengraphSiteName\n        opengraphImage {\n          mediaDetails {\n            sizes {\n              height\n              width\n              name\n              sourceUrl\n            }\n          }\n        }\n        twitterDescription\n        twitterTitle\n        twitterImage {\n          sourceUrl\n        }\n        title\n        breadcrumbs {\n          text\n          url\n        }\n      }\n    }\n  }\n'
): typeof documents['\n  query GetSeo($id: ID!) {\n    page(id: $id) {\n      seo {\n        metaDesc\n        focuskw\n        opengraphType\n        opengraphTitle\n        opengraphDescription\n        opengraphUrl\n        opengraphSiteName\n        opengraphModifiedTime\n        opengraphSiteName\n        opengraphImage {\n          mediaDetails {\n            sizes {\n              height\n              width\n              name\n              sourceUrl\n            }\n          }\n        }\n        twitterDescription\n        twitterTitle\n        twitterImage {\n          sourceUrl\n        }\n        title\n        breadcrumbs {\n          text\n          url\n        }\n      }\n    }\n  }\n']

export function gql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
