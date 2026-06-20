
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/services"
  },
  {
    "renderMode": 2,
    "route": "/appointment"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1093, hash: '220adc4b29d940dc07bcb69e4c22dd1e4d133cb2816a62546baccb8a8f9f9f6c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 964, hash: '5289941fbbb82fcfd0f80ce37957ce30b3cfd7e4597938dfcda7114211613afc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'services/index.html': {size: 19089, hash: 'a5968f5c2383368b87603210930877083f33ebef2f5336491321d2107832b022', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'index.html': {size: 23166, hash: '7c1a6dafa93f8cc6a8623b3691e8e917eb4c93f63ea44699b137f97de38fbc39', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 21596, hash: '128b324d04d45f790d40e93d1abd90111e5dd2ca6f3c1582542ebfc7c137faf9', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 17241, hash: '2c8b3c6a1f2c18005420a3051559850786dccb898e64239e76e93f248e0065c1', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'appointment/index.html': {size: 18398, hash: '322ad814eeb116cde416acd4ac5d4c5f135c800838875a73e76efc9f062db007', text: () => import('./assets-chunks/appointment_index_html.mjs').then(m => m.default)},
    'styles-FXQR7HQM.css': {size: 1361, hash: 'DOMpuoHMYfE', text: () => import('./assets-chunks/styles-FXQR7HQM_css.mjs').then(m => m.default)}
  },
};
