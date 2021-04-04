import api from '@/lib/api'

import TravelParamsInterface from '@/types/TravelParamsInterface'

/**
 * Fetch all the travels
 *
 * @param {TravelParamsInterface} params Request parameters.
 * @return {Promise}
 */
export const all = (params?: TravelParamsInterface): Promise<any> => {
  return api.get('/travels.json', {
    params,
    data: null
  })
}
