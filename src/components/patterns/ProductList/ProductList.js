import React from 'react'

function ProductList({status, ...otherProps}) {
  if(status === statusTypes.loading){
    return <Loading/>
  }
  if(status === statusTypes.errored){
    return <Error message="Failed to load data"/>
  }
  return (
    //standard output when data present.
  )
}

export const statusTypes = {
    loading: "loading",
    errored: "errored",
    loaded: "loaded"
};

export default ProductList