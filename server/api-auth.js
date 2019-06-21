const csurf = require('csurf')
function apiAuth (req, res, next) {
  if (!req.headers['authorization'] && req.user && req.user.token) {
    req.headers['authorization'] = `Bearer ${req.user.token}`
  }
  if (req.user && req.user.token) {
    res.cookie('XSRF-TOKEN', req.csrfToken())
  }
  const originalRedirect = res.redirect
  let prefix
  if (req.query.cover) {
    prefix = '/images/resize/240/0/'
  } else {
    prefix = /asset/
  }
  res.redirect = function (url) {
    originalRedirect.call(this, `${prefix}${encodeURIComponent(url)}`)
  }
  next()
}

module.exports = [csurf(), apiAuth]
