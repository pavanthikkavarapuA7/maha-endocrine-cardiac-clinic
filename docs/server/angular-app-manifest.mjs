
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/maha-endocrine-cardiac-clinic/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/maha-endocrine-cardiac-clinic"
  },
  {
    "renderMode": 2,
    "route": "/maha-endocrine-cardiac-clinic/about"
  },
  {
    "renderMode": 2,
    "route": "/maha-endocrine-cardiac-clinic/services"
  },
  {
    "renderMode": 2,
    "route": "/maha-endocrine-cardiac-clinic/appointment"
  },
  {
    "renderMode": 2,
    "route": "/maha-endocrine-cardiac-clinic/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/maha-endocrine-cardiac-clinic",
    "route": "/maha-endocrine-cardiac-clinic/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1123, hash: 'ec8e4c9e2ccf2d5e38226f725a1c5f0d0cf9a07b1ff9e636b221c791739e6a5f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 994, hash: '1fe865f90f96791cd873a898421d7e9647659ad2bb841ea91dd196aacf61124c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 27269, hash: '90837e0bcc0a99e420364fd1923771c451e90dc33f1969dfd1de7cdfda0911db', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 19269, hash: 'a8ec87523760b5175d67498fef4a4f6a03c3cbfe025799bd89753e34d186c50b', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'appointment/index.html': {size: 18578, hash: '7d4a2821a4cfd2e80cde699bdf98b77f1cfb79055b3cd4a607b8925e1c9994a2', text: () => import('./assets-chunks/appointment_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 17421, hash: 'ddd1e52344e2ac4dcd6b5a4a5c3b4661578b2a752c1d0fe18bb188d7fcad242e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 26016, hash: '190b0e8883cb2d0a81379dbc8c3782d5742d3c1a0f181ce5f7ab915b78c84f1a', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-FXQR7HQM.css': {size: 1361, hash: 'DOMpuoHMYfE', text: () => import('./assets-chunks/styles-FXQR7HQM_css.mjs').then(m => m.default)}
  },
};
