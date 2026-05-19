"use clied"

import { use } from "react"

export default  function BlogSlugsCatchAllRoute
({
    params
}:{
    params:Promise<{slugs: string[]}>
}){
    const {slugs} = use(params)
    return(
        <h1>My blogs catch-all: {slugs}</h1>
    )
}