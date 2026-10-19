import ServicePageTemplate from '../components/ServicePageTemplate'
import { servicePages } from '../data/servicesData'

export default function GoogleAds() {
  return <ServicePageTemplate page={servicePages['/google-ads']} />
}
