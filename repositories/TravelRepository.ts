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
    params: {
      start_at: params?.startAt,
      end_at: params?.endAt,
      institution_id: params?.institutionId,
      per_page: params?.perPage,
      page: params?.page
    },
    data: null
  })
}
