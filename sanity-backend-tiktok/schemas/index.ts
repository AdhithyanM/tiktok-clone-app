import post from './post'
import user from './user'
import comment from './comment'
import postedBy from './postedBy'
import {createSchema} from 'sanity'

export const schemaTypes = [post, user, comment, postedBy]

// now sanity will read our schemas and populate them inside our sanity studio
export default createSchema({
  name: 'default',
  types: schemaTypes,
})
