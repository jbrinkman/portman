import { PostmanMappedOperation } from 'src/postman'
import { OverwriteRequestConfig } from 'src/types'
import {
  overwriteRequestBody,
  overwriteRequestHeaders,
  overwriteRequestPathIdVariables,
  overwriteRequestPathVariables,
  overwriteRequestQueryParams
} from '.'

export const applyOverwrites = (
  pmOperations: PostmanMappedOperation[],
  overwriteSetting: OverwriteRequestConfig
): PostmanMappedOperation[] => {
  return pmOperations.map(pmOperation => {
    // overwrite request body
    overwriteSetting?.overwriteRequestBody &&
      overwriteRequestBody(overwriteSetting.overwriteRequestBody, pmOperation)

    // overwrite request query params
    overwriteSetting?.overwriteRequestQueryParams &&
      overwriteRequestQueryParams(overwriteSetting.overwriteRequestQueryParams, pmOperation)

    // overwrite request path id variables
    overwriteSetting?.overwriteRequestPathIdVariables &&
      overwriteRequestPathIdVariables(overwriteSetting.overwriteRequestPathIdVariables, pmOperation)

    // overwrite request path variables
    overwriteSetting?.overwriteRequestPathVariables &&
      overwriteRequestPathVariables(overwriteSetting.overwriteRequestPathVariables, pmOperation)

    // overwrite request headers
    overwriteSetting?.overwriteRequestHeaders &&
      overwriteRequestHeaders(overwriteSetting.overwriteRequestHeaders, pmOperation)

    return pmOperation
  })
}
