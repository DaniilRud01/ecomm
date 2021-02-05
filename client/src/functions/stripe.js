import axios from 'axios'

export const createPayment = async (authtoken, coupon) => {
    return await axios.post(`${process.env.REACT_APP_API}/create-payment`, { couponApplied:coupon }, {headers:{
        authtoken
        }})
}