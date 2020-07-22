import api from './apiConfig'

export const getProducts = async () => {
  try {
      const response = await api.get(`/stores/1/products`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const getProduct = async id => {
  try {
      const response = await api.get(`/products/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}


export const createProduct = async (id, product_info) => {
  try {
    const response = await api.post(`/stores/${id}/products`, { product: product_info } )
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateProduct = async (id, product) => {
  try {
      const response = await api.put(`store/store_id/products/${id}`, product)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteProduct = async id => {
  try {
      const response = await api.delete(`store/store_id/products/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}