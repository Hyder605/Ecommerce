import { type SchemaTypeDefinition } from 'sanity'
import { productSanity } from './product'
import { category } from './category'
import { HeroSecSlide } from './HeroSecSlide'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSanity,category,HeroSecSlide],
}
