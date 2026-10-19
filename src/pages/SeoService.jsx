import ServicePageTemplate from '../components/ServicePageTemplate'
import { servicePages } from '../data/servicesData'

export default function SeoService() {
  return <ServicePageTemplate page={servicePages['/seo']} />
}
