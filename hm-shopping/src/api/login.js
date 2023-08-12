import request from '@/utils/request'

// 请求图形验证码
export const getPicCode = () => {
  return request.get('/captcha/image')
}

// 请求短信验证码
export const getMsgCode = (captchaCode, captchaKey, mobile) => {
  return request.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchaKey,
      mobile
    }
  })
}

// 请求登录
export const codeLogin = (mobile, smsCode) => {
  return request.post('/passport/login', {
    header: {
      platform: 'H5'
    },
    form: {
      isParty: false,
      partyData: {},
      mobile,
      smsCode
    }
  })
}
