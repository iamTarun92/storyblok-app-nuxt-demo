import Vue from 'vue'


import Grid from '~/components/Grid.vue'
import Feature from '~/components/Feature.vue'
import FeaturedArticles from '~/components/FeaturedArticles.vue'
import ArticleTeaser from '~/components/ArticlesTeaser.vue'
import Page from '~/components/Templates/Page'
import Hero from '~/components/Modules/Hero'
import RichTextContent from '~/components/Modules/RichTextContent'
import RichTextDoubleBlocks from '~/components/Modules/RichText_DoubleBlocks'
import RichText_ContentBottom from '~/components/Modules/TitleBlock'
import Teaser from '~/components/Modules/Teaser'
import Btn from '~/components/Elements/Btn'
import FeaturedIn from '~/components/Modules/FeaturedIn'

Vue.component('page', Page)
Vue.component('RichText_Content', RichTextContent)
Vue.component('RichText_ContentBottom', RichText_ContentBottom)
Vue.component('btn', Btn)
Vue.component('hero', Hero)
Vue.component('teaser', Teaser)
Vue.component('grid', Grid)
Vue.component('feature', Feature)
Vue.component('featured-articles', FeaturedArticles)
Vue.component('article-teaser', ArticleTeaser)
Vue.component('RichText_DoubleBlock', RichTextDoubleBlocks)
Vue.component('FeaturedIn', FeaturedIn)
