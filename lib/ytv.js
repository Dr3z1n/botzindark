const request = require('request')

async function ytsearch(search, headers) {
    return new Promise((resolve, reject) => {
        request({
            url: 'https://yt1s.io/api/ajaxSearch',
            method: 'POST',
            headers: headers.ytis,
            form: { 'q': search, 'vt': 'home' }
        }, function (error, response, body) {
            const parsed = JSON.parse(body)
            const searchers = []
            for (let i = 0; i < parsed.items.length; i++) {
                searchers.push({
                    url: 'https://www.youtube.com/watch?v=' + parsed.items[i].v,
                    title: parsed.items[i].t
                })
            }
            resolve(searchers)
        })
    })
};

async function ytv(url, needSearch = false) {
    return new Promise(async (resolve, reject) => {
        if (needSearch) {
          const search = await ytsearch(url)
          url = search[0].url
        }
        request({
            url: 'https://yt1s.io/api/ajaxSearch',
            method: 'POST',
            headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            form: { 'q': url, 'vt': 'mp4' }
        }, function (error, response, body) {
          const result = JSON.parse(body)
          var thumb = `https://i.ytimg.com/vi/${result.vid}/0.jpg`
          let quality = []
          Object.keys(result.links.mp4).map((i) => {
            quality.push(result.links.mp4[i].k)
          })
          console.log(quality);
          request({
            url: 'https://backend.svcenter.xyz/api/convert-by-45fc4be8916916ba3b8d61dd6e0d6994',
            method: 'POST',
            headers:  {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'x-requested-key': 'de0cfuirtgf67a'
            },
            form: {
              'v_id': result.vid,
              'ftype': 'mp4',
              'fquality': (quality[0] == '1080p') ? quality[3] : (quality[0] == '720p') ? quality[2] : (quality[0] == '480p') ? quality[1] : quality[0],
              'token': result.token,
              'timeExpire': result.timeExpires,
              'client': 'yt1s.io'
            }
          }, function (error, response, body) {
            request({
              url: `${JSON.parse(body).c_server}/api/json/convert`,
              method: 'POST',
              headers:  {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'x-requested-key': 'de0cfuirtgf67a'
                },
              form: {
                'v_id': result.vid,
                'ftype': 'mp4',
                'fquality': (quality[0] == '1080p') ? quality[3] : (quality[0] == '720p') ? quality[2] : (quality[0] == '480p') ? quality[1] : quality[0],
                'fname': result.title,
                'token': result.token,
                'timeExpire': result.timeExpires
              }
            }, function (error, response, body2) {
              resolve({
                dl_link: JSON.parse(body2).result,
                thumbnail: thumb,
                title: result.title,
                quality: (quality[0] == '1080p') ? quality[3] : (quality[0] == '720p') ? quality[2] : (quality[0] == '480p') ? quality[1] : quality[0],
                qualitys: quality,
                url: url,
                channel: result.a,
                needSearch: needSearch
              })
            })
          })
        })
    })
}


module.exports = {ytsearch, ytv}