import type { ComponentType, CSSProperties, ReactNode } from 'react'
import type { Art } from './components/Decor'
import { BUNNY_STORE_URL, CHROME_STORE_URL_STACKPICKER, CHROME_STORE_URL_WEBHARVEST, CONTACT_EMAIL, TRANSLANGATED_SUPPORT_URL, TRANSLANGATED_URL } from './constants'
import translangatedIcon from './assets/translangated-icon.png'
import translangatedBanner from './assets/translangated-banner.png'
import pricestoryIcon from './assets/pricestory-icon.png'
import pricestoryBanner from './assets/pricestory-banner.png'
import bannerFigure from './figures/banner'
import stackpickerIcon from './assets/stackpicker-icon.png'
import webharvestIcon from './assets/webharvest-icon.png'
import bunnyIcon from './assets/bunny-icon.png'
import bunnyReminder from './assets/bunny-reminder.png'

import StackPickerFigure from './figures/stackpicker/figure'
import WebHarvestFigure from './figures/webharvest/figure'
import BunnyFigure from './figures/bunny/figure'

export interface Product {
  key: string
  category: 'extension' | 'software' | 'plugin'
  brand: [string, string]
  sticker: Art
  name: string
  path: string
  fig: string
  kind: string
  version: string
  icon: string
  summary: string
  pitch: string
  lede: string
  useCases: [string, string][]
  Figure: ComponentType<{ fig?: string }>
  store: { label: string; href?: string; platform: 'chrome' | 'windows' | 'wordpress' }
  specs: [string, string][]
  featuresTitle: string
  features: [string, string][]
  steps: [string, string][]
  shot?: { src: string; alt: string; caption: string }
  privacy: ReactNode
  links: { label: string; to: string }[]
}

export const products: Product[] = [
  {
    key: 'stackpicker',
    category: 'extension',
    brand: ['#6366f1', '#38bdf8'],
    sticker: 'atom',
    name: 'StackPicker',
    path: '/stackpicker',
    fig: 'Fig 1',
    kind: 'Chrome extension',
    version: '1.1.0',
    icon: stackpickerIcon,
    summary: 'Competitive intelligence on any website, in one click.',
    pitch: 'Know the stack before the call.',
    lede: 'See the platform, CMS, analytics, hosting and frameworks behind any prospect or competitor website, grouped by category, in one click. Qualify leads and prepare pitches with facts instead of guesses.',
    useCases: [
      ['Sales prospecting', 'Qualify leads by the platform they run on, such as Shopify stores or WordPress sites, before you reach out.'],
      ['Agency pitches', 'Walk into the first meeting already knowing the client’s CMS, hosting and marketing tools.'],
      ['Competitor research', 'See which analytics, marketing and e-commerce tools your competitors chose.'],
      ['Technical due diligence', 'Check a site’s frameworks, servers and CDN in seconds instead of reading its source.'],
    ],
    Figure: StackPickerFigure,
    store: { label: 'Add to Chrome', href: CHROME_STORE_URL_STACKPICKER, platform: 'chrome' },
    specs: [
      ['Technologies', '3,500+ from 3,599 fingerprints'],
      ['Evidence', 'Script globals, DOM, script URLs, meta tags, HTML, cookies, headers'],
      ['Runs', 'Only when you click its icon'],
      ['Permissions', 'activeTab and scripting, nothing else'],
      ['Sends', 'Nothing. No account, no tracking'],
      ['Price', 'Free, GPL-3.0'],
    ],
    featuresTitle: 'What it detects',
    features: [
      ['JavaScript frameworks', 'React, Next.js, Vue, Nuxt, Angular, Svelte, Astro, Remix, Qwik, htmx'],
      ['CMS and site builders', 'WordPress, Drupal, Ghost, Webflow, Wix, Squarespace, Framer'],
      ['E-commerce', 'Shopify, WooCommerce, Magento, BigCommerce'],
      ['Backend', 'PHP, Laravel, Django, Rails, ASP.NET, Express'],
      ['Servers and infrastructure', 'Nginx, Apache, LiteSpeed, Cloudflare, Fastly, Vercel, Netlify, AWS'],
      ['Analytics and marketing', 'Google Analytics, Tag Manager, Meta Pixel, Hotjar, PostHog, HubSpot'],
      ['UI and libraries', 'Tailwind, Bootstrap, Material UI, jQuery, GSAP, Three.js'],
    ],
    steps: [
      ['Open any website', 'Go to the page you want to know about.'],
      ['Click StackPicker', 'Detection starts only now, on the tab you clicked.'],
      ['Read the stack', 'Technologies appear grouped by category, from the framework down to the server.'],
    ],
    privacy: 'StackPicker reads the page you clicked on and compares it with a database that ships inside the extension. Nothing is stored or sent anywhere, and it never runs in the background.',
    links: [
      { label: 'Support', to: '/stackpicker/support' },
      { label: 'Privacy', to: '/stackpicker/privacy' },
    ],
  },
  {
    key: 'webharvest',
    category: 'extension',
    brand: ['#10b981', '#a3e635'],
    sticker: 'splatGreen',
    name: 'WebHarvest',
    path: '/webharvest',
    fig: 'Fig 2',
    kind: 'Chrome extension',
    version: '0.3.0',
    icon: webharvestIcon,
    summary: 'Turn any web page into a clean spreadsheet.',
    pitch: 'From web page to spreadsheet in one scan.',
    lede: 'Extract products and prices, contacts, tables, images, links and SEO data from any page, then export to CSV, JSON or Word. No copy-paste, no scripts, no account.',
    useCases: [
      ['Competitor pricing', 'Export a rival’s category page with names, prices, sale prices, stock and ratings in one sheet.'],
      ['Lead lists', 'Pull emails, phone numbers, social profiles and addresses from directory and contact pages.'],
      ['Catalogue moves', 'Collect product data from an old store to move it into a new one.'],
      ['SEO and brand audits', 'Check titles, meta, headings and Open Graph, and grab a site’s colours and fonts as CSS variables.'],
    ],
    Figure: WebHarvestFigure,
    store: { label: 'Add to Chrome', href: CHROME_STORE_URL_WEBHARVEST, platform: 'chrome' },
    specs: [
      ['Sections', 'Products, images, links, tables, contacts, SEO and meta'],
      ['Products from', 'JSON-LD, microdata, and a detector for shops with neither'],
      ['Prices', '20+ currencies and number formats'],
      ['Design', 'Colours by coverage, fonts, type scale, eyedropper'],
      ['Exports', 'CSV, JSON and Word'],
      ['Runs', 'In your browser. No account, no server'],
    ],
    featuresTitle: 'What a scan gives you',
    features: [
      ['Products', 'Name, price, sale price, stock, brand, SKU, rating, reviews, image and link, each tagged with where it came from.'],
      ['Images', 'The largest size of every image, lazy-loaded ones and CSS backgrounds included. Filter by size, download one or all.'],
      ['Links', 'Every link with its text, filtered by internal or external, with nofollow marked.'],
      ['Tables', 'Each data table with a preview. Copy it straight into a spreadsheet or save it as CSV.'],
      ['Contacts', 'Emails, phone numbers with a country or area code, social profiles, business name and address.'],
      ['SEO and meta', 'Title and description length checks, canonical, robots, language, H1 count, Open Graph and the heading outline.'],
      ['Design', 'The palette weighted by how much of the page each colour covers, font families and the type scale, copied as CSS variables.'],
    ],
    steps: [
      ['Open the side panel', 'Click the WebHarvest icon on any page.'],
      ['Press Scan page', 'The page is read once and sorted into sections, each with a count.'],
      ['Export', 'Save the open section as CSV, or everything as JSON or Word.'],
    ],
    privacy: 'Everything runs in your browser. There is no account and no server of ours: what you scan stays with you until you export it.',
    links: [
      { label: 'Support', to: '/webharvest/support' },
      { label: 'Privacy', to: '/webharvest/privacy' },
    ],
  },
  {
    key: 'bunny',
    category: 'software',
    brand: ['#a78bfa', '#5eead4'],
    sticker: 'sparkles',
    name: 'Bunny',
    path: '/bunny',
    fig: 'Fig 3',
    kind: 'Windows app',
    version: '1.0.0',
    icon: bunnyIcon,
    summary: 'A private AI assistant that runs on your own PC.',
    pitch: 'AI on your desk, not in the cloud.',
    lede: 'An AI assistant for Windows that runs entirely on your PC. Ask questions, find your files, change settings by typing, take notes and never miss a meeting, without your words leaving the machine.',
    useCases: [
      ['Confidential work', 'Use AI on client or internal material without sending it to a cloud service.'],
      ['Meetings', 'Connect Google Calendar and get reminded before every meeting, with a one-click Join.'],
      ['Notes and follow-ups', 'Type "remind me at 5pm to call the client" and it becomes a note with a reminder.'],
      ['Hands-free settings', 'Switch Bluetooth, Wi-Fi, volume, brightness or dark mode by typing a sentence.'],
      ['Lost files', 'Type "find my resume pdf file" and get the matches from your folders, newest first, with Open and Show in folder.'],
    ],
    Figure: BunnyFigure,
    store: { label: 'Get it from Microsoft Store', href: BUNNY_STORE_URL, platform: 'windows' },
    specs: [
      ['AI model', 'Qwen2.5 1.5B, running on your PC'],
      ['Download', '1.1 GB once, then it works offline'],
      ['Commands', 'Bluetooth, Wi-Fi, volume, brightness, dark mode, lock, screenshot, open apps'],
      ['File search', 'Desktop, Documents, Downloads, Pictures, Videos, Music and OneDrive'],
      ['Reminders', 'Notes, and Google Calendar meetings 5 to 60 minutes ahead'],
      ['Paid models', 'Optional: OpenAI, Anthropic, Gemini, Groq, OpenRouter'],
      ['Open chat', 'Click Bunny or press Alt+Space (press again to close)'],
      ['Show or hide Bunny', 'Alt+B'],
    ],
    featuresTitle: 'What Bunny does',
    features: [
      ['A character, not a window', 'A 3D toy robot that watches your mouse, blinks, waves for reminders, and can be dragged anywhere along the taskbar.'],
      ['AI on your PC', 'Chats run on your own computer with no account or key. Older messages drop out of its memory on their own.'],
      ['Windows from chat', 'Type "turn on Bluetooth" or "brightness 70%" and fixed rules run it. Questions are offered first, so nothing happens by accident.'],
      ['Find your files', 'Type "open image.webp" or "where is report.docx" and Bunny searches your folders, then opens the file or shows it in File Explorer. Programs are only shown, never run.'],
      ['Notes and reminders', 'A Notes tab with search and autosave. "Remind me at 5pm to call mom" sets one from chat.'],
      ['Calendar', 'Connect Google Calendar read-only, and Bunny rises before each meeting with Join meeting and Snooze.'],
      ['Themes', 'Lavender and Mint, Coral and Sky, or your own colours, for Bunny and the chat.'],
    ],
    steps: [
      ['Install', 'Get Bunny from the Microsoft Store. On first run it downloads its free AI model once, about 1.1 GB.'],
      ['Ask', 'Click Bunny or press Alt+Space and type a question or a command. Alt+B hides or shows Bunny.'],
      ['Get reminded', 'Add notes or connect your calendar, and Bunny rises when it is time.'],
    ],
    shot: { src: bunnyReminder, alt: 'Bunny rising above the Windows taskbar under a reminder card with Open note and Snooze 5 min buttons', caption: 'A note reminder in the app: Bunny rises from the taskbar with Open note and Snooze.' },
    privacy: 'Chats with the built-in model, notes, settings and file searches stay on your PC. Bunny goes online only for the one-time model download and for features you turn on, such as a paid model or your calendar.',
    links: [
      { label: 'Privacy', to: '/bunny/privacy' },
      { label: 'Contact', to: `mailto:${CONTACT_EMAIL}?subject=Bunny` },
    ],
  },
  {
    key: 'translangated',
    category: 'plugin',
    brand: ['#3b5bdb', '#2dd4bf'],
    sticker: 'lightning',
    name: 'Translangated',
    path: '/translangated',
    fig: 'Fig 4',
    kind: 'WordPress plugin',
    version: '1.0.0',
    icon: translangatedIcon,
    summary: 'Make a WordPress site multilingual, for free.',
    pitch: 'Every language. No paid tier.',
    lede: 'Translate every page, post, menu, widget, WooCommerce product and theme string from the front end, while you see the live page. No licence key, no paid tiers and no word limits: every feature is included.',
    useCases: [
      ['Multilingual stores', 'Translate WooCommerce products, cart, checkout and order emails, so customers buy in their own language.'],
      ['Agencies', 'Hand clients a translated site without per-word fees or a licence key to renew.'],
      ['International SEO', 'Translated URLs, titles and meta, hreflang tags and sitemaps, so search engines index each language.'],
      ['Fast launches', 'Machine-translate a whole site with your own DeepL or Google key, then polish it in the visual editor.'],
    ],
    Figure: bannerFigure(translangatedBanner, 'Translangated banner: translate your WordPress site into any language, with greetings in English, Spanish, French, German and Japanese'),
    store: { label: 'Get it on WordPress.org', href: TRANSLANGATED_URL, platform: 'wordpress' },
    specs: [
      ['Editor', 'Visual, on the live page'],
      ['Machine translation', 'DeepL (Free or Pro) or Google, with your own key'],
      ['Languages', 'Unlimited, including regional variants like pt_BR'],
      ['Works with', 'Gutenberg, Elementor, WPBakery, WooCommerce'],
      ['Requires', 'WordPress 6.9+, PHP 7.4+'],
      ['Price', 'Free, every feature included'],
    ],
    featuresTitle: 'What Translangated does',
    features: [
      ['Visual editor', 'Click any text on the page and type its translation, with a live preview. Images, alt text and links too.'],
      ['String translation', 'Theme and plugin text, emails and URL slugs, in the same editor.'],
      ['Automatic translation', 'DeepL or Google Translate with your own API key. Review and edit every machine translation.'],
      ['Multilingual SEO', 'Translated slugs, titles, meta and social tags, language URLs like example.com/es/, hreflang and sitemaps.'],
      ['Language switcher', 'Floating, in a menu, as a shortcode, a Gutenberg block or an Elementor widget, with flags.'],
      ['Visitor language', 'First-time visitors land in their browser language. Works with page caches and never redirects crawlers.'],
    ],
    steps: [
      ['Install', 'Add Translangated from Plugins → Add New and choose your languages.'],
      ['Translate', 'Open any page in the visual editor and click text to translate it, or run automatic translation.'],
      ['Publish', 'Turn a language on when it is ready; the switcher and language URLs appear.'],
    ],
    privacy: 'Translations are stored in your own WordPress database. Translangated contacts no outside service unless you turn on automatic translation with your own DeepL or Google key.',
    links: [
      { label: 'Support', to: TRANSLANGATED_SUPPORT_URL },
      { label: 'Contact', to: `mailto:${CONTACT_EMAIL}?subject=Translangated` },
    ],
  },
  {
    key: 'pricestory',
    category: 'plugin',
    brand: ['#4f46e5', '#22c55e'],
    sticker: 'sparkles',
    name: 'PriceStory',
    path: '/pricestory',
    fig: 'Fig 5',
    kind: 'WooCommerce plugin',
    version: '1.0.0',
    icon: pricestoryIcon,
    summary: 'A price history chart on every WooCommerce product.',
    pitch: 'Show shoppers the story behind a price.',
    lede: 'Adds a Price history button under the price on every product page. One click opens a chart of each rise and drop with the lowest and highest price, so shoppers can see a sale is a real sale.',
    useCases: [
      ['Honest sales', 'Prove a discount is real: shoppers see what the price was before and after.'],
      ['Ready-to-buy shoppers', 'Badges like "Lowest price ever" or "23% below its highest price" help a customer decide today.'],
      ['Big-ticket stores', 'Electronics and other products whose prices move often and get compared before checkout.'],
      ['Store owners', 'See every price change per product without keeping a spreadsheet.'],
    ],
    Figure: bannerFigure(pricestoryBanner, 'PriceStory banner: a Price history popup with current, lowest and highest price and a step chart of rises and drops'),
    store: { label: 'Coming to WordPress.org', platform: 'wordpress' },
    specs: [
      ['Shows', 'Step chart, current, lowest and highest price, recent changes'],
      ['Ranges', '1M, 3M, 6M, 1Y and All'],
      ['Records', 'Every price change: editor, quick and bulk edit, imports, REST API, scheduled sales'],
      ['Products', 'Simple, external and variable (lowest variation price)'],
      ['Requires', 'WooCommerce 7.0+, WordPress 6.0+, PHP 7.4+'],
      ['Settings', 'None: activate it and it works'],
    ],
    featuresTitle: 'What PriceStory does',
    features: [
      ['Price history button', 'A small button under the price on every single product page.'],
      ['Step chart', 'Green dots for drops, red for rises. Hover to see the date, price and change.'],
      ['Deal badge', '"Lowest price ever" or "23% below its highest price".'],
      ['Time ranges', '1M to All, shown once there is enough history.'],
      ['Recent changes', 'The latest price changes with the amount and percentage of each.'],
      ['Phones and screen readers', 'A responsive popup with keyboard and screen reader support.'],
    ],
    steps: [
      ['Install', 'Activate PriceStory on a WooCommerce store.'],
      ['Record', 'From then on, every price change is saved automatically.'],
      ['Show', 'Shoppers click Price history under the price to open the chart.'],
    ],
    privacy: 'No settings, no external services and no tracking. Price history is stored in your own database, and the chart library ships inside the plugin.',
    links: [
      { label: 'Contact', to: `mailto:${CONTACT_EMAIL}?subject=PriceStory` },
    ],
  },
]

export const categories = [
  {
    key: 'extensions',
    title: 'Chrome extensions',
    short: 'Extensions',
    blurb: 'Research tools for sales, marketing, agency and e-commerce teams. They work on the page you are viewing and keep your data in your browser.',
    products: products.filter(p => p.category === 'extension'),
  },
  {
    key: 'software',
    title: 'Software',
    short: 'Software',
    blurb: 'Desktop software for people who want AI help without handing their data to a cloud service.',
    products: products.filter(p => p.category === 'software'),
  },
  {
    key: 'plugins',
    title: 'WordPress plugins',
    short: 'Plugins',
    blurb: 'Free plugins for WordPress and WooCommerce sites, with every feature included. Your data stays in your own database.',
    products: products.filter(p => p.category === 'plugin'),
  },
]

export const categoryOf = (p: Product) => categories.find(c => c.products.includes(p))!

export const brandStyle = (p: Product) => ({ '--brand-a': p.brand[0], '--brand-b': p.brand[1] }) as CSSProperties
