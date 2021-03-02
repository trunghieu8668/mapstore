export const MENUITEMS = [
  {
    path: '/', title: 'Trang chủ', type: 'oneLink',
  },
  {
    path: '/gioi-thieu.html', title: 'Giới thiệu', type: 'oneLink',
  },    
  {
     title: 'Tỉnh/Thành phố', megaMenu: true, megaMenuType: 'small', type: 'sub', children: [
        {
           title: 'Elements1', type: 'sub', children: [
              { path: '/elements/alerts', title: 'Alerts', type: 'link', icon: 'alert' },
              { path: '/elements/accordion', title: 'Accordion', type: 'link', icon: 'layout-accordion-merged' },
              { path: '/elements/boxshadow', title: 'Box Shadow', type: 'link', icon: 'layers' },
              { path: '/elements/button', title: 'Buttons', type: 'link', icon: 'write' },
              { path: '/elements/contact', title: 'Contact', type: 'link', icon: 'map-alt' },]
        },
        {
           title: 'Elements2', type: 'sub', children: [
              { path: '/elements/event-schedule', title: 'Event-Schedule', type: 'link', icon: 'list' },
              { path: '/elements/gallery', title: 'Gallery', type: 'link', icon: 'gallery' },
              { path: '/elements/pricing', title: 'Pricing', type: 'link', icon: 'money' },
              { path: '/elements/counter', title: 'Counter', type: 'link', icon: 'time' },
              { path: '/elements/count-down', title: 'Countdown', type: 'link', icon: 'alarm-clock' }]
        },
        {
           title: 'Elements3', type: 'sub', children: [
              { path: '/elements/progressbar', title: 'Progress Bar', type: 'link', icon: 'bar-chart' },
              { path: '/elements/testimonial', title: 'Testimonial', type: 'link', icon: 'thought' },
              { path: '/elements/video', title: 'Video', type: 'link', icon: 'video-camera' },
              { path: '/elements/service', title: 'Service', type: 'link', icon: 'headphone' },
              { path: '/elements/subscribe', title: 'Subscribe', type: 'link', icon: 'share-alt' }]
        }
     ]
  },
  {
     title: 'Ngành nghề', megaMenu: true, megaMenuType: 'medium', type: 'sub', children: [
        {
           title: 'Portfolio-Basic', type: 'link', children: [
              { path: '/portfolio/basic-2-grid', title: 'Basic – 2 Grid', type: 'link' },
              { path: '/portfolio/basic-3-grid', title: 'Basic – 3 Grid', type: 'link' },
              { path: '/portfolio/basic-4-grid', title: 'Basic – 4 Grid', type: 'link' },
              { path: '/portfolio/portfolio-title-2-col', title: 'Basic W Tittle – 2 Grid', type: 'link' },
              { path: '/portfolio/portfolio-title-3-col', title: 'Basic W Tittle – 3 Grid', type: 'link' },
              { path: '/portfolio/portfolio-title-4-col', title: 'Basic W Tittle – 4 Grid', type: 'link' },
              { path: '/portfolio/portfolio-parallex', title: 'Parallex', type: 'link' },
              { path: '/portfolio/centered-slide', title: 'Centered Slides', type: 'link' },
              { path: '/portfolio/vertical-slide', title: 'Vertical Slides', type: 'link' },
              { path: '/portfolio/multiple-carousel', title: '4 Slide With Center Slider', type: 'link' }]
        },
        {
           title: 'Portfolio-Details', type: 'link', children: [
              { path: '/portfolio/portfolio-detail-1', title: 'Container Layout', type: 'link' },
              { path: '/portfolio/portfolio-detail-2', title: 'Full Width', type: 'link' },
              { path: '/portfolio/portfolio-detail-3', title: 'With Bg Bredcrumb', type: 'link' },
              { path: '/portfolio/portfolio-detail-4', title: 'Details With Slider', type: 'link' },
              { path: '/portfolio/portfolio-detail-5', title: 'Video Portfolio', type: 'link' },
              { path: '/portfolio/portfolio-detail-6', title: 'Two Image Portfolio', type: 'link' },
              { path: '/portfolio/portfolio-detail-7', title: 'Left Side Image Portfolio', type: 'link' }]
        },
        {
           title: 'Trending Layout', type: 'link', children: [
              { path: '/portfolio/creative-1', title: 'Trending Layout 1', type: 'link' },
              { path: '/portfolio/creative-2', title: 'Trending Layout 2', type: 'link' },
              { path: '/portfolio/creative-3', title: 'Trending Layout 3', type: 'link' },
              { path: '/portfolio/creative-4', title: 'Trending Layout 4', type: 'link' },
              { path: '/portfolio/modern-4', title: 'Trending Layout 5', type: 'link' },
              { path: '/portfolio/modern-3', title: 'Trending Layout 6', type: 'link' },
              { path: '/portfolio/modern-2', title: 'Trending Layout 7', type: 'link' }]
        },
        {
           title: 'Portfolio-Masonary', type: 'link', children: [
              { path: '/portfolio/full-width-2-grid', title: 'Full-Width – 2 Grid', type: 'link' },
              { path: '/portfolio/full-width-3-grid', title: 'Full-Width – 3 Grid', type: 'link' },
              { path: '/portfolio/full-width-4-grid', title: 'Full-Width – 4 Grid', type: 'link' }]
        },
     ]
  },
  
]
