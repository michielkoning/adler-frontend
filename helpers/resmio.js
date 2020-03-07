;(function() {
  'use strict'

  function getScriptUrl(re) {
    const scripts = document.getElementsByTagName('script')
    let element
    let src

    for (let i = 0; i < scripts.length; i++) {
      element = scripts[i]

      src = element.getAttribute ? element.getAttribute('src') : el.src

      if (src && re.test(src)) {
        return src
      }
    }
    return null
  }

  function getQueryParameters(query) {
    // Split the query string on &amp;, with fallback to legacy &
    const args =
      query.search('&amp;') != -1 ? query.split('&amp;') : query.split('&')
    const params = {}
    let pair
    let key
    let value

    function decode(string) {
      return decodeURIComponent(string || '').replace('+', ' ')
    }

    for (let i = 0; i < args.length; i++) {
      pair = args[i].split('=')
      key = decode(pair.shift())
      value = decode(pair ? pair[0] : null)

      params[key] = value
    }
    return params
  }

  function parseCssColor(color) {
    if (color && color.match(/(^[0-9a-f]{3}$)|(^[0-9a-f]{6}$)/i)) {
      return '%23' + color
    } else {
      return color
    }
  }

  function Widget() {
    const url = getScriptUrl(
      /^((http|https):)?\/\/static.resmio.com\/static\/nl\/widget\.js/,
    )
    const params = getQueryParameters(url.replace(/^.*\#/, ''))
    if (!params.id) {
      if (window.console) console.log('missing id for resmio widget')
      return
    }
    const id = params.id
    const resourceGroup = params.resourceGroup || ''
    const backgroundColor = parseCssColor(params.backgroundColor) || '%23fff'
    const color = parseCssColor(params.color) || ''
    const linkBackgroundColor = parseCssColor(params.linkBackgroundColor) || ''
    const commentsDisabled = params.commentsDisabled || ''
    const newsletterSubscribe = params.newsletterSubscribe || ''
    const name = params.name || ''
    const email = params.email || ''
    const phone = params.phone || ''
    const comment = params.comment || ''

    const host = window.location.hostname

    const width = params.width || '275px'
    const height = params.height || '400px'
    const nextAvailability = params.nextAvailability || ''

    const output_id = 'resmio-' + id
    const out =
      '<iframe src="//app.resmio.com/' +
      params.id +
      '/widget?source=' +
      host +
      '&amp;resourceGroup=' +
      resourceGroup +
      '&amp;backgroundColor=' +
      backgroundColor +
      '&amp;color=' +
      color +
      '&amp;linkBackgroundColor=' +
      linkBackgroundColor +
      '&amp;commentsDisabled=' +
      commentsDisabled +
      '&amp;newsletterSubscribe=' +
      newsletterSubscribe +
      '&amp;name=' +
      name +
      '&amp;email=' +
      email +
      '&amp;phone=' +
      phone +
      '&amp;comment=' +
      comment +
      '&amp;nextAvailability=' +
      nextAvailability +
      '" width="' +
      width +
      '" height="' +
      height +
      '" frameborder="0"><p>Your browser does not support iframes.</p></iframe>'
    document.getElementById(output_id).innerHTML = out
  }
  new Widget()
})()
