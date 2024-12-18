/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

/** Connection between the MainChooseCourseCourses type and the ContentNode type */
export type AcfContentNodeConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'AcfContentNodeConnection'
    /** Edges for the AcfContentNodeConnection connection */
    edges: Array<AcfContentNodeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>
    /** Information about pagination in a connection. */
    pageInfo: AcfContentNodeConnectionPageInfo
  }

/** An edge in a connection */
export type AcfContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'AcfContentNodeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ContentNode
  }

/** Page Info on the &quot;AcfContentNodeConnection&quot; */
export type AcfContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'AcfContentNodeConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** A Field Group managed by ACF */
export type AcfFieldGroup = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
}

/** Fields associated with an ACF Field Group */
export type AcfFieldGroupFields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
}

/** Connection between the Audio type and the MediaItem type */
export type AcfMediaItemConnectionEdge = Edge &
  MediaItemConnectionEdge &
  OneToOneConnection & {
    __typename?: 'AcfMediaItemConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: MediaItem
  }

/** The &quot;Audio&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type Audio = AcfFieldGroup &
  AcfFieldGroupFields &
  Audio_Fields & {
    __typename?: 'Audio'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;file&quot; Field Type added to the schema as part of the &quot;Audio&quot; Field Group */
    song?: Maybe<AcfMediaItemConnectionEdge>
  }

/** Interface representing fields of the ACF &quot;Audio&quot; Field Group */
export type Audio_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;file&quot; Field Type added to the schema as part of the &quot;Audio&quot; Field Group */
  song?: Maybe<AcfMediaItemConnectionEdge>
}

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export type Avatar = {
  __typename?: 'Avatar'
  /** URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo). */
  default?: Maybe<Scalars['String']['output']>
  /** HTML attributes to insert in the IMG element. Is not sanitized. */
  extraAttr?: Maybe<Scalars['String']['output']>
  /** Whether to always show the default image, never the Gravatar. */
  forceDefault?: Maybe<Scalars['Boolean']['output']>
  /** Whether the avatar was successfully found. */
  foundAvatar?: Maybe<Scalars['Boolean']['output']>
  /** Height of the avatar image. */
  height?: Maybe<Scalars['Int']['output']>
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']['output']>
  /** What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order. */
  rating?: Maybe<Scalars['String']['output']>
  /** Type of url scheme to use. Typically HTTP vs. HTTPS. */
  scheme?: Maybe<Scalars['String']['output']>
  /** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
  size?: Maybe<Scalars['Int']['output']>
  /** URL for the gravatar image source. */
  url?: Maybe<Scalars['String']['output']>
  /** Width of the avatar image. */
  width?: Maybe<Scalars['Int']['output']>
}

/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
export enum AvatarRatingEnum {
  /** Indicates a G level avatar rating level. */
  G = 'G',
  /** Indicates a PG level avatar rating level. */
  Pg = 'PG',
  /** Indicates an R level avatar rating level. */
  R = 'R',
  /** Indicates an X level avatar rating level. */
  X = 'X',
}

/** The category type */
export type Category = DatabaseIdentifier &
  HierarchicalNode &
  HierarchicalTermNode &
  MenuItemLinkable &
  Node &
  TermNode &
  UniformResourceIdentifiable & {
    __typename?: 'Category'
    /** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
    ancestors?: Maybe<CategoryToAncestorsCategoryConnection>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of databaseId
     */
    categoryId?: Maybe<Scalars['Int']['output']>
    /** Connection between the category type and its children categories. */
    children?: Maybe<CategoryToCategoryConnection>
    /** Connection between the Category type and the ContentNode type */
    contentNodes?: Maybe<CategoryToContentNodeConnection>
    /** The number of objects connected to the object */
    count?: Maybe<Scalars['Int']['output']>
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']['output']
    /** The description of the object */
    description?: Maybe<Scalars['String']['output']>
    /** Connection between the TermNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>
    /** Connection between the TermNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>
    /** The globally unique ID for the object */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** The link to the term */
    link?: Maybe<Scalars['String']['output']>
    /** The human friendly name of the object. */
    name?: Maybe<Scalars['String']['output']>
    /** Connection between the category type and its parent category. */
    parent?: Maybe<CategoryToParentCategoryConnectionEdge>
    /** Database id of the parent node */
    parentDatabaseId?: Maybe<Scalars['Int']['output']>
    /** The globally unique identifier of the parent node. */
    parentId?: Maybe<Scalars['ID']['output']>
    /** Connection between the Category type and the post type */
    posts?: Maybe<CategoryToPostConnection>
    /** The Yoast SEO data of the Рубрики taxonomy. */
    seo?: Maybe<TaxonomySeo>
    /** An alphanumeric identifier for the object unique to its type. */
    slug?: Maybe<Scalars['String']['output']>
    /** Connection between the Category type and the Taxonomy type */
    taxonomy?: Maybe<CategoryToTaxonomyConnectionEdge>
    /** The name of the taxonomy that the object is associated with */
    taxonomyName?: Maybe<Scalars['String']['output']>
    /** The ID of the term group that this term object belongs to */
    termGroupId?: Maybe<Scalars['Int']['output']>
    /** The taxonomy ID that the object is associated with */
    termTaxonomyId?: Maybe<Scalars['Int']['output']>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The category type */
export type CategoryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The category type */
export type CategoryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<CategoryToCategoryConnectionWhereArgs>
}

/** The category type */
export type CategoryContentNodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<CategoryToContentNodeConnectionWhereArgs>
}

/** The category type */
export type CategoryEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The category type */
export type CategoryEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The category type */
export type CategoryPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<CategoryToPostConnectionWhereArgs>
}

/** Connection to category Nodes */
export type CategoryConnection = {
  /** A list of edges (relational context) between RootQuery and connected category Nodes */
  edges: Array<CategoryConnectionEdge>
  /** A list of connected category Nodes */
  nodes: Array<Category>
  /** Information about pagination in a connection. */
  pageInfo: CategoryConnectionPageInfo
}

/** Edge between a Node and a connected category */
export type CategoryConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected category Node */
  node: Category
}

/** Page Info on the connected CategoryConnectionEdge */
export type CategoryConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum CategoryIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
}

/** Connection between the Category type and the category type */
export type CategoryToAncestorsCategoryConnection = CategoryConnection &
  Connection & {
    __typename?: 'CategoryToAncestorsCategoryConnection'
    /** Edges for the CategoryToAncestorsCategoryConnection connection */
    edges: Array<CategoryToAncestorsCategoryConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Category>
    /** Information about pagination in a connection. */
    pageInfo: CategoryToAncestorsCategoryConnectionPageInfo
  }

/** An edge in a connection */
export type CategoryToAncestorsCategoryConnectionEdge = CategoryConnectionEdge &
  Edge & {
    __typename?: 'CategoryToAncestorsCategoryConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Category
  }

/** Page Info on the &quot;CategoryToAncestorsCategoryConnection&quot; */
export type CategoryToAncestorsCategoryConnectionPageInfo = CategoryConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'CategoryToAncestorsCategoryConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Connection between the Category type and the category type */
export type CategoryToCategoryConnection = CategoryConnection &
  Connection & {
    __typename?: 'CategoryToCategoryConnection'
    /** Edges for the CategoryToCategoryConnection connection */
    edges: Array<CategoryToCategoryConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Category>
    /** Information about pagination in a connection. */
    pageInfo: CategoryToCategoryConnectionPageInfo
  }

/** An edge in a connection */
export type CategoryToCategoryConnectionEdge = CategoryConnectionEdge &
  Edge & {
    __typename?: 'CategoryToCategoryConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Category
  }

/** Page Info on the &quot;CategoryToCategoryConnection&quot; */
export type CategoryToCategoryConnectionPageInfo = CategoryConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'CategoryToCategoryConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the CategoryToCategoryConnection connection */
export type CategoryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the Category type and the ContentNode type */
export type CategoryToContentNodeConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'CategoryToContentNodeConnection'
    /** Edges for the CategoryToContentNodeConnection connection */
    edges: Array<CategoryToContentNodeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>
    /** Information about pagination in a connection. */
    pageInfo: CategoryToContentNodeConnectionPageInfo
  }

/** An edge in a connection */
export type CategoryToContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'CategoryToContentNodeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ContentNode
  }

/** Page Info on the &quot;CategoryToContentNodeConnection&quot; */
export type CategoryToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'CategoryToContentNodeConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the CategoryToContentNodeConnection connection */
export type CategoryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfCategoryEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the Category type and the category type */
export type CategoryToParentCategoryConnectionEdge = CategoryConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'CategoryToParentCategoryConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Category
  }

/** Connection between the Category type and the post type */
export type CategoryToPostConnection = Connection &
  PostConnection & {
    __typename?: 'CategoryToPostConnection'
    /** Edges for the CategoryToPostConnection connection */
    edges: Array<CategoryToPostConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Post>
    /** Information about pagination in a connection. */
    pageInfo: CategoryToPostConnectionPageInfo
  }

/** An edge in a connection */
export type CategoryToPostConnectionEdge = Edge &
  PostConnectionEdge & {
    __typename?: 'CategoryToPostConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Post
  }

/** Page Info on the &quot;CategoryToPostConnection&quot; */
export type CategoryToPostConnectionPageInfo = PageInfo &
  PostConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'CategoryToPostConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the CategoryToPostConnection connection */
export type CategoryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']['input']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']['input']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']['input']>
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']['input']>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the Category type and the Taxonomy type */
export type CategoryToTaxonomyConnectionEdge = Edge &
  OneToOneConnection &
  TaxonomyConnectionEdge & {
    __typename?: 'CategoryToTaxonomyConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Taxonomy
  }

/** A Comment object */
export type Comment = DatabaseIdentifier &
  Node & {
    __typename?: 'Comment'
    /** User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL. */
    agent?: Maybe<Scalars['String']['output']>
    /**
     * The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL.
     * @deprecated Deprecated in favor of the `status` field
     */
    approved?: Maybe<Scalars['Boolean']['output']>
    /** The author of the comment */
    author?: Maybe<CommentToCommenterConnectionEdge>
    /** IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL. */
    authorIp?: Maybe<Scalars['String']['output']>
    /**
     * ID for the comment, unique among comments.
     * @deprecated Deprecated in favor of databaseId
     */
    commentId?: Maybe<Scalars['Int']['output']>
    /** Connection between the Comment type and the ContentNode type */
    commentedOn?: Maybe<CommentToContentNodeConnectionEdge>
    /** Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL. */
    content?: Maybe<Scalars['String']['output']>
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']['output']
    /** Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL. */
    date?: Maybe<Scalars['String']['output']>
    /** Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL. */
    dateGmt?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier for the comment object */
    id: Scalars['ID']['output']
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL. */
    karma?: Maybe<Scalars['Int']['output']>
    /** Connection between the Comment type and the Comment type */
    parent?: Maybe<CommentToParentCommentConnectionEdge>
    /** The database id of the parent comment node or null if it is the root comment */
    parentDatabaseId?: Maybe<Scalars['Int']['output']>
    /** The globally unique identifier of the parent comment node. */
    parentId?: Maybe<Scalars['ID']['output']>
    /** Connection between the Comment type and the Comment type */
    replies?: Maybe<CommentToCommentConnection>
    /** The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL. */
    status?: Maybe<CommentStatusEnum>
    /** Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL. */
    type?: Maybe<Scalars['String']['output']>
  }

/** A Comment object */
export type CommentContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** A Comment object */
export type CommentParentArgs = {
  where?: InputMaybe<CommentToParentCommentConnectionWhereArgs>
}

/** A Comment object */
export type CommentRepliesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<CommentToCommentConnectionWhereArgs>
}

/** A Comment Author object */
export type CommentAuthor = Commenter &
  DatabaseIdentifier &
  Node & {
    __typename?: 'CommentAuthor'
    /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
    avatar?: Maybe<Avatar>
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']['output']
    /** The email for the comment author */
    email?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier for the comment author object */
    id: Scalars['ID']['output']
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** The name for the comment author. */
    name?: Maybe<Scalars['String']['output']>
    /** The url the comment author. */
    url?: Maybe<Scalars['String']['output']>
  }

/** A Comment Author object */
export type CommentAuthorAvatarArgs = {
  forceDefault?: InputMaybe<Scalars['Boolean']['input']>
  rating?: InputMaybe<AvatarRatingEnum>
  size?: InputMaybe<Scalars['Int']['input']>
}

/** Connection to Comment Nodes */
export type CommentConnection = {
  /** A list of edges (relational context) between RootQuery and connected Comment Nodes */
  edges: Array<CommentConnectionEdge>
  /** A list of connected Comment Nodes */
  nodes: Array<Comment>
  /** Information about pagination in a connection. */
  pageInfo: CommentConnectionPageInfo
}

/** Edge between a Node and a connected Comment */
export type CommentConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected Comment Node */
  node: Comment
}

/** Page Info on the connected CommentConnectionEdge */
export type CommentConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** The Type of Identifier used to fetch a single comment node. Default is "ID". To be used along with the "id" field. */
export enum CommentNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
}

/** The status of the comment object. */
export enum CommentStatusEnum {
  /** Comments with the Одобрен status */
  Approve = 'APPROVE',
  /** Comments with the Не одобрен status */
  Hold = 'HOLD',
  /** Comments with the Спам status */
  Spam = 'SPAM',
  /** Comments with the Удалён status */
  Trash = 'TRASH',
}

/** Connection between the Comment type and the Comment type */
export type CommentToCommentConnection = CommentConnection &
  Connection & {
    __typename?: 'CommentToCommentConnection'
    /** Edges for the CommentToCommentConnection connection */
    edges: Array<CommentToCommentConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Comment>
    /** Information about pagination in a connection. */
    pageInfo: CommentToCommentConnectionPageInfo
  }

/** An edge in a connection */
export type CommentToCommentConnectionEdge = CommentConnectionEdge &
  Edge & {
    __typename?: 'CommentToCommentConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Comment
  }

/** Page Info on the &quot;CommentToCommentConnection&quot; */
export type CommentToCommentConnectionPageInfo = CommentConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'CommentToCommentConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the CommentToCommentConnection connection */
export type CommentToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']['input']>
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']['input']>
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']['input']>
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']['input']>
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']['input']>
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']['input']>
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']['input']>
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']['input']>
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']['input']>
}

/** Connection between the Comment type and the Commenter type */
export type CommentToCommenterConnectionEdge = CommenterConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'CommentToCommenterConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Commenter
  }

/** Connection between the Comment type and the ContentNode type */
export type CommentToContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'CommentToContentNodeConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: ContentNode
  }

/** Connection between the Comment type and the Comment type */
export type CommentToParentCommentConnectionEdge = CommentConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'CommentToParentCommentConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Comment
  }

/** Arguments for filtering the CommentToParentCommentConnection connection */
export type CommentToParentCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']['input']>
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']['input']>
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']['input']>
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']['input']>
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']['input']>
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']['input']>
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']['input']>
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']['input']>
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']['input']>
}

/** The author of a comment */
export type Commenter = {
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<Avatar>
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int']['output']
  /** The email address of the author of a comment. */
  email?: Maybe<Scalars['String']['output']>
  /** The globally unique identifier for the comment author. */
  id: Scalars['ID']['output']
  /** Whether the author information is considered restricted. (not fully public) */
  isRestricted?: Maybe<Scalars['Boolean']['output']>
  /** The name of the author of a comment. */
  name?: Maybe<Scalars['String']['output']>
  /** The url of the author of a comment. */
  url?: Maybe<Scalars['String']['output']>
}

/** Edge between a Node and a connected Commenter */
export type CommenterConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected Commenter Node */
  node: Commenter
}

/** Options for ordering the connection */
export enum CommentsConnectionOrderbyEnum {
  /** Order by browser user agent of the commenter. */
  CommentAgent = 'COMMENT_AGENT',
  /** Order by approval status of the comment. */
  CommentApproved = 'COMMENT_APPROVED',
  /** Order by name of the comment author. */
  CommentAuthor = 'COMMENT_AUTHOR',
  /** Order by e-mail of the comment author. */
  CommentAuthorEmail = 'COMMENT_AUTHOR_EMAIL',
  /** Order by IP address of the comment author. */
  CommentAuthorIp = 'COMMENT_AUTHOR_IP',
  /** Order by URL address of the comment author. */
  CommentAuthorUrl = 'COMMENT_AUTHOR_URL',
  /** Order by the comment contents. */
  CommentContent = 'COMMENT_CONTENT',
  /** Order by date/time timestamp of the comment. */
  CommentDate = 'COMMENT_DATE',
  /** Order by GMT timezone date/time timestamp of the comment. */
  CommentDateGmt = 'COMMENT_DATE_GMT',
  /** Order by the globally unique identifier for the comment object */
  CommentId = 'COMMENT_ID',
  /** Order by the array list of comment IDs listed in the where clause. */
  CommentIn = 'COMMENT_IN',
  /** Order by the comment karma score. */
  CommentKarma = 'COMMENT_KARMA',
  /** Order by the comment parent ID. */
  CommentParent = 'COMMENT_PARENT',
  /** Order by the post object ID. */
  CommentPostId = 'COMMENT_POST_ID',
  /** Order by the the type of comment, such as 'comment', 'pingback', or 'trackback'. */
  CommentType = 'COMMENT_TYPE',
  /** Order by the user ID. */
  UserId = 'USER_ID',
}

/** A plural connection from one Node Type in the Graph to another Node Type, with support for relational data via &quot;edges&quot;. */
export type Connection = {
  /** A list of edges (relational context) between connected nodes */
  edges: Array<Edge>
  /** A list of connected nodes */
  nodes: Array<Node>
  /** Information about pagination in a connection. */
  pageInfo: PageInfo
}

/** The &quot;Consultation&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type Consultation = AcfFieldGroup &
  AcfFieldGroupFields &
  Consultation_Fields & {
    __typename?: 'Consultation'
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Consultation&quot; Field Group */
    cta?: Maybe<ConsultationCta>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Consultation&quot; Field Group */
    modal?: Maybe<ConsultationModal>
  }

/** The &quot;ConsultationCta&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ConsultationCta = AcfFieldGroup &
  AcfFieldGroupFields &
  ConsultationCta_Fields & {
    __typename?: 'ConsultationCta'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ConsultationCta&quot; Field Group */
    button?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;ConsultationCta&quot; Field Group */
    text?: Maybe<ConsultationCtaText>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ConsultationCta&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** The &quot;ConsultationCtaText&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ConsultationCtaText = AcfFieldGroup &
  AcfFieldGroupFields &
  ConsultationCtaText_Fields & {
    __typename?: 'ConsultationCtaText'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ConsultationCtaText&quot; Field Group */
    accent?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ConsultationCtaText&quot; Field Group */
    afterAccent?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ConsultationCtaText&quot; Field Group */
    beforeAccent?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;ConsultationCtaText&quot; Field Group */
export type ConsultationCtaText_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ConsultationCtaText&quot; Field Group */
  accent?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ConsultationCtaText&quot; Field Group */
  afterAccent?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ConsultationCtaText&quot; Field Group */
  beforeAccent?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;ConsultationCta&quot; Field Group */
export type ConsultationCta_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ConsultationCta&quot; Field Group */
  button?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;ConsultationCta&quot; Field Group */
  text?: Maybe<ConsultationCtaText>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ConsultationCta&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** The &quot;ConsultationModal&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ConsultationModal = AcfFieldGroup &
  AcfFieldGroupFields &
  ConsultationModal_Fields & {
    __typename?: 'ConsultationModal'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ConsultationModal&quot; Field Group */
    subtitle?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ConsultationModal&quot; Field Group */
    textForCheckbox?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ConsultationModal&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;ConsultationModal&quot; Field Group */
export type ConsultationModal_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ConsultationModal&quot; Field Group */
  subtitle?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ConsultationModal&quot; Field Group */
  textForCheckbox?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ConsultationModal&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;Consultation&quot; Field Group */
export type Consultation_Fields = {
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Consultation&quot; Field Group */
  cta?: Maybe<ConsultationCta>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Consultation&quot; Field Group */
  modal?: Maybe<ConsultationModal>
}

/** The &quot;Contacts&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type Contacts = AcfFieldGroup &
  AcfFieldGroupFields &
  Contacts_Fields & {
    __typename?: 'Contacts'
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Contacts&quot; Field Group */
    background?: Maybe<ContactsBackground>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;Contacts&quot; Field Group */
    socials?: Maybe<Array<Maybe<ContactsSocials>>>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Contacts&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** The &quot;ContactsBackground&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ContactsBackground = AcfFieldGroup &
  AcfFieldGroupFields &
  ContactsBackground_Fields & {
    __typename?: 'ContactsBackground'
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContactsBackground&quot; Field Group */
    desktop?: Maybe<AcfMediaItemConnectionEdge>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContactsBackground&quot; Field Group */
    mobile?: Maybe<AcfMediaItemConnectionEdge>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContactsBackground&quot; Field Group */
    noise?: Maybe<AcfMediaItemConnectionEdge>
  }

/** Interface representing fields of the ACF &quot;ContactsBackground&quot; Field Group */
export type ContactsBackground_Fields = {
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContactsBackground&quot; Field Group */
  desktop?: Maybe<AcfMediaItemConnectionEdge>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContactsBackground&quot; Field Group */
  mobile?: Maybe<AcfMediaItemConnectionEdge>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContactsBackground&quot; Field Group */
  noise?: Maybe<AcfMediaItemConnectionEdge>
}

/** The &quot;ContactsSocials&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ContactsSocials = AcfFieldGroup &
  AcfFieldGroupFields &
  ContactsSocials_Fields & {
    __typename?: 'ContactsSocials'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContactsSocials&quot; Field Group */
    content?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContactsSocials&quot; Field Group */
    link?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContactsSocials&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;ContactsSocials&quot; Field Group */
export type ContactsSocials_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContactsSocials&quot; Field Group */
  content?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContactsSocials&quot; Field Group */
  link?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContactsSocials&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;Contacts&quot; Field Group */
export type Contacts_Fields = {
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Contacts&quot; Field Group */
  background?: Maybe<ContactsBackground>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;Contacts&quot; Field Group */
  socials?: Maybe<Array<Maybe<ContactsSocials>>>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Contacts&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** The &quot;Content&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type Content = AcfFieldGroup &
  AcfFieldGroupFields &
  Content_Fields & {
    __typename?: 'Content'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Content&quot; Field Group */
    aboutCourse?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Content&quot; Field Group */
    background?: Maybe<ContentBackground>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Content&quot; Field Group */
    cta?: Maybe<ContentCta>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Content&quot; Field Group */
    details?: Maybe<ContentDetails>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Content&quot; Field Group */
    hero?: Maybe<ContentHero>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Content&quot; Field Group */
    path?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Content&quot; Field Group */
    payment?: Maybe<ContentPayment>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Content&quot; Field Group */
    price?: Maybe<ContentPrice>
  }

/** The &quot;ContentBackground&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ContentBackground = AcfFieldGroup &
  AcfFieldGroupFields &
  ContentBackground_Fields & {
    __typename?: 'ContentBackground'
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;ContentBackground&quot; Field Group */
    desktop?: Maybe<ContentBackgroundDesktop>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;ContentBackground&quot; Field Group */
    mobile?: Maybe<ContentBackgroundMobile>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContentBackground&quot; Field Group */
    noise?: Maybe<AcfMediaItemConnectionEdge>
  }

/** The &quot;ContentBackgroundDesktop&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ContentBackgroundDesktop = AcfFieldGroup &
  AcfFieldGroupFields &
  ContentBackgroundDesktop_Fields & {
    __typename?: 'ContentBackgroundDesktop'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContentBackgroundDesktop&quot; Field Group */
    footer?: Maybe<AcfMediaItemConnectionEdge>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContentBackgroundDesktop&quot; Field Group */
    hero?: Maybe<AcfMediaItemConnectionEdge>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContentBackgroundDesktop&quot; Field Group */
    teacher?: Maybe<AcfMediaItemConnectionEdge>
  }

/** Interface representing fields of the ACF &quot;ContentBackgroundDesktop&quot; Field Group */
export type ContentBackgroundDesktop_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContentBackgroundDesktop&quot; Field Group */
  footer?: Maybe<AcfMediaItemConnectionEdge>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContentBackgroundDesktop&quot; Field Group */
  hero?: Maybe<AcfMediaItemConnectionEdge>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContentBackgroundDesktop&quot; Field Group */
  teacher?: Maybe<AcfMediaItemConnectionEdge>
}

/** The &quot;ContentBackgroundMobile&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ContentBackgroundMobile = AcfFieldGroup &
  AcfFieldGroupFields &
  ContentBackgroundMobile_Fields & {
    __typename?: 'ContentBackgroundMobile'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContentBackgroundMobile&quot; Field Group */
    footer?: Maybe<AcfMediaItemConnectionEdge>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContentBackgroundMobile&quot; Field Group */
    hero?: Maybe<AcfMediaItemConnectionEdge>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContentBackgroundMobile&quot; Field Group */
    teacher?: Maybe<AcfMediaItemConnectionEdge>
  }

/** Interface representing fields of the ACF &quot;ContentBackgroundMobile&quot; Field Group */
export type ContentBackgroundMobile_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContentBackgroundMobile&quot; Field Group */
  footer?: Maybe<AcfMediaItemConnectionEdge>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContentBackgroundMobile&quot; Field Group */
  hero?: Maybe<AcfMediaItemConnectionEdge>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContentBackgroundMobile&quot; Field Group */
  teacher?: Maybe<AcfMediaItemConnectionEdge>
}

/** Interface representing fields of the ACF &quot;ContentBackground&quot; Field Group */
export type ContentBackground_Fields = {
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;ContentBackground&quot; Field Group */
  desktop?: Maybe<ContentBackgroundDesktop>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;ContentBackground&quot; Field Group */
  mobile?: Maybe<ContentBackgroundMobile>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContentBackground&quot; Field Group */
  noise?: Maybe<AcfMediaItemConnectionEdge>
}

/** The &quot;ContentCta&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ContentCta = AcfFieldGroup &
  AcfFieldGroupFields &
  ContentCta_Fields & {
    __typename?: 'ContentCta'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;ContentCta&quot; Field Group */
    skillsImage?: Maybe<ContentCtaSkillsImage>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentCta&quot; Field Group */
    subtitle?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentCta&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** The &quot;ContentCtaSkillsImage&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ContentCtaSkillsImage = AcfFieldGroup &
  AcfFieldGroupFields &
  ContentCtaSkillsImage_Fields & {
    __typename?: 'ContentCtaSkillsImage'
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContentCtaSkillsImage&quot; Field Group */
    compactComposition?: Maybe<AcfMediaItemConnectionEdge>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContentCtaSkillsImage&quot; Field Group */
    wideComposition?: Maybe<AcfMediaItemConnectionEdge>
  }

/** Interface representing fields of the ACF &quot;ContentCtaSkillsImage&quot; Field Group */
export type ContentCtaSkillsImage_Fields = {
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContentCtaSkillsImage&quot; Field Group */
  compactComposition?: Maybe<AcfMediaItemConnectionEdge>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContentCtaSkillsImage&quot; Field Group */
  wideComposition?: Maybe<AcfMediaItemConnectionEdge>
}

/** Interface representing fields of the ACF &quot;ContentCta&quot; Field Group */
export type ContentCta_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;ContentCta&quot; Field Group */
  skillsImage?: Maybe<ContentCtaSkillsImage>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentCta&quot; Field Group */
  subtitle?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentCta&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** The &quot;ContentDetails&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ContentDetails = AcfFieldGroup &
  AcfFieldGroupFields &
  ContentDetails_Fields & {
    __typename?: 'ContentDetails'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentDetails&quot; Field Group */
    description?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;ContentDetails&quot; Field Group */
    levels?: Maybe<Array<Maybe<ContentDetailsLevels>>>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentDetails&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** The &quot;ContentDetailsLevels&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ContentDetailsLevels = AcfFieldGroup &
  AcfFieldGroupFields &
  ContentDetailsLevels_Fields & {
    __typename?: 'ContentDetailsLevels'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentDetailsLevels&quot; Field Group */
    content?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ContentDetailsLevels&quot; Field Group */
    lengthOfCourseInMonths?: Maybe<Scalars['Float']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentDetailsLevels&quot; Field Group */
    level?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ContentDetailsLevels&quot; Field Group */
    liveTrainingsNumber?: Maybe<Scalars['Float']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentDetailsLevels&quot; Field Group */
    target?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentDetailsLevels&quot; Field Group */
    tooltip?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ContentDetailsLevels&quot; Field Group */
    videoTrainingsNumber?: Maybe<Scalars['Float']['output']>
  }

/** Interface representing fields of the ACF &quot;ContentDetailsLevels&quot; Field Group */
export type ContentDetailsLevels_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentDetailsLevels&quot; Field Group */
  content?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ContentDetailsLevels&quot; Field Group */
  lengthOfCourseInMonths?: Maybe<Scalars['Float']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentDetailsLevels&quot; Field Group */
  level?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ContentDetailsLevels&quot; Field Group */
  liveTrainingsNumber?: Maybe<Scalars['Float']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentDetailsLevels&quot; Field Group */
  target?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentDetailsLevels&quot; Field Group */
  tooltip?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ContentDetailsLevels&quot; Field Group */
  videoTrainingsNumber?: Maybe<Scalars['Float']['output']>
}

/** Interface representing fields of the ACF &quot;ContentDetails&quot; Field Group */
export type ContentDetails_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentDetails&quot; Field Group */
  description?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;ContentDetails&quot; Field Group */
  levels?: Maybe<Array<Maybe<ContentDetailsLevels>>>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentDetails&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** The &quot;ContentHero&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ContentHero = AcfFieldGroup &
  AcfFieldGroupFields &
  ContentHero_Fields & {
    __typename?: 'ContentHero'
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;ContentHero&quot; Field Group */
    cta?: Maybe<ContentHeroCta>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentHero&quot; Field Group */
    description?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Running line */
    runningLine?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentHero&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** The &quot;ContentHeroCta&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ContentHeroCta = AcfFieldGroup &
  AcfFieldGroupFields &
  ContentHeroCta_Fields & {
    __typename?: 'ContentHeroCta'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;ContentHeroCta&quot; Field Group */
    tagsCloud?: Maybe<Array<Maybe<ContentHeroCtaTagsCloud>>>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentHeroCta&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** The &quot;ContentHeroCtaTagsCloud&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ContentHeroCtaTagsCloud = AcfFieldGroup &
  AcfFieldGroupFields &
  ContentHeroCtaTagsCloud_Fields & {
    __typename?: 'ContentHeroCtaTagsCloud'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentHeroCtaTagsCloud&quot; Field Group */
    tag?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;ContentHeroCtaTagsCloud&quot; Field Group */
export type ContentHeroCtaTagsCloud_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentHeroCtaTagsCloud&quot; Field Group */
  tag?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;ContentHeroCta&quot; Field Group */
export type ContentHeroCta_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;ContentHeroCta&quot; Field Group */
  tagsCloud?: Maybe<Array<Maybe<ContentHeroCtaTagsCloud>>>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentHeroCta&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;ContentHero&quot; Field Group */
export type ContentHero_Fields = {
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;ContentHero&quot; Field Group */
  cta?: Maybe<ContentHeroCta>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentHero&quot; Field Group */
  description?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Running line */
  runningLine?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentHero&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** Nodes used to manage content */
export type ContentNode = {
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String']['output']
  /** The ID of the node in the database. */
  databaseId: Scalars['Int']['output']
  /** Post publishing date. */
  date?: Maybe<Scalars['String']['output']>
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']['output']>
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']['output']>
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']['output']>
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']['output']>
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output']
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']['output']>
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']['output']>
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output']
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>
  /** The permalink of the post */
  link?: Maybe<Scalars['String']['output']>
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']['output']>
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']['output']>
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']['output']>
  /** The Yoast SEO data of the ContentNode */
  seo?: Maybe<PostTypeSeo>
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']['output']>
  /** The current status of the object */
  status?: Maybe<Scalars['String']['output']>
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>
}

/** Nodes used to manage content */
export type ContentNodeEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Nodes used to manage content */
export type ContentNodeEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Connection to ContentNode Nodes */
export type ContentNodeConnection = {
  /** A list of edges (relational context) between ContentType and connected ContentNode Nodes */
  edges: Array<ContentNodeConnectionEdge>
  /** A list of connected ContentNode Nodes */
  nodes: Array<ContentNode>
  /** Information about pagination in a connection. */
  pageInfo: ContentNodeConnectionPageInfo
}

/** Edge between a Node and a connected ContentNode */
export type ContentNodeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected ContentNode Node */
  node: ContentNode
}

/** Page Info on the connected ContentNodeConnectionEdge */
export type ContentNodeConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ContentNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Connection between the ContentNode type and the ContentType type */
export type ContentNodeToContentTypeConnectionEdge = ContentTypeConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'ContentNodeToContentTypeConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: ContentType
  }

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLastConnectionEdge = Edge &
  OneToOneConnection &
  UserConnectionEdge & {
    __typename?: 'ContentNodeToEditLastConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: User
  }

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLockConnectionEdge = Edge &
  OneToOneConnection &
  UserConnectionEdge & {
    __typename?: 'ContentNodeToEditLockConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The timestamp for when the node was last edited */
    lockTimestamp?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: User
  }

/** Connection between the ContentNode type and the EnqueuedScript type */
export type ContentNodeToEnqueuedScriptConnection = Connection &
  EnqueuedScriptConnection & {
    __typename?: 'ContentNodeToEnqueuedScriptConnection'
    /** Edges for the ContentNodeToEnqueuedScriptConnection connection */
    edges: Array<ContentNodeToEnqueuedScriptConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<EnqueuedScript>
    /** Information about pagination in a connection. */
    pageInfo: ContentNodeToEnqueuedScriptConnectionPageInfo
  }

/** An edge in a connection */
export type ContentNodeToEnqueuedScriptConnectionEdge = Edge &
  EnqueuedScriptConnectionEdge & {
    __typename?: 'ContentNodeToEnqueuedScriptConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: EnqueuedScript
  }

/** Page Info on the &quot;ContentNodeToEnqueuedScriptConnection&quot; */
export type ContentNodeToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'ContentNodeToEnqueuedScriptConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Connection between the ContentNode type and the EnqueuedStylesheet type */
export type ContentNodeToEnqueuedStylesheetConnection = Connection &
  EnqueuedStylesheetConnection & {
    __typename?: 'ContentNodeToEnqueuedStylesheetConnection'
    /** Edges for the ContentNodeToEnqueuedStylesheetConnection connection */
    edges: Array<ContentNodeToEnqueuedStylesheetConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<EnqueuedStylesheet>
    /** Information about pagination in a connection. */
    pageInfo: ContentNodeToEnqueuedStylesheetConnectionPageInfo
  }

/** An edge in a connection */
export type ContentNodeToEnqueuedStylesheetConnectionEdge = Edge &
  EnqueuedStylesheetConnectionEdge & {
    __typename?: 'ContentNodeToEnqueuedStylesheetConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: EnqueuedStylesheet
  }

/** Page Info on the &quot;ContentNodeToEnqueuedStylesheetConnection&quot; */
export type ContentNodeToEnqueuedStylesheetConnectionPageInfo =
  EnqueuedStylesheetConnectionPageInfo &
    PageInfo &
    WpPageInfo & {
      __typename?: 'ContentNodeToEnqueuedStylesheetConnectionPageInfo'
      /** When paginating forwards, the cursor to continue. */
      endCursor?: Maybe<Scalars['String']['output']>
      /** When paginating forwards, are there more items? */
      hasNextPage: Scalars['Boolean']['output']
      /** When paginating backwards, are there more items? */
      hasPreviousPage: Scalars['Boolean']['output']
      /** Raw schema for page */
      seo?: Maybe<SeoPostTypePageInfo>
      /** When paginating backwards, the cursor to continue. */
      startCursor?: Maybe<Scalars['String']['output']>
    }

/** The &quot;ContentPayment&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ContentPayment = AcfFieldGroup &
  AcfFieldGroupFields &
  ContentPayment_Fields & {
    __typename?: 'ContentPayment'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentPayment&quot; Field Group */
    benefit?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;ContentPayment&quot; Field Group */
    courses?: Maybe<AcfContentNodeConnection>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentPayment&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** The &quot;ContentPayment&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ContentPaymentCoursesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Interface representing fields of the ACF &quot;ContentPayment&quot; Field Group */
export type ContentPayment_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentPayment&quot; Field Group */
  benefit?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;ContentPayment&quot; Field Group */
  courses?: Maybe<AcfContentNodeConnection>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentPayment&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;ContentPayment&quot; Field Group */
export type ContentPayment_FieldsCoursesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The &quot;ContentPrice&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ContentPrice = AcfFieldGroup &
  AcfFieldGroupFields &
  ContentPrice_Fields & {
    __typename?: 'ContentPrice'
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;ContentPrice&quot; Field Group */
    details?: Maybe<ContentPriceDetails>
    /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ContentPrice&quot; Field Group */
    discount?: Maybe<Scalars['Float']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ContentPrice&quot; Field Group */
    priceFull?: Maybe<Scalars['Float']['output']>
    /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ContentPrice&quot; Field Group */
    priceMonthly?: Maybe<Scalars['Float']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentPrice&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** The &quot;ContentPriceDetails&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ContentPriceDetails = AcfFieldGroup &
  AcfFieldGroupFields &
  ContentPriceDetails_Fields & {
    __typename?: 'ContentPriceDetails'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ContentPriceDetails&quot; Field Group */
    levelsNumber?: Maybe<Scalars['Float']['output']>
    /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ContentPriceDetails&quot; Field Group */
    monthsNumber?: Maybe<Scalars['Float']['output']>
    /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ContentPriceDetails&quot; Field Group */
    videoTrainingsNumber?: Maybe<Scalars['Float']['output']>
  }

/** Interface representing fields of the ACF &quot;ContentPriceDetails&quot; Field Group */
export type ContentPriceDetails_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ContentPriceDetails&quot; Field Group */
  levelsNumber?: Maybe<Scalars['Float']['output']>
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ContentPriceDetails&quot; Field Group */
  monthsNumber?: Maybe<Scalars['Float']['output']>
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ContentPriceDetails&quot; Field Group */
  videoTrainingsNumber?: Maybe<Scalars['Float']['output']>
}

/** Interface representing fields of the ACF &quot;ContentPrice&quot; Field Group */
export type ContentPrice_Fields = {
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;ContentPrice&quot; Field Group */
  details?: Maybe<ContentPriceDetails>
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ContentPrice&quot; Field Group */
  discount?: Maybe<Scalars['Float']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ContentPrice&quot; Field Group */
  priceFull?: Maybe<Scalars['Float']['output']>
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ContentPrice&quot; Field Group */
  priceMonthly?: Maybe<Scalars['Float']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentPrice&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** The template assigned to a node of content */
export type ContentTemplate = {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']['output']>
}

/** An Post Type object */
export type ContentType = Node &
  UniformResourceIdentifiable & {
    __typename?: 'ContentType'
    /** Whether this content type should can be exported. */
    canExport?: Maybe<Scalars['Boolean']['output']>
    /** Connection between the ContentType type and the Taxonomy type */
    connectedTaxonomies?: Maybe<ContentTypeToTaxonomyConnection>
    /** Connection between the ContentType type and the ContentNode type */
    contentNodes?: Maybe<ContentTypeToContentNodeConnection>
    /** Whether content of this type should be deleted when the author of it is deleted from the system. */
    deleteWithUser?: Maybe<Scalars['Boolean']['output']>
    /** Description of the content type. */
    description?: Maybe<Scalars['String']['output']>
    /** Whether to exclude nodes of this content type from front end search results. */
    excludeFromSearch?: Maybe<Scalars['Boolean']['output']>
    /** The plural name of the content type within the GraphQL Schema. */
    graphqlPluralName?: Maybe<Scalars['String']['output']>
    /** The singular name of the content type within the GraphQL Schema. */
    graphqlSingleName?: Maybe<Scalars['String']['output']>
    /** Whether this content type should have archives. Content archives are generated by type and by date. */
    hasArchive?: Maybe<Scalars['Boolean']['output']>
    /** Whether the content type is hierarchical, for example pages. */
    hierarchical?: Maybe<Scalars['Boolean']['output']>
    /** The globally unique identifier of the post-type object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether this page is set to the static front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether this page is set to the blog posts page. */
    isPostsPage: Scalars['Boolean']['output']
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** Display name of the content type. */
    label?: Maybe<Scalars['String']['output']>
    /** Details about the content type labels. */
    labels?: Maybe<PostTypeLabelDetails>
    /** The name of the icon file to display as a menu icon. */
    menuIcon?: Maybe<Scalars['String']['output']>
    /** The position of this post type in the menu. Only applies if show_in_menu is true. */
    menuPosition?: Maybe<Scalars['Int']['output']>
    /** The internal name of the post type. This should not be used for display purposes. */
    name?: Maybe<Scalars['String']['output']>
    /** Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention. */
    public?: Maybe<Scalars['Boolean']['output']>
    /** Whether queries can be performed on the front end for the content type as part of parse_request(). */
    publiclyQueryable?: Maybe<Scalars['Boolean']['output']>
    /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
    restBase?: Maybe<Scalars['String']['output']>
    /** The REST Controller class assigned to handling this content type. */
    restControllerClass?: Maybe<Scalars['String']['output']>
    /** Makes this content type available via the admin bar. */
    showInAdminBar?: Maybe<Scalars['Boolean']['output']>
    /** Whether to add the content type to the GraphQL Schema. */
    showInGraphql?: Maybe<Scalars['Boolean']['output']>
    /** Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that. */
    showInMenu?: Maybe<Scalars['Boolean']['output']>
    /** Makes this content type available for selection in navigation menus. */
    showInNavMenus?: Maybe<Scalars['Boolean']['output']>
    /** Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace. */
    showInRest?: Maybe<Scalars['Boolean']['output']>
    /** Whether to generate and allow a UI for managing this content type in the admin. */
    showUi?: Maybe<Scalars['Boolean']['output']>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** An Post Type object */
export type ContentTypeConnectedTaxonomiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** An Post Type object */
export type ContentTypeContentNodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ContentTypeToContentNodeConnectionWhereArgs>
}

/** Connection to ContentType Nodes */
export type ContentTypeConnection = {
  /** A list of edges (relational context) between RootQuery and connected ContentType Nodes */
  edges: Array<ContentTypeConnectionEdge>
  /** A list of connected ContentType Nodes */
  nodes: Array<ContentType>
  /** Information about pagination in a connection. */
  pageInfo: ContentTypeConnectionPageInfo
}

/** Edge between a Node and a connected ContentType */
export type ContentTypeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected ContentType Node */
  node: ContentType
}

/** Page Info on the connected ContentTypeConnectionEdge */
export type ContentTypeConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** Allowed Content Types */
export enum ContentTypeEnum {
  /** The Type of Content object */
  Attachment = 'ATTACHMENT',
  /** The Type of Content object */
  Course = 'COURSE',
  /** The Type of Content object */
  GeneralFragment = 'GENERAL_FRAGMENT',
  /** The Type of Content object */
  IndividualCourse = 'INDIVIDUAL_COURSE',
  /** The Type of Content object */
  Page = 'PAGE',
  /** The Type of Content object */
  Post = 'POST',
}

/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */
export enum ContentTypeIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the content type. */
  Name = 'NAME',
}

/** Connection between the ContentType type and the ContentNode type */
export type ContentTypeToContentNodeConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'ContentTypeToContentNodeConnection'
    /** Edges for the ContentTypeToContentNodeConnection connection */
    edges: Array<ContentTypeToContentNodeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>
    /** Information about pagination in a connection. */
    pageInfo: ContentTypeToContentNodeConnectionPageInfo
  }

/** An edge in a connection */
export type ContentTypeToContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'ContentTypeToContentNodeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ContentNode
  }

/** Page Info on the &quot;ContentTypeToContentNodeConnection&quot; */
export type ContentTypeToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'ContentTypeToContentNodeConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the ContentTypeToContentNodeConnection connection */
export type ContentTypeToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the ContentType type and the Taxonomy type */
export type ContentTypeToTaxonomyConnection = Connection &
  TaxonomyConnection & {
    __typename?: 'ContentTypeToTaxonomyConnection'
    /** Edges for the ContentTypeToTaxonomyConnection connection */
    edges: Array<ContentTypeToTaxonomyConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Taxonomy>
    /** Information about pagination in a connection. */
    pageInfo: ContentTypeToTaxonomyConnectionPageInfo
  }

/** An edge in a connection */
export type ContentTypeToTaxonomyConnectionEdge = Edge &
  TaxonomyConnectionEdge & {
    __typename?: 'ContentTypeToTaxonomyConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Taxonomy
  }

/** Page Info on the &quot;ContentTypeToTaxonomyConnection&quot; */
export type ContentTypeToTaxonomyConnectionPageInfo = PageInfo &
  TaxonomyConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'ContentTypeToTaxonomyConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Allowed Content Types of the Category taxonomy. */
export enum ContentTypesOfCategoryEnum {
  /** The Type of Content object */
  Post = 'POST',
}

/** Allowed Content Types of the PostFormat taxonomy. */
export enum ContentTypesOfPostFormatEnum {
  /** The Type of Content object */
  Post = 'POST',
}

/** Allowed Content Types of the Tag taxonomy. */
export enum ContentTypesOfTagEnum {
  /** The Type of Content object */
  Post = 'POST',
}

/** Interface representing fields of the ACF &quot;Content&quot; Field Group */
export type Content_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Content&quot; Field Group */
  aboutCourse?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Content&quot; Field Group */
  background?: Maybe<ContentBackground>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Content&quot; Field Group */
  cta?: Maybe<ContentCta>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Content&quot; Field Group */
  details?: Maybe<ContentDetails>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Content&quot; Field Group */
  hero?: Maybe<ContentHero>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Content&quot; Field Group */
  path?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Content&quot; Field Group */
  payment?: Maybe<ContentPayment>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Content&quot; Field Group */
  price?: Maybe<ContentPrice>
}

/** The &quot;ContractOffer&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ContractOffer = AcfFieldGroup &
  AcfFieldGroupFields &
  ContractOffer_Fields & {
    __typename?: 'ContractOffer'
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;ContractOffer&quot; Field Group */
    background?: Maybe<ContractOfferBackground>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContractOffer&quot; Field Group */
    creationYear?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;ContractOffer&quot; Field Group */
    points?: Maybe<Array<Maybe<ContractOfferPoints>>>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContractOffer&quot; Field Group */
    subtitle?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContractOffer&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** The &quot;ContractOfferBackground&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ContractOfferBackground = AcfFieldGroup &
  AcfFieldGroupFields &
  ContractOfferBackground_Fields & {
    __typename?: 'ContractOfferBackground'
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContractOfferBackground&quot; Field Group */
    desktopFooter?: Maybe<AcfMediaItemConnectionEdge>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContractOfferBackground&quot; Field Group */
    mobileFooter?: Maybe<AcfMediaItemConnectionEdge>
  }

/** Interface representing fields of the ACF &quot;ContractOfferBackground&quot; Field Group */
export type ContractOfferBackground_Fields = {
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContractOfferBackground&quot; Field Group */
  desktopFooter?: Maybe<AcfMediaItemConnectionEdge>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContractOfferBackground&quot; Field Group */
  mobileFooter?: Maybe<AcfMediaItemConnectionEdge>
}

/** The &quot;ContractOfferPoints&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ContractOfferPoints = AcfFieldGroup &
  AcfFieldGroupFields &
  ContractOfferPoints_Fields & {
    __typename?: 'ContractOfferPoints'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContractOfferPoints&quot; Field Group */
    description?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContractOfferPoints&quot; Field Group */
    subtitle?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContractOfferPoints&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;ContractOfferPoints&quot; Field Group */
export type ContractOfferPoints_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContractOfferPoints&quot; Field Group */
  description?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContractOfferPoints&quot; Field Group */
  subtitle?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContractOfferPoints&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;ContractOffer&quot; Field Group */
export type ContractOffer_Fields = {
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;ContractOffer&quot; Field Group */
  background?: Maybe<ContractOfferBackground>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContractOffer&quot; Field Group */
  creationYear?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;ContractOffer&quot; Field Group */
  points?: Maybe<Array<Maybe<ContractOfferPoints>>>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContractOffer&quot; Field Group */
  subtitle?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContractOffer&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** The course type */
export type Course = ContentNode &
  DatabaseIdentifier &
  HierarchicalContentNode &
  HierarchicalNode &
  MenuItemLinkable &
  Node &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithTemplate &
  NodeWithTitle &
  Previewable &
  UniformResourceIdentifiable &
  WithAcfContent & {
    __typename?: 'Course'
    /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
    ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>
    /** Connection between the HierarchicalContentNode type and the ContentNode type */
    children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>
    /** Fields of the Content ACF Field Group */
    content?: Maybe<Content>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    courseId: Scalars['Int']['output']
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']['output']
    /** Post publishing date. */
    date?: Maybe<Scalars['String']['output']>
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']['output']>
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']['output']>
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId?: Maybe<Scalars['ID']['output']>
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the course object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']['output']>
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>
    /** The permalink of the post */
    link?: Maybe<Scalars['String']['output']>
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']['output']>
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']['output']>
    /** The parent of the node. The parent object can be of various types */
    parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>
    /** Database id of the parent node */
    parentDatabaseId?: Maybe<Scalars['Int']['output']>
    /** The globally unique identifier of the parent node. */
    parentId?: Maybe<Scalars['ID']['output']>
    /** Connection between the Course type and the course type */
    preview?: Maybe<CourseToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the ContentNode */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to a node of content */
    template?: Maybe<ContentTemplate>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The course type */
export type CourseAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>
}

/** The course type */
export type CourseChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>
}

/** The course type */
export type CourseEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The course type */
export type CourseEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The course type */
export type CourseTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** Connection to course Nodes */
export type CourseConnection = {
  /** A list of edges (relational context) between RootQuery and connected course Nodes */
  edges: Array<CourseConnectionEdge>
  /** A list of connected course Nodes */
  nodes: Array<Course>
  /** Information about pagination in a connection. */
  pageInfo: CourseConnectionPageInfo
}

/** Edge between a Node and a connected course */
export type CourseConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected course Node */
  node: Course
}

/** Page Info on the connected CourseConnectionEdge */
export type CourseConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum CourseIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Connection between the Course type and the course type */
export type CourseToPreviewConnectionEdge = CourseConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'CourseToPreviewConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Course
  }

/** Input for the createCategory mutation. */
export type CreateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The description of the category object */
  description?: InputMaybe<Scalars['String']['input']>
  /** The name of the category object to mutate */
  name: Scalars['String']['input']
  /** The ID of the category that should be set as the parent */
  parentId?: InputMaybe<Scalars['ID']['input']>
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createCategory mutation. */
export type CreateCategoryPayload = {
  __typename?: 'CreateCategoryPayload'
  /** The created category */
  category?: Maybe<Category>
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
}

/** Input for the createComment mutation. */
export type CreateCommentInput = {
  /** The approval status of the comment. */
  approved?: InputMaybe<Scalars['String']['input']>
  /** The name of the comment's author. */
  author?: InputMaybe<Scalars['String']['input']>
  /** The email of the comment's author. */
  authorEmail?: InputMaybe<Scalars['String']['input']>
  /** The url of the comment's author. */
  authorUrl?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The database ID of the post object the comment belongs to. */
  commentOn?: InputMaybe<Scalars['Int']['input']>
  /** Content of the comment. */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** Parent comment ID of current comment. */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** The approval status of the comment */
  status?: InputMaybe<CommentStatusEnum>
  /** Type of comment. */
  type?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createComment mutation. */
export type CreateCommentPayload = {
  __typename?: 'CreateCommentPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The comment that was created */
  comment?: Maybe<Comment>
  /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
  success?: Maybe<Scalars['Boolean']['output']>
}

/** Input for the createCourse mutation. */
export type CreateCourseInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createCourse mutation. */
export type CreateCoursePayload = {
  __typename?: 'CreateCoursePayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  course?: Maybe<Course>
}

/** Input for the createGeneralFragment mutation. */
export type CreateGeneralFragmentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createGeneralFragment mutation. */
export type CreateGeneralFragmentPayload = {
  __typename?: 'CreateGeneralFragmentPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  generalFragment?: Maybe<GeneralFragment>
}

/** Input for the createIndividualCourse mutation. */
export type CreateIndividualCourseInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createIndividualCourse mutation. */
export type CreateIndividualCoursePayload = {
  __typename?: 'CreateIndividualCoursePayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  individualCourse?: Maybe<IndividualCourse>
}

/** Input for the createMediaItem mutation. */
export type CreateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: InputMaybe<Scalars['String']['input']>
  /** The userId to assign as the author of the mediaItem */
  authorId?: InputMaybe<Scalars['ID']['input']>
  /** The caption for the mediaItem */
  caption?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The comment status for the mediaItem */
  commentStatus?: InputMaybe<Scalars['String']['input']>
  /** The date of the mediaItem */
  date?: InputMaybe<Scalars['String']['input']>
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: InputMaybe<Scalars['String']['input']>
  /** Description of the mediaItem */
  description?: InputMaybe<Scalars['String']['input']>
  /** The file name of the mediaItem */
  filePath?: InputMaybe<Scalars['String']['input']>
  /** The file type of the mediaItem */
  fileType?: InputMaybe<MimeTypeEnum>
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']['input']>
  /** The ping status for the mediaItem */
  pingStatus?: InputMaybe<Scalars['String']['input']>
  /** The slug of the mediaItem */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the mediaItem */
  status?: InputMaybe<MediaItemStatusEnum>
  /** The title of the mediaItem */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createMediaItem mutation. */
export type CreateMediaItemPayload = {
  __typename?: 'CreateMediaItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The MediaItem object mutation type. */
  mediaItem?: Maybe<MediaItem>
}

/** Input for the createPage mutation. */
export type CreatePageInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The comment status for the object */
  commentStatus?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createPage mutation. */
export type CreatePagePayload = {
  __typename?: 'CreatePagePayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  page?: Maybe<Page>
}

/** Input for the createPostFormat mutation. */
export type CreatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The description of the post_format object */
  description?: InputMaybe<Scalars['String']['input']>
  /** The name of the post_format object to mutate */
  name: Scalars['String']['input']
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createPostFormat mutation. */
export type CreatePostFormatPayload = {
  __typename?: 'CreatePostFormatPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The created post_format */
  postFormat?: Maybe<PostFormat>
}

/** Input for the createPost mutation. */
export type CreatePostInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']['input']>
  /** Set connections between the post and categories */
  categories?: InputMaybe<PostCategoriesInput>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The comment status for the object */
  commentStatus?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The excerpt of the object */
  excerpt?: InputMaybe<Scalars['String']['input']>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The ping status for the object */
  pingStatus?: InputMaybe<Scalars['String']['input']>
  /** URLs that have been pinged. */
  pinged?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Set connections between the post and postFormats */
  postFormats?: InputMaybe<PostPostFormatsInput>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** Set connections between the post and tags */
  tags?: InputMaybe<PostTagsInput>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
  /** URLs queued to be pinged. */
  toPing?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** The payload for the createPost mutation. */
export type CreatePostPayload = {
  __typename?: 'CreatePostPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  post?: Maybe<Post>
}

/** Input for the createTag mutation. */
export type CreateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The description of the post_tag object */
  description?: InputMaybe<Scalars['String']['input']>
  /** The name of the post_tag object to mutate */
  name: Scalars['String']['input']
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createTag mutation. */
export type CreateTagPayload = {
  __typename?: 'CreateTagPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The created post_tag */
  tag?: Maybe<Tag>
}

/** Input for the createUser mutation. */
export type CreateUserInput = {
  /** User's AOL IM account. */
  aim?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** A string containing content about the user. */
  description?: InputMaybe<Scalars['String']['input']>
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: InputMaybe<Scalars['String']['input']>
  /** A string containing the user's email address. */
  email?: InputMaybe<Scalars['String']['input']>
  /** 	The user's first name. */
  firstName?: InputMaybe<Scalars['String']['input']>
  /** User's Jabber account. */
  jabber?: InputMaybe<Scalars['String']['input']>
  /** The user's last name. */
  lastName?: InputMaybe<Scalars['String']['input']>
  /** User's locale. */
  locale?: InputMaybe<Scalars['String']['input']>
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: InputMaybe<Scalars['String']['input']>
  /** The user's nickname, defaults to the user's username. */
  nickname?: InputMaybe<Scalars['String']['input']>
  /** A string that contains the plain text password for the user. */
  password?: InputMaybe<Scalars['String']['input']>
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: InputMaybe<Scalars['String']['input']>
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: InputMaybe<Scalars['String']['input']>
  /** An array of roles to be assigned to the user. */
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** A string that contains the user's username for logging in. */
  username: Scalars['String']['input']
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: InputMaybe<Scalars['String']['input']>
  /** User's Yahoo IM account. */
  yim?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createUser mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The User object mutation type. */
  user?: Maybe<User>
}

/** Object that can be identified with a Database ID */
export type DatabaseIdentifier = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output']
}

/** Date values */
export type DateInput = {
  /** Day of the month (from 1 to 31) */
  day?: InputMaybe<Scalars['Int']['input']>
  /** Month number (from 1 to 12) */
  month?: InputMaybe<Scalars['Int']['input']>
  /** 4 digit year (e.g. 2017) */
  year?: InputMaybe<Scalars['Int']['input']>
}

/** Filter the connection based on input */
export type DateQueryInput = {
  /** Nodes should be returned after this date */
  after?: InputMaybe<DateInput>
  /** Nodes should be returned before this date */
  before?: InputMaybe<DateInput>
  /** Column to query against */
  column?: InputMaybe<PostObjectsConnectionDateColumnEnum>
  /** For after/before, whether exact value should be matched or not */
  compare?: InputMaybe<Scalars['String']['input']>
  /** Day of the month (from 1 to 31) */
  day?: InputMaybe<Scalars['Int']['input']>
  /** Hour (from 0 to 23) */
  hour?: InputMaybe<Scalars['Int']['input']>
  /** For after/before, whether exact value should be matched or not */
  inclusive?: InputMaybe<Scalars['Boolean']['input']>
  /** Minute (from 0 to 59) */
  minute?: InputMaybe<Scalars['Int']['input']>
  /** Month number (from 1 to 12) */
  month?: InputMaybe<Scalars['Int']['input']>
  /** OR or AND, how the sub-arrays should be compared */
  relation?: InputMaybe<RelationEnum>
  /** Second (0 to 59) */
  second?: InputMaybe<Scalars['Int']['input']>
  /** Week of the year (from 0 to 53) */
  week?: InputMaybe<Scalars['Int']['input']>
  /** 4 digit year (e.g. 2017) */
  year?: InputMaybe<Scalars['Int']['input']>
}

/** The template assigned to the node */
export type DefaultTemplate = ContentTemplate & {
  __typename?: 'DefaultTemplate'
  /** The name of the template */
  templateName?: Maybe<Scalars['String']['output']>
}

/** Input for the deleteCategory mutation. */
export type DeleteCategoryInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The ID of the category to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deleteCategory mutation. */
export type DeleteCategoryPayload = {
  __typename?: 'DeleteCategoryPayload'
  /** The deleted term object */
  category?: Maybe<Category>
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
}

/** Input for the deleteComment mutation. */
export type DeleteCommentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the comment should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The deleted comment ID */
  id: Scalars['ID']['input']
}

/** The payload for the deleteComment mutation. */
export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The deleted comment object */
  comment?: Maybe<Comment>
  /** The deleted comment ID */
  deletedId?: Maybe<Scalars['ID']['output']>
}

/** Input for the deleteCourse mutation. */
export type DeleteCourseInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the course to delete */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
}

/** The payload for the deleteCourse mutation. */
export type DeleteCoursePayload = {
  __typename?: 'DeleteCoursePayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The object before it was deleted */
  course?: Maybe<Course>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
}

/** Input for the deleteGeneralFragment mutation. */
export type DeleteGeneralFragmentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the generalFragment to delete */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
}

/** The payload for the deleteGeneralFragment mutation. */
export type DeleteGeneralFragmentPayload = {
  __typename?: 'DeleteGeneralFragmentPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  generalFragment?: Maybe<GeneralFragment>
}

/** Input for the deleteIndividualCourse mutation. */
export type DeleteIndividualCourseInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the individualCourse to delete */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
}

/** The payload for the deleteIndividualCourse mutation. */
export type DeleteIndividualCoursePayload = {
  __typename?: 'DeleteIndividualCoursePayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  individualCourse?: Maybe<IndividualCourse>
}

/** Input for the deleteMediaItem mutation. */
export type DeleteMediaItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the mediaItem should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the mediaItem to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deleteMediaItem mutation. */
export type DeleteMediaItemPayload = {
  __typename?: 'DeleteMediaItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted mediaItem */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The mediaItem before it was deleted */
  mediaItem?: Maybe<MediaItem>
}

/** Input for the deletePage mutation. */
export type DeletePageInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the page to delete */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
}

/** The payload for the deletePage mutation. */
export type DeletePagePayload = {
  __typename?: 'DeletePagePayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  page?: Maybe<Page>
}

/** Input for the deletePostFormat mutation. */
export type DeletePostFormatInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The ID of the postFormat to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deletePostFormat mutation. */
export type DeletePostFormatPayload = {
  __typename?: 'DeletePostFormatPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The deleted term object */
  postFormat?: Maybe<PostFormat>
}

/** Input for the deletePost mutation. */
export type DeletePostInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the post to delete */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
}

/** The payload for the deletePost mutation. */
export type DeletePostPayload = {
  __typename?: 'DeletePostPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  post?: Maybe<Post>
}

/** Input for the deleteTag mutation. */
export type DeleteTagInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The ID of the tag to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deleteTag mutation. */
export type DeleteTagPayload = {
  __typename?: 'DeleteTagPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The deleted term object */
  tag?: Maybe<Tag>
}

/** Input for the deleteUser mutation. */
export type DeleteUserInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The ID of the user you want to delete */
  id: Scalars['ID']['input']
  /** Reassign posts and links to new User ID. */
  reassignId?: InputMaybe<Scalars['ID']['input']>
}

/** The payload for the deleteUser mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the user that you just deleted */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The deleted user object */
  user?: Maybe<User>
}

/** The &quot;Details&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type Details = AcfFieldGroup &
  AcfFieldGroupFields &
  Details_Fields & {
    __typename?: 'Details'
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Details&quot; Field Group */
    additionalQuestions?: Maybe<DetailsAdditionalQuestions>
    /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;Details&quot; Field Group */
    faq?: Maybe<Array<Maybe<DetailsFaq>>>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
  }

/** The &quot;DetailsAdditionalQuestions&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type DetailsAdditionalQuestions = AcfFieldGroup &
  AcfFieldGroupFields &
  DetailsAdditionalQuestions_Fields & {
    __typename?: 'DetailsAdditionalQuestions'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;DetailsAdditionalQuestions&quot; Field Group */
    button?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;DetailsAdditionalQuestions&quot; Field Group */
    cta?: Maybe<DetailsAdditionalQuestionsCta>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;DetailsAdditionalQuestions&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** The &quot;DetailsAdditionalQuestionsCta&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type DetailsAdditionalQuestionsCta = AcfFieldGroup &
  AcfFieldGroupFields &
  DetailsAdditionalQuestionsCta_Fields & {
    __typename?: 'DetailsAdditionalQuestionsCta'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;DetailsAdditionalQuestionsCta&quot; Field Group */
    afterBoldText?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;DetailsAdditionalQuestionsCta&quot; Field Group */
    beforeBoldText?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;DetailsAdditionalQuestionsCta&quot; Field Group */
    boldText?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;DetailsAdditionalQuestionsCta&quot; Field Group */
export type DetailsAdditionalQuestionsCta_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;DetailsAdditionalQuestionsCta&quot; Field Group */
  afterBoldText?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;DetailsAdditionalQuestionsCta&quot; Field Group */
  beforeBoldText?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;DetailsAdditionalQuestionsCta&quot; Field Group */
  boldText?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;DetailsAdditionalQuestions&quot; Field Group */
export type DetailsAdditionalQuestions_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;DetailsAdditionalQuestions&quot; Field Group */
  button?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;DetailsAdditionalQuestions&quot; Field Group */
  cta?: Maybe<DetailsAdditionalQuestionsCta>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;DetailsAdditionalQuestions&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** The &quot;DetailsFaq&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type DetailsFaq = AcfFieldGroup &
  AcfFieldGroupFields &
  DetailsFaq_Fields & {
    __typename?: 'DetailsFaq'
    /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;DetailsFaq&quot; Field Group */
    answer?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;DetailsFaq&quot; Field Group */
    question?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;DetailsFaq&quot; Field Group */
export type DetailsFaq_Fields = {
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;DetailsFaq&quot; Field Group */
  answer?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;DetailsFaq&quot; Field Group */
  question?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;Details&quot; Field Group */
export type Details_Fields = {
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Details&quot; Field Group */
  additionalQuestions?: Maybe<DetailsAdditionalQuestions>
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;Details&quot; Field Group */
  faq?: Maybe<Array<Maybe<DetailsFaq>>>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
}

/** The discussion setting type */
export type DiscussionSettings = {
  __typename?: 'DiscussionSettings'
  /** Разрешить оставлять комментарии к новым записям. */
  defaultCommentStatus?: Maybe<Scalars['String']['output']>
  /** Разрешить ссылки оповещения с других блогов (уведомления и обратные ссылки) на новые статьи. */
  defaultPingStatus?: Maybe<Scalars['String']['output']>
}

/** Relational context between connected nodes */
export type Edge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected node */
  node: Node
}

/** Asset enqueued by the CMS */
export type EnqueuedAsset = {
  /** The inline code to be run after the asset is loaded. */
  after?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  /**
   * Deprecated
   * @deprecated Use `EnqueuedAsset.media` instead.
   */
  args?: Maybe<Scalars['Boolean']['output']>
  /** The inline code to be run before the asset is loaded. */
  before?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  /** The HTML conditional comment for the enqueued asset. E.g. IE 6, lte IE 7, etc */
  conditional?: Maybe<Scalars['String']['output']>
  /** Dependencies needed to use this asset */
  dependencies?: Maybe<Array<Maybe<EnqueuedAsset>>>
  /**
   * Extra information needed for the script
   * @deprecated Use `EnqueuedScript.extraData` instead.
   */
  extra?: Maybe<Scalars['String']['output']>
  /** The handle of the enqueued asset */
  handle?: Maybe<Scalars['String']['output']>
  /** The ID of the enqueued asset */
  id: Scalars['ID']['output']
  /** The source of the asset */
  src?: Maybe<Scalars['String']['output']>
  /** The version of the enqueued asset */
  version?: Maybe<Scalars['String']['output']>
}

/** Script enqueued by the CMS */
export type EnqueuedScript = EnqueuedAsset &
  Node & {
    __typename?: 'EnqueuedScript'
    /** The inline code to be run after the asset is loaded. */
    after?: Maybe<Array<Maybe<Scalars['String']['output']>>>
    /**
     * Deprecated
     * @deprecated Use `EnqueuedAsset.media` instead.
     */
    args?: Maybe<Scalars['Boolean']['output']>
    /** The inline code to be run before the asset is loaded. */
    before?: Maybe<Array<Maybe<Scalars['String']['output']>>>
    /** The HTML conditional comment for the enqueued asset. E.g. IE 6, lte IE 7, etc */
    conditional?: Maybe<Scalars['String']['output']>
    /** Dependencies needed to use this asset */
    dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>
    /**
     * Extra information needed for the script
     * @deprecated Use `EnqueuedScript.extraData` instead.
     */
    extra?: Maybe<Scalars['String']['output']>
    /** Extra data supplied to the enqueued script */
    extraData?: Maybe<Scalars['String']['output']>
    /** The handle of the enqueued asset */
    handle?: Maybe<Scalars['String']['output']>
    /** The global ID of the enqueued script */
    id: Scalars['ID']['output']
    /** The source of the asset */
    src?: Maybe<Scalars['String']['output']>
    /** The loading strategy to use on the script tag */
    strategy?: Maybe<ScriptLoadingStrategyEnum>
    /** The version of the enqueued script */
    version?: Maybe<Scalars['String']['output']>
  }

/** Connection to EnqueuedScript Nodes */
export type EnqueuedScriptConnection = {
  /** A list of edges (relational context) between ContentNode and connected EnqueuedScript Nodes */
  edges: Array<EnqueuedScriptConnectionEdge>
  /** A list of connected EnqueuedScript Nodes */
  nodes: Array<EnqueuedScript>
  /** Information about pagination in a connection. */
  pageInfo: EnqueuedScriptConnectionPageInfo
}

/** Edge between a Node and a connected EnqueuedScript */
export type EnqueuedScriptConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected EnqueuedScript Node */
  node: EnqueuedScript
}

/** Page Info on the connected EnqueuedScriptConnectionEdge */
export type EnqueuedScriptConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** Stylesheet enqueued by the CMS */
export type EnqueuedStylesheet = EnqueuedAsset &
  Node & {
    __typename?: 'EnqueuedStylesheet'
    /** The inline code to be run after the asset is loaded. */
    after?: Maybe<Array<Maybe<Scalars['String']['output']>>>
    /**
     * Deprecated
     * @deprecated Use `EnqueuedAsset.media` instead.
     */
    args?: Maybe<Scalars['Boolean']['output']>
    /** The inline code to be run before the asset is loaded. */
    before?: Maybe<Array<Maybe<Scalars['String']['output']>>>
    /** The HTML conditional comment for the enqueued asset. E.g. IE 6, lte IE 7, etc */
    conditional?: Maybe<Scalars['String']['output']>
    /** Dependencies needed to use this asset */
    dependencies?: Maybe<Array<Maybe<EnqueuedStylesheet>>>
    /**
     * Extra information needed for the script
     * @deprecated Use `EnqueuedScript.extraData` instead.
     */
    extra?: Maybe<Scalars['String']['output']>
    /** The handle of the enqueued asset */
    handle?: Maybe<Scalars['String']['output']>
    /** The global ID of the enqueued stylesheet */
    id: Scalars['ID']['output']
    /** Whether the enqueued style is RTL or not */
    isRtl?: Maybe<Scalars['Boolean']['output']>
    /** The media attribute to use for the link */
    media?: Maybe<Scalars['String']['output']>
    /** The absolute path to the enqueued style. Set when the stylesheet is meant to load inline. */
    path?: Maybe<Scalars['String']['output']>
    /** The `rel` attribute to use for the link */
    rel?: Maybe<Scalars['String']['output']>
    /** The source of the asset */
    src?: Maybe<Scalars['String']['output']>
    /** Optional suffix, used in combination with RTL */
    suffix?: Maybe<Scalars['String']['output']>
    /** The title of the enqueued style. Used for preferred/alternate stylesheets. */
    title?: Maybe<Scalars['String']['output']>
    /** The version of the enqueued style */
    version?: Maybe<Scalars['String']['output']>
  }

/** Connection to EnqueuedStylesheet Nodes */
export type EnqueuedStylesheetConnection = {
  /** A list of edges (relational context) between ContentNode and connected EnqueuedStylesheet Nodes */
  edges: Array<EnqueuedStylesheetConnectionEdge>
  /** A list of connected EnqueuedStylesheet Nodes */
  nodes: Array<EnqueuedStylesheet>
  /** Information about pagination in a connection. */
  pageInfo: EnqueuedStylesheetConnectionPageInfo
}

/** Edge between a Node and a connected EnqueuedStylesheet */
export type EnqueuedStylesheetConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected EnqueuedStylesheet Node */
  node: EnqueuedStylesheet
}

/** Page Info on the connected EnqueuedStylesheetConnectionEdge */
export type EnqueuedStylesheetConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** The &quot;Faq&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type Faq = AcfFieldGroup &
  AcfFieldGroupFields &
  Faq_Fields & {
    __typename?: 'Faq'
    /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;Faq&quot; Field Group */
    content?: Maybe<Array<Maybe<FaqContent>>>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
  }

/** The &quot;FaqContent&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type FaqContent = AcfFieldGroup &
  AcfFieldGroupFields &
  FaqContent_Fields & {
    __typename?: 'FaqContent'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;FaqContent&quot; Field Group */
    answer?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;FaqContent&quot; Field Group */
    question?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;FaqContent&quot; Field Group */
export type FaqContent_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;FaqContent&quot; Field Group */
  answer?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;FaqContent&quot; Field Group */
  question?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;Faq&quot; Field Group */
export type Faq_Fields = {
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;Faq&quot; Field Group */
  content?: Maybe<Array<Maybe<FaqContent>>>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
}

/** Type of ID being used identify the form */
export type FieldError = {
  __typename?: 'FieldError'
  /** Field Id */
  fieldId: Scalars['Int']['output']
  /** Localized error message */
  message?: Maybe<Scalars['String']['output']>
  /** Slug error identifier */
  slug?: Maybe<Scalars['String']['output']>
}

/** The &quot;Footer&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type Footer = AcfFieldGroup &
  AcfFieldGroupFields &
  Footer_Fields & {
    __typename?: 'Footer'
    /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;Footer&quot; Field Group */
    courses?: Maybe<AcfContentNodeConnection>
    /** Field of the &quot;email&quot; Field Type added to the schema as part of the &quot;Footer&quot; Field Group */
    email?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;Footer&quot; Field Group */
    logo?: Maybe<AcfMediaItemConnectionEdge>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Footer&quot; Field Group */
    privacyPolicy?: Maybe<FooterPrivacyPolicy>
    /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;Footer&quot; Field Group */
    socials?: Maybe<Array<Maybe<FooterSocials>>>
  }

/** The &quot;Footer&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type FooterCoursesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The &quot;FooterPrivacyPolicy&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type FooterPrivacyPolicy = AcfFieldGroup &
  AcfFieldGroupFields &
  FooterPrivacyPolicy_Fields & {
    __typename?: 'FooterPrivacyPolicy'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;FooterPrivacyPolicy&quot; Field Group */
    path?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;FooterPrivacyPolicy&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;FooterPrivacyPolicy&quot; Field Group */
export type FooterPrivacyPolicy_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;FooterPrivacyPolicy&quot; Field Group */
  path?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;FooterPrivacyPolicy&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** The &quot;FooterSocials&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type FooterSocials = AcfFieldGroup &
  AcfFieldGroupFields &
  FooterSocials_Fields & {
    __typename?: 'FooterSocials'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;FooterSocials&quot; Field Group */
    link?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;FooterSocials&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;FooterSocials&quot; Field Group */
export type FooterSocials_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;FooterSocials&quot; Field Group */
  link?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;FooterSocials&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;Footer&quot; Field Group */
export type Footer_Fields = {
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;Footer&quot; Field Group */
  courses?: Maybe<AcfContentNodeConnection>
  /** Field of the &quot;email&quot; Field Type added to the schema as part of the &quot;Footer&quot; Field Group */
  email?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;Footer&quot; Field Group */
  logo?: Maybe<AcfMediaItemConnectionEdge>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Footer&quot; Field Group */
  privacyPolicy?: Maybe<FooterPrivacyPolicy>
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;Footer&quot; Field Group */
  socials?: Maybe<Array<Maybe<FooterSocials>>>
}

/** Interface representing fields of the ACF &quot;Footer&quot; Field Group */
export type Footer_FieldsCoursesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The form object */
export type Form = DatabaseIdentifier &
  Node & {
    __typename?: 'Form'
    /** Добавить кнопку «Отправить» */
    addSubmit?: Maybe<Scalars['Boolean']['output']>
    /** Разрешить открытую ссылку? */
    allowPublicLink?: Maybe<Scalars['Boolean']['output']>
    /** Пользовательские имена классов */
    classes?: Maybe<FormClasses>
    /** Очистить успешно заполненную форму? */
    clearComplete?: Maybe<Scalars['Boolean']['output']>
    /** Валюта */
    currency?: Maybe<Scalars['String']['output']>
    /** Настраиваемая этикетка */
    customMessages?: Maybe<FormCustomMessages>
    /** The Id of the form */
    databaseId: Scalars['Int']['output']
    /** Позиция метки по умолчанию */
    defaultLabelPos?: Maybe<Scalars['String']['output']>
    /** Встройте свою форму */
    embedForm?: Maybe<Scalars['String']['output']>
    /** Connection between the Form type and the FormField type */
    fields?: Maybe<FormToFormFieldConnection>
    /** The Id of the form */
    formId?: Maybe<Scalars['Int']['output']>
    /** Form Title Heading Level */
    formTitleHeadingLevel?: Maybe<Scalars['String']['output']>
    /** Скрыть успешно заполненную форму? */
    hideComplete?: Maybe<Scalars['Boolean']['output']>
    /** The globally unique identifier of the form */
    id: Scalars['ID']['output']
    /** Ключ формы */
    key?: Maybe<Scalars['String']['output']>
    /** Ограничение заявок */
    limitSubmissionsSet?: Maybe<FormLimitSubmissionsSet>
    /** Зарегистрированы */
    loggedInSet?: Maybe<FormLoggedInSet>
    /** Ссылка на вашу форму */
    publicLink?: Maybe<Scalars['String']['output']>
    /** The Locale of the form */
    seqNum?: Maybe<Scalars['Int']['output']>
    /** Отобразить название формы */
    showTitle?: Maybe<Scalars['Boolean']['output']>
    /** Название формы */
    title?: Maybe<Scalars['String']['output']>
    /** Уникальное поле */
    uniqueFieldSet?: Maybe<FormUniqueFieldSet>
  }

/** The form object */
export type FormFieldsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Пользовательские имена классов */
export type FormClasses = {
  __typename?: 'FormClasses'
  /** Элемент */
  elementClass?: Maybe<Scalars['String']['output']>
  /** Оболочка */
  wrapperClass?: Maybe<Scalars['String']['output']>
}

/** Connection to Form Nodes */
export type FormConnection = {
  /** A list of edges (relational context) between RootQuery and connected Form Nodes */
  edges: Array<FormConnectionEdge>
  /** A list of connected Form Nodes */
  nodes: Array<Form>
  /** Information about pagination in a connection. */
  pageInfo: FormConnectionPageInfo
}

/** Edge between a Node and a connected Form */
export type FormConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected Form Node */
  node: Form
}

/** Page Info on the connected FormConnectionEdge */
export type FormConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** Настраиваемая этикетка */
export type FormCustomMessages = {
  __typename?: 'FormCustomMessages'
  /** Введите действительную дату! */
  changeDateErrorMsg?: Maybe<Scalars['String']['output']>
  /** Укажите действительный адрес электронной почты! */
  changeEmailErrorMsg?: Maybe<Scalars['String']['output']>
  /** Содержание этих полей должно совпадать! */
  confirmFieldErrorMsg?: Maybe<Scalars['String']['output']>
  /** Увеличивайте с шагом  */
  fieldNumberIncrementBy?: Maybe<Scalars['String']['output']>
  /** Макс. номер ошибки */
  fieldNumberNumMaxError?: Maybe<Scalars['String']['output']>
  /** Мин. номер ошибки */
  fieldNumberNumMinError?: Maybe<Scalars['String']['output']>
  /** Поля, помеченные символом &lt;span class=&quot;ninja-forms-req-symbol&quot;&gt;*&lt;/span&gt;, обязательны к заполнению */
  fieldsMarkedRequired?: Maybe<Scalars['String']['output']>
  /** Исправьте ошибки перед отправкой этой формы. */
  formErrorsCorrectErrors?: Maybe<Scalars['String']['output']>
  /** Ошибка Honeypot */
  honeypotHoneypotError?: Maybe<Scalars['String']['output']>
  /** Это обязательное поле. */
  validateRequiredField?: Maybe<Scalars['String']['output']>
}

/** Action object */
export type FormField = {
  /** Creation date */
  createdAt?: Maybe<Scalars['Int']['output']>
  /** The Id of the field */
  databaseId?: Maybe<Scalars['Int']['output']>
  /** The Id of the field */
  fieldId?: Maybe<Scalars['Int']['output']>
  /** Key of the field */
  fieldKey?: Maybe<Scalars['String']['output']>
  /** Label of the field */
  fieldLabel?: Maybe<Scalars['String']['output']>
  /** The globally unique identifier of the field */
  id: Scalars['ID']['output']
  /** Key of the field */
  key?: Maybe<Scalars['String']['output']>
  /** Label of the field */
  label?: Maybe<Scalars['String']['output']>
  /** Position of the label */
  labelPos?: Maybe<Scalars['String']['output']>
  /** Position order of the field */
  order?: Maybe<Scalars['Int']['output']>
  /** Parent form id */
  parentId?: Maybe<Scalars['Int']['output']>
  /** Identifiable? */
  personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
  /** The field is required? */
  required?: Maybe<Scalars['Boolean']['output']>
  /** type of the field */
  type?: Maybe<Scalars['String']['output']>
  /** Update date */
  updatedAt?: Maybe<Scalars['Int']['output']>
}

/** Connection to FormField Nodes */
export type FormFieldConnection = {
  /** A list of edges (relational context) between Form and connected FormField Nodes */
  edges: Array<FormFieldConnectionEdge>
  /** A list of connected FormField Nodes */
  nodes: Array<FormField>
  /** Information about pagination in a connection. */
  pageInfo: FormFieldConnectionPageInfo
}

/** Edge between a Node and a connected FormField */
export type FormFieldConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected FormField Node */
  node: FormField
}

/** Page Info on the connected FormFieldConnectionEdge */
export type FormFieldConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** The Type of Identifier used to fetch a single Form. Default is ID. */
export enum FormIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
}

/** Ограничение заявок */
export type FormLimitSubmissionsSet = {
  __typename?: 'FormLimitSubmissionsSet'
  /** Сообщение о достижении предела */
  subLimitMsg?: Maybe<Scalars['String']['output']>
  /** Ограничение кол-ва отправок формы */
  subLimitNumber?: Maybe<Scalars['Int']['output']>
}

/** Зарегистрированы */
export type FormLoggedInSet = {
  __typename?: 'FormLoggedInSet'
  /** Должен ли пользователь авторизоваться для просмотра формы? */
  loggedIn?: Maybe<Scalars['Boolean']['output']>
  /** Сообщение о необходимости авторизации */
  notLoggedInMsg?: Maybe<Scalars['String']['output']>
}

/** Connection between the Form type and the FormField type */
export type FormToFormFieldConnection = Connection &
  FormFieldConnection & {
    __typename?: 'FormToFormFieldConnection'
    /** Edges for the FormToFormFieldConnection connection */
    edges: Array<FormToFormFieldConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<FormField>
    /** Information about pagination in a connection. */
    pageInfo: FormToFormFieldConnectionPageInfo
  }

/** An edge in a connection */
export type FormToFormFieldConnectionEdge = Edge &
  FormFieldConnectionEdge & {
    __typename?: 'FormToFormFieldConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: FormField
  }

/** Page Info on the &quot;FormToFormFieldConnection&quot; */
export type FormToFormFieldConnectionPageInfo = FormFieldConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'FormToFormFieldConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Уникальное поле */
export type FormUniqueFieldSet = {
  __typename?: 'FormUniqueFieldSet'
  /** unique_field */
  uniqueField?: Maybe<Scalars['String']['output']>
  /** Уникальное сообщение об ошибке поля */
  uniqueFieldError?: Maybe<Scalars['String']['output']>
}

/** The generalFragment type */
export type GeneralFragment = ContentNode &
  DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithTemplate &
  NodeWithTitle &
  Previewable &
  UniformResourceIdentifiable &
  WithAcfAudio &
  WithAcfConsultation &
  WithAcfContacts &
  WithAcfContractOffer &
  WithAcfFaq &
  WithAcfFooter &
  WithAcfHeader &
  WithAcfLearningProcess &
  WithAcfMain &
  WithAcfPrivacyPolicy &
  WithAcfSiteSettings &
  WithAcfStudents &
  WithAcfTeacher & {
    __typename?: 'GeneralFragment'
    /** Fields of the Audio ACF Field Group */
    audio?: Maybe<Audio>
    /** Fields of the Consultation ACF Field Group */
    consultation?: Maybe<Consultation>
    /** Fields of the Contacts ACF Field Group */
    contacts?: Maybe<Contacts>
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
    /** Fields of the ContractOffer ACF Field Group */
    contractOffer?: Maybe<ContractOffer>
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']['output']
    /** Post publishing date. */
    date?: Maybe<Scalars['String']['output']>
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']['output']>
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']['output']>
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>
    /** Fields of the Faq ACF Field Group */
    faq?: Maybe<Faq>
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId?: Maybe<Scalars['ID']['output']>
    /** Fields of the Footer ACF Field Group */
    footer?: Maybe<Footer>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    generalFragmentId: Scalars['Int']['output']
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']['output']>
    /** Fields of the Header ACF Field Group */
    header?: Maybe<Header>
    /** The globally unique identifier of the general-fragment object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']['output']>
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>
    /** Fields of the LearningProcess ACF Field Group */
    learningProcess?: Maybe<LearningProcess>
    /** The permalink of the post */
    link?: Maybe<Scalars['String']['output']>
    /** Fields of the Main ACF Field Group */
    main?: Maybe<Main>
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']['output']>
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']['output']>
    /** Connection between the GeneralFragment type and the generalFragment type */
    preview?: Maybe<GeneralFragmentToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** Fields of the PrivacyPolicy ACF Field Group */
    privacyPolicy?: Maybe<PrivacyPolicy>
    /** The Yoast SEO data of the ContentNode */
    seo?: Maybe<PostTypeSeo>
    /** Fields of the SiteSettings ACF Field Group */
    siteSettings?: Maybe<SiteSettings>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** Fields of the Students ACF Field Group */
    students?: Maybe<Students>
    /** Fields of the Teacher ACF Field Group */
    teacher?: Maybe<Teacher>
    /** The template assigned to the node */
    template?: Maybe<ContentTemplate>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The generalFragment type */
export type GeneralFragmentContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The generalFragment type */
export type GeneralFragmentEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The generalFragment type */
export type GeneralFragmentEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The generalFragment type */
export type GeneralFragmentTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** Connection to generalFragment Nodes */
export type GeneralFragmentConnection = {
  /** A list of edges (relational context) between RootQuery and connected generalFragment Nodes */
  edges: Array<GeneralFragmentConnectionEdge>
  /** A list of connected generalFragment Nodes */
  nodes: Array<GeneralFragment>
  /** Information about pagination in a connection. */
  pageInfo: GeneralFragmentConnectionPageInfo
}

/** Edge between a Node and a connected generalFragment */
export type GeneralFragmentConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected generalFragment Node */
  node: GeneralFragment
}

/** Page Info on the connected GeneralFragmentConnectionEdge */
export type GeneralFragmentConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum GeneralFragmentIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Connection between the GeneralFragment type and the generalFragment type */
export type GeneralFragmentToPreviewConnectionEdge = Edge &
  GeneralFragmentConnectionEdge &
  OneToOneConnection & {
    __typename?: 'GeneralFragmentToPreviewConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: GeneralFragment
  }

/** The general setting type */
export type GeneralSettings = {
  __typename?: 'GeneralSettings'
  /** Общий формат даты. */
  dateFormat?: Maybe<Scalars['String']['output']>
  /** Слоган сайта. */
  description?: Maybe<Scalars['String']['output']>
  /** Этот адрес используется в целях администрирования. Например, для уведомления о новых пользователях. */
  email?: Maybe<Scalars['String']['output']>
  /** Код локали WordPress. */
  language?: Maybe<Scalars['String']['output']>
  /** Первый день недели. */
  startOfWeek?: Maybe<Scalars['Int']['output']>
  /** Общий формат времени. */
  timeFormat?: Maybe<Scalars['String']['output']>
  /** Город в той же временной зоне что и у вас. */
  timezone?: Maybe<Scalars['String']['output']>
  /** Название сайта. */
  title?: Maybe<Scalars['String']['output']>
  /** Адрес сайта (URL) */
  url?: Maybe<Scalars['String']['output']>
}

/** The &quot;Header&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type Header = AcfFieldGroup &
  AcfFieldGroupFields &
  Header_Fields & {
    __typename?: 'Header'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Header&quot; Field Group */
    ctaButton?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Header&quot; Field Group */
    dropdownList?: Maybe<HeaderDropdownList>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;Header&quot; Field Group */
    logo?: Maybe<AcfMediaItemConnectionEdge>
    /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;Header&quot; Field Group */
    navigationElements?: Maybe<Array<Maybe<HeaderNavigationElements>>>
  }

/** The &quot;HeaderDropdownList&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeaderDropdownList = AcfFieldGroup &
  AcfFieldGroupFields &
  HeaderDropdownList_Fields & {
    __typename?: 'HeaderDropdownList'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;HeaderDropdownList&quot; Field Group */
    items?: Maybe<AcfContentNodeConnection>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeaderDropdownList&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** The &quot;HeaderDropdownList&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeaderDropdownListItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Interface representing fields of the ACF &quot;HeaderDropdownList&quot; Field Group */
export type HeaderDropdownList_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;HeaderDropdownList&quot; Field Group */
  items?: Maybe<AcfContentNodeConnection>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeaderDropdownList&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;HeaderDropdownList&quot; Field Group */
export type HeaderDropdownList_FieldsItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The &quot;HeaderNavigationElements&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeaderNavigationElements = AcfFieldGroup &
  AcfFieldGroupFields &
  HeaderNavigationElements_Fields & {
    __typename?: 'HeaderNavigationElements'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeaderNavigationElements&quot; Field Group */
    path?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeaderNavigationElements&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;HeaderNavigationElements&quot; Field Group */
export type HeaderNavigationElements_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeaderNavigationElements&quot; Field Group */
  path?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeaderNavigationElements&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;Header&quot; Field Group */
export type Header_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Header&quot; Field Group */
  ctaButton?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Header&quot; Field Group */
  dropdownList?: Maybe<HeaderDropdownList>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;Header&quot; Field Group */
  logo?: Maybe<AcfMediaItemConnectionEdge>
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;Header&quot; Field Group */
  navigationElements?: Maybe<Array<Maybe<HeaderNavigationElements>>>
}

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNode = {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String']['output']
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output']
  /** Post publishing date. */
  date?: Maybe<Scalars['String']['output']>
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']['output']>
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']['output']>
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']['output']>
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']['output']>
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output']
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']['output']>
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']['output']>
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output']
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>
  /** The permalink of the post */
  link?: Maybe<Scalars['String']['output']>
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']['output']>
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']['output']>
  /** The parent of the node. The parent object can be of various types */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']['output']>
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']['output']>
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']['output']>
  /** The Yoast SEO data of the ContentNode */
  seo?: Maybe<PostTypeSeo>
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']['output']>
  /** The current status of the object */
  status?: Maybe<Scalars['String']['output']>
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>
}

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>
}

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>
}

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeAncestorsConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnection'
    /** Edges for the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
    edges: Array<HierarchicalContentNodeToContentNodeAncestorsConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>
    /** Information about pagination in a connection. */
    pageInfo: HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo
  }

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionEdge =
  ContentNodeConnectionEdge &
    Edge & {
      __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnectionEdge'
      /** A cursor for use in pagination */
      cursor?: Maybe<Scalars['String']['output']>
      /** The item at the end of the edge */
      node: ContentNode
    }

/** Page Info on the &quot;HierarchicalContentNodeToContentNodeAncestorsConnection&quot; */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo =
  ContentNodeConnectionPageInfo &
    PageInfo &
    WpPageInfo & {
      __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo'
      /** When paginating forwards, the cursor to continue. */
      endCursor?: Maybe<Scalars['String']['output']>
      /** When paginating forwards, are there more items? */
      hasNextPage: Scalars['Boolean']['output']
      /** When paginating backwards, are there more items? */
      hasPreviousPage: Scalars['Boolean']['output']
      /** Raw schema for page */
      seo?: Maybe<SeoPostTypePageInfo>
      /** When paginating backwards, the cursor to continue. */
      startCursor?: Maybe<Scalars['String']['output']>
    }

/** Arguments for filtering the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeChildrenConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnection'
    /** Edges for the HierarchicalContentNodeToContentNodeChildrenConnection connection */
    edges: Array<HierarchicalContentNodeToContentNodeChildrenConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>
    /** Information about pagination in a connection. */
    pageInfo: HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo
  }

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ContentNode
  }

/** Page Info on the &quot;HierarchicalContentNodeToContentNodeChildrenConnection&quot; */
export type HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo =
  ContentNodeConnectionPageInfo &
    PageInfo &
    WpPageInfo & {
      __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo'
      /** When paginating forwards, the cursor to continue. */
      endCursor?: Maybe<Scalars['String']['output']>
      /** When paginating forwards, are there more items? */
      hasNextPage: Scalars['Boolean']['output']
      /** When paginating backwards, are there more items? */
      hasPreviousPage: Scalars['Boolean']['output']
      /** Raw schema for page */
      seo?: Maybe<SeoPostTypePageInfo>
      /** When paginating backwards, the cursor to continue. */
      startCursor?: Maybe<Scalars['String']['output']>
    }

/** Arguments for filtering the HierarchicalContentNodeToContentNodeChildrenConnection connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToParentContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'HierarchicalContentNodeToParentContentNodeConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: ContentNode
  }

/** Node with hierarchical (parent/child) relationships */
export type HierarchicalNode = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output']
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']['output']>
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']['output']>
}

/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNode = {
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']['output']>
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output']
  /** The description of the object */
  description?: Maybe<Scalars['String']['output']>
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output']
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']['output']>
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output']
  /** The link to the term */
  link?: Maybe<Scalars['String']['output']>
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']['output']>
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']['output']>
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']['output']>
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']['output']>
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']['output']>
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']['output']>
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']['output']>
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>
}

/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNodeEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNodeEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The individualCourse type */
export type IndividualCourse = ContentNode &
  DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithTemplate &
  NodeWithTitle &
  Previewable &
  UniformResourceIdentifiable &
  WithAcfIndividualCourseData & {
    __typename?: 'IndividualCourse'
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']['output']
    /** Post publishing date. */
    date?: Maybe<Scalars['String']['output']>
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']['output']>
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']['output']>
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId?: Maybe<Scalars['ID']['output']>
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the individual-course object. */
    id: Scalars['ID']['output']
    /** Fields of the IndividualCourseData ACF Field Group */
    individualCourseData?: Maybe<IndividualCourseData>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    individualCourseId: Scalars['Int']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']['output']>
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>
    /** The permalink of the post */
    link?: Maybe<Scalars['String']['output']>
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']['output']>
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']['output']>
    /** Connection between the IndividualCourse type and the individualCourse type */
    preview?: Maybe<IndividualCourseToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the ContentNode */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to the node */
    template?: Maybe<ContentTemplate>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The individualCourse type */
export type IndividualCourseContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The individualCourse type */
export type IndividualCourseEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The individualCourse type */
export type IndividualCourseEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The individualCourse type */
export type IndividualCourseTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** Connection to individualCourse Nodes */
export type IndividualCourseConnection = {
  /** A list of edges (relational context) between RootQuery and connected individualCourse Nodes */
  edges: Array<IndividualCourseConnectionEdge>
  /** A list of connected individualCourse Nodes */
  nodes: Array<IndividualCourse>
  /** Information about pagination in a connection. */
  pageInfo: IndividualCourseConnectionPageInfo
}

/** Edge between a Node and a connected individualCourse */
export type IndividualCourseConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected individualCourse Node */
  node: IndividualCourse
}

/** Page Info on the connected IndividualCourseConnectionEdge */
export type IndividualCourseConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** The &quot;IndividualCourseData&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type IndividualCourseData = AcfFieldGroup &
  AcfFieldGroupFields &
  IndividualCourseData_Fields & {
    __typename?: 'IndividualCourseData'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;IndividualCourseData&quot; Field Group */
    aboutCourse?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;IndividualCourseData&quot; Field Group */
    background?: Maybe<IndividualCourseDataBackground>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;IndividualCourseData&quot; Field Group */
    hero?: Maybe<IndividualCourseDataHero>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;IndividualCourseData&quot; Field Group */
    path?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;IndividualCourseData&quot; Field Group */
    price?: Maybe<IndividualCourseDataPrice>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;IndividualCourseData&quot; Field Group */
    process?: Maybe<IndividualCourseDataProcess>
  }

/** The &quot;IndividualCourseDataBackground&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type IndividualCourseDataBackground = AcfFieldGroup &
  AcfFieldGroupFields &
  IndividualCourseDataBackground_Fields & {
    __typename?: 'IndividualCourseDataBackground'
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataBackground&quot; Field Group */
    courseProgram?: Maybe<AcfMediaItemConnectionEdge>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataBackground&quot; Field Group */
    desktop?: Maybe<IndividualCourseDataBackgroundDesktop>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataBackground&quot; Field Group */
    mobile?: Maybe<IndividualCourseDataBackgroundMobile>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataBackground&quot; Field Group */
    noise?: Maybe<AcfMediaItemConnectionEdge>
  }

/** The &quot;IndividualCourseDataBackgroundDesktop&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type IndividualCourseDataBackgroundDesktop = AcfFieldGroup &
  AcfFieldGroupFields &
  IndividualCourseDataBackgroundDesktop_Fields & {
    __typename?: 'IndividualCourseDataBackgroundDesktop'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataBackgroundDesktop&quot; Field Group */
    footer?: Maybe<AcfMediaItemConnectionEdge>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataBackgroundDesktop&quot; Field Group */
    hero?: Maybe<AcfMediaItemConnectionEdge>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataBackgroundDesktop&quot; Field Group */
    teacher?: Maybe<AcfMediaItemConnectionEdge>
  }

/** Interface representing fields of the ACF &quot;IndividualCourseDataBackgroundDesktop&quot; Field Group */
export type IndividualCourseDataBackgroundDesktop_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataBackgroundDesktop&quot; Field Group */
  footer?: Maybe<AcfMediaItemConnectionEdge>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataBackgroundDesktop&quot; Field Group */
  hero?: Maybe<AcfMediaItemConnectionEdge>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataBackgroundDesktop&quot; Field Group */
  teacher?: Maybe<AcfMediaItemConnectionEdge>
}

/** The &quot;IndividualCourseDataBackgroundMobile&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type IndividualCourseDataBackgroundMobile = AcfFieldGroup &
  AcfFieldGroupFields &
  IndividualCourseDataBackgroundMobile_Fields & {
    __typename?: 'IndividualCourseDataBackgroundMobile'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataBackgroundMobile&quot; Field Group */
    footer?: Maybe<AcfMediaItemConnectionEdge>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataBackgroundMobile&quot; Field Group */
    hero?: Maybe<AcfMediaItemConnectionEdge>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataBackgroundMobile&quot; Field Group */
    teacher?: Maybe<AcfMediaItemConnectionEdge>
  }

/** Interface representing fields of the ACF &quot;IndividualCourseDataBackgroundMobile&quot; Field Group */
export type IndividualCourseDataBackgroundMobile_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataBackgroundMobile&quot; Field Group */
  footer?: Maybe<AcfMediaItemConnectionEdge>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataBackgroundMobile&quot; Field Group */
  hero?: Maybe<AcfMediaItemConnectionEdge>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataBackgroundMobile&quot; Field Group */
  teacher?: Maybe<AcfMediaItemConnectionEdge>
}

/** Interface representing fields of the ACF &quot;IndividualCourseDataBackground&quot; Field Group */
export type IndividualCourseDataBackground_Fields = {
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataBackground&quot; Field Group */
  courseProgram?: Maybe<AcfMediaItemConnectionEdge>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataBackground&quot; Field Group */
  desktop?: Maybe<IndividualCourseDataBackgroundDesktop>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataBackground&quot; Field Group */
  mobile?: Maybe<IndividualCourseDataBackgroundMobile>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataBackground&quot; Field Group */
  noise?: Maybe<AcfMediaItemConnectionEdge>
}

/** The &quot;IndividualCourseDataHero&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type IndividualCourseDataHero = AcfFieldGroup &
  AcfFieldGroupFields &
  IndividualCourseDataHero_Fields & {
    __typename?: 'IndividualCourseDataHero'
    /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataHero&quot; Field Group */
    benefits?: Maybe<Array<Maybe<IndividualCourseDataHeroBenefits>>>
    /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataHero&quot; Field Group */
    courseConditions?: Maybe<Array<Maybe<IndividualCourseDataHeroCourseConditions>>>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataHero&quot; Field Group */
    cta?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataHero&quot; Field Group */
    runningLine?: Maybe<Scalars['String']['output']>
  }

/** The &quot;IndividualCourseDataHeroBenefits&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type IndividualCourseDataHeroBenefits = AcfFieldGroup &
  AcfFieldGroupFields &
  IndividualCourseDataHeroBenefits_Fields & {
    __typename?: 'IndividualCourseDataHeroBenefits'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataHeroBenefits&quot; Field Group */
    content?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;IndividualCourseDataHeroBenefits&quot; Field Group */
export type IndividualCourseDataHeroBenefits_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataHeroBenefits&quot; Field Group */
  content?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
}

/** The &quot;IndividualCourseDataHeroCourseConditions&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type IndividualCourseDataHeroCourseConditions = AcfFieldGroup &
  AcfFieldGroupFields &
  IndividualCourseDataHeroCourseConditions_Fields & {
    __typename?: 'IndividualCourseDataHeroCourseConditions'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataHeroCourseConditions&quot; Field Group */
    description?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataHeroCourseConditions&quot; Field Group */
    number?: Maybe<Scalars['Float']['output']>
  }

/** Interface representing fields of the ACF &quot;IndividualCourseDataHeroCourseConditions&quot; Field Group */
export type IndividualCourseDataHeroCourseConditions_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataHeroCourseConditions&quot; Field Group */
  description?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataHeroCourseConditions&quot; Field Group */
  number?: Maybe<Scalars['Float']['output']>
}

/** Interface representing fields of the ACF &quot;IndividualCourseDataHero&quot; Field Group */
export type IndividualCourseDataHero_Fields = {
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataHero&quot; Field Group */
  benefits?: Maybe<Array<Maybe<IndividualCourseDataHeroBenefits>>>
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataHero&quot; Field Group */
  courseConditions?: Maybe<Array<Maybe<IndividualCourseDataHeroCourseConditions>>>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataHero&quot; Field Group */
  cta?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataHero&quot; Field Group */
  runningLine?: Maybe<Scalars['String']['output']>
}

/** The &quot;IndividualCourseDataPrice&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type IndividualCourseDataPrice = AcfFieldGroup &
  AcfFieldGroupFields &
  IndividualCourseDataPrice_Fields & {
    __typename?: 'IndividualCourseDataPrice'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataPrice&quot; Field Group */
    bonuses?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataPrice&quot; Field Group */
    courseLengthInMonths?: Maybe<Scalars['Float']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataPrice&quot; Field Group */
    cta?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataPrice&quot; Field Group */
    discount?: Maybe<Scalars['Float']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataPrice&quot; Field Group */
    fullPrice?: Maybe<Scalars['Float']['output']>
    /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataPrice&quot; Field Group */
    level?: Maybe<Scalars['Float']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataPrice&quot; Field Group */
    liveTrainingsNumber?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataPrice&quot; Field Group */
    monthlyPrice?: Maybe<Scalars['Float']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataPrice&quot; Field Group */
    oldPrice?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataPrice&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataPrice&quot; Field Group */
    videoTrainingsNumber?: Maybe<Scalars['Float']['output']>
  }

/** Interface representing fields of the ACF &quot;IndividualCourseDataPrice&quot; Field Group */
export type IndividualCourseDataPrice_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataPrice&quot; Field Group */
  bonuses?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataPrice&quot; Field Group */
  courseLengthInMonths?: Maybe<Scalars['Float']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataPrice&quot; Field Group */
  cta?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataPrice&quot; Field Group */
  discount?: Maybe<Scalars['Float']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataPrice&quot; Field Group */
  fullPrice?: Maybe<Scalars['Float']['output']>
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataPrice&quot; Field Group */
  level?: Maybe<Scalars['Float']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataPrice&quot; Field Group */
  liveTrainingsNumber?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataPrice&quot; Field Group */
  monthlyPrice?: Maybe<Scalars['Float']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataPrice&quot; Field Group */
  oldPrice?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataPrice&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataPrice&quot; Field Group */
  videoTrainingsNumber?: Maybe<Scalars['Float']['output']>
}

/** The &quot;IndividualCourseDataProcess&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type IndividualCourseDataProcess = AcfFieldGroup &
  AcfFieldGroupFields &
  IndividualCourseDataProcess_Fields & {
    __typename?: 'IndividualCourseDataProcess'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataProcess&quot; Field Group */
    step?: Maybe<Array<Maybe<IndividualCourseDataProcessStep>>>
  }

/** The &quot;IndividualCourseDataProcessStep&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type IndividualCourseDataProcessStep = AcfFieldGroup &
  AcfFieldGroupFields &
  IndividualCourseDataProcessStep_Fields & {
    __typename?: 'IndividualCourseDataProcessStep'
    /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataProcessStep&quot; Field Group */
    description?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataProcessStep&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;IndividualCourseDataProcessStep&quot; Field Group */
export type IndividualCourseDataProcessStep_Fields = {
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataProcessStep&quot; Field Group */
  description?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataProcessStep&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;IndividualCourseDataProcess&quot; Field Group */
export type IndividualCourseDataProcess_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;IndividualCourseDataProcess&quot; Field Group */
  step?: Maybe<Array<Maybe<IndividualCourseDataProcessStep>>>
}

/** Interface representing fields of the ACF &quot;IndividualCourseData&quot; Field Group */
export type IndividualCourseData_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;IndividualCourseData&quot; Field Group */
  aboutCourse?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;IndividualCourseData&quot; Field Group */
  background?: Maybe<IndividualCourseDataBackground>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;IndividualCourseData&quot; Field Group */
  hero?: Maybe<IndividualCourseDataHero>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;IndividualCourseData&quot; Field Group */
  path?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;IndividualCourseData&quot; Field Group */
  price?: Maybe<IndividualCourseDataPrice>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;IndividualCourseData&quot; Field Group */
  process?: Maybe<IndividualCourseDataProcess>
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum IndividualCourseIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Connection between the IndividualCourse type and the individualCourse type */
export type IndividualCourseToPreviewConnectionEdge = Edge &
  IndividualCourseConnectionEdge &
  OneToOneConnection & {
    __typename?: 'IndividualCourseToPreviewConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: IndividualCourse
  }

/** Submitted field data */
export type InputField = {
  /** Field Id */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Field value */
  value?: InputMaybe<Scalars['String']['input']>
}

/** The &quot;LearningProcess&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type LearningProcess = AcfFieldGroup &
  AcfFieldGroupFields &
  LearningProcess_Fields & {
    __typename?: 'LearningProcess'
    /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;LearningProcess&quot; Field Group */
    content?: Maybe<Array<Maybe<LearningProcessContent>>>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;LearningProcess&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** The &quot;LearningProcessContent&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type LearningProcessContent = AcfFieldGroup &
  AcfFieldGroupFields &
  LearningProcessContent_Fields & {
    __typename?: 'LearningProcessContent'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;LearningProcessContent&quot; Field Group */
    picture?: Maybe<LearningProcessContentPicture>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;LearningProcessContent&quot; Field Group */
    text?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;LearningProcessContent&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** The &quot;LearningProcessContentPicture&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type LearningProcessContentPicture = AcfFieldGroup &
  AcfFieldGroupFields &
  LearningProcessContentPicture_Fields & {
    __typename?: 'LearningProcessContentPicture'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;LearningProcessContentPicture&quot; Field Group */
    alt?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;LearningProcessContentPicture&quot; Field Group */
    image?: Maybe<AcfMediaItemConnectionEdge>
  }

/** Interface representing fields of the ACF &quot;LearningProcessContentPicture&quot; Field Group */
export type LearningProcessContentPicture_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;LearningProcessContentPicture&quot; Field Group */
  alt?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;LearningProcessContentPicture&quot; Field Group */
  image?: Maybe<AcfMediaItemConnectionEdge>
}

/** Interface representing fields of the ACF &quot;LearningProcessContent&quot; Field Group */
export type LearningProcessContent_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;LearningProcessContent&quot; Field Group */
  picture?: Maybe<LearningProcessContentPicture>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;LearningProcessContent&quot; Field Group */
  text?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;LearningProcessContent&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;LearningProcess&quot; Field Group */
export type LearningProcess_Fields = {
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;LearningProcess&quot; Field Group */
  content?: Maybe<Array<Maybe<LearningProcessContent>>>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;LearningProcess&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** The &quot;Main&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type Main = AcfFieldGroup &
  AcfFieldGroupFields &
  Main_Fields & {
    __typename?: 'Main'
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Main&quot; Field Group */
    background?: Maybe<MainBackground>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Main&quot; Field Group */
    chooseCourse?: Maybe<MainChooseCourse>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Main&quot; Field Group */
    hero?: Maybe<MainHero>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Main&quot; Field Group */
    individualLesson?: Maybe<MainIndividualLesson>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Main&quot; Field Group */
    runningLine?: Maybe<MainRunningLine>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Main&quot; Field Group */
    slider?: Maybe<MainSlider>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Main&quot; Field Group */
    students?: Maybe<MainStudents>
  }

/** The &quot;MainBackground&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type MainBackground = AcfFieldGroup &
  AcfFieldGroupFields &
  MainBackground_Fields & {
    __typename?: 'MainBackground'
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;MainBackground&quot; Field Group */
    desktop?: Maybe<MainBackgroundDesktop>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;MainBackground&quot; Field Group */
    mobile?: Maybe<MainBackgroundMobile>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;MainBackground&quot; Field Group */
    noise?: Maybe<AcfMediaItemConnectionEdge>
  }

/** The &quot;MainBackgroundDesktop&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type MainBackgroundDesktop = AcfFieldGroup &
  AcfFieldGroupFields &
  MainBackgroundDesktop_Fields & {
    __typename?: 'MainBackgroundDesktop'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;MainBackgroundDesktop&quot; Field Group */
    footer?: Maybe<AcfMediaItemConnectionEdge>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;MainBackgroundDesktop&quot; Field Group */
    hero?: Maybe<AcfMediaItemConnectionEdge>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;MainBackgroundDesktop&quot; Field Group */
    teacher?: Maybe<AcfMediaItemConnectionEdge>
  }

/** Interface representing fields of the ACF &quot;MainBackgroundDesktop&quot; Field Group */
export type MainBackgroundDesktop_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;MainBackgroundDesktop&quot; Field Group */
  footer?: Maybe<AcfMediaItemConnectionEdge>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;MainBackgroundDesktop&quot; Field Group */
  hero?: Maybe<AcfMediaItemConnectionEdge>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;MainBackgroundDesktop&quot; Field Group */
  teacher?: Maybe<AcfMediaItemConnectionEdge>
}

/** The &quot;MainBackgroundMobile&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type MainBackgroundMobile = AcfFieldGroup &
  AcfFieldGroupFields &
  MainBackgroundMobile_Fields & {
    __typename?: 'MainBackgroundMobile'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;MainBackgroundMobile&quot; Field Group */
    footer?: Maybe<AcfMediaItemConnectionEdge>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;MainBackgroundMobile&quot; Field Group */
    hero?: Maybe<AcfMediaItemConnectionEdge>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;MainBackgroundMobile&quot; Field Group */
    teacher?: Maybe<AcfMediaItemConnectionEdge>
  }

/** Interface representing fields of the ACF &quot;MainBackgroundMobile&quot; Field Group */
export type MainBackgroundMobile_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;MainBackgroundMobile&quot; Field Group */
  footer?: Maybe<AcfMediaItemConnectionEdge>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;MainBackgroundMobile&quot; Field Group */
  hero?: Maybe<AcfMediaItemConnectionEdge>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;MainBackgroundMobile&quot; Field Group */
  teacher?: Maybe<AcfMediaItemConnectionEdge>
}

/** Interface representing fields of the ACF &quot;MainBackground&quot; Field Group */
export type MainBackground_Fields = {
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;MainBackground&quot; Field Group */
  desktop?: Maybe<MainBackgroundDesktop>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;MainBackground&quot; Field Group */
  mobile?: Maybe<MainBackgroundMobile>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;MainBackground&quot; Field Group */
  noise?: Maybe<AcfMediaItemConnectionEdge>
}

/** The &quot;MainChooseCourse&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type MainChooseCourse = AcfFieldGroup &
  AcfFieldGroupFields &
  MainChooseCourse_Fields & {
    __typename?: 'MainChooseCourse'
    /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;MainChooseCourse&quot; Field Group */
    courses?: Maybe<Array<Maybe<MainChooseCourseCourses>>>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainChooseCourse&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** The &quot;MainChooseCourseCourses&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type MainChooseCourseCourses = AcfFieldGroup &
  AcfFieldGroupFields &
  MainChooseCourseCourses_Fields & {
    __typename?: 'MainChooseCourseCourses'
    /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;MainChooseCourseCourses&quot; Field Group */
    course?: Maybe<AcfContentNodeConnection>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainChooseCourseCourses&quot; Field Group */
    description?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
  }

/** The &quot;MainChooseCourseCourses&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type MainChooseCourseCoursesCourseArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Interface representing fields of the ACF &quot;MainChooseCourseCourses&quot; Field Group */
export type MainChooseCourseCourses_Fields = {
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;MainChooseCourseCourses&quot; Field Group */
  course?: Maybe<AcfContentNodeConnection>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainChooseCourseCourses&quot; Field Group */
  description?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;MainChooseCourseCourses&quot; Field Group */
export type MainChooseCourseCourses_FieldsCourseArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Interface representing fields of the ACF &quot;MainChooseCourse&quot; Field Group */
export type MainChooseCourse_Fields = {
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;MainChooseCourse&quot; Field Group */
  courses?: Maybe<Array<Maybe<MainChooseCourseCourses>>>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainChooseCourse&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** The &quot;MainHero&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type MainHero = AcfFieldGroup &
  AcfFieldGroupFields &
  MainHero_Fields & {
    __typename?: 'MainHero'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainHero&quot; Field Group */
    about?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;MainHero&quot; Field Group */
    benefits?: Maybe<Array<Maybe<MainHeroBenefits>>>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainHero&quot; Field Group */
    scrollButton?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainHero&quot; Field Group */
    subtitle?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainHero&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** The &quot;MainHeroBenefits&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type MainHeroBenefits = AcfFieldGroup &
  AcfFieldGroupFields &
  MainHeroBenefits_Fields & {
    __typename?: 'MainHeroBenefits'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainHeroBenefits&quot; Field Group */
    benefit?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;MainHeroBenefits&quot; Field Group */
export type MainHeroBenefits_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainHeroBenefits&quot; Field Group */
  benefit?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;MainHero&quot; Field Group */
export type MainHero_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainHero&quot; Field Group */
  about?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;MainHero&quot; Field Group */
  benefits?: Maybe<Array<Maybe<MainHeroBenefits>>>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainHero&quot; Field Group */
  scrollButton?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainHero&quot; Field Group */
  subtitle?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainHero&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** The &quot;MainIndividualLesson&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type MainIndividualLesson = AcfFieldGroup &
  AcfFieldGroupFields &
  MainIndividualLesson_Fields & {
    __typename?: 'MainIndividualLesson'
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;MainIndividualLesson&quot; Field Group */
    cta?: Maybe<MainIndividualLessonCta>
    /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;MainIndividualLesson&quot; Field Group */
    details?: Maybe<Array<Maybe<MainIndividualLessonDetails>>>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainIndividualLesson&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** The &quot;MainIndividualLessonCta&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type MainIndividualLessonCta = AcfFieldGroup &
  AcfFieldGroupFields &
  MainIndividualLessonCta_Fields & {
    __typename?: 'MainIndividualLessonCta'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainIndividualLessonCta&quot; Field Group */
    button?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainIndividualLessonCta&quot; Field Group */
    description?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainIndividualLessonCta&quot; Field Group */
    price?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainIndividualLessonCta&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;MainIndividualLessonCta&quot; Field Group */
export type MainIndividualLessonCta_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainIndividualLessonCta&quot; Field Group */
  button?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainIndividualLessonCta&quot; Field Group */
  description?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainIndividualLessonCta&quot; Field Group */
  price?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainIndividualLessonCta&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** The &quot;MainIndividualLessonDetails&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type MainIndividualLessonDetails = AcfFieldGroup &
  AcfFieldGroupFields &
  MainIndividualLessonDetails_Fields & {
    __typename?: 'MainIndividualLessonDetails'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainIndividualLessonDetails&quot; Field Group */
    description?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainIndividualLessonDetails&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;MainIndividualLessonDetails&quot; Field Group */
export type MainIndividualLessonDetails_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainIndividualLessonDetails&quot; Field Group */
  description?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainIndividualLessonDetails&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;MainIndividualLesson&quot; Field Group */
export type MainIndividualLesson_Fields = {
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;MainIndividualLesson&quot; Field Group */
  cta?: Maybe<MainIndividualLessonCta>
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;MainIndividualLesson&quot; Field Group */
  details?: Maybe<Array<Maybe<MainIndividualLessonDetails>>>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainIndividualLesson&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** The &quot;MainRunningLine&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type MainRunningLine = AcfFieldGroup &
  AcfFieldGroupFields &
  MainRunningLine_Fields & {
    __typename?: 'MainRunningLine'
    /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;MainRunningLine&quot; Field Group */
    content?: Maybe<Array<Maybe<MainRunningLineContent>>>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;MainRunningLine&quot; Field Group */
    icon?: Maybe<AcfMediaItemConnectionEdge>
  }

/** The &quot;MainRunningLineContent&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type MainRunningLineContent = AcfFieldGroup &
  AcfFieldGroupFields &
  MainRunningLineContent_Fields & {
    __typename?: 'MainRunningLineContent'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainRunningLineContent&quot; Field Group */
    text?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;MainRunningLineContent&quot; Field Group */
export type MainRunningLineContent_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainRunningLineContent&quot; Field Group */
  text?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;MainRunningLine&quot; Field Group */
export type MainRunningLine_Fields = {
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;MainRunningLine&quot; Field Group */
  content?: Maybe<Array<Maybe<MainRunningLineContent>>>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;MainRunningLine&quot; Field Group */
  icon?: Maybe<AcfMediaItemConnectionEdge>
}

/** The &quot;MainSlider&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type MainSlider = AcfFieldGroup &
  AcfFieldGroupFields &
  MainSlider_Fields & {
    __typename?: 'MainSlider'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;MainSlider&quot; Field Group */
    lowerslider?: Maybe<Array<Maybe<MainSliderLowerslider>>>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainSlider&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;MainSlider&quot; Field Group */
    upperslider?: Maybe<Array<Maybe<MainSliderUpperslider>>>
  }

/** The &quot;MainSliderLowerslider&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type MainSliderLowerslider = AcfFieldGroup &
  AcfFieldGroupFields &
  MainSliderLowerslider_Fields & {
    __typename?: 'MainSliderLowerslider'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;MainSliderLowerslider&quot; Field Group */
    image?: Maybe<AcfMediaItemConnectionEdge>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainSliderLowerslider&quot; Field Group */
    text?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;MainSliderLowerslider&quot; Field Group */
export type MainSliderLowerslider_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;MainSliderLowerslider&quot; Field Group */
  image?: Maybe<AcfMediaItemConnectionEdge>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainSliderLowerslider&quot; Field Group */
  text?: Maybe<Scalars['String']['output']>
}

/** The &quot;MainSliderUpperslider&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type MainSliderUpperslider = AcfFieldGroup &
  AcfFieldGroupFields &
  MainSliderUpperslider_Fields & {
    __typename?: 'MainSliderUpperslider'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;MainSliderUpperslider&quot; Field Group */
    image?: Maybe<AcfMediaItemConnectionEdge>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainSliderUpperslider&quot; Field Group */
    text?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;MainSliderUpperslider&quot; Field Group */
export type MainSliderUpperslider_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;MainSliderUpperslider&quot; Field Group */
  image?: Maybe<AcfMediaItemConnectionEdge>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainSliderUpperslider&quot; Field Group */
  text?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;MainSlider&quot; Field Group */
export type MainSlider_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;MainSlider&quot; Field Group */
  lowerslider?: Maybe<Array<Maybe<MainSliderLowerslider>>>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainSlider&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;MainSlider&quot; Field Group */
  upperslider?: Maybe<Array<Maybe<MainSliderUpperslider>>>
}

/** The &quot;MainStudents&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type MainStudents = AcfFieldGroup &
  AcfFieldGroupFields &
  MainStudents_Fields & {
    __typename?: 'MainStudents'
    /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;MainStudents&quot; Field Group */
    cards?: Maybe<Array<Maybe<MainStudentsCards>>>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainStudents&quot; Field Group */
    cta?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainStudents&quot; Field Group */
    description?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainStudents&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** The &quot;MainStudentsCards&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type MainStudentsCards = AcfFieldGroup &
  AcfFieldGroupFields &
  MainStudentsCards_Fields & {
    __typename?: 'MainStudentsCards'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainStudentsCards&quot; Field Group */
    description?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainStudentsCards&quot; Field Group */
    firstBadge?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;MainStudentsCards&quot; Field Group */
    leftIcon?: Maybe<AcfMediaItemConnectionEdge>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;MainStudentsCards&quot; Field Group */
    rightIcon?: Maybe<AcfMediaItemConnectionEdge>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainStudentsCards&quot; Field Group */
    secondBadge?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainStudentsCards&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;MainStudentsCards&quot; Field Group */
export type MainStudentsCards_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainStudentsCards&quot; Field Group */
  description?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainStudentsCards&quot; Field Group */
  firstBadge?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;MainStudentsCards&quot; Field Group */
  leftIcon?: Maybe<AcfMediaItemConnectionEdge>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;MainStudentsCards&quot; Field Group */
  rightIcon?: Maybe<AcfMediaItemConnectionEdge>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainStudentsCards&quot; Field Group */
  secondBadge?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainStudentsCards&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;MainStudents&quot; Field Group */
export type MainStudents_Fields = {
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;MainStudents&quot; Field Group */
  cards?: Maybe<Array<Maybe<MainStudentsCards>>>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainStudents&quot; Field Group */
  cta?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainStudents&quot; Field Group */
  description?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;MainStudents&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;Main&quot; Field Group */
export type Main_Fields = {
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Main&quot; Field Group */
  background?: Maybe<MainBackground>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Main&quot; Field Group */
  chooseCourse?: Maybe<MainChooseCourse>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Main&quot; Field Group */
  hero?: Maybe<MainHero>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Main&quot; Field Group */
  individualLesson?: Maybe<MainIndividualLesson>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Main&quot; Field Group */
  runningLine?: Maybe<MainRunningLine>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Main&quot; Field Group */
  slider?: Maybe<MainSlider>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Main&quot; Field Group */
  students?: Maybe<MainStudents>
}

/** File details for a Media Item */
export type MediaDetails = {
  __typename?: 'MediaDetails'
  /** The filename of the mediaItem */
  file?: Maybe<Scalars['String']['output']>
  /** The height of the mediaItem */
  height?: Maybe<Scalars['Int']['output']>
  /** Meta information associated with the mediaItem */
  meta?: Maybe<MediaItemMeta>
  /** The available sizes of the mediaItem */
  sizes?: Maybe<Array<Maybe<MediaSize>>>
  /** The width of the mediaItem */
  width?: Maybe<Scalars['Int']['output']>
}

/** File details for a Media Item */
export type MediaDetailsSizesArgs = {
  exclude?: InputMaybe<Array<InputMaybe<MediaItemSizeEnum>>>
  include?: InputMaybe<Array<InputMaybe<MediaItemSizeEnum>>>
}

/** The mediaItem type */
export type MediaItem = ContentNode &
  DatabaseIdentifier &
  HierarchicalContentNode &
  HierarchicalNode &
  Node &
  NodeWithAuthor &
  NodeWithComments &
  NodeWithTemplate &
  NodeWithTitle &
  UniformResourceIdentifiable & {
    __typename?: 'MediaItem'
    /** Alternative text to display when resource is not displayed */
    altText?: Maybe<Scalars['String']['output']>
    /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
    ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>
    /** Connection between the NodeWithAuthor type and the User type */
    author?: Maybe<NodeWithAuthorToUserConnectionEdge>
    /** The database identifier of the author of the node */
    authorDatabaseId?: Maybe<Scalars['Int']['output']>
    /** The globally unique identifier of the author of the node */
    authorId?: Maybe<Scalars['ID']['output']>
    /** The caption for the resource */
    caption?: Maybe<Scalars['String']['output']>
    /** Connection between the HierarchicalContentNode type and the ContentNode type */
    children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>
    /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
    commentCount?: Maybe<Scalars['Int']['output']>
    /** Whether the comments are open or closed for this particular post. */
    commentStatus?: Maybe<Scalars['String']['output']>
    /** Connection between the MediaItem type and the Comment type */
    comments?: Maybe<MediaItemToCommentConnection>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']['output']
    /** Post publishing date. */
    date?: Maybe<Scalars['String']['output']>
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']['output']>
    /** Description of the image (stored as post_content) */
    description?: Maybe<Scalars['String']['output']>
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']['output']>
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>
    /** The filesize in bytes of the resource */
    fileSize?: Maybe<Scalars['Int']['output']>
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the attachment object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']['output']>
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>
    /** The permalink of the post */
    link?: Maybe<Scalars['String']['output']>
    /** Details about the mediaItem */
    mediaDetails?: Maybe<MediaDetails>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    mediaItemId: Scalars['Int']['output']
    /** Url of the mediaItem */
    mediaItemUrl?: Maybe<Scalars['String']['output']>
    /** Type of resource */
    mediaType?: Maybe<Scalars['String']['output']>
    /** The mime type of the mediaItem */
    mimeType?: Maybe<Scalars['String']['output']>
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']['output']>
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']['output']>
    /** The parent of the node. The parent object can be of various types */
    parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>
    /** Database id of the parent node */
    parentDatabaseId?: Maybe<Scalars['Int']['output']>
    /** The globally unique identifier of the parent node. */
    parentId?: Maybe<Scalars['ID']['output']>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the ContentNode */
    seo?: Maybe<PostTypeSeo>
    /** The sizes attribute value for an image. */
    sizes?: Maybe<Scalars['String']['output']>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** Url of the mediaItem */
    sourceUrl?: Maybe<Scalars['String']['output']>
    /** The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths. */
    srcSet?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to a node of content */
    template?: Maybe<ContentTemplate>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The mediaItem type */
export type MediaItemAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>
}

/** The mediaItem type */
export type MediaItemCaptionArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The mediaItem type */
export type MediaItemChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>
}

/** The mediaItem type */
export type MediaItemCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<MediaItemToCommentConnectionWhereArgs>
}

/** The mediaItem type */
export type MediaItemDescriptionArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The mediaItem type */
export type MediaItemEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The mediaItem type */
export type MediaItemEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The mediaItem type */
export type MediaItemFileSizeArgs = {
  size?: InputMaybe<MediaItemSizeEnum>
}

/** The mediaItem type */
export type MediaItemSizesArgs = {
  size?: InputMaybe<MediaItemSizeEnum>
}

/** The mediaItem type */
export type MediaItemSourceUrlArgs = {
  size?: InputMaybe<MediaItemSizeEnum>
}

/** The mediaItem type */
export type MediaItemSrcSetArgs = {
  size?: InputMaybe<MediaItemSizeEnum>
}

/** The mediaItem type */
export type MediaItemTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** Connection to mediaItem Nodes */
export type MediaItemConnection = {
  /** A list of edges (relational context) between RootQuery and connected mediaItem Nodes */
  edges: Array<MediaItemConnectionEdge>
  /** A list of connected mediaItem Nodes */
  nodes: Array<MediaItem>
  /** Information about pagination in a connection. */
  pageInfo: MediaItemConnectionPageInfo
}

/** Edge between a Node and a connected mediaItem */
export type MediaItemConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected mediaItem Node */
  node: MediaItem
}

/** Page Info on the connected MediaItemConnectionEdge */
export type MediaItemConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum MediaItemIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a media item by its source url */
  SourceUrl = 'SOURCE_URL',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Meta connected to a MediaItem */
export type MediaItemMeta = {
  __typename?: 'MediaItemMeta'
  /** Aperture measurement of the media item. */
  aperture?: Maybe<Scalars['Float']['output']>
  /** Information about the camera used to create the media item. */
  camera?: Maybe<Scalars['String']['output']>
  /** The text string description associated with the media item. */
  caption?: Maybe<Scalars['String']['output']>
  /** Copyright information associated with the media item. */
  copyright?: Maybe<Scalars['String']['output']>
  /** The date/time when the media was created. */
  createdTimestamp?: Maybe<Scalars['Int']['output']>
  /** The original creator of the media item. */
  credit?: Maybe<Scalars['String']['output']>
  /** The focal length value of the media item. */
  focalLength?: Maybe<Scalars['Float']['output']>
  /** The ISO (International Organization for Standardization) value of the media item. */
  iso?: Maybe<Scalars['Int']['output']>
  /** List of keywords used to describe or identfy the media item. */
  keywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  /** The vertical or horizontal aspect of the media item. */
  orientation?: Maybe<Scalars['String']['output']>
  /** The shutter speed information of the media item. */
  shutterSpeed?: Maybe<Scalars['Float']['output']>
  /** A useful title for the media item. */
  title?: Maybe<Scalars['String']['output']>
}

/** The size of the media item object. */
export enum MediaItemSizeEnum {
  /** MediaItem with the large size */
  Large = 'LARGE',
  /** MediaItem with the medium size */
  Medium = 'MEDIUM',
  /** MediaItem with the medium_large size */
  MediumLarge = 'MEDIUM_LARGE',
  /** MediaItem with the thumbnail size */
  Thumbnail = 'THUMBNAIL',
  /** MediaItem with the 1536x1536 size */
  '1536X1536' = '_1536X1536',
  /** MediaItem with the 2048x2048 size */
  '2048X2048' = '_2048X2048',
}

/** The status of the media item object. */
export enum MediaItemStatusEnum {
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the trash status */
  Trash = 'TRASH',
}

/** Connection between the MediaItem type and the Comment type */
export type MediaItemToCommentConnection = CommentConnection &
  Connection & {
    __typename?: 'MediaItemToCommentConnection'
    /** Edges for the MediaItemToCommentConnection connection */
    edges: Array<MediaItemToCommentConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Comment>
    /** Information about pagination in a connection. */
    pageInfo: MediaItemToCommentConnectionPageInfo
  }

/** An edge in a connection */
export type MediaItemToCommentConnectionEdge = CommentConnectionEdge &
  Edge & {
    __typename?: 'MediaItemToCommentConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Comment
  }

/** Page Info on the &quot;MediaItemToCommentConnection&quot; */
export type MediaItemToCommentConnectionPageInfo = CommentConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'MediaItemToCommentConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the MediaItemToCommentConnection connection */
export type MediaItemToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']['input']>
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']['input']>
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']['input']>
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']['input']>
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']['input']>
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']['input']>
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']['input']>
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']['input']>
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']['input']>
}

/** Details of an available size for a media item */
export type MediaSize = {
  __typename?: 'MediaSize'
  /** The filename of the referenced size */
  file?: Maybe<Scalars['String']['output']>
  /** The filesize of the resource */
  fileSize?: Maybe<Scalars['Int']['output']>
  /** The height of the referenced size */
  height?: Maybe<Scalars['String']['output']>
  /** The mime type of the referenced size */
  mimeType?: Maybe<Scalars['String']['output']>
  /** The referenced size name */
  name?: Maybe<Scalars['String']['output']>
  /** The url of the referenced size */
  sourceUrl?: Maybe<Scalars['String']['output']>
  /** The width of the referenced size */
  width?: Maybe<Scalars['String']['output']>
}

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type Menu = DatabaseIdentifier &
  Node & {
    __typename?: 'Menu'
    /** The number of items in the menu */
    count?: Maybe<Scalars['Int']['output']>
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']['output']
    /** The globally unique identifier of the nav menu object. */
    id: Scalars['ID']['output']
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** The locations a menu is assigned to */
    locations?: Maybe<Array<Maybe<MenuLocationEnum>>>
    /**
     * WP ID of the nav menu.
     * @deprecated Deprecated in favor of the databaseId field
     */
    menuId?: Maybe<Scalars['Int']['output']>
    /** Connection between the Menu type and the MenuItem type */
    menuItems?: Maybe<MenuToMenuItemConnection>
    /** Display name of the menu. Equivalent to WP_Term-&gt;name. */
    name?: Maybe<Scalars['String']['output']>
    /** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
    slug?: Maybe<Scalars['String']['output']>
  }

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type MenuMenuItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<MenuToMenuItemConnectionWhereArgs>
}

/** Connection to Menu Nodes */
export type MenuConnection = {
  /** A list of edges (relational context) between RootQuery and connected Menu Nodes */
  edges: Array<MenuConnectionEdge>
  /** A list of connected Menu Nodes */
  nodes: Array<Menu>
  /** Information about pagination in a connection. */
  pageInfo: MenuConnectionPageInfo
}

/** Edge between a Node and a connected Menu */
export type MenuConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected Menu Node */
  node: Menu
}

/** Page Info on the connected MenuConnectionEdge */
export type MenuConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItem = DatabaseIdentifier &
  Node & {
    __typename?: 'MenuItem'
    /** Connection between the MenuItem type and the MenuItem type */
    childItems?: Maybe<MenuItemToMenuItemConnection>
    /** Connection from MenuItem to it&#039;s connected node */
    connectedNode?: Maybe<MenuItemToMenuItemLinkableConnectionEdge>
    /**
     * The object connected to this menu item.
     * @deprecated Deprecated in favor of the connectedNode field
     */
    connectedObject?: Maybe<MenuItemObjectUnion>
    /** Class attribute for the menu item link */
    cssClasses?: Maybe<Array<Maybe<Scalars['String']['output']>>>
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']['output']
    /** Description of the menu item. */
    description?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the nav menu item object. */
    id: Scalars['ID']['output']
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Label or title of the menu item. */
    label?: Maybe<Scalars['String']['output']>
    /** Link relationship (XFN) of the menu item. */
    linkRelationship?: Maybe<Scalars['String']['output']>
    /** The locations the menu item&#039;s Menu is assigned to */
    locations?: Maybe<Array<Maybe<MenuLocationEnum>>>
    /** The Menu a MenuItem is part of */
    menu?: Maybe<MenuItemToMenuConnectionEdge>
    /**
     * WP ID of the menu item.
     * @deprecated Deprecated in favor of the databaseId field
     */
    menuItemId?: Maybe<Scalars['Int']['output']>
    /** Menu item order */
    order?: Maybe<Scalars['Int']['output']>
    /** The database id of the parent menu item or null if it is the root */
    parentDatabaseId?: Maybe<Scalars['Int']['output']>
    /** The globally unique identifier of the parent nav menu item object. */
    parentId?: Maybe<Scalars['ID']['output']>
    /** Path for the resource. Relative path for internal resources. Absolute path for external resources. */
    path?: Maybe<Scalars['String']['output']>
    /** Target attribute for the menu item link. */
    target?: Maybe<Scalars['String']['output']>
    /** Title attribute for the menu item link */
    title?: Maybe<Scalars['String']['output']>
    /** The uri of the resource the menu item links to */
    uri?: Maybe<Scalars['String']['output']>
    /** URL or destination of the menu item. */
    url?: Maybe<Scalars['String']['output']>
  }

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItemChildItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<MenuItemToMenuItemConnectionWhereArgs>
}

/** Connection to MenuItem Nodes */
export type MenuItemConnection = {
  /** A list of edges (relational context) between RootQuery and connected MenuItem Nodes */
  edges: Array<MenuItemConnectionEdge>
  /** A list of connected MenuItem Nodes */
  nodes: Array<MenuItem>
  /** Information about pagination in a connection. */
  pageInfo: MenuItemConnectionPageInfo
}

/** Edge between a Node and a connected MenuItem */
export type MenuItemConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected MenuItem Node */
  node: MenuItem
}

/** Page Info on the connected MenuItemConnectionEdge */
export type MenuItemConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** Nodes that can be linked to as Menu Items */
export type MenuItemLinkable = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output']
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output']
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output']
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>
}

/** Edge between a Node and a connected MenuItemLinkable */
export type MenuItemLinkableConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected MenuItemLinkable Node */
  node: MenuItemLinkable
}

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum MenuItemNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
}

/** Deprecated in favor of MenuItemLinkeable Interface */
export type MenuItemObjectUnion =
  | Category
  | Course
  | GeneralFragment
  | IndividualCourse
  | Page
  | Post
  | Tag

/** Connection between the MenuItem type and the Menu type */
export type MenuItemToMenuConnectionEdge = Edge &
  MenuConnectionEdge &
  OneToOneConnection & {
    __typename?: 'MenuItemToMenuConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Menu
  }

/** Connection between the MenuItem type and the MenuItem type */
export type MenuItemToMenuItemConnection = Connection &
  MenuItemConnection & {
    __typename?: 'MenuItemToMenuItemConnection'
    /** Edges for the MenuItemToMenuItemConnection connection */
    edges: Array<MenuItemToMenuItemConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<MenuItem>
    /** Information about pagination in a connection. */
    pageInfo: MenuItemToMenuItemConnectionPageInfo
  }

/** An edge in a connection */
export type MenuItemToMenuItemConnectionEdge = Edge &
  MenuItemConnectionEdge & {
    __typename?: 'MenuItemToMenuItemConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: MenuItem
  }

/** Page Info on the &quot;MenuItemToMenuItemConnection&quot; */
export type MenuItemToMenuItemConnectionPageInfo = MenuItemConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'MenuItemToMenuItemConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export type MenuItemToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>
  /** The database ID of the parent menu object */
  parentDatabaseId?: InputMaybe<Scalars['Int']['input']>
  /** The ID of the parent menu object */
  parentId?: InputMaybe<Scalars['ID']['input']>
}

/** Connection between the MenuItem type and the MenuItemLinkable type */
export type MenuItemToMenuItemLinkableConnectionEdge = Edge &
  MenuItemLinkableConnectionEdge &
  OneToOneConnection & {
    __typename?: 'MenuItemToMenuItemLinkableConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: MenuItemLinkable
  }

/** Registered menu locations */
export enum MenuLocationEnum {
  /** Empty menu location */
  Empty = 'EMPTY',
}

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum MenuNodeIdTypeEnum {
  /** Identify a menu node by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a menu node by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a menu node by the slug of menu location to which it is assigned */
  Location = 'LOCATION',
  /** Identify a menu node by its name */
  Name = 'NAME',
  /** Identify a menu node by its slug */
  Slug = 'SLUG',
}

/** Connection between the Menu type and the MenuItem type */
export type MenuToMenuItemConnection = Connection &
  MenuItemConnection & {
    __typename?: 'MenuToMenuItemConnection'
    /** Edges for the MenuToMenuItemConnection connection */
    edges: Array<MenuToMenuItemConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<MenuItem>
    /** Information about pagination in a connection. */
    pageInfo: MenuToMenuItemConnectionPageInfo
  }

/** An edge in a connection */
export type MenuToMenuItemConnectionEdge = Edge &
  MenuItemConnectionEdge & {
    __typename?: 'MenuToMenuItemConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: MenuItem
  }

/** Page Info on the &quot;MenuToMenuItemConnection&quot; */
export type MenuToMenuItemConnectionPageInfo = MenuItemConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'MenuToMenuItemConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the MenuToMenuItemConnection connection */
export type MenuToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>
  /** The database ID of the parent menu object */
  parentDatabaseId?: InputMaybe<Scalars['Int']['input']>
  /** The ID of the parent menu object */
  parentId?: InputMaybe<Scalars['ID']['input']>
}

/** The MimeType of the object */
export enum MimeTypeEnum {
  /** application/java mime type. */
  ApplicationJava = 'APPLICATION_JAVA',
  /** application/msword mime type. */
  ApplicationMsword = 'APPLICATION_MSWORD',
  /** application/octet-stream mime type. */
  ApplicationOctetStream = 'APPLICATION_OCTET_STREAM',
  /** application/onenote mime type. */
  ApplicationOnenote = 'APPLICATION_ONENOTE',
  /** application/oxps mime type. */
  ApplicationOxps = 'APPLICATION_OXPS',
  /** application/pdf mime type. */
  ApplicationPdf = 'APPLICATION_PDF',
  /** application/rar mime type. */
  ApplicationRar = 'APPLICATION_RAR',
  /** application/rtf mime type. */
  ApplicationRtf = 'APPLICATION_RTF',
  /** application/ttaf+xml mime type. */
  ApplicationTtafXml = 'APPLICATION_TTAF_XML',
  /** application/vnd.apple.keynote mime type. */
  ApplicationVndAppleKeynote = 'APPLICATION_VND_APPLE_KEYNOTE',
  /** application/vnd.apple.numbers mime type. */
  ApplicationVndAppleNumbers = 'APPLICATION_VND_APPLE_NUMBERS',
  /** application/vnd.apple.pages mime type. */
  ApplicationVndApplePages = 'APPLICATION_VND_APPLE_PAGES',
  /** application/vnd.ms-access mime type. */
  ApplicationVndMsAccess = 'APPLICATION_VND_MS_ACCESS',
  /** application/vnd.ms-excel mime type. */
  ApplicationVndMsExcel = 'APPLICATION_VND_MS_EXCEL',
  /** application/vnd.ms-excel.addin.macroEnabled.12 mime type. */
  ApplicationVndMsExcelAddinMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12',
  /** application/vnd.ms-excel.sheet.binary.macroEnabled.12 mime type. */
  ApplicationVndMsExcelSheetBinaryMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12',
  /** application/vnd.ms-excel.sheet.macroEnabled.12 mime type. */
  ApplicationVndMsExcelSheetMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12',
  /** application/vnd.ms-excel.template.macroEnabled.12 mime type. */
  ApplicationVndMsExcelTemplateMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12',
  /** application/vnd.ms-powerpoint mime type. */
  ApplicationVndMsPowerpoint = 'APPLICATION_VND_MS_POWERPOINT',
  /** application/vnd.ms-powerpoint.addin.macroEnabled.12 mime type. */
  ApplicationVndMsPowerpointAddinMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12',
  /** application/vnd.ms-powerpoint.presentation.macroEnabled.12 mime type. */
  ApplicationVndMsPowerpointPresentationMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12',
  /** application/vnd.ms-powerpoint.slideshow.macroEnabled.12 mime type. */
  ApplicationVndMsPowerpointSlideshowMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12',
  /** application/vnd.ms-powerpoint.slide.macroEnabled.12 mime type. */
  ApplicationVndMsPowerpointSlideMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12',
  /** application/vnd.ms-powerpoint.template.macroEnabled.12 mime type. */
  ApplicationVndMsPowerpointTemplateMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12',
  /** application/vnd.ms-project mime type. */
  ApplicationVndMsProject = 'APPLICATION_VND_MS_PROJECT',
  /** application/vnd.ms-word.document.macroEnabled.12 mime type. */
  ApplicationVndMsWordDocumentMacroenabled_12 = 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12',
  /** application/vnd.ms-word.template.macroEnabled.12 mime type. */
  ApplicationVndMsWordTemplateMacroenabled_12 = 'APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12',
  /** application/vnd.ms-write mime type. */
  ApplicationVndMsWrite = 'APPLICATION_VND_MS_WRITE',
  /** application/vnd.ms-xpsdocument mime type. */
  ApplicationVndMsXpsdocument = 'APPLICATION_VND_MS_XPSDOCUMENT',
  /** application/vnd.oasis.opendocument.chart mime type. */
  ApplicationVndOasisOpendocumentChart = 'APPLICATION_VND_OASIS_OPENDOCUMENT_CHART',
  /** application/vnd.oasis.opendocument.database mime type. */
  ApplicationVndOasisOpendocumentDatabase = 'APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE',
  /** application/vnd.oasis.opendocument.formula mime type. */
  ApplicationVndOasisOpendocumentFormula = 'APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA',
  /** application/vnd.oasis.opendocument.graphics mime type. */
  ApplicationVndOasisOpendocumentGraphics = 'APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS',
  /** application/vnd.oasis.opendocument.presentation mime type. */
  ApplicationVndOasisOpendocumentPresentation = 'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION',
  /** application/vnd.oasis.opendocument.spreadsheet mime type. */
  ApplicationVndOasisOpendocumentSpreadsheet = 'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET',
  /** application/vnd.oasis.opendocument.text mime type. */
  ApplicationVndOasisOpendocumentText = 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT',
  /** application/vnd.openxmlformats-officedocument.presentationml.presentation mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION',
  /** application/vnd.openxmlformats-officedocument.presentationml.slide mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE',
  /** application/vnd.openxmlformats-officedocument.presentationml.slideshow mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW',
  /** application/vnd.openxmlformats-officedocument.presentationml.template mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE',
  /** application/vnd.openxmlformats-officedocument.spreadsheetml.sheet mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET',
  /** application/vnd.openxmlformats-officedocument.spreadsheetml.template mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE',
  /** application/vnd.openxmlformats-officedocument.wordprocessingml.document mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT',
  /** application/vnd.openxmlformats-officedocument.wordprocessingml.template mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE',
  /** application/wordperfect mime type. */
  ApplicationWordperfect = 'APPLICATION_WORDPERFECT',
  /** application/x-7z-compressed mime type. */
  ApplicationX_7ZCompressed = 'APPLICATION_X_7Z_COMPRESSED',
  /** application/x-gzip mime type. */
  ApplicationXGzip = 'APPLICATION_X_GZIP',
  /** application/x-tar mime type. */
  ApplicationXTar = 'APPLICATION_X_TAR',
  /** application/zip mime type. */
  ApplicationZip = 'APPLICATION_ZIP',
  /** audio/aac mime type. */
  AudioAac = 'AUDIO_AAC',
  /** audio/flac mime type. */
  AudioFlac = 'AUDIO_FLAC',
  /** audio/midi mime type. */
  AudioMidi = 'AUDIO_MIDI',
  /** audio/mpeg mime type. */
  AudioMpeg = 'AUDIO_MPEG',
  /** audio/ogg mime type. */
  AudioOgg = 'AUDIO_OGG',
  /** audio/wav mime type. */
  AudioWav = 'AUDIO_WAV',
  /** audio/x-matroska mime type. */
  AudioXMatroska = 'AUDIO_X_MATROSKA',
  /** audio/x-ms-wax mime type. */
  AudioXMsWax = 'AUDIO_X_MS_WAX',
  /** audio/x-ms-wma mime type. */
  AudioXMsWma = 'AUDIO_X_MS_WMA',
  /** audio/x-realaudio mime type. */
  AudioXRealaudio = 'AUDIO_X_REALAUDIO',
  /** image/avif mime type. */
  ImageAvif = 'IMAGE_AVIF',
  /** image/bmp mime type. */
  ImageBmp = 'IMAGE_BMP',
  /** image/gif mime type. */
  ImageGif = 'IMAGE_GIF',
  /** image/heic mime type. */
  ImageHeic = 'IMAGE_HEIC',
  /** image/jpeg mime type. */
  ImageJpeg = 'IMAGE_JPEG',
  /** image/png mime type. */
  ImagePng = 'IMAGE_PNG',
  /** image/svg+xml mime type. */
  ImageSvgXml = 'IMAGE_SVG_XML',
  /** image/tiff mime type. */
  ImageTiff = 'IMAGE_TIFF',
  /** image/webp mime type. */
  ImageWebp = 'IMAGE_WEBP',
  /** image/x-icon mime type. */
  ImageXIcon = 'IMAGE_X_ICON',
  /** text/calendar mime type. */
  TextCalendar = 'TEXT_CALENDAR',
  /** text/css mime type. */
  TextCss = 'TEXT_CSS',
  /** text/csv mime type. */
  TextCsv = 'TEXT_CSV',
  /** text/plain mime type. */
  TextPlain = 'TEXT_PLAIN',
  /** text/richtext mime type. */
  TextRichtext = 'TEXT_RICHTEXT',
  /** text/tab-separated-values mime type. */
  TextTabSeparatedValues = 'TEXT_TAB_SEPARATED_VALUES',
  /** text/vtt mime type. */
  TextVtt = 'TEXT_VTT',
  /** video/3gpp mime type. */
  Video_3Gpp = 'VIDEO_3GPP',
  /** video/3gpp2 mime type. */
  Video_3Gpp2 = 'VIDEO_3GPP2',
  /** video/avi mime type. */
  VideoAvi = 'VIDEO_AVI',
  /** video/divx mime type. */
  VideoDivx = 'VIDEO_DIVX',
  /** video/mp4 mime type. */
  VideoMp4 = 'VIDEO_MP4',
  /** video/mpeg mime type. */
  VideoMpeg = 'VIDEO_MPEG',
  /** video/ogg mime type. */
  VideoOgg = 'VIDEO_OGG',
  /** video/quicktime mime type. */
  VideoQuicktime = 'VIDEO_QUICKTIME',
  /** video/webm mime type. */
  VideoWebm = 'VIDEO_WEBM',
  /** video/x-flv mime type. */
  VideoXFlv = 'VIDEO_X_FLV',
  /** video/x-matroska mime type. */
  VideoXMatroska = 'VIDEO_X_MATROSKA',
  /** video/x-ms-asf mime type. */
  VideoXMsAsf = 'VIDEO_X_MS_ASF',
  /** video/x-ms-wm mime type. */
  VideoXMsWm = 'VIDEO_X_MS_WM',
  /** video/x-ms-wmv mime type. */
  VideoXMsWmv = 'VIDEO_X_MS_WMV',
  /** video/x-ms-wmx mime type. */
  VideoXMsWmx = 'VIDEO_X_MS_WMX',
}

/** An object with an ID */
export type Node = {
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
}

/** A node that can have an author assigned to it */
export type NodeWithAuthor = {
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']['output']>
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']['output']>
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
}

/** Connection between the NodeWithAuthor type and the User type */
export type NodeWithAuthorToUserConnectionEdge = Edge &
  OneToOneConnection &
  UserConnectionEdge & {
    __typename?: 'NodeWithAuthorToUserConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: User
  }

/** A node that can have comments associated with it */
export type NodeWithComments = {
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']['output']>
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']['output']>
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
}

/** A node that supports the content editor */
export type NodeWithContentEditor = {
  /** The content of the post. */
  content?: Maybe<Scalars['String']['output']>
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
}

/** A node that supports the content editor */
export type NodeWithContentEditorContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** A node that can have an excerpt */
export type NodeWithExcerpt = {
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']['output']>
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
}

/** A node that can have an excerpt */
export type NodeWithExcerptExcerptArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** A node that can have a featured image set */
export type NodeWithFeaturedImage = {
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']['output']>
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
}

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
export type NodeWithFeaturedImageToMediaItemConnectionEdge = Edge &
  MediaItemConnectionEdge &
  OneToOneConnection & {
    __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: MediaItem
  }

/** A node that can have page attributes */
export type NodeWithPageAttributes = {
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']['output']>
}

/** A node that can have revisions */
export type NodeWithRevisions = {
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']['output']>
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>
}

/** Connection between the NodeWithRevisions type and the ContentNode type */
export type NodeWithRevisionsToContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'NodeWithRevisionsToContentNodeConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: ContentNode
  }

/** A node that can have a template associated with it */
export type NodeWithTemplate = {
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
  /** The template assigned to the node */
  template?: Maybe<ContentTemplate>
}

/** A node that NodeWith a title */
export type NodeWithTitle = {
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
  /** The Yoast SEO data of the ContentNode */
  seo?: Maybe<PostTypeSeo>
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']['output']>
}

/** A node that NodeWith a title */
export type NodeWithTitleTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** A node that can have trackbacks and pingbacks */
export type NodeWithTrackbacks = {
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']['output']>
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']['output']>>>
}

/** A singular connection from one Node to another, with support for relational data on the &quot;edge&quot; of the connection. */
export type OneToOneConnection = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected node */
  node: Node
}

/** The cardinality of the connection order */
export enum OrderEnum {
  /** Sort the query result set in an ascending order */
  Asc = 'ASC',
  /** Sort the query result set in a descending order */
  Desc = 'DESC',
}

/** The page type */
export type Page = ContentNode &
  DatabaseIdentifier &
  HierarchicalContentNode &
  HierarchicalNode &
  MenuItemLinkable &
  Node &
  NodeWithAuthor &
  NodeWithComments &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithPageAttributes &
  NodeWithRevisions &
  NodeWithTemplate &
  NodeWithTitle &
  Previewable &
  UniformResourceIdentifiable & {
    __typename?: 'Page'
    /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
    ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>
    /** Connection between the NodeWithAuthor type and the User type */
    author?: Maybe<NodeWithAuthorToUserConnectionEdge>
    /** The database identifier of the author of the node */
    authorDatabaseId?: Maybe<Scalars['Int']['output']>
    /** The globally unique identifier of the author of the node */
    authorId?: Maybe<Scalars['ID']['output']>
    /** Connection between the HierarchicalContentNode type and the ContentNode type */
    children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>
    /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
    commentCount?: Maybe<Scalars['Int']['output']>
    /** Whether the comments are open or closed for this particular post. */
    commentStatus?: Maybe<Scalars['String']['output']>
    /** Connection between the Page type and the Comment type */
    comments?: Maybe<PageToCommentConnection>
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']['output']
    /** Post publishing date. */
    date?: Maybe<Scalars['String']['output']>
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']['output']>
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']['output']>
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId?: Maybe<Scalars['ID']['output']>
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the page object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether this page is set to the static front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether this page is set to the blog posts page. */
    isPostsPage: Scalars['Boolean']['output']
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']['output']>
    /** Whether this page is set to the privacy page. */
    isPrivacyPage: Scalars['Boolean']['output']
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** True if the node is a revision of another node */
    isRevision?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>
    /** The permalink of the post */
    link?: Maybe<Scalars['String']['output']>
    /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
    menuOrder?: Maybe<Scalars['Int']['output']>
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']['output']>
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']['output']>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    pageId: Scalars['Int']['output']
    /** The parent of the node. The parent object can be of various types */
    parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>
    /** Database id of the parent node */
    parentDatabaseId?: Maybe<Scalars['Int']['output']>
    /** The globally unique identifier of the parent node. */
    parentId?: Maybe<Scalars['ID']['output']>
    /** Connection between the Page type and the page type */
    preview?: Maybe<PageToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
    revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>
    /** Connection between the Page type and the page type */
    revisions?: Maybe<PageToRevisionConnection>
    /** The Yoast SEO data of the ContentNode */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to a node of content */
    template?: Maybe<ContentTemplate>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The page type */
export type PageAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>
}

/** The page type */
export type PageChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>
}

/** The page type */
export type PageCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PageToCommentConnectionWhereArgs>
}

/** The page type */
export type PageContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The page type */
export type PageEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The page type */
export type PageEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The page type */
export type PageRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PageToRevisionConnectionWhereArgs>
}

/** The page type */
export type PageTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** Connection to page Nodes */
export type PageConnection = {
  /** A list of edges (relational context) between RootQuery and connected page Nodes */
  edges: Array<PageConnectionEdge>
  /** A list of connected page Nodes */
  nodes: Array<Page>
  /** Information about pagination in a connection. */
  pageInfo: PageConnectionPageInfo
}

/** Edge between a Node and a connected page */
export type PageConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected page Node */
  node: Page
}

/** Page Info on the connected PageConnectionEdge */
export type PageConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PageIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** Connection between the Page type and the Comment type */
export type PageToCommentConnection = CommentConnection &
  Connection & {
    __typename?: 'PageToCommentConnection'
    /** Edges for the PageToCommentConnection connection */
    edges: Array<PageToCommentConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Comment>
    /** Information about pagination in a connection. */
    pageInfo: PageToCommentConnectionPageInfo
  }

/** An edge in a connection */
export type PageToCommentConnectionEdge = CommentConnectionEdge &
  Edge & {
    __typename?: 'PageToCommentConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Comment
  }

/** Page Info on the &quot;PageToCommentConnection&quot; */
export type PageToCommentConnectionPageInfo = CommentConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'PageToCommentConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the PageToCommentConnection connection */
export type PageToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']['input']>
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']['input']>
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']['input']>
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']['input']>
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']['input']>
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']['input']>
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']['input']>
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']['input']>
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']['input']>
}

/** Connection between the Page type and the page type */
export type PageToPreviewConnectionEdge = Edge &
  OneToOneConnection &
  PageConnectionEdge & {
    __typename?: 'PageToPreviewConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Page
  }

/** Connection between the Page type and the page type */
export type PageToRevisionConnection = Connection &
  PageConnection & {
    __typename?: 'PageToRevisionConnection'
    /** Edges for the PageToRevisionConnection connection */
    edges: Array<PageToRevisionConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Page>
    /** Information about pagination in a connection. */
    pageInfo: PageToRevisionConnectionPageInfo
  }

/** An edge in a connection */
export type PageToRevisionConnectionEdge = Edge &
  PageConnectionEdge & {
    __typename?: 'PageToRevisionConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Page
  }

/** Page Info on the &quot;PageToRevisionConnection&quot; */
export type PageToRevisionConnectionPageInfo = PageConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'PageToRevisionConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the PageToRevisionConnection connection */
export type PageToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** An plugin object */
export type Plugin = Node & {
  __typename?: 'Plugin'
  /** Name of the plugin author(s), may also be a company name. */
  author?: Maybe<Scalars['String']['output']>
  /** URI for the related author(s)/company website. */
  authorUri?: Maybe<Scalars['String']['output']>
  /** Description of the plugin. */
  description?: Maybe<Scalars['String']['output']>
  /** The globally unique identifier of the plugin object. */
  id: Scalars['ID']['output']
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']['output']>
  /** Display name of the plugin. */
  name?: Maybe<Scalars['String']['output']>
  /** Plugin path. */
  path?: Maybe<Scalars['String']['output']>
  /** URI for the plugin website. This is useful for directing users for support requests etc. */
  pluginUri?: Maybe<Scalars['String']['output']>
  /** Current version of the plugin. */
  version?: Maybe<Scalars['String']['output']>
}

/** Connection to Plugin Nodes */
export type PluginConnection = {
  /** A list of edges (relational context) between RootQuery and connected Plugin Nodes */
  edges: Array<PluginConnectionEdge>
  /** A list of connected Plugin Nodes */
  nodes: Array<Plugin>
  /** Information about pagination in a connection. */
  pageInfo: PluginConnectionPageInfo
}

/** Edge between a Node and a connected Plugin */
export type PluginConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected Plugin Node */
  node: Plugin
}

/** Page Info on the connected PluginConnectionEdge */
export type PluginConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** The status of the WordPress plugin. */
export enum PluginStatusEnum {
  /** The plugin is currently active. */
  Active = 'ACTIVE',
  /** The plugin is a drop-in plugin. */
  DropIn = 'DROP_IN',
  /** The plugin is currently inactive. */
  Inactive = 'INACTIVE',
  /** The plugin is a must-use plugin. */
  MustUse = 'MUST_USE',
  /** The plugin is technically active but was paused while loading. */
  Paused = 'PAUSED',
  /** The plugin was active recently. */
  RecentlyActive = 'RECENTLY_ACTIVE',
  /** The plugin has an upgrade available. */
  Upgrade = 'UPGRADE',
}

/** The post type */
export type Post = ContentNode &
  DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  NodeWithAuthor &
  NodeWithComments &
  NodeWithContentEditor &
  NodeWithExcerpt &
  NodeWithFeaturedImage &
  NodeWithRevisions &
  NodeWithTemplate &
  NodeWithTitle &
  NodeWithTrackbacks &
  Previewable &
  UniformResourceIdentifiable & {
    __typename?: 'Post'
    /** Connection between the NodeWithAuthor type and the User type */
    author?: Maybe<NodeWithAuthorToUserConnectionEdge>
    /** The database identifier of the author of the node */
    authorDatabaseId?: Maybe<Scalars['Int']['output']>
    /** The globally unique identifier of the author of the node */
    authorId?: Maybe<Scalars['ID']['output']>
    /** Connection between the Post type and the category type */
    categories?: Maybe<PostToCategoryConnection>
    /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
    commentCount?: Maybe<Scalars['Int']['output']>
    /** Whether the comments are open or closed for this particular post. */
    commentStatus?: Maybe<Scalars['String']['output']>
    /** Connection between the Post type and the Comment type */
    comments?: Maybe<PostToCommentConnection>
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']['output']
    /** Post publishing date. */
    date?: Maybe<Scalars['String']['output']>
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']['output']>
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']['output']>
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>
    /** The excerpt of the post. */
    excerpt?: Maybe<Scalars['String']['output']>
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId?: Maybe<Scalars['ID']['output']>
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the post object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']['output']>
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** True if the node is a revision of another node */
    isRevision?: Maybe<Scalars['Boolean']['output']>
    /** Whether this page is sticky */
    isSticky: Scalars['Boolean']['output']
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>
    /** The permalink of the post */
    link?: Maybe<Scalars['String']['output']>
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']['output']>
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']['output']>
    /** Whether the pings are open or closed for this particular post. */
    pingStatus?: Maybe<Scalars['String']['output']>
    /** URLs that have been pinged. */
    pinged?: Maybe<Array<Maybe<Scalars['String']['output']>>>
    /** Connection between the Post type and the postFormat type */
    postFormats?: Maybe<PostToPostFormatConnection>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    postId: Scalars['Int']['output']
    /** Connection between the Post type and the post type */
    preview?: Maybe<PostToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
    revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>
    /** Connection between the Post type and the post type */
    revisions?: Maybe<PostToRevisionConnection>
    /** The Yoast SEO data of the ContentNode */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** Connection between the Post type and the tag type */
    tags?: Maybe<PostToTagConnection>
    /** The template assigned to the node */
    template?: Maybe<ContentTemplate>
    /** Connection between the Post type and the TermNode type */
    terms?: Maybe<PostToTermNodeConnection>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** URLs queued to be pinged. */
    toPing?: Maybe<Array<Maybe<Scalars['String']['output']>>>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The post type */
export type PostCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PostToCategoryConnectionWhereArgs>
}

/** The post type */
export type PostCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PostToCommentConnectionWhereArgs>
}

/** The post type */
export type PostContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The post type */
export type PostEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The post type */
export type PostEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The post type */
export type PostExcerptArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The post type */
export type PostPostFormatsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PostToPostFormatConnectionWhereArgs>
}

/** The post type */
export type PostRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PostToRevisionConnectionWhereArgs>
}

/** The post type */
export type PostTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PostToTagConnectionWhereArgs>
}

/** The post type */
export type PostTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PostToTermNodeConnectionWhereArgs>
}

/** The post type */
export type PostTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** Set relationships between the post to categories */
export type PostCategoriesInput = {
  /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']['input']>
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<PostCategoriesNodeInput>>>
}

/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostCategoriesNodeInput = {
  /** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']['input']>
  /** The ID of the category. If present, this will be used to connect to the post. If no existing category exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']['input']>
  /** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']['input']>
  /** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** Connection to post Nodes */
export type PostConnection = {
  /** A list of edges (relational context) between RootQuery and connected post Nodes */
  edges: Array<PostConnectionEdge>
  /** A list of connected post Nodes */
  nodes: Array<Post>
  /** Information about pagination in a connection. */
  pageInfo: PostConnectionPageInfo
}

/** Edge between a Node and a connected post */
export type PostConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected post Node */
  node: Post
}

/** Page Info on the connected PostConnectionEdge */
export type PostConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** The postFormat type */
export type PostFormat = DatabaseIdentifier &
  Node &
  TermNode &
  UniformResourceIdentifiable & {
    __typename?: 'PostFormat'
    /** Connection between the PostFormat type and the ContentNode type */
    contentNodes?: Maybe<PostFormatToContentNodeConnection>
    /** The number of objects connected to the object */
    count?: Maybe<Scalars['Int']['output']>
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']['output']
    /** The description of the object */
    description?: Maybe<Scalars['String']['output']>
    /** Connection between the TermNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>
    /** Connection between the TermNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>
    /** The globally unique ID for the object */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** The link to the term */
    link?: Maybe<Scalars['String']['output']>
    /** The human friendly name of the object. */
    name?: Maybe<Scalars['String']['output']>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of databaseId
     */
    postFormatId?: Maybe<Scalars['Int']['output']>
    /** Connection between the PostFormat type and the post type */
    posts?: Maybe<PostFormatToPostConnection>
    /** The Yoast SEO data of the Форматы taxonomy. */
    seo?: Maybe<TaxonomySeo>
    /** An alphanumeric identifier for the object unique to its type. */
    slug?: Maybe<Scalars['String']['output']>
    /** Connection between the PostFormat type and the Taxonomy type */
    taxonomy?: Maybe<PostFormatToTaxonomyConnectionEdge>
    /** The name of the taxonomy that the object is associated with */
    taxonomyName?: Maybe<Scalars['String']['output']>
    /** The ID of the term group that this term object belongs to */
    termGroupId?: Maybe<Scalars['Int']['output']>
    /** The taxonomy ID that the object is associated with */
    termTaxonomyId?: Maybe<Scalars['Int']['output']>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The postFormat type */
export type PostFormatContentNodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PostFormatToContentNodeConnectionWhereArgs>
}

/** The postFormat type */
export type PostFormatEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The postFormat type */
export type PostFormatEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The postFormat type */
export type PostFormatPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PostFormatToPostConnectionWhereArgs>
}

/** Connection to postFormat Nodes */
export type PostFormatConnection = {
  /** A list of edges (relational context) between RootQuery and connected postFormat Nodes */
  edges: Array<PostFormatConnectionEdge>
  /** A list of connected postFormat Nodes */
  nodes: Array<PostFormat>
  /** Information about pagination in a connection. */
  pageInfo: PostFormatConnectionPageInfo
}

/** Edge between a Node and a connected postFormat */
export type PostFormatConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected postFormat Node */
  node: PostFormat
}

/** Page Info on the connected PostFormatConnectionEdge */
export type PostFormatConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostFormatIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
}

/** Connection between the PostFormat type and the ContentNode type */
export type PostFormatToContentNodeConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'PostFormatToContentNodeConnection'
    /** Edges for the PostFormatToContentNodeConnection connection */
    edges: Array<PostFormatToContentNodeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>
    /** Information about pagination in a connection. */
    pageInfo: PostFormatToContentNodeConnectionPageInfo
  }

/** An edge in a connection */
export type PostFormatToContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'PostFormatToContentNodeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ContentNode
  }

/** Page Info on the &quot;PostFormatToContentNodeConnection&quot; */
export type PostFormatToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'PostFormatToContentNodeConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the PostFormatToContentNodeConnection connection */
export type PostFormatToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfPostFormatEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the PostFormat type and the post type */
export type PostFormatToPostConnection = Connection &
  PostConnection & {
    __typename?: 'PostFormatToPostConnection'
    /** Edges for the PostFormatToPostConnection connection */
    edges: Array<PostFormatToPostConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Post>
    /** Information about pagination in a connection. */
    pageInfo: PostFormatToPostConnectionPageInfo
  }

/** An edge in a connection */
export type PostFormatToPostConnectionEdge = Edge &
  PostConnectionEdge & {
    __typename?: 'PostFormatToPostConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Post
  }

/** Page Info on the &quot;PostFormatToPostConnection&quot; */
export type PostFormatToPostConnectionPageInfo = PageInfo &
  PostConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'PostFormatToPostConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the PostFormatToPostConnection connection */
export type PostFormatToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']['input']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']['input']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']['input']>
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']['input']>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the PostFormat type and the Taxonomy type */
export type PostFormatToTaxonomyConnectionEdge = Edge &
  OneToOneConnection &
  TaxonomyConnectionEdge & {
    __typename?: 'PostFormatToTaxonomyConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Taxonomy
  }

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** The format of post field data. */
export enum PostObjectFieldFormatEnum {
  /** Provide the field value directly from database. Null on unauthenticated requests. */
  Raw = 'RAW',
  /** Provide the field value as rendered by WordPress. Default. */
  Rendered = 'RENDERED',
}

/** The column to use when filtering by date */
export enum PostObjectsConnectionDateColumnEnum {
  /** The date the comment was created in local time. */
  Date = 'DATE',
  /** The most recent modification date of the comment. */
  Modified = 'MODIFIED',
}

/** Field to order the connection by */
export enum PostObjectsConnectionOrderbyEnum {
  /** Order by author */
  Author = 'AUTHOR',
  /** Order by the number of comments it has acquired */
  CommentCount = 'COMMENT_COUNT',
  /** Order by publish date */
  Date = 'DATE',
  /** Preserve the ID order given in the IN array */
  In = 'IN',
  /** Order by the menu order value */
  MenuOrder = 'MENU_ORDER',
  /** Order by last modified date */
  Modified = 'MODIFIED',
  /** Preserve slug order given in the NAME_IN array */
  NameIn = 'NAME_IN',
  /** Order by parent ID */
  Parent = 'PARENT',
  /** Order by slug */
  Slug = 'SLUG',
  /** Order by title */
  Title = 'TITLE',
}

/** Options for ordering the connection */
export type PostObjectsConnectionOrderbyInput = {
  /** The field to order the connection by */
  field: PostObjectsConnectionOrderbyEnum
  /** Possible directions in which to order a list of items */
  order: OrderEnum
}

/** Set relationships between the post to postFormats */
export type PostPostFormatsInput = {
  /** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']['input']>
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<PostPostFormatsNodeInput>>>
}

/** List of postFormats to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostPostFormatsNodeInput = {
  /** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']['input']>
  /** The ID of the postFormat. If present, this will be used to connect to the post. If no existing postFormat exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']['input']>
  /** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']['input']>
  /** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** The status of the object. */
export enum PostStatusEnum {
  /** Objects with the acf-disabled status */
  AcfDisabled = 'ACF_DISABLED',
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the draft status */
  Draft = 'DRAFT',
  /** Objects with the future status */
  Future = 'FUTURE',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the pending status */
  Pending = 'PENDING',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the publish status */
  Publish = 'PUBLISH',
  /** Objects with the request-completed status */
  RequestCompleted = 'REQUEST_COMPLETED',
  /** Objects with the request-confirmed status */
  RequestConfirmed = 'REQUEST_CONFIRMED',
  /** Objects with the request-failed status */
  RequestFailed = 'REQUEST_FAILED',
  /** Objects with the request-pending status */
  RequestPending = 'REQUEST_PENDING',
  /** Objects with the trash status */
  Trash = 'TRASH',
}

/** Set relationships between the post to tags */
export type PostTagsInput = {
  /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']['input']>
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<PostTagsNodeInput>>>
}

/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostTagsNodeInput = {
  /** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']['input']>
  /** The ID of the tag. If present, this will be used to connect to the post. If no existing tag exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']['input']>
  /** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']['input']>
  /** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the Post type and the category type */
export type PostToCategoryConnection = CategoryConnection &
  Connection & {
    __typename?: 'PostToCategoryConnection'
    /** Edges for the PostToCategoryConnection connection */
    edges: Array<PostToCategoryConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Category>
    /** Information about pagination in a connection. */
    pageInfo: PostToCategoryConnectionPageInfo
  }

/** An edge in a connection */
export type PostToCategoryConnectionEdge = CategoryConnectionEdge &
  Edge & {
    __typename?: 'PostToCategoryConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The Yoast SEO Primary category */
    isPrimary?: Maybe<Scalars['Boolean']['output']>
    /** The item at the end of the edge */
    node: Category
  }

/** Page Info on the &quot;PostToCategoryConnection&quot; */
export type PostToCategoryConnectionPageInfo = CategoryConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'PostToCategoryConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the PostToCategoryConnection connection */
export type PostToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the Post type and the Comment type */
export type PostToCommentConnection = CommentConnection &
  Connection & {
    __typename?: 'PostToCommentConnection'
    /** Edges for the PostToCommentConnection connection */
    edges: Array<PostToCommentConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Comment>
    /** Information about pagination in a connection. */
    pageInfo: PostToCommentConnectionPageInfo
  }

/** An edge in a connection */
export type PostToCommentConnectionEdge = CommentConnectionEdge &
  Edge & {
    __typename?: 'PostToCommentConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Comment
  }

/** Page Info on the &quot;PostToCommentConnection&quot; */
export type PostToCommentConnectionPageInfo = CommentConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'PostToCommentConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the PostToCommentConnection connection */
export type PostToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']['input']>
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']['input']>
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']['input']>
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']['input']>
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']['input']>
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']['input']>
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']['input']>
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']['input']>
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']['input']>
}

/** Connection between the Post type and the postFormat type */
export type PostToPostFormatConnection = Connection &
  PostFormatConnection & {
    __typename?: 'PostToPostFormatConnection'
    /** Edges for the PostToPostFormatConnection connection */
    edges: Array<PostToPostFormatConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<PostFormat>
    /** Information about pagination in a connection. */
    pageInfo: PostToPostFormatConnectionPageInfo
  }

/** An edge in a connection */
export type PostToPostFormatConnectionEdge = Edge &
  PostFormatConnectionEdge & {
    __typename?: 'PostToPostFormatConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The Yoast SEO Primary post_format */
    isPrimary?: Maybe<Scalars['Boolean']['output']>
    /** The item at the end of the edge */
    node: PostFormat
  }

/** Page Info on the &quot;PostToPostFormatConnection&quot; */
export type PostToPostFormatConnectionPageInfo = PageInfo &
  PostFormatConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'PostToPostFormatConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the PostToPostFormatConnection connection */
export type PostToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the Post type and the post type */
export type PostToPreviewConnectionEdge = Edge &
  OneToOneConnection &
  PostConnectionEdge & {
    __typename?: 'PostToPreviewConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Post
  }

/** Connection between the Post type and the post type */
export type PostToRevisionConnection = Connection &
  PostConnection & {
    __typename?: 'PostToRevisionConnection'
    /** Edges for the PostToRevisionConnection connection */
    edges: Array<PostToRevisionConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Post>
    /** Information about pagination in a connection. */
    pageInfo: PostToRevisionConnectionPageInfo
  }

/** An edge in a connection */
export type PostToRevisionConnectionEdge = Edge &
  PostConnectionEdge & {
    __typename?: 'PostToRevisionConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Post
  }

/** Page Info on the &quot;PostToRevisionConnection&quot; */
export type PostToRevisionConnectionPageInfo = PageInfo &
  PostConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'PostToRevisionConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the PostToRevisionConnection connection */
export type PostToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']['input']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']['input']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']['input']>
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']['input']>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the Post type and the tag type */
export type PostToTagConnection = Connection &
  TagConnection & {
    __typename?: 'PostToTagConnection'
    /** Edges for the PostToTagConnection connection */
    edges: Array<PostToTagConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Tag>
    /** Information about pagination in a connection. */
    pageInfo: PostToTagConnectionPageInfo
  }

/** An edge in a connection */
export type PostToTagConnectionEdge = Edge &
  TagConnectionEdge & {
    __typename?: 'PostToTagConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The Yoast SEO Primary post_tag */
    isPrimary?: Maybe<Scalars['Boolean']['output']>
    /** The item at the end of the edge */
    node: Tag
  }

/** Page Info on the &quot;PostToTagConnection&quot; */
export type PostToTagConnectionPageInfo = PageInfo &
  TagConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'PostToTagConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the PostToTagConnection connection */
export type PostToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the Post type and the TermNode type */
export type PostToTermNodeConnection = Connection &
  TermNodeConnection & {
    __typename?: 'PostToTermNodeConnection'
    /** Edges for the PostToTermNodeConnection connection */
    edges: Array<PostToTermNodeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<TermNode>
    /** Information about pagination in a connection. */
    pageInfo: PostToTermNodeConnectionPageInfo
  }

/** An edge in a connection */
export type PostToTermNodeConnectionEdge = Edge &
  TermNodeConnectionEdge & {
    __typename?: 'PostToTermNodeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: TermNode
  }

/** Page Info on the &quot;PostToTermNodeConnection&quot; */
export type PostToTermNodeConnectionPageInfo = PageInfo &
  TermNodeConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'PostToTermNodeConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the PostToTermNodeConnection connection */
export type PostToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Details for labels of the PostType */
export type PostTypeLabelDetails = {
  __typename?: 'PostTypeLabelDetails'
  /** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
  addNew?: Maybe<Scalars['String']['output']>
  /** Label for adding a new singular item. */
  addNewItem?: Maybe<Scalars['String']['output']>
  /** Label to signify all items in a submenu link. */
  allItems?: Maybe<Scalars['String']['output']>
  /** Label for archives in nav menus */
  archives?: Maybe<Scalars['String']['output']>
  /** Label for the attributes meta box. */
  attributes?: Maybe<Scalars['String']['output']>
  /** Label for editing a singular item. */
  editItem?: Maybe<Scalars['String']['output']>
  /** Label for the Featured Image meta box title. */
  featuredImage?: Maybe<Scalars['String']['output']>
  /** Label for the table views hidden heading. */
  filterItemsList?: Maybe<Scalars['String']['output']>
  /** Label for the media frame button. */
  insertIntoItem?: Maybe<Scalars['String']['output']>
  /** Label for the table hidden heading. */
  itemsList?: Maybe<Scalars['String']['output']>
  /** Label for the table pagination hidden heading. */
  itemsListNavigation?: Maybe<Scalars['String']['output']>
  /** Label for the menu name. */
  menuName?: Maybe<Scalars['String']['output']>
  /** General name for the post type, usually plural. */
  name?: Maybe<Scalars['String']['output']>
  /** Label for the new item page title. */
  newItem?: Maybe<Scalars['String']['output']>
  /** Label used when no items are found. */
  notFound?: Maybe<Scalars['String']['output']>
  /** Label used when no items are in the trash. */
  notFoundInTrash?: Maybe<Scalars['String']['output']>
  /** Label used to prefix parents of hierarchical items. */
  parentItemColon?: Maybe<Scalars['String']['output']>
  /** Label for removing the featured image. */
  removeFeaturedImage?: Maybe<Scalars['String']['output']>
  /** Label for searching plural items. */
  searchItems?: Maybe<Scalars['String']['output']>
  /** Label for setting the featured image. */
  setFeaturedImage?: Maybe<Scalars['String']['output']>
  /** Name for one object of this post type. */
  singularName?: Maybe<Scalars['String']['output']>
  /** Label for the media frame filter. */
  uploadedToThisItem?: Maybe<Scalars['String']['output']>
  /** Label in the media frame for using a featured image. */
  useFeaturedImage?: Maybe<Scalars['String']['output']>
  /** Label for viewing a singular item. */
  viewItem?: Maybe<Scalars['String']['output']>
  /** Label for viewing post type archives. */
  viewItems?: Maybe<Scalars['String']['output']>
}

export type PostTypeSeo = {
  __typename?: 'PostTypeSEO'
  breadcrumbs?: Maybe<Array<Maybe<SeoPostTypeBreadcrumbs>>>
  canonical?: Maybe<Scalars['String']['output']>
  cornerstone?: Maybe<Scalars['Boolean']['output']>
  focuskw?: Maybe<Scalars['String']['output']>
  fullHead?: Maybe<Scalars['String']['output']>
  metaDesc?: Maybe<Scalars['String']['output']>
  metaKeywords?: Maybe<Scalars['String']['output']>
  metaRobotsNofollow?: Maybe<Scalars['String']['output']>
  metaRobotsNoindex?: Maybe<Scalars['String']['output']>
  opengraphAuthor?: Maybe<Scalars['String']['output']>
  opengraphDescription?: Maybe<Scalars['String']['output']>
  opengraphImage?: Maybe<MediaItem>
  opengraphModifiedTime?: Maybe<Scalars['String']['output']>
  opengraphPublishedTime?: Maybe<Scalars['String']['output']>
  opengraphPublisher?: Maybe<Scalars['String']['output']>
  opengraphSiteName?: Maybe<Scalars['String']['output']>
  opengraphTitle?: Maybe<Scalars['String']['output']>
  opengraphType?: Maybe<Scalars['String']['output']>
  opengraphUrl?: Maybe<Scalars['String']['output']>
  readingTime?: Maybe<Scalars['Float']['output']>
  schema?: Maybe<SeoPostTypeSchema>
  title?: Maybe<Scalars['String']['output']>
  twitterDescription?: Maybe<Scalars['String']['output']>
  twitterImage?: Maybe<MediaItem>
  twitterTitle?: Maybe<Scalars['String']['output']>
}

/** Nodes that can be seen in a preview (unpublished) state. */
export type Previewable = {
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']['output']>
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']['output']>
}

/** The &quot;PrivacyPolicy&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type PrivacyPolicy = AcfFieldGroup &
  AcfFieldGroupFields &
  PrivacyPolicy_Fields & {
    __typename?: 'PrivacyPolicy'
    /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;PrivacyPolicy&quot; Field Group */
    content?: Maybe<Array<Maybe<PrivacyPolicyContent>>>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;PrivacyPolicy&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** The &quot;PrivacyPolicyContent&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type PrivacyPolicyContent = AcfFieldGroup &
  AcfFieldGroupFields &
  PrivacyPolicyContent_Fields & {
    __typename?: 'PrivacyPolicyContent'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;PrivacyPolicyContent&quot; Field Group */
    description?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;PrivacyPolicyContent&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;PrivacyPolicyContent&quot; Field Group */
export type PrivacyPolicyContent_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;PrivacyPolicyContent&quot; Field Group */
  description?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;PrivacyPolicyContent&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;PrivacyPolicy&quot; Field Group */
export type PrivacyPolicy_Fields = {
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;PrivacyPolicy&quot; Field Group */
  content?: Maybe<Array<Maybe<PrivacyPolicyContent>>>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;PrivacyPolicy&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** The reading setting type */
export type ReadingSettings = {
  __typename?: 'ReadingSettings'
  /** ID страницы, на которой должны отображаться последние записи */
  pageForPosts?: Maybe<Scalars['Int']['output']>
  /** ID страницы, которая должна отображаться на главной странице */
  pageOnFront?: Maybe<Scalars['Int']['output']>
  /** Максимум страниц блога для показа. */
  postsPerPage?: Maybe<Scalars['Int']['output']>
  /** Что показать на главной странице */
  showOnFront?: Maybe<Scalars['String']['output']>
}

/** Input for the registerUser mutation. */
export type RegisterUserInput = {
  /** User's AOL IM account. */
  aim?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** A string containing content about the user. */
  description?: InputMaybe<Scalars['String']['input']>
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: InputMaybe<Scalars['String']['input']>
  /** A string containing the user's email address. */
  email?: InputMaybe<Scalars['String']['input']>
  /** 	The user's first name. */
  firstName?: InputMaybe<Scalars['String']['input']>
  /** User's Jabber account. */
  jabber?: InputMaybe<Scalars['String']['input']>
  /** The user's last name. */
  lastName?: InputMaybe<Scalars['String']['input']>
  /** User's locale. */
  locale?: InputMaybe<Scalars['String']['input']>
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: InputMaybe<Scalars['String']['input']>
  /** The user's nickname, defaults to the user's username. */
  nickname?: InputMaybe<Scalars['String']['input']>
  /** A string that contains the plain text password for the user. */
  password?: InputMaybe<Scalars['String']['input']>
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: InputMaybe<Scalars['String']['input']>
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: InputMaybe<Scalars['String']['input']>
  /** A string that contains the user's username. */
  username: Scalars['String']['input']
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: InputMaybe<Scalars['String']['input']>
  /** User's Yahoo IM account. */
  yim?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the registerUser mutation. */
export type RegisterUserPayload = {
  __typename?: 'RegisterUserPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The User object mutation type. */
  user?: Maybe<User>
}

/** The logical relation between each item in the array when there are more than one. */
export enum RelationEnum {
  /** The logical AND condition returns true if both operands are true, otherwise, it returns false. */
  And = 'AND',
  /** The logical OR condition returns false if both operands are false, otherwise, it returns true. */
  Or = 'OR',
}

/** Input for the resetUserPassword mutation. */
export type ResetUserPasswordInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Password reset key */
  key?: InputMaybe<Scalars['String']['input']>
  /** The user's login (username). */
  login?: InputMaybe<Scalars['String']['input']>
  /** The new password. */
  password?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the resetUserPassword mutation. */
export type ResetUserPasswordPayload = {
  __typename?: 'ResetUserPasswordPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The User object mutation type. */
  user?: Maybe<User>
}

/** Input for the restoreComment mutation. */
export type RestoreCommentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The ID of the comment to be restored */
  id: Scalars['ID']['input']
}

/** The payload for the restoreComment mutation. */
export type RestoreCommentPayload = {
  __typename?: 'RestoreCommentPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The restored comment object */
  comment?: Maybe<Comment>
  /** The ID of the restored comment */
  restoredId?: Maybe<Scalars['ID']['output']>
}

/** The root mutation */
export type RootMutation = {
  __typename?: 'RootMutation'
  /** The createCategory mutation */
  createCategory?: Maybe<CreateCategoryPayload>
  /** The createComment mutation */
  createComment?: Maybe<CreateCommentPayload>
  /** The createCourse mutation */
  createCourse?: Maybe<CreateCoursePayload>
  /** The createGeneralFragment mutation */
  createGeneralFragment?: Maybe<CreateGeneralFragmentPayload>
  /** The createIndividualCourse mutation */
  createIndividualCourse?: Maybe<CreateIndividualCoursePayload>
  /** The createMediaItem mutation */
  createMediaItem?: Maybe<CreateMediaItemPayload>
  /** The createPage mutation */
  createPage?: Maybe<CreatePagePayload>
  /** The createPost mutation */
  createPost?: Maybe<CreatePostPayload>
  /** The createPostFormat mutation */
  createPostFormat?: Maybe<CreatePostFormatPayload>
  /** The createTag mutation */
  createTag?: Maybe<CreateTagPayload>
  /** The createUser mutation */
  createUser?: Maybe<CreateUserPayload>
  /** The deleteCategory mutation */
  deleteCategory?: Maybe<DeleteCategoryPayload>
  /** The deleteComment mutation */
  deleteComment?: Maybe<DeleteCommentPayload>
  /** The deleteCourse mutation */
  deleteCourse?: Maybe<DeleteCoursePayload>
  /** The deleteGeneralFragment mutation */
  deleteGeneralFragment?: Maybe<DeleteGeneralFragmentPayload>
  /** The deleteIndividualCourse mutation */
  deleteIndividualCourse?: Maybe<DeleteIndividualCoursePayload>
  /** The deleteMediaItem mutation */
  deleteMediaItem?: Maybe<DeleteMediaItemPayload>
  /** The deletePage mutation */
  deletePage?: Maybe<DeletePagePayload>
  /** The deletePost mutation */
  deletePost?: Maybe<DeletePostPayload>
  /** The deletePostFormat mutation */
  deletePostFormat?: Maybe<DeletePostFormatPayload>
  /** The deleteTag mutation */
  deleteTag?: Maybe<DeleteTagPayload>
  /** The deleteUser mutation */
  deleteUser?: Maybe<DeleteUserPayload>
  /** Increase the count. */
  increaseCount?: Maybe<Scalars['Int']['output']>
  /** The registerUser mutation */
  registerUser?: Maybe<RegisterUserPayload>
  /** The resetUserPassword mutation */
  resetUserPassword?: Maybe<ResetUserPasswordPayload>
  /** The restoreComment mutation */
  restoreComment?: Maybe<RestoreCommentPayload>
  /** Send password reset email to user */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmailPayload>
  /** The submitForm mutation */
  submitForm?: Maybe<SubmitFormPayload>
  /** The updateCategory mutation */
  updateCategory?: Maybe<UpdateCategoryPayload>
  /** The updateComment mutation */
  updateComment?: Maybe<UpdateCommentPayload>
  /** The updateCourse mutation */
  updateCourse?: Maybe<UpdateCoursePayload>
  /** The updateGeneralFragment mutation */
  updateGeneralFragment?: Maybe<UpdateGeneralFragmentPayload>
  /** The updateIndividualCourse mutation */
  updateIndividualCourse?: Maybe<UpdateIndividualCoursePayload>
  /** The updateMediaItem mutation */
  updateMediaItem?: Maybe<UpdateMediaItemPayload>
  /** The updatePage mutation */
  updatePage?: Maybe<UpdatePagePayload>
  /** The updatePost mutation */
  updatePost?: Maybe<UpdatePostPayload>
  /** The updatePostFormat mutation */
  updatePostFormat?: Maybe<UpdatePostFormatPayload>
  /** The updateSettings mutation */
  updateSettings?: Maybe<UpdateSettingsPayload>
  /** The updateTag mutation */
  updateTag?: Maybe<UpdateTagPayload>
  /** The updateUser mutation */
  updateUser?: Maybe<UpdateUserPayload>
}

/** The root mutation */
export type RootMutationCreateCategoryArgs = {
  input: CreateCategoryInput
}

/** The root mutation */
export type RootMutationCreateCommentArgs = {
  input: CreateCommentInput
}

/** The root mutation */
export type RootMutationCreateCourseArgs = {
  input: CreateCourseInput
}

/** The root mutation */
export type RootMutationCreateGeneralFragmentArgs = {
  input: CreateGeneralFragmentInput
}

/** The root mutation */
export type RootMutationCreateIndividualCourseArgs = {
  input: CreateIndividualCourseInput
}

/** The root mutation */
export type RootMutationCreateMediaItemArgs = {
  input: CreateMediaItemInput
}

/** The root mutation */
export type RootMutationCreatePageArgs = {
  input: CreatePageInput
}

/** The root mutation */
export type RootMutationCreatePostArgs = {
  input: CreatePostInput
}

/** The root mutation */
export type RootMutationCreatePostFormatArgs = {
  input: CreatePostFormatInput
}

/** The root mutation */
export type RootMutationCreateTagArgs = {
  input: CreateTagInput
}

/** The root mutation */
export type RootMutationCreateUserArgs = {
  input: CreateUserInput
}

/** The root mutation */
export type RootMutationDeleteCategoryArgs = {
  input: DeleteCategoryInput
}

/** The root mutation */
export type RootMutationDeleteCommentArgs = {
  input: DeleteCommentInput
}

/** The root mutation */
export type RootMutationDeleteCourseArgs = {
  input: DeleteCourseInput
}

/** The root mutation */
export type RootMutationDeleteGeneralFragmentArgs = {
  input: DeleteGeneralFragmentInput
}

/** The root mutation */
export type RootMutationDeleteIndividualCourseArgs = {
  input: DeleteIndividualCourseInput
}

/** The root mutation */
export type RootMutationDeleteMediaItemArgs = {
  input: DeleteMediaItemInput
}

/** The root mutation */
export type RootMutationDeletePageArgs = {
  input: DeletePageInput
}

/** The root mutation */
export type RootMutationDeletePostArgs = {
  input: DeletePostInput
}

/** The root mutation */
export type RootMutationDeletePostFormatArgs = {
  input: DeletePostFormatInput
}

/** The root mutation */
export type RootMutationDeleteTagArgs = {
  input: DeleteTagInput
}

/** The root mutation */
export type RootMutationDeleteUserArgs = {
  input: DeleteUserInput
}

/** The root mutation */
export type RootMutationIncreaseCountArgs = {
  count?: InputMaybe<Scalars['Int']['input']>
}

/** The root mutation */
export type RootMutationRegisterUserArgs = {
  input: RegisterUserInput
}

/** The root mutation */
export type RootMutationResetUserPasswordArgs = {
  input: ResetUserPasswordInput
}

/** The root mutation */
export type RootMutationRestoreCommentArgs = {
  input: RestoreCommentInput
}

/** The root mutation */
export type RootMutationSendPasswordResetEmailArgs = {
  input: SendPasswordResetEmailInput
}

/** The root mutation */
export type RootMutationSubmitFormArgs = {
  input: SubmitFormInput
}

/** The root mutation */
export type RootMutationUpdateCategoryArgs = {
  input: UpdateCategoryInput
}

/** The root mutation */
export type RootMutationUpdateCommentArgs = {
  input: UpdateCommentInput
}

/** The root mutation */
export type RootMutationUpdateCourseArgs = {
  input: UpdateCourseInput
}

/** The root mutation */
export type RootMutationUpdateGeneralFragmentArgs = {
  input: UpdateGeneralFragmentInput
}

/** The root mutation */
export type RootMutationUpdateIndividualCourseArgs = {
  input: UpdateIndividualCourseInput
}

/** The root mutation */
export type RootMutationUpdateMediaItemArgs = {
  input: UpdateMediaItemInput
}

/** The root mutation */
export type RootMutationUpdatePageArgs = {
  input: UpdatePageInput
}

/** The root mutation */
export type RootMutationUpdatePostArgs = {
  input: UpdatePostInput
}

/** The root mutation */
export type RootMutationUpdatePostFormatArgs = {
  input: UpdatePostFormatInput
}

/** The root mutation */
export type RootMutationUpdateSettingsArgs = {
  input: UpdateSettingsInput
}

/** The root mutation */
export type RootMutationUpdateTagArgs = {
  input: UpdateTagInput
}

/** The root mutation */
export type RootMutationUpdateUserArgs = {
  input: UpdateUserInput
}

/** The root entry point into the Graph */
export type RootQuery = {
  __typename?: 'RootQuery'
  /** Entry point to get all settings for the site */
  allSettings?: Maybe<Settings>
  /** Connection between the RootQuery type and the category type */
  categories?: Maybe<RootQueryToCategoryConnection>
  /** A 0bject */
  category?: Maybe<Category>
  /** Returns a Comment */
  comment?: Maybe<Comment>
  /** Connection between the RootQuery type and the Comment type */
  comments?: Maybe<RootQueryToCommentConnection>
  /** A node used to manage content */
  contentNode?: Maybe<ContentNode>
  /** Connection between the RootQuery type and the ContentNode type */
  contentNodes?: Maybe<RootQueryToContentNodeConnection>
  /** Fetch a Content Type node by unique Identifier */
  contentType?: Maybe<ContentType>
  /** Connection between the RootQuery type and the ContentType type */
  contentTypes?: Maybe<RootQueryToContentTypeConnection>
  /** An object of the course Type.  */
  course?: Maybe<Course>
  /**
   * A course object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  courseBy?: Maybe<Course>
  /** Connection between the RootQuery type and the course type */
  courses?: Maybe<RootQueryToCourseConnection>
  /** Fields of the &#039;DiscussionSettings&#039; settings group */
  discussionSettings?: Maybe<DiscussionSettings>
  /** Ninja form object data. */
  form?: Maybe<Form>
  formField?: Maybe<FormField>
  /** Connection between the RootQuery type and the Form type */
  forms?: Maybe<RootQueryToFormConnection>
  /** An object of the generalFragment Type.  */
  generalFragment?: Maybe<GeneralFragment>
  /**
   * A generalFragment object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  generalFragmentBy?: Maybe<GeneralFragment>
  /** Connection between the RootQuery type and the generalFragment type */
  generalFragments?: Maybe<RootQueryToGeneralFragmentConnection>
  /** Fields of the &#039;GeneralSettings&#039; settings group */
  generalSettings?: Maybe<GeneralSettings>
  /** An object of the individualCourse Type.  */
  individualCourse?: Maybe<IndividualCourse>
  /**
   * A individualCourse object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  individualCourseBy?: Maybe<IndividualCourse>
  /** Connection between the RootQuery type and the individualCourse type */
  individualCourses?: Maybe<RootQueryToIndividualCourseConnection>
  /** An object of the mediaItem Type.  */
  mediaItem?: Maybe<MediaItem>
  /**
   * A mediaItem object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  mediaItemBy?: Maybe<MediaItem>
  /** Connection between the RootQuery type and the mediaItem type */
  mediaItems?: Maybe<RootQueryToMediaItemConnection>
  /** A WordPress navigation menu */
  menu?: Maybe<Menu>
  /** A WordPress navigation menu item */
  menuItem?: Maybe<MenuItem>
  /** Connection between the RootQuery type and the MenuItem type */
  menuItems?: Maybe<RootQueryToMenuItemConnection>
  /** Connection between the RootQuery type and the Menu type */
  menus?: Maybe<RootQueryToMenuConnection>
  /** Fetches an object given its ID */
  node?: Maybe<Node>
  /** Fetches an object given its Unique Resource Identifier */
  nodeByUri?: Maybe<UniformResourceIdentifiable>
  /** An object of the page Type.  */
  page?: Maybe<Page>
  /**
   * A page object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  pageBy?: Maybe<Page>
  /** Connection between the RootQuery type and the page type */
  pages?: Maybe<RootQueryToPageConnection>
  /** A WordPress plugin */
  plugin?: Maybe<Plugin>
  /** Connection between the RootQuery type and the Plugin type */
  plugins?: Maybe<RootQueryToPluginConnection>
  /** An object of the post Type.  */
  post?: Maybe<Post>
  /**
   * A post object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  postBy?: Maybe<Post>
  /** A 0bject */
  postFormat?: Maybe<PostFormat>
  /** Connection between the RootQuery type and the postFormat type */
  postFormats?: Maybe<RootQueryToPostFormatConnection>
  /** Connection between the RootQuery type and the post type */
  posts?: Maybe<RootQueryToPostConnection>
  /** Fields of the &#039;ReadingSettings&#039; settings group */
  readingSettings?: Maybe<ReadingSettings>
  /** Connection between the RootQuery type and the EnqueuedScript type */
  registeredScripts?: Maybe<RootQueryToEnqueuedScriptConnection>
  /** Connection between the RootQuery type and the EnqueuedStylesheet type */
  registeredStylesheets?: Maybe<RootQueryToEnqueuedStylesheetConnection>
  /** Connection between the RootQuery type and the ContentNode type */
  revisions?: Maybe<RootQueryToRevisionsConnection>
  /** Returns seo site data */
  seo?: Maybe<SeoConfig>
  /** A 0bject */
  tag?: Maybe<Tag>
  /** Connection between the RootQuery type and the tag type */
  tags?: Maybe<RootQueryToTagConnection>
  /** Connection between the RootQuery type and the Taxonomy type */
  taxonomies?: Maybe<RootQueryToTaxonomyConnection>
  /** Fetch a Taxonomy node by unique Identifier */
  taxonomy?: Maybe<Taxonomy>
  /** A node in a taxonomy used to group and relate content nodes */
  termNode?: Maybe<TermNode>
  /** Connection between the RootQuery type and the TermNode type */
  terms?: Maybe<RootQueryToTermNodeConnection>
  /** A Theme object */
  theme?: Maybe<Theme>
  /** Connection between the RootQuery type and the Theme type */
  themes?: Maybe<RootQueryToThemeConnection>
  /** Returns a user */
  user?: Maybe<User>
  /** Returns a user role */
  userRole?: Maybe<UserRole>
  /** Connection between the RootQuery type and the UserRole type */
  userRoles?: Maybe<RootQueryToUserRoleConnection>
  /** Connection between the RootQuery type and the User type */
  users?: Maybe<RootQueryToUserConnection>
  /** Returns the current user */
  viewer?: Maybe<User>
  /** Fields of the &#039;WritingSettings&#039; settings group */
  writingSettings?: Maybe<WritingSettings>
}

/** The root entry point into the Graph */
export type RootQueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToCategoryConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryCategoryArgs = {
  id: Scalars['ID']['input']
  idType?: InputMaybe<CategoryIdType>
}

/** The root entry point into the Graph */
export type RootQueryCommentArgs = {
  id: Scalars['ID']['input']
  idType?: InputMaybe<CommentNodeIdTypeEnum>
}

/** The root entry point into the Graph */
export type RootQueryCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToCommentConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryContentNodeArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  contentType?: InputMaybe<ContentTypeEnum>
  id: Scalars['ID']['input']
  idType?: InputMaybe<ContentNodeIdTypeEnum>
}

/** The root entry point into the Graph */
export type RootQueryContentNodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToContentNodeConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryContentTypeArgs = {
  id: Scalars['ID']['input']
  idType?: InputMaybe<ContentTypeIdTypeEnum>
}

/** The root entry point into the Graph */
export type RootQueryContentTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The root entry point into the Graph */
export type RootQueryCourseArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<CourseIdType>
}

/** The root entry point into the Graph */
export type RootQueryCourseByArgs = {
  courseId?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
}

/** The root entry point into the Graph */
export type RootQueryCoursesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToCourseConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryFormArgs = {
  id: Scalars['ID']['input']
  idType?: InputMaybe<FormIdTypeEnum>
}

/** The root entry point into the Graph */
export type RootQueryFormFieldArgs = {
  id: Scalars['ID']['input']
  idType?: InputMaybe<FormIdTypeEnum>
}

/** The root entry point into the Graph */
export type RootQueryFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The root entry point into the Graph */
export type RootQueryGeneralFragmentArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<GeneralFragmentIdType>
}

/** The root entry point into the Graph */
export type RootQueryGeneralFragmentByArgs = {
  generalFragmentId?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
}

/** The root entry point into the Graph */
export type RootQueryGeneralFragmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToGeneralFragmentConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryIndividualCourseArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<IndividualCourseIdType>
}

/** The root entry point into the Graph */
export type RootQueryIndividualCourseByArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  individualCourseId?: InputMaybe<Scalars['Int']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
}

/** The root entry point into the Graph */
export type RootQueryIndividualCoursesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToIndividualCourseConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryMediaItemArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<MediaItemIdType>
}

/** The root entry point into the Graph */
export type RootQueryMediaItemByArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  mediaItemId?: InputMaybe<Scalars['Int']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
}

/** The root entry point into the Graph */
export type RootQueryMediaItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToMediaItemConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryMenuArgs = {
  id: Scalars['ID']['input']
  idType?: InputMaybe<MenuNodeIdTypeEnum>
}

/** The root entry point into the Graph */
export type RootQueryMenuItemArgs = {
  id: Scalars['ID']['input']
  idType?: InputMaybe<MenuItemNodeIdTypeEnum>
}

/** The root entry point into the Graph */
export type RootQueryMenuItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToMenuItemConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryMenusArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToMenuConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryNodeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

/** The root entry point into the Graph */
export type RootQueryNodeByUriArgs = {
  uri: Scalars['String']['input']
}

/** The root entry point into the Graph */
export type RootQueryPageArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<PageIdType>
}

/** The root entry point into the Graph */
export type RootQueryPageByArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  pageId?: InputMaybe<Scalars['Int']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
}

/** The root entry point into the Graph */
export type RootQueryPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToPageConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryPluginArgs = {
  id: Scalars['ID']['input']
}

/** The root entry point into the Graph */
export type RootQueryPluginsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToPluginConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryPostArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<PostIdType>
}

/** The root entry point into the Graph */
export type RootQueryPostByArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  postId?: InputMaybe<Scalars['Int']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
}

/** The root entry point into the Graph */
export type RootQueryPostFormatArgs = {
  id: Scalars['ID']['input']
  idType?: InputMaybe<PostFormatIdType>
}

/** The root entry point into the Graph */
export type RootQueryPostFormatsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToPostFormatConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToPostConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryRegisteredScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The root entry point into the Graph */
export type RootQueryRegisteredStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The root entry point into the Graph */
export type RootQueryRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToRevisionsConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryTagArgs = {
  id: Scalars['ID']['input']
  idType?: InputMaybe<TagIdType>
}

/** The root entry point into the Graph */
export type RootQueryTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToTagConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryTaxonomiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The root entry point into the Graph */
export type RootQueryTaxonomyArgs = {
  id: Scalars['ID']['input']
  idType?: InputMaybe<TaxonomyIdTypeEnum>
}

/** The root entry point into the Graph */
export type RootQueryTermNodeArgs = {
  id: Scalars['ID']['input']
  idType?: InputMaybe<TermNodeIdTypeEnum>
  taxonomy?: InputMaybe<TaxonomyEnum>
}

/** The root entry point into the Graph */
export type RootQueryTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToTermNodeConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryThemeArgs = {
  id: Scalars['ID']['input']
}

/** The root entry point into the Graph */
export type RootQueryThemesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The root entry point into the Graph */
export type RootQueryUserArgs = {
  id: Scalars['ID']['input']
  idType?: InputMaybe<UserNodeIdTypeEnum>
}

/** The root entry point into the Graph */
export type RootQueryUserRoleArgs = {
  id: Scalars['ID']['input']
}

/** The root entry point into the Graph */
export type RootQueryUserRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The root entry point into the Graph */
export type RootQueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToUserConnectionWhereArgs>
}

/** Connection between the RootQuery type and the category type */
export type RootQueryToCategoryConnection = CategoryConnection &
  Connection & {
    __typename?: 'RootQueryToCategoryConnection'
    /** Edges for the RootQueryToCategoryConnection connection */
    edges: Array<RootQueryToCategoryConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Category>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToCategoryConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToCategoryConnectionEdge = CategoryConnectionEdge &
  Edge & {
    __typename?: 'RootQueryToCategoryConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Category
  }

/** Page Info on the &quot;RootQueryToCategoryConnection&quot; */
export type RootQueryToCategoryConnectionPageInfo = CategoryConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToCategoryConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the RootQueryToCategoryConnection connection */
export type RootQueryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the RootQuery type and the Comment type */
export type RootQueryToCommentConnection = CommentConnection &
  Connection & {
    __typename?: 'RootQueryToCommentConnection'
    /** Edges for the RootQueryToCommentConnection connection */
    edges: Array<RootQueryToCommentConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Comment>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToCommentConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToCommentConnectionEdge = CommentConnectionEdge &
  Edge & {
    __typename?: 'RootQueryToCommentConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Comment
  }

/** Page Info on the &quot;RootQueryToCommentConnection&quot; */
export type RootQueryToCommentConnectionPageInfo = CommentConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToCommentConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the RootQueryToCommentConnection connection */
export type RootQueryToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']['input']>
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']['input']>
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']['input']>
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']['input']>
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']['input']>
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']['input']>
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']['input']>
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']['input']>
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']['input']>
}

/** Connection between the RootQuery type and the ContentNode type */
export type RootQueryToContentNodeConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'RootQueryToContentNodeConnection'
    /** Edges for the RootQueryToContentNodeConnection connection */
    edges: Array<RootQueryToContentNodeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToContentNodeConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'RootQueryToContentNodeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ContentNode
  }

/** Page Info on the &quot;RootQueryToContentNodeConnection&quot; */
export type RootQueryToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToContentNodeConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the RootQueryToContentNodeConnection connection */
export type RootQueryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the ContentType type */
export type RootQueryToContentTypeConnection = Connection &
  ContentTypeConnection & {
    __typename?: 'RootQueryToContentTypeConnection'
    /** Edges for the RootQueryToContentTypeConnection connection */
    edges: Array<RootQueryToContentTypeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentType>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToContentTypeConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToContentTypeConnectionEdge = ContentTypeConnectionEdge &
  Edge & {
    __typename?: 'RootQueryToContentTypeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ContentType
  }

/** Page Info on the &quot;RootQueryToContentTypeConnection&quot; */
export type RootQueryToContentTypeConnectionPageInfo = ContentTypeConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToContentTypeConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Connection between the RootQuery type and the course type */
export type RootQueryToCourseConnection = Connection &
  CourseConnection & {
    __typename?: 'RootQueryToCourseConnection'
    /** Edges for the RootQueryToCourseConnection connection */
    edges: Array<RootQueryToCourseConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Course>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToCourseConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToCourseConnectionEdge = CourseConnectionEdge &
  Edge & {
    __typename?: 'RootQueryToCourseConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Course
  }

/** Page Info on the &quot;RootQueryToCourseConnection&quot; */
export type RootQueryToCourseConnectionPageInfo = CourseConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToCourseConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the RootQueryToCourseConnection connection */
export type RootQueryToCourseConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the EnqueuedScript type */
export type RootQueryToEnqueuedScriptConnection = Connection &
  EnqueuedScriptConnection & {
    __typename?: 'RootQueryToEnqueuedScriptConnection'
    /** Edges for the RootQueryToEnqueuedScriptConnection connection */
    edges: Array<RootQueryToEnqueuedScriptConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<EnqueuedScript>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToEnqueuedScriptConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToEnqueuedScriptConnectionEdge = Edge &
  EnqueuedScriptConnectionEdge & {
    __typename?: 'RootQueryToEnqueuedScriptConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: EnqueuedScript
  }

/** Page Info on the &quot;RootQueryToEnqueuedScriptConnection&quot; */
export type RootQueryToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToEnqueuedScriptConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Connection between the RootQuery type and the EnqueuedStylesheet type */
export type RootQueryToEnqueuedStylesheetConnection = Connection &
  EnqueuedStylesheetConnection & {
    __typename?: 'RootQueryToEnqueuedStylesheetConnection'
    /** Edges for the RootQueryToEnqueuedStylesheetConnection connection */
    edges: Array<RootQueryToEnqueuedStylesheetConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<EnqueuedStylesheet>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToEnqueuedStylesheetConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToEnqueuedStylesheetConnectionEdge = Edge &
  EnqueuedStylesheetConnectionEdge & {
    __typename?: 'RootQueryToEnqueuedStylesheetConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: EnqueuedStylesheet
  }

/** Page Info on the &quot;RootQueryToEnqueuedStylesheetConnection&quot; */
export type RootQueryToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToEnqueuedStylesheetConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Connection between the RootQuery type and the Form type */
export type RootQueryToFormConnection = Connection &
  FormConnection & {
    __typename?: 'RootQueryToFormConnection'
    /** Edges for the RootQueryToFormConnection connection */
    edges: Array<RootQueryToFormConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Form>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToFormConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToFormConnectionEdge = Edge &
  FormConnectionEdge & {
    __typename?: 'RootQueryToFormConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Form
  }

/** Page Info on the &quot;RootQueryToFormConnection&quot; */
export type RootQueryToFormConnectionPageInfo = FormConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToFormConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Connection between the RootQuery type and the generalFragment type */
export type RootQueryToGeneralFragmentConnection = Connection &
  GeneralFragmentConnection & {
    __typename?: 'RootQueryToGeneralFragmentConnection'
    /** Edges for the RootQueryToGeneralFragmentConnection connection */
    edges: Array<RootQueryToGeneralFragmentConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<GeneralFragment>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToGeneralFragmentConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToGeneralFragmentConnectionEdge = Edge &
  GeneralFragmentConnectionEdge & {
    __typename?: 'RootQueryToGeneralFragmentConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: GeneralFragment
  }

/** Page Info on the &quot;RootQueryToGeneralFragmentConnection&quot; */
export type RootQueryToGeneralFragmentConnectionPageInfo = GeneralFragmentConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToGeneralFragmentConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the RootQueryToGeneralFragmentConnection connection */
export type RootQueryToGeneralFragmentConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the individualCourse type */
export type RootQueryToIndividualCourseConnection = Connection &
  IndividualCourseConnection & {
    __typename?: 'RootQueryToIndividualCourseConnection'
    /** Edges for the RootQueryToIndividualCourseConnection connection */
    edges: Array<RootQueryToIndividualCourseConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<IndividualCourse>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToIndividualCourseConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToIndividualCourseConnectionEdge = Edge &
  IndividualCourseConnectionEdge & {
    __typename?: 'RootQueryToIndividualCourseConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: IndividualCourse
  }

/** Page Info on the &quot;RootQueryToIndividualCourseConnection&quot; */
export type RootQueryToIndividualCourseConnectionPageInfo = IndividualCourseConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToIndividualCourseConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the RootQueryToIndividualCourseConnection connection */
export type RootQueryToIndividualCourseConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the mediaItem type */
export type RootQueryToMediaItemConnection = Connection &
  MediaItemConnection & {
    __typename?: 'RootQueryToMediaItemConnection'
    /** Edges for the RootQueryToMediaItemConnection connection */
    edges: Array<RootQueryToMediaItemConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<MediaItem>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToMediaItemConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToMediaItemConnectionEdge = Edge &
  MediaItemConnectionEdge & {
    __typename?: 'RootQueryToMediaItemConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: MediaItem
  }

/** Page Info on the &quot;RootQueryToMediaItemConnection&quot; */
export type RootQueryToMediaItemConnectionPageInfo = MediaItemConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToMediaItemConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export type RootQueryToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the Menu type */
export type RootQueryToMenuConnection = Connection &
  MenuConnection & {
    __typename?: 'RootQueryToMenuConnection'
    /** Edges for the RootQueryToMenuConnection connection */
    edges: Array<RootQueryToMenuConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Menu>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToMenuConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToMenuConnectionEdge = Edge &
  MenuConnectionEdge & {
    __typename?: 'RootQueryToMenuConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Menu
  }

/** Page Info on the &quot;RootQueryToMenuConnection&quot; */
export type RootQueryToMenuConnectionPageInfo = MenuConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToMenuConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the RootQueryToMenuConnection connection */
export type RootQueryToMenuConnectionWhereArgs = {
  /** The database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>
  /** The slug of the menu to query items for */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the MenuItem type */
export type RootQueryToMenuItemConnection = Connection &
  MenuItemConnection & {
    __typename?: 'RootQueryToMenuItemConnection'
    /** Edges for the RootQueryToMenuItemConnection connection */
    edges: Array<RootQueryToMenuItemConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<MenuItem>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToMenuItemConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToMenuItemConnectionEdge = Edge &
  MenuItemConnectionEdge & {
    __typename?: 'RootQueryToMenuItemConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: MenuItem
  }

/** Page Info on the &quot;RootQueryToMenuItemConnection&quot; */
export type RootQueryToMenuItemConnectionPageInfo = MenuItemConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToMenuItemConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export type RootQueryToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>
  /** The database ID of the parent menu object */
  parentDatabaseId?: InputMaybe<Scalars['Int']['input']>
  /** The ID of the parent menu object */
  parentId?: InputMaybe<Scalars['ID']['input']>
}

/** Connection between the RootQuery type and the page type */
export type RootQueryToPageConnection = Connection &
  PageConnection & {
    __typename?: 'RootQueryToPageConnection'
    /** Edges for the RootQueryToPageConnection connection */
    edges: Array<RootQueryToPageConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Page>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToPageConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToPageConnectionEdge = Edge &
  PageConnectionEdge & {
    __typename?: 'RootQueryToPageConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Page
  }

/** Page Info on the &quot;RootQueryToPageConnection&quot; */
export type RootQueryToPageConnectionPageInfo = PageConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToPageConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the RootQueryToPageConnection connection */
export type RootQueryToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the Plugin type */
export type RootQueryToPluginConnection = Connection &
  PluginConnection & {
    __typename?: 'RootQueryToPluginConnection'
    /** Edges for the RootQueryToPluginConnection connection */
    edges: Array<RootQueryToPluginConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Plugin>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToPluginConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToPluginConnectionEdge = Edge &
  PluginConnectionEdge & {
    __typename?: 'RootQueryToPluginConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Plugin
  }

/** Page Info on the &quot;RootQueryToPluginConnection&quot; */
export type RootQueryToPluginConnectionPageInfo = PageInfo &
  PluginConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToPluginConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the RootQueryToPluginConnection connection */
export type RootQueryToPluginConnectionWhereArgs = {
  /** Show plugin based on a keyword search. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve plugins where plugin status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PluginStatusEnum>>>
  /** Show plugins with a specific status. */
  status?: InputMaybe<PluginStatusEnum>
}

/** Connection between the RootQuery type and the post type */
export type RootQueryToPostConnection = Connection &
  PostConnection & {
    __typename?: 'RootQueryToPostConnection'
    /** Edges for the RootQueryToPostConnection connection */
    edges: Array<RootQueryToPostConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Post>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToPostConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToPostConnectionEdge = Edge &
  PostConnectionEdge & {
    __typename?: 'RootQueryToPostConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Post
  }

/** Page Info on the &quot;RootQueryToPostConnection&quot; */
export type RootQueryToPostConnectionPageInfo = PageInfo &
  PostConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToPostConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the RootQueryToPostConnection connection */
export type RootQueryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']['input']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']['input']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']['input']>
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']['input']>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the postFormat type */
export type RootQueryToPostFormatConnection = Connection &
  PostFormatConnection & {
    __typename?: 'RootQueryToPostFormatConnection'
    /** Edges for the RootQueryToPostFormatConnection connection */
    edges: Array<RootQueryToPostFormatConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<PostFormat>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToPostFormatConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToPostFormatConnectionEdge = Edge &
  PostFormatConnectionEdge & {
    __typename?: 'RootQueryToPostFormatConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: PostFormat
  }

/** Page Info on the &quot;RootQueryToPostFormatConnection&quot; */
export type RootQueryToPostFormatConnectionPageInfo = PageInfo &
  PostFormatConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToPostFormatConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the RootQueryToPostFormatConnection connection */
export type RootQueryToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the RootQuery type and the ContentNode type */
export type RootQueryToRevisionsConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'RootQueryToRevisionsConnection'
    /** Edges for the RootQueryToRevisionsConnection connection */
    edges: Array<RootQueryToRevisionsConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToRevisionsConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToRevisionsConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'RootQueryToRevisionsConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ContentNode
  }

/** Page Info on the &quot;RootQueryToRevisionsConnection&quot; */
export type RootQueryToRevisionsConnectionPageInfo = ContentNodeConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToRevisionsConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the RootQueryToRevisionsConnection connection */
export type RootQueryToRevisionsConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the tag type */
export type RootQueryToTagConnection = Connection &
  TagConnection & {
    __typename?: 'RootQueryToTagConnection'
    /** Edges for the RootQueryToTagConnection connection */
    edges: Array<RootQueryToTagConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Tag>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToTagConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToTagConnectionEdge = Edge &
  TagConnectionEdge & {
    __typename?: 'RootQueryToTagConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Tag
  }

/** Page Info on the &quot;RootQueryToTagConnection&quot; */
export type RootQueryToTagConnectionPageInfo = PageInfo &
  TagConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToTagConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the RootQueryToTagConnection connection */
export type RootQueryToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the RootQuery type and the Taxonomy type */
export type RootQueryToTaxonomyConnection = Connection &
  TaxonomyConnection & {
    __typename?: 'RootQueryToTaxonomyConnection'
    /** Edges for the RootQueryToTaxonomyConnection connection */
    edges: Array<RootQueryToTaxonomyConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Taxonomy>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToTaxonomyConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToTaxonomyConnectionEdge = Edge &
  TaxonomyConnectionEdge & {
    __typename?: 'RootQueryToTaxonomyConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Taxonomy
  }

/** Page Info on the &quot;RootQueryToTaxonomyConnection&quot; */
export type RootQueryToTaxonomyConnectionPageInfo = PageInfo &
  TaxonomyConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToTaxonomyConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Connection between the RootQuery type and the TermNode type */
export type RootQueryToTermNodeConnection = Connection &
  TermNodeConnection & {
    __typename?: 'RootQueryToTermNodeConnection'
    /** Edges for the RootQueryToTermNodeConnection connection */
    edges: Array<RootQueryToTermNodeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<TermNode>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToTermNodeConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToTermNodeConnectionEdge = Edge &
  TermNodeConnectionEdge & {
    __typename?: 'RootQueryToTermNodeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: TermNode
  }

/** Page Info on the &quot;RootQueryToTermNodeConnection&quot; */
export type RootQueryToTermNodeConnectionPageInfo = PageInfo &
  TermNodeConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToTermNodeConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the RootQueryToTermNodeConnection connection */
export type RootQueryToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the RootQuery type and the Theme type */
export type RootQueryToThemeConnection = Connection &
  ThemeConnection & {
    __typename?: 'RootQueryToThemeConnection'
    /** Edges for the RootQueryToThemeConnection connection */
    edges: Array<RootQueryToThemeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Theme>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToThemeConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToThemeConnectionEdge = Edge &
  ThemeConnectionEdge & {
    __typename?: 'RootQueryToThemeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Theme
  }

/** Page Info on the &quot;RootQueryToThemeConnection&quot; */
export type RootQueryToThemeConnectionPageInfo = PageInfo &
  ThemeConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToThemeConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Connection between the RootQuery type and the User type */
export type RootQueryToUserConnection = Connection &
  UserConnection & {
    __typename?: 'RootQueryToUserConnection'
    /** Edges for the RootQueryToUserConnection connection */
    edges: Array<RootQueryToUserConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<User>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToUserConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToUserConnectionEdge = Edge &
  UserConnectionEdge & {
    __typename?: 'RootQueryToUserConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: User
  }

/** Page Info on the &quot;RootQueryToUserConnection&quot; */
export type RootQueryToUserConnectionPageInfo = PageInfo &
  UserConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToUserConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the RootQueryToUserConnection connection */
export type RootQueryToUserConnectionWhereArgs = {
  /** Array of userIds to exclude. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  /** Pass an array of post types to filter results to users who have published posts in those post types. */
  hasPublishedPosts?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Array of userIds to include. */
  include?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  /** The user login. */
  login?: InputMaybe<Scalars['String']['input']>
  /** An array of logins to include. Users matching one of these logins will be included in results. */
  loginIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** An array of logins to exclude. Users matching one of these logins will not be included in results. */
  loginNotIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** The user nicename. */
  nicename?: InputMaybe<Scalars['String']['input']>
  /** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
  nicenameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
  nicenameNotIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<UsersConnectionOrderbyInput>>>
  /** An array of role names that users must match to be included in results. Note that this is an inclusive list: users must match *each* role. */
  role?: InputMaybe<UserRoleEnum>
  /** An array of role names. Matched users must have at least one of these roles. */
  roleIn?: InputMaybe<Array<InputMaybe<UserRoleEnum>>>
  /** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
  roleNotIn?: InputMaybe<Array<InputMaybe<UserRoleEnum>>>
  /** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
  searchColumns?: InputMaybe<Array<InputMaybe<UsersConnectionSearchColumnEnum>>>
}

/** Connection between the RootQuery type and the UserRole type */
export type RootQueryToUserRoleConnection = Connection &
  UserRoleConnection & {
    __typename?: 'RootQueryToUserRoleConnection'
    /** Edges for the RootQueryToUserRoleConnection connection */
    edges: Array<RootQueryToUserRoleConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<UserRole>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToUserRoleConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToUserRoleConnectionEdge = Edge &
  UserRoleConnectionEdge & {
    __typename?: 'RootQueryToUserRoleConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: UserRole
  }

/** Page Info on the &quot;RootQueryToUserRoleConnection&quot; */
export type RootQueryToUserRoleConnectionPageInfo = PageInfo &
  UserRoleConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToUserRoleConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** The Yoast SEO breadcrumb config */
export type SeoBreadcrumbs = {
  __typename?: 'SEOBreadcrumbs'
  archivePrefix?: Maybe<Scalars['String']['output']>
  boldLast?: Maybe<Scalars['Boolean']['output']>
  enabled?: Maybe<Scalars['Boolean']['output']>
  homeText?: Maybe<Scalars['String']['output']>
  notFoundText?: Maybe<Scalars['String']['output']>
  prefix?: Maybe<Scalars['String']['output']>
  searchPrefix?: Maybe<Scalars['String']['output']>
  separator?: Maybe<Scalars['String']['output']>
  showBlogPage?: Maybe<Scalars['Boolean']['output']>
}

/** Types of cards */
export enum SeoCardType {
  Summary = 'summary',
  SummaryLargeImage = 'summary_large_image',
}

/** The Yoast SEO site level configuration data */
export type SeoConfig = {
  __typename?: 'SEOConfig'
  breadcrumbs?: Maybe<SeoBreadcrumbs>
  contentTypes?: Maybe<SeoContentTypes>
  meta?: Maybe<SeoGlobalMeta>
  openGraph?: Maybe<SeoOpenGraph>
  redirects?: Maybe<Array<Maybe<SeoRedirect>>>
  schema?: Maybe<SeoSchema>
  social?: Maybe<SeoSocial>
  webmaster?: Maybe<SeoWebmaster>
}

/** The Yoast SEO search appearance content types fields */
export type SeoContentType = {
  __typename?: 'SEOContentType'
  archive?: Maybe<SeoContentTypeArchive>
  metaDesc?: Maybe<Scalars['String']['output']>
  metaRobotsNoindex?: Maybe<Scalars['Boolean']['output']>
  schema?: Maybe<SeoPageInfoSchema>
  schemaType?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** The Yoast SEO search appearance content types fields */
export type SeoContentTypeArchive = {
  __typename?: 'SEOContentTypeArchive'
  archiveLink?: Maybe<Scalars['String']['output']>
  breadcrumbTitle?: Maybe<Scalars['String']['output']>
  fullHead?: Maybe<Scalars['String']['output']>
  hasArchive?: Maybe<Scalars['Boolean']['output']>
  metaDesc?: Maybe<Scalars['String']['output']>
  metaRobotsFollow?: Maybe<Scalars['String']['output']>
  metaRobotsIndex?: Maybe<Scalars['String']['output']>
  metaRobotsNofollow?: Maybe<Scalars['Boolean']['output']>
  metaRobotsNoindex?: Maybe<Scalars['Boolean']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** The Yoast SEO search appearance content types */
export type SeoContentTypes = {
  __typename?: 'SEOContentTypes'
  course?: Maybe<SeoContentType>
  generalFragment?: Maybe<SeoContentType>
  individualCourse?: Maybe<SeoContentType>
  mediaItem?: Maybe<SeoContentType>
  page?: Maybe<SeoContentType>
  post?: Maybe<SeoContentType>
}

/** The Yoast SEO meta data */
export type SeoGlobalMeta = {
  __typename?: 'SEOGlobalMeta'
  author?: Maybe<SeoGlobalMetaAuthor>
  config?: Maybe<SeoGlobalMetaConfig>
  date?: Maybe<SeoGlobalMetaDate>
  homepage?: Maybe<SeoGlobalMetaHome>
  notFound?: Maybe<SeoGlobalMeta404>
}

/** The Yoast SEO meta 404 data */
export type SeoGlobalMeta404 = {
  __typename?: 'SEOGlobalMeta404'
  breadcrumb?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** The Yoast SEO Author data */
export type SeoGlobalMetaAuthor = {
  __typename?: 'SEOGlobalMetaAuthor'
  description?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** The Yoast SEO meta config data */
export type SeoGlobalMetaConfig = {
  __typename?: 'SEOGlobalMetaConfig'
  separator?: Maybe<Scalars['String']['output']>
}

/** The Yoast SEO Date data */
export type SeoGlobalMetaDate = {
  __typename?: 'SEOGlobalMetaDate'
  description?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** The Yoast SEO homepage data */
export type SeoGlobalMetaHome = {
  __typename?: 'SEOGlobalMetaHome'
  description?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** The Open Graph data */
export type SeoOpenGraph = {
  __typename?: 'SEOOpenGraph'
  defaultImage?: Maybe<MediaItem>
  frontPage?: Maybe<SeoOpenGraphFrontPage>
}

/** The Open Graph Front page data */
export type SeoOpenGraphFrontPage = {
  __typename?: 'SEOOpenGraphFrontPage'
  description?: Maybe<Scalars['String']['output']>
  image?: Maybe<MediaItem>
  title?: Maybe<Scalars['String']['output']>
}

/** The Schema for post type */
export type SeoPageInfoSchema = {
  __typename?: 'SEOPageInfoSchema'
  raw?: Maybe<Scalars['String']['output']>
}

export type SeoPostTypeBreadcrumbs = {
  __typename?: 'SEOPostTypeBreadcrumbs'
  text?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

/** The page info SEO details */
export type SeoPostTypePageInfo = {
  __typename?: 'SEOPostTypePageInfo'
  schema?: Maybe<SeoPageInfoSchema>
}

/** The Schema types */
export type SeoPostTypeSchema = {
  __typename?: 'SEOPostTypeSchema'
  articleType?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  pageType?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  raw?: Maybe<Scalars['String']['output']>
}

/** The Yoast redirect data  (Yoast Premium only) */
export type SeoRedirect = {
  __typename?: 'SEORedirect'
  format?: Maybe<Scalars['String']['output']>
  origin?: Maybe<Scalars['String']['output']>
  target?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['Int']['output']>
}

/** The Yoast SEO schema data */
export type SeoSchema = {
  __typename?: 'SEOSchema'
  companyLogo?: Maybe<MediaItem>
  companyName?: Maybe<Scalars['String']['output']>
  companyOrPerson?: Maybe<Scalars['String']['output']>
  homeUrl?: Maybe<Scalars['String']['output']>
  inLanguage?: Maybe<Scalars['String']['output']>
  logo?: Maybe<MediaItem>
  personLogo?: Maybe<MediaItem>
  personName?: Maybe<Scalars['String']['output']>
  siteName?: Maybe<Scalars['String']['output']>
  siteUrl?: Maybe<Scalars['String']['output']>
  wordpressSiteName?: Maybe<Scalars['String']['output']>
}

/** The Yoast SEO Social media links */
export type SeoSocial = {
  __typename?: 'SEOSocial'
  facebook?: Maybe<SeoSocialFacebook>
  instagram?: Maybe<SeoSocialInstagram>
  linkedIn?: Maybe<SeoSocialLinkedIn>
  mySpace?: Maybe<SeoSocialMySpace>
  otherSocials?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  pinterest?: Maybe<SeoSocialPinterest>
  twitter?: Maybe<SeoSocialTwitter>
  wikipedia?: Maybe<SeoSocialWikipedia>
  youTube?: Maybe<SeoSocialYoutube>
}

export type SeoSocialFacebook = {
  __typename?: 'SEOSocialFacebook'
  defaultImage?: Maybe<MediaItem>
  url?: Maybe<Scalars['String']['output']>
}

export type SeoSocialInstagram = {
  __typename?: 'SEOSocialInstagram'
  url?: Maybe<Scalars['String']['output']>
}

export type SeoSocialLinkedIn = {
  __typename?: 'SEOSocialLinkedIn'
  url?: Maybe<Scalars['String']['output']>
}

export type SeoSocialMySpace = {
  __typename?: 'SEOSocialMySpace'
  url?: Maybe<Scalars['String']['output']>
}

export type SeoSocialPinterest = {
  __typename?: 'SEOSocialPinterest'
  metaTag?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

export type SeoSocialTwitter = {
  __typename?: 'SEOSocialTwitter'
  cardType?: Maybe<SeoCardType>
  username?: Maybe<Scalars['String']['output']>
}

export type SeoSocialWikipedia = {
  __typename?: 'SEOSocialWikipedia'
  url?: Maybe<Scalars['String']['output']>
}

export type SeoSocialYoutube = {
  __typename?: 'SEOSocialYoutube'
  url?: Maybe<Scalars['String']['output']>
}

/** The Schema types for Taxonomy */
export type SeoTaxonomySchema = {
  __typename?: 'SEOTaxonomySchema'
  raw?: Maybe<Scalars['String']['output']>
}

export type SeoUser = {
  __typename?: 'SEOUser'
  breadcrumbTitle?: Maybe<Scalars['String']['output']>
  canonical?: Maybe<Scalars['String']['output']>
  fullHead?: Maybe<Scalars['String']['output']>
  language?: Maybe<Scalars['String']['output']>
  metaDesc?: Maybe<Scalars['String']['output']>
  metaRobotsNofollow?: Maybe<Scalars['String']['output']>
  metaRobotsNoindex?: Maybe<Scalars['String']['output']>
  opengraphDescription?: Maybe<Scalars['String']['output']>
  opengraphImage?: Maybe<MediaItem>
  opengraphTitle?: Maybe<Scalars['String']['output']>
  region?: Maybe<Scalars['String']['output']>
  schema?: Maybe<SeoUserSchema>
  social?: Maybe<SeoUserSocial>
  title?: Maybe<Scalars['String']['output']>
  twitterDescription?: Maybe<Scalars['String']['output']>
  twitterImage?: Maybe<MediaItem>
  twitterTitle?: Maybe<Scalars['String']['output']>
}

/** The Schema types for User */
export type SeoUserSchema = {
  __typename?: 'SEOUserSchema'
  articleType?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  pageType?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  raw?: Maybe<Scalars['String']['output']>
}

export type SeoUserSocial = {
  __typename?: 'SEOUserSocial'
  facebook?: Maybe<Scalars['String']['output']>
  instagram?: Maybe<Scalars['String']['output']>
  linkedIn?: Maybe<Scalars['String']['output']>
  mySpace?: Maybe<Scalars['String']['output']>
  pinterest?: Maybe<Scalars['String']['output']>
  soundCloud?: Maybe<Scalars['String']['output']>
  twitter?: Maybe<Scalars['String']['output']>
  wikipedia?: Maybe<Scalars['String']['output']>
  youTube?: Maybe<Scalars['String']['output']>
}

/** The Yoast SEO  webmaster fields */
export type SeoWebmaster = {
  __typename?: 'SEOWebmaster'
  baiduVerify?: Maybe<Scalars['String']['output']>
  googleVerify?: Maybe<Scalars['String']['output']>
  msVerify?: Maybe<Scalars['String']['output']>
  yandexVerify?: Maybe<Scalars['String']['output']>
}

/** The strategy to use when loading the script */
export enum ScriptLoadingStrategyEnum {
  /** Use the script `async` attribute */
  Async = 'ASYNC',
  /** Use the script `defer` attribute */
  Defer = 'DEFER',
}

/** Input for the sendPasswordResetEmail mutation. */
export type SendPasswordResetEmailInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** A string that contains the user's username or email address. */
  username: Scalars['String']['input']
}

/** The payload for the sendPasswordResetEmail mutation. */
export type SendPasswordResetEmailPayload = {
  __typename?: 'SendPasswordResetEmailPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Whether the mutation completed successfully. This does NOT necessarily mean that an email was sent. */
  success?: Maybe<Scalars['Boolean']['output']>
  /**
   * The user that the password reset email was sent to
   * @deprecated This field will be removed in a future version of WPGraphQL
   */
  user?: Maybe<User>
}

/** All of the registered settings */
export type Settings = {
  __typename?: 'Settings'
  /** Settings of the the string Settings Group */
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']['output']>
  /** Settings of the the string Settings Group */
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']['output']>
  /** Settings of the the string Settings Group */
  generalSettingsDateFormat?: Maybe<Scalars['String']['output']>
  /** Settings of the the string Settings Group */
  generalSettingsDescription?: Maybe<Scalars['String']['output']>
  /** Settings of the the string Settings Group */
  generalSettingsEmail?: Maybe<Scalars['String']['output']>
  /** Settings of the the string Settings Group */
  generalSettingsLanguage?: Maybe<Scalars['String']['output']>
  /** Settings of the the integer Settings Group */
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']['output']>
  /** Settings of the the string Settings Group */
  generalSettingsTimeFormat?: Maybe<Scalars['String']['output']>
  /** Settings of the the string Settings Group */
  generalSettingsTimezone?: Maybe<Scalars['String']['output']>
  /** Settings of the the string Settings Group */
  generalSettingsTitle?: Maybe<Scalars['String']['output']>
  /** Settings of the the string Settings Group */
  generalSettingsUrl?: Maybe<Scalars['String']['output']>
  /** Settings of the the integer Settings Group */
  readingSettingsPageForPosts?: Maybe<Scalars['Int']['output']>
  /** Settings of the the integer Settings Group */
  readingSettingsPageOnFront?: Maybe<Scalars['Int']['output']>
  /** Settings of the the integer Settings Group */
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']['output']>
  /** Settings of the the string Settings Group */
  readingSettingsShowOnFront?: Maybe<Scalars['String']['output']>
  /** Settings of the the integer Settings Group */
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']['output']>
  /** Settings of the the string Settings Group */
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']['output']>
  /** Settings of the the boolean Settings Group */
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']['output']>
}

/** The &quot;SiteSettings&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type SiteSettings = AcfFieldGroup &
  AcfFieldGroupFields &
  SiteSettings_Fields & {
    __typename?: 'SiteSettings'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;SiteSettings&quot; Field Group */
    paymentSettings?: Maybe<SiteSettingsPaymentSettings>
  }

/** The &quot;SiteSettingsPaymentSettings&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type SiteSettingsPaymentSettings = AcfFieldGroup &
  AcfFieldGroupFields &
  SiteSettingsPaymentSettings_Fields & {
    __typename?: 'SiteSettingsPaymentSettings'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;SiteSettingsPaymentSettings&quot; Field Group */
    storeID?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;SiteSettingsPaymentSettings&quot; Field Group */
export type SiteSettingsPaymentSettings_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;SiteSettingsPaymentSettings&quot; Field Group */
  storeID?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;SiteSettings&quot; Field Group */
export type SiteSettings_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;SiteSettings&quot; Field Group */
  paymentSettings?: Maybe<SiteSettingsPaymentSettings>
}

/** The &quot;Students&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type Students = AcfFieldGroup &
  AcfFieldGroupFields &
  Students_Fields & {
    __typename?: 'Students'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Students&quot; Field Group */
    description?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;Students&quot; Field Group */
    list?: Maybe<Array<Maybe<StudentsList>>>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Students&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** The &quot;StudentsList&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type StudentsList = AcfFieldGroup &
  AcfFieldGroupFields &
  StudentsList_Fields & {
    __typename?: 'StudentsList'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;StudentsList&quot; Field Group */
    firstBadge?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;StudentsList&quot; Field Group */
    secondBadge?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;StudentsList&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;StudentsList&quot; Field Group */
export type StudentsList_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;StudentsList&quot; Field Group */
  firstBadge?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;StudentsList&quot; Field Group */
  secondBadge?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;StudentsList&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;Students&quot; Field Group */
export type Students_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Students&quot; Field Group */
  description?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;Students&quot; Field Group */
  list?: Maybe<Array<Maybe<StudentsList>>>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Students&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** Input for the submitForm mutation. */
export type SubmitFormInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Submited form data */
  data?: InputMaybe<Array<InputMaybe<InputField>>>
  /** Submited form Id */
  formId?: InputMaybe<Scalars['Int']['input']>
}

/** The payload for the submitForm mutation. */
export type SubmitFormPayload = {
  __typename?: 'SubmitFormPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Field errors */
  errors?: Maybe<Array<Maybe<FieldError>>>
  /** Generic operation message */
  message?: Maybe<Scalars['String']['output']>
  /** Form submitted successfuly */
  success?: Maybe<Scalars['Boolean']['output']>
}

/** The tag type */
export type Tag = DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  TermNode &
  UniformResourceIdentifiable & {
    __typename?: 'Tag'
    /** Connection between the Tag type and the ContentNode type */
    contentNodes?: Maybe<TagToContentNodeConnection>
    /** The number of objects connected to the object */
    count?: Maybe<Scalars['Int']['output']>
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']['output']
    /** The description of the object */
    description?: Maybe<Scalars['String']['output']>
    /** Connection between the TermNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>
    /** Connection between the TermNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>
    /** The globally unique ID for the object */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** The link to the term */
    link?: Maybe<Scalars['String']['output']>
    /** The human friendly name of the object. */
    name?: Maybe<Scalars['String']['output']>
    /** Connection between the Tag type and the post type */
    posts?: Maybe<TagToPostConnection>
    /** The Yoast SEO data of the Метки taxonomy. */
    seo?: Maybe<TaxonomySeo>
    /** An alphanumeric identifier for the object unique to its type. */
    slug?: Maybe<Scalars['String']['output']>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of databaseId
     */
    tagId?: Maybe<Scalars['Int']['output']>
    /** Connection between the Tag type and the Taxonomy type */
    taxonomy?: Maybe<TagToTaxonomyConnectionEdge>
    /** The name of the taxonomy that the object is associated with */
    taxonomyName?: Maybe<Scalars['String']['output']>
    /** The ID of the term group that this term object belongs to */
    termGroupId?: Maybe<Scalars['Int']['output']>
    /** The taxonomy ID that the object is associated with */
    termTaxonomyId?: Maybe<Scalars['Int']['output']>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The tag type */
export type TagContentNodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<TagToContentNodeConnectionWhereArgs>
}

/** The tag type */
export type TagEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The tag type */
export type TagEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The tag type */
export type TagPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<TagToPostConnectionWhereArgs>
}

/** Connection to tag Nodes */
export type TagConnection = {
  /** A list of edges (relational context) between RootQuery and connected tag Nodes */
  edges: Array<TagConnectionEdge>
  /** A list of connected tag Nodes */
  nodes: Array<Tag>
  /** Information about pagination in a connection. */
  pageInfo: TagConnectionPageInfo
}

/** Edge between a Node and a connected tag */
export type TagConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected tag Node */
  node: Tag
}

/** Page Info on the connected TagConnectionEdge */
export type TagConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum TagIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
}

/** Connection between the Tag type and the ContentNode type */
export type TagToContentNodeConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'TagToContentNodeConnection'
    /** Edges for the TagToContentNodeConnection connection */
    edges: Array<TagToContentNodeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>
    /** Information about pagination in a connection. */
    pageInfo: TagToContentNodeConnectionPageInfo
  }

/** An edge in a connection */
export type TagToContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'TagToContentNodeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ContentNode
  }

/** Page Info on the &quot;TagToContentNodeConnection&quot; */
export type TagToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'TagToContentNodeConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the TagToContentNodeConnection connection */
export type TagToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfTagEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the Tag type and the post type */
export type TagToPostConnection = Connection &
  PostConnection & {
    __typename?: 'TagToPostConnection'
    /** Edges for the TagToPostConnection connection */
    edges: Array<TagToPostConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Post>
    /** Information about pagination in a connection. */
    pageInfo: TagToPostConnectionPageInfo
  }

/** An edge in a connection */
export type TagToPostConnectionEdge = Edge &
  PostConnectionEdge & {
    __typename?: 'TagToPostConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Post
  }

/** Page Info on the &quot;TagToPostConnection&quot; */
export type TagToPostConnectionPageInfo = PageInfo &
  PostConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'TagToPostConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the TagToPostConnection connection */
export type TagToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']['input']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']['input']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']['input']>
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']['input']>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the Tag type and the Taxonomy type */
export type TagToTaxonomyConnectionEdge = Edge &
  OneToOneConnection &
  TaxonomyConnectionEdge & {
    __typename?: 'TagToTaxonomyConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Taxonomy
  }

/** A taxonomy object */
export type Taxonomy = Node & {
  __typename?: 'Taxonomy'
  /** List of Content Types associated with the Taxonomy */
  connectedContentTypes?: Maybe<TaxonomyToContentTypeConnection>
  /** List of Term Nodes associated with the Taxonomy */
  connectedTerms?: Maybe<TaxonomyToTermNodeConnection>
  /** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
  description?: Maybe<Scalars['String']['output']>
  /** The plural name of the post type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']['output']>
  /** The singular name of the post type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']['output']>
  /** Whether the taxonomy is hierarchical */
  hierarchical?: Maybe<Scalars['Boolean']['output']>
  /** The globally unique identifier of the taxonomy object. */
  id: Scalars['ID']['output']
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']['output']>
  /** Name of the taxonomy shown in the menu. Usually plural. */
  label?: Maybe<Scalars['String']['output']>
  /** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
  name?: Maybe<Scalars['String']['output']>
  /** Whether the taxonomy is publicly queryable */
  public?: Maybe<Scalars['Boolean']['output']>
  /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']['output']>
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']['output']>
  /** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
  showCloud?: Maybe<Scalars['Boolean']['output']>
  /** Whether to display a column for the taxonomy on its post type listing screens. */
  showInAdminColumn?: Maybe<Scalars['Boolean']['output']>
  /** Whether to add the post type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']['output']>
  /** Whether to show the taxonomy in the admin menu */
  showInMenu?: Maybe<Scalars['Boolean']['output']>
  /** Whether the taxonomy is available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']['output']>
  /** Whether to show the taxonomy in the quick/bulk edit panel. */
  showInQuickEdit?: Maybe<Scalars['Boolean']['output']>
  /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']['output']>
  /** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
  showUi?: Maybe<Scalars['Boolean']['output']>
}

/** A taxonomy object */
export type TaxonomyConnectedContentTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** A taxonomy object */
export type TaxonomyConnectedTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Connection to Taxonomy Nodes */
export type TaxonomyConnection = {
  /** A list of edges (relational context) between RootQuery and connected Taxonomy Nodes */
  edges: Array<TaxonomyConnectionEdge>
  /** A list of connected Taxonomy Nodes */
  nodes: Array<Taxonomy>
  /** Information about pagination in a connection. */
  pageInfo: TaxonomyConnectionPageInfo
}

/** Edge between a Node and a connected Taxonomy */
export type TaxonomyConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected Taxonomy Node */
  node: Taxonomy
}

/** Page Info on the connected TaxonomyConnectionEdge */
export type TaxonomyConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** Allowed taxonomies */
export enum TaxonomyEnum {
  /** Taxonomy enum category */
  Category = 'CATEGORY',
  /** Taxonomy enum post_format */
  Postformat = 'POSTFORMAT',
  /** Taxonomy enum post_tag */
  Tag = 'TAG',
}

/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */
export enum TaxonomyIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the taxonomy */
  Name = 'NAME',
}

export type TaxonomySeo = {
  __typename?: 'TaxonomySEO'
  breadcrumbs?: Maybe<Array<Maybe<SeoPostTypeBreadcrumbs>>>
  canonical?: Maybe<Scalars['String']['output']>
  cornerstone?: Maybe<Scalars['Boolean']['output']>
  focuskw?: Maybe<Scalars['String']['output']>
  fullHead?: Maybe<Scalars['String']['output']>
  metaDesc?: Maybe<Scalars['String']['output']>
  metaKeywords?: Maybe<Scalars['String']['output']>
  metaRobotsNofollow?: Maybe<Scalars['String']['output']>
  metaRobotsNoindex?: Maybe<Scalars['String']['output']>
  opengraphAuthor?: Maybe<Scalars['String']['output']>
  opengraphDescription?: Maybe<Scalars['String']['output']>
  opengraphImage?: Maybe<MediaItem>
  opengraphModifiedTime?: Maybe<Scalars['String']['output']>
  opengraphPublishedTime?: Maybe<Scalars['String']['output']>
  opengraphPublisher?: Maybe<Scalars['String']['output']>
  opengraphSiteName?: Maybe<Scalars['String']['output']>
  opengraphTitle?: Maybe<Scalars['String']['output']>
  opengraphType?: Maybe<Scalars['String']['output']>
  opengraphUrl?: Maybe<Scalars['String']['output']>
  schema?: Maybe<SeoTaxonomySchema>
  title?: Maybe<Scalars['String']['output']>
  twitterDescription?: Maybe<Scalars['String']['output']>
  twitterImage?: Maybe<MediaItem>
  twitterTitle?: Maybe<Scalars['String']['output']>
}

/** Connection between the Taxonomy type and the ContentType type */
export type TaxonomyToContentTypeConnection = Connection &
  ContentTypeConnection & {
    __typename?: 'TaxonomyToContentTypeConnection'
    /** Edges for the TaxonomyToContentTypeConnection connection */
    edges: Array<TaxonomyToContentTypeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentType>
    /** Information about pagination in a connection. */
    pageInfo: TaxonomyToContentTypeConnectionPageInfo
  }

/** An edge in a connection */
export type TaxonomyToContentTypeConnectionEdge = ContentTypeConnectionEdge &
  Edge & {
    __typename?: 'TaxonomyToContentTypeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ContentType
  }

/** Page Info on the &quot;TaxonomyToContentTypeConnection&quot; */
export type TaxonomyToContentTypeConnectionPageInfo = ContentTypeConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'TaxonomyToContentTypeConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Connection between the Taxonomy type and the TermNode type */
export type TaxonomyToTermNodeConnection = Connection &
  TermNodeConnection & {
    __typename?: 'TaxonomyToTermNodeConnection'
    /** Edges for the TaxonomyToTermNodeConnection connection */
    edges: Array<TaxonomyToTermNodeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<TermNode>
    /** Information about pagination in a connection. */
    pageInfo: TaxonomyToTermNodeConnectionPageInfo
  }

/** An edge in a connection */
export type TaxonomyToTermNodeConnectionEdge = Edge &
  TermNodeConnectionEdge & {
    __typename?: 'TaxonomyToTermNodeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: TermNode
  }

/** Page Info on the &quot;TaxonomyToTermNodeConnection&quot; */
export type TaxonomyToTermNodeConnectionPageInfo = PageInfo &
  TermNodeConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'TaxonomyToTermNodeConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** The &quot;Teacher&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type Teacher = AcfFieldGroup &
  AcfFieldGroupFields &
  Teacher_Fields & {
    __typename?: 'Teacher'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Teacher&quot; Field Group */
    description?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Teacher&quot; Field Group */
    education?: Maybe<TeacherEducation>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;Teacher&quot; Field Group */
    gallery?: Maybe<Array<Maybe<TeacherGallery>>>
    /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;Teacher&quot; Field Group */
    statistics?: Maybe<Array<Maybe<TeacherStatistics>>>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Teacher&quot; Field Group */
    subtitle?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Teacher&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** The &quot;TeacherEducation&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type TeacherEducation = AcfFieldGroup &
  AcfFieldGroupFields &
  TeacherEducation_Fields & {
    __typename?: 'TeacherEducation'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;TeacherEducation&quot; Field Group */
    list?: Maybe<Array<Maybe<TeacherEducationList>>>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;TeacherEducation&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** The &quot;TeacherEducationList&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type TeacherEducationList = AcfFieldGroup &
  AcfFieldGroupFields &
  TeacherEducationList_Fields & {
    __typename?: 'TeacherEducationList'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;TeacherEducationList&quot; Field Group */
    element?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;TeacherEducationList&quot; Field Group */
export type TeacherEducationList_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;TeacherEducationList&quot; Field Group */
  element?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;TeacherEducation&quot; Field Group */
export type TeacherEducation_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;TeacherEducation&quot; Field Group */
  list?: Maybe<Array<Maybe<TeacherEducationList>>>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;TeacherEducation&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** The &quot;TeacherGallery&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type TeacherGallery = AcfFieldGroup &
  AcfFieldGroupFields &
  TeacherGallery_Fields & {
    __typename?: 'TeacherGallery'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;TeacherGallery&quot; Field Group */
    alt?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;TeacherGallery&quot; Field Group */
    image?: Maybe<AcfMediaItemConnectionEdge>
  }

/** Interface representing fields of the ACF &quot;TeacherGallery&quot; Field Group */
export type TeacherGallery_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;TeacherGallery&quot; Field Group */
  alt?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;TeacherGallery&quot; Field Group */
  image?: Maybe<AcfMediaItemConnectionEdge>
}

/** The &quot;TeacherStatistics&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type TeacherStatistics = AcfFieldGroup &
  AcfFieldGroupFields &
  TeacherStatistics_Fields & {
    __typename?: 'TeacherStatistics'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;TeacherStatistics&quot; Field Group */
    number?: Maybe<Scalars['Float']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;TeacherStatistics&quot; Field Group */
    text?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;TeacherStatistics&quot; Field Group */
export type TeacherStatistics_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;TeacherStatistics&quot; Field Group */
  number?: Maybe<Scalars['Float']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;TeacherStatistics&quot; Field Group */
  text?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;Teacher&quot; Field Group */
export type Teacher_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Teacher&quot; Field Group */
  description?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;Teacher&quot; Field Group */
  education?: Maybe<TeacherEducation>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;Teacher&quot; Field Group */
  gallery?: Maybe<Array<Maybe<TeacherGallery>>>
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;Teacher&quot; Field Group */
  statistics?: Maybe<Array<Maybe<TeacherStatistics>>>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Teacher&quot; Field Group */
  subtitle?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Teacher&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNode = {
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']['output']>
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int']['output']
  /** The description of the object */
  description?: Maybe<Scalars['String']['output']>
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output']
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']['output']>
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output']
  /** The link to the term */
  link?: Maybe<Scalars['String']['output']>
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']['output']>
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']['output']>
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']['output']>
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']['output']>
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']['output']>
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>
}

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNodeEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNodeEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Connection to TermNode Nodes */
export type TermNodeConnection = {
  /** A list of edges (relational context) between RootQuery and connected TermNode Nodes */
  edges: Array<TermNodeConnectionEdge>
  /** A list of connected TermNode Nodes */
  nodes: Array<TermNode>
  /** Information about pagination in a connection. */
  pageInfo: TermNodeConnectionPageInfo
}

/** Edge between a Node and a connected TermNode */
export type TermNodeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected TermNode Node */
  node: TermNode
}

/** Page Info on the connected TermNodeConnectionEdge */
export type TermNodeConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */
export enum TermNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
}

/** Connection between the TermNode type and the EnqueuedScript type */
export type TermNodeToEnqueuedScriptConnection = Connection &
  EnqueuedScriptConnection & {
    __typename?: 'TermNodeToEnqueuedScriptConnection'
    /** Edges for the TermNodeToEnqueuedScriptConnection connection */
    edges: Array<TermNodeToEnqueuedScriptConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<EnqueuedScript>
    /** Information about pagination in a connection. */
    pageInfo: TermNodeToEnqueuedScriptConnectionPageInfo
  }

/** An edge in a connection */
export type TermNodeToEnqueuedScriptConnectionEdge = Edge &
  EnqueuedScriptConnectionEdge & {
    __typename?: 'TermNodeToEnqueuedScriptConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: EnqueuedScript
  }

/** Page Info on the &quot;TermNodeToEnqueuedScriptConnection&quot; */
export type TermNodeToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'TermNodeToEnqueuedScriptConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Connection between the TermNode type and the EnqueuedStylesheet type */
export type TermNodeToEnqueuedStylesheetConnection = Connection &
  EnqueuedStylesheetConnection & {
    __typename?: 'TermNodeToEnqueuedStylesheetConnection'
    /** Edges for the TermNodeToEnqueuedStylesheetConnection connection */
    edges: Array<TermNodeToEnqueuedStylesheetConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<EnqueuedStylesheet>
    /** Information about pagination in a connection. */
    pageInfo: TermNodeToEnqueuedStylesheetConnectionPageInfo
  }

/** An edge in a connection */
export type TermNodeToEnqueuedStylesheetConnectionEdge = Edge &
  EnqueuedStylesheetConnectionEdge & {
    __typename?: 'TermNodeToEnqueuedStylesheetConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: EnqueuedStylesheet
  }

/** Page Info on the &quot;TermNodeToEnqueuedStylesheetConnection&quot; */
export type TermNodeToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'TermNodeToEnqueuedStylesheetConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Options for ordering the connection by */
export enum TermObjectsConnectionOrderbyEnum {
  /** Order the connection by item count. */
  Count = 'COUNT',
  /** Order the connection by description. */
  Description = 'DESCRIPTION',
  /** Order the connection by name. */
  Name = 'NAME',
  /** Order the connection by slug. */
  Slug = 'SLUG',
  /** Order the connection by term group. */
  TermGroup = 'TERM_GROUP',
  /** Order the connection by term id. */
  TermId = 'TERM_ID',
  /** Order the connection by term order. */
  TermOrder = 'TERM_ORDER',
}

/** A theme object */
export type Theme = Node & {
  __typename?: 'Theme'
  /** Name of the theme author(s), could also be a company name. This field is equivalent to WP_Theme-&gt;get( &quot;Author&quot; ). */
  author?: Maybe<Scalars['String']['output']>
  /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ). */
  authorUri?: Maybe<Scalars['String']['output']>
  /** The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ). */
  description?: Maybe<Scalars['String']['output']>
  /** The globally unique identifier of the theme object. */
  id: Scalars['ID']['output']
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']['output']>
  /** Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ). */
  name?: Maybe<Scalars['String']['output']>
  /** The URL of the screenshot for the theme. The screenshot is intended to give an overview of what the theme looks like. This field is equivalent to WP_Theme-&gt;get_screenshot(). */
  screenshot?: Maybe<Scalars['String']['output']>
  /** The theme slug is used to internally match themes. Theme slugs can have subdirectories like: my-theme/sub-theme. This field is equivalent to WP_Theme-&gt;get_stylesheet(). */
  slug?: Maybe<Scalars['String']['output']>
  /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ). */
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  /** A URI if the theme has a website associated with it. The Theme URI is handy for directing users to a theme site for support etc. This field is equivalent to WP_Theme-&gt;get( &quot;ThemeURI&quot; ). */
  themeUri?: Maybe<Scalars['String']['output']>
  /** The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ). */
  version?: Maybe<Scalars['String']['output']>
}

/** Connection to Theme Nodes */
export type ThemeConnection = {
  /** A list of edges (relational context) between RootQuery and connected Theme Nodes */
  edges: Array<ThemeConnectionEdge>
  /** A list of connected Theme Nodes */
  nodes: Array<Theme>
  /** Information about pagination in a connection. */
  pageInfo: ThemeConnectionPageInfo
}

/** Edge between a Node and a connected Theme */
export type ThemeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected Theme Node */
  node: Theme
}

/** Page Info on the connected ThemeConnectionEdge */
export type ThemeConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** Any node that has a URI */
export type UniformResourceIdentifiable = {
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output']
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output']
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>
}

/** Input for the updateCategory mutation. */
export type UpdateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The description of the category object */
  description?: InputMaybe<Scalars['String']['input']>
  /** The ID of the category object to update */
  id: Scalars['ID']['input']
  /** The name of the category object to mutate */
  name?: InputMaybe<Scalars['String']['input']>
  /** The ID of the category that should be set as the parent */
  parentId?: InputMaybe<Scalars['ID']['input']>
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateCategory mutation. */
export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload'
  /** The created category */
  category?: Maybe<Category>
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
}

/** Input for the updateComment mutation. */
export type UpdateCommentInput = {
  /** The approval status of the comment. */
  approved?: InputMaybe<Scalars['String']['input']>
  /** The name of the comment's author. */
  author?: InputMaybe<Scalars['String']['input']>
  /** The email of the comment's author. */
  authorEmail?: InputMaybe<Scalars['String']['input']>
  /** The url of the comment's author. */
  authorUrl?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The database ID of the post object the comment belongs to. */
  commentOn?: InputMaybe<Scalars['Int']['input']>
  /** Content of the comment. */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the comment being updated. */
  id: Scalars['ID']['input']
  /** Parent comment ID of current comment. */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** The approval status of the comment */
  status?: InputMaybe<CommentStatusEnum>
  /** Type of comment. */
  type?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateComment mutation. */
export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The comment that was created */
  comment?: Maybe<Comment>
  /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
  success?: Maybe<Scalars['Boolean']['output']>
}

/** Input for the updateCourse mutation. */
export type UpdateCourseInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the course object */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateCourse mutation. */
export type UpdateCoursePayload = {
  __typename?: 'UpdateCoursePayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  course?: Maybe<Course>
}

/** Input for the updateGeneralFragment mutation. */
export type UpdateGeneralFragmentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the generalFragment object */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateGeneralFragment mutation. */
export type UpdateGeneralFragmentPayload = {
  __typename?: 'UpdateGeneralFragmentPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  generalFragment?: Maybe<GeneralFragment>
}

/** Input for the updateIndividualCourse mutation. */
export type UpdateIndividualCourseInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the individualCourse object */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateIndividualCourse mutation. */
export type UpdateIndividualCoursePayload = {
  __typename?: 'UpdateIndividualCoursePayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  individualCourse?: Maybe<IndividualCourse>
}

/** Input for the updateMediaItem mutation. */
export type UpdateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: InputMaybe<Scalars['String']['input']>
  /** The userId to assign as the author of the mediaItem */
  authorId?: InputMaybe<Scalars['ID']['input']>
  /** The caption for the mediaItem */
  caption?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The comment status for the mediaItem */
  commentStatus?: InputMaybe<Scalars['String']['input']>
  /** The date of the mediaItem */
  date?: InputMaybe<Scalars['String']['input']>
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: InputMaybe<Scalars['String']['input']>
  /** Description of the mediaItem */
  description?: InputMaybe<Scalars['String']['input']>
  /** The file name of the mediaItem */
  filePath?: InputMaybe<Scalars['String']['input']>
  /** The file type of the mediaItem */
  fileType?: InputMaybe<MimeTypeEnum>
  /** The ID of the mediaItem object */
  id: Scalars['ID']['input']
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']['input']>
  /** The ping status for the mediaItem */
  pingStatus?: InputMaybe<Scalars['String']['input']>
  /** The slug of the mediaItem */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the mediaItem */
  status?: InputMaybe<MediaItemStatusEnum>
  /** The title of the mediaItem */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateMediaItem mutation. */
export type UpdateMediaItemPayload = {
  __typename?: 'UpdateMediaItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The MediaItem object mutation type. */
  mediaItem?: Maybe<MediaItem>
}

/** Input for the updatePage mutation. */
export type UpdatePageInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The comment status for the object */
  commentStatus?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the page object */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updatePage mutation. */
export type UpdatePagePayload = {
  __typename?: 'UpdatePagePayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  page?: Maybe<Page>
}

/** Input for the updatePostFormat mutation. */
export type UpdatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The description of the post_format object */
  description?: InputMaybe<Scalars['String']['input']>
  /** The ID of the postFormat object to update */
  id: Scalars['ID']['input']
  /** The name of the post_format object to mutate */
  name?: InputMaybe<Scalars['String']['input']>
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updatePostFormat mutation. */
export type UpdatePostFormatPayload = {
  __typename?: 'UpdatePostFormatPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The created post_format */
  postFormat?: Maybe<PostFormat>
}

/** Input for the updatePost mutation. */
export type UpdatePostInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']['input']>
  /** Set connections between the post and categories */
  categories?: InputMaybe<PostCategoriesInput>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The comment status for the object */
  commentStatus?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The excerpt of the object */
  excerpt?: InputMaybe<Scalars['String']['input']>
  /** The ID of the post object */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The ping status for the object */
  pingStatus?: InputMaybe<Scalars['String']['input']>
  /** URLs that have been pinged. */
  pinged?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Set connections between the post and postFormats */
  postFormats?: InputMaybe<PostPostFormatsInput>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** Set connections between the post and tags */
  tags?: InputMaybe<PostTagsInput>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
  /** URLs queued to be pinged. */
  toPing?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** The payload for the updatePost mutation. */
export type UpdatePostPayload = {
  __typename?: 'UpdatePostPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  post?: Maybe<Post>
}

/** Input for the updateSettings mutation. */
export type UpdateSettingsInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Разрешить оставлять комментарии к новым записям. */
  discussionSettingsDefaultCommentStatus?: InputMaybe<Scalars['String']['input']>
  /** Разрешить ссылки оповещения с других блогов (уведомления и обратные ссылки) на новые статьи. */
  discussionSettingsDefaultPingStatus?: InputMaybe<Scalars['String']['input']>
  /** Общий формат даты. */
  generalSettingsDateFormat?: InputMaybe<Scalars['String']['input']>
  /** Слоган сайта. */
  generalSettingsDescription?: InputMaybe<Scalars['String']['input']>
  /** Этот адрес используется в целях администрирования. Например, для уведомления о новых пользователях. */
  generalSettingsEmail?: InputMaybe<Scalars['String']['input']>
  /** Код локали WordPress. */
  generalSettingsLanguage?: InputMaybe<Scalars['String']['input']>
  /** Первый день недели. */
  generalSettingsStartOfWeek?: InputMaybe<Scalars['Int']['input']>
  /** Общий формат времени. */
  generalSettingsTimeFormat?: InputMaybe<Scalars['String']['input']>
  /** Город в той же временной зоне что и у вас. */
  generalSettingsTimezone?: InputMaybe<Scalars['String']['input']>
  /** Название сайта. */
  generalSettingsTitle?: InputMaybe<Scalars['String']['input']>
  /** Адрес сайта (URL) */
  generalSettingsUrl?: InputMaybe<Scalars['String']['input']>
  /** ID страницы, на которой должны отображаться последние записи */
  readingSettingsPageForPosts?: InputMaybe<Scalars['Int']['input']>
  /** ID страницы, которая должна отображаться на главной странице */
  readingSettingsPageOnFront?: InputMaybe<Scalars['Int']['input']>
  /** Максимум страниц блога для показа. */
  readingSettingsPostsPerPage?: InputMaybe<Scalars['Int']['input']>
  /** Что показать на главной странице */
  readingSettingsShowOnFront?: InputMaybe<Scalars['String']['input']>
  /** Рубрика для записей по умолчанию. */
  writingSettingsDefaultCategory?: InputMaybe<Scalars['Int']['input']>
  /** Формат записей по умолчанию. */
  writingSettingsDefaultPostFormat?: InputMaybe<Scalars['String']['input']>
  /** Преобразовывать смайлики наподобие :-) и :-P в картинки при показе. */
  writingSettingsUseSmilies?: InputMaybe<Scalars['Boolean']['input']>
}

/** The payload for the updateSettings mutation. */
export type UpdateSettingsPayload = {
  __typename?: 'UpdateSettingsPayload'
  /** Update all settings. */
  allSettings?: Maybe<Settings>
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Update the DiscussionSettings setting. */
  discussionSettings?: Maybe<DiscussionSettings>
  /** Update the GeneralSettings setting. */
  generalSettings?: Maybe<GeneralSettings>
  /** Update the ReadingSettings setting. */
  readingSettings?: Maybe<ReadingSettings>
  /** Update the WritingSettings setting. */
  writingSettings?: Maybe<WritingSettings>
}

/** Input for the updateTag mutation. */
export type UpdateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The description of the post_tag object */
  description?: InputMaybe<Scalars['String']['input']>
  /** The ID of the tag object to update */
  id: Scalars['ID']['input']
  /** The name of the post_tag object to mutate */
  name?: InputMaybe<Scalars['String']['input']>
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateTag mutation. */
export type UpdateTagPayload = {
  __typename?: 'UpdateTagPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The created post_tag */
  tag?: Maybe<Tag>
}

/** Input for the updateUser mutation. */
export type UpdateUserInput = {
  /** User's AOL IM account. */
  aim?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** A string containing content about the user. */
  description?: InputMaybe<Scalars['String']['input']>
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: InputMaybe<Scalars['String']['input']>
  /** A string containing the user's email address. */
  email?: InputMaybe<Scalars['String']['input']>
  /** 	The user's first name. */
  firstName?: InputMaybe<Scalars['String']['input']>
  /** The ID of the user */
  id: Scalars['ID']['input']
  /** User's Jabber account. */
  jabber?: InputMaybe<Scalars['String']['input']>
  /** The user's last name. */
  lastName?: InputMaybe<Scalars['String']['input']>
  /** User's locale. */
  locale?: InputMaybe<Scalars['String']['input']>
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: InputMaybe<Scalars['String']['input']>
  /** The user's nickname, defaults to the user's username. */
  nickname?: InputMaybe<Scalars['String']['input']>
  /** A string that contains the plain text password for the user. */
  password?: InputMaybe<Scalars['String']['input']>
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: InputMaybe<Scalars['String']['input']>
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: InputMaybe<Scalars['String']['input']>
  /** An array of roles to be assigned to the user. */
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: InputMaybe<Scalars['String']['input']>
  /** User's Yahoo IM account. */
  yim?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateUser mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The User object mutation type. */
  user?: Maybe<User>
}

/** A User object */
export type User = Commenter &
  DatabaseIdentifier &
  Node &
  UniformResourceIdentifiable & {
    __typename?: 'User'
    /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
    avatar?: Maybe<Avatar>
    /** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
    capKey?: Maybe<Scalars['String']['output']>
    /** A list of capabilities (permissions) granted to the user */
    capabilities?: Maybe<Array<Maybe<Scalars['String']['output']>>>
    /** Connection between the User type and the Comment type */
    comments?: Maybe<UserToCommentConnection>
    /** Identifies the primary key from the database. */
    databaseId: Scalars['Int']['output']
    /** Description of the user. */
    description?: Maybe<Scalars['String']['output']>
    /** Email address of the user. This is equivalent to the WP_User-&gt;user_email property. */
    email?: Maybe<Scalars['String']['output']>
    /** Connection between the User type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<UserToEnqueuedScriptConnection>
    /** Connection between the User type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<UserToEnqueuedStylesheetConnection>
    /** A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps. */
    extraCapabilities?: Maybe<Array<Maybe<Scalars['String']['output']>>>
    /** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
    firstName?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier for the user object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
    lastName?: Maybe<Scalars['String']['output']>
    /** The preferred language locale set for the user. Value derived from get_user_locale(). */
    locale?: Maybe<Scalars['String']['output']>
    /** Connection between the User type and the mediaItem type */
    mediaItems?: Maybe<UserToMediaItemConnection>
    /** Display name of the user. This is equivalent to the WP_User-&gt;display_name property. */
    name?: Maybe<Scalars['String']['output']>
    /** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
    nicename?: Maybe<Scalars['String']['output']>
    /** Nickname of the user. */
    nickname?: Maybe<Scalars['String']['output']>
    /** Connection between the User type and the page type */
    pages?: Maybe<UserToPageConnection>
    /** Connection between the User type and the post type */
    posts?: Maybe<UserToPostConnection>
    /** The date the user registered or was created. The field follows a full ISO8601 date string format. */
    registeredDate?: Maybe<Scalars['String']['output']>
    /** Connection between the User and Revisions authored by the user */
    revisions?: Maybe<UserToRevisionsConnection>
    /** Connection between the User type and the UserRole type */
    roles?: Maybe<UserToUserRoleConnection>
    /** The Yoast SEO data of a user */
    seo?: Maybe<SeoUser>
    /** Whether the Toolbar should be displayed when the user is viewing the site. */
    shouldShowAdminToolbar?: Maybe<Scalars['Boolean']['output']>
    /** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
    slug?: Maybe<Scalars['String']['output']>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
    /** A website url that is associated with the user. */
    url?: Maybe<Scalars['String']['output']>
    /**
     * The Id of the user. Equivalent to WP_User-&gt;ID
     * @deprecated Deprecated in favor of the databaseId field
     */
    userId?: Maybe<Scalars['Int']['output']>
    /** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
    username?: Maybe<Scalars['String']['output']>
  }

/** A User object */
export type UserAvatarArgs = {
  forceDefault?: InputMaybe<Scalars['Boolean']['input']>
  rating?: InputMaybe<AvatarRatingEnum>
  size?: InputMaybe<Scalars['Int']['input']>
}

/** A User object */
export type UserCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserToCommentConnectionWhereArgs>
}

/** A User object */
export type UserEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** A User object */
export type UserEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** A User object */
export type UserMediaItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserToMediaItemConnectionWhereArgs>
}

/** A User object */
export type UserPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserToPageConnectionWhereArgs>
}

/** A User object */
export type UserPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserToPostConnectionWhereArgs>
}

/** A User object */
export type UserRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserToRevisionsConnectionWhereArgs>
}

/** A User object */
export type UserRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Connection to User Nodes */
export type UserConnection = {
  /** A list of edges (relational context) between RootQuery and connected User Nodes */
  edges: Array<UserConnectionEdge>
  /** A list of connected User Nodes */
  nodes: Array<User>
  /** Information about pagination in a connection. */
  pageInfo: UserConnectionPageInfo
}

/** Edge between a Node and a connected User */
export type UserConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected User Node */
  node: User
}

/** Page Info on the connected UserConnectionEdge */
export type UserConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */
export enum UserNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The Email of the User */
  Email = 'EMAIL',
  /** The hashed Global ID */
  Id = 'ID',
  /** The slug of the User */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
  /** The username the User uses to login with */
  Username = 'USERNAME',
}

/** A user role object */
export type UserRole = Node & {
  __typename?: 'UserRole'
  /** The capabilities that belong to this role */
  capabilities?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  /** The display name of the role */
  displayName?: Maybe<Scalars['String']['output']>
  /** The globally unique identifier for the user role object. */
  id: Scalars['ID']['output']
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']['output']>
  /** The registered name of the role */
  name?: Maybe<Scalars['String']['output']>
}

/** Connection to UserRole Nodes */
export type UserRoleConnection = {
  /** A list of edges (relational context) between RootQuery and connected UserRole Nodes */
  edges: Array<UserRoleConnectionEdge>
  /** A list of connected UserRole Nodes */
  nodes: Array<UserRole>
  /** Information about pagination in a connection. */
  pageInfo: UserRoleConnectionPageInfo
}

/** Edge between a Node and a connected UserRole */
export type UserRoleConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected UserRole Node */
  node: UserRole
}

/** Page Info on the connected UserRoleConnectionEdge */
export type UserRoleConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** Names of available user roles */
export enum UserRoleEnum {
  /** User role with specific capabilities */
  Administrator = 'ADMINISTRATOR',
  /** User role with specific capabilities */
  Author = 'AUTHOR',
  /** User role with specific capabilities */
  Contributor = 'CONTRIBUTOR',
  /** User role with specific capabilities */
  Editor = 'EDITOR',
  /** User role with specific capabilities */
  SeoEditor = 'SEO_EDITOR',
  /** User role with specific capabilities */
  SeoManager = 'SEO_MANAGER',
  /** User role with specific capabilities */
  Subscriber = 'SUBSCRIBER',
}

/** Connection between the User type and the Comment type */
export type UserToCommentConnection = CommentConnection &
  Connection & {
    __typename?: 'UserToCommentConnection'
    /** Edges for the UserToCommentConnection connection */
    edges: Array<UserToCommentConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Comment>
    /** Information about pagination in a connection. */
    pageInfo: UserToCommentConnectionPageInfo
  }

/** An edge in a connection */
export type UserToCommentConnectionEdge = CommentConnectionEdge &
  Edge & {
    __typename?: 'UserToCommentConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Comment
  }

/** Page Info on the &quot;UserToCommentConnection&quot; */
export type UserToCommentConnectionPageInfo = CommentConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'UserToCommentConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the UserToCommentConnection connection */
export type UserToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']['input']>
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']['input']>
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']['input']>
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']['input']>
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']['input']>
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']['input']>
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']['input']>
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']['input']>
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']['input']>
}

/** Connection between the User type and the EnqueuedScript type */
export type UserToEnqueuedScriptConnection = Connection &
  EnqueuedScriptConnection & {
    __typename?: 'UserToEnqueuedScriptConnection'
    /** Edges for the UserToEnqueuedScriptConnection connection */
    edges: Array<UserToEnqueuedScriptConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<EnqueuedScript>
    /** Information about pagination in a connection. */
    pageInfo: UserToEnqueuedScriptConnectionPageInfo
  }

/** An edge in a connection */
export type UserToEnqueuedScriptConnectionEdge = Edge &
  EnqueuedScriptConnectionEdge & {
    __typename?: 'UserToEnqueuedScriptConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: EnqueuedScript
  }

/** Page Info on the &quot;UserToEnqueuedScriptConnection&quot; */
export type UserToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'UserToEnqueuedScriptConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Connection between the User type and the EnqueuedStylesheet type */
export type UserToEnqueuedStylesheetConnection = Connection &
  EnqueuedStylesheetConnection & {
    __typename?: 'UserToEnqueuedStylesheetConnection'
    /** Edges for the UserToEnqueuedStylesheetConnection connection */
    edges: Array<UserToEnqueuedStylesheetConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<EnqueuedStylesheet>
    /** Information about pagination in a connection. */
    pageInfo: UserToEnqueuedStylesheetConnectionPageInfo
  }

/** An edge in a connection */
export type UserToEnqueuedStylesheetConnectionEdge = Edge &
  EnqueuedStylesheetConnectionEdge & {
    __typename?: 'UserToEnqueuedStylesheetConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: EnqueuedStylesheet
  }

/** Page Info on the &quot;UserToEnqueuedStylesheetConnection&quot; */
export type UserToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'UserToEnqueuedStylesheetConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Connection between the User type and the mediaItem type */
export type UserToMediaItemConnection = Connection &
  MediaItemConnection & {
    __typename?: 'UserToMediaItemConnection'
    /** Edges for the UserToMediaItemConnection connection */
    edges: Array<UserToMediaItemConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<MediaItem>
    /** Information about pagination in a connection. */
    pageInfo: UserToMediaItemConnectionPageInfo
  }

/** An edge in a connection */
export type UserToMediaItemConnectionEdge = Edge &
  MediaItemConnectionEdge & {
    __typename?: 'UserToMediaItemConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: MediaItem
  }

/** Page Info on the &quot;UserToMediaItemConnection&quot; */
export type UserToMediaItemConnectionPageInfo = MediaItemConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'UserToMediaItemConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the UserToMediaItemConnection connection */
export type UserToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the User type and the page type */
export type UserToPageConnection = Connection &
  PageConnection & {
    __typename?: 'UserToPageConnection'
    /** Edges for the UserToPageConnection connection */
    edges: Array<UserToPageConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Page>
    /** Information about pagination in a connection. */
    pageInfo: UserToPageConnectionPageInfo
  }

/** An edge in a connection */
export type UserToPageConnectionEdge = Edge &
  PageConnectionEdge & {
    __typename?: 'UserToPageConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Page
  }

/** Page Info on the &quot;UserToPageConnection&quot; */
export type UserToPageConnectionPageInfo = PageConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'UserToPageConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the UserToPageConnection connection */
export type UserToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the User type and the post type */
export type UserToPostConnection = Connection &
  PostConnection & {
    __typename?: 'UserToPostConnection'
    /** Edges for the UserToPostConnection connection */
    edges: Array<UserToPostConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Post>
    /** Information about pagination in a connection. */
    pageInfo: UserToPostConnectionPageInfo
  }

/** An edge in a connection */
export type UserToPostConnectionEdge = Edge &
  PostConnectionEdge & {
    __typename?: 'UserToPostConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Post
  }

/** Page Info on the &quot;UserToPostConnection&quot; */
export type UserToPostConnectionPageInfo = PageInfo &
  PostConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'UserToPostConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the UserToPostConnection connection */
export type UserToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']['input']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']['input']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']['input']>
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']['input']>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the User type and the ContentNode type */
export type UserToRevisionsConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'UserToRevisionsConnection'
    /** Edges for the UserToRevisionsConnection connection */
    edges: Array<UserToRevisionsConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>
    /** Information about pagination in a connection. */
    pageInfo: UserToRevisionsConnectionPageInfo
  }

/** An edge in a connection */
export type UserToRevisionsConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'UserToRevisionsConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ContentNode
  }

/** Page Info on the &quot;UserToRevisionsConnection&quot; */
export type UserToRevisionsConnectionPageInfo = ContentNodeConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'UserToRevisionsConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Arguments for filtering the UserToRevisionsConnection connection */
export type UserToRevisionsConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the User type and the UserRole type */
export type UserToUserRoleConnection = Connection &
  UserRoleConnection & {
    __typename?: 'UserToUserRoleConnection'
    /** Edges for the UserToUserRoleConnection connection */
    edges: Array<UserToUserRoleConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<UserRole>
    /** Information about pagination in a connection. */
    pageInfo: UserToUserRoleConnectionPageInfo
  }

/** An edge in a connection */
export type UserToUserRoleConnectionEdge = Edge &
  UserRoleConnectionEdge & {
    __typename?: 'UserToUserRoleConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: UserRole
  }

/** Page Info on the &quot;UserToUserRoleConnection&quot; */
export type UserToUserRoleConnectionPageInfo = PageInfo &
  UserRoleConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'UserToUserRoleConnectionPageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']['output']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']['output']
    /** Raw schema for page */
    seo?: Maybe<SeoPostTypePageInfo>
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
  }

/** Field to order the connection by */
export enum UsersConnectionOrderbyEnum {
  /** Order by display name */
  DisplayName = 'DISPLAY_NAME',
  /** Order by email address */
  Email = 'EMAIL',
  /** Order by login */
  Login = 'LOGIN',
  /** Preserve the login order given in the LOGIN_IN array */
  LoginIn = 'LOGIN_IN',
  /** Order by nice name */
  NiceName = 'NICE_NAME',
  /** Preserve the nice name order given in the NICE_NAME_IN array */
  NiceNameIn = 'NICE_NAME_IN',
  /** Order by registration date */
  Registered = 'REGISTERED',
  /** Order by URL */
  Url = 'URL',
}

/** Options for ordering the connection */
export type UsersConnectionOrderbyInput = {
  /** The field name used to sort the results. */
  field: UsersConnectionOrderbyEnum
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>
}

/** Column used for searching for users. */
export enum UsersConnectionSearchColumnEnum {
  /** The user's email address. */
  Email = 'EMAIL',
  /** The globally unique ID. */
  Id = 'ID',
  /** The username the User uses to login with. */
  Login = 'LOGIN',
  /** A URL-friendly name for the user. The default is the user's username. */
  Nicename = 'NICENAME',
  /** The URL of the user's website. */
  Url = 'URL',
}

/** Information about pagination in a connection. */
export type WpPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** Provides access to fields of the &quot;Audio&quot; ACF Field Group via the &quot;audio&quot; field */
export type WithAcfAudio = {
  /** Fields of the Audio ACF Field Group */
  audio?: Maybe<Audio>
}

/** Provides access to fields of the &quot;Consultation&quot; ACF Field Group via the &quot;consultation&quot; field */
export type WithAcfConsultation = {
  /** Fields of the Consultation ACF Field Group */
  consultation?: Maybe<Consultation>
}

/** Provides access to fields of the &quot;Contacts&quot; ACF Field Group via the &quot;contacts&quot; field */
export type WithAcfContacts = {
  /** Fields of the Contacts ACF Field Group */
  contacts?: Maybe<Contacts>
}

/** Provides access to fields of the &quot;Content&quot; ACF Field Group via the &quot;content&quot; field */
export type WithAcfContent = {
  /** Fields of the Content ACF Field Group */
  content?: Maybe<Content>
}

/** Provides access to fields of the &quot;ContractOffer&quot; ACF Field Group via the &quot;contractOffer&quot; field */
export type WithAcfContractOffer = {
  /** Fields of the ContractOffer ACF Field Group */
  contractOffer?: Maybe<ContractOffer>
}

/** Provides access to fields of the &quot;Faq&quot; ACF Field Group via the &quot;faq&quot; field */
export type WithAcfFaq = {
  /** Fields of the Faq ACF Field Group */
  faq?: Maybe<Faq>
}

/** Provides access to fields of the &quot;Footer&quot; ACF Field Group via the &quot;footer&quot; field */
export type WithAcfFooter = {
  /** Fields of the Footer ACF Field Group */
  footer?: Maybe<Footer>
}

/** Provides access to fields of the &quot;Header&quot; ACF Field Group via the &quot;header&quot; field */
export type WithAcfHeader = {
  /** Fields of the Header ACF Field Group */
  header?: Maybe<Header>
}

/** Provides access to fields of the &quot;IndividualCourseData&quot; ACF Field Group via the &quot;individualCourseData&quot; field */
export type WithAcfIndividualCourseData = {
  /** Fields of the IndividualCourseData ACF Field Group */
  individualCourseData?: Maybe<IndividualCourseData>
}

/** Provides access to fields of the &quot;LearningProcess&quot; ACF Field Group via the &quot;learningProcess&quot; field */
export type WithAcfLearningProcess = {
  /** Fields of the LearningProcess ACF Field Group */
  learningProcess?: Maybe<LearningProcess>
}

/** Provides access to fields of the &quot;Main&quot; ACF Field Group via the &quot;main&quot; field */
export type WithAcfMain = {
  /** Fields of the Main ACF Field Group */
  main?: Maybe<Main>
}

/** Provides access to fields of the &quot;PrivacyPolicy&quot; ACF Field Group via the &quot;privacyPolicy&quot; field */
export type WithAcfPrivacyPolicy = {
  /** Fields of the PrivacyPolicy ACF Field Group */
  privacyPolicy?: Maybe<PrivacyPolicy>
}

/** Provides access to fields of the &quot;SiteSettings&quot; ACF Field Group via the &quot;siteSettings&quot; field */
export type WithAcfSiteSettings = {
  /** Fields of the SiteSettings ACF Field Group */
  siteSettings?: Maybe<SiteSettings>
}

/** Provides access to fields of the &quot;Students&quot; ACF Field Group via the &quot;students&quot; field */
export type WithAcfStudents = {
  /** Fields of the Students ACF Field Group */
  students?: Maybe<Students>
}

/** Provides access to fields of the &quot;Teacher&quot; ACF Field Group via the &quot;teacher&quot; field */
export type WithAcfTeacher = {
  /** Fields of the Teacher ACF Field Group */
  teacher?: Maybe<Teacher>
}

/** The writing setting type */
export type WritingSettings = {
  __typename?: 'WritingSettings'
  /** Рубрика для записей по умолчанию. */
  defaultCategory?: Maybe<Scalars['Int']['output']>
  /** Формат записей по умолчанию. */
  defaultPostFormat?: Maybe<Scalars['String']['output']>
  /** Преобразовывать смайлики наподобие :-) и :-P в картинки при показе. */
  useSmilies?: Maybe<Scalars['Boolean']['output']>
}

export type MyMutationMutationVariables = Exact<{
  formId?: InputMaybe<Scalars['Int']['input']>
  nameId?: InputMaybe<Scalars['Int']['input']>
  nameValue?: InputMaybe<Scalars['String']['input']>
  phoneId?: InputMaybe<Scalars['Int']['input']>
  phoneValue?: InputMaybe<Scalars['String']['input']>
  telegramId?: InputMaybe<Scalars['Int']['input']>
  telegramValue?: InputMaybe<Scalars['String']['input']>
}>

export type MyMutationMutation = {
  __typename?: 'RootMutation'
  submitForm?: {
    __typename?: 'SubmitFormPayload'
    message?: string | null
    success?: boolean | null
    errors?: Array<{
      __typename?: 'FieldError'
      fieldId: number
      message?: string | null
      slug?: string | null
    } | null> | null
  } | null
}

export type ConsultationFormQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type ConsultationFormQuery = {
  __typename?: 'RootQuery'
  form?: {
    __typename?: 'Form'
    id: string
    title?: string | null
    formId?: number | null
    fields?: { __typename?: 'FormToFormFieldConnection'; nodes: Array<never> } | null
  } | null
}

export type ConsultationQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type ConsultationQuery = {
  __typename?: 'RootQuery'
  generalFragment?: {
    __typename?: 'GeneralFragment'
    consultation?: {
      __typename?: 'Consultation'
      cta?: {
        __typename?: 'ConsultationCta'
        title?: string | null
        button?: string | null
        text?: {
          __typename?: 'ConsultationCtaText'
          beforeAccent?: string | null
          accent?: string | null
          afterAccent?: string | null
        } | null
      } | null
      modal?: {
        __typename?: 'ConsultationModal'
        title?: string | null
        subtitle?: string | null
        textForCheckbox?: string | null
      } | null
    } | null
  } | null
}

export type ContactsQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type ContactsQuery = {
  __typename?: 'RootQuery'
  generalFragment?: {
    __typename?: 'GeneralFragment'
    contacts?: {
      __typename?: 'Contacts'
      title?: string | null
      socials?: Array<{
        __typename?: 'ContactsSocials'
        title?: string | null
        link?: string | null
        content?: string | null
      } | null> | null
      background?: {
        __typename?: 'ContactsBackground'
        noise?: {
          __typename?: 'AcfMediaItemConnectionEdge'
          node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
        } | null
        mobile?: {
          __typename?: 'AcfMediaItemConnectionEdge'
          node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
        } | null
        desktop?: {
          __typename?: 'AcfMediaItemConnectionEdge'
          node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
        } | null
      } | null
    } | null
  } | null
}

export type ContractOfferQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type ContractOfferQuery = {
  __typename?: 'RootQuery'
  generalFragment?: {
    __typename?: 'GeneralFragment'
    contractOffer?: {
      __typename?: 'ContractOffer'
      title?: string | null
      subtitle?: string | null
      creationYear?: string | null
      points?: Array<{
        __typename?: 'ContractOfferPoints'
        title?: string | null
        subtitle?: string | null
        description?: string | null
      } | null> | null
      background?: {
        __typename?: 'ContractOfferBackground'
        desktopFooter?: {
          __typename?: 'AcfMediaItemConnectionEdge'
          node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
        } | null
        mobileFooter?: {
          __typename?: 'AcfMediaItemConnectionEdge'
          node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
        } | null
      } | null
    } | null
  } | null
}

export type FaqQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type FaqQuery = {
  __typename?: 'RootQuery'
  generalFragment?: {
    __typename?: 'GeneralFragment'
    faq?: {
      __typename?: 'Faq'
      content?: Array<{
        __typename?: 'FaqContent'
        answer?: string | null
        question?: string | null
      } | null> | null
    } | null
  } | null
}

export type FooterQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type FooterQuery = {
  __typename?: 'RootQuery'
  generalFragment?: {
    __typename?: 'GeneralFragment'
    footer?: {
      __typename?: 'Footer'
      email?: string | null
      logo?: {
        __typename?: 'AcfMediaItemConnectionEdge'
        node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
      } | null
      privacyPolicy?: {
        __typename?: 'FooterPrivacyPolicy'
        title?: string | null
        path?: string | null
      } | null
      courses?: {
        __typename?: 'AcfContentNodeConnection'
        nodes: Array<
          | {
              __typename?: 'Course'
              title?: string | null
              content?: { __typename?: 'Content'; path?: string | null } | null
            }
          | { __typename?: 'GeneralFragment' }
          | {
              __typename?: 'IndividualCourse'
              title?: string | null
              individualCourseData?: {
                __typename?: 'IndividualCourseData'
                path?: string | null
              } | null
            }
          | { __typename?: 'MediaItem' }
          | { __typename?: 'Page' }
          | { __typename?: 'Post' }
        >
      } | null
      socials?: Array<{
        __typename?: 'FooterSocials'
        title?: string | null
        link?: string | null
      } | null> | null
    } | null
  } | null
}

export type HeaderQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type HeaderQuery = {
  __typename?: 'RootQuery'
  generalFragment?: {
    __typename?: 'GeneralFragment'
    header?: {
      __typename?: 'Header'
      ctaButton?: string | null
      logo?: {
        __typename?: 'AcfMediaItemConnectionEdge'
        node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
      } | null
      dropdownList?: {
        __typename?: 'HeaderDropdownList'
        title?: string | null
        items?: {
          __typename?: 'AcfContentNodeConnection'
          nodes: Array<
            | {
                __typename?: 'Course'
                title?: string | null
                id: string
                content?: {
                  __typename?: 'Content'
                  path?: string | null
                  price?: {
                    __typename?: 'ContentPrice'
                    details?: {
                      __typename?: 'ContentPriceDetails'
                      levelsNumber?: number | null
                      monthsNumber?: number | null
                      videoTrainingsNumber?: number | null
                    } | null
                  } | null
                } | null
              }
            | { __typename?: 'GeneralFragment'; id: string }
            | {
                __typename?: 'IndividualCourse'
                title?: string | null
                id: string
                individualCourseData?: {
                  __typename?: 'IndividualCourseData'
                  path?: string | null
                  price?: {
                    __typename?: 'IndividualCourseDataPrice'
                    level?: number | null
                    bonuses?: string | null
                    liveTrainingsNumber?: string | null
                    videoTrainingsNumber?: number | null
                    courseLengthInMonths?: number | null
                  } | null
                } | null
              }
            | { __typename?: 'MediaItem'; id: string }
            | { __typename?: 'Page'; id: string }
            | { __typename?: 'Post'; id: string }
          >
        } | null
      } | null
      navigationElements?: Array<{
        __typename?: 'HeaderNavigationElements'
        title?: string | null
        path?: string | null
      } | null> | null
    } | null
  } | null
}

export type MainPageQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type MainPageQuery = {
  __typename?: 'RootQuery'
  generalFragment?: {
    __typename?: 'GeneralFragment'
    main?: {
      __typename?: 'Main'
      hero?: {
        __typename?: 'MainHero'
        title?: string | null
        subtitle?: string | null
        scrollButton?: string | null
        about?: string | null
        benefits?: Array<{ __typename?: 'MainHeroBenefits'; benefit?: string | null } | null> | null
      } | null
      runningLine?: {
        __typename?: 'MainRunningLine'
        content?: Array<{
          __typename?: 'MainRunningLineContent'
          text?: string | null
        } | null> | null
        icon?: {
          __typename?: 'AcfMediaItemConnectionEdge'
          node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
        } | null
      } | null
      chooseCourse?: {
        __typename?: 'MainChooseCourse'
        title?: string | null
        courses?: Array<{
          __typename?: 'MainChooseCourseCourses'
          description?: string | null
          course?: {
            __typename?: 'AcfContentNodeConnection'
            nodes: Array<
              | {
                  __typename?: 'Course'
                  id: string
                  title?: string | null
                  content?: {
                    __typename?: 'Content'
                    path?: string | null
                    price?: {
                      __typename?: 'ContentPrice'
                      priceMonthly?: number | null
                      details?: {
                        __typename?: 'ContentPriceDetails'
                        videoTrainingsNumber?: number | null
                        monthsNumber?: number | null
                        levelsNumber?: number | null
                      } | null
                    } | null
                  } | null
                }
              | { __typename?: 'GeneralFragment' }
              | {
                  __typename?: 'IndividualCourse'
                  id: string
                  title?: string | null
                  individualCourseData?: {
                    __typename?: 'IndividualCourseData'
                    path?: string | null
                    price?: {
                      __typename?: 'IndividualCourseDataPrice'
                      monthlyPrice?: number | null
                      level?: number | null
                      videoTrainingsNumber?: number | null
                      liveTrainingsNumber?: string | null
                      bonuses?: string | null
                      courseLengthInMonths?: number | null
                    } | null
                  } | null
                }
              | { __typename?: 'MediaItem' }
              | { __typename?: 'Page' }
              | { __typename?: 'Post' }
            >
          } | null
        } | null> | null
      } | null
      individualLesson?: {
        __typename?: 'MainIndividualLesson'
        title?: string | null
        cta?: {
          __typename?: 'MainIndividualLessonCta'
          button?: string | null
          description?: string | null
          price?: string | null
          title?: string | null
        } | null
        details?: Array<{
          __typename?: 'MainIndividualLessonDetails'
          description?: string | null
          title?: string | null
        } | null> | null
      } | null
      slider?: {
        __typename?: 'MainSlider'
        title?: string | null
        upperslider?: Array<{
          __typename?: 'MainSliderUpperslider'
          text?: string | null
          image?: {
            __typename?: 'AcfMediaItemConnectionEdge'
            node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
          } | null
        } | null> | null
        lowerslider?: Array<{
          __typename?: 'MainSliderLowerslider'
          text?: string | null
          image?: {
            __typename?: 'AcfMediaItemConnectionEdge'
            node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
          } | null
        } | null> | null
      } | null
      students?: {
        __typename?: 'MainStudents'
        title?: string | null
        description?: string | null
        cta?: string | null
        cards?: Array<{
          __typename?: 'MainStudentsCards'
          firstBadge?: string | null
          secondBadge?: string | null
          title?: string | null
          description?: string | null
          leftIcon?: {
            __typename?: 'AcfMediaItemConnectionEdge'
            node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
          } | null
          rightIcon?: {
            __typename?: 'AcfMediaItemConnectionEdge'
            node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
          } | null
        } | null> | null
      } | null
      background?: {
        __typename?: 'MainBackground'
        noise?: {
          __typename?: 'AcfMediaItemConnectionEdge'
          node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
        } | null
        desktop?: {
          __typename?: 'MainBackgroundDesktop'
          footer?: {
            __typename?: 'AcfMediaItemConnectionEdge'
            node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
          } | null
          hero?: {
            __typename?: 'AcfMediaItemConnectionEdge'
            node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
          } | null
          teacher?: {
            __typename?: 'AcfMediaItemConnectionEdge'
            node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
          } | null
        } | null
        mobile?: {
          __typename?: 'MainBackgroundMobile'
          footer?: {
            __typename?: 'AcfMediaItemConnectionEdge'
            node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
          } | null
          hero?: {
            __typename?: 'AcfMediaItemConnectionEdge'
            node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
          } | null
          teacher?: {
            __typename?: 'AcfMediaItemConnectionEdge'
            node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type PaymentSettingsQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type PaymentSettingsQuery = {
  __typename?: 'RootQuery'
  generalFragment?: {
    __typename?: 'GeneralFragment'
    siteSettings?: {
      __typename?: 'SiteSettings'
      paymentSettings?: {
        __typename?: 'SiteSettingsPaymentSettings'
        storeID?: string | null
      } | null
    } | null
  } | null
}

export type PrivacyPolicyQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type PrivacyPolicyQuery = {
  __typename?: 'RootQuery'
  generalFragment?: {
    __typename?: 'GeneralFragment'
    privacyPolicy?: {
      __typename?: 'PrivacyPolicy'
      title?: string | null
      content?: Array<{
        __typename?: 'PrivacyPolicyContent'
        title?: string | null
        description?: string | null
      } | null> | null
    } | null
  } | null
}

export type ProcessEducationQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type ProcessEducationQuery = {
  __typename?: 'RootQuery'
  generalFragment?: {
    __typename?: 'GeneralFragment'
    learningProcess?: {
      __typename?: 'LearningProcess'
      title?: string | null
      content?: Array<{
        __typename?: 'LearningProcessContent'
        title?: string | null
        text?: string | null
        picture?: {
          __typename?: 'LearningProcessContentPicture'
          alt?: string | null
          image?: {
            __typename?: 'AcfMediaItemConnectionEdge'
            node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
          } | null
        } | null
      } | null> | null
    } | null
  } | null
}

export type SongQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type SongQuery = {
  __typename?: 'RootQuery'
  generalFragment?: {
    __typename?: 'GeneralFragment'
    audio?: {
      __typename?: 'Audio'
      song?: {
        __typename?: 'AcfMediaItemConnectionEdge'
        node: { __typename?: 'MediaItem'; mediaItemUrl?: string | null }
      } | null
    } | null
  } | null
}

export type StudentsQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type StudentsQuery = {
  __typename?: 'RootQuery'
  generalFragment?: {
    __typename?: 'GeneralFragment'
    students?: {
      __typename?: 'Students'
      title?: string | null
      description?: string | null
      list?: Array<{
        __typename?: 'StudentsList'
        title?: string | null
        firstBadge?: string | null
        secondBadge?: string | null
      } | null> | null
    } | null
  } | null
}

export type TeacherQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type TeacherQuery = {
  __typename?: 'RootQuery'
  generalFragment?: {
    __typename?: 'GeneralFragment'
    teacher?: {
      __typename?: 'Teacher'
      title?: string | null
      description?: string | null
      subtitle?: string | null
      gallery?: Array<{
        __typename?: 'TeacherGallery'
        alt?: string | null
        image?: {
          __typename?: 'AcfMediaItemConnectionEdge'
          node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
        } | null
      } | null> | null
      statistics?: Array<{
        __typename?: 'TeacherStatistics'
        text?: string | null
        number?: number | null
      } | null> | null
      education?: {
        __typename?: 'TeacherEducation'
        title?: string | null
        list?: Array<{ __typename?: 'TeacherEducationList'; element?: string | null } | null> | null
      } | null
    } | null
  } | null
}

export type IndividualCourseQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type IndividualCourseQuery = {
  __typename?: 'RootQuery'
  individualCourse?: {
    __typename?: 'IndividualCourse'
    content?: string | null
    title?: string | null
    individualCourseData?: {
      __typename?: 'IndividualCourseData'
      aboutCourse?: string | null
      process?: {
        __typename?: 'IndividualCourseDataProcess'
        step?: Array<{
          __typename?: 'IndividualCourseDataProcessStep'
          description?: string | null
          title?: string | null
        } | null> | null
      } | null
      background?: {
        __typename?: 'IndividualCourseDataBackground'
        noise?: {
          __typename?: 'AcfMediaItemConnectionEdge'
          node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
        } | null
        courseProgram?: {
          __typename?: 'AcfMediaItemConnectionEdge'
          node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
        } | null
        desktop?: {
          __typename?: 'IndividualCourseDataBackgroundDesktop'
          footer?: {
            __typename?: 'AcfMediaItemConnectionEdge'
            node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
          } | null
          hero?: {
            __typename?: 'AcfMediaItemConnectionEdge'
            node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
          } | null
          teacher?: {
            __typename?: 'AcfMediaItemConnectionEdge'
            node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
          } | null
        } | null
        mobile?: {
          __typename?: 'IndividualCourseDataBackgroundMobile'
          footer?: {
            __typename?: 'AcfMediaItemConnectionEdge'
            node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
          } | null
          hero?: {
            __typename?: 'AcfMediaItemConnectionEdge'
            node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
          } | null
          teacher?: {
            __typename?: 'AcfMediaItemConnectionEdge'
            node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
          } | null
        } | null
      } | null
      price?: {
        __typename?: 'IndividualCourseDataPrice'
        bonuses?: string | null
        cta?: string | null
        courseLengthInMonths?: number | null
        discount?: number | null
        fullPrice?: number | null
        liveTrainingsNumber?: string | null
        monthlyPrice?: number | null
        oldPrice?: string | null
        title?: string | null
        videoTrainingsNumber?: number | null
      } | null
      hero?: {
        __typename?: 'IndividualCourseDataHero'
        runningLine?: string | null
        cta?: string | null
        benefits?: Array<{
          __typename?: 'IndividualCourseDataHeroBenefits'
          content?: string | null
        } | null> | null
        courseConditions?: Array<{
          __typename?: 'IndividualCourseDataHeroCourseConditions'
          description?: string | null
          number?: number | null
        } | null> | null
      } | null
    } | null
  } | null
}

export type GetOpeningTheRhythmQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type GetOpeningTheRhythmQuery = {
  __typename?: 'RootQuery'
  course?: {
    __typename?: 'Course'
    content?: {
      __typename?: 'Content'
      payment?: {
        __typename?: 'ContentPayment'
        title?: string | null
        benefit?: string | null
        courses?: {
          __typename?: 'AcfContentNodeConnection'
          nodes: Array<
            | { __typename?: 'Course' }
            | { __typename?: 'GeneralFragment' }
            | {
                __typename?: 'IndividualCourse'
                title?: string | null
                id: string
                individualCourseData?: {
                  __typename?: 'IndividualCourseData'
                  aboutCourse?: string | null
                  price?: {
                    __typename?: 'IndividualCourseDataPrice'
                    fullPrice?: number | null
                    courseLengthInMonths?: number | null
                  } | null
                } | null
              }
            | { __typename?: 'MediaItem' }
            | { __typename?: 'Page' }
            | { __typename?: 'Post' }
          >
        } | null
      } | null
      hero?: {
        __typename?: 'ContentHero'
        title?: string | null
        description?: string | null
        runningLine?: string | null
        cta?: {
          __typename?: 'ContentHeroCta'
          title?: string | null
          tagsCloud?: Array<{
            __typename?: 'ContentHeroCtaTagsCloud'
            tag?: string | null
          } | null> | null
        } | null
      } | null
      cta?: {
        __typename?: 'ContentCta'
        title?: string | null
        subtitle?: string | null
        skillsImage?: {
          __typename?: 'ContentCtaSkillsImage'
          wideComposition?: {
            __typename?: 'AcfMediaItemConnectionEdge'
            node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
          } | null
          compactComposition?: {
            __typename?: 'AcfMediaItemConnectionEdge'
            node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
          } | null
        } | null
      } | null
      details?: {
        __typename?: 'ContentDetails'
        title?: string | null
        description?: string | null
        levels?: Array<{
          __typename?: 'ContentDetailsLevels'
          target?: string | null
          tooltip?: string | null
          level?: string | null
          content?: string | null
          lengthOfCourseInMonths?: number | null
          liveTrainingsNumber?: number | null
          videoTrainingsNumber?: number | null
        } | null> | null
      } | null
      price?: {
        __typename?: 'ContentPrice'
        title?: string | null
        priceMonthly?: number | null
        priceFull?: number | null
        discount?: number | null
        details?: {
          __typename?: 'ContentPriceDetails'
          videoTrainingsNumber?: number | null
          levelsNumber?: number | null
          monthsNumber?: number | null
        } | null
      } | null
      background?: {
        __typename?: 'ContentBackground'
        noise?: {
          __typename?: 'AcfMediaItemConnectionEdge'
          node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
        } | null
        desktop?: {
          __typename?: 'ContentBackgroundDesktop'
          hero?: {
            __typename?: 'AcfMediaItemConnectionEdge'
            node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
          } | null
          teacher?: {
            __typename?: 'AcfMediaItemConnectionEdge'
            node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
          } | null
          footer?: {
            __typename?: 'AcfMediaItemConnectionEdge'
            node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
          } | null
        } | null
        mobile?: {
          __typename?: 'ContentBackgroundMobile'
          hero?: {
            __typename?: 'AcfMediaItemConnectionEdge'
            node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
          } | null
          teacher?: {
            __typename?: 'AcfMediaItemConnectionEdge'
            node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
          } | null
          footer?: {
            __typename?: 'AcfMediaItemConnectionEdge'
            node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type GetPreviewQueryVariables = Exact<{
  uri: Scalars['String']['input']
}>

export type GetPreviewQuery = {
  __typename?: 'RootQuery'
  mediaItemBy?: { __typename?: 'MediaItem'; sourceUrl?: string | null } | null
}

export type GetSeoQueryVariables = Exact<{
  id: Scalars['ID']['input']
  uriDefaultIcon?: InputMaybe<Scalars['String']['input']>
  uriAppleIcon?: InputMaybe<Scalars['String']['input']>
}>

export type GetSeoQuery = {
  __typename?: 'RootQuery'
  defaultIcon?: { __typename?: 'MediaItem'; mediaItemUrl?: string | null } | null
  appleIcon?: { __typename?: 'MediaItem'; mediaItemUrl?: string | null } | null
  page?: {
    __typename?: 'Page'
    seo?: {
      __typename?: 'PostTypeSEO'
      metaDesc?: string | null
      focuskw?: string | null
      opengraphType?: string | null
      opengraphTitle?: string | null
      opengraphDescription?: string | null
      opengraphUrl?: string | null
      opengraphSiteName?: string | null
      opengraphModifiedTime?: string | null
      twitterDescription?: string | null
      twitterTitle?: string | null
      title?: string | null
      opengraphImage?: { __typename?: 'MediaItem'; mediaItemUrl?: string | null } | null
      twitterImage?: { __typename?: 'MediaItem'; sourceUrl?: string | null } | null
      breadcrumbs?: Array<{
        __typename?: 'SEOPostTypeBreadcrumbs'
        text?: string | null
        url?: string | null
      } | null> | null
    } | null
  } | null
}

export const MyMutationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'MyMutation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'formId' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'nameId' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'nameValue' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'phoneId' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'phoneValue' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'telegramId' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'telegramValue' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'submitForm' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'formId' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'formId' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'data' },
                      value: {
                        kind: 'ListValue',
                        values: [
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'id' },
                                value: {
                                  kind: 'Variable',
                                  name: { kind: 'Name', value: 'nameId' },
                                },
                              },
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'value' },
                                value: {
                                  kind: 'Variable',
                                  name: { kind: 'Name', value: 'nameValue' },
                                },
                              },
                            ],
                          },
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'id' },
                                value: {
                                  kind: 'Variable',
                                  name: { kind: 'Name', value: 'phoneId' },
                                },
                              },
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'value' },
                                value: {
                                  kind: 'Variable',
                                  name: { kind: 'Name', value: 'phoneValue' },
                                },
                              },
                            ],
                          },
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'id' },
                                value: {
                                  kind: 'Variable',
                                  name: { kind: 'Name', value: 'telegramId' },
                                },
                              },
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'value' },
                                value: {
                                  kind: 'Variable',
                                  name: { kind: 'Name', value: 'telegramValue' },
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'errors' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'fieldId' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MyMutationMutation, MyMutationMutationVariables>
export const ConsultationFormDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ConsultationForm' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'form' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'formId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fields' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nodes' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'fieldId' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ConsultationFormQuery, ConsultationFormQueryVariables>
export const ConsultationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Consultation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generalFragment' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'consultation' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cta' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'button' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'text' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'beforeAccent' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'accent' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'afterAccent' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'modal' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'textForCheckbox' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ConsultationQuery, ConsultationQueryVariables>
export const ContactsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Contacts' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generalFragment' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contacts' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'socials' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'link' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'background' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'noise' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'node' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'sourceUrl' },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'mobile' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'node' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'sourceUrl' },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'desktop' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'node' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'sourceUrl' },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ContactsQuery, ContactsQueryVariables>
export const ContractOfferDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ContractOffer' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generalFragment' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contractOffer' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'creationYear' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'points' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'background' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'desktopFooter' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'node' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'sourceUrl' },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'mobileFooter' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'node' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'sourceUrl' },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ContractOfferQuery, ContractOfferQueryVariables>
export const FaqDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Faq' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generalFragment' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'faq' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'content' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'answer' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'question' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FaqQuery, FaqQueryVariables>
export const FooterDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Footer' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generalFragment' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'footer' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'logo' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'node' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'sourceUrl' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'privacyPolicy' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'path' } },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'courses' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                      kind: 'NamedType',
                                      name: { kind: 'Name', value: 'Course' },
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'content' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'path' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                      kind: 'NamedType',
                                      name: { kind: 'Name', value: 'IndividualCourse' },
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'individualCourseData' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'path' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'socials' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'link' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FooterQuery, FooterQueryVariables>
export const HeaderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Header' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generalFragment' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'header' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'logo' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'node' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'sourceUrl' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'dropdownList' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'nodes' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'InlineFragment',
                                          typeCondition: {
                                            kind: 'NamedType',
                                            name: { kind: 'Name', value: 'Course' },
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'title' },
                                              },
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'content' },
                                                selectionSet: {
                                                  kind: 'SelectionSet',
                                                  selections: [
                                                    {
                                                      kind: 'Field',
                                                      name: { kind: 'Name', value: 'path' },
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: { kind: 'Name', value: 'price' },
                                                      selectionSet: {
                                                        kind: 'SelectionSet',
                                                        selections: [
                                                          {
                                                            kind: 'Field',
                                                            name: {
                                                              kind: 'Name',
                                                              value: 'details',
                                                            },
                                                            selectionSet: {
                                                              kind: 'SelectionSet',
                                                              selections: [
                                                                {
                                                                  kind: 'Field',
                                                                  name: {
                                                                    kind: 'Name',
                                                                    value: 'levelsNumber',
                                                                  },
                                                                },
                                                                {
                                                                  kind: 'Field',
                                                                  name: {
                                                                    kind: 'Name',
                                                                    value: 'monthsNumber',
                                                                  },
                                                                },
                                                                {
                                                                  kind: 'Field',
                                                                  name: {
                                                                    kind: 'Name',
                                                                    value: 'videoTrainingsNumber',
                                                                  },
                                                                },
                                                              ],
                                                            },
                                                          },
                                                        ],
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'id' },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: 'InlineFragment',
                                          typeCondition: {
                                            kind: 'NamedType',
                                            name: { kind: 'Name', value: 'IndividualCourse' },
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'title' },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'individualCourseData',
                                                },
                                                selectionSet: {
                                                  kind: 'SelectionSet',
                                                  selections: [
                                                    {
                                                      kind: 'Field',
                                                      name: { kind: 'Name', value: 'path' },
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: { kind: 'Name', value: 'price' },
                                                      selectionSet: {
                                                        kind: 'SelectionSet',
                                                        selections: [
                                                          {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'level' },
                                                          },
                                                          {
                                                            kind: 'Field',
                                                            name: {
                                                              kind: 'Name',
                                                              value: 'bonuses',
                                                            },
                                                          },
                                                          {
                                                            kind: 'Field',
                                                            name: {
                                                              kind: 'Name',
                                                              value: 'liveTrainingsNumber',
                                                            },
                                                          },
                                                          {
                                                            kind: 'Field',
                                                            name: {
                                                              kind: 'Name',
                                                              value: 'videoTrainingsNumber',
                                                            },
                                                          },
                                                          {
                                                            kind: 'Field',
                                                            name: {
                                                              kind: 'Name',
                                                              value: 'courseLengthInMonths',
                                                            },
                                                          },
                                                        ],
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'navigationElements' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'path' } },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'ctaButton' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HeaderQuery, HeaderQueryVariables>
export const MainPageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'MainPage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generalFragment' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'main' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hero' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'scrollButton' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'about' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'benefits' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'benefit' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'runningLine' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'content' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'icon' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'node' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'sourceUrl' },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'chooseCourse' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'courses' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'course' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'nodes' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'InlineFragment',
                                                typeCondition: {
                                                  kind: 'NamedType',
                                                  name: { kind: 'Name', value: 'Course' },
                                                },
                                                selectionSet: {
                                                  kind: 'SelectionSet',
                                                  selections: [
                                                    {
                                                      kind: 'Field',
                                                      name: { kind: 'Name', value: 'id' },
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: { kind: 'Name', value: 'title' },
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: { kind: 'Name', value: 'content' },
                                                      selectionSet: {
                                                        kind: 'SelectionSet',
                                                        selections: [
                                                          {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'price' },
                                                            selectionSet: {
                                                              kind: 'SelectionSet',
                                                              selections: [
                                                                {
                                                                  kind: 'Field',
                                                                  name: {
                                                                    kind: 'Name',
                                                                    value: 'priceMonthly',
                                                                  },
                                                                },
                                                                {
                                                                  kind: 'Field',
                                                                  name: {
                                                                    kind: 'Name',
                                                                    value: 'details',
                                                                  },
                                                                  selectionSet: {
                                                                    kind: 'SelectionSet',
                                                                    selections: [
                                                                      {
                                                                        kind: 'Field',
                                                                        name: {
                                                                          kind: 'Name',
                                                                          value:
                                                                            'videoTrainingsNumber',
                                                                        },
                                                                      },
                                                                      {
                                                                        kind: 'Field',
                                                                        name: {
                                                                          kind: 'Name',
                                                                          value: 'monthsNumber',
                                                                        },
                                                                      },
                                                                      {
                                                                        kind: 'Field',
                                                                        name: {
                                                                          kind: 'Name',
                                                                          value: 'levelsNumber',
                                                                        },
                                                                      },
                                                                    ],
                                                                  },
                                                                },
                                                              ],
                                                            },
                                                          },
                                                          {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'path' },
                                                          },
                                                        ],
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                              {
                                                kind: 'InlineFragment',
                                                typeCondition: {
                                                  kind: 'NamedType',
                                                  name: { kind: 'Name', value: 'IndividualCourse' },
                                                },
                                                selectionSet: {
                                                  kind: 'SelectionSet',
                                                  selections: [
                                                    {
                                                      kind: 'Field',
                                                      name: { kind: 'Name', value: 'id' },
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: { kind: 'Name', value: 'title' },
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: 'individualCourseData',
                                                      },
                                                      selectionSet: {
                                                        kind: 'SelectionSet',
                                                        selections: [
                                                          {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'price' },
                                                            selectionSet: {
                                                              kind: 'SelectionSet',
                                                              selections: [
                                                                {
                                                                  kind: 'Field',
                                                                  name: {
                                                                    kind: 'Name',
                                                                    value: 'monthlyPrice',
                                                                  },
                                                                },
                                                                {
                                                                  kind: 'Field',
                                                                  name: {
                                                                    kind: 'Name',
                                                                    value: 'level',
                                                                  },
                                                                },
                                                                {
                                                                  kind: 'Field',
                                                                  name: {
                                                                    kind: 'Name',
                                                                    value: 'videoTrainingsNumber',
                                                                  },
                                                                },
                                                                {
                                                                  kind: 'Field',
                                                                  name: {
                                                                    kind: 'Name',
                                                                    value: 'liveTrainingsNumber',
                                                                  },
                                                                },
                                                                {
                                                                  kind: 'Field',
                                                                  name: {
                                                                    kind: 'Name',
                                                                    value: 'bonuses',
                                                                  },
                                                                },
                                                                {
                                                                  kind: 'Field',
                                                                  name: {
                                                                    kind: 'Name',
                                                                    value: 'courseLengthInMonths',
                                                                  },
                                                                },
                                                              ],
                                                            },
                                                          },
                                                          {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'path' },
                                                          },
                                                        ],
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'individualLesson' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'cta' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'button' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                ],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'details' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'slider' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'upperslider' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'image' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'sourceUrl' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'lowerslider' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'image' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'sourceUrl' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'students' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'cta' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'cards' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'leftIcon' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'sourceUrl' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'rightIcon' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'sourceUrl' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  { kind: 'Field', name: { kind: 'Name', value: 'firstBadge' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'secondBadge' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'background' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'noise' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'node' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'sourceUrl' },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'desktop' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'footer' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'sourceUrl' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'hero' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'sourceUrl' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'teacher' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'sourceUrl' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'mobile' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'footer' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'sourceUrl' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'hero' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'sourceUrl' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'teacher' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'sourceUrl' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MainPageQuery, MainPageQueryVariables>
export const PaymentSettingsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PaymentSettings' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generalFragment' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'siteSettings' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'paymentSettings' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'storeID' } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PaymentSettingsQuery, PaymentSettingsQueryVariables>
export const PrivacyPolicyDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PrivacyPolicy' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generalFragment' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'privacyPolicy' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'content' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PrivacyPolicyQuery, PrivacyPolicyQueryVariables>
export const ProcessEducationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ProcessEducation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generalFragment' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'learningProcess' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'content' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'picture' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'image' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'sourceUrl' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProcessEducationQuery, ProcessEducationQueryVariables>
export const SongDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Song' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generalFragment' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'audio' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'song' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'node' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'mediaItemUrl' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SongQuery, SongQueryVariables>
export const StudentsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Students' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generalFragment' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'students' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'list' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'firstBadge' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'secondBadge' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<StudentsQuery, StudentsQueryVariables>
export const TeacherDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Teacher' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generalFragment' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'teacher' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'gallery' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'image' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'node' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'sourceUrl' },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'statistics' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'number' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'education' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'list' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'element' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TeacherQuery, TeacherQueryVariables>
export const IndividualCourseDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'IndividualCourse' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'individualCourse' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'individualCourseData' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'aboutCourse' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'process' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'step' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'background' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'noise' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'node' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'sourceUrl' },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'courseProgram' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'node' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'sourceUrl' },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'desktop' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'footer' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'sourceUrl' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'hero' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'sourceUrl' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'teacher' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'sourceUrl' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'mobile' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'footer' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'sourceUrl' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'hero' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'sourceUrl' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'teacher' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'sourceUrl' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'price' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'bonuses' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'cta' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'courseLengthInMonths' },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'discount' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'fullPrice' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'liveTrainingsNumber' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'monthlyPrice' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'oldPrice' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'videoTrainingsNumber' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hero' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'benefits' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                                ],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'runningLine' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'courseConditions' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'number' } },
                                ],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'cta' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<IndividualCourseQuery, IndividualCourseQueryVariables>
export const GetOpeningTheRhythmDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetOpeningTheRhythm' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'course' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'content' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'payment' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'benefit' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'courses' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'nodes' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'InlineFragment',
                                          typeCondition: {
                                            kind: 'NamedType',
                                            name: { kind: 'Name', value: 'IndividualCourse' },
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'title' },
                                              },
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'id' },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'individualCourseData',
                                                },
                                                selectionSet: {
                                                  kind: 'SelectionSet',
                                                  selections: [
                                                    {
                                                      kind: 'Field',
                                                      name: { kind: 'Name', value: 'aboutCourse' },
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: { kind: 'Name', value: 'price' },
                                                      selectionSet: {
                                                        kind: 'SelectionSet',
                                                        selections: [
                                                          {
                                                            kind: 'Field',
                                                            name: {
                                                              kind: 'Name',
                                                              value: 'fullPrice',
                                                            },
                                                          },
                                                          {
                                                            kind: 'Field',
                                                            name: {
                                                              kind: 'Name',
                                                              value: 'courseLengthInMonths',
                                                            },
                                                          },
                                                        ],
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hero' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'runningLine' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'cta' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'tagsCloud' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'tag' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cta' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'skillsImage' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'wideComposition' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'sourceUrl' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'compactComposition' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'sourceUrl' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'details' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'levels' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'target' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'tooltip' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'level' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'lengthOfCourseInMonths' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'liveTrainingsNumber' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'videoTrainingsNumber' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'price' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'priceMonthly' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'priceFull' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'discount' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'details' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'videoTrainingsNumber' },
                                  },
                                  { kind: 'Field', name: { kind: 'Name', value: 'levelsNumber' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'monthsNumber' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'background' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'noise' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'node' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'sourceUrl' },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'desktop' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'hero' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'sourceUrl' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'teacher' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'sourceUrl' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'footer' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'sourceUrl' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'mobile' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'hero' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'sourceUrl' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'teacher' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'sourceUrl' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'footer' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'node' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'sourceUrl' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetOpeningTheRhythmQuery, GetOpeningTheRhythmQueryVariables>
export const GetPreviewDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetPreview' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'uri' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'mediaItemBy' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'uri' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'uri' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'sourceUrl' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPreviewQuery, GetPreviewQueryVariables>
export const GetSeoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetSeo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'uriDefaultIcon' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'uriAppleIcon' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'defaultIcon' },
            name: { kind: 'Name', value: 'mediaItemBy' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'uri' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'uriDefaultIcon' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'mediaItemUrl' } }],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'appleIcon' },
            name: { kind: 'Name', value: 'mediaItemBy' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'uri' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'uriAppleIcon' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'mediaItemUrl' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'page' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'seo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'metaDesc' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'focuskw' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'opengraphType' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'opengraphTitle' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'opengraphDescription' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'opengraphUrl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'opengraphSiteName' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'opengraphModifiedTime' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'opengraphSiteName' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'opengraphImage' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'mediaItemUrl' } },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'twitterDescription' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'twitterTitle' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'twitterImage' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'sourceUrl' } },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'breadcrumbs' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSeoQuery, GetSeoQueryVariables>
