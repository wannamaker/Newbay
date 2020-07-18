import api from './apiConfig'

export const getStores = async () => {
  try {
      const response = await api.get('/stores')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getUserStores = async (id) => {
  try {
      const response = await api.get(`${id}/stores`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const getStore = async id => {
  try {
      const response = await api.get(`/stores/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createStore = async Store => {
  try {
    const response = await api.post('/stores', {store: Store})
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateStore = async (id, Store) => {
  try {
      const response = await api.put(`/stores/${id}`, Store)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteStore = async id => {
  try {
      const response = await api.delete(`/stores/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}