const qiniu = require('qiniu')
const AK =  '16HaNdopyMmYvaL1MQ_wpUVxN_m_Ttv32XOYgWpK'//在个人中心内
const SK = 'hOTUXU--wJyZ9UvhYkX-iqZqTE6veraRjRmoahTy'
const bucket = 'mqnlmqnl'//空间名称
//鉴权对象mac
const mac = new qiniu.auth.digest.Mac(AK, SK)
//获取上传的token
const options = {
	scope: bucket,
	expires: 3600 * 24 //到期时间
}
const putPolicy = new qiniu.rs.PutPolicy(options)
const UPLOAD_TOKEN = putPolicy.uploadToken(mac)

module.exports = {
	UPLOAD_TOKEN
}
