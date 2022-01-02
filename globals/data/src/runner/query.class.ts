import { executeQuery }    from '../helpers'
import { extractUrl }      from '../helpers'
import { clearParagraphs } from '../helpers'
import { sortByOrder }     from '../helpers'

export class Query {
  private accumulator: any
  private readonly NODES: string = 'nodes'
  private readonly contentFields: string[] = ['content', 'title']

  constructor(private readonly QUERY) {}

  private check(prop: string) {
    return this.accumulator && this.accumulator[prop]
  }

  private normalizeResult() {
    if (typeof this.accumulator === 'object') {
      if (Array.isArray(this.accumulator)) {
        this.accumulator = this.accumulator.map((node) => clearParagraphs(node, this.contentFields))
      } else {
        this.accumulator = clearParagraphs(this.accumulator, this.contentFields)
      }
    }
  }

  private url() {
    return extractUrl(this.accumulator)
  }

  private alt() {
    if (this.check('altText')) return this.accumulator.altText
    return ''
  }

  execute() {
    this.accumulator = executeQuery(this.QUERY)
    return this
  }

  name(name: string) {
    if (this.check(name)) this.accumulator = this.accumulator[name]
    return this
  }

  node() {
    if (this.check(this.NODES)) this.accumulator = this.accumulator[this.NODES][0]
    return this
  }

  nodes() {
    if (this.check(this.NODES)) this.accumulator = this.accumulator[this.NODES]
    else this.accumulator = []
    return this
  }

  sortByOrder() {
    if (Array.isArray(this.accumulator)) this.accumulator = sortByOrder(this.accumulator)
    return this
  }

  image() {
    this.accumulator = {
      url: this.url(),
      alt: this.alt(),
    }
    return this
  }

  end() {
    this.normalizeResult()
    return this.accumulator
  }
}
