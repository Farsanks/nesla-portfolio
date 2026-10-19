import ServicePageTemplate from '../components/ServicePageTemplate'
import { servicePages } from '../data/servicesData'

export default function GraphicDesign() {
  return <ServicePageTemplate page={servicePages['/graphic-design']} />
}
