import axios from "axios"

// upload image and return image url
export const uploadImage = async imageFile => {
  const imageData = new FormData()
  imageData.append('image', imageFile)

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imbb_api}`,
    imageData
  )
  // image url response from imgbb
  return data?.data?.display_url
}

// save or update user in db
export const saveUserDataInDB = async user => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_base_url}/user`,
    user
  )

  console.log(data)
}
