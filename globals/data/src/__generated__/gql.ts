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
  '\n  query GetCourse($id: ID!) {\n    course(id: $id) {\n      title\n      content\n      details {\n        faq {\n          answer\n          question\n        }\n        additionalQuestions {\n          title\n          cta {\n            afterBoldText\n            beforeBoldText\n            boldText\n          }\n          button\n        }\n      }\n    }\n  }\n':
    types.GetCourseDocument,
  '\nquery CtaFillForm{\n generalFragments {\n    nodes {\n      commonFragments {\n        cta {\n          title\n          text{\n            beforeAccent\n            accent\n            afterAccent\n          }\n          button\n        }\n      }\n    }\n  }\n}\n':
    types.CtaFillFormDocument,
  '\nquery Faq{\n  generalFragments {\n    nodes {\n      commonFragments {\n        fieldGroupName\n      }\n    }\n  }\n}\n':
    types.FaqDocument,
  '\nquery Footer{\n  generalFragments {\n    nodes {\n          commonFragments {\n        footer {\n          logo {\n            node {\n              sourceUrl\n            }\n          }\n          email\n          privacyPolicy\n          courses {\n            nodes {\n              link\n            }\n          }\n          socials {\n            nodes {\n              link\n            }\n          }\n        }\n      }\n    }\n  }\n}\n':
    types.FooterDocument,
  '\nquery Header{\n  generalFragments {\n    nodes {\n      commonFragments {\n        fieldGroupName\n      }\n    }\n  }\n}\n':
    types.HeaderDocument,
  '\nquery ProcessEducation{\n  generalFragments {\n    nodes {\n      commonFragments {\n        fieldGroupName\n      }\n    }\n  }\n}\n':
    types.ProcessEducationDocument,
  '\nquery Teacher{\n  generalFragments {\n    nodes {\n      commonFragments {\n        teacher {\n          subtitle\n          \n          title\n          \n          description\n          \n          experience {\n            number\n            text\n          }\n          \n          education {\n            title\n            list {\n              element\n            }\n          }\n          \n          gallery {\n            alt\n            image {\n              node {\n                sourceUrl\n              }\n            }\n          }\n          \n        }\n      }\n    }\n  }\n}\n':
    types.TeacherDocument,
  '\nquery IndividualCourse($id: ID!) {\nindividualCourse(id: $id) {\ncontent\ntitle\nindividualCourseData {\n\n process {\n        step {\n          description\n          title\n        }\n      }\n\nbackground {\ndesktop {\nfooter {\nnode {\nsourceUrl\n}\n}\nhero {\nnode {\nsourceUrl\n}\n}\nteacher {\nnode {\nsourceUrl\n}\n}\n}\nmobile {\nfooter {\nnode {\nsourceUrl\n}\n}\nhero {\nnode {\nsourceUrl\n}\n}\nteacher {\nnode {\nsourceUrl\n}\n}\n}\n}\n\nprice {\ncta\ncourseLengthInMonths\ndiscount\nfullPrice\nliveTrainingsNumber\nmonthlyPrice\noldPrice\ntitle\nvideoTrainingsNumber\n}\nhero {\nbenefits {\ncontent\n}\nrunningLine\ncourseConditions {\ndescription\nnumber\n}\ncta\n}\n}\n}\n}\n':
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
  source: '\n  query GetCourse($id: ID!) {\n    course(id: $id) {\n      title\n      content\n      details {\n        faq {\n          answer\n          question\n        }\n        additionalQuestions {\n          title\n          cta {\n            afterBoldText\n            beforeBoldText\n            boldText\n          }\n          button\n        }\n      }\n    }\n  }\n'
): typeof documents['\n  query GetCourse($id: ID!) {\n    course(id: $id) {\n      title\n      content\n      details {\n        faq {\n          answer\n          question\n        }\n        additionalQuestions {\n          title\n          cta {\n            afterBoldText\n            beforeBoldText\n            boldText\n          }\n          button\n        }\n      }\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\nquery CtaFillForm{\n generalFragments {\n    nodes {\n      commonFragments {\n        cta {\n          title\n          text{\n            beforeAccent\n            accent\n            afterAccent\n          }\n          button\n        }\n      }\n    }\n  }\n}\n'
): typeof documents['\nquery CtaFillForm{\n generalFragments {\n    nodes {\n      commonFragments {\n        cta {\n          title\n          text{\n            beforeAccent\n            accent\n            afterAccent\n          }\n          button\n        }\n      }\n    }\n  }\n}\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\nquery Faq{\n  generalFragments {\n    nodes {\n      commonFragments {\n        fieldGroupName\n      }\n    }\n  }\n}\n'
): typeof documents['\nquery Faq{\n  generalFragments {\n    nodes {\n      commonFragments {\n        fieldGroupName\n      }\n    }\n  }\n}\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\nquery Footer{\n  generalFragments {\n    nodes {\n          commonFragments {\n        footer {\n          logo {\n            node {\n              sourceUrl\n            }\n          }\n          email\n          privacyPolicy\n          courses {\n            nodes {\n              link\n            }\n          }\n          socials {\n            nodes {\n              link\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'
): typeof documents['\nquery Footer{\n  generalFragments {\n    nodes {\n          commonFragments {\n        footer {\n          logo {\n            node {\n              sourceUrl\n            }\n          }\n          email\n          privacyPolicy\n          courses {\n            nodes {\n              link\n            }\n          }\n          socials {\n            nodes {\n              link\n            }\n          }\n        }\n      }\n    }\n  }\n}\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\nquery Header{\n  generalFragments {\n    nodes {\n      commonFragments {\n        fieldGroupName\n      }\n    }\n  }\n}\n'
): typeof documents['\nquery Header{\n  generalFragments {\n    nodes {\n      commonFragments {\n        fieldGroupName\n      }\n    }\n  }\n}\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\nquery ProcessEducation{\n  generalFragments {\n    nodes {\n      commonFragments {\n        fieldGroupName\n      }\n    }\n  }\n}\n'
): typeof documents['\nquery ProcessEducation{\n  generalFragments {\n    nodes {\n      commonFragments {\n        fieldGroupName\n      }\n    }\n  }\n}\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\nquery Teacher{\n  generalFragments {\n    nodes {\n      commonFragments {\n        teacher {\n          subtitle\n          \n          title\n          \n          description\n          \n          experience {\n            number\n            text\n          }\n          \n          education {\n            title\n            list {\n              element\n            }\n          }\n          \n          gallery {\n            alt\n            image {\n              node {\n                sourceUrl\n              }\n            }\n          }\n          \n        }\n      }\n    }\n  }\n}\n'
): typeof documents['\nquery Teacher{\n  generalFragments {\n    nodes {\n      commonFragments {\n        teacher {\n          subtitle\n          \n          title\n          \n          description\n          \n          experience {\n            number\n            text\n          }\n          \n          education {\n            title\n            list {\n              element\n            }\n          }\n          \n          gallery {\n            alt\n            image {\n              node {\n                sourceUrl\n              }\n            }\n          }\n          \n        }\n      }\n    }\n  }\n}\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\nquery IndividualCourse($id: ID!) {\nindividualCourse(id: $id) {\ncontent\ntitle\nindividualCourseData {\n\n process {\n        step {\n          description\n          title\n        }\n      }\n\nbackground {\ndesktop {\nfooter {\nnode {\nsourceUrl\n}\n}\nhero {\nnode {\nsourceUrl\n}\n}\nteacher {\nnode {\nsourceUrl\n}\n}\n}\nmobile {\nfooter {\nnode {\nsourceUrl\n}\n}\nhero {\nnode {\nsourceUrl\n}\n}\nteacher {\nnode {\nsourceUrl\n}\n}\n}\n}\n\nprice {\ncta\ncourseLengthInMonths\ndiscount\nfullPrice\nliveTrainingsNumber\nmonthlyPrice\noldPrice\ntitle\nvideoTrainingsNumber\n}\nhero {\nbenefits {\ncontent\n}\nrunningLine\ncourseConditions {\ndescription\nnumber\n}\ncta\n}\n}\n}\n}\n'
): typeof documents['\nquery IndividualCourse($id: ID!) {\nindividualCourse(id: $id) {\ncontent\ntitle\nindividualCourseData {\n\n process {\n        step {\n          description\n          title\n        }\n      }\n\nbackground {\ndesktop {\nfooter {\nnode {\nsourceUrl\n}\n}\nhero {\nnode {\nsourceUrl\n}\n}\nteacher {\nnode {\nsourceUrl\n}\n}\n}\nmobile {\nfooter {\nnode {\nsourceUrl\n}\n}\nhero {\nnode {\nsourceUrl\n}\n}\nteacher {\nnode {\nsourceUrl\n}\n}\n}\n}\n\nprice {\ncta\ncourseLengthInMonths\ndiscount\nfullPrice\nliveTrainingsNumber\nmonthlyPrice\noldPrice\ntitle\nvideoTrainingsNumber\n}\nhero {\nbenefits {\ncontent\n}\nrunningLine\ncourseConditions {\ndescription\nnumber\n}\ncta\n}\n}\n}\n}\n']
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
