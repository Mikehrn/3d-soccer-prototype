"use strict"

import development from "./webpack.config.dev.babel"
import production from "./webpack.config.prod.babel"

let conf = null

console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === 'development') {
  conf = development
}
if(process.env.NODE_ENV === 'production') {
  conf = production
}

export default conf